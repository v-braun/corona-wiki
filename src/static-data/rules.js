let rules = {
  "NI": {
    "stages": {
      "stage1": {
        "title": "Stufe 1",
        "desc": "Geringes Infektionsgeschehen <10",
        "incidence": {
          "gt": 0,
          "lt": 10
        }
      },
      "stage2": {
        "title": "Stufe 2",
        "desc": "Erhöhtes Infektionsgeschehen >10, <25",
        "incidence": {
          "gt": 10,
          "lt": 25
        }
      },
      "stage3": {
        "title": "Stufe 3",
        "desc": "Hohes Infektionsgeschehen >25, <50 (Vorwarnwert 25 überschritten)",
        "incidence": {
          "gt": 25,
          "lt": 50
        }
      },
      "stage4": {
        "title": "Stufe 4",
        "desc": "Starkes Infektionsgeschehen >50, <100",
        "incidence": {
          "gt": 50,
          "lt": 100
        }
      },
      "stage5": {
        "title": "Stufe 5",
        "desc": "Sehr starkes Infektionsgeschehen >100, <200",
        "incidence": {
          "gt": 100,
          "lt": 200
        }
      },
      "stage6": {
        "title": "Stufe 6",
        "desc": "Eskalierendes Infektionsgeschehen >200 bzw. ab einem R-Faktor > 1,2",
        "incidence": {
          "gt": 200,
          "lt": 100000
        }
      }
    },
    "areas": [
      {
        "titles": ["Zusammenkünfte in privaten Räumen (kein Abstand, keine MNB)"],
        "ico": "https://img.icons8.com/officel/80/000000/meeting-room.png",
        "id": "0001",
        "stages": {
          "stage1": {
            "lines": [
              "Keine Begrenzung"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Max. 10 Personen oder max. 2 Haushalte, Kinder unter 14 Jahre frei"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Max. 5 Personen 2-Haushalte-Regel Kinder unter 14 Jahre frei"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Eigener Haushalt plus max. 1 Person, Ausnahmen für Kinder unter 6 Jahre"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Eigener Haushalt plus max. 1 Person, Ausnahmen für Kinder unter 6 Jahre"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Nur der eigene Haushalt, keine Besucher (ggf. Ausnahme für Single-Haushalte)"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Zusammenkünfte im öffentlichen Bereich (kein Abstand, keine MNB)"],
        "ico": "https://img.icons8.com/clouds/100/000000/meeting.png",
        "id": "0002",
        "stages": {
          "stage1": {
            "lines": [
              "Keine Begrenzung"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Max. 10 Personen oder max. 2 Haushalte, Kinder unter 14 Jahre frei"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Max. 5 Personen 2-Haushalte-Regel Kinder unter 14 Jahre frei"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Eigener Haushalt plus max. 1 Person, Ausnahmen für Kinder unter 6 Jahre"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Eigener Haushalt plus max. 1 Person, Ausnahmen für Kinder unter 6 Jahre"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Nur der eigene Haushalt (ggf. Ausnahme für Single-Haushalte)   Ausgangsbeschränkungen (Begrenzung zeitlich und/ oder räumlich)"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Plenum, Ausschüsse und andere Gremien des Landtages und der kommunalen Vertretungen, Gerichte und Staatsanwaltschaften"],
        "ico": "https://img.icons8.com/officel/80/000000/courthouse.png",
        "id": "0003",
        "stages": {
          "stage1": {
            "lines": [
              "Keine Begrenzung, aber mit Hygienekonzepten"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Keine Begrenzung, aber mit Hygienekonzepten"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Keine Begrenzung, aber mit Hygienekonzepten"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Keine Begrenzung, aber mit Hygienekonzepten; Empfehlung Testung"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Empfehlung digitale Formate, Präsenz mit Hygienekonzepten; dringende Empfehlung Testung"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Empfehlung digitale Formate, Präsenz mit Hygienekonzepten; dringende Empfehlung Testung"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Demonstrationen"],
        "ico": "https://img.icons8.com/officel/80/000000/strike.png",
        "id": "0004",
        "stages": {
          "stage1": {
            "lines": [
              "Keine Begrenzung",
              "Zugelassen mit Schutzmaßnahmen"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Keine Begrenzung",
              "Zugelassen mit Schutzmaßnahmen"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Keine Begrenzung",
              "Zugelassen mit Schutzmaßnahmen"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Keine Begrenzung",
              "Zugelassen mit Schutzmaßnahmen"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Erhöhte Anforderungen an Genehmigung"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Deutlich gesteigerte Anforderungen an Genehmigung"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Messen, gewerbliche Ausstellungen"],
        "ico": "data:image/png;base64,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",
        "id": "0005",
        "stages": {
          "stage1": {
            "lines": [
              "Zugelassen mit Hygienekonzepten"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Zugelassen mit Hygienekonzepten"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Bei stabiler positiver Infektionsentwicklung sowie einem R-Faktor <0,8: Zugelassen, aber mit erhöhten Anforderungen an die Hygienekonzepte (insb. Zugangsbegrenzung, durchgängige MNB)",
              "Bei stabiler positiver Infektionsentwicklung, aber einem R-Faktor >0,8:  Verbot",
              "Bei negativer Infektionsentwicklung:  Verbot"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Verboten"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Verboten"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Verboten"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Jahrmärkte, Spezialmärkte"],
        "ico": "https://img.icons8.com/officel/80/000000/circus-tent.png",
        "id": "0006",
        "stages": {
          "stage1": {
            "lines": [
              "(Lebensmittel-)Wochenmärkte mit Hygienekonzepten geöffnet (Sortiment wie Einzelhandel), sonstige Märkte mit Genehmigung unter Auflagen"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "(Lebensmittel-)Wochenmärkte mit Hygienekonzepten geöffnet (Sortiment wie Einzelhandel), sonstige Märkte mit Genehmigung unter Auflagen"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Bei stabiler positiver Infektionsentwicklung sowie einem R-Faktor <0,8: (Lebensmittel-)Wochenmärkte mit Hygienekonzepten geöffnet (Sortiment wie Einzelhandel), sonstige Märkte mit Genehmigung unter Auflagen\n\n\nBei stabiler positiver Infektionsentwicklung, aber einem R-Faktor >0,8:  (Lebensmittel-)Wochenmärkte mit Hygienekonzepten geöffnet, sonstige Märkte verboten\n\n\nBei stabiler positiver Infektionsentwicklung, aber einem R-Faktor >0,8:  (Lebensmittel-)Wochenmärkte mit Hygienekonzepten geöffnet, sonstige Märkte verboten"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "(Lebensmittel-)Wochenmärkte mit Hygienekonzepten geöffnet (Sortiment wie Einzelhandel), sonstige Märkte verboten"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "(Lebensmittel-)Wochenmärkte mit Hygienekonzepten geöffnet (Sortiment wie Einzelhandel), sonstige Märkte verboten"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "(Lebensmittel-)Wochenmärkte mit Hygienekonzepten geöffnet (Sortiment wie Einzelhandel), sonstige Märkte verboten"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Sonstige organisierte stationäre Indoor- Veranstaltungen* (einschl. Theater, Kinos, Kulturzentren, Zuschauer Sportveranstaltungen)  *Betrieblich notwendige Zusammenkünfte sind hiervon nicht erfasst."],
        "ico": "https://img.icons8.com/nolan/96/movie-projector.png",
        "id": "0007",
        "stages": {
          "stage1": {
            "lines": [
              "•  Max. 500 Personen stationär genehmigungsfrei mit Hygienekonzept •  mehr als 500 genehmigungsfrei mit Hygienekonzept nur bei durch Rechtsvorschriften vorgeschriebenen Zusammenkünften •  ansonsten genehmigungspflichtig (dabei aber max. Höchstgrenze 30 Prozent der Zuschauerplätze), •  generell mit MNB-Pflicht solange nicht Sitzplatz eingenommen wurde •  Schachbrettbelegung mit einem reduzierten Abstand von 1m möglich, wenn es sich um Veranstaltungen handelt, bei denen die Besucherinnen und Besucher Interaktion und Kommunikation\nuntereinander vermeiden und es sich bei geschlossenen Räumen um durch eine Lüftungsanlage mit Frischluftzufuhr belüftete Räume handelt."
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "•  Max. 250 Personen stationär genehmigungsfrei mit Hygienekonzept •  mehr als 250 genehmigungsfrei mit Hygienekonzept nur bei durch Rechtsvorschriften vorgeschriebenen Zusammenkünften •  ansonsten genehmigungspflichtig (dabei aber max. Höchstgrenze 30 Prozent der Zuschauerplätze), •  generell mit MNB-Pflicht solange nicht Sitzplatz eingenommen wurde •  generell mit erhöhtem MNB- Standard OP-Maske oder FFP2 •  Schachbrettbelegung mit einem reduzierten Abstand von 1m möglich, wenn es sich\num Veranstaltungen handelt, bei denen die Besucherinnen und Besucher Interaktion und Kommunikation untereinander vermeiden und es sich bei geschlossenen Räumen um durch eine Lüftungsanlage mit Frischluftzufuhr belüftete Räume handelt."
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Bei stabiler positiver Infektionsentwicklung sowie einem R-Faktor <0,8: •  Max. 100 Personen stationär genehmigungsfrei mit Hygienekonzept •  mehr als 100 nur bei durch Rechtsvorschriften vorgeschriebenen Zusammenkünften mit erhöhten Anforderungen an Hygienekonzept (keine Ausnahme Abstand/ durchgängige MNB, mit erhöhtem MNB-Standard OPMaske oder FFP2) •  generell keine Ausnahme Abstand •  generell mit durchgängiger MNB-Pflicht •  generell mit erhöhtem MNB- Standard OP-Maske oder FFP2\n\n\"Bei stabiler positiver Infektionsentwicklung, aber einem R-Faktor >0,8:  Umstellung auf digitale Formate, als Präsenzveranstaltung zugelassen nur durch Rechtsvorschriften vorgeschriebene Sitzungen und Zusammenkünfte.\n\n\nBei negativer Infektionsentwicklung:  Umstellung auf digitale Formate, als Präsenzveranstaltung zugelassen nur durch Rechtsvorschriften vorgeschriebene Sitzungen und Zusammenkünfte.\""
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "•  Umstellung auf digitale Formate •  In Präsenz zugelassen nur durch Rechtsvorschriften vorgeschriebene Sitzungen und Zusammenkünfte. •  generell mit MNB-Pflicht solange nicht Sitzplatz eingenommen wird  •  generell mit erhöhtem MNB- Standard OP-Maske oder FFP2"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "•  Umstellung auf digitale Formate •  In Präsenz zugelassen nur durch Rechtsvorschriften vorgeschriebene Sitzungen und Zusammenkünfte. •  generell mit MNB-Pflicht solange nicht Sitzplatz eingenommen wird  •  generell mit erhöhtem MNB- Standard OP-Maske oder FFP2"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Verboten, Umstellung komplett auf Online-Formate"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Sonstige organisierte nicht-stationäre IndoorVeranstaltungen* (einschl. Theater, Kinos, Kulturzentren, Zuschauer Sportveranstaltungen)  *Betrieblich notwendige Zusammenkünfte sind hiervon nicht erfasst."],
        "ico": "https://img.icons8.com/color/96/000000/theatre-stage.png",
        "id": "0008",
        "stages": {
          "stage1": {
            "lines": [
              "•  max. 250 Personen mit Hygienekonzept (analog Saalbetrieb),   •  ansonsten genehmigungspflichtig •  generell mit MNB-Pflicht solange nicht Sitzplatz eingenommen wird"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "•  max. 100 Personen (analog Saalbetrieb),  •  ansonsten genehmigungspflichtig •  mit MNB-Pflicht solange nicht Sitzplatz eingenommen wird •  generell mit erhöhtem MNB- Standard OP-Maske oder FFP2"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Bei stabiler positiver Infektionsentwicklung sowie einem R-Faktor <0,8:  Max. 50 Personen  •  mit durchgängiger MNB- Pflicht, auch bei evtl. Saalbetrieb •  mit erhöhtem MNB-Standard OP-Maske oder FFP2\n\n\nBei stabiler positiver Infektionsentwicklung, aber einem R-Faktor >0,8: Nicht-Stationäre Veranstaltungen verboten\n\n\nBei negativer Infektionsentwicklung:  Nicht-Stationäre Veranstaltungen verboten"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Nicht-Stationäre Veranstaltungen verboten"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Nicht-Stationäre Veranstaltungen verboten."
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              ""
            ],
            "icon": null
          }
        }
      },
      {
        "titles": [
            "Outdoor Konzerte",
            "Outdoor Sportveranstaltungen",
            "Osterfeuer"
        ],
        "ico": [
          "https://img.icons8.com/color/96/000000/concert.png", 
          "https://img.icons8.com/ios/100/000000/stadium-.png", 
          "https://img.icons8.com/cotton/64/000000/bonfire.png"
        ],
        "id": "0009",
        "stages": {
          "stage1": {
            "lines": [
              "•  Max. 500 Personen genehmigungsfrei, mit Hygienekonzept •  mehr als 500 genehmigungsfrei nur bei durch Rechtsvorschriften vorgeschriebenen Zusammenkünften •  ansonsten genehmigungspflichtig •  generell mit MNB-Pflicht solange nicht Sitzplatz eingenommen wird"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "•  Max. 250 Personen genehmigungsfrei, mit Hygienekonzept •  mehr als 250 genehmigungsfrei nur bei durch Rechtsvorschriften vorgeschriebenen Zusammenkünften •  ansonsten genehmigungspflichtig •  generell mit MNB-Pflicht solange nicht Sitzplatz eingenommen wird  •  generell mit erhöhtem MNB- Standard OP-Maske oder FFP2"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Bei stabiler positiver Infektionsentwicklung sowie einem R-Faktor <0,8:  Max. 100 Personen  •  mehr als 100 nur bei durch Rechtsvorschriften vorgeschriebenen Zusammenkünften •  generell mit MNB-Pflicht solange nicht Sitzplatz eingenommen wird\n\n\nBei stabiler positiver Infektionsentwicklung, aber einem R-Faktor >0,8:  Umstellung auf digitale Formate, zugelassen nur durch Rechtsvorschriften vorgeschriebene Sitzungen und Zusammenkünfte\n\nBei negativer Infektionsentwicklung:  Umstellung auf digitale Formate, zugelassen nur durch Rechtsvorschriften vorgeschriebene Sitzungen und Zusammenkünfte. Bei negativer Infektionsentwicklung:"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "•  Umstellung auf digitale Formate •  In Präsenz zugelassen nur durch Rechtsvorschriften vorgeschriebene Sitzungen und Zusammenkünfte. •  generell mit MNB-Pflicht solange nicht Sitzplatz eingenommen wird  •  generell mit erhöhtem MNB- Standard OP-Maske oder FFP2"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "•  Umstellung auf digitale Formate •  In Präsenz zugelassen nur durch Rechtsvorschriften vorgeschriebene Sitzungen und Zusammenkünfte. •  generell mit MNB-Pflicht solange nicht Sitzplatz eingenommen wird  •  generell mit erhöhtem MNB- Standard OP-Maske oder FFP2"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Verboten, Umstellung komplett auf Online-Formate"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Sport –Breitensport"],
        "ico": "https://img.icons8.com/dusk/64/000000/track-and-field.png",
        "id": "0010",
        "stages": {
          "stage1": {
            "lines": [
              "•  Sportanlagen mit Hygienekonzept geöffnet.  Kontaktsport zulässig. •  Zuschauerzahl beschränkt (Bedingungen siehe organisierte Veranstaltungen)"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "•  Sportanlagen mit Hygienekonzept geöffnet. •  Kontaktsport beschränkt auf max. 60 Personen. •  Zuschauerzahl beschränkt (Bedingungen siehe organisierte Veranstaltungen)"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "•  Sportanlagen geöffnet mit erhöhten Anforderungen an Hygienekonzept (Duschen/ Umkleiden geschlossen •  Kontaktsport beschränkt auf max. 30 Personen im Freien; Kontaktsport für Kinder bis 14 Jahre auch Indoor zulässig. •  Sonstige Gruppenangebote in Abhängigkeit qm/Person und Lüftungskonzept) •  Zuschauerzahl beschränkt (Bedingungen siehe organisierte Veranstaltungen)"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "•  Sportanlagen nur für Individualsport geöffnet.  •  Kontaktsport für Kinder bis 14 Jahre als Gruppenangebot im Freien zulässig  Keine Zuschauer."
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "•  Sportanlagen nur für Individualsport geöffnet.  •  Keine Zuschauer."
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Sportanlagen geschlossen"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Sport –Spitzen- und Profisport"],
        "ico": "https://img.icons8.com/dusk/64/000000/american-football-player.png",
        "id": "0011",
        "stages": {
          "stage1": {
            "lines": [
              "•  Erlaubt mit Hygienekonzept •  Zuschauerzahl beschränkt (Bedingungen siehe organisierte Veranstaltungen)"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "•  Erlaubt mit Hygienekonzept (insb. regelmäßige Tests bei Kontaktsport) •  Zuschauerzahl beschränkt (Bedingungen siehe organisierte Veranstaltungen)"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "•  Erlaubt mit Hygienekonzept (insb. regelmäßige Tests bei Kontaktsport) •  Zuschauerzahl beschränkt (Bedingungen siehe organisierte Veranstaltungen)"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "•  Erlaubt mit Hygienekonzept (insb. regelmäßige Tests bei Kontaktsport) •  Keine Zuschauer"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "•  Erlaubt mit Hygienekonzept (insb. regelmäßige Tests bei Kontaktsport) •  Keine Zuschauer"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Einstellung, aber in Abhängigkeit von bundesweiten Entscheidungen."
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Schulsport"],
        "ico": "https://img.icons8.com/dusk/64/000000/girl-running--v1.png",
        "id": "0012",
        "stages": {
          "stage1": {
            "lines": [
              "Erlaubt (bis 35 Personen innerhalb festgelegter Kohorten)"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Erlaubt (bis 35 Personen innerhalb festgelegter Kohorten)"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Erlaubt (bis 35 Personen innerhalb festgelegter Kohorten), kein Kontaktsport (incl. Schwimmsport)"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Erlaubt (bis 35 Personen innerhalb festgelegter Kohorten), kein Kontaktsport (incl. Schwimmsport); im Szenario C: kein Schulsport, da Schulschließung"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Erlaubt (bis 35 Personen innerhalb festgelegter Kohorten) im Szenario C: kein Schulsport, da Schulschließung"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "im Szenario C: kein Schulsport, da Schulschließung"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Fitnessstudios sowie Kletterhallen und Kletterparks und ähnliche Einrichtungen"],
        "ico": "https://img.icons8.com/dusk/64/000000/deadlift.png",
        "id": "0013",
        "stages": {
          "stage1": {
            "lines": [
              "Geöffnet mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              " Geöffnet mit Hygienekonzept  Gruppenangebote in Abhängigkeit qm/Person und Lüftungskonzept)"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "•  Geöffnet mit erhöhten Anforderungen an Hygienekonzept (Duschen/ Umkleiden geschlossen, •  Gruppenangebote in Abhängigkeit qm/Person und Lüftungskonzept)"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Schwimmbäder"],
        "ico": "https://img.icons8.com/dusk/64/000000/outdoor-swimming-pool.png",
        "id": "0014",
        "stages": {
          "stage1": {
            "lines": [
              "Geöffnet mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Geöffnet mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Bei stabiler positiver Infektionsentwicklung: •  Hallenschwimmbäder für private Nutzung geschlossen. •  Gruppenangebote in Abhängigkeit von Hygienekonzept für bis zu zehn Personen  •  Freibäder mit erhöhten Anforderungen an Hygienekonzept geöffnet (Schließung Dusch-, Umkleideräume)",
              "Bei negativer Infektionsentwicklung:  •  Geschlossen für private Nutzung •  Gruppenangebote in Abhängigkeit von Hygienekonzept für bis zu fünf Personen"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "•  Geschlossen für private Nutzung •  Gruppenangebote in Abhängigkeit von Hygienekonzept für bis zu fünf Personen"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Geschlossen für private Nutzung"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Geschlossen für private Nutzung"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Spielplätze"],
        "ico": "https://img.icons8.com/dusk/64/000000/tire-swing.png",
        "id": "0016",
        "stages": {
          "stage1": {
            "lines": [
              "Geöffnet"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Geöffnet"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Geöffnet"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Spielplätze drinnen geschlossen; Spielplätze draußen geöffnet"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Spielplätze drinnen geschlossen; Spielplätze draußen geöffnet"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Spielplätze drinnen geschlossen; Spielplätze draußen geöffnet"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Religiöse Veranstaltungen"],
        "ico": "https://img.icons8.com/dusk/64/000000/church.png",
        "id": "0017",
        "stages": {
          "stage1": {
            "lines": [
              "Gottesdienste mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "•  Gottesdienste mit Hygienekonzept •  MNB: erhöhter Standard OPMaske, FFP2"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "•  Gottesdienste mit Hygienekonzept •  MNB: erhöhter Standard OPMaske, FFP2"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Empfehlung digitale Formate, Gottesdienste mit erhöhten Anforderungen an Hygienekonzept (insb. Anzeigepflicht bei Gottesdiensten >10, erhöhter MNB-Standard OP-Maske oder FFP2)"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Empfehlung digitale Formate, Gottesdienste mit erhöhten Anforderungen an Hygienekonzept (insb. Anzeigepflicht bei Gottesdiensten >10, erhöhter MNB-Standard OP-Maske oder FFP2)"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Ausschließlich digitale Formate, Gottesdienste in der Regel untersagt, Öffnung Gotteshäuser für private Gebete mit erhöhtem MNB-Standard OP-Maske oder FFP2 erlaubt"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Hochzeiten, Taufen"],
        "ico": "https://img.icons8.com/ultraviolet/80/000000/city-church.png",
        "id": "0018",
        "stages": {
          "stage1": {
            "lines": [
              "•  Keine Beschränkung Personenzahl bei Zeremonie (soweit Abstand gewahrt ist),  •  bei der anschließenden Feier siehe Regelungen Saalbetrieb"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "•  Keine Beschränkung bei Zeremonie (soweit Abstand gewahrt ist und mit erhöhtem MNB-Standard OPMaske oder FFP2),  •  bei der anschließenden Feier siehe Regelungen Saalbetrieb"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "•  Keine Beschränkung Personenzahl bei Zeremonie (soweit Abstand gewahrt ist und mit erhöhtem MNBStandard OP-Maske oder FFP2),  •  bei der anschließenden Feier siehe Regelungen Saalbetrieb"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Beschränkung Personenzahl bei Zeremonie auf max. 100 Personen (soweit Abstand gewahrt ist und mit erhöhtem MNB-Standard OP-Maske oder FFP2), bei der Feier siehe private Zusammenkünfte"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Zeremonie max. eigener Haushalt bzw. max. 20 Personen"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Zeremonie max. eigener Haushalt bzw. max. 10 Personen"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Beerdigungen"],
        "ico": "https://img.icons8.com/officel/64/000000/cemetery.png",
        "id": "0019",
        "stages": {
          "stage1": {
            "lines": [
              "•  Keine Beschränkung Personenzahl bei Trauerfeier/ Gang zum Grab (soweit Abstand gewahrt ist),  •  bei der anschließenden Feier siehe Regelungen Saalbetrieb"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "•  Keine Beschränkung Personenzahl bei Trauerfeier/ Gang zum Grab (soweit Abstand gewahrt ist und mit erhöhtem MNB-Standard OPMaske oder FFP2) •  bei der anschließenden Feier siehe Regelungen Saalbetrieb"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "•  Keine Beschränkung Personenzahl bei Trauerfeier/ Gang zum Grab (soweit Abstand gewahrt ist und mit erhöhtem MNB-Standard OPMaske oder FFP2) •  bei der anschließenden Feier siehe private Zusammenkünfte"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Beschränkung Personenzahl bei Trauerfeier/ Gang zum Grab auf max. 100 Personen (soweit Abstand gewahrt ist und mit erhöhtem MNB-Standard OP- Maske oder FFP2), bei der Feier siehe private Zusammenkünfte"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Trauerfeier/ Gang zum Grab max. eigener Haushalt bzw. max. 20 Personen"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Trauerfeier/ Gang zum Grab max. eigener Haushalt bzw. max. 10 Personen"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Gastronomie mit Essensservice"],
        "ico": "https://img.icons8.com/dusk/64/000000/waiter.png",
        "id": "0020",
        "stages": {
          "stage1": {
            "lines": [
              "Geöffnet mit Hygienekonzept; Saalbetrieb max. 250 Personen (analog nicht-stationäre indoor Veranstaltungen)"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Geöffnet mit Hygienekonzept; Saalbetrieb bis 100 Personen (analog nicht-stationäre indoor Veranstaltungen)"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Bei stabiler positiver Infektionsentwicklung sowie einem R-Faktor <0,8: •  Geöffnet mit Hygienekonzept;  •  Sperrstunde 23:00 Uhr •  kein Saalbetrieb\n\n\nBei stabiler positiver Infektionsentwicklung, aber einem R-Faktor >0,8: •  Geschlossen, nur Außer- Haus-Verkauf •  Ausnahmen: Einrichtungen NuWG, Betreutes Wohnen Autobahngaststätten, Beherbergung (nur Zimmerservice)\n\nBei negativer Infektionsentwicklung:  •  Geschlossen, nur AußerHaus-Verkauf •  Ausnahmen: Einrichtungen NuWG, Betreutes Wohnen Autobahngaststätten, Beherbergung (nur Zimmerservice)"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "•  Geschlossen, nur Außer- Haus-Verkauf •  Ausnahmen: Einrichtungen NuWG, Betreutes Wohnen Autobahngaststätten, Beherbergung (nur Zimmerservice)"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "•  Geschlossen, nur Außer- Haus-Verkauf •  Ausnahmen: Einrichtungen NuWG, Betreutes Wohnen Autobahngaststätten, Beherbergung (nur Zimmerservice)"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "•  Geschlossen, nur Außer- Haus-Verkauf •  Ausnahmen: Einrichtungen NuWG, Betreutes Wohnen Autobahngaststätten, Beherbergung (nur Zimmerservice)"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Kantinen/ Mensen"],
        "ico": "https://img.icons8.com/office/96/000000/restaurant-building.png",
        "id": "0021",
        "stages": {
          "stage1": {
            "lines": [
              "Geöffnet mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Geöffnet mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Bei stabiler positiver Infektionsentwicklung sowie einem R-Faktor <0,8: Geöffnet mit Hygienekonzept\n\n\nBei stabiler positiver Infektionsentwicklung, aber einem R-Faktor >0,8:  Geschlossen, nur AußerHaus-Verkauf (analog Gastronomie)  Ausnahmen: Ernährungswirtschaft, Krankenhäuser sowie wenn aus hygienischen oder sonstigen zwingenden Gründen eine Nahrungsaufnahme am Arbeitsplatz nicht möglich ist\n\n\nBei negativer Infektionsentwicklung:   Geschlossen, nur AußerHaus-Verkauf (analog Gastronomie)  Ausnahmen: Ernährungswirtschaft, Krankenhäuser sowie wenn aus hygienischen oder sonstigen zwingenden Gründen eine Nahrungsaufnahme am Arbeitsplatz nicht möglich ist"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              " Geschlossen, nur AußerHaus-Verkauf (analog Gastronomie)  Ausnahmen: Ernährungswirtschaft, Krankenhäuser sowie wenn aus hygienischen oder sonstigen zwingenden Gründen eine Nahrungsaufnahme am Arbeitsplatz nicht möglich ist"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              " Geschlossen, nur AußerHaus-Verkauf (analog Gastronomie)  Ausnahmen: Ernährungswirtschaft, Krankenhäuser sowie wenn aus hygienischen oder sonstigen zwingenden Gründen eine Nahrungsaufnahme am Arbeitsplatz nicht möglich ist"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              " Geschlossen, nur AußerHaus-Verkauf (analog Gastronomie)  Ausnahmen: Ernährungswirtschaft, Krankenhäuser sowie wenn aus hygienischen oder sonstigen zwingenden Gründen eine Nahrungsaufnahme am Arbeitsplatz nicht möglich ist"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Bars"],
        "ico": "https://img.icons8.com/officel/80/000000/beer.png",
        "id": "bars",
        "stages": {
          "stage1": {
            "lines": [
              "Geöffnet mit Hygienekonzept Personenbegrenzung mind.  10qm/ Person"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Geöffnet mit Hygienekonzept Personenbegrenzung mind.  10qm/ Person"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Discotheken, Clubs"],
        "ico": "https://img.icons8.com/fluent/96/000000/disco-ball.png",
        "id": "0023",
        "stages": {
          "stage1": {
            "lines": [
              "Geöffnet mit Hygienekonzept, Personenbegrenzung mind.  10qm/ Person"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Beherbergung"],
        "ico": "https://img.icons8.com/fluent/96/000000/hostel.png",
        "id": "0024",
        "stages": {
          "stage1": {
            "lines": [
              "•  Geöffnet mit Hygienekonzept. •  Restaurantbetrieb siehe Gastronomie mit Essensservice."
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "•  Geöffnet mit Hygienekonzept. •  Restaurantbetrieb siehe Gastronomie mit Essensservice."
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "•  Geöffnet mit Hygienekonzept. •  Restaurantbetrieb siehe Gastronomie mit Essensservice."
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "•  Geöffnet nur für Geschäfts/Dienstreisen und andere notwendige Zwecke, keine Unterbringung für touristische Zwecke.  •  Ausschließlich Zimmerservice"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "•  Geöffnet nur für Geschäfts/Dienstreisen und andere notwendige Zwecke, keine Unterbringung für touristische Zwecke.  •  Ausschließlich Zimmerservice"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "•  Geöffnet nur für Geschäfts/Dienstreisen und andere notwendige Zwecke, keine Unterbringung für touristische Zwecke.  •  Ausschließlich Zimmerservice"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Körpernahe Dienstleistungen"],
        "ico": "https://img.icons8.com/nolan/96/hair-dryer.png",
        "id": "0025",
        "stages": {
          "stage1": {
            "lines": [
              "Geöffnet mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Geöffnet mit Hygienekonzept und erhöhtem Standard OP- Maske oder FFP2"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Bei stabiler positiver Infektionsentwicklung sowie einem R-Faktor <0,8: Alle körpernahen Dienstleistungen geöffnet mit durchgängiger MNB und mit erhöhtem MNB-Standard OPMaske oder FFP2\n\n\nBei stabiler positiver Infektionsentwicklung, aber einem R-Faktor >0,8: •  Nur Fußpflege und medizinisch notwendige Dienstleistungen mit Hygienekonzept geöffnet •  MNB: erhöhter Standard OPMaske, FFP2\n\n\nBei negativer Infektionsentwicklung:  •  Nur Fußpflege und medizinisch notwendige Dienstleistungen mit Hygienekonzept geöffnet •  MNB: erhöhter Standard OPMaske, FFP2"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "•  Nur Fußpflege und medizinisch notwendige Dienstleistungen mit Hygienekonzept geöffnet •  MNB: erhöhter Standard OPMaske, FFP2"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "•  Nur Fußpflege und medizinisch notwendige Dienstleistungen mit Hygienekonzept geöffnet •  MNB: erhöhter Standard OPMaske, FFP2"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Einzelhandel"],
        "ico": "https://img.icons8.com/plasticine/100/000000/shop.png",
        "id": "0026",
        "stages": {
          "stage1": {
            "lines": [
              "Geöffnet mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "•  Geöffnet mit erhöhten Anforderungen an Hygienekonzept •  Zugangsbegrenzung notwendige Grundversorgung: <800qm Verkaufsfläche mind. 10qm/ Person, >800qm Verkaufsfläche 20qm/Person •  MNB: erhöhter Standard OPMaske, FFP2"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "ggf. Öffnung in Abhängigkeit bundesweiter Entscheidung. Voraussetzungen für eine Öffnung wären: •  Geöffnet mit erhöhten Anforderungen an Hygienekonzept •  Zugangsbegrenzung außerhalb notwendiger Grundversorgung: <800qm Verkaufsfläche mind. 20 qm/ Person, >800qm Verkaufsfläche 30 qm/Person, •  Zugangsbegrenzung bei notwendiger Grundversorgung: <800qm Verkaufsfläche mind. 10qm/ Person, >800qm Verkaufsfläche 20qm/Person •  erhöhter MNB-Standard OPMaske oder FFP2)\n\nBei negativer Infektionsentwicklung:  •  Geschlossen mit Ausnahme notwendige Grundversorgung •  Bestell- und Abholservice erlaubt •  Zugangsbegrenzung notwendige Grundversorgung: <800qm Verkaufsfläche mind. 10qm/ Person, >800qm Verkaufsfläche 20qm/Person •  MNB: erhöhter Standard OPMaske, FFP2"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "•  Geschlossen mit Ausnahme notwendige Grundversorgung •  Bestell- und Abholservice erlaubt •  Zugangsbegrenzung notwendige Grundversorgung: <800qm Verkaufsfläche mind. 10qm/ Person, >800qm Verkaufsfläche 20qm/Person •  MNB: erhöhter Standard OPMaske, FFP2"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "•  Geschlossen mit Ausnahme notwendige Grundversorgung •  Bestell- und Abholservice erlaubt •  Zugangsbegrenzung notwendige Grundversorgung: <800qm Verkaufsfläche mind. 10qm/ Person, >800qm Verkaufsfläche 20qm/Person •  MNB: erhöhter Standard OPMaske, FFP2"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "•  Geschlossen mit Ausnahme notwendige Grundversorgung •  Bestell- und Abholservice erlaubt •  Zugangsbegrenzung notwendige Grundversorgung: <800qm Verkaufsfläche mind. 10qm/ Person, >800qm Verkaufsfläche 20qm/Person •  MNB: erhöhter Standard OPMaske, FFP2"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Sonstige Betriebs- und Arbeitsstätten"],
        "ico": "https://img.icons8.com/cotton/64/000000/factory.png",
        "id": "0027",
        "stages": {
          "stage1": {
            "lines": [
              "•  Vorgaben entsprechend SARS-CoV2- Arbeitsschutzregel, -standard und -verordnung •  Für Fahrgemeinschaft zu/ von Arbeitsort gilt Regelung zur Kontaktbeschränkung."
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "•  Vorgaben entsprechend SARS-CoV2- Arbeitsschutzregel, -standard und -verordnung •  Für Fahrgemeinschaft zu/ von Arbeitsort gilt Regelung zur Kontaktbeschränkung."
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "•  Vorgaben entsprechend SARS-CoV2- Arbeitsschutzregel, -standard und -verordnung •  Für Fahrgemeinschaft zu/ von Arbeitsort gilt Regelung zur Kontaktbeschränkung."
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "•  Vorgaben entsprechend SARS-CoV2- Arbeitsschutzregel, -standard und -verordnung •  Für Fahrgemeinschaft zu/ von Arbeitsort gilt Regelung zur Kontaktbeschränkung."
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "•  Vorgaben entsprechend SARS-CoV2- Arbeitsschutzregel, -standard und -verordnung •  Für Fahrgemeinschaft zu/ von Arbeitsort gilt Regelung zur Kontaktbeschränkung •  Berufliche Fort- und Weiterbildung im Distanzlernen mit Ausnahme Prüfungsvorbereitung und notwendige Praxisteile"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "•  Vorgaben entsprechend SARS-CoV2- Arbeitsschutzregel, -standard und -verordnung •  Für Fahrgemeinschaft zu/ von Arbeitsort gilt Regelung zur Kontaktbeschränkung •  Berufliche Fort- und Weiterbildung im Distanzlernen mit Ausnahme Prüfungsvorbereitung und notwendige Praxisteile"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Bildung – Kita"],
        "ico": "https://img.icons8.com/color/96/000000/seesaw.png",
        "id": "0028",
        "stages": {
          "stage1": {
            "lines": [
              "Keine MNB\n\nSzenario A als Regelfall (eingeschränkter Regelbetrieb Kita) Szenario B (feste Gruppen) bei Betroffenheit"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Keine MNB\n\nSzenario A als Regelfall (eingeschränkter Regelbetrieb Kita) Szenario B (feste Gruppen) bei Betroffenheit"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Keine MNB\n\n\nSzenario A als Regelfall (eingeschränkter Regelbetrieb Kita)  Szenario B (feste Gruppen) bei Betroffenheit"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "MNB im Hort\n\n\nSzenario B (feste Gruppen)"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "MNB im Hort\n\n\nSzenario C (geschlossen mit bis zu 50 % Notbetreuung)"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "MNB im Hort\n\n\nSzenario C (geschlossen mit bis zu 30 % Notbetreuung)"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Bildung - Schule (ABS, BBS)   * Förderschulen GE, KME, BES und Einzelfälle Taubblinde wie Primarbereich   * Geltungsbereich Stufenplan: siehe Vorbemerkung   *Ab Landesinzidenz-Stufe 3 und niedriger werden für die Beschränkungen im Bildungsbereich regionale Inzidenzen zugrunde gelegt."],
        "ico": "https://img.icons8.com/cotton/64/000000/school-1-1.png",
        "id": "0029",
        "stages": {
          "stage1": {
            "lines": [
              "MNB in gekennzeichneten Bereichen; MNB im Unterricht ab SEK I bei Betroffenheit Schule; \n\n\nSzenario A (Präsenzunterricht)\n\n\nNotbetreuung nicht erforderlich"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "MNB in gekennzeichneten Bereichen; MNB im Unterricht ab SEK I bei Betroffenheit Schule;   \n\n\nSzenario A (Präsenzunterricht)\n\n\nNotbetreuung nicht erforderlich"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "MNB in gekennzeichneten Bereichen; MNB im Unterricht ab SEK I; \n\n\n•  Szenario A (Präsenzunterricht) als Regelfall; •  Szenario B bei Betroffenheit der Schule für einen Zeitraum von 4 Wochen\n\n\nab Szenario B Notbetreuung"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "MNB in gekennzeichneten Bereichen, MNB im Unterricht ab SEK I;\n\n•  Szenario B als Regelfall; \n•  Szenario C bei Betroffenheit der Schule für einen Zeitraum von 2 Wochen\n\n\nAuch bei positiver Infektionsentwicklung: Mindestlaufzeit nach Wechsel ins Szenario B: 4 Wochen, bei Szenario C: 2 Wochen\t\t\n\n\nNotbetreuung"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "MNB in gekennzeichneten Bereichen, MNB im Unterricht ab Primarbereich\n\n\n•  Szenario B als Regelfall im Primarbereich; •  Szenario C Sek. I / Sek. II BBS, (Abschlussklassen analog Primarbereich); •  Szenario C Primarbereich und Abschlussklassen bei Betroffenheit der Schule für einen Zeitraum von 2 Wochen\n\n\nAuch bei positiver Infektionsentwicklung: Mindestlaufzeit nach Wechsel ins Szenario B: 4 Wochen, bei Szenario C: 2 Wochen\t\t\n\n\nNotbetreuung bis zu 50%"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Durchgängige MNB-Pflicht\n\n\nSzenario C\n\n\nAuch bei positiver Infektionsentwicklung: Mindestlaufzeit nach Wechsel ins Szenario B: 4 Wochen, bei Szenario C: 2 Wochen\t\t\n\n\nNotbetreuung bis zu 30%"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Bildung - Schulausflüge, fahrten"],
        "ico": "https://img.icons8.com/cotton/64/000000/school-bus-2.png",
        "id": "0030",
        "stages": {
          "stage1": {
            "lines": [
              "Möglich"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Möglich, aber Empfehlung, auf Schulfahrten zu verzichten; Ausnahme: eintägige Fahrten zu außerschulischen Lernorten"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Verbot Ausnahme: eintägige Fahrten zu außerschulischen Lernorten"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Verbot"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Verbot"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Verbot"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Bildung – Hochschulen   *gilt erst ab Sommersemester 2021, bis dahin bleibt es Regelungen Stufe 4"],
        "ico": "https://img.icons8.com/dusk/64/000000/student-female.png",
        "id": "0031",
        "stages": {
          "stage1": {
            "lines": [
              "Entscheidung der jeweiligen Hochschule"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Entscheidung der jeweiligen Hochschule"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Entscheidung der jeweiligen Hochschule"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Verbot Präsenzbetrieb (mit Ausnahme insbesondere Labortätigkeiten, Praktika, praktische und künstlerische Ausbildungsabschnitte und Prüfungen)"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Verbot Präsenzbetrieb (mit Ausnahme insbesondere Labortätigkeiten, Praktika, praktische und künstlerische Ausbildungsabschnitte und Prüfungen)"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Verbot Präsenzbetrieb"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Einrichtungen der beruflichen Aus-, Fort- und Weiterbildung  (inklusive ihrer Beherbergungsstätten, Kantinen und Mensen)"],
        "ico": "https://img.icons8.com/color/96/000000/teacher.png",
        "id": "0032",
        "stages": {
          "stage1": {
            "lines": [
              "MNB in gekennzeichneten Bereichen, Empfehlung MNB im Unterricht, Präsenzbetrieb mit Hygienekonzept erlaubt   Beherbergungsstätten, Kantinen und Mensen geöffnet nach Vorgaben entsprechend SARSCoV2-Arbeitsschutzregel, standard und -verordnung"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "MNB in gekennzeichneten Bereichen, Empfehlung MNB im Unterricht, Präsenzbetrieb mit Hygienekonzept erlaubt   Beherbergungsstätten, Kantinen und Mensen geöffnet nach Vorgaben entsprechend SARSCoV2-Arbeitsschutzregel, standard und -verordnung"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "MNB in gekennzeichneten Bereichen, Empfehlung MNB im Unterricht, Präsenzbetrieb mit Hygienekonzept erlaubt   Beherbergungsstätten, Kantinen und Mensen geöffnet nach Vorgaben entsprechend SARSCoV2-Arbeitsschutzregel, standard und -verordnung"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "MNB in gekennzeichneten Bereichen, Empfehlung MNB im Unterricht, Präsenzbetrieb mit Hygienekonzept erlaubt   Beherbergungsstätten, Kantinen und Mensen geöffnet nach Vorgaben entsprechend SARSCoV2-Arbeitsschutzregel, standard und -verordnung"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Berufliche Aus-, Fort- und Weiterbildung im Distanzlernen mit Ausnahme Prüfungsvorbereitung und notwendige Praxisteile sowie Prüfungsabnahme mit Hygienekonzept   Beherbergungsstätten, Kantinen und Mensen geöffnet nach Vorgaben entsprechend SARSCoV2-Arbeitsschutzregel, standard und -verordnung"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Berufliche Aus-, Fort- und Weiterbildung im Distanzlernen mit Ausnahme Prüfungsvorbereitung und notwendige Praxisteile sowie Prüfungsabnahme mit Hygienekonzept   Beherbergungsstätten, Kantinen und Mensen geöffnet nach Vorgaben entsprechend SARSCoV2-Arbeitsschutzregel, standard und -verordnung"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Bildung – Erwachsenenbildung, Fahrschulen (ohne berufliche Aus-, Fort- und Weiterbildung)"],
        "ico": "data:image/png;base64,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",
        "id": "0033",
        "stages": {
          "stage1": {
            "lines": [
              "MNB in gekennzeichneten Bereichen, Empfehlung MNB im Unterricht\n\n\nPräsenzbetrieb mit Hygienekonzept erlaubt"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "MNB in gekennzeichneten Bereichen, Empfehlung MNB im Unterricht\n\n\nPräsenzbetrieb mit Hygienekonzept erlaubt"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "MNB in gekennzeichneten Bereichen, Empfehlung MNB im Unterricht\n\n\nPräsenzbetrieb mit Hygienekonzept erlaubt"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Verbot Präsenzbetrieb (mit Ausnahme Prüfungen)   Vorbereitungskurse auf nachholende Schulabschlüsse (Zweiter Bildungsweg):  Präsenz im Wechselbetrieb zulässig."
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Verbot Präsenzbetrieb (mit Ausnahme Prüfungen)   Vorbereitungskurse auf nachholende Schulabschlüsse (Zweiter Bildungsweg):  Präsenz im Wechselbetrieb bei Abschlussklassen zulässig. Ansonsten Distanzlernen."
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Verbot Präsenzbetrieb"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Bibliotheken, Büchereien"],
        "ico": "https://img.icons8.com/color/96/000000/library-building.png",
        "id": "0034",
        "stages": {
          "stage1": {
            "lines": [
              "Geöffnet mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Geöffnet mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Geöffnet mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Geschlossen (ausgenommen wissenschaftliche Bibliotheken wie die Hochschul- und Landesbibliotheken), Bestell- und Abholservice erlaubt"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Geschlossen (ausgenommen wissenschaftliche Bibliotheken wie die Hochschul- und Landesbibliotheken), Bestell- und Abholservice erlaubt"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Geschlossen (ausgenommen wissenschaftliche Bibliotheken wie die Hochschul- und Landesbibliotheken), Bestell- und Abholservice erlaubt"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Öffentliche Transportmittel"],
        "ico": "https://img.icons8.com/dusk/64/000000/train.png",
        "id": "0035",
        "stages": {
          "stage1": {
            "lines": [
              "MNB-Pflicht\n\n\nEmpfehlung außerhalb Rushhour"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "MNB-Pflicht (erhöhter Standard OP-Maske, FFP2)\n\n\nEmpfehlung kapazitätserweiternde Maßnahmen sowie flankierende Maßnahmen zur Entzerrung der Fahrgastströme zu den Hauptverkehrszeiten durch weitgehend zeitlich versetzte Staffelung von Arbeits- und Schulzeiten bzw. Nutzung Homeoffice"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "MNB-Pflicht (erhöhter Standard OP-Maske, FFP2)\n\n\nEmpfehlung kapazitätserweiternde Maßnahmen sowie flankierende Maßnahmen zur Entzerrung der Fahrgastströme zu den Hauptverkehrszeiten durch weitgehend zeitlich versetzte Staffelung von Arbeits- und Schulzeiten bzw. Nutzung Homeoffice"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "MNB-Pflicht (erhöhter Standard OP-Maske, FFP2)\n\n\nEmpfehlung kapazitätserweiternde Maßnahmen sowie flankierende Maßnahmen zur Entzerrung der Fahrgastströme zu den Hauptverkehrszeiten durch weitgehend zeitlich versetzte Staffelung von Arbeits- und Schulzeiten bzw. Nutzung Homeoffice"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "MNB-Pflicht (erhöhter Standard OP-Maske, FFP2)\n\n\nEmpfehlung kapazitätserweiternde Maßnahmen sowie flankierende Maßnahmen zur Entzerrung der Fahrgastströme zu den Hauptverkehrszeiten durch weitgehend zeitlich versetzte Staffelung von Arbeits- und Schulzeiten bzw. Nutzung Homeoffice"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "MNB-Pflicht (erhöhter Standard OP-Maske, FFP2)\n\n\nEmpfehlung kapazitätserweiternde Maßnahmen sowie flankierende Maßnahmen zur Entzerrung der Fahrgastströme zu den Hauptverkehrszeiten durch weitgehend zeitlich versetzte Staffelung von Arbeits- und Schulzeiten bzw. Nutzung Homeoffice"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Touristische Tagesausflüge"],
        "ico": "https://img.icons8.com/cotton/64/000000/route.png",
        "id": "0036",
        "stages": {
          "stage1": {
            "lines": [
              "Keine Beschränkungen"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Keine Beschränkungen"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Keine Beschränkungen"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Empfehlung Stay at home   Verbot touristische BusSchiffsreisen oder ähnliches"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Empfehlung Stay at home   Verbot touristische BusSchiffsreisen oder ähnliches"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Empfehlung Stay at home   Verbot touristische Bus- Schiffsreisen oder ähnliches  Bewegungseinschränkung 15km-Radius"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Kulturelle, touristische und andere indoor Einrichtungen  (einschl. Galerien, Ausstellungen, Museen)   *Theater, Opernhäuser u.ä. etc. sind in den Regelungen zu Veranstaltungen erfasst"],
        "ico": "https://img.icons8.com/color/96/000000/physical-gallery.png",
        "id": "0037",
        "stages": {
          "stage1": {
            "lines": [
              "Geöffnet mit Hygienekonzept (insbesondere Personenbegrenzung/ Größe Einrichtung)"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Geöffnet mit Hygienekonzept (insbesondere Personenbegrenzung/ Größe Einrichtung)"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Bei stabiler positiver Infektionsentwicklung sowie einem R-Faktor <0,8: Geöffnet mit  erhöhten Anforderungen an Hygienekonzept (insb. durchgängige MNB, erhöhter MNB-Standard OP-Maske oder FFP2, Personenbegrenzung/ Größe Einrichtung)\n\n\nBei stabiler positiver Infektionsentwicklung, aber einem R-Faktor >0,8: geschlossen\n\n\nBei negativer Infektionsentwicklung:  geschlossen"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Kulturelle, touristische und andere outdoor Einrichtungen  (einschl. Freilichtmuseen, Zoos, Tierparks)   *Freilichtbühnen u.ä. sind in den Regelungen zu Veranstaltungen erfasst"],
        "ico": "https://img.icons8.com/fluent/96/000000/zoo.png",
        "id": "0038",
        "stages": {
          "stage1": {
            "lines": [
              "Geöffnet mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Geöffnet mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Geöffnet mit erhöhten Anforderungen an Hygienekonzept (insb. durchgängige MNB, Reduzierung Besucherzahl/ Größe Einrichtung)"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Solarien, Saunen"],
        "ico": "data:image/png;base64,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",
        "id": "0039",
        "stages": {
          "stage1": {
            "lines": [
              "Geöffnet"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Geöffnet"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Solarien geöffnet, Saunen geschlossen"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Geschlossen"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Prostitution"],
        "ico": "https://img.icons8.com/cotton/64/000000/sexy-woman.png",
        "id": "0040",
        "stages": {
          "stage1": {
            "lines": [
              "Zugelassen mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Verbot Prostitutionsveranstaltungen und Straßenprostitution, sonstige Prostitution mit Schutzmaßnahmen, ansonsten erlaubt"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Verbot"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Verbot"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Verbot"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Verbot"
            ],
            "icon": null
          }
        }
      },
      {
        "titles": ["Spielbanken, Spielhallen, Wettannahmestellen"],
        "ico": "https://img.icons8.com/plasticine/100/000000/slot-machine.png",
        "id": "0041",
        "stages": {
          "stage1": {
            "lines": [
              "Geöffnet mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage2": {
            "lines": [
              "Geöffnet mit Hygienekonzept"
            ],
            "icon": null
          },
          "stage3": {
            "lines": [
              "Geöffnet mit  erhöhten Anforderungen an Hygienekonzept (insb. durchgängige MNB, erhöhter Standard OP-Maske, FFP2)"
            ],
            "icon": null
          },
          "stage4": {
            "lines": [
              "Verbot"
            ],
            "icon": null
          },
          "stage5": {
            "lines": [
              "Verbot"
            ],
            "icon": null
          },
          "stage6": {
            "lines": [
              "Verbot"
            ],
            "icon": null
          }
        }
      }
    ]
  }
};

export default rules;