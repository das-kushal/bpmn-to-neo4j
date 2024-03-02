import BpmnModdle from "bpmn-moddle";
import mapBPMNtoNeo4j from "./MapBPMNtoNeo4j.js";

import fs from "fs";

export default async (bpmnXML, neo4jDriver) => {
  const moddle = new BpmnModdle();

  const data = await moddle.fromXML(bpmnXML);

  // new part -> to clear the neo4j database each time we do this for a new file 17/12/2023
  const deletingQuery = `MATCH (n) DETACH DELETE n`;

  try {
    // Map BPMN elements to Neo4j nodes and relationships
    const neo4jArrData = mapBPMNtoNeo4j(data);
    for (let i = 0; i < neo4jArrData.length; i++) {
      const neo4jData = neo4jArrData[i];

      fs.writeFileSync("data2.json", JSON.stringify(data, null, 2));

      // NEW part
      const createNodeQueries = neo4jData.nodes?.map((node) => {
        console.log(`node is ${node}`);
        let nodeProperties = `id: '${node.id}', name: '${node.name}'`;

        // Check if the node has an annotation property
        if (node.annotation) {
          // Add the annotation property
          console.log("node has annotation");
          nodeProperties += `, annotation: '${node.annotation}'`;
        }
        // check if there is a loopCharacteristics property like loop, parallel multiple instance marker, sequential multiple instance marker
        if (node.marker) {
          console.log("node has marker");
          nodeProperties += `, marker: '${node.marker}'`;
        }
        // check if there is a event definitions property like message, signal, error etc.
        if (node.eventDefinitions) {
          console.log("node has eventDefinitions");
          nodeProperties += `, eventDef_type: '${node.eventDefinitions}'`;
        }

        return `
        CREATE (n_${node.id}: ${node.type} {
          ${nodeProperties}
        })
        `;
      });

      // Create relationships in Neo4j
      const createRelationshipQueries = neo4jData.relationships?.map(
        (relationship) => {
          return `
          MATCH (sourceNode:${relationship.source.type} { id: '${relationship.source.id}' }),
          (targetNode:${relationship.target.type} { id: '${relationship.target.id}' })
          CREATE (sourceNode)-[:${relationship.type}]->(targetNode)
          RETURN sourceNode, targetNode
          `;
        }
      );
      console.log("******INITIALISING SESSION**********");
      const session = neo4jDriver.session();

      // Run the Cypher queries in a transaction
      const txc = session.beginTransaction();
      try {
        const queries = [
          deletingQuery,
          ...createNodeQueries,
          ...createRelationshipQueries,
        ];
        queries.forEach(async (query) => await txc.run(query));
        console.log("Query completed");

        await txc.commit();
        console.log("committed");
      } catch (error) {
        console.log(error);
        await txc.rollback();
        console.log("rolled back");
      } finally {
        await session.close();
      }
      await session.close();
    }
  } catch (error) {
    console.error("Error converting BPMN to Neo4j:", error);
  }
};

// class neo4jData{
//   array nodes[];
//   array relationships[];
//   neo4jData subprocess[];
// };

// const neo4jData = {
//   nodes:[1,2, 3],
//   relationships: [ab, bc, cd],
//   subprocess: [
//     neo4jDataInner1: {
//       neo4jDataInnerInner1: {

//       }
//     },
//     neo4jDataInner2 : {

//     },

//   ]
// };

// TODO: Add the subprocesses to the neo4jData object
