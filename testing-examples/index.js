import main from "bpmn-to-neo4j-m";

// diagram.bpmn file path --> path to bpmn diagram stored in xml format
// const fileUrl = './data_object.bpmn'
// const fileUrl = './cooking_diagram.bpmn';    // if it is in current directory
// const fileUrl = './database_test.bpmn';    // if it is in current directory
// const fileUrl = './db_test2.bpmn';    // if it is in current directory
// const fileUrl = './diagram.bpmn';    // if it is in current directory
// const fileUrl = './dbtest3.bpmn';    // if it is in current directory

// const fileUrl = './creditWorthynessCheck.bpmn';
const fileUrl = "./subprocess.bpmn";
// const fileUrl = "./sub2.bpmn";
// const fileUrl = './referral-diagram.bpmn';
// const fileUrl = "./checking_stock_order.bpmn";

// const fileUrl = './data_obj.bpmn'; // removing the data object from the diagram only show the data object reference
// const fileUrl = './test_diagram.bpmn';

main(fileUrl, "bolt://localhost:7687", "neo4j", "12345678");
