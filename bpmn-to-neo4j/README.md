# BPMN diagram to Neo4j conversion utility

## helps in conversion of bpmn diagram to neo4j nodes and relations

### Usage instructions

### Step 1: Install package

```
npm install bpmn-to-neo4j
```

### Step 2: Import in your code by providing the parameters

Download a sample digram.bpmn file [here](https://drive.google.com/file/d/1gJZHo6xfFgu31k6mP9AL1LOBaHknNXKf/view?usp=sharing)

```
import main from 'bpmn-to-neo4j'

// diagram.bpmn file path --> path to bpmn diagram stored in xml format

const fileUrl = './diagram.bpmn';    // if it is in current directory

main(fileUrl, '<neo4j-connection-string>', '<neo4j-username>', '<neo4j-password>');
```

### Step 3: Make sure neo4j is active in background and run the file

```
node index.js
```
