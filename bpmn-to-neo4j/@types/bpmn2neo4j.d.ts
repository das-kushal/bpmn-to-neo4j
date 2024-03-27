declare module "bpmnToNeo4j" {
  // Define your types and interfaces here
  interface InputParams {
    xml: string;
    neo4jUrl: string;
    neo4jUser: string;
    neo4jPassword: string;
  }

  // Export the types/interfaces you want to make available
  export function xmlToNeo4j(
    xml: string,
    neo4jUrl: string,
    neo4jUser: string,
    neo4jPassword: string
  ): void;
}
