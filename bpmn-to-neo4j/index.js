import fs from 'fs';
import convertBPMNtoNeo4j from './ConvertBPMNtoNeo4j.js';
import { createNeo4jDriver } from './DBconnect.js';


export default function main(filename,neo4jURL,neo4jUsername,neo4jPassword) {
  fs.readFile(filename,'utf8',(err,data) => {
    if (err) {
      console.error('Error reading BPMN XML file: ',err);
      return;
    }

    // connect to database and create a driver
    const neo4jDriver = createNeo4jDriver(neo4jURL,neo4jUsername,neo4jPassword);

    // Call the conversion function
    convertBPMNtoNeo4j(data,neo4jDriver);
  });
}



