// import fs from "fs";
import convertBPMNtoNeo4j from "./ConvertBPMNtoNeo4j.js";
import { createNeo4jDriver } from "./DBconnect.js";

export async function xmlToNeo4j(xml, neo4jURL, neo4jUsername, neo4jPassword) {
  // connect to database and create a driver
  const neo4jDriver = createNeo4jDriver(neo4jURL, neo4jUsername, neo4jPassword);

  // Call the conversion function
  const neo4jData = await convertBPMNtoNeo4j(xml, neo4jDriver);
  console.log("Received Data neo4jData is ", neo4jData);
  return neo4jData;
}

// export function fileToNeo4j(path, neo4jURL, neo4jUsername, neo4jPassword) {
//   fs.readFile(path, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading BPMN XML file: ", err);
//       return;
//     }

//     // connect to database and create a driver
//     const neo4jDriver = createNeo4jDriver(
//       neo4jURL,
//       neo4jUsername,
//       neo4jPassword
//     );

//     // Call the conversion function
//     convertBPMNtoNeo4j(data, neo4jDriver);
//   });
// }
