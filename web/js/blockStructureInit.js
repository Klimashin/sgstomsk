var chart_config = {
    chart: {
        container: "#company-structure",
        connectors : {
            type: 'step'
        }
    },

    nodeStructure: {
        text: { name: "Генеральный Директор" },
        HTMLclass: 'node-important',
        children: [
            {
                text: { name: "Главный Геолог (1-ый зам)" },
                HTMLclass: 'node-important',
                children: [
                    {
                        text: { name: "Департамент геологоразведочных работ" },
                        stackChildren: true,
                        children: [
                            {
                                text: { name: "Геологоразведочный отдел" }
                            },
                            {
                                text: { name: "Отдел проектирования карьеров" }
                            },
                            {
                                text: { name: "Гидрогеологический отдел"  }
                            },
                            {
                                text: { name: "Картографический отдел" }
                            }
                        ]
                    },
                    {
                        text: { name: "Департамент инженерных изысканий" },
                        stackChildren: true,
                        children: [
                            {
                                text: { name: "Отдел инженерно-геодезических изысканий" }
                            },
                            {
                                text: { name: "Отдел инженерно-геологических изысканий" }
                            },
                            {
                                text: { name: "Отдел инженерно - экологических и гидрометеорологических изысканий"  }
                            },
                            {
                                text: { name: "Геолого-литологическая лаборатория" }
                            },
                            {
                                text: { name: "Режимно-секретное подразделение" }
                            }
                        ]
                    }
                ]
            },
            {
                text: { name: "Директор Департамента" },
                HTMLclass: 'node-important',
                stackChildren: true,
                children: [
                    {
                        text: { name: "Департамент проектных работ" },
                        stackChildren: true,
                        children: [
                            {
                                text: { name: "Отдел ГИП" }
                            },
                            {
                                text: { name: "Отдел выпуска документации" }
                            },
                            {
                                text: { name: "Отдел генпланов и дорог"  }
                            },
                            {
                                text: { name: "Строительный отдел" }
                            },
                            {
                                text: { name: "Электроэнергетический отдел" }
                            },
                            {
                                text: { name: "Отдел тепловодоснабжения и пожаротушения" }
                            },
                            {
                                text: { name: "Технологический отдел" }
                            },
                            {
                                text: { name: "Экологический отдел" }
                            },
                            {
                                text: { name: "Отдел смет и ПОС" }
                            },
                            {
                                text: { name: "Отдел автоматизации и связи" }
                            }
                        ]
                    }
                ]
            },
            {
                text: { name: "Главный Инженер" },
                HTMLclass: 'node-important',
                stackChildren: true,
                children: [
                    {
                        text: { name: "Производственно-техническая база" },
                        stackChildren: true,
                        children: [
                            {
                                text: { name: "Инженер по ОТ и БП" }
                            },
                            {
                                text: { name: "Транспортный цех" }
                            },
                            {
                                text: { name: "Буровой цех"  }
                            },
                            {
                                text: { name: "Отдел материально-технического снабжения" }
                            }
                        ]
                    }
                ]
            },
            {
                text: { name: "Зам. ГД по общим вопросам"  },
                HTMLclass: 'node-important',
                stackChildren: true,
                children: [
                    {
                        text: { name: "Административно-хозяйственный отдел" },
                        stackChildren: true,
                        children: [
                            {
                                text: { name: "Служба главного энергетика (энерго, тепло и водоснабжение)" }
                            },
                            {
                                text: { name: "Хозяйственно-бытовая служба" }
                            }
                        ]
                    }
                ]
            },
            {
                text: { name: "Финасово правовой отдел" },
                HTMLclass: 'node-important',
                stackChildren: true,
                children: [
                    {
                        text: { name: "Бухгалтерия" }
                    },
                    {
                        text: { name: "Отдел кадров" }
                    },
                    {
                        text: { name: "Отдел смет"  }
                    },
                    {
                        text: { name: "Юридический отдел"  }
                    },
                    {
                        text: { name: "Секретарь делопроизводитель" }
                    }
                ]
            }
        ]
    }
}

$('#structureModal').one('shown.bs.modal', function() {
    console.log('here');
    var comapanyStructure = new Treant(chart_config);
});

