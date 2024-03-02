import Process from "./utils/Process.js";

/**
 * @param {Object} bpmnData - BPMN data
 * @returns {Object} - Neo4j data
 * @description - This function takes the BPMN data and returns the Neo4j data with which we can create nodes and relationships in Neo4j
 */

export default (bpmnData) => {
  let neo4jData = {
    nodes: [],
    relationships: [],
  };
  /*  CHECKING SOME EDGE CASES */
  if (
    bpmnData === null ||
    bpmnData === undefined ||
    Object.keys(bpmnData).length === 0
  ) {
    return neo4jData;
  }

  const process = bpmnData.rootElement.rootElements[0];
  const references = bpmnData.references;

  // when there is a parent process its parent is null
  Process(process, references, neo4jData, null);

  return neo4jData;
};
