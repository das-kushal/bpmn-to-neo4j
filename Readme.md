<p align="center">
<img src="https://github.com/das-kushal/bpmn-to-neo4j/assets/86544278/e62cd72a-4524-4e35-a977-e657bfebd264" height=100 align="center">
</p>



# BPMN to Neo4j

## Under the guidance of Prof. Mridul Sankar Barik


> This is the final year project which is converting a BPMN diagram to neo4j graph data so that we can run cipher queries on it easily.


## BPMN diagram to Neo4j conversion utility

#### helps in conversion of bpmn diagram to neo4j nodes and relations

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
