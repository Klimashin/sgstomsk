var chart_config = {
    chart: {
        container: "#company-structure",
        connectors : {
            type: 'step'
        }
    },

    nodeStructure: {
        text: { name: "Генеральный Директор" },
        HTMLclass: 'node-main',
        childrenDropLevel: -1,
        children: [
            {
                text: { name: "Зам. ген. директора по общим вопросам" },
                HTMLclass: 'node-important'
            },
            {
                pseudo: true,
                children: [
                    {
                        text: { name: "Директор департамента геологоразведочных работ" },
                        HTMLclass: 'node-important',
                        children: [
                            {
                                text: { name: "Департамент геологоразведочных работ (ДГР)" },
                                HTMLclass: 'department',
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
                            }
                        ]
                    },
                    {
                        text: { name: "Директор департамента инженерных изысканий" },
                        HTMLclass: 'node-important',
                        children: [
                            {
                                text: { name: "Департамент инженерных изысканий (ДИИ)" },
                                HTMLclass: 'department',
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
                        text: { name: "Директор департамента проектных работ" },
                        HTMLclass: 'node-important',
                        stackChildren: true,
                        children: [
                            {
                                text: { name: "Департамент проектных работ (ДПР)" },
                                HTMLclass: 'department',
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
                        text: { name: "Начальник производственно- технической базы" },
                        HTMLclass: 'node-important',
                        stackChildren: true,
                        children: [
                            {
                                text: { name: "Производственно-техническая база (ПТБ)" },
                                HTMLclass: 'department',
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
                            },
                            {
                                text: { name: "Административно-хозяйственный отдел (АХО)" },
                                HTMLclass: 'department',
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
                        pseudo: true,
                        children: [
                            {
                                text: { name: "Финасово правовой отдел" },
                                HTMLclass: 'department',
                                stackChildren: true,
                                children: [
                                    {
                                        text: { name: "Бухгалтерия" }
                                    },
                                    {
                                        text: { name: "Отдел кадров" }
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
                    },
                ]
            },
            {
                text: { name: "1ый заместитель ген. директора" },
                HTMLclass: 'node-important'
            }
        ]
    }
}

$('#structureModal').one('shown.bs.modal', function() {
    var comapanyStructure = new Treant(chart_config);
});

