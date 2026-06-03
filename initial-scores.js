const INITIAL_SCORES = [
  {
    "id": "seed-score-1",
    "name": "Alysha Andrade",
    "score": 86,
    "absent": false,
    "date": "2025-09-04",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1757001600000
  },
  {
    "id": "seed-score-2",
    "name": "Alysha Andrade",
    "score": 86,
    "absent": false,
    "date": "2025-09-04",
    "notes": "Initial data · PPL · ESP",
    "createdAt": 1757001600001
  },
  {
    "id": "seed-score-3",
    "name": "Alysha Andrade",
    "score": 93.3,
    "absent": false,
    "date": "2025-09-10",
    "notes": "Initial data · PPL · EKJ",
    "createdAt": 1757520000002
  },
  {
    "id": "seed-score-4",
    "name": "Alysha Andrade",
    "score": 95,
    "absent": false,
    "date": "2025-09-11",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1757606400003
  },
  {
    "id": "seed-score-5",
    "name": "Alysha Andrade",
    "score": 98,
    "absent": false,
    "date": "2025-09-16",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1758038400004
  },
  {
    "id": "seed-score-6",
    "name": "Brett Glaser",
    "score": null,
    "absent": true,
    "date": "2025-09-06",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1757174400005
  },
  {
    "id": "seed-score-7",
    "name": "Brett Glaser",
    "score": 86,
    "absent": false,
    "date": "2025-09-24",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1758729600006
  },
  {
    "id": "seed-score-8",
    "name": "Brett Glaser",
    "score": 86,
    "absent": false,
    "date": "2025-09-25",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1758816000007
  },
  {
    "id": "seed-score-9",
    "name": "Brett Glaser",
    "score": 85,
    "absent": false,
    "date": "2025-09-26",
    "notes": "Initial data · IRA · ESP",
    "createdAt": 1758902400008
  },
  {
    "id": "seed-score-10",
    "name": "Brett Glaser",
    "score": 85,
    "absent": false,
    "date": "2025-09-30",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1759248000009
  },
  {
    "id": "seed-score-11",
    "name": "Brett Glaser",
    "score": null,
    "absent": false,
    "date": "2025-09-30",
    "notes": "Initial data · No score · IRA · Did not tell me his score. · NR",
    "createdAt": 1759248000010
  },
  {
    "id": "seed-score-12",
    "name": "Brett Glaser",
    "score": 88,
    "absent": false,
    "date": "2025-10-06",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1759766400011
  },
  {
    "id": "seed-score-13",
    "name": "Brett Glaser",
    "score": 88,
    "absent": false,
    "date": "2025-10-06",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1759766400012
  },
  {
    "id": "seed-score-14",
    "name": "Brett Glaser",
    "score": 88,
    "absent": false,
    "date": "2025-10-06",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1759766400013
  },
  {
    "id": "seed-score-15",
    "name": "Brett Glaser",
    "score": 86,
    "absent": false,
    "date": "2025-10-07",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1759852800014
  },
  {
    "id": "seed-score-16",
    "name": "Brett Glaser",
    "score": 93,
    "absent": false,
    "date": "2025-10-07",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1759852800015
  },
  {
    "id": "seed-score-17",
    "name": "Brett Glaser",
    "score": 90,
    "absent": false,
    "date": "2025-10-09",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1760025600016
  },
  {
    "id": "seed-score-18",
    "name": "Brett Glaser",
    "score": 94,
    "absent": false,
    "date": "2025-10-09",
    "notes": "Initial data · IRA · (3 90's good to go) · NR",
    "createdAt": 1760025600017
  },
  {
    "id": "seed-score-19",
    "name": "Daniel Weis",
    "score": 63,
    "absent": false,
    "date": "2025-07-08",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1751990400018
  },
  {
    "id": "seed-score-20",
    "name": "Daniel Weis",
    "score": 75,
    "absent": false,
    "date": "2025-07-10",
    "notes": "Initial data · PPL · EJ",
    "createdAt": 1752163200019
  },
  {
    "id": "seed-score-21",
    "name": "Daniel Weis",
    "score": 76,
    "absent": false,
    "date": "2025-07-17",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1752768000020
  },
  {
    "id": "seed-score-22",
    "name": "Daniel Weis",
    "score": 75,
    "absent": false,
    "date": "2025-07-23",
    "notes": "Initial data · PPL · EJ",
    "createdAt": 1753286400021
  },
  {
    "id": "seed-score-23",
    "name": "Daniel Weis",
    "score": 78,
    "absent": false,
    "date": "2025-07-23",
    "notes": "Initial data · PPL · EJ",
    "createdAt": 1753286400022
  },
  {
    "id": "seed-score-24",
    "name": "Daniel Weis",
    "score": 90,
    "absent": false,
    "date": "2025-07-25",
    "notes": "Initial data · PPL · JH",
    "createdAt": 1753459200023
  },
  {
    "id": "seed-score-25",
    "name": "Daniel Weis",
    "score": 93,
    "absent": false,
    "date": "2025-07-28",
    "notes": "Initial data · PPL · EJ",
    "createdAt": 1753718400024
  },
  {
    "id": "seed-score-26",
    "name": "Edwin Melendez",
    "score": null,
    "absent": true,
    "date": "2025-10-01",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1759334400025
  },
  {
    "id": "seed-score-27",
    "name": "Edwin Melendez",
    "score": null,
    "absent": true,
    "date": "2025-10-02",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1759420800026
  },
  {
    "id": "seed-score-28",
    "name": "Edwin Melendez",
    "score": 80,
    "absent": false,
    "date": "2025-10-03",
    "notes": "Initial data · IRA · ESP",
    "createdAt": 1759507200027
  },
  {
    "id": "seed-score-29",
    "name": "Edwin Melendez",
    "score": 88,
    "absent": false,
    "date": "2025-10-06",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1759766400028
  },
  {
    "id": "seed-score-30",
    "name": "Edwin Melendez",
    "score": 90,
    "absent": false,
    "date": "2025-10-07",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1759852800029
  },
  {
    "id": "seed-score-31",
    "name": "Edwin Melendez",
    "score": 85,
    "absent": false,
    "date": "2025-10-08",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1759939200030
  },
  {
    "id": "seed-score-32",
    "name": "Edwin Melendez",
    "score": null,
    "absent": true,
    "date": "2025-10-10",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1760112000031
  },
  {
    "id": "seed-score-33",
    "name": "Edwin Melendez",
    "score": 80,
    "absent": false,
    "date": "2025-10-09",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1760025600032
  },
  {
    "id": "seed-score-34",
    "name": "Edwin Melendez",
    "score": 78,
    "absent": false,
    "date": "2025-10-10",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1760112000033
  },
  {
    "id": "seed-score-35",
    "name": "Edwin Melendez",
    "score": null,
    "absent": true,
    "date": "2025-10-12",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1760284800034
  },
  {
    "id": "seed-score-36",
    "name": "Edwin Melendez",
    "score": 90,
    "absent": false,
    "date": "2025-10-12",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1760284800035
  },
  {
    "id": "seed-score-37",
    "name": "Edwin Melendez",
    "score": 83,
    "absent": false,
    "date": "2025-10-13",
    "notes": "Initial data · IRA · EKJ",
    "createdAt": 1760371200036
  },
  {
    "id": "seed-score-38",
    "name": "Edwin Melendez",
    "score": 88,
    "absent": false,
    "date": "2025-10-14",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1760457600037
  },
  {
    "id": "seed-score-39",
    "name": "Edwin Melendez",
    "score": null,
    "absent": true,
    "date": "2025-10-15",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1760544000038
  },
  {
    "id": "seed-score-40",
    "name": "Edwin Melendez",
    "score": 78,
    "absent": false,
    "date": "2025-10-15",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1760544000039
  },
  {
    "id": "seed-score-41",
    "name": "Edwin Melendez",
    "score": 86,
    "absent": false,
    "date": "2025-10-17",
    "notes": "Initial data · IRA",
    "createdAt": 1760716800040
  },
  {
    "id": "seed-score-42",
    "name": "Edwin Melendez",
    "score": 85,
    "absent": false,
    "date": "2025-10-17",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1760716800041
  },
  {
    "id": "seed-score-43",
    "name": "Edwin Melendez",
    "score": 81,
    "absent": false,
    "date": "2025-10-18",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1760803200042
  },
  {
    "id": "seed-score-44",
    "name": "Edwin Melendez",
    "score": 76,
    "absent": false,
    "date": "2025-10-20",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1760976000043
  },
  {
    "id": "seed-score-45",
    "name": "Edwin Melendez",
    "score": 88,
    "absent": false,
    "date": "2025-10-20",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1760976000044
  },
  {
    "id": "seed-score-46",
    "name": "Edwin Melendez",
    "score": 90,
    "absent": false,
    "date": "2025-10-20",
    "notes": "Initial data · IRA · EJ",
    "createdAt": 1760976000045
  },
  {
    "id": "seed-score-47",
    "name": "Edwin Melendez",
    "score": 91.7,
    "absent": false,
    "date": "2025-10-20",
    "notes": "Initial data · IRA · EJ",
    "createdAt": 1760976000046
  },
  {
    "id": "seed-score-48",
    "name": "Edwin Melendez",
    "score": 96,
    "absent": false,
    "date": "2025-10-21",
    "notes": "Initial data · IRA · NR (Good to go)",
    "createdAt": 1761062400047
  },
  {
    "id": "seed-score-49",
    "name": "Elise P",
    "score": 76.7,
    "absent": false,
    "date": "2025-08-10",
    "notes": "Initial data · IRA · 75% 75% · DR",
    "createdAt": 1754841600048
  },
  {
    "id": "seed-score-50",
    "name": "Elise P",
    "score": 95,
    "absent": false,
    "date": "2025-08-12",
    "notes": "Initial data · IRA",
    "createdAt": 1755014400049
  },
  {
    "id": "seed-score-51",
    "name": "Emilio",
    "score": null,
    "absent": false,
    "date": "2025-10-10",
    "notes": "Initial data · No score · PPL · Just practicing · ESP",
    "createdAt": 1760112000050
  },
  {
    "id": "seed-score-52",
    "name": "Emilio Lopez",
    "score": 75,
    "absent": false,
    "date": "2025-09-12",
    "notes": "Initial data · PPL · ESP",
    "createdAt": 1757692800051
  },
  {
    "id": "seed-score-53",
    "name": "Emilio Lopez",
    "score": 91.7,
    "absent": false,
    "date": "2025-09-24",
    "notes": "Initial data · PPL · EKJ",
    "createdAt": 1758729600052
  },
  {
    "id": "seed-score-54",
    "name": "Emilio Lopez",
    "score": 85,
    "absent": false,
    "date": "2025-09-26",
    "notes": "Initial data · PPL · ESP",
    "createdAt": 1758902400053
  },
  {
    "id": "seed-score-55",
    "name": "Emilio Lopez",
    "score": null,
    "absent": true,
    "date": "2025-10-08",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1759939200054
  },
  {
    "id": "seed-score-56",
    "name": "Emilio Lopez",
    "score": null,
    "absent": true,
    "date": "2025-10-09",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1760025600055
  },
  {
    "id": "seed-score-57",
    "name": "Emilio Lopez",
    "score": null,
    "absent": true,
    "date": "2025-10-10",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1760112000056
  },
  {
    "id": "seed-score-58",
    "name": "Emilio Lopez",
    "score": null,
    "absent": true,
    "date": "2025-10-12",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1760284800057
  },
  {
    "id": "seed-score-59",
    "name": "Emilio Lopez",
    "score": 96,
    "absent": false,
    "date": "2025-10-06",
    "notes": "Initial data · PPL · EKJ",
    "createdAt": 1759766400058
  },
  {
    "id": "seed-score-60",
    "name": "Emilio Lopez",
    "score": 93,
    "absent": false,
    "date": "2025-10-06",
    "notes": "Initial data · PPL · EKJ",
    "createdAt": 1759766400059
  },
  {
    "id": "seed-score-61",
    "name": "Emilio Lopez",
    "score": 90,
    "absent": false,
    "date": "2025-10-06",
    "notes": "Initial data · PPL · EKJ",
    "createdAt": 1759766400060
  },
  {
    "id": "seed-score-62",
    "name": "Emilio Lopez",
    "score": null,
    "absent": true,
    "date": "2025-09-16",
    "notes": "Initial data · Absent · PPL · Did not show up",
    "createdAt": 1758038400061
  },
  {
    "id": "seed-score-63",
    "name": "Fernando Neves",
    "score": null,
    "absent": true,
    "date": "2025-10-17",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1760716800062
  },
  {
    "id": "seed-score-64",
    "name": "Fernando Neves",
    "score": 80,
    "absent": false,
    "date": "2025-10-18",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1760803200063
  },
  {
    "id": "seed-score-65",
    "name": "Fernando Neves",
    "score": 76,
    "absent": false,
    "date": "2025-10-19",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1760889600064
  },
  {
    "id": "seed-score-66",
    "name": "Fernando Neves",
    "score": 61,
    "absent": false,
    "date": "2025-10-21",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1761062400065
  },
  {
    "id": "seed-score-67",
    "name": "Jaimee Mackliff",
    "score": 86,
    "absent": false,
    "date": "2025-08-12",
    "notes": "Initial data · FOI · NR",
    "createdAt": 1755014400066
  },
  {
    "id": "seed-score-68",
    "name": "Jaimee Mackliff",
    "score": 94,
    "absent": false,
    "date": "2025-08-12",
    "notes": "Initial data · FOI · NR",
    "createdAt": 1755014400067
  },
  {
    "id": "seed-score-69",
    "name": "Jaimee Mackliff",
    "score": 94,
    "absent": false,
    "date": "2025-08-14",
    "notes": "Initial data · FOI · CH",
    "createdAt": 1755187200068
  },
  {
    "id": "seed-score-70",
    "name": "Jaimee Mackliff",
    "score": 88,
    "absent": false,
    "date": "2025-08-14",
    "notes": "Initial data · FOI · CH",
    "createdAt": 1755187200069
  },
  {
    "id": "seed-score-71",
    "name": "Jaimee Mackliff",
    "score": null,
    "absent": true,
    "date": "2025-08-14",
    "notes": "Initial data · Absent · FOI · CH",
    "createdAt": 1755187200070
  },
  {
    "id": "seed-score-72",
    "name": "Jonathan Ahern",
    "score": 96,
    "absent": false,
    "date": "2025-10-12",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1760284800071
  },
  {
    "id": "seed-score-73",
    "name": "Jonathan Ahern",
    "score": 100,
    "absent": false,
    "date": "2025-10-13",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1760371200072
  },
  {
    "id": "seed-score-74",
    "name": "Jonathan Ahern",
    "score": 100,
    "absent": false,
    "date": "2025-10-13",
    "notes": "Initial data · PPL",
    "createdAt": 1760371200073
  },
  {
    "id": "seed-score-75",
    "name": "Jonathan Love",
    "score": null,
    "absent": true,
    "date": "2025-10-16",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1760630400074
  },
  {
    "id": "seed-score-76",
    "name": "Judson Hershiser",
    "score": null,
    "absent": false,
    "date": "2025-07-25",
    "notes": "Initial data · No score · PPL · Canceled",
    "createdAt": 1753459200075
  },
  {
    "id": "seed-score-77",
    "name": "Judson Hershiser",
    "score": 88.3,
    "absent": false,
    "date": "2025-08-14",
    "notes": "Initial data · PPL · EJ",
    "createdAt": 1755187200076
  },
  {
    "id": "seed-score-78",
    "name": "Judson Hershiser",
    "score": 95,
    "absent": false,
    "date": "2025-08-14",
    "notes": "Initial data · PPL · EJ",
    "createdAt": 1755187200077
  },
  {
    "id": "seed-score-79",
    "name": "Judson Hershiser",
    "score": 90,
    "absent": false,
    "date": "2025-08-14",
    "notes": "Initial data · PPL · EJ",
    "createdAt": 1755187200078
  },
  {
    "id": "seed-score-80",
    "name": "Judson Hershiser",
    "score": 90,
    "absent": false,
    "date": "2025-08-14",
    "notes": "Initial data · PPL · That's 3!!! · EJ",
    "createdAt": 1755187200079
  },
  {
    "id": "seed-score-81",
    "name": "Justin Garrow",
    "score": 80,
    "absent": false,
    "date": "2025-07-26",
    "notes": "Initial data · PPL · EJ",
    "createdAt": 1753545600080
  },
  {
    "id": "seed-score-82",
    "name": "Justin Garrow",
    "score": 98,
    "absent": false,
    "date": "2025-07-26",
    "notes": "Initial data · PPL · EJ",
    "createdAt": 1753545600081
  },
  {
    "id": "seed-score-83",
    "name": "Justin Garrow",
    "score": 90,
    "absent": false,
    "date": "2025-07-25",
    "notes": "Initial data · PPL · ESP",
    "createdAt": 1753459200082
  },
  {
    "id": "seed-score-84",
    "name": "Justin Garrow",
    "score": 96,
    "absent": false,
    "date": "2025-07-26",
    "notes": "Initial data · PPL · EJ",
    "createdAt": 1753545600083
  },
  {
    "id": "seed-score-85",
    "name": "Justin Garrow",
    "score": 93,
    "absent": false,
    "date": "2025-07-27",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1753632000084
  },
  {
    "id": "seed-score-86",
    "name": "Justin Garrow",
    "score": 100,
    "absent": false,
    "date": "2025-07-27",
    "notes": "Initial data · PPL · That's 3! · DR",
    "createdAt": 1753632000085
  },
  {
    "id": "seed-score-87",
    "name": "Lauren Bourett",
    "score": 93.3,
    "absent": false,
    "date": "2025-09-18",
    "notes": "Initial data · PPL · EKJ",
    "createdAt": 1758211200086
  },
  {
    "id": "seed-score-88",
    "name": "Lauren Bourett",
    "score": 86,
    "absent": false,
    "date": "2025-09-22",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1758556800087
  },
  {
    "id": "seed-score-89",
    "name": "Lauren Bourett",
    "score": 86,
    "absent": false,
    "date": "2025-09-22",
    "notes": "Initial data · PPL",
    "createdAt": 1758556800088
  },
  {
    "id": "seed-score-90",
    "name": "Lauren Bourett",
    "score": 100,
    "absent": false,
    "date": "2025-09-23",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1758643200089
  },
  {
    "id": "seed-score-91",
    "name": "Lauren Bourett",
    "score": 98,
    "absent": false,
    "date": "2025-09-23",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1758643200090
  },
  {
    "id": "seed-score-92",
    "name": "Lauren Bourett",
    "score": 100,
    "absent": false,
    "date": "2025-09-24",
    "notes": "Initial data · PPL · EKJ (good to go!)",
    "createdAt": 1758729600091
  },
  {
    "id": "seed-score-93",
    "name": "Nanette Disla",
    "score": 81,
    "absent": false,
    "date": "2025-06-21",
    "notes": "Initial data · IRA · , 86% · NR",
    "createdAt": 1750521600092
  },
  {
    "id": "seed-score-94",
    "name": "Nanette Disla",
    "score": 93,
    "absent": false,
    "date": "2025-07-07",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1751904000093
  },
  {
    "id": "seed-score-95",
    "name": "Nanette Disla",
    "score": 93,
    "absent": false,
    "date": "2025-07-08",
    "notes": "Initial data · IRA · 91%  Thats 3!!! · NR",
    "createdAt": 1751990400094
  },
  {
    "id": "seed-score-96",
    "name": "Pim Van usen",
    "score": 85,
    "absent": false,
    "date": "2025-08-23",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1755964800095
  },
  {
    "id": "seed-score-97",
    "name": "Pim Van usen",
    "score": 85,
    "absent": false,
    "date": "2025-08-25",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1756137600096
  },
  {
    "id": "seed-score-98",
    "name": "Pim Van Usen",
    "score": 85,
    "absent": false,
    "date": "2025-08-25",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1756137600097
  },
  {
    "id": "seed-score-99",
    "name": "Pim Van Usen",
    "score": 83,
    "absent": false,
    "date": "2025-08-25",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1756137600098
  },
  {
    "id": "seed-score-100",
    "name": "Pim Van Usen",
    "score": null,
    "absent": true,
    "date": "2025-08-25",
    "notes": "Initial data · Absent",
    "createdAt": 1756137600099
  },
  {
    "id": "seed-score-101",
    "name": "Ryan Drozd",
    "score": 100,
    "absent": false,
    "date": "2025-10-02",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1759420800100
  },
  {
    "id": "seed-score-102",
    "name": "Ryan Drozd",
    "score": 98,
    "absent": false,
    "date": "2025-10-02",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1759420800101
  },
  {
    "id": "seed-score-103",
    "name": "Ryan Drozd",
    "score": 90,
    "absent": false,
    "date": "2025-10-02",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1759420800102
  },
  {
    "id": "seed-score-104",
    "name": "sam Trawick",
    "score": 78,
    "absent": false,
    "date": "2025-10-16",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1760630400103
  },
  {
    "id": "seed-score-105",
    "name": "Tyler Diaz",
    "score": 81.7,
    "absent": false,
    "date": "2025-06-26",
    "notes": "Initial data · PPL · EKJ",
    "createdAt": 1750953600104
  },
  {
    "id": "seed-score-106",
    "name": "Fernando Neves",
    "score": 73,
    "absent": false,
    "date": "2025-10-22",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1761148800105
  },
  {
    "id": "seed-score-107",
    "name": "Fernando Neves",
    "score": 81,
    "absent": false,
    "date": "2025-10-23",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1761235200106
  },
  {
    "id": "seed-score-108",
    "name": "Will Wood",
    "score": 83,
    "absent": false,
    "date": "2025-10-28",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1761667200107
  },
  {
    "id": "seed-score-109",
    "name": "Will Wood",
    "score": 85,
    "absent": false,
    "date": "2025-10-28",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1761667200108
  },
  {
    "id": "seed-score-110",
    "name": "Fernando Neves",
    "score": 81,
    "absent": false,
    "date": "2025-10-28",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1761667200109
  },
  {
    "id": "seed-score-111",
    "name": "Sam Trawick",
    "score": null,
    "absent": true,
    "date": "2025-10-29",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1761753600110
  },
  {
    "id": "seed-score-112",
    "name": "Sam Trawick",
    "score": null,
    "absent": true,
    "date": "2025-10-29",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1761753600111
  },
  {
    "id": "seed-score-113",
    "name": "Will Wood",
    "score": null,
    "absent": true,
    "date": "2025-11-06",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1762448400112
  },
  {
    "id": "seed-score-114",
    "name": "Fernando Neves",
    "score": 81,
    "absent": false,
    "date": "2025-11-04",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1762275600113
  },
  {
    "id": "seed-score-115",
    "name": "Sam Trawick",
    "score": null,
    "absent": true,
    "date": "2025-11-18",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1763485200114
  },
  {
    "id": "seed-score-116",
    "name": "Sam Trawick",
    "score": null,
    "absent": true,
    "date": "2025-11-18",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1763485200115
  },
  {
    "id": "seed-score-117",
    "name": "Sam Trawick",
    "score": null,
    "absent": true,
    "date": "2025-11-18",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1763485200116
  },
  {
    "id": "seed-score-118",
    "name": "Sam Trawick",
    "score": null,
    "absent": true,
    "date": "2025-11-18",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1763485200117
  },
  {
    "id": "seed-score-119",
    "name": "Sam Trawick",
    "score": 71,
    "absent": false,
    "date": "2025-11-13",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1763053200118
  },
  {
    "id": "seed-score-120",
    "name": "Landon Paul Velez",
    "score": 58.3,
    "absent": false,
    "date": "2025-11-16",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1763312400119
  },
  {
    "id": "seed-score-121",
    "name": "Landon Paul Velez",
    "score": null,
    "absent": true,
    "date": "2025-11-20",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1763658000120
  },
  {
    "id": "seed-score-122",
    "name": "Fernando Neves",
    "score": 80,
    "absent": false,
    "date": "2025-11-18",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1763485200121
  },
  {
    "id": "seed-score-123",
    "name": "Fernando Neves",
    "score": 66,
    "absent": false,
    "date": "2025-11-18",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1763485200122
  },
  {
    "id": "seed-score-124",
    "name": "Fernando Neves",
    "score": 81,
    "absent": false,
    "date": "2025-11-19",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1763571600123
  },
  {
    "id": "seed-score-125",
    "name": "Fernando Neves",
    "score": 80,
    "absent": false,
    "date": "2025-11-21",
    "notes": "Initial data · PPL · ESP",
    "createdAt": 1763744400124
  },
  {
    "id": "seed-score-126",
    "name": "Sam Trawick",
    "score": 66.7,
    "absent": false,
    "date": "2025-11-21",
    "notes": "Initial data · IRA · ESP",
    "createdAt": 1763744400125
  },
  {
    "id": "seed-score-127",
    "name": "Fernando Neves",
    "score": 67,
    "absent": false,
    "date": "2025-11-22",
    "notes": "Initial data · PPL · ESP",
    "createdAt": 1763830800126
  },
  {
    "id": "seed-score-128",
    "name": "Fernando Neves",
    "score": 65,
    "absent": false,
    "date": "2025-12-02",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1764694800127
  },
  {
    "id": "seed-score-129",
    "name": "Sam Trawick",
    "score": 78,
    "absent": false,
    "date": "2025-12-03",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1764781200128
  },
  {
    "id": "seed-score-130",
    "name": "Fernando Neves",
    "score": 88.3,
    "absent": false,
    "date": "2025-12-03",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1764781200129
  },
  {
    "id": "seed-score-131",
    "name": "Sam Trawick",
    "score": 82,
    "absent": false,
    "date": "2025-12-04",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1764867600130
  },
  {
    "id": "seed-score-132",
    "name": "Fernando Neves",
    "score": 76,
    "absent": false,
    "date": "2025-12-04",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1764867600131
  },
  {
    "id": "seed-score-133",
    "name": "Fernando Neves",
    "score": null,
    "absent": true,
    "date": "2025-12-04",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1764867600132
  },
  {
    "id": "seed-score-134",
    "name": "Ethan Winkler",
    "score": null,
    "absent": true,
    "date": "2025-12-21",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1766336400133
  },
  {
    "id": "seed-score-135",
    "name": "Ethan Winkler",
    "score": null,
    "absent": true,
    "date": "2025-12-23",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1766509200134
  },
  {
    "id": "seed-score-136",
    "name": "Fernando Neves",
    "score": 80,
    "absent": false,
    "date": "2025-12-05",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1764954000135
  },
  {
    "id": "seed-score-137",
    "name": "Fernando Neves",
    "score": 85,
    "absent": false,
    "date": "2025-12-05",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1764954000136
  },
  {
    "id": "seed-score-138",
    "name": "Fernando Neves",
    "score": 86.7,
    "absent": false,
    "date": "2025-12-06",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1765040400137
  },
  {
    "id": "seed-score-139",
    "name": "Fernando Neves",
    "score": 80,
    "absent": false,
    "date": "2025-12-08",
    "notes": "Initial data · PPL · ESP",
    "createdAt": 1765213200138
  },
  {
    "id": "seed-score-140",
    "name": "Sam Trawick",
    "score": 87,
    "absent": false,
    "date": "2025-12-09",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1765299600139
  },
  {
    "id": "seed-score-141",
    "name": "Fernando Neves",
    "score": 76,
    "absent": false,
    "date": "2025-12-09",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1765299600140
  },
  {
    "id": "seed-score-142",
    "name": "Fernando Neves",
    "score": 86.7,
    "absent": false,
    "date": "2025-12-09",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1765299600141
  },
  {
    "id": "seed-score-143",
    "name": "Fernando Neves",
    "score": 81.7,
    "absent": false,
    "date": "2025-12-09",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1765299600142
  },
  {
    "id": "seed-score-144",
    "name": "Fernando Neves",
    "score": 90,
    "absent": false,
    "date": "2025-12-09",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1765299600143
  },
  {
    "id": "seed-score-145",
    "name": "Sam Trawick",
    "score": 80,
    "absent": false,
    "date": "2025-12-10",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1765386000144
  },
  {
    "id": "seed-score-146",
    "name": "Fernado Neves",
    "score": 83,
    "absent": false,
    "date": "2025-12-10",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1765386000145
  },
  {
    "id": "seed-score-147",
    "name": "Fernado Neves",
    "score": 86.7,
    "absent": false,
    "date": "2025-12-10",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1765386000146
  },
  {
    "id": "seed-score-148",
    "name": "Fernado Neves",
    "score": 91.7,
    "absent": false,
    "date": "2025-12-10",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1765386000147
  },
  {
    "id": "seed-score-149",
    "name": "Fernado Neves",
    "score": 90,
    "absent": false,
    "date": "2025-12-10",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1765386000148
  },
  {
    "id": "seed-score-150",
    "name": "Fernado Neves",
    "score": 88.3,
    "absent": false,
    "date": "2025-12-10",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1765386000149
  },
  {
    "id": "seed-score-151",
    "name": "Sam Trawick",
    "score": 83,
    "absent": false,
    "date": "2025-12-11",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1765472400150
  },
  {
    "id": "seed-score-152",
    "name": "Fernado Neves",
    "score": 86,
    "absent": false,
    "date": "2025-12-11",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1765472400151
  },
  {
    "id": "seed-score-153",
    "name": "Fernando Neves",
    "score": 83,
    "absent": false,
    "date": "2025-12-11",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1765472400152
  },
  {
    "id": "seed-score-154",
    "name": "Rebecca Hardy",
    "score": 72,
    "absent": false,
    "date": "2025-12-11",
    "notes": "Initial data · CFII · NR",
    "createdAt": 1765472400153
  },
  {
    "id": "seed-score-155",
    "name": "Rebecca Hardy",
    "score": 84,
    "absent": false,
    "date": "2025-12-11",
    "notes": "Initial data · CFII · NR",
    "createdAt": 1765472400154
  },
  {
    "id": "seed-score-156",
    "name": "Fernando Neves",
    "score": 90,
    "absent": false,
    "date": "2025-12-11",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1765472400155
  },
  {
    "id": "seed-score-157",
    "name": "Lauren Wolford",
    "score": 65,
    "absent": false,
    "date": "2025-12-14",
    "notes": "Initial data · IRA",
    "createdAt": 1765731600156
  },
  {
    "id": "seed-score-158",
    "name": "Bella Rodriguez",
    "score": null,
    "absent": false,
    "date": "2025-12-12",
    "notes": "Initial data · No score · PPL · Left without communicating score · EP",
    "createdAt": 1765558800157
  },
  {
    "id": "seed-score-159",
    "name": "Fernando Neves",
    "score": 83,
    "absent": false,
    "date": "2025-12-12",
    "notes": "Initial data · PPL · EP",
    "createdAt": 1765558800158
  },
  {
    "id": "seed-score-160",
    "name": "Fernando Neves",
    "score": 83.3,
    "absent": false,
    "date": "2025-12-12",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1765558800159
  },
  {
    "id": "seed-score-161",
    "name": "Fernando Neves",
    "score": 93.3,
    "absent": false,
    "date": "2025-12-12",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1765558800160
  },
  {
    "id": "seed-score-162",
    "name": "Fernando Neves",
    "score": 90,
    "absent": false,
    "date": "2025-12-12",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1765558800161
  },
  {
    "id": "seed-score-163",
    "name": "Fernando Neves",
    "score": 91.7,
    "absent": false,
    "date": "2025-12-12",
    "notes": "Initial data · PPL · THATS THREE · DR",
    "createdAt": 1765558800162
  },
  {
    "id": "seed-score-164",
    "name": "Ethan Winkler",
    "score": null,
    "absent": true,
    "date": "2025-12-19",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1766163600163
  },
  {
    "id": "seed-score-165",
    "name": "Bella Rodriguez",
    "score": 75,
    "absent": false,
    "date": "2025-12-14",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1765731600164
  },
  {
    "id": "seed-score-166",
    "name": "Sam Trawick",
    "score": 84,
    "absent": false,
    "date": "2025-12-17",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1765990800165
  },
  {
    "id": "seed-score-167",
    "name": "Sam Trawick",
    "score": 82,
    "absent": false,
    "date": "2025-12-17",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1765990800166
  },
  {
    "id": "seed-score-168",
    "name": "Bella Rodriguez",
    "score": 81,
    "absent": false,
    "date": "2025-12-18",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1766077200167
  },
  {
    "id": "seed-score-169",
    "name": "Sam Trawick",
    "score": null,
    "absent": true,
    "date": "2025-12-18",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1766077200168
  },
  {
    "id": "seed-score-170",
    "name": "Bella Rodriguez",
    "score": 71,
    "absent": false,
    "date": "2025-12-19",
    "notes": "Initial data · PPL · EP",
    "createdAt": 1766163600169
  },
  {
    "id": "seed-score-171",
    "name": "Ethan Winkler",
    "score": null,
    "absent": true,
    "date": "2025-12-21",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1766336400170
  },
  {
    "id": "seed-score-172",
    "name": "Lauren Wolford",
    "score": 68,
    "absent": false,
    "date": "2025-12-21",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1766336400171
  },
  {
    "id": "seed-score-173",
    "name": "Ethan Winkler",
    "score": null,
    "absent": true,
    "date": "2026-01-04",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1767546000172
  },
  {
    "id": "seed-score-174",
    "name": "Kyler Siemer",
    "score": 85,
    "absent": false,
    "date": "2025-12-23",
    "notes": "Initial data · IRA · CH",
    "createdAt": 1766509200173
  },
  {
    "id": "seed-score-175",
    "name": "Sam Trawick",
    "score": 90,
    "absent": false,
    "date": "2025-12-26",
    "notes": "Initial data · IRA · EP",
    "createdAt": 1766768400174
  },
  {
    "id": "seed-score-176",
    "name": "Sam Trawick",
    "score": 95,
    "absent": false,
    "date": "2025-12-27",
    "notes": "Initial data · IRA · EP",
    "createdAt": 1766854800175
  },
  {
    "id": "seed-score-177",
    "name": "Sam Trawick",
    "score": 98,
    "absent": false,
    "date": "2025-12-30",
    "notes": "Initial data · IRA · THAT'S 3!!! · NR",
    "createdAt": 1767114000176
  },
  {
    "id": "seed-score-178",
    "name": "Kyler Siemer",
    "score": 86.7,
    "absent": false,
    "date": "2025-12-31",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1767200400177
  },
  {
    "id": "seed-score-179",
    "name": "Bella Rodriguez",
    "score": 81,
    "absent": false,
    "date": "2026-01-04",
    "notes": "Initial data · PPL · AA",
    "createdAt": 1767546000178
  },
  {
    "id": "seed-score-180",
    "name": "Delaina",
    "score": 85,
    "absent": false,
    "date": "2026-01-04",
    "notes": "Initial data · PPL · AA",
    "createdAt": 1767546000179
  },
  {
    "id": "seed-score-181",
    "name": "Jonnier",
    "score": null,
    "absent": true,
    "date": "2026-01-05",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1767632400180
  },
  {
    "id": "seed-score-182",
    "name": "Delaina Harth",
    "score": 90,
    "absent": false,
    "date": "2026-01-05",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1767632400181
  },
  {
    "id": "seed-score-183",
    "name": "Rebecca Hardy",
    "score": 86,
    "absent": false,
    "date": "2026-01-07",
    "notes": "Initial data · CFII · DR",
    "createdAt": 1767805200182
  },
  {
    "id": "seed-score-184",
    "name": "Rebecca Hardy",
    "score": 92,
    "absent": false,
    "date": "2026-01-07",
    "notes": "Initial data · CFII · DR",
    "createdAt": 1767805200183
  },
  {
    "id": "seed-score-185",
    "name": "Kyler Siemer",
    "score": 95,
    "absent": false,
    "date": "2026-01-08",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1767891600184
  },
  {
    "id": "seed-score-186",
    "name": "Rebecca Hardy",
    "score": 72,
    "absent": false,
    "date": "2026-01-08",
    "notes": "Initial data · CFII · NR",
    "createdAt": 1767891600185
  },
  {
    "id": "seed-score-187",
    "name": "Kyler Siemer",
    "score": 75,
    "absent": false,
    "date": "2026-01-09",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1767978000186
  },
  {
    "id": "seed-score-188",
    "name": "Rebecca Hardy",
    "score": 80,
    "absent": false,
    "date": "2026-01-09",
    "notes": "Initial data · CFII · EKJ",
    "createdAt": 1767978000187
  },
  {
    "id": "seed-score-189",
    "name": "Rebecca Hardy",
    "score": 84,
    "absent": false,
    "date": "2026-01-10",
    "notes": "Initial data · CFII · DR",
    "createdAt": 1768064400188
  },
  {
    "id": "seed-score-190",
    "name": "Rebecca Hardy",
    "score": 96,
    "absent": false,
    "date": "2026-01-10",
    "notes": "Initial data · CFII · DR",
    "createdAt": 1768064400189
  },
  {
    "id": "seed-score-191",
    "name": "Rebecca Hardy",
    "score": 92,
    "absent": false,
    "date": "2026-01-10",
    "notes": "Initial data · CFII · DR",
    "createdAt": 1768064400190
  },
  {
    "id": "seed-score-192",
    "name": "Rebecca Hardy",
    "score": 94,
    "absent": false,
    "date": "2026-01-10",
    "notes": "Initial data · CFII · thats 3 · DR",
    "createdAt": 1768064400191
  },
  {
    "id": "seed-score-193",
    "name": "Bella Rodriguez",
    "score": 86,
    "absent": false,
    "date": "2026-01-11",
    "notes": "Initial data · PPL · AA",
    "createdAt": 1768150800192
  },
  {
    "id": "seed-score-194",
    "name": "Cristian Feliz",
    "score": 70,
    "absent": false,
    "date": "2026-01-12",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1768237200193
  },
  {
    "id": "seed-score-195",
    "name": "Lauren Wolford",
    "score": 77,
    "absent": false,
    "date": "2026-01-12",
    "notes": "Initial data · IRA · EKJ",
    "createdAt": 1768237200194
  },
  {
    "id": "seed-score-196",
    "name": "Cristian Feliz",
    "score": 66.8,
    "absent": false,
    "date": "2026-01-12",
    "notes": "Initial data · PPL · EKJ",
    "createdAt": 1768237200195
  },
  {
    "id": "seed-score-197",
    "name": "Cristian Feliz",
    "score": 80.5,
    "absent": false,
    "date": "2026-01-12",
    "notes": "Initial data · PPL · EKJ",
    "createdAt": 1768237200196
  },
  {
    "id": "seed-score-198",
    "name": "Cristian Feliz",
    "score": 78.3,
    "absent": false,
    "date": "2026-01-14",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1768410000197
  },
  {
    "id": "seed-score-199",
    "name": "Cristian Feliz",
    "score": 68,
    "absent": false,
    "date": "2026-01-14",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1768410000198
  },
  {
    "id": "seed-score-200",
    "name": "Cristian Feliz",
    "score": 66.7,
    "absent": false,
    "date": "2026-01-14",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1768410000199
  },
  {
    "id": "seed-score-201",
    "name": "Cristian Feliz",
    "score": 83.5,
    "absent": false,
    "date": "2026-01-14",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1768410000200
  },
  {
    "id": "seed-score-202",
    "name": "Bella Rodriguez",
    "score": 83,
    "absent": false,
    "date": "2026-01-15",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1768496400201
  },
  {
    "id": "seed-score-203",
    "name": "Lauren Wolford",
    "score": 81.7,
    "absent": false,
    "date": "2026-01-16",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1768582800202
  },
  {
    "id": "seed-score-204",
    "name": "Kyler Siemer",
    "score": 95,
    "absent": false,
    "date": "2026-01-16",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1768582800203
  },
  {
    "id": "seed-score-205",
    "name": "Kyler Siemer",
    "score": 93.3,
    "absent": false,
    "date": "2026-01-16",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1768582800204
  },
  {
    "id": "seed-score-206",
    "name": "Kyler Siemer",
    "score": 95,
    "absent": false,
    "date": "2026-01-16",
    "notes": "Initial data · IRA · THATS THREE · DR",
    "createdAt": 1768582800205
  },
  {
    "id": "seed-score-207",
    "name": "Cristian Feliz",
    "score": null,
    "absent": true,
    "date": "2026-01-19",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1768842000206
  },
  {
    "id": "seed-score-208",
    "name": "Jonnier Alvarez",
    "score": null,
    "absent": true,
    "date": "2026-01-19",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1768842000207
  },
  {
    "id": "seed-score-209",
    "name": "Lauren Wolford",
    "score": 85,
    "absent": false,
    "date": "2026-01-19",
    "notes": "Initial data · IRA · EKJ",
    "createdAt": 1768842000208
  },
  {
    "id": "seed-score-210",
    "name": "Lauren Wolford",
    "score": null,
    "absent": true,
    "date": "2026-01-19",
    "notes": "Initial data · Absent · IRA · EKJ",
    "createdAt": 1768842000209
  },
  {
    "id": "seed-score-211",
    "name": "Lauren Wolford",
    "score": 86,
    "absent": false,
    "date": "2026-01-21",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1769014800210
  },
  {
    "id": "seed-score-212",
    "name": "Lauren Wolford",
    "score": 93,
    "absent": false,
    "date": "2026-01-21",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1769014800211
  },
  {
    "id": "seed-score-213",
    "name": "Lauren Wolford",
    "score": 93.3,
    "absent": false,
    "date": "2026-01-21",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1769014800212
  },
  {
    "id": "seed-score-214",
    "name": "Lauren Wolford",
    "score": 100,
    "absent": false,
    "date": "2026-01-21",
    "notes": "Initial data · IRA · THATS THREE!!!!!!!!!!!! · DR",
    "createdAt": 1769014800213
  },
  {
    "id": "seed-score-215",
    "name": "Bella Rodriguez",
    "score": 83,
    "absent": false,
    "date": "2026-01-21",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1769014800214
  },
  {
    "id": "seed-score-216",
    "name": "Cristian Feliz",
    "score": null,
    "absent": true,
    "date": "2026-01-21",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1769014800215
  },
  {
    "id": "seed-score-217",
    "name": "Bella Rodriguez",
    "score": 83,
    "absent": false,
    "date": "2026-01-22",
    "notes": "Initial data · PPL · CH",
    "createdAt": 1769101200216
  },
  {
    "id": "seed-score-218",
    "name": "Daniel Alban",
    "score": 68,
    "absent": false,
    "date": "2026-01-23",
    "notes": "Initial data · IRA · ESP",
    "createdAt": 1769187600217
  },
  {
    "id": "seed-score-219",
    "name": "Cristian Feliz",
    "score": null,
    "absent": true,
    "date": "2026-01-26",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1769446800218
  },
  {
    "id": "seed-score-220",
    "name": "Ethan Winkler",
    "score": null,
    "absent": true,
    "date": "2026-01-28",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1769619600219
  },
  {
    "id": "seed-score-221",
    "name": "Alan Nguyen",
    "score": 92,
    "absent": false,
    "date": "2026-01-29",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1769706000220
  },
  {
    "id": "seed-score-222",
    "name": "Alan Nguyen",
    "score": 96.7,
    "absent": false,
    "date": "2026-01-29",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1769706000221
  },
  {
    "id": "seed-score-223",
    "name": "Alan Nguyen",
    "score": 93,
    "absent": false,
    "date": "2026-01-29",
    "notes": "Initial data · IRA · THATS THREE · DR",
    "createdAt": 1769706000222
  },
  {
    "id": "seed-score-224",
    "name": "Bella Rodriguez",
    "score": 90,
    "absent": false,
    "date": "2026-01-29",
    "notes": "Initial data · PPL · AA",
    "createdAt": 1769706000223
  },
  {
    "id": "seed-score-225",
    "name": "Daniel Howe",
    "score": 90,
    "absent": false,
    "date": "2026-01-29",
    "notes": "Initial data · FOI · AA",
    "createdAt": 1769706000224
  },
  {
    "id": "seed-score-226",
    "name": "Daniel Howe",
    "score": 90,
    "absent": false,
    "date": "2026-01-29",
    "notes": "Initial data · FOI · AA",
    "createdAt": 1769706000225
  },
  {
    "id": "seed-score-227",
    "name": "Daniel Howe",
    "score": 90,
    "absent": false,
    "date": "2026-01-29",
    "notes": "Initial data · FOI · THATS THREE · AA",
    "createdAt": 1769706000226
  },
  {
    "id": "seed-score-228",
    "name": "Daniel Howe",
    "score": 94,
    "absent": false,
    "date": "2026-02-01",
    "notes": "Initial data · FiA · LW",
    "createdAt": 1769965200227
  },
  {
    "id": "seed-score-229",
    "name": "Daniel Howe",
    "score": 95,
    "absent": false,
    "date": "2026-02-02",
    "notes": "Initial data · FIA · DR",
    "createdAt": 1770051600228
  },
  {
    "id": "seed-score-230",
    "name": "Daniel Howe",
    "score": 97,
    "absent": false,
    "date": "2026-02-02",
    "notes": "Initial data · FIA · THATS 3 · DR",
    "createdAt": 1770051600229
  },
  {
    "id": "seed-score-231",
    "name": "Christian Feliz",
    "score": 65,
    "absent": false,
    "date": "2026-02-03",
    "notes": "Initial data · PPL · JR",
    "createdAt": 1770138000230
  },
  {
    "id": "seed-score-232",
    "name": "Daniel Alban",
    "score": 83,
    "absent": false,
    "date": "2026-02-11",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1770829200231
  },
  {
    "id": "seed-score-233",
    "name": "Daniel",
    "score": 78,
    "absent": false,
    "date": "2026-02-17",
    "notes": "Initial data · IRA · LW",
    "createdAt": 1771347600232
  },
  {
    "id": "seed-score-234",
    "name": "Raphael Taveira",
    "score": null,
    "absent": true,
    "date": "2026-02-17",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1771347600233
  },
  {
    "id": "seed-score-235",
    "name": "Daniel Alban",
    "score": 85,
    "absent": false,
    "date": "2026-02-18",
    "notes": "Initial data · IRA · JA",
    "createdAt": 1771434000234
  },
  {
    "id": "seed-score-236",
    "name": "Daniel Alban",
    "score": 96,
    "absent": false,
    "date": "2026-02-19",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1771520400235
  },
  {
    "id": "seed-score-237",
    "name": "Raphael Taveira",
    "score": 81.3,
    "absent": false,
    "date": "2026-02-20",
    "notes": "Initial data · CAX · ESP",
    "createdAt": 1771606800236
  },
  {
    "id": "seed-score-238",
    "name": "Daniel Alban",
    "score": 93,
    "absent": false,
    "date": "2026-02-19",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1771520400237
  },
  {
    "id": "seed-score-239",
    "name": "Daniel Alban",
    "score": 91,
    "absent": false,
    "date": "2026-02-19",
    "notes": "Initial data · IRA · THATS 3!!! · NR",
    "createdAt": 1771520400238
  },
  {
    "id": "seed-score-240",
    "name": "Cristian Feliz",
    "score": 90,
    "absent": false,
    "date": "2026-02-21",
    "notes": "Initial data · PPL",
    "createdAt": 1771693200239
  },
  {
    "id": "seed-score-241",
    "name": "Cristian Feliz",
    "score": 85,
    "absent": false,
    "date": "2026-02-28",
    "notes": "Initial data · PPL",
    "createdAt": 1772298000240
  },
  {
    "id": "seed-score-242",
    "name": "Ty Deputy",
    "score": null,
    "absent": true,
    "date": "2026-02-27",
    "notes": "Initial data · Absent · CAX",
    "createdAt": 1772211600241
  },
  {
    "id": "seed-score-243",
    "name": "Raphael Taveira",
    "score": 95,
    "absent": false,
    "date": "2026-02-25",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1772038800242
  },
  {
    "id": "seed-score-244",
    "name": "Raphael Taveira",
    "score": 78,
    "absent": false,
    "date": "2026-02-25",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1772038800243
  },
  {
    "id": "seed-score-245",
    "name": "Raphael Taveira",
    "score": 85,
    "absent": false,
    "date": "2026-02-25",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1772038800244
  },
  {
    "id": "seed-score-246",
    "name": "Raphael Taveira",
    "score": 90,
    "absent": false,
    "date": "2026-02-25",
    "notes": "Initial data · IRA · JA",
    "createdAt": 1772038800245
  },
  {
    "id": "seed-score-247",
    "name": "Raphael Taveira",
    "score": 90,
    "absent": false,
    "date": "2026-02-25",
    "notes": "Initial data · IRA · JA",
    "createdAt": 1772038800246
  },
  {
    "id": "seed-score-248",
    "name": "Raphael Taveira",
    "score": 95,
    "absent": false,
    "date": "2026-02-25",
    "notes": "Initial data · IRA · THATS 3!!!!!!! · JA",
    "createdAt": 1772038800247
  },
  {
    "id": "seed-score-249",
    "name": "Cristian Feliz",
    "score": 88,
    "absent": false,
    "date": "2026-02-28",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1772298000248
  },
  {
    "id": "seed-score-250",
    "name": "Cristian Feliz",
    "score": 83,
    "absent": false,
    "date": "2026-03-01",
    "notes": "Initial data · PPL · LW",
    "createdAt": 1772384400249
  },
  {
    "id": "seed-score-251",
    "name": "Corey Sitler",
    "score": 89,
    "absent": false,
    "date": "2026-03-01",
    "notes": "Initial data · PPL · LW",
    "createdAt": 1772384400250
  },
  {
    "id": "seed-score-252",
    "name": "Corey Sitler",
    "score": 93.3,
    "absent": false,
    "date": "2026-03-01",
    "notes": "Initial data · PPL · LW",
    "createdAt": 1772384400251
  },
  {
    "id": "seed-score-253",
    "name": "Corey Sitler",
    "score": 90,
    "absent": false,
    "date": "2026-03-01",
    "notes": "Initial data · PPL · JA",
    "createdAt": 1772384400252
  },
  {
    "id": "seed-score-254",
    "name": "Corey Sitler",
    "score": 95,
    "absent": false,
    "date": "2026-03-01",
    "notes": "Initial data · PPL · THATS 3!!! · JA",
    "createdAt": 1772384400253
  },
  {
    "id": "seed-score-255",
    "name": "Cristian Feliz",
    "score": 87,
    "absent": false,
    "date": "2026-03-03",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1772557200254
  },
  {
    "id": "seed-score-256",
    "name": "Jonathan Ahern",
    "score": 75,
    "absent": false,
    "date": "2026-03-03",
    "notes": "Initial data · IRA · LW",
    "createdAt": 1772557200255
  },
  {
    "id": "seed-score-257",
    "name": "Ethan Winkler",
    "score": null,
    "absent": true,
    "date": "2026-03-04",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1772643600256
  },
  {
    "id": "seed-score-258",
    "name": "Evan P.",
    "score": null,
    "absent": true,
    "date": "2026-03-03",
    "notes": "Initial data · Absent · ?",
    "createdAt": 1772557200257
  },
  {
    "id": "seed-score-259",
    "name": "Chris",
    "score": 82,
    "absent": false,
    "date": "2026-03-03",
    "notes": "Initial data · IRA · LW",
    "createdAt": 1772557200258
  },
  {
    "id": "seed-score-260",
    "name": "Chris Freeman",
    "score": 90,
    "absent": false,
    "date": "2026-03-04",
    "notes": "Initial data · IRA · JA",
    "createdAt": 1772643600259
  },
  {
    "id": "seed-score-261",
    "name": "Jonny Ahern",
    "score": 91,
    "absent": false,
    "date": "2026-03-04",
    "notes": "Initial data · IRA · AN",
    "createdAt": 1772643600260
  },
  {
    "id": "seed-score-262",
    "name": "Cristian Feliz",
    "score": 83,
    "absent": false,
    "date": "2026-03-04",
    "notes": "Initial data · PPL · JA",
    "createdAt": 1772643600261
  },
  {
    "id": "seed-score-263",
    "name": "Cristian Feliz",
    "score": 73.3,
    "absent": false,
    "date": "2026-03-05",
    "notes": "Initial data · PPL · EP",
    "createdAt": 1772730000262
  },
  {
    "id": "seed-score-264",
    "name": "Nanette Disla",
    "score": null,
    "absent": true,
    "date": "2026-03-07",
    "notes": "Initial data · Absent · CAX",
    "createdAt": 1772902800263
  },
  {
    "id": "seed-score-265",
    "name": "Cristian Feliz",
    "score": 75,
    "absent": false,
    "date": "2026-03-05",
    "notes": "Initial data · PPL · Ep",
    "createdAt": 1772730000264
  },
  {
    "id": "seed-score-266",
    "name": "Nanette Disla",
    "score": 91,
    "absent": false,
    "date": "2026-03-07",
    "notes": "Initial data · CAX · AN",
    "createdAt": 1772902800265
  },
  {
    "id": "seed-score-267",
    "name": "Justin Garrow",
    "score": 90,
    "absent": false,
    "date": "2026-03-09",
    "notes": "Initial data · IRA · LW",
    "createdAt": 1773072000266
  },
  {
    "id": "seed-score-268",
    "name": "Chris Freeman",
    "score": 80,
    "absent": false,
    "date": "2026-03-10",
    "notes": "Initial data · IRA · AA",
    "createdAt": 1773158400267
  },
  {
    "id": "seed-score-269",
    "name": "Justin Garrow",
    "score": 96,
    "absent": false,
    "date": "2026-03-10",
    "notes": "Initial data · IRA · AA",
    "createdAt": 1773158400268
  },
  {
    "id": "seed-score-270",
    "name": "Chris Freeman",
    "score": 81,
    "absent": false,
    "date": "2026-03-11",
    "notes": "Initial data · IRA · JA",
    "createdAt": 1773244800269
  },
  {
    "id": "seed-score-271",
    "name": "Jonny Ahern",
    "score": 89,
    "absent": false,
    "date": "2026-03-12",
    "notes": "Initial data · IRA · ESP",
    "createdAt": 1773331200270
  },
  {
    "id": "seed-score-272",
    "name": "Nanette Disla",
    "score": 87,
    "absent": false,
    "date": "2026-03-11",
    "notes": "Initial data · CAX · JA",
    "createdAt": 1773244800271
  },
  {
    "id": "seed-score-273",
    "name": "Cristian Feliz",
    "score": 71,
    "absent": false,
    "date": "2026-03-11",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1773244800272
  },
  {
    "id": "seed-score-274",
    "name": "Cristian Feliz",
    "score": 63,
    "absent": false,
    "date": "2026-03-11",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1773244800273
  },
  {
    "id": "seed-score-275",
    "name": "Cristian Feliz",
    "score": 80,
    "absent": false,
    "date": "2026-03-11",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1773244800274
  },
  {
    "id": "seed-score-276",
    "name": "Nanette Disla",
    "score": null,
    "absent": true,
    "date": "2026-03-12",
    "notes": "Initial data · Absent · CAX",
    "createdAt": 1773331200275
  },
  {
    "id": "seed-score-277",
    "name": "Nanette Disla",
    "score": 94,
    "absent": false,
    "date": "2026-03-13",
    "notes": "Initial data · CAX · NR",
    "createdAt": 1773417600276
  },
  {
    "id": "seed-score-278",
    "name": "Justin Garrow",
    "score": 98,
    "absent": false,
    "date": "2026-03-12",
    "notes": "Initial data · IRA · THATS 3!!! · NR",
    "createdAt": 1773331200277
  },
  {
    "id": "seed-score-279",
    "name": "Cristian Feliz",
    "score": 86,
    "absent": false,
    "date": "2026-03-14",
    "notes": "Initial data · PPL",
    "createdAt": 1773504000278
  },
  {
    "id": "seed-score-280",
    "name": "Jonny Ahern",
    "score": 93,
    "absent": false,
    "date": "2026-03-15",
    "notes": "Initial data · IFR · LW",
    "createdAt": 1773590400279
  },
  {
    "id": "seed-score-281",
    "name": "Jonny Ahern",
    "score": 90,
    "absent": false,
    "date": "2026-03-15",
    "notes": "Initial data · IFR · LW",
    "createdAt": 1773590400280
  },
  {
    "id": "seed-score-282",
    "name": "Jonny Ahern",
    "score": 93,
    "absent": false,
    "date": "2026-03-15",
    "notes": "Initial data · IFR · Thatss THREE · LW",
    "createdAt": 1773590400281
  },
  {
    "id": "seed-score-283",
    "name": "cristian feliz",
    "score": 80,
    "absent": false,
    "date": "2026-03-16",
    "notes": "Initial data · PPL · JA",
    "createdAt": 1773676800282
  },
  {
    "id": "seed-score-284",
    "name": "cristian feliz",
    "score": 90,
    "absent": false,
    "date": "2026-03-16",
    "notes": "Initial data · PPL · AA",
    "createdAt": 1773676800283
  },
  {
    "id": "seed-score-285",
    "name": "Cristian Feliz",
    "score": 95,
    "absent": false,
    "date": "2026-03-17",
    "notes": "Initial data · PPL · JR",
    "createdAt": 1773763200284
  },
  {
    "id": "seed-score-286",
    "name": "Cristian Feliz",
    "score": 90,
    "absent": false,
    "date": "2026-03-18",
    "notes": "Initial data · PPL · , thats 3! · EP",
    "createdAt": 1773849600285
  },
  {
    "id": "seed-score-287",
    "name": "Chris Freeman",
    "score": 93,
    "absent": false,
    "date": "2026-03-19",
    "notes": "Initial data · IRA · EP",
    "createdAt": 1773936000286
  },
  {
    "id": "seed-score-288",
    "name": "Ethan W",
    "score": null,
    "absent": true,
    "date": "2026-03-22",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1774195200287
  },
  {
    "id": "seed-score-289",
    "name": "Kevin Abi Raed",
    "score": 92,
    "absent": false,
    "date": "2026-03-23",
    "notes": "Initial data · FOI · , 96%, 98% THATS 3!!!!!!!! · LW",
    "createdAt": 1774281600288
  },
  {
    "id": "seed-score-290",
    "name": "Chris Freeman",
    "score": 93,
    "absent": false,
    "date": "2026-03-24",
    "notes": "Initial data · IRA · ONE MORE · AA",
    "createdAt": 1774368000289
  },
  {
    "id": "seed-score-291",
    "name": "Chris Freeman",
    "score": 93,
    "absent": false,
    "date": "2026-03-25",
    "notes": "Initial data · IRA · THATS 3!!!! · JA",
    "createdAt": 1774454400290
  },
  {
    "id": "seed-score-292",
    "name": "Stanley",
    "score": 80,
    "absent": false,
    "date": "2026-03-26",
    "notes": "Initial data · IRA · EP",
    "createdAt": 1774540800291
  },
  {
    "id": "seed-score-293",
    "name": "Stanley",
    "score": 83,
    "absent": false,
    "date": "2026-03-27",
    "notes": "Initial data · IRA",
    "createdAt": 1774627200292
  },
  {
    "id": "seed-score-294",
    "name": "Stanley Fenelon",
    "score": 83,
    "absent": false,
    "date": "2026-03-27",
    "notes": "Initial data · IRA",
    "createdAt": 1774627200293
  },
  {
    "id": "seed-score-295",
    "name": "Saif Hussein",
    "score": 75.4,
    "absent": false,
    "date": "2026-03-28",
    "notes": "Initial data · PPL · DR",
    "createdAt": 1774713600294
  },
  {
    "id": "seed-score-296",
    "name": "Daniel Weis",
    "score": 81.7,
    "absent": false,
    "date": "2026-03-29",
    "notes": "Initial data · IRA · AA",
    "createdAt": 1774800000295
  },
  {
    "id": "seed-score-297",
    "name": "Daniel Weis",
    "score": 86,
    "absent": false,
    "date": "2026-03-30",
    "notes": "Initial data · IRA · LW",
    "createdAt": 1774886400296
  },
  {
    "id": "seed-score-298",
    "name": "Ethan Winkler",
    "score": 83,
    "absent": false,
    "date": "2026-03-30",
    "notes": "Initial data · IRA",
    "createdAt": 1774886400297
  },
  {
    "id": "seed-score-299",
    "name": "Stanley Fenelon",
    "score": 88,
    "absent": false,
    "date": "2026-03-31",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1774972800298
  },
  {
    "id": "seed-score-300",
    "name": "Ethan winkler",
    "score": 90,
    "absent": false,
    "date": "2026-03-31",
    "notes": "Initial data · IRA · AA",
    "createdAt": 1774972800299
  },
  {
    "id": "seed-score-301",
    "name": "Ethan winkler",
    "score": 90,
    "absent": false,
    "date": "2026-03-31",
    "notes": "Initial data · IRA · AA",
    "createdAt": 1774972800300
  },
  {
    "id": "seed-score-302",
    "name": "Ethan winkler",
    "score": 70,
    "absent": false,
    "date": "2026-03-31",
    "notes": "Initial data · IRA · AA",
    "createdAt": 1774972800301
  },
  {
    "id": "seed-score-303",
    "name": "Daniel Weis",
    "score": 87,
    "absent": false,
    "date": "2026-03-31",
    "notes": "Initial data · IRA · AA",
    "createdAt": 1774972800302
  },
  {
    "id": "seed-score-304",
    "name": "Stanley Fenelon",
    "score": 88,
    "absent": false,
    "date": "2026-03-31",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1774972800303
  },
  {
    "id": "seed-score-305",
    "name": "Daniel Weis",
    "score": 93,
    "absent": false,
    "date": "2026-03-31",
    "notes": "Initial data · IRA · AA",
    "createdAt": 1774972800304
  },
  {
    "id": "seed-score-306",
    "name": "Saif Hussein",
    "score": 80,
    "absent": false,
    "date": "2026-03-31",
    "notes": "Initial data · PPL · AA",
    "createdAt": 1774972800305
  },
  {
    "id": "seed-score-307",
    "name": "Ethan Winkler",
    "score": 78,
    "absent": false,
    "date": "2026-04-01",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1775059200306
  },
  {
    "id": "seed-score-308",
    "name": "Ethan Winkler",
    "score": 88,
    "absent": false,
    "date": "2026-04-01",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1775059200307
  },
  {
    "id": "seed-score-309",
    "name": "Ethan Winkler",
    "score": 88,
    "absent": false,
    "date": "2026-04-01",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1775059200308
  },
  {
    "id": "seed-score-310",
    "name": "Ethan Winkler",
    "score": 82,
    "absent": false,
    "date": "2026-04-01",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1775059200309
  },
  {
    "id": "seed-score-311",
    "name": "Ethan Winkler",
    "score": 81.7,
    "absent": false,
    "date": "2026-04-02",
    "notes": "Initial data · Ep",
    "createdAt": 1775145600310
  },
  {
    "id": "seed-score-312",
    "name": "trevor K",
    "score": 92.5,
    "absent": false,
    "date": "2026-04-01",
    "notes": "Initial data · ppl · JA",
    "createdAt": 1775059200311
  },
  {
    "id": "seed-score-313",
    "name": "trevor K",
    "score": 96,
    "absent": false,
    "date": "2026-04-01",
    "notes": "Initial data · ppl · JA",
    "createdAt": 1775059200312
  },
  {
    "id": "seed-score-314",
    "name": "trevor K",
    "score": 95,
    "absent": false,
    "date": "2026-04-01",
    "notes": "Initial data · ppl · thats three · JA",
    "createdAt": 1775059200313
  },
  {
    "id": "seed-score-315",
    "name": "Daniel Weis",
    "score": 81,
    "absent": false,
    "date": "2026-04-02",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1775145600314
  },
  {
    "id": "seed-score-316",
    "name": "Ethan W",
    "score": 86.7,
    "absent": false,
    "date": "2026-04-02",
    "notes": "Initial data · IRA · EP",
    "createdAt": 1775145600315
  },
  {
    "id": "seed-score-317",
    "name": "Ethan W",
    "score": 88,
    "absent": false,
    "date": "2026-04-02",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1775145600316
  },
  {
    "id": "seed-score-318",
    "name": "Ethan W",
    "score": 95,
    "absent": false,
    "date": "2026-04-02",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1775145600317
  },
  {
    "id": "seed-score-319",
    "name": "Ethan W",
    "score": null,
    "absent": true,
    "date": "2026-04-03",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1775232000318
  },
  {
    "id": "seed-score-320",
    "name": "Daniel W",
    "score": 90,
    "absent": false,
    "date": "2026-04-02",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1775145600319
  },
  {
    "id": "seed-score-321",
    "name": "Stanley Fenelon",
    "score": 91,
    "absent": false,
    "date": "2026-04-07",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1775577600320
  },
  {
    "id": "seed-score-322",
    "name": "Ethan W",
    "score": 86.7,
    "absent": false,
    "date": "2026-04-04",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1775318400321
  },
  {
    "id": "seed-score-323",
    "name": "Ethan W",
    "score": 86.7,
    "absent": false,
    "date": "2026-04-05",
    "notes": "Initial data · IRA · , 93.3 · DR",
    "createdAt": 1775404800322
  },
  {
    "id": "seed-score-324",
    "name": "Daniel W",
    "score": 93.3,
    "absent": false,
    "date": "2026-04-03",
    "notes": "Initial data · IRA · DR",
    "createdAt": 1775232000323
  },
  {
    "id": "seed-score-325",
    "name": "Daniel W",
    "score": 91.7,
    "absent": false,
    "date": "2026-04-06",
    "notes": "Initial data · IRA · THATS 3!!!!!!!!!! · LW",
    "createdAt": 1775491200324
  },
  {
    "id": "seed-score-326",
    "name": "Stanley Fenelon",
    "score": 93,
    "absent": false,
    "date": "2026-04-07",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1775577600325
  },
  {
    "id": "seed-score-327",
    "name": "Stanley Fenelon",
    "score": 88,
    "absent": false,
    "date": "2026-04-07",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1775577600326
  },
  {
    "id": "seed-score-328",
    "name": "Max Olsen",
    "score": 92,
    "absent": false,
    "date": "2026-04-08",
    "notes": "Initial data · PPL · JA",
    "createdAt": 1775664000327
  },
  {
    "id": "seed-score-329",
    "name": "Max Olsen",
    "score": 94,
    "absent": false,
    "date": "2026-04-08",
    "notes": "Initial data · PPL · JA",
    "createdAt": 1775664000328
  },
  {
    "id": "seed-score-330",
    "name": "Max Olsen",
    "score": 93,
    "absent": false,
    "date": "2026-04-08",
    "notes": "Initial data · PPL · Thats threeeeee · JA",
    "createdAt": 1775664000329
  },
  {
    "id": "seed-score-331",
    "name": "saif hussein",
    "score": 96,
    "absent": false,
    "date": "2026-04-08",
    "notes": "Initial data · PPL · JA",
    "createdAt": 1775664000330
  },
  {
    "id": "seed-score-332",
    "name": "saif hussein",
    "score": 90,
    "absent": false,
    "date": "2026-04-08",
    "notes": "Initial data · PPL · JA",
    "createdAt": 1775664000331
  },
  {
    "id": "seed-score-333",
    "name": "saif hussein",
    "score": 93,
    "absent": false,
    "date": "2026-04-08",
    "notes": "Initial data · PPL · Thats 3!!! · NR",
    "createdAt": 1775664000332
  },
  {
    "id": "seed-score-334",
    "name": "Stanley Fenelon",
    "score": 91,
    "absent": false,
    "date": "2026-04-11",
    "notes": "Initial data · IRA · AN",
    "createdAt": 1775923200333
  },
  {
    "id": "seed-score-335",
    "name": "Stanley Fenelon",
    "score": 93,
    "absent": false,
    "date": "2026-04-11",
    "notes": "Initial data · IRA · AN",
    "createdAt": 1775923200334
  },
  {
    "id": "seed-score-336",
    "name": "Stanley Fenelon",
    "score": 90,
    "absent": false,
    "date": "2026-04-11",
    "notes": "Initial data · IRA · Thats 3!!! · AN",
    "createdAt": 1775923200335
  },
  {
    "id": "seed-score-337",
    "name": "Tyler W",
    "score": 98.5,
    "absent": false,
    "date": "2026-04-10",
    "notes": "Initial data · ppl · DR",
    "createdAt": 1775836800336
  },
  {
    "id": "seed-score-338",
    "name": "Tyler W",
    "score": 93.8,
    "absent": false,
    "date": "2026-04-12",
    "notes": "Initial data · PPL · LW",
    "createdAt": 1776009600337
  },
  {
    "id": "seed-score-339",
    "name": "Tyler W",
    "score": 98.5,
    "absent": false,
    "date": "2026-04-12",
    "notes": "Initial data · PPL · THATS 3!!!!!!!!!!!!!!!!! · LW",
    "createdAt": 1776009600338
  },
  {
    "id": "seed-score-340",
    "name": "Ethan Winkler",
    "score": 91.7,
    "absent": false,
    "date": "2026-04-13",
    "notes": "Initial data · IRA · LW",
    "createdAt": 1776096000339
  },
  {
    "id": "seed-score-341",
    "name": "Ethan Winkler",
    "score": 87,
    "absent": false,
    "date": "2026-04-13",
    "notes": "Initial data · IRA · LW",
    "createdAt": 1776096000340
  },
  {
    "id": "seed-score-342",
    "name": "Ethan Winkler",
    "score": 85,
    "absent": false,
    "date": "2026-04-14",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1776182400341
  },
  {
    "id": "seed-score-343",
    "name": "Ethan Winkler",
    "score": 85,
    "absent": false,
    "date": "2026-04-14",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1776182400342
  },
  {
    "id": "seed-score-344",
    "name": "Ethan Winkler",
    "score": 88,
    "absent": false,
    "date": "2026-04-14",
    "notes": "Initial data · IRA · NR",
    "createdAt": 1776182400343
  },
  {
    "id": "seed-score-345",
    "name": "Ethan Winkler",
    "score": 91.7,
    "absent": false,
    "date": "2026-04-14",
    "notes": "Initial data · IRA · AA",
    "createdAt": 1776182400344
  },
  {
    "id": "seed-score-346",
    "name": "Ethan Winkler",
    "score": 93,
    "absent": false,
    "date": "2026-04-15",
    "notes": "Initial data · IRA · JA",
    "createdAt": 1776268800345
  },
  {
    "id": "seed-score-347",
    "name": "Judson H.",
    "score": null,
    "absent": true,
    "date": "2026-04-15",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1776268800346
  },
  {
    "id": "seed-score-348",
    "name": "Ethan Winkler",
    "score": 93,
    "absent": false,
    "date": "2026-04-15",
    "notes": "Initial data · IRA · THAT IS THREEEEE · JA",
    "createdAt": 1776268800347
  },
  {
    "id": "seed-score-349",
    "name": "Jonnier Arango",
    "score": null,
    "absent": true,
    "date": "2026-04-16",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1776355200348
  },
  {
    "id": "seed-score-350",
    "name": "Nick Olsen",
    "score": 87,
    "absent": false,
    "date": "2026-04-21",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1776787200349
  },
  {
    "id": "seed-score-351",
    "name": "Miguel Trejo",
    "score": 90,
    "absent": false,
    "date": "2026-04-23",
    "notes": "Initial data · PPL · ESP",
    "createdAt": 1776960000350
  },
  {
    "id": "seed-score-352",
    "name": "Nick Olsen",
    "score": 85,
    "absent": false,
    "date": "2026-04-21",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1776787200351
  },
  {
    "id": "seed-score-353",
    "name": "Nick Olsen",
    "score": 93,
    "absent": false,
    "date": "2026-04-21",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1776787200352
  },
  {
    "id": "seed-score-354",
    "name": "Charlie Olsen",
    "score": 92,
    "absent": false,
    "date": "2026-04-22",
    "notes": "Initial data · PPL · NR",
    "createdAt": 1776873600353
  },
  {
    "id": "seed-score-355",
    "name": "Nick Olsen",
    "score": 95,
    "absent": false,
    "date": "2026-04-22",
    "notes": "Initial data · PPL · Thats 3!!!! · NR",
    "createdAt": 1776873600354
  },
  {
    "id": "seed-score-356",
    "name": "Charlie Olsen",
    "score": 93,
    "absent": false,
    "date": "2026-04-22",
    "notes": "Initial data · PPL · EKJ",
    "createdAt": 1776873600355
  },
  {
    "id": "seed-score-357",
    "name": "Charlie Olsen",
    "score": 89,
    "absent": false,
    "date": "2026-04-22",
    "notes": "Initial data · PPL · EKJ",
    "createdAt": 1776873600356
  },
  {
    "id": "seed-score-358",
    "name": "Charlie Olsen",
    "score": 93,
    "absent": false,
    "date": "2026-04-22",
    "notes": "Initial data · PPL · EKJ",
    "createdAt": 1776873600357
  },
  {
    "id": "seed-score-359",
    "name": "Charlie Olsen",
    "score": 93,
    "absent": false,
    "date": "2026-04-22",
    "notes": "Initial data · PPL",
    "createdAt": 1776873600358
  },
  {
    "id": "seed-score-360",
    "name": "Charlie Olsen",
    "score": 93,
    "absent": false,
    "date": "2026-04-23",
    "notes": "Initial data · ppl · ESp",
    "createdAt": 1776960000359
  },
  {
    "id": "seed-score-361",
    "name": "Charlie Olsen",
    "score": 95,
    "absent": false,
    "date": "2026-04-23",
    "notes": "Initial data · ppl · Thats 3!!!! · ESP",
    "createdAt": 1776960000360
  },
  {
    "id": "seed-score-362",
    "name": "Miguel Trejo",
    "score": 90,
    "absent": false,
    "date": "2026-04-23",
    "notes": "Initial data · PPL · ESP",
    "createdAt": 1776960000361
  },
  {
    "id": "seed-score-363",
    "name": "Miguel Trejo",
    "score": 90,
    "absent": false,
    "date": "2026-04-23",
    "notes": "Initial data · PPL · thats 3 (lol) · NR",
    "createdAt": 1776960000362
  },
  {
    "id": "seed-score-364",
    "name": "Daniel R",
    "score": 92,
    "absent": false,
    "date": "2026-04-26",
    "notes": "Initial data · FOI · JA",
    "createdAt": 1777219200363
  },
  {
    "id": "seed-score-365",
    "name": "Daniel R",
    "score": 90,
    "absent": false,
    "date": "2026-04-26",
    "notes": "Initial data · FOI · JA",
    "createdAt": 1777219200364
  },
  {
    "id": "seed-score-366",
    "name": "Daniel R",
    "score": 94,
    "absent": false,
    "date": "2026-04-26",
    "notes": "Initial data · FOI · THATS THREE · JA",
    "createdAt": 1777219200365
  },
  {
    "id": "seed-score-367",
    "name": "Pim Van Usen",
    "score": 99,
    "absent": false,
    "date": "2026-05-04",
    "notes": "Initial data · COM · LW",
    "createdAt": 1777910400366
  },
  {
    "id": "seed-score-368",
    "name": "Pim Van Usen",
    "score": 100,
    "absent": false,
    "date": "2026-05-04",
    "notes": "Initial data · COM · LW",
    "createdAt": 1777910400367
  },
  {
    "id": "seed-score-369",
    "name": "Pim Van Usen",
    "score": 97,
    "absent": false,
    "date": "2026-05-04",
    "notes": "Initial data · COM · THATS 3!!!!!!!!!!!!!!!! · LW",
    "createdAt": 1777910400368
  },
  {
    "id": "seed-score-370",
    "name": "Miguel Trejo",
    "score": 85,
    "absent": false,
    "date": "2026-04-30",
    "notes": "Initial data · PPL · AA",
    "createdAt": 1777564800369
  },
  {
    "id": "seed-score-371",
    "name": "Miguel Trejo",
    "score": 86,
    "absent": false,
    "date": "2026-04-30",
    "notes": "Initial data · PPL · AA",
    "createdAt": 1777564800370
  },
  {
    "id": "seed-score-372",
    "name": "Miguel Trejo",
    "score": 85,
    "absent": false,
    "date": "2026-05-03",
    "notes": "Initial data · PPL · LW",
    "createdAt": 1777824000371
  },
  {
    "id": "seed-score-373",
    "name": "Miguel Trejo",
    "score": 89,
    "absent": false,
    "date": "2026-05-03",
    "notes": "Initial data · PPL · JA",
    "createdAt": 1777824000372
  },
  {
    "id": "seed-score-374",
    "name": "Miguel Trejo",
    "score": 89,
    "absent": false,
    "date": "2026-05-03",
    "notes": "Initial data · PPL · JA",
    "createdAt": 1777824000373
  },
  {
    "id": "seed-score-375",
    "name": "Sebastian V",
    "score": 93,
    "absent": false,
    "date": "2026-05-03",
    "notes": "Initial data · PPL · JA",
    "createdAt": 1777824000374
  },
  {
    "id": "seed-score-376",
    "name": "Miguel Trejo",
    "score": null,
    "absent": true,
    "date": "2026-05-06",
    "notes": "Initial data · Absent · PPL",
    "createdAt": 1778083200375
  },
  {
    "id": "seed-score-377",
    "name": "Sebastian V",
    "score": 94,
    "absent": false,
    "date": "2026-05-03",
    "notes": "Initial data · PPL · JA",
    "createdAt": 1777824000376
  },
  {
    "id": "seed-score-378",
    "name": "Sebastian V",
    "score": 95,
    "absent": false,
    "date": "2026-05-03",
    "notes": "Initial data · PPL · THATS THREE · JA",
    "createdAt": 1777824000377
  },
  {
    "id": "seed-score-379",
    "name": "Miguel Trejo",
    "score": 84,
    "absent": false,
    "date": "2026-05-06",
    "notes": "Initial data · PPL",
    "createdAt": 1778083200378
  },
  {
    "id": "seed-score-380",
    "name": "Miguel Trejo",
    "score": 83,
    "absent": false,
    "date": "2026-05-06",
    "notes": "Initial data · PPL",
    "createdAt": 1778083200379
  },
  {
    "id": "seed-score-381",
    "name": "Miguel Trejo",
    "score": 87,
    "absent": false,
    "date": "2026-05-06",
    "notes": "Initial data · PPL",
    "createdAt": 1778083200380
  },
  {
    "id": "seed-score-382",
    "name": "Miguel Trejo",
    "score": 92,
    "absent": false,
    "date": "2026-05-09",
    "notes": "Initial data · PPL · AA",
    "createdAt": 1778342400381
  },
  {
    "id": "seed-score-383",
    "name": "Miguel Trejo",
    "score": 96,
    "absent": false,
    "date": "2026-05-09",
    "notes": "Initial data · PPL · AA",
    "createdAt": 1778342400382
  },
  {
    "id": "seed-score-384",
    "name": "Miguel Trejo",
    "score": 96,
    "absent": false,
    "date": "2026-05-09",
    "notes": "Initial data · PPL · THATS THREE · AA",
    "createdAt": 1778342400383
  },
  {
    "id": "seed-score-385",
    "name": "Jonnier Arango",
    "score": 58,
    "absent": false,
    "date": "2026-05-13",
    "notes": "Initial data · ppl · JA",
    "createdAt": 1778688000384
  },
  {
    "id": "seed-score-386",
    "name": "Jeffrey Garrity",
    "score": 93.3,
    "absent": false,
    "date": "2026-05-15",
    "notes": "Initial data · ira · DR",
    "createdAt": 1778860800385
  },
  {
    "id": "seed-score-387",
    "name": "Jeffrey Garrity",
    "score": 81.7,
    "absent": false,
    "date": "2026-05-15",
    "notes": "Initial data · ira · DR",
    "createdAt": 1778860800386
  },
  {
    "id": "seed-score-388",
    "name": "Jeffrey Garrity",
    "score": 86.7,
    "absent": false,
    "date": "2026-05-15",
    "notes": "Initial data · ira · DR",
    "createdAt": 1778860800387
  },
  {
    "id": "seed-score-389",
    "name": "Jeffrey Garrity",
    "score": null,
    "absent": true,
    "date": "2026-05-16",
    "notes": "Initial data · Absent · IRA",
    "createdAt": 1778947200388
  },
  {
    "id": "seed-score-390",
    "name": "Alysha Andrade",
    "score": 95,
    "absent": false,
    "date": "2026-05-17",
    "notes": "Initial data · IRA · JA",
    "createdAt": 1779033600389
  },
  {
    "id": "seed-score-391",
    "name": "Alysha Andrade",
    "score": 91,
    "absent": false,
    "date": "2026-05-17",
    "notes": "Initial data · IRA · JA",
    "createdAt": 1779033600390
  },
  {
    "id": "seed-score-392",
    "name": "Alysha Andrade",
    "score": 98,
    "absent": false,
    "date": "2026-05-17",
    "notes": "Initial data · IRA · THREEEE · JA",
    "createdAt": 1779033600391
  },
  {
    "id": "seed-score-393",
    "name": "Jeffey Garrity",
    "score": 91,
    "absent": false,
    "date": "2026-05-18",
    "notes": "Initial data · IRA · LW",
    "createdAt": 1779120000392
  },
  {
    "id": "seed-score-394",
    "name": "Jeffery Garrity",
    "score": 88,
    "absent": false,
    "date": "2026-05-19",
    "notes": "Initial data · IRA · AA",
    "createdAt": 1779206400393
  },
  {
    "id": "seed-score-395",
    "name": "Jeffery Garrity",
    "score": 88,
    "absent": false,
    "date": "2026-05-20",
    "notes": "Initial data · IRA · EKJ",
    "createdAt": 1779292800394
  },
  {
    "id": "seed-score-396",
    "name": "Jeffery Garrity",
    "score": 90,
    "absent": false,
    "date": "2026-05-20",
    "notes": "Initial data · IRA · EKJ",
    "createdAt": 1779292800395
  },
  {
    "id": "seed-score-397",
    "name": "Jeffery Garrity",
    "score": 93.3,
    "absent": false,
    "date": "2026-05-22",
    "notes": "Initial data · IRA · ESP",
    "createdAt": 1779465600396
  },
  {
    "id": "seed-score-398",
    "name": "Jeffery Garrity",
    "score": 95,
    "absent": false,
    "date": "2026-05-23",
    "notes": "Initial data · IRA · THATS THREE!!! · ESP",
    "createdAt": 1779552000397
  },
  {
    "id": "seed-score-399",
    "name": "Drew Kelly",
    "score": 88.3,
    "absent": false,
    "date": "2026-05-28",
    "notes": "Initial data · IRA · AA",
    "createdAt": 1779984000398
  },
  {
    "id": "seed-score-400",
    "name": "Drew Kelly",
    "score": 88,
    "absent": false,
    "date": "2026-05-28",
    "notes": "Initial data · IRA · AA",
    "createdAt": 1779984000399
  },
  {
    "id": "seed-score-401",
    "name": "Drew Kelly",
    "score": 93,
    "absent": false,
    "date": "2026-06-02",
    "notes": "Initial data · IRA · AA",
    "createdAt": 1780416000400
  }
];
