/**
 * @param {Object} process - The process object from the BPMN file
 * @param {Array} references - The references array from the BPMN file
 * @param {Object} neo4jData - The neo4jData object to be updated
 * @param {Object} parent - The parent object to be updated
 *
 * @returns {Object} - The updated neo4jData object
 *
 * @description - This function handles the process object from the BPMN file and updates the neo4jData object with the nodes and relationships from the process object
 */

const handleProcess = (process, references, neo4jData, parent) => {
  const sequenceFlows = [];
  const mapToFlow = {};

  // new part
  const tasks = [];
  const textAnnotations = [];
  const associations = [];
  const dataAssociationToRef = {};

  /* 
     task node (id actvity) - 
  
    text annotation (id annotation) -
 
    association - sourceRef is activity, targetRef is annotation
  
  */

  // NEW part

  process.artifacts?.forEach((artifact) => {
    if (artifact.$type === "bpmn:TextAnnotation") {
      // Extract text annotations
      console.log("artifact found!!");
      textAnnotations.push({
        id: artifact.id,
        text: artifact.text || "",
      });
    }
  });

  references.forEach((reference) => {
    if (reference.element.$type === "bpmn:Association") {
      // Extract associations
      console.log("association found!!");
      console.log(`reference is ${JSON.stringify(reference)}`);
      associations.push({
        id: reference.element.id,
        sourceRef: reference.property === "bpmn:sourceRef" ? reference.id : "",
        targetRef: reference.property === "bpmn:targetRef" ? reference.id : "",
      });
    }
  });

  //Data Association

  /*
    TO MAP DATA ASSOCIATION ID TO DATASTORE REFERENCE ID 
  */

  references.forEach((reference) => {
    if (
      reference.element.$type === "bpmn:DataInputAssociation" &&
      reference.property === "bpmn:sourceRef"
    ) {
      // Extract associations
      console.log("data input association found!!");
      console.log(`reference is ${JSON.stringify(reference)}`);
      dataAssociationToRef[reference.element.id] = reference.id;
    } else if (
      reference.element.$type === "bpmn:DataOutputAssociation" &&
      reference.property === "bpmn:targetRef"
    ) {
      // Extract associations
      console.log("data output association found!!");
      console.log(`reference is ${JSON.stringify(reference)}`);
      dataAssociationToRef[reference.element.id] = reference.id;
    }
  });

  process.flowElements.forEach((element) => {
    if (element.$type === "bpmn:SequenceFlow") {
      const newSeq = {
        id: element.id,
        name: element.name || "",
      };
      mapToFlow[element.id] = sequenceFlows.length;
      sequenceFlows.push(newSeq);
    } else {
      // ****** DONE: Add logic to handle the single node for a subprocess ******
      if (element.$type === "bpmn:SubProcess") {
        handleProcess(element, references, neo4jData, {
          parentId: element.id,
          parentName: element.name,
        });
      }
      const ele = element.$type.substring(5);

      let node = {
        id: element.id,
        name: element.name || `Unnamed ${ele}`,
        type: ele,
        annotation: "", // Initialize annotation property
        marker: "", // to add a marker property
        eventDefinitions: "",
        parent: parent, // add parent property only valid for subprocess
      };
      if (element.loopCharacteristics) {
        node = {
          ...node,
          marker: element.loopCharacteristics.$type.substring(5),
        };
      }

      if (element.eventDefinitions) {
        node = {
          ...node,
          eventDefinitions: element.eventDefinitions[0].$type.substring(5),
        };
      }
      if (node.type !== "DataObject") tasks.push(node);
    }
  });

  /*
    CREATE A RELATIONSHIP BETWEEN DATASTORE REFERENCE AND TASK USING THE MAPPING BETWEEN DATASTORE REFRENCE ID AND DATA ASSOCIATION ID
  */
  process.flowElements.forEach((element) => {
    if (element.dataInputAssociations) {
      element.dataInputAssociations.forEach((association) => {
        const targetRefId = dataAssociationToRef[association.id];
        const targetRef = tasks.find((t) => t.id === targetRefId);
        console.log(`targetRef (INPUt) is ${JSON.stringify(targetRef)}`);
        console.log(`targetRefId (INPUt) is ${JSON.stringify(targetRefId)}`);
        const database = {
          id: targetRefId,
          name: targetRef.name || `Database_${targetRef}`,
          type: targetRef?.type,
        };
        const targetNode = {
          type: element.$type.substring(5),
          id: element.id,
        };
        // Create relationship between task and database
        neo4jData.relationships.push({
          type: "DATA_INPUT_ASSOCIATION", // You can customize the relationship type
          source: database,
          target: targetNode,
        });
      });
    }
    if (element.dataOutputAssociations) {
      element.dataOutputAssociations?.forEach((association) => {
        const targetRefId = dataAssociationToRef[association.id];
        const targetRef = tasks.find((t) => t.id === targetRefId);
        console.log(`targetRef (OUTPUT) is ${JSON.stringify(targetRef)}`);
        console.log(`targetRefId (OUTPUT) is ${JSON.stringify(targetRefId)}`);
        const database = {
          id: targetRefId,
          name: targetRef.name || `Database_${targetRef}`,
          type: targetRef?.type,
        };
        const targetNode = {
          type: element.$type.substring(5),
          id: element.id,
        };

        // Create relationship between task and database
        neo4jData.relationships.push({
          type: "DATA_OUTPUT_ASSOCIATION", // You can customize the relationship type
          target: database,
          source: targetNode,
        });
      });
    }
  });

  // Map annotation texts to tasks based on associations
  for (let i = 0; i < associations.length - 1; i += 2) {
    let src = associations[i].sourceRef;
    let tgt = associations[i + 1].targetRef;
    if (src && tgt) {
      const task = tasks.find((task) => task.id === src);
      const annotation = textAnnotations.find(
        (annotation) => annotation.id === tgt
      );

      if (task && annotation) {
        // Add the annotation text as a property to the task
        task.annotation = annotation.text;
      }
    }
  }

  // Add tasks to neo4jData.nodes
  tasks.forEach((task) => {
    neo4jData.nodes.push(task);
  });

  // END

  references.forEach((element) => {
    if (element.property === "bpmn:incoming") {
      const ind = mapToFlow[element.id];
      const target = {
        type: element.element.$type.substring(5),
        id: element.element.id,
      };
      sequenceFlows[ind] = {
        ...sequenceFlows[ind],
        target: target,
      };
    } else if (element.property === "bpmn:outgoing") {
      const ind = mapToFlow[element.id];
      const source = {
        type: element.element.$type.substring(5),
        id: element.element.id,
      };
      sequenceFlows[ind] = {
        ...sequenceFlows[ind],
        source: source,
      };
    } else if (element.property === "bpmn:sourceRef") {
    }
  });

  sequenceFlows.forEach((flowElement) => {
    const relationship = {
      type: flowElement.name || "RELATIONSHIP",
      source: flowElement.source,
      target: flowElement.target,
    };

    neo4jData.relationships.push(relationship);
  });

  console.log(
    "neo4jDataRELATIONSHIPS is ",
    JSON.stringify(neo4jData.relationships)
  );
};
export default handleProcess;
