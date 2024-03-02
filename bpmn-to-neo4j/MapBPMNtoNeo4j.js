import Process from "./utils/Process.js";

console.log(Process);

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

  Process(process, references, neo4jData, null);

  return neo4jData;
};
