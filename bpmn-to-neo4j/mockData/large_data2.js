const large_data2 = {
    "rootElement": {
        "rootElements": [
            {
                "$type": "bpmn:Process",
                "id": "Process_1",
                "flowElements": [
                    {
                        "$type": "bpmn:StartEvent",
                        "id": "Event_0d5lr0o",
                        "name": "Hunger Noticed"
                    },
                    {
                        "$type": "bpmn:Task",
                        "id": "Activity_1p8iqcn",
                        "name": "Choose Recipe"
                    },
                    {
                        "$type": "bpmn:SequenceFlow",
                        "id": "Flow_0c3sy3l"
                    },
                    {
                        "$type": "bpmn:Task",
                        "id": "Activity_1xy0xyl",
                        "name": "Prepare Salad"
                    },
                    {
                        "$type": "bpmn:SequenceFlow",
                        "id": "Flow_0k3nefy"
                    },
                    {
                        "$type": "bpmn:ExclusiveGateway",
                        "id": "Gateway_0929l5l",
                        "name": "Desired dish ?"
                    },
                    {
                        "$type": "bpmn:SequenceFlow",
                        "id": "Flow_0bvuhfg"
                    },
                    {
                        "$type": "bpmn:Task",
                        "id": "Activity_1yr2cpy",
                        "name": "Cook Pasta"
                    },
                    {
                        "$type": "bpmn:Task",
                        "id": "Activity_0969iro",
                        "name": "Cook Steak"
                    },
                    {
                        "$type": "bpmn:SequenceFlow",
                        "id": "Flow_1bf1ti4",
                        "name": "Pasta"
                    },
                    {
                        "$type": "bpmn:SequenceFlow",
                        "id": "Flow_0njs06p",
                        "name": "Steak"
                    },
                    {
                        "$type": "bpmn:ExclusiveGateway",
                        "id": "Gateway_1oizb5t"
                    },
                    {
                        "$type": "bpmn:Task",
                        "id": "Activity_1iot5gv",
                        "name": "Eat meal"
                    },
                    {
                        "$type": "bpmn:EndEvent",
                        "id": "Event_0vdzu5q",
                        "name": "Hunger satisfied"
                    },
                    {
                        "$type": "bpmn:SequenceFlow",
                        "id": "Flow_0awc667"
                    },
                    {
                        "$type": "bpmn:SequenceFlow",
                        "id": "Flow_0ikzp16"
                    },
                    {
                        "$type": "bpmn:SequenceFlow",
                        "id": "Flow_055upvu"
                    },
                    {
                        "$type": "bpmn:SequenceFlow",
                        "id": "Flow_0flu9vl"
                    }
                ],
                "artifacts": [
                    {
                        "$type": "bpmn:TextAnnotation",
                        "id": "TextAnnotation_1q695hs",
                        "text": "3 minutes"
                    },
                    {
                        "$type": "bpmn:Association",
                        "id": "Association_041a4y2"
                    },
                    {
                        "$type": "bpmn:TextAnnotation",
                        "id": "TextAnnotation_0olyk8x",
                        "text": "10 minutes"
                    },
                    {
                        "$type": "bpmn:Association",
                        "id": "Association_0sy8m1l"
                    },
                    {
                        "$type": "bpmn:TextAnnotation",
                        "id": "TextAnnotation_1538wm9",
                        "text": "15 minutes"
                    },
                    {
                        "$type": "bpmn:Association",
                        "id": "Association_0oedukj"
                    },
                    {
                        "$type": "bpmn:TextAnnotation",
                        "id": "TextAnnotation_1t1x30a",
                        "text": "10 minutes"
                    },
                    {
                        "$type": "bpmn:Association",
                        "id": "Association_0ht52ec"
                    },
                    {
                        "$type": "bpmn:TextAnnotation",
                        "id": "TextAnnotation_19v2uiu",
                        "text": "20 minutes"
                    },
                    {
                        "$type": "bpmn:Association",
                        "id": "Association_0yqc0z5"
                    }
                ]
            }
        ],

    },

    "references": [
        {
            "property": "bpmn:outgoing",
            "id": "Flow_0c3sy3l",
            "element": {
                "$type": "bpmn:StartEvent",
                "id": "Event_0d5lr0o",
                "name": "Hunger Noticed"
            }
        },
        {
            "property": "bpmn:incoming",
            "id": "Flow_0c3sy3l",
            "element": {
                "$type": "bpmn:Task",
                "id": "Activity_1p8iqcn",
                "name": "Choose Recipe"
            }
        },
        {
            "property": "bpmn:outgoing",
            "id": "Flow_0k3nefy",
            "element": {
                "$type": "bpmn:Task",
                "id": "Activity_1p8iqcn",
                "name": "Choose Recipe"
            }
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_0c3sy3l"
            },
            "property": "bpmn:sourceRef",
            "id": "Event_0d5lr0o"
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_0c3sy3l"
            },
            "property": "bpmn:targetRef",
            "id": "Activity_1p8iqcn"
        },
        {
            "property": "bpmn:incoming",
            "id": "Flow_0k3nefy",
            "element": {
                "$type": "bpmn:Task",
                "id": "Activity_1xy0xyl",
                "name": "Prepare Salad"
            }
        },
        {
            "property": "bpmn:outgoing",
            "id": "Flow_0bvuhfg",
            "element": {
                "$type": "bpmn:Task",
                "id": "Activity_1xy0xyl",
                "name": "Prepare Salad"
            }
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_0k3nefy"
            },
            "property": "bpmn:sourceRef",
            "id": "Activity_1p8iqcn"
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_0k3nefy"
            },
            "property": "bpmn:targetRef",
            "id": "Activity_1xy0xyl"
        },
        {
            "property": "bpmn:incoming",
            "id": "Flow_0bvuhfg",
            "element": {
                "$type": "bpmn:ExclusiveGateway",
                "id": "Gateway_0929l5l",
                "name": "Desired dish ?"
            }
        },
        {
            "property": "bpmn:outgoing",
            "id": "Flow_1bf1ti4",
            "element": {
                "$type": "bpmn:ExclusiveGateway",
                "id": "Gateway_0929l5l",
                "name": "Desired dish ?"
            }
        },
        {
            "property": "bpmn:outgoing",
            "id": "Flow_0njs06p",
            "element": {
                "$type": "bpmn:ExclusiveGateway",
                "id": "Gateway_0929l5l",
                "name": "Desired dish ?"
            }
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_0bvuhfg"
            },
            "property": "bpmn:sourceRef",
            "id": "Activity_1xy0xyl"
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_0bvuhfg"
            },
            "property": "bpmn:targetRef",
            "id": "Gateway_0929l5l"
        },
        {
            "property": "bpmn:incoming",
            "id": "Flow_1bf1ti4",
            "element": {
                "$type": "bpmn:Task",
                "id": "Activity_1yr2cpy",
                "name": "Cook Pasta"
            }
        },
        {
            "property": "bpmn:outgoing",
            "id": "Flow_0ikzp16",
            "element": {
                "$type": "bpmn:Task",
                "id": "Activity_1yr2cpy",
                "name": "Cook Pasta"
            }
        },
        {
            "property": "bpmn:incoming",
            "id": "Flow_0njs06p",
            "element": {
                "$type": "bpmn:Task",
                "id": "Activity_0969iro",
                "name": "Cook Steak"
            }
        },
        {
            "property": "bpmn:outgoing",
            "id": "Flow_0awc667",
            "element": {
                "$type": "bpmn:Task",
                "id": "Activity_0969iro",
                "name": "Cook Steak"
            }
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_1bf1ti4",
                "name": "Pasta"
            },
            "property": "bpmn:sourceRef",
            "id": "Gateway_0929l5l"
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_1bf1ti4",
                "name": "Pasta"
            },
            "property": "bpmn:targetRef",
            "id": "Activity_1yr2cpy"
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_0njs06p",
                "name": "Steak"
            },
            "property": "bpmn:sourceRef",
            "id": "Gateway_0929l5l"
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_0njs06p",
                "name": "Steak"
            },
            "property": "bpmn:targetRef",
            "id": "Activity_0969iro"
        },
        {
            "property": "bpmn:incoming",
            "id": "Flow_0awc667",
            "element": {
                "$type": "bpmn:ExclusiveGateway",
                "id": "Gateway_1oizb5t"
            }
        },
        {
            "property": "bpmn:incoming",
            "id": "Flow_0ikzp16",
            "element": {
                "$type": "bpmn:ExclusiveGateway",
                "id": "Gateway_1oizb5t"
            }
        },
        {
            "property": "bpmn:outgoing",
            "id": "Flow_055upvu",
            "element": {
                "$type": "bpmn:ExclusiveGateway",
                "id": "Gateway_1oizb5t"
            }
        },
        {
            "property": "bpmn:incoming",
            "id": "Flow_055upvu",
            "element": {
                "$type": "bpmn:Task",
                "id": "Activity_1iot5gv",
                "name": "Eat meal"
            }
        },
        {
            "property": "bpmn:outgoing",
            "id": "Flow_0flu9vl",
            "element": {
                "$type": "bpmn:Task",
                "id": "Activity_1iot5gv",
                "name": "Eat meal"
            }
        },
        {
            "property": "bpmn:incoming",
            "id": "Flow_0flu9vl",
            "element": {
                "$type": "bpmn:EndEvent",
                "id": "Event_0vdzu5q",
                "name": "Hunger satisfied"
            }
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_0awc667"
            },
            "property": "bpmn:sourceRef",
            "id": "Activity_0969iro"
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_0awc667"
            },
            "property": "bpmn:targetRef",
            "id": "Gateway_1oizb5t"
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_0ikzp16"
            },
            "property": "bpmn:sourceRef",
            "id": "Activity_1yr2cpy"
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_0ikzp16"
            },
            "property": "bpmn:targetRef",
            "id": "Gateway_1oizb5t"
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_055upvu"
            },
            "property": "bpmn:sourceRef",
            "id": "Gateway_1oizb5t"
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_055upvu"
            },
            "property": "bpmn:targetRef",
            "id": "Activity_1iot5gv"
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_0flu9vl"
            },
            "property": "bpmn:sourceRef",
            "id": "Activity_1iot5gv"
        },
        {
            "element": {
                "$type": "bpmn:SequenceFlow",
                "id": "Flow_0flu9vl"
            },
            "property": "bpmn:targetRef",
            "id": "Event_0vdzu5q"
        },
        {
            "element": {
                "$type": "bpmn:Association",
                "id": "Association_041a4y2"
            },
            "property": "bpmn:sourceRef",
            "id": "Activity_1p8iqcn"
        },
        {
            "element": {
                "$type": "bpmn:Association",
                "id": "Association_041a4y2"
            },
            "property": "bpmn:targetRef",
            "id": "TextAnnotation_1q695hs"
        },
        {
            "element": {
                "$type": "bpmn:Association",
                "id": "Association_0sy8m1l"
            },
            "property": "bpmn:sourceRef",
            "id": "Activity_1xy0xyl"
        },
        {
            "element": {
                "$type": "bpmn:Association",
                "id": "Association_0sy8m1l"
            },
            "property": "bpmn:targetRef",
            "id": "TextAnnotation_0olyk8x"
        },
        {
            "element": {
                "$type": "bpmn:Association",
                "id": "Association_0oedukj"
            },
            "property": "bpmn:sourceRef",
            "id": "Activity_1yr2cpy"
        },
        {
            "element": {
                "$type": "bpmn:Association",
                "id": "Association_0oedukj"
            },
            "property": "bpmn:targetRef",
            "id": "TextAnnotation_1538wm9"
        },
        {
            "element": {
                "$type": "bpmn:Association",
                "id": "Association_0ht52ec"
            },
            "property": "bpmn:sourceRef",
            "id": "Activity_0969iro"
        },
        {
            "element": {
                "$type": "bpmn:Association",
                "id": "Association_0ht52ec"
            },
            "property": "bpmn:targetRef",
            "id": "TextAnnotation_1t1x30a"
        },
        {
            "element": {
                "$type": "bpmn:Association",
                "id": "Association_0yqc0z5"
            },
            "property": "bpmn:sourceRef",
            "id": "Activity_1iot5gv"
        },
        {
            "element": {
                "$type": "bpmn:Association",
                "id": "Association_0yqc0z5"
            },
            "property": "bpmn:targetRef",
            "id": "TextAnnotation_19v2uiu"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNPlane",
                "id": "BPMNPlane_1",
                "planeElement": [
                    {
                        "$type": "bpmndi:BPMNShape",
                        "id": "TextAnnotation_0olyk8x_di",
                        "bounds": {
                            "$type": "dc:Bounds",
                            "x": 500,
                            "y": 250,
                            "width": 100,
                            "height": 30
                        },
                        "label": {
                            "$type": "bpmndi:BPMNLabel"
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNShape",
                        "id": "TextAnnotation_1q695hs_di",
                        "bounds": {
                            "$type": "dc:Bounds",
                            "x": 360,
                            "y": 250,
                            "width": 100,
                            "height": 30
                        },
                        "label": {
                            "$type": "bpmndi:BPMNLabel"
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNShape",
                        "id": "TextAnnotation_1538wm9_di",
                        "bounds": {
                            "$type": "dc:Bounds",
                            "x": 840,
                            "y": 70,
                            "width": 100,
                            "height": 30
                        },
                        "label": {
                            "$type": "bpmndi:BPMNLabel"
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNShape",
                        "id": "TextAnnotation_1t1x30a_di",
                        "bounds": {
                            "$type": "dc:Bounds",
                            "x": 830,
                            "y": 380,
                            "width": 100,
                            "height": 30
                        },
                        "label": {
                            "$type": "bpmndi:BPMNLabel"
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNShape",
                        "id": "TextAnnotation_19v2uiu_di",
                        "bounds": {
                            "$type": "dc:Bounds",
                            "x": 1090,
                            "y": 120,
                            "width": 100,
                            "height": 30
                        },
                        "label": {
                            "$type": "bpmndi:BPMNLabel"
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNShape",
                        "id": "Event_0d5lr0o_di",
                        "bounds": {
                            "$type": "dc:Bounds",
                            "x": 182,
                            "y": 172,
                            "width": 36,
                            "height": 36
                        },
                        "label": {
                            "$type": "bpmndi:BPMNLabel",
                            "bounds": {
                                "$type": "dc:Bounds",
                                "x": 162,
                                "y": 215,
                                "width": 77,
                                "height": 14
                            }
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNShape",
                        "id": "Activity_1p8iqcn_di",
                        "bounds": {
                            "$type": "dc:Bounds",
                            "x": 310,
                            "y": 150,
                            "width": 100,
                            "height": 80
                        },
                        "label": {
                            "$type": "bpmndi:BPMNLabel"
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNShape",
                        "id": "BPMNShape_06r0eno",
                        "bounds": {
                            "$type": "dc:Bounds",
                            "x": 470,
                            "y": 150,
                            "width": 100,
                            "height": 80
                        },
                        "label": {
                            "$type": "bpmndi:BPMNLabel"
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNShape",
                        "id": "Gateway_0929l5l_di",
                        "isMarkerVisible": true,
                        "bounds": {
                            "$type": "dc:Bounds",
                            "x": 635,
                            "y": 165,
                            "width": 50,
                            "height": 50
                        },
                        "label": {
                            "$type": "bpmndi:BPMNLabel",
                            "bounds": {
                                "$type": "dc:Bounds",
                                "x": 624,
                                "y": 123,
                                "width": 71,
                                "height": 14
                            }
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNShape",
                        "id": "Activity_1yr2cpy_di",
                        "bounds": {
                            "$type": "dc:Bounds",
                            "x": 740,
                            "y": 150,
                            "width": 100,
                            "height": 80
                        },
                        "label": {
                            "$type": "bpmndi:BPMNLabel"
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNShape",
                        "id": "BPMNShape_067wskn",
                        "bounds": {
                            "$type": "dc:Bounds",
                            "x": 740,
                            "y": 260,
                            "width": 100,
                            "height": 80
                        },
                        "label": {
                            "$type": "bpmndi:BPMNLabel"
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNShape",
                        "id": "Gateway_1oizb5t_di",
                        "isMarkerVisible": true,
                        "bounds": {
                            "$type": "dc:Bounds",
                            "x": 905,
                            "y": 215,
                            "width": 50,
                            "height": 50
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNShape",
                        "id": "Activity_1iot5gv_di",
                        "bounds": {
                            "$type": "dc:Bounds",
                            "x": 990,
                            "y": 200,
                            "width": 100,
                            "height": 80
                        },
                        "label": {
                            "$type": "bpmndi:BPMNLabel"
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNShape",
                        "id": "Event_0vdzu5q_di",
                        "bounds": {
                            "$type": "dc:Bounds",
                            "x": 1162,
                            "y": 222,
                            "width": 36,
                            "height": 36
                        },
                        "label": {
                            "$type": "bpmndi:BPMNLabel",
                            "bounds": {
                                "$type": "dc:Bounds",
                                "x": 1140,
                                "y": 265,
                                "width": 80,
                                "height": 14
                            }
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNEdge",
                        "id": "Association_0sy8m1l_di",
                        "waypoint": [
                            {
                                "$type": "dc:Point",
                                "x": 536,
                                "y": 230
                            },
                            {
                                "$type": "dc:Point",
                                "x": 544,
                                "y": 250
                            }
                        ]
                    },
                    {
                        "$type": "bpmndi:BPMNEdge",
                        "id": "Association_041a4y2_di",
                        "waypoint": [
                            {
                                "$type": "dc:Point",
                                "x": 387,
                                "y": 230
                            },
                            {
                                "$type": "dc:Point",
                                "x": 400,
                                "y": 250
                            }
                        ]
                    },
                    {
                        "$type": "bpmndi:BPMNEdge",
                        "id": "Association_0oedukj_di",
                        "waypoint": [
                            {
                                "$type": "dc:Point",
                                "x": 828,
                                "y": 150
                            },
                            {
                                "$type": "dc:Point",
                                "x": 876,
                                "y": 100
                            }
                        ]
                    },
                    {
                        "$type": "bpmndi:BPMNEdge",
                        "id": "Association_0ht52ec_di",
                        "waypoint": [
                            {
                                "$type": "dc:Point",
                                "x": 828,
                                "y": 340
                            },
                            {
                                "$type": "dc:Point",
                                "x": 866,
                                "y": 380
                            }
                        ]
                    },
                    {
                        "$type": "bpmndi:BPMNEdge",
                        "id": "Association_0yqc0z5_di",
                        "waypoint": [
                            {
                                "$type": "dc:Point",
                                "x": 1078,
                                "y": 200
                            },
                            {
                                "$type": "dc:Point",
                                "x": 1126,
                                "y": 150
                            }
                        ]
                    },
                    {
                        "$type": "bpmndi:BPMNEdge",
                        "id": "Flow_0c3sy3l_di",
                        "waypoint": [
                            {
                                "$type": "dc:Point",
                                "x": 218,
                                "y": 190
                            },
                            {
                                "$type": "dc:Point",
                                "x": 310,
                                "y": 190
                            }
                        ]
                    },
                    {
                        "$type": "bpmndi:BPMNEdge",
                        "id": "Flow_0k3nefy_di",
                        "waypoint": [
                            {
                                "$type": "dc:Point",
                                "x": 410,
                                "y": 190
                            },
                            {
                                "$type": "dc:Point",
                                "x": 470,
                                "y": 190
                            }
                        ]
                    },
                    {
                        "$type": "bpmndi:BPMNEdge",
                        "id": "Flow_0bvuhfg_di",
                        "waypoint": [
                            {
                                "$type": "dc:Point",
                                "x": 570,
                                "y": 190
                            },
                            {
                                "$type": "dc:Point",
                                "x": 635,
                                "y": 190
                            }
                        ]
                    },
                    {
                        "$type": "bpmndi:BPMNEdge",
                        "id": "Flow_1bf1ti4_di",
                        "waypoint": [
                            {
                                "$type": "dc:Point",
                                "x": 685,
                                "y": 190
                            },
                            {
                                "$type": "dc:Point",
                                "x": 740,
                                "y": 190
                            }
                        ],
                        "label": {
                            "$type": "bpmndi:BPMNLabel",
                            "bounds": {
                                "$type": "dc:Bounds",
                                "x": 698,
                                "y": 172,
                                "width": 29,
                                "height": 14
                            }
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNEdge",
                        "id": "Flow_0njs06p_di",
                        "waypoint": [
                            {
                                "$type": "dc:Point",
                                "x": 660,
                                "y": 215
                            },
                            {
                                "$type": "dc:Point",
                                "x": 660,
                                "y": 300
                            },
                            {
                                "$type": "dc:Point",
                                "x": 740,
                                "y": 300
                            }
                        ],
                        "label": {
                            "$type": "bpmndi:BPMNLabel",
                            "bounds": {
                                "$type": "dc:Bounds",
                                "x": 675,
                                "y": 273,
                                "width": 29,
                                "height": 14
                            }
                        }
                    },
                    {
                        "$type": "bpmndi:BPMNEdge",
                        "id": "Flow_0awc667_di",
                        "waypoint": [
                            {
                                "$type": "dc:Point",
                                "x": 840,
                                "y": 300
                            },
                            {
                                "$type": "dc:Point",
                                "x": 930,
                                "y": 300
                            },
                            {
                                "$type": "dc:Point",
                                "x": 930,
                                "y": 265
                            }
                        ]
                    },
                    {
                        "$type": "bpmndi:BPMNEdge",
                        "id": "Flow_0ikzp16_di",
                        "waypoint": [
                            {
                                "$type": "dc:Point",
                                "x": 840,
                                "y": 190
                            },
                            {
                                "$type": "dc:Point",
                                "x": 873,
                                "y": 190
                            },
                            {
                                "$type": "dc:Point",
                                "x": 873,
                                "y": 240
                            },
                            {
                                "$type": "dc:Point",
                                "x": 905,
                                "y": 240
                            }
                        ]
                    },
                    {
                        "$type": "bpmndi:BPMNEdge",
                        "id": "Flow_055upvu_di",
                        "waypoint": [
                            {
                                "$type": "dc:Point",
                                "x": 955,
                                "y": 240
                            },
                            {
                                "$type": "dc:Point",
                                "x": 990,
                                "y": 240
                            }
                        ]
                    },
                    {
                        "$type": "bpmndi:BPMNEdge",
                        "id": "Flow_0flu9vl_di",
                        "waypoint": [
                            {
                                "$type": "dc:Point",
                                "x": 1090,
                                "y": 240
                            },
                            {
                                "$type": "dc:Point",
                                "x": 1162,
                                "y": 240
                            }
                        ]
                    }
                ]
            },
            "property": "bpmndi:bpmnElement",
            "id": "Process_1"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNShape",
                "id": "TextAnnotation_0olyk8x_di",
                "bounds": {
                    "$type": "dc:Bounds",
                    "x": 500,
                    "y": 250,
                    "width": 100,
                    "height": 30
                },
                "label": {
                    "$type": "bpmndi:BPMNLabel"
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "TextAnnotation_0olyk8x"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNShape",
                "id": "TextAnnotation_1q695hs_di",
                "bounds": {
                    "$type": "dc:Bounds",
                    "x": 360,
                    "y": 250,
                    "width": 100,
                    "height": 30
                },
                "label": {
                    "$type": "bpmndi:BPMNLabel"
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "TextAnnotation_1q695hs"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNShape",
                "id": "TextAnnotation_1538wm9_di",
                "bounds": {
                    "$type": "dc:Bounds",
                    "x": 840,
                    "y": 70,
                    "width": 100,
                    "height": 30
                },
                "label": {
                    "$type": "bpmndi:BPMNLabel"
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "TextAnnotation_1538wm9"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNShape",
                "id": "TextAnnotation_1t1x30a_di",
                "bounds": {
                    "$type": "dc:Bounds",
                    "x": 830,
                    "y": 380,
                    "width": 100,
                    "height": 30
                },
                "label": {
                    "$type": "bpmndi:BPMNLabel"
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "TextAnnotation_1t1x30a"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNShape",
                "id": "TextAnnotation_19v2uiu_di",
                "bounds": {
                    "$type": "dc:Bounds",
                    "x": 1090,
                    "y": 120,
                    "width": 100,
                    "height": 30
                },
                "label": {
                    "$type": "bpmndi:BPMNLabel"
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "TextAnnotation_19v2uiu"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNShape",
                "id": "Event_0d5lr0o_di",
                "bounds": {
                    "$type": "dc:Bounds",
                    "x": 182,
                    "y": 172,
                    "width": 36,
                    "height": 36
                },
                "label": {
                    "$type": "bpmndi:BPMNLabel",
                    "bounds": {
                        "$type": "dc:Bounds",
                        "x": 162,
                        "y": 215,
                        "width": 77,
                        "height": 14
                    }
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "Event_0d5lr0o"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNShape",
                "id": "Activity_1p8iqcn_di",
                "bounds": {
                    "$type": "dc:Bounds",
                    "x": 310,
                    "y": 150,
                    "width": 100,
                    "height": 80
                },
                "label": {
                    "$type": "bpmndi:BPMNLabel"
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "Activity_1p8iqcn"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNShape",
                "id": "BPMNShape_06r0eno",
                "bounds": {
                    "$type": "dc:Bounds",
                    "x": 470,
                    "y": 150,
                    "width": 100,
                    "height": 80
                },
                "label": {
                    "$type": "bpmndi:BPMNLabel"
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "Activity_1xy0xyl"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNShape",
                "id": "Gateway_0929l5l_di",
                "isMarkerVisible": true,
                "bounds": {
                    "$type": "dc:Bounds",
                    "x": 635,
                    "y": 165,
                    "width": 50,
                    "height": 50
                },
                "label": {
                    "$type": "bpmndi:BPMNLabel",
                    "bounds": {
                        "$type": "dc:Bounds",
                        "x": 624,
                        "y": 123,
                        "width": 71,
                        "height": 14
                    }
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "Gateway_0929l5l"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNShape",
                "id": "Activity_1yr2cpy_di",
                "bounds": {
                    "$type": "dc:Bounds",
                    "x": 740,
                    "y": 150,
                    "width": 100,
                    "height": 80
                },
                "label": {
                    "$type": "bpmndi:BPMNLabel"
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "Activity_1yr2cpy"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNShape",
                "id": "BPMNShape_067wskn",
                "bounds": {
                    "$type": "dc:Bounds",
                    "x": 740,
                    "y": 260,
                    "width": 100,
                    "height": 80
                },
                "label": {
                    "$type": "bpmndi:BPMNLabel"
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "Activity_0969iro"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNShape",
                "id": "Gateway_1oizb5t_di",
                "isMarkerVisible": true,
                "bounds": {
                    "$type": "dc:Bounds",
                    "x": 905,
                    "y": 215,
                    "width": 50,
                    "height": 50
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "Gateway_1oizb5t"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNShape",
                "id": "Activity_1iot5gv_di",
                "bounds": {
                    "$type": "dc:Bounds",
                    "x": 990,
                    "y": 200,
                    "width": 100,
                    "height": 80
                },
                "label": {
                    "$type": "bpmndi:BPMNLabel"
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "Activity_1iot5gv"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNShape",
                "id": "Event_0vdzu5q_di",
                "bounds": {
                    "$type": "dc:Bounds",
                    "x": 1162,
                    "y": 222,
                    "width": 36,
                    "height": 36
                },
                "label": {
                    "$type": "bpmndi:BPMNLabel",
                    "bounds": {
                        "$type": "dc:Bounds",
                        "x": 1140,
                        "y": 265,
                        "width": 80,
                        "height": 14
                    }
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "Event_0vdzu5q"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNEdge",
                "id": "Association_0sy8m1l_di",
                "waypoint": [
                    {
                        "$type": "dc:Point",
                        "x": 536,
                        "y": 230
                    },
                    {
                        "$type": "dc:Point",
                        "x": 544,
                        "y": 250
                    }
                ]
            },
            "property": "bpmndi:bpmnElement",
            "id": "Association_0sy8m1l"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNEdge",
                "id": "Association_041a4y2_di",
                "waypoint": [
                    {
                        "$type": "dc:Point",
                        "x": 387,
                        "y": 230
                    },
                    {
                        "$type": "dc:Point",
                        "x": 400,
                        "y": 250
                    }
                ]
            },
            "property": "bpmndi:bpmnElement",
            "id": "Association_041a4y2"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNEdge",
                "id": "Association_0oedukj_di",
                "waypoint": [
                    {
                        "$type": "dc:Point",
                        "x": 828,
                        "y": 150
                    },
                    {
                        "$type": "dc:Point",
                        "x": 876,
                        "y": 100
                    }
                ]
            },
            "property": "bpmndi:bpmnElement",
            "id": "Association_0oedukj"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNEdge",
                "id": "Association_0ht52ec_di",
                "waypoint": [
                    {
                        "$type": "dc:Point",
                        "x": 828,
                        "y": 340
                    },
                    {
                        "$type": "dc:Point",
                        "x": 866,
                        "y": 380
                    }
                ]
            },
            "property": "bpmndi:bpmnElement",
            "id": "Association_0ht52ec"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNEdge",
                "id": "Association_0yqc0z5_di",
                "waypoint": [
                    {
                        "$type": "dc:Point",
                        "x": 1078,
                        "y": 200
                    },
                    {
                        "$type": "dc:Point",
                        "x": 1126,
                        "y": 150
                    }
                ]
            },
            "property": "bpmndi:bpmnElement",
            "id": "Association_0yqc0z5"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNEdge",
                "id": "Flow_0c3sy3l_di",
                "waypoint": [
                    {
                        "$type": "dc:Point",
                        "x": 218,
                        "y": 190
                    },
                    {
                        "$type": "dc:Point",
                        "x": 310,
                        "y": 190
                    }
                ]
            },
            "property": "bpmndi:bpmnElement",
            "id": "Flow_0c3sy3l"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNEdge",
                "id": "Flow_0k3nefy_di",
                "waypoint": [
                    {
                        "$type": "dc:Point",
                        "x": 410,
                        "y": 190
                    },
                    {
                        "$type": "dc:Point",
                        "x": 470,
                        "y": 190
                    }
                ]
            },
            "property": "bpmndi:bpmnElement",
            "id": "Flow_0k3nefy"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNEdge",
                "id": "Flow_0bvuhfg_di",
                "waypoint": [
                    {
                        "$type": "dc:Point",
                        "x": 570,
                        "y": 190
                    },
                    {
                        "$type": "dc:Point",
                        "x": 635,
                        "y": 190
                    }
                ]
            },
            "property": "bpmndi:bpmnElement",
            "id": "Flow_0bvuhfg"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNEdge",
                "id": "Flow_1bf1ti4_di",
                "waypoint": [
                    {
                        "$type": "dc:Point",
                        "x": 685,
                        "y": 190
                    },
                    {
                        "$type": "dc:Point",
                        "x": 740,
                        "y": 190
                    }
                ],
                "label": {
                    "$type": "bpmndi:BPMNLabel",
                    "bounds": {
                        "$type": "dc:Bounds",
                        "x": 698,
                        "y": 172,
                        "width": 29,
                        "height": 14
                    }
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "Flow_1bf1ti4"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNEdge",
                "id": "Flow_0njs06p_di",
                "waypoint": [
                    {
                        "$type": "dc:Point",
                        "x": 660,
                        "y": 215
                    },
                    {
                        "$type": "dc:Point",
                        "x": 660,
                        "y": 300
                    },
                    {
                        "$type": "dc:Point",
                        "x": 740,
                        "y": 300
                    }
                ],
                "label": {
                    "$type": "bpmndi:BPMNLabel",
                    "bounds": {
                        "$type": "dc:Bounds",
                        "x": 675,
                        "y": 273,
                        "width": 29,
                        "height": 14
                    }
                }
            },
            "property": "bpmndi:bpmnElement",
            "id": "Flow_0njs06p"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNEdge",
                "id": "Flow_0awc667_di",
                "waypoint": [
                    {
                        "$type": "dc:Point",
                        "x": 840,
                        "y": 300
                    },
                    {
                        "$type": "dc:Point",
                        "x": 930,
                        "y": 300
                    },
                    {
                        "$type": "dc:Point",
                        "x": 930,
                        "y": 265
                    }
                ]
            },
            "property": "bpmndi:bpmnElement",
            "id": "Flow_0awc667"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNEdge",
                "id": "Flow_0ikzp16_di",
                "waypoint": [
                    {
                        "$type": "dc:Point",
                        "x": 840,
                        "y": 190
                    },
                    {
                        "$type": "dc:Point",
                        "x": 873,
                        "y": 190
                    },
                    {
                        "$type": "dc:Point",
                        "x": 873,
                        "y": 240
                    },
                    {
                        "$type": "dc:Point",
                        "x": 905,
                        "y": 240
                    }
                ]
            },
            "property": "bpmndi:bpmnElement",
            "id": "Flow_0ikzp16"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNEdge",
                "id": "Flow_055upvu_di",
                "waypoint": [
                    {
                        "$type": "dc:Point",
                        "x": 955,
                        "y": 240
                    },
                    {
                        "$type": "dc:Point",
                        "x": 990,
                        "y": 240
                    }
                ]
            },
            "property": "bpmndi:bpmnElement",
            "id": "Flow_055upvu"
        },
        {
            "element": {
                "$type": "bpmndi:BPMNEdge",
                "id": "Flow_0flu9vl_di",
                "waypoint": [
                    {
                        "$type": "dc:Point",
                        "x": 1090,
                        "y": 240
                    },
                    {
                        "$type": "dc:Point",
                        "x": 1162,
                        "y": 240
                    }
                ]
            },
            "property": "bpmndi:bpmnElement",
            "id": "Flow_0flu9vl"
        }
    ],
}

export default large_data2;