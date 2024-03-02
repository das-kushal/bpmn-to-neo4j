const small_data = {
    "rootElement": {
        "rootElements": [
            {
                "$type": "bpmn:Process",
                "id": "Process_0kj54nx",
                "isExecutable": false,
                "flowElements": [
                    {
                        "$type": "bpmn:DataStoreReference",
                        "id": "DataStoreReference_03sa09h",
                        "name": "dataBase"
                    },
                    {
                        "$type": "bpmn:StartEvent",
                        "id": "Event_184q3w5",
                        "name": "starting"
                    },
                    {
                        "$type": "bpmn:Task",
                        "id": "Activity_0yowo2c",
                        "name": "doing stuff",
                        "dataOutputAssociations": [
                            {
                                "$type": "bpmn:DataOutputAssociation",
                                "id": "DataOutputAssociation_0igwv8i"
                            }
                        ]
                    },
                    {
                        "$type": "bpmn:SequenceFlow",
                        "id": "Flow_1njygnz",
                        "name": "start_to_do"
                    },
                    {
                        "$type": "bpmn:EndEvent",
                        "id": "Event_1s1pjpl",
                        "name": "done"
                    },
                    {
                        "$type": "bpmn:SequenceFlow",
                        "id": "Flow_1dd9m8q",
                        "name": "do_to_done"
                    }
                ]
            }
        ],

    },

    "references": [
        {
            "property": "bpmn:outgoing",
            "id": "Flow_1njygnz",
            "element": {
                "$type": "bpmn:StartEvent",
                "id": "Event_184q3w5",
                "name": "starting"
            }
        },
        {
            "property": "bpmn:incoming",
            "id": "Flow_1njygnz",
            "element": {
                "$type": "bpmn:Task",
                "id": "Activity_0yowo2c",
                "name": "doing stuff",
                "dataOutputAssociations": [
                    {
                        "$type": "bpmn:DataOutputAssociation",
                        "id": "DataOutputAssociation_0igwv8i"
                    }
                ]
            }
        },
        {
            "property": "bpmn:outgoing",
            "id": "Flow_1dd9m8q",
            "element": {
                "$type": "bpmn:Task",
                "id": "Activity_0yowo2c",
                "name": "doing stuff",
                "dataOutputAssociations": [
                    {
                        "$type": "bpmn:DataOutputAssociation",
                        "id": "DataOutputAssociation_0igwv8i"
                    }
                ]
            }
        },
        {
            "property": "bpmn:targetRef",
            "id": "DataStoreReference_03sa09h",
            "element": {
                "$type": "bpmn:DataOutputAssociation",
                "id": "DataOutputAssociation_0igwv8i"
            }
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_1njygnz",
                "name": "start_to_do"
            },
            "property": "bpmn:sourceRef",
            "id": "Event_184q3w5"
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_1njygnz",
                "name": "start_to_do"
            },
            "property": "bpmn:targetRef",
            "id": "Activity_0yowo2c"
        },
        {
            "property": "bpmn:incoming",
            "id": "Flow_1dd9m8q",
            "element": {
                "$type": "bpmn:EndEvent",
                "id": "Event_1s1pjpl",
                "name": "done"
            }
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_1dd9m8q",
                "name": "do_to_done"
            },
            "property": "bpmn:sourceRef",
            "id": "Activity_0yowo2c"
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_1dd9m8q",
                "name": "do_to_done"
            },
            "property": "bpmn:targetRef",
            "id": "Event_1s1pjpl"
        },

    ],
}

export default small_data;