import neo4j from 'neo4j-driver';

export function createNeo4jDriver(neo4jURL, neo4jUsername, neo4jPassword) {
    const neo4jDriver = neo4j.driver(neo4jURL, neo4j.auth.basic(`${neo4jUsername}`, `${neo4jPassword}`));
    return neo4jDriver;
}