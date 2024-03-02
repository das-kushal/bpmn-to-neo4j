const { default: large_data2 } = require('../mockData/large_data2');

const mapBPMNtoNeo4j = require('../MapBPMNtoNeo4j').default;
const small_data = require('../mockData/small_data').default;
const large_data = require('../mockData/large_data').default;


describe('MapBPMNtoNeo4j Function',() => {

    test('should properly convert BPMN data to Neo4j data',() => {
        // const bpmnData = small_data;
        const bpmnData = large_data;

        const neo4jData = mapBPMNtoNeo4j(bpmnData);

        // Assertions for Neo4j data structure
        expect(neo4jData).toBeDefined();
        expect(neo4jData.nodes).toBeDefined();
        expect(neo4jData.relationships).toBeDefined();
        expect(Array.isArray(neo4jData.nodes)).toBe(true);
        expect(Array.isArray(neo4jData.relationships)).toBe(true);

    });

    // Edge Case Test
    test('should handle empty BPMN data',() => {
        const bpmnData = {}; // Empty BPMN data
        const neo4jData = mapBPMNtoNeo4j(bpmnData);

        // Ensure Neo4j data is defined and has empty arrays for nodes and relationships
        expect(neo4jData).toBeDefined();
        expect(neo4jData.nodes).toBeDefined();
        expect(neo4jData.nodes).toHaveLength(0);
        expect(neo4jData.relationships).toBeDefined();
        expect(neo4jData.relationships).toHaveLength(0);
    });


    // Error Handling Test
    test('should handle invalid BPMN data',() => {
        const bpmnData = null; // Invalid BPMN data (null)

        // Ensure the function doesn't throw an error but returns some default value
        const neo4jData = mapBPMNtoNeo4j(bpmnData);
        expect(neo4jData).toBeDefined();
        // Add more specific assertions based on how your function handles invalid data
    });


    // Performance Test 
    test('should execute within a reasonable time frame with large input',() => {

        // const bpmnData = small_data
        const bpmnData = large_data

        // Measure the execution time of the function
        const startTime = Date.now();
        mapBPMNtoNeo4j(bpmnData);
        const endTime = Date.now();

        const executionTime = endTime - startTime;

        // Ensure the execution time is within an acceptable range (for example, less than 1000ms)
        expect(executionTime).toBeLessThan(1000);
    });

});


