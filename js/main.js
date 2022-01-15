const regions = [
    {
      id: "1",
      name_uz: "Qoraqalpogiston Respublikasi",
    },
    {
      id: "2",
      name_uz: "Andijon viloyati",
    },
    {
      id: "3",
      name_uz: "Buxoro viloyati",
    },
    {
      id: "4",
      name_uz: "Jizzax viloyati",
    },
    {
      id: "5",
      name_uz: "Qashqadaryo viloyati",
    },
    {
      id: "6",
      name_uz: "Navoiy viloyati",
    },
    {
      id: "7",
      name_uz: "Namangan viloyati",
    },
    {
      id: "8",
      name_uz: "Samarqand viloyati",
    },
    {
      id: "9",
      name_uz: "Surxandaryo viloyati",
    },
    {
      id: "10",
      name_uz: "Sirdaryo viloyati",
    },
    {
      id: "11",
      name_uz: "Toshkent viloyati",
    },
    {
      id: "12",
      name_uz: "Fargona viloyati",
    },
    {
      id: "13",
      name_uz: "Xorazm viloyati",
    },
    {
      id: "14",
      name_uz: "Toshkent shahri",
    }
]

const districts = [
  {
    id: "15",
    region_id: "1",
    name_uz: "Amudaryo tumani",
  },
  {
    id: "16",
    region_id: "1",
    name_uz: "Beruniy tumani",
  },
  {
    id: "17",
    region_id: "1",
    name_uz: "Kegayli tumani",
  },
  {
    id: "18",
    region_id: "1",
    name_uz: "Qonliko\ufffdl tumani",
  },
  {
    id: "19",
    region_id: "1",
    name_uz: "Qorao\ufffdzak tumani",
  },
  {
    id: "20",
    region_id: "1",
    name_uz: "Qo\ufffdng\ufffdirot tumani",
  },
  {
    id: "21",
    region_id: "1",
    name_uz: "Mo\ufffdynoq tumani",
  },
  {
    id: "22",
    region_id: "1",
    name_uz: "Nukus tumani",
  },
  {
    id: "23",
    region_id: "1",
    name_uz: "Nukus shahri",
  },
  {
    id: "24",
    region_id: "1",
    name_uz: "Taxtako\ufffdpir tumani",
  },
  {
    id: "25",
    region_id: "1",
    name_uz: "To\ufffdrtko\ufffdl tumani",
  },
  {
    id: "26",
    region_id: "1",
    name_uz: "Xo\ufffdjayli tumani",
  },
  {
    id: "27",
    region_id: "1",
    name_uz: "Chimboy tumani",
  },
  {
    id: "28",
    region_id: "1",
    name_uz: "Shumanay tumani",
  },
  {
    id: "29",
    region_id: "1",
    name_uz: "Ellikqal\ufffda tumani",
  },
  {
    id: "30",
    region_id: "2",
    name_uz: "Andijon shahri",
  },
  {
    id: "31",
    region_id: "2",
    name_uz: "Andijon tumani",
  },
  {
    id: "32",
    region_id: "2",
    name_uz: "Asaka tumani",
  },
  {
    id: "33",
    region_id: "2",
    name_uz: "Baliqchi tumani",
  },
  {
    id: "34",
    region_id: "2",
    name_uz: "Buloqboshi tumani",
  },
  {
    id: "35",
    region_id: "2",
    name_uz: "Bo\ufffdz tumani",
  },
  {
    id: "36",
    region_id: "2",
    name_uz: "Jalaquduq tumani",
  },
  {
    id: "37",
    region_id: "2",
    name_uz: "Izbosgan tumani",
  },
  {
    id: "38",
    region_id: "2",
    name_uz: "Qorasuv shahri",
  },
  {
    id: "39",
    region_id: "2",
    name_uz: "Qo\ufffdrg\ufffdontepa tumani",
  },
  {
    id: "40",
    region_id: "2",
    name_uz: "Marhamat tumani",
  },
  {
    id: "41",
    region_id: "2",
    name_uz: "Oltinko\ufffdl tumani",
  },
  {
    id: "42",
    region_id: "2",
    name_uz: "Paxtaobod tumani",
  },
  {
    id: "43",
    region_id: "2",
    name_uz: "Ulug\ufffdnor tumani",
  },
  {
    id: "44",
    region_id: "2",
    name_uz: "Xonabod tumani",
  },
  {
    id: "45",
    region_id: "2",
    name_uz: "Xo\ufffdjaobod tumani",
  },
  {
    id: "46",
    region_id: "2",
    name_uz: "Shahrixon tumani",
  },
  {
    id: "47",
    region_id: "3",
    name_uz: "Buxoro shahri",
  },
  {
    id: "48",
    region_id: "3",
    name_uz: "Buxoro tumani",
  },
  {
    id: "49",
    region_id: "3",
    name_uz: "Vobkent tumani",
  },
  {
    id: "50",
    region_id: "3",
    name_uz: "G\ufffdijduvon tumani",
  },
  {
    id: "51",
    region_id: "3",
    name_uz: "Jondor tumani",
  },
  {
    id: "52",
    region_id: "3",
    name_uz: "Kogon tumani",
  },
  {
    id: "53",
    region_id: "3",
    name_uz: "Kogon shahri",
  },
  {
    id: "54",
    region_id: "3",
    name_uz: "Qorako\ufffdl tumani",
  },
  {
    id: "55",
    region_id: "3",
    name_uz: "Qorovulbozor tumani",
  },
  {
    id: "56",
    region_id: "3",
    name_uz: "Olot tumani",
  },
  {
    id: "57",
    region_id: "3",
    name_uz: "Peshku tumani",
  },
  {
    id: "58",
    region_id: "3",
    name_uz: "Romitan tumani",
  },
  {
    id: "59",
    region_id: "3",
    name_uz: "Shofirkon tumani",
  },
  {
    id: "60",
    region_id: "4",
    name_uz: "Arnasoy tumani",
  },
  {
    id: "61",
    region_id: "4",
    name_uz: "Baxmal tumani",
  },
  {
    id: "62",
    region_id: "4",
    name_uz: "G\ufffdallaorol tumani",
  },
  {
    id: "63",
    region_id: "4",
    name_uz: "Do\ufffdstlik tumani",
  },
  {
    id: "64",
    region_id: "4",
    name_uz: "Sh.Rashidov tumani",
  },
  {
    id: "65",
    region_id: "4",
    name_uz: "Jizzax shahri",
  },
  {
    id: "66",
    region_id: "4",
    name_uz: "Zarbdor tumani",
  },
  {
    id: "67",
    region_id: "4",
    name_uz: "Zafarobod tumani",
  },
  {
    id: "68",
    region_id: "4",
    name_uz: "Zomin tumani",
  },
  {
    id: "69",
    region_id: "4",
    name_uz: "Mirzacho\ufffdl tumani",
  },
  {
    id: "70",
    region_id: "4",
    name_uz: "Paxtakor tumani",
  },
  {
    id: "71",
    region_id: "4",
    name_uz: "Forish tumani",
  },
  {
    id: "72",
    region_id: "4",
    name_uz: "Yangiobod tumani",
  },
  {
    id: "73",
    region_id: "5",
    name_uz: "G\ufffduzor tumani",
  },
  {
    id: "74",
    region_id: "5",
    name_uz: "Dehqonobod tumani",
  },
  {
    id: "75",
    region_id: "5",
    name_uz: "Qamashi tumani",
  },
  {
    id: "76",
    region_id: "5",
    name_uz: "Qarshi tumani",
  },
  {
    id: "77",
    region_id: "5",
    name_uz: "Qarshi shahri",
  },
  {
    id: "78",
    region_id: "5",
    name_uz: "Kasbi tumani",
  },
  {
    id: "79",
    region_id: "5",
    name_uz: "Kitob tumani",
  },
  {
    id: "80",
    region_id: "5",
    name_uz: "Koson tumani",
  },
  {
    id: "81",
    region_id: "5",
    name_uz: "Mirishkor tumani",
  },
  {
    id: "82",
    region_id: "5",
    name_uz: "Muborak tumani",
  },
  {
    id: "83",
    region_id: "5",
    name_uz: "Nishon tumani",
  },
  {
    id: "84",
    region_id: "5",
    name_uz: "Chiroqchi tumani",
  },
  {
    id: "85",
    region_id: "5",
    name_uz: "Shahrisabz tumani",
  },
  {
    id: "86",
    region_id: "5",
    name_uz: "Yakkabog\ufffd tumani",
  },
  {
    id: "87",
    region_id: "6",
    name_uz: "Zarafshon shahri",
  },
  {
    id: "88",
    region_id: "6",
    name_uz: "Karman tumani",
  },
  {
    id: "89",
    region_id: "6",
    name_uz: "Qiziltepa tumani",
  },
  {
    id: "90",
    region_id: "6",
    name_uz: "Konimex tumani",
  },
  {
    id: "91",
    region_id: "6",
    name_uz: "Navbahor tumani",
  },
  {
    id: "92",
    region_id: "6",
    name_uz: "Navoiy shahri",
  },
  {
    id: "93",
    region_id: "6",
    name_uz: "Nurota tumani",
  },
  {
    id: "94",
    region_id: "6",
    name_uz: "Tomdi tumani",
  },
  {
    id: "95",
    region_id: "6",
    name_uz: "Uchquduq tumani",
  },
  {
    id: "96",
    region_id: "6",
    name_uz: "Xatirchi tumani",
  },
  {
    id: "97",
    region_id: "7",
    name_uz: "Kosonsoy tumani",
  },
  {
    id: "98",
    region_id: "7",
    name_uz: "Mingbuloq tumani",
  },
  {
    id: "99",
    region_id: "7",
    name_uz: "Namangan tumani",
  },
  {
    id: "100",
    region_id: "7",
    name_uz: "Namangan shahri",
  },
  {
    id: "101",
    region_id: "7",
    name_uz: "Norin tumani",
  },
  {
    id: "102",
    region_id: "7",
    name_uz: "Pop tumani",
  },
  {
    id: "103",
    region_id: "7",
    name_uz: "To\ufffdraqo\ufffdrg\ufffdon tumani",
  },
  {
    id: "104",
    region_id: "7",
    name_uz: "Uychi tumani",
  },
  {
    id: "105",
    region_id: "7",
    name_uz: "Uchqo\ufffdrg\ufffdon tumani",
  },
  {
    id: "106",
    region_id: "7",
    name_uz: "Chortoq tumani",
  },
  {
    id: "107",
    region_id: "7",
    name_uz: "Chust tumani",
  },
  {
    id: "108",
    region_id: "7",
    name_uz: "Yangiqo\ufffdrg\ufffdon tumani",
  },
  {
    id: "109",
    region_id: "8",
    name_uz: "Bulung\ufffdur tumani",
  },
  {
    id: "110",
    region_id: "8",
    name_uz: "Jomboy tumani",
  },
  {
    id: "111",
    region_id: "8",
    name_uz: "Ishtixon tumani",
  },
  {
    id: "112",
    region_id: "8",
    name_uz: "Kattaqo\ufffdrg\ufffdon tumani",
  },
  {
    id: "113",
    region_id: "8",
    name_uz: "Kattaqo\ufffdrg\ufffdon shahri",
  },
  {
    id: "114",
    region_id: "8",
    name_uz: "Qo\ufffdshrabot tumani",
  },
  {
    id: "115",
    region_id: "8",
    name_uz: "Narpay tumani",
  },
  {
    id: "116",
    region_id: "8",
    name_uz: "Nurabod tumani",
  },
  {
    id: "117",
    region_id: "8",
    name_uz: "Oqdaryo tumani",
  },
  {
    id: "118",
    region_id: "8",
    name_uz: "Payariq tumani",
  },
  {
    id: "119",
    region_id: "8",
    name_uz: "Pastarg\ufffdom tumani",
  },
  {
    id: "120",
    region_id: "8",
    name_uz: "Paxtachi tumani",
  },
  {
    id: "121",
    region_id: "8",
    name_uz: "Samarqand tumani",
  },
  {
    id: "122",
    region_id: "8",
    name_uz: "Samarqand shahri",
  },
  {
    id: "123",
    region_id: "8",
    name_uz: "Toyloq tumani",
  },
  {
    id: "124",
    region_id: "8",
    name_uz: "Urgut tumani",
  },
  {
    id: "125",
    region_id: "9",
    name_uz: "Angor tumani",
  },
  {
    id: "126",
    region_id: "9",
    name_uz: "Boysun tumani",
  },
  {
    id: "127",
    region_id: "9",
    name_uz: "Denov tumani",
  },
  {
    id: "128",
    region_id: "9",
    name_uz: "Jarqo\ufffdrg\ufffdon tumani",
  },
  {
    id: "129",
    region_id: "9",
    name_uz: "Qiziriq tumani",
  },
  {
    id: "130",
    region_id: "9",
    name_uz: "Qo\ufffdmqo\ufffdrg\ufffdon tumani",
  },
  {
    id: "131",
    region_id: "9",
    name_uz: "Muzrabot tumani",
  },
  {
    id: "132",
    region_id: "9",
    name_uz: "Oltinsoy tumani",
  },
  {
    id: "133",
    region_id: "9",
    name_uz: "Sariosiy tumani",
  },
  {
    id: "134",
    region_id: "9",
    name_uz: "Termiz tumani",
  },
  {
    id: "135",
    region_id: "9",
    name_uz: "Termiz shahri",
  },
  {
    id: "136",
    region_id: "9",
    name_uz: "Uzun tumani",
  },
  {
    id: "137",
    region_id: "9",
    name_uz: "Sherobod tumani",
  },
  {
    id: "138",
    region_id: "9",
    name_uz: "Sho\ufffdrchi tumani",
  },
  {
    id: "139",
    region_id: "10",
    name_uz: "Boyovut tumani",
  },
  {
    id: "140",
    region_id: "10",
    name_uz: "Guliston tumani",
  },
  {
    id: "141",
    region_id: "10",
    name_uz: "Guliston shahri",
  },
  {
    id: "142",
    region_id: "10",
    name_uz: "Mirzaobod tumani",
  },
  {
    id: "143",
    region_id: "10",
    name_uz: "Oqoltin tumani",
  },
  {
    id: "144",
    region_id: "10",
    name_uz: "Sayxunobod tumani",
  },
  {
    id: "145",
    region_id: "10",
    name_uz: "Sardoba tumani",
  },
  {
    id: "146",
    region_id: "10",
    name_uz: "Sirdaryo tumani",
  },
  {
    id: "147",
    region_id: "10",
    name_uz: "Xavos tumani",
  },
  {
    id: "148",
    region_id: "10",
    name_uz: "Shirin shahri",
  },
  {
    id: "149",
    region_id: "10",
    name_uz: "Yangiyer shahri",
  },
  {
    id: "150",
    region_id: "11",
    name_uz: "Angiren shahri",
  },
  {
    id: "151",
    region_id: "11",
    name_uz: "Bekabod tumani",
  },
  {
    id: "152",
    region_id: "11",
    name_uz: "Bekabod shahri",
  },
  {
    id: "153",
    region_id: "11",
    name_uz: "Bo\ufffdka tumani",
  },
  {
    id: "154",
    region_id: "11",
    name_uz: "Bo\ufffdstonliq tumani",
  },
  {
    id: "155",
    region_id: "11",
    name_uz: "Zangiota tumani",
  },
  {
    id: "156",
    region_id: "11",
    name_uz: "Qibray tumani",
  },
  {
    id: "157",
    region_id: "11",
    name_uz: "Quyichirchiq tumani",
  },
  {
    id: "158",
    region_id: "11",
    name_uz: "Oqqo\ufffdrg\ufffdon tumani",
  },
  {
    id: "159",
    region_id: "11",
    name_uz: "Olmaliq shahri",
  },
  {
    id: "160",
    region_id: "11",
    name_uz: "Ohangaron tumani",
  },
  {
    id: "161",
    region_id: "11",
    name_uz: "Parkent tumani",
  },
  {
    id: "162",
    region_id: "11",
    name_uz: "Piskent tumani",
  },
  {
    id: "163",
    region_id: "11",
    name_uz: "O\ufffdrtachirchiq tumani",
  },
  {
    id: "164",
    region_id: "11",
    name_uz: "Chinoz tumani",
  },
  {
    id: "165",
    region_id: "11",
    name_uz: "Chirchiq shahri",
  },
  {
    id: "166",
    region_id: "11",
    name_uz: "Yuqorichirchiq tumani",
  },
  {
    id: "167",
    region_id: "11",
    name_uz: "Yangiyo\ufffdl tumani",
  },
  {
    id: "168",
    region_id: "12",
    name_uz: "Beshariq tumani",
  },
  {
    id: "169",
    region_id: "12",
    name_uz: "Bog\ufffddod tumani",
  },
  {
    id: "170",
    region_id: "12",
    name_uz: "Buvayda tumani",
  },
  {
    id: "171",
    region_id: "12",
    name_uz: "Dang\ufffdara tumani",
  },
  {
    id: "172",
    region_id: "12",
    name_uz: "Yozyovon tumani",
  },
  {
    id: "173",
    region_id: "12",
    name_uz: "Quva tumani",
  },
  {
    id: "174",
    region_id: "12",
    name_uz: "Quvasoy shahri",
  },
  {
    id: "175",
    region_id: "12",
    name_uz: "Qo\ufffdqon shahri",
  },
  {
    id: "176",
    region_id: "12",
    name_uz: "Qo\ufffdshtepa tumani",
  },
  {
    id: "177",
    region_id: "12",
    name_uz: "Marg\ufffdilon shahri",
  },
  {
    id: "178",
    region_id: "12",
    name_uz: "Oltiariq tumani",
  },
  {
    id: "179",
    region_id: "12",
    name_uz: "Rishton tumani",
  },
  {
    id: "180",
    region_id: "12",
    name_uz: "So\ufffdx tumani",
  },
  {
    id: "181",
    region_id: "12",
    name_uz: "Toshloq tumani",
  },
  {
    id: "182",
    region_id: "12",
    name_uz: "Uchko\ufffdprik tumani",
  },
  {
    id: "183",
    region_id: "12",
    name_uz: "O\ufffdzbekiston tumani",
  },
  {
    id: "184",
    region_id: "12",
    name_uz: "Farg\ufffdona tumani",
  },
  {
    id: "185",
    region_id: "12",
    name_uz: "Farg\ufffdona shahri",
  },
  {
    id: "186",
    region_id: "12",
    name_uz: "Furqat tumani",
  },
  {
    id: "187",
    region_id: "13",
    name_uz: "Bog\ufffdot tumani",
  },
  {
    id: "188",
    region_id: "13",
    name_uz: "Gurlan tumani",
  },
  {
    id: "189",
    region_id: "13",
    name_uz: "Qo\ufffdshko\ufffdpir tumani",
  },
  {
    id: "190",
    region_id: "13",
    name_uz: "Urganch tumani",
  },
  {
    id: "191",
    region_id: "13",
    name_uz: "Urganch shahri",
  },
  {
    id: "192",
    region_id: "13",
    name_uz: "Xiva tumani",
  },
  {
    id: "193",
    region_id: "13",
    name_uz: "Xazarasp tumani",
  },
  {
    id: "194",
    region_id: "13",
    name_uz: "Xonqa tumani",
  },
  {
    id: "195",
    region_id: "13",
    name_uz: "Shavot tumani",
  },
  {
    id: "196",
    region_id: "13",
    name_uz: "Yangiariq tumani",
  },
  {
    id: "197",
    region_id: "13",
    name_uz: "Yangibozor tumani",
  },
  {
    id: "198",
    region_id: "14",
    name_uz: "Bektimer tumani",
  },
  {
    id: "199",
    region_id: "14",
    name_uz: "Mirzo Ulug'bek tumani",
  },
  {
    id: "200",
    region_id: "14",
    name_uz: "Mirobod tumani",
  },
  {
    id: "201",
    region_id: "14",
    name_uz: "Olmazor tumani",
  },
  {
    id: "202",
    region_id: "14",
    name_uz: "Sirg'ali tumani",
  },
  {
    id: "203",
    region_id: "14",
    name_uz: "Uchtepa tumani",
  },
  {
    id: "204",
    region_id: "14",
    name_uz: "Yashnobod tumani",
  },
  {
    id: "205",
    region_id: "14",
    name_uz: "Chilonzor tumani",
  },
  {
    id: "206",
    region_id: "14",
    name_uz: "Shayxontohur tumani",
  },
  {
    id: "207",
    region_id: "14",
    name_uz: "Yunusobod tumani",
  },
  {
    id: "208",
    region_id: "14",
    name_uz: "Yakkasaroy tumani",
  },
  {
    id: "209",
    region_id: "1",
    name_uz: "Taxiatosh shahri",
  },
  {
    id: "210",
    region_id: "2",
    name_uz: "Asaka shahri",
  },
  {
    id: "211",
    region_id: "9",
    name_uz: "Bandixon tumani",
  },
  {
    id: "212",
    region_id: "11",
    name_uz: "Ohangaron shahri",
  },
  {
    id: "213",
    region_id: "11",
    name_uz: "Yangiyo\ufffdl shahri",
  },
  {
    id: "215",
    region_id: "11",
    name_uz: "Toshkent tumani",
  },
  {
    id: "216",
    region_id: "13",
    name_uz: "Xiva shahri",
  },
  {
    id: "217",
    region_id: "13",
    name_uz: "Do'stlik shahri",
  },
  {
    id: "218",
    region_id: "14",
    name_uz: "Yangihayot tumani",
  },
  {
    id: "219",
    region_id: "13",
    name_uz: "Tuproqqala tumani",
  },
  {
    id: "220",
    region_id: "7",
    name_uz: "Davlatobod tumani",
  },
  {
    id: "221",
    region_id: "6",
    name_uz: "G\ufffdozg\ufffdon shahri",
  },
  {
    id: "222",
    region_id: "1",
    name_uz: "Bo\ufffdzatov tumani",
  },
  {
    id: "223",
    region_id: "9",
    name_uz: "Bandixon tumani",
  },
  {
    id: "224",
    region_id: "5",
    name_uz: "Shahrisabz shahri",
  }
]
const quarters = [
    {
      id: "1",
      district_id: "15",
      name: "Amir Temur nomli ovul fuqarolar yig`ini"
    },
    {
      id: "2",
      district_id: "15",
      name: "Tosh Yop ovul fuqarolar yig`ini"
    },
    {
      id: "3",
      district_id: "15",
      name: "O`rta qal`a ovul fuqarolar yig`ini"
    },
    {
      id: "4",
      district_id: "15",
      name: "O`rta qal`a ovul fuqarolar yig`ini tarkibidagi \"Arna bo`yi\" MFY"
    },
    {
      id: "5",
      district_id: "15",
      name: "O`rta qal`a ovul fuqarolar yig`ini tarkibidagi \"Bog`\" MFY"
    },
    {
      id: "6",
      district_id: "15",
      name: "Qilichboy ovul fuqarolar yig`ini"
    },
    {
      id: "7",
      district_id: "15",
      name: "Qilichboy ovul fuqarolar yig`ini tarkibidagi \"Xizr eli\" MFY"
    },
    {
      id: "8",
      district_id: "15",
      name: "Qilichboy ovul fuqarolar yig`ini tarkibidagi \"Besh ovul\" MFY"
    },
    {
      id: "9",
      district_id: "15",
      name: "Qilichboy ovul fuqarolar yig`ini tarkibidagi \"Tosh qal`a\" MFY"
    },
    {
      id: "10",
      district_id: "15",
      name: "Qilichboy ovul fuqarolar yig`ini tarkibidagi \"Yuqori qishloq\" MFY"
    },
    {
      id: "11",
      district_id: "15",
      name: "Xalimbeg ovul fuqarolar yig`ini"
    },
    {
      id: "12",
      district_id: "15",
      name: "Xalimbeg ovul fuqarolar yig`ini tarkibidagi \"AYoqchi\" MFY"
    },
    {
      id: "13",
      district_id: "15",
      name: "Do`rman ovul fuqarolar yig`ini"
    },
    {
      id: "14",
      district_id: "15",
      name: "Do`rman ovul fuqarolar yig`ini tarkibidagi \"Qoramon\" MFY"
    },
    {
      id: "15",
      district_id: "15",
      name: "Do`rman ovul fuqarolar yig`ini tarkibidagi \"Bo`z solma\" MFY"
    },
    {
      id: "16",
      district_id: "15",
      name: "Bo`z Yop ovul fuqarolar yig`ini"
    },
    {
      id: "17",
      district_id: "15",
      name: "Xitoy ovul fuqarolar yig`ini"
    },
    {
      id: "18",
      district_id: "15",
      name: "Xitoy ovul fuqarolar yig`ini tarkibidagi \"Tor Yop\" MFY"
    },
    {
      id: "19",
      district_id: "15",
      name: "Xitoy ovul fuqarolar yig`ini tarkibidagi \"Namuna\" MFY"
    },
    {
      id: "20",
      district_id: "15",
      name: "Kuyuk ko`pir ovul fuqarolar yig`ini"
    },
    {
      id: "21",
      district_id: "15",
      name: "Kuyuk ko`pir ovul fuqarolar yig`ini tarkibidagi \"O`zbekiston\" MFY"
    },
    {
      id: "22",
      district_id: "15",
      name: "Kuyuk ko`pir ovul fuqarolar yig`ini tarkibidagi \"Qizilcholi\" MFY"
    },
    {
      id: "23",
      district_id: "15",
      name: "Jumurtov shaharcha fuqarolar yig`ini"
    },
    {
      id: "24",
      district_id: "15",
      name: "Z.M.Bobur nomli ovul fuqarolar yig`ini"
    },
    {
      id: "25",
      district_id: "15",
      name: "Z.M.Bobur nomli ovul fuqarolar yig`ini tarkibidagi \"Jumur ovul\" MFY"
    },
    {
      id: "26",
      district_id: "15",
      name: "Oq oltin ovul fuqarolar yig`ini"
    },
    {
      id: "27",
      district_id: "15",
      name: "To`lqin ovul fuqarolar yig`ini"
    },
    {
      id: "28",
      district_id: "15",
      name: "Choyko`l ovul fuqarolar yig`ini"
    },
    {
      id: "29",
      district_id: "15",
      name: "Choyko`l ovul fuqarolar yig`ini tarkibidagi \"Bosuv\" MFY"
    },
    {
      id: "30",
      district_id: "15",
      name: "Qipchoq ovul fuqarolar yig`ini"
    },
    {
      id: "31",
      district_id: "15",
      name: "Qipchoq ovul fuqarolar yig`ini tarkibidagi \"Daryo bo`yi\" MFY"
    },
    {
      id: "32",
      district_id: "15",
      name: "Qipchoq ovul fuqarolar yig`ini tarkibidagi \"Uyshin\" MFY"
    },
    {
      id: "33",
      district_id: "15",
      name: "Qipchoq ovul fuqarolar yig`ini tarkibidagi \"Besh tom\" MFY"
    },
    {
      id: "34",
      district_id: "15",
      name: "Qangli ovul fuqarolar yig`ini"
    },
    {
      id: "35",
      district_id: "15",
      name: "Qangli ovul fuqarolar yig`ini tarkibidagi \"Qum Yop\" MFY"
    },
    {
      id: "36",
      district_id: "15",
      name: "Nazarxon ovul fuqarolar yig`ini"
    },
    {
      id: "37",
      district_id: "15",
      name: "A.Navoiy nomli MFY"
    },
    {
      id: "38",
      district_id: "15",
      name: "Chordara MFY"
    },
    {
      id: "39",
      district_id: "15",
      name: "Boy ovul MFY"
    },
    {
      id: "40",
      district_id: "15",
      name: "Durunki MFY"
    },
    {
      id: "41",
      district_id: "15",
      name: "Do`stlik MFY"
    },
    {
      id: "42",
      district_id: "15",
      name: "Yangiobod MFY"
    },
    {
      id: "43",
      district_id: "15",
      name: "Beruniy nomli MFY"
    },
    {
      id: "44",
      district_id: "15",
      name: "Olmazor MFY"
    },
    {
      id: "45",
      district_id: "15",
      name: "Gulzor MFY"
    },
    {
      id: "46",
      district_id: "15",
      name: "Oybek nomli MFY"
    },
    {
      id: "47",
      district_id: "15",
      name: "Bo`ston MFY"
    },
    {
      id: "85",
      district_id: "17",
      name: "Kegeyli shaharchasi fuqarolar yig`ini"
    },
    {
      id: "86",
      district_id: "17",
      name: "Kegeyli shaharchasi 1-sonli MFY"
    },
    {
      id: "87",
      district_id: "17",
      name: "Kegeyli shaharchasi 2-sonli MFY"
    },
    {
      id: "88",
      district_id: "17",
      name: "Kegeyli shaharchasi 3-sonli MFY"
    },
    {
      id: "89",
      district_id: "17",
      name: "Kegeyli shaharchasi 4-sonli MFY"
    },
    {
      id: "90",
      district_id: "17",
      name: "Xalaqabad shaharchasi fuqarolar yig`ini"
    },
    {
      id: "91",
      district_id: "17",
      name: "Xalaqabad shaharchasi 1-sonli MFY"
    },
    {
      id: "92",
      district_id: "17",
      name: "Xalaqabad shaharchasi 2-sonli MFY"
    },
    {
      id: "93",
      district_id: "17",
      name: "Xalaqabad shaharchasi 3-sonli MFY"
    },
    {
      id: "94",
      district_id: "17",
      name: "Xalaqabad shaharchasi 4-sonli MFY"
    },
    {
      id: "95",
      district_id: "17",
      name: "Aktuba ovul fuqarolar yig`ini"
    },
    {
      id: "96",
      district_id: "17",
      name: "Abat ovul fuqarolar yig`ini"
    },
    {
      id: "97",
      district_id: "17",
      name: "Janabazar ovul fuqarolar yig`ini"
    },
    {
      id: "98",
      district_id: "17",
      name: "Juzim bag ovul fuqarolar yig`ini"
    },
    {
      id: "99",
      district_id: "17",
      name: "Jalpak jap ovul fuqarolar yig`ini"
    },
    {
      id: "100",
      district_id: "17",
      name: "Kumshungil ovul fuqarolar yig`ini"
    },
    {
      id: "101",
      district_id: "17",
      name: "Еrkindarya ovul fuqarolar yig`ini"
    },
    {
      id: "102",
      district_id: "17",
      name: "Kazanketken SHFY"
    },
    {
      id: "103",
      district_id: "17",
      name: "Kusxanatau ovul fuqarolar yig`ini"
    },
    {
      id: "104",
      district_id: "17",
      name: "Aspantay ovul fuqarolar yig`ini"
    },
    {
      id: "117",
      district_id: "19",
      name: "Qorao`zak shaharcha fuqarolai yig`ini"
    },
    {
      id: "118",
      district_id: "19",
      name: "1-sonli MFY"
    },
    {
      id: "119",
      district_id: "19",
      name: "2-sonli MFY"
    },
    {
      id: "120",
      district_id: "19",
      name: "3-sonli MFY"
    },
    {
      id: "121",
      district_id: "19",
      name: "4-sonli MFY"
    },
    {
      id: "122",
      district_id: "19",
      name: "Berdax ovul fuqarolar yig`ini"
    },
    {
      id: "123",
      district_id: "19",
      name: "Qorako`l ovul fuqarolar yig`ini"
    },
    {
      id: "124",
      district_id: "19",
      name: "Qorabug`a ovul fuqarolar yig`ini"
    },
    {
      id: "125",
      district_id: "19",
      name: "Qoybaq ovul fuqarolar yig`ini"
    },
    {
      id: "126",
      district_id: "19",
      name: "Madeniyat ovul fuqarolar yig`ini"
    },
    {
      id: "127",
      district_id: "19",
      name: "Alg`abas ovul fuqarolar yig`ini"
    },
    {
      id: "128",
      district_id: "19",
      name: "Qorao`zak ovul fuqarolar yig`ini"
    },
    {
      id: "129",
      district_id: "19",
      name: "Еsimo`zak ovul fuqarolar yig`ini"
    },
    {
      id: "167",
      district_id: "21",
      name: "1 sonli MFY"
    },
    {
      id: "168",
      district_id: "21",
      name: "2 sonli MFY"
    },
    {
      id: "169",
      district_id: "21",
      name: "3 sonli MFY"
    },
    {
      id: "170",
      district_id: "21",
      name: "4 sonli MFY"
    },
    {
      id: "171",
      district_id: "21",
      name: "5 sonli MFY"
    },
    {
      id: "172",
      district_id: "21",
      name: "Uchsay ovul fuqarolar yig`ini "
    },
    {
      id: "173",
      district_id: "21",
      name: "Tikuzyak ovul fuqarolar yig`ini "
    },
    {
      id: "174",
      district_id: "21",
      name: "Bozatoo` ovul fuqarolar yig`ini "
    },
    {
      id: "175",
      district_id: "21",
      name: "Madeli ovul fuqarolar yig`ini "
    },
    {
      id: "176",
      district_id: "21",
      name: "Hakim-ota ovul fuqarolar yig`ini "
    },
    {
      id: "177",
      district_id: "21",
      name: "Qazaxdarya ovul fuqarolar yig`ini "
    },
    {
      id: "187",
      district_id: "23",
      name: "Botanika bog`i MFY"
    },
    {
      id: "188",
      district_id: "23",
      name: "Havo Yo`li MFY"
    },
    {
      id: "189",
      district_id: "23",
      name: "Aydin Yo`l MFY"
    },
    {
      id: "190",
      district_id: "23",
      name: "Chimboy choyxona MFY"
    },
    {
      id: "191",
      district_id: "23",
      name: "Xalqlar do`stligi MFY"
    },
    {
      id: "192",
      district_id: "23",
      name: "Shig`is MFY"
    },
    {
      id: "193",
      district_id: "23",
      name: "Shoirlar ovuli MFY"
    },
    {
      id: "194",
      district_id: "23",
      name: "Tinchlik MFY"
    },
    {
      id: "195",
      district_id: "23",
      name: "Do`stlik MFY"
    },
    {
      id: "196",
      district_id: "23",
      name: "Sarbinoz MFY"
    },
    {
      id: "197",
      district_id: "23",
      name: "Tung`ish ko`nis MFY"
    },
    {
      id: "198",
      district_id: "23",
      name: "Qurilishchi MFY"
    },
    {
      id: "199",
      district_id: "23",
      name: "13-sonli Qoskol-2 MFY"
    },
    {
      id: "200",
      district_id: "23",
      name: "14-sonli Almazar MFY"
    },
    {
      id: "201",
      district_id: "23",
      name: "15-sonli Еli abat MFY"
    },
    {
      id: "202",
      district_id: "23",
      name: "16-sonli Darbent MFY"
    },
    {
      id: "203",
      district_id: "23",
      name: "17-sonli Bayterek MFY"
    },
    {
      id: "204",
      district_id: "23",
      name: "18-sonli Kebir ovul MFY"
    },
    {
      id: "205",
      district_id: "23",
      name: "19-sonli Kattagar MFY"
    },
    {
      id: "206",
      district_id: "23",
      name: "20-sonli Gone qala MFY"
    },
    {
      id: "207",
      district_id: "23",
      name: "21-sonli Taslaq-1 MFY"
    },
    {
      id: "208",
      district_id: "23",
      name: "22-sonli Taslaq-2 MFY"
    },
    {
      id: "209",
      district_id: "23",
      name: "23-sonli Qum ovul MFY"
    },
    {
      id: "210",
      district_id: "23",
      name: "24-sonli Jeke terek MFY"
    },
    {
      id: "211",
      district_id: "23",
      name: "25-sonli Turan MFY"
    },
    {
      id: "212",
      district_id: "23",
      name: "26-sonli Ko`k o`zak MFY"
    },
    {
      id: "213",
      district_id: "23",
      name: "27-sonli Temir jol MFY"
    },
    {
      id: "214",
      district_id: "23",
      name: "28-sonli Ornek MFY"
    },
    {
      id: "215",
      district_id: "23",
      name: "29-sonli Nur MFY"
    },
    {
      id: "216",
      district_id: "23",
      name: "30-sonli Qoskol-1 MFY"
    },
    {
      id: "217",
      district_id: "23",
      name: "31-sonli Qoskol-3 MFY"
    },
    {
      id: "218",
      district_id: "23",
      name: "32-sonli May ovul MFY"
    },
    {
      id: "219",
      district_id: "23",
      name: "33-conli Qizil qum MFY"
    },
    {
      id: "220",
      district_id: "23",
      name: "34-sonli Jayhun MFY"
    },
    {
      id: "221",
      district_id: "23",
      name: "35-sonli Navro`z MFY"
    },
    {
      id: "222",
      district_id: "23",
      name: "36-sonli Nao`qan bag` MFY"
    },
    {
      id: "223",
      district_id: "23",
      name: "37-sonli Juvozchi MFY"
    },
    {
      id: "224",
      district_id: "23",
      name: "38-conliBes pobe MFY"
    },
    {
      id: "225",
      district_id: "23",
      name: "39-sonli Jiydeli boysin-1 MFY"
    },
    {
      id: "226",
      district_id: "23",
      name: "40-sonli Jiydeli baysin-2 MFY"
    },
    {
      id: "227",
      district_id: "23",
      name: "41-sonli Aq jag`is MFY"
    },
    {
      id: "228",
      district_id: "23",
      name: "42-sonli Samanbay-1 MFY"
    },
    {
      id: "229",
      district_id: "23",
      name: "43-sonli Samanbay-2 MFY"
    },
    {
      id: "230",
      district_id: "23",
      name: "44-sonli Qoratov MFY"
    },
    {
      id: "231",
      district_id: "23",
      name: "45-sonli Boz ovul MFY"
    },
    {
      id: "232",
      district_id: "23",
      name: "46-sonli Qutli qonis MFY"
    },
    {
      id: "233",
      district_id: "23",
      name: "47-sonli Qumbiz ovul MFY"
    },
    {
      id: "234",
      district_id: "23",
      name: "48-sonli Aq otao` MFY"
    },
    {
      id: "235",
      district_id: "23",
      name: "49-sonli Guzar MFY"
    },
    {
      id: "236",
      district_id: "23",
      name: "50-sonli Beket MFY"
    },
    {
      id: "237",
      district_id: "23",
      name: "51-sonli G`arezsizlik MFY"
    },
    {
      id: "238",
      district_id: "23",
      name: "52-sonli Nao`bahar MFY"
    },
    {
      id: "239",
      district_id: "23",
      name: "53-sonli AllaniYaz Qaharman MFY"
    },
    {
      id: "240",
      district_id: "23",
      name: "54-sonli Xojan ovul MFY"
    },
    {
      id: "241",
      district_id: "23",
      name: "55-sonli MFY"
    },
    {
      id: "242",
      district_id: "23",
      name: "56-sonli MFY"
    },
    {
      id: "243",
      district_id: "23",
      name: "57-sonli MFY"
    },
    {
      id: "244",
      district_id: "23",
      name: "58-sonli MFY"
    },
    {
      id: "262",
      district_id: "25",
      name: "Aviaцiya MFY"
    },
    {
      id: "263",
      district_id: "25",
      name: "Guliston MFY"
    },
    {
      id: "264",
      district_id: "25",
      name: "Yangiobod MFY"
    },
    {
      id: "265",
      district_id: "25",
      name: "Beruniy MFY"
    },
    {
      id: "266",
      district_id: "25",
      name: "Ibn-Sino MFY"
    },
    {
      id: "267",
      district_id: "25",
      name: "To`rtko`l MFY"
    },
    {
      id: "268",
      district_id: "25",
      name: "Turkiston MFY"
    },
    {
      id: "269",
      district_id: "25",
      name: "Markazobod MFY"
    },
    {
      id: "270",
      district_id: "25",
      name: "Toshkent MFY"
    },
    {
      id: "271",
      district_id: "25",
      name: "G`alaba MFY"
    },
    {
      id: "272",
      district_id: "25",
      name: "Mustaqillik MFY"
    },
    {
      id: "273",
      district_id: "25",
      name: "Bog`Yop MFY"
    },
    {
      id: "274",
      district_id: "25",
      name: "Navoiy MFY"
    },
    {
      id: "275",
      district_id: "25",
      name: "O`zbekiston MFY"
    },
    {
      id: "276",
      district_id: "25",
      name: "Istiqlol MFY"
    },
    {
      id: "277",
      district_id: "25",
      name: "Xamza MFY"
    },
    {
      id: "278",
      district_id: "25",
      name: "Gagarin MFY"
    },
    {
      id: "279",
      district_id: "25",
      name: "Navro`z MFY"
    },
    {
      id: "280",
      district_id: "25",
      name: "Do`stlik MFY"
    },
    {
      id: "281",
      district_id: "25",
      name: "Yoshlik MFY"
    },
    {
      id: "282",
      district_id: "25",
      name: "Oqqamish ovul fuqarolar yig`ini"
    },
    {
      id: "283",
      district_id: "25",
      name: "Oqboshli ovul fuqarolar yig`ini"
    },
    {
      id: "284",
      district_id: "25",
      name: "O`zbekiston ovul fuqarolar yig`ini"
    },
    {
      id: "285",
      district_id: "25",
      name: "Sho`raxon ovul fuqarolar yig`ini"
    },
    {
      id: "286",
      district_id: "25",
      name: "Ko`na-To`rtko`l ovul fuqarolar yig`ini"
    },
    {
      id: "287",
      district_id: "25",
      name: "Paxtachi ovul fuqarolar yig`ini"
    },
    {
      id: "288",
      district_id: "25",
      name: "Ullubog` ovul fuqarolar yig`ini"
    },
    {
      id: "289",
      district_id: "25",
      name: "Tozabog`Yop ovul fuqarolar yig`ini"
    },
    {
      id: "290",
      district_id: "25",
      name: "A.Durdiev nomli ovul fuqarolar yig`ini"
    },
    {
      id: "291",
      district_id: "25",
      name: "Kelteminor ovul fuqarolar yig`ini"
    },
    {
      id: "292",
      district_id: "25",
      name: "Yonboshqal`a ovul fuqarolar yig`ini"
    },
    {
      id: "293",
      district_id: "25",
      name: "Ko`kcha ovul fuqarolar yig`ini"
    },
    {
      id: "294",
      district_id: "25",
      name: "Paxtaobod ovul fuqarolar yig`ini"
    },
    {
      id: "295",
      district_id: "25",
      name: "Qumbasqan ovul fuqarolar yig`ini"
    },
    {
      id: "296",
      district_id: "25",
      name: "Atauba ovul fuqarolar yig`ini"
    },
    {
      id: "297",
      district_id: "25",
      name: "O`zbekiston ovul fuqarolar yig`ini tasarrufidagi Do`stlik MFY"
    },
    {
      id: "298",
      district_id: "25",
      name: "Ko`na-To`rtko`l ovul fuqarolar yig`ini tasarrufidagi Anxorli MFY"
    },
    {
      id: "338",
      district_id: "27",
      name: "1-sonli MFY"
    },
    {
      id: "339",
      district_id: "27",
      name: "2-sonli MFY"
    },
    {
      id: "340",
      district_id: "27",
      name: "3-sonli MFY"
    },
    {
      id: "341",
      district_id: "27",
      name: "4-sonli MFY"
    },
    {
      id: "342",
      district_id: "27",
      name: "5-sonli MFY"
    },
    {
      id: "343",
      district_id: "27",
      name: "6-sonli MFY"
    },
    {
      id: "344",
      district_id: "27",
      name: "7-sonli MFY"
    },
    {
      id: "345",
      district_id: "27",
      name: "8-sonli MFY"
    },
    {
      id: "346",
      district_id: "27",
      name: "9-sonli MFY"
    },
    {
      id: "347",
      district_id: "27",
      name: "10-sonli MFY"
    },
    {
      id: "348",
      district_id: "27",
      name: "11-sonli MFY"
    },
    {
      id: "349",
      district_id: "27",
      name: "Tazg`ara ovul fuqarolar yig`ini"
    },
    {
      id: "350",
      district_id: "27",
      name: "Tag`jap ovul fuqarolar yig`ini"
    },
    {
      id: "351",
      district_id: "27",
      name: "Tazajol ovul fukarolar yig`ini"
    },
    {
      id: "352",
      district_id: "27",
      name: "Kenes ovul fuqarolar yig`ini"
    },
    {
      id: "353",
      district_id: "27",
      name: "Qosterek ovul fuqarolar yig`ini"
    },
    {
      id: "354",
      district_id: "27",
      name: "Mayjap ovul fuqarolar yig`ini"
    },
    {
      id: "355",
      district_id: "27",
      name: "Baxitli ovul fuqarolar yig`ini"
    },
    {
      id: "356",
      district_id: "27",
      name: "Qamis-arik ovul fuqarolar yig`ini"
    },
    {
      id: "357",
      district_id: "27",
      name: "Qizil-uzak ovul fuqarolar yig`ini"
    },
    {
      id: "358",
      district_id: "27",
      name: "Pashenttao` ovul fuqarolar yig`ini"
    },
    {
      id: "359",
      district_id: "27",
      name: "Kok-su ovul fuqarolar yig`ini"
    },
    {
      id: "372",
      district_id: "29",
      name: "Do`stlik ovul fuqarolar yig`ini"
    },
    {
      id: "373",
      district_id: "29",
      name: "Amirobod ovul fuqarolar yig`ini"
    },
    {
      id: "374",
      district_id: "29",
      name: "Toza-bog` ovul fuqarolar yig`ini"
    },
    {
      id: "375",
      district_id: "29",
      name: "Guldursun ovul fuqarolar yig`ini"
    },
    {
      id: "376",
      district_id: "29",
      name: "Qirqqiz ovul fuqarolar yig`ini"
    },
    {
      id: "377",
      district_id: "29",
      name: "QiliChinoq ovul fuqarolar yig`ini"
    },
    {
      id: "378",
      district_id: "29",
      name: "Saribiy ovul fuqarolar yig`ini"
    },
    {
      id: "379",
      district_id: "29",
      name: "Guliston ovul fuqarolar yig`ini"
    },
    {
      id: "380",
      district_id: "29",
      name: "Navoiy ovul fuqarolar yig`ini"
    },
    {
      id: "381",
      district_id: "29",
      name: "Ellikqal`a ovul fuqarolar yig`ini"
    },
    {
      id: "382",
      district_id: "29",
      name: "AqChako`l ovul fuqarolar yig`ini"
    },
    {
      id: "383",
      district_id: "29",
      name: "Sharq-Yulduzi ovul fuqarolar yig`ini"
    },
    {
      id: "384",
      district_id: "29",
      name: "Qizil-Qum ovul fuqarolar yig`ini"
    },
    {
      id: "385",
      district_id: "29",
      name: "Chuqurqoq MFY"
    },
    {
      id: "386",
      district_id: "29",
      name: "Oq oltin MFY"
    },
    {
      id: "387",
      district_id: "29",
      name: "Ixlos MFY"
    },
    {
      id: "388",
      district_id: "29",
      name: "Koinot MFY"
    },
    {
      id: "389",
      district_id: "29",
      name: "Dumanqal`a MFY"
    },
    {
      id: "390",
      district_id: "29",
      name: "Paxtachi MFY"
    },
    {
      id: "391",
      district_id: "29",
      name: "Cho`pon MFY"
    },
    {
      id: "392",
      district_id: "29",
      name: "Usmon-Yusupov MFY"
    },
    {
      id: "393",
      district_id: "29",
      name: "Chayka MFY"
    },
    {
      id: "394",
      district_id: "29",
      name: "Tuproqal`a MFY"
    },
    {
      id: "395",
      district_id: "29",
      name: "Bo`ston MFY"
    },
    {
      id: "396",
      district_id: "29",
      name: "Ibn-Sino MFY"
    },
    {
      id: "397",
      district_id: "29",
      name: "Abay MFY"
    },
    {
      id: "398",
      district_id: "29",
      name: "Toshkent MFY"
    },
    {
      id: "399",
      district_id: "29",
      name: "A.Navoiy MFY"
    },
    {
      id: "400",
      district_id: "29",
      name: "Qavatqal`a MFY"
    },
    {
      id: "401",
      district_id: "29",
      name: "SaxtiYon shaharcha fuqarolar yig`ini"
    },
    {
      id: "402",
      district_id: "30",
      name: "1 son MFY"
    },
    {
      id: "403",
      district_id: "30",
      name: "2 son MFY"
    },
    {
      id: "404",
      district_id: "30",
      name: "3 son MFY"
    },
    {
      id: "405",
      district_id: "30",
      name: "4 son MFY"
    },
    {
      id: "406",
      district_id: "30",
      name: "5 son MFY"
    },
    {
      id: "407",
      district_id: "30",
      name: "6 son MFY"
    },
    {
      id: "408",
      district_id: "30",
      name: "7 son MFY"
    },
    {
      id: "409",
      district_id: "30",
      name: "8 son MFY"
    },
    {
      id: "410",
      district_id: "30",
      name: "9 son MFY"
    },
    {
      id: "411",
      district_id: "30",
      name: "10 son MFY"
    },
    {
      id: "412",
      district_id: "30",
      name: "A.Bakirov MFY"
    },
    {
      id: "413",
      district_id: "30",
      name: "Al-Buxoriy MFY"
    },
    {
      id: "414",
      district_id: "30",
      name: "Andijon MFY"
    },
    {
      id: "415",
      district_id: "30",
      name: "Birlashgan MFY"
    },
    {
      id: "416",
      district_id: "30",
      name: "Birlik MFY"
    },
    {
      id: "417",
      district_id: "30",
      name: "Bobosaddin MFY"
    },
    {
      id: "418",
      district_id: "30",
      name: "Bobur MFY"
    },
    {
      id: "419",
      district_id: "30",
      name: "Bogishamol MFY"
    },
    {
      id: "420",
      district_id: "30",
      name: "Buston MFY"
    },
    {
      id: "421",
      district_id: "30",
      name: "Shurbulok MFY"
    },
    {
      id: "422",
      district_id: "30",
      name: "Gayrat MFY"
    },
    {
      id: "423",
      district_id: "30",
      name: "Guliston MFY"
    },
    {
      id: "424",
      district_id: "30",
      name: "Gumbaz MFY"
    },
    {
      id: "425",
      district_id: "30",
      name: "Dalvarzin MFY"
    },
    {
      id: "426",
      district_id: "30",
      name: "Dexkonobod MFY"
    },
    {
      id: "427",
      district_id: "30",
      name: "Dustlik MFY"
    },
    {
      id: "428",
      district_id: "30",
      name: "Yorboshi MFY"
    },
    {
      id: "429",
      district_id: "30",
      name: "Jumabozor MFY"
    },
    {
      id: "430",
      district_id: "30",
      name: "Islomobod MFY"
    },
    {
      id: "431",
      district_id: "30",
      name: "Ittifok MFY"
    },
    {
      id: "432",
      district_id: "30",
      name: "Ishchilar MFY"
    },
    {
      id: "433",
      district_id: "30",
      name: "Kayragochtagi MFY"
    },
    {
      id: "434",
      district_id: "30",
      name: "Kalandarxona MFY"
    },
    {
      id: "435",
      district_id: "30",
      name: "Kengash MFY"
    },
    {
      id: "436",
      district_id: "30",
      name: "Madaniyat MFY"
    },
    {
      id: "437",
      district_id: "30",
      name: "Maydonbozor MFY"
    },
    {
      id: "438",
      district_id: "30",
      name: "Maorif MFY"
    },
    {
      id: "439",
      district_id: "30",
      name: "Maъrifat MFY"
    },
    {
      id: "440",
      district_id: "30",
      name: "Mexnat MFY"
    },
    {
      id: "441",
      district_id: "30",
      name: "Mirpustin MFY"
    },
    {
      id: "442",
      district_id: "30",
      name: "Mustakillik MFY"
    },
    {
      id: "443",
      district_id: "30",
      name: "M. Aliboy MFY"
    },
    {
      id: "444",
      district_id: "30",
      name: "Navruz MFY"
    },
    {
      id: "445",
      district_id: "30",
      name: "Namuna MFY"
    },
    {
      id: "446",
      district_id: "30",
      name: "Obod MFY"
    },
    {
      id: "447",
      district_id: "30",
      name: "Ozodlik MFY"
    },
    {
      id: "448",
      district_id: "30",
      name: "Oxunboboev MFY"
    },
    {
      id: "449",
      district_id: "30",
      name: "Paxtakor MFY"
    },
    {
      id: "450",
      district_id: "30",
      name: "Pistamozor MFY"
    },
    {
      id: "451",
      district_id: "30",
      name: "Sanoat MFY"
    },
    {
      id: "452",
      district_id: "30",
      name: "Sa`diy MFY"
    },
    {
      id: "453",
      district_id: "30",
      name: "Soy MFY"
    },
    {
      id: "454",
      district_id: "30",
      name: "Sulton Jura MFY"
    },
    {
      id: "455",
      district_id: "30",
      name: "Taxtakuprik MFY"
    },
    {
      id: "456",
      district_id: "30",
      name: "Tojik MFY"
    },
    {
      id: "457",
      district_id: "30",
      name: "Tukkizarik MFY"
    },
    {
      id: "458",
      district_id: "30",
      name: "Uzbekiston MFY"
    },
    {
      id: "459",
      district_id: "30",
      name: "Uzgarish MFY"
    },
    {
      id: "460",
      district_id: "30",
      name: "Uygurobod MFY"
    },
    {
      id: "461",
      district_id: "30",
      name: "Farobiy MFY"
    },
    {
      id: "462",
      district_id: "30",
      name: "X.Kodirov MFY"
    },
    {
      id: "463",
      district_id: "30",
      name: "Xabibiy MFY"
    },
    {
      id: "464",
      district_id: "30",
      name: "Xakikat MFY"
    },
    {
      id: "465",
      district_id: "30",
      name: "Xursandlik MFY"
    },
    {
      id: "466",
      district_id: "30",
      name: "Xutanarik MFY"
    },
    {
      id: "467",
      district_id: "30",
      name: "Cho`lpon 100 yilligi MFY"
    },
    {
      id: "468",
      district_id: "30",
      name: "Shifokor MFY"
    },
    {
      id: "469",
      district_id: "30",
      name: "Shodlik MFY"
    },
    {
      id: "470",
      district_id: "30",
      name: "Erkin MFY"
    },
    {
      id: "471",
      district_id: "30",
      name: "Yangi Turmush MFY"
    },
    {
      id: "472",
      district_id: "30",
      name: "Yangi Xayot MFY"
    },
    {
      id: "473",
      district_id: "30",
      name: "Yaxshi MFY"
    },
    {
      id: "474",
      district_id: "30",
      name: "X. Axmedov MFY"
    },
    {
      id: "475",
      district_id: "30",
      name: "Buyuk Turon MFY"
    },
    {
      id: "476",
      district_id: "31",
      name: "Oyjamol MFY"
    },
    {
      id: "477",
      district_id: "31",
      name: "Daryobo`yi MFY"
    },
    {
      id: "478",
      district_id: "31",
      name: "Sanoat MFY"
    },
    {
      id: "479",
      district_id: "31",
      name: "BFK-Baxt MFY"
    },
    {
      id: "480",
      district_id: "31",
      name: "Kuyganyor SHFY"
    },
    {
      id: "481",
      district_id: "31",
      name: "Istiqlol MFY"
    },
    {
      id: "482",
      district_id: "31",
      name: "No`xatak MFY"
    },
    {
      id: "483",
      district_id: "31",
      name: "Qo`shariq MFY"
    },
    {
      id: "484",
      district_id: "31",
      name: "M.Soliev MFY"
    },
    {
      id: "485",
      district_id: "31",
      name: "Tolmozor MFY"
    },
    {
      id: "486",
      district_id: "31",
      name: "Nayman MFY"
    },
    {
      id: "487",
      district_id: "31",
      name: "Poloson MFY"
    },
    {
      id: "488",
      district_id: "31",
      name: "Mirobod MFY"
    },
    {
      id: "489",
      district_id: "31",
      name: "Xo`ja tojik MFY"
    },
    {
      id: "490",
      district_id: "31",
      name: "Oqyor QFY"
    },
    {
      id: "491",
      district_id: "31",
      name: "Orol MFY"
    },
    {
      id: "492",
      district_id: "31",
      name: "Guliston MFY"
    },
    {
      id: "493",
      district_id: "31",
      name: "Maorif MFY"
    },
    {
      id: "494",
      district_id: "31",
      name: "Orol QFY"
    },
    {
      id: "495",
      district_id: "31",
      name: "Pistamozor MFY"
    },
    {
      id: "496",
      district_id: "31",
      name: "Bo`riboy MFY"
    },
    {
      id: "497",
      district_id: "31",
      name: "Gumbaz MFY"
    },
    {
      id: "498",
      district_id: "31",
      name: "Zangibobo MFY"
    },
    {
      id: "499",
      district_id: "31",
      name: "Qurama MFY"
    },
    {
      id: "500",
      district_id: "31",
      name: "Og`ullik MFY"
    },
    {
      id: "501",
      district_id: "31",
      name: "Darxon MFY"
    },
    {
      id: "502",
      district_id: "31",
      name: "Chem MFY"
    },
    {
      id: "503",
      district_id: "31",
      name: "Madraximxoji MFY"
    },
    {
      id: "504",
      district_id: "31",
      name: "Abduraxmonmingboshi MFY"
    },
    {
      id: "505",
      district_id: "31",
      name: "Qum ko`chasi MFY"
    },
    {
      id: "506",
      district_id: "31",
      name: "Qoratut MFY"
    },
    {
      id: "507",
      district_id: "31",
      name: "Xokan QFY"
    },
    {
      id: "508",
      district_id: "31",
      name: "Ayrilish MFY"
    },
    {
      id: "509",
      district_id: "31",
      name: "Damariq MFY"
    },
    {
      id: "510",
      district_id: "31",
      name: "Beshbo`ynoq MFY"
    },
    {
      id: "511",
      district_id: "31",
      name: "Ekin- tikin MFY"
    },
    {
      id: "512",
      district_id: "31",
      name: "Guliston MFY"
    },
    {
      id: "513",
      district_id: "31",
      name: "Chorbog` MFY"
    },
    {
      id: "514",
      district_id: "31",
      name: "Yorboshi QFY"
    },
    {
      id: "515",
      district_id: "31",
      name: "Mart MFY"
    },
    {
      id: "516",
      district_id: "31",
      name: "Mustaqillik MFY"
    },
    {
      id: "517",
      district_id: "31",
      name: "Navro`z MFY"
    },
    {
      id: "518",
      district_id: "31",
      name: "Rovvot MFY"
    },
    {
      id: "519",
      district_id: "31",
      name: "Istiqlol MFY"
    },
    {
      id: "520",
      district_id: "31",
      name: "Maorif MFY"
    },
    {
      id: "521",
      district_id: "31",
      name: "Dexqon MFY"
    },
    {
      id: "522",
      district_id: "31",
      name: "Namuna MFY"
    },
    {
      id: "523",
      district_id: "31",
      name: "To`pabjuvoz MFY"
    },
    {
      id: "524",
      district_id: "31",
      name: "Bo`taqora QFY"
    },
    {
      id: "525",
      district_id: "31",
      name: "Do`stlik MFY"
    },
    {
      id: "526",
      district_id: "31",
      name: "Toshloq MFY"
    },
    {
      id: "527",
      district_id: "31",
      name: "Terak tagi MFY"
    },
    {
      id: "528",
      district_id: "31",
      name: "J.Saidov MFY"
    },
    {
      id: "529",
      district_id: "31",
      name: "Jaxarmasjid MFY"
    },
    {
      id: "530",
      district_id: "31",
      name: "Mingo`rik MFY"
    },
    {
      id: "531",
      district_id: "31",
      name: "Rovvot MFY"
    },
    {
      id: "532",
      district_id: "31",
      name: "Qo`nji QFY"
    },
    {
      id: "533",
      district_id: "31",
      name: "O`rikzor MFY"
    },
    {
      id: "534",
      district_id: "31",
      name: "Islomobod MFY"
    },
    {
      id: "535",
      district_id: "31",
      name: "Yangi to`lqin MFY"
    },
    {
      id: "536",
      district_id: "31",
      name: "Jevachi MFY"
    },
    {
      id: "537",
      district_id: "31",
      name: "Guzar MFY"
    },
    {
      id: "538",
      district_id: "31",
      name: "Yu.Mamajonov MFY"
    },
    {
      id: "539",
      district_id: "31",
      name: "Teraktagi MFY"
    },
    {
      id: "540",
      district_id: "31",
      name: "Afg`on MFY"
    },
    {
      id: "541",
      district_id: "31",
      name: "Joxonobod MFY"
    },
    {
      id: "542",
      district_id: "31",
      name: "Xortum QFY"
    },
    {
      id: "543",
      district_id: "31",
      name: "Yangiobod MFY"
    },
    {
      id: "544",
      district_id: "31",
      name: "Gulobod MFY"
    },
    {
      id: "545",
      district_id: "31",
      name: "Qo`qonlik MFY"
    },
    {
      id: "546",
      district_id: "31",
      name: "Bobog`ozi MFY"
    },
    {
      id: "547",
      district_id: "31",
      name: "Aylanpa MFY"
    },
    {
      id: "548",
      district_id: "31",
      name: "Do`dir MFY"
    },
    {
      id: "549",
      district_id: "31",
      name: "Cho`ngbog`iCh MFY"
    },
    {
      id: "550",
      district_id: "31",
      name: "Chavkandaryo MFY"
    },
    {
      id: "551",
      district_id: "31",
      name: "Bekobod MFY"
    },
    {
      id: "552",
      district_id: "31",
      name: "Qoraqolpoq MFY"
    },
    {
      id: "553",
      district_id: "31",
      name: "Nayman QFY"
    },
    {
      id: "554",
      district_id: "31",
      name: "Kengash MFY"
    },
    {
      id: "555",
      district_id: "31",
      name: "Saddatagi MFY"
    },
    {
      id: "556",
      district_id: "31",
      name: "Guliston MFY"
    },
    {
      id: "557",
      district_id: "31",
      name: "Xaqiqat MFY"
    },
    {
      id: "558",
      district_id: "31",
      name: "Otchopar MFY"
    },
    {
      id: "559",
      district_id: "31",
      name: "Do`ng qishloq MFY"
    },
    {
      id: "560",
      district_id: "31",
      name: "Kattaguzar MFY"
    },
    {
      id: "561",
      district_id: "31",
      name: "Sharq Yulduzi MFY"
    },
    {
      id: "562",
      district_id: "31",
      name: "Chilon MFY"
    },
    {
      id: "563",
      district_id: "31",
      name: "Xrabek QFY"
    },
    {
      id: "564",
      district_id: "32",
      name: "Zarbdor KFY"
    },
    {
      id: "565",
      district_id: "32",
      name: "Saidobod MFY"
    },
    {
      id: "566",
      district_id: "32",
      name: "Neъmatobod MFY"
    },
    {
      id: "567",
      district_id: "32",
      name: "Ergashobod MFY"
    },
    {
      id: "568",
      district_id: "32",
      name: "Dung MFY"
    },
    {
      id: "569",
      district_id: "32",
      name: "Yangisor MFY"
    },
    {
      id: "570",
      district_id: "32",
      name: "Fayziobod MFY"
    },
    {
      id: "571",
      district_id: "32",
      name: "Ilgor KFY"
    },
    {
      id: "572",
      district_id: "32",
      name: "Kashkar MFY"
    },
    {
      id: "573",
      district_id: "32",
      name: "Olakanot MFY"
    },
    {
      id: "574",
      district_id: "32",
      name: "Zankan MFY"
    },
    {
      id: "575",
      district_id: "32",
      name: "Axtachi MFY"
    },
    {
      id: "576",
      district_id: "32",
      name: "Devatagi MFY"
    },
    {
      id: "577",
      district_id: "32",
      name: "Korakiy MFY"
    },
    {
      id: "578",
      district_id: "32",
      name: "Otish MFY"
    },
    {
      id: "579",
      district_id: "32",
      name: "Obod MFY"
    },
    {
      id: "580",
      district_id: "32",
      name: "Kadim KFY"
    },
    {
      id: "581",
      district_id: "32",
      name: "Tajriba MFY"
    },
    {
      id: "582",
      district_id: "32",
      name: "Labgardon MFY"
    },
    {
      id: "583",
      district_id: "32",
      name: "Kovok tupi MFY"
    },
    {
      id: "584",
      district_id: "32",
      name: "Dasturxonchi MFY"
    },
    {
      id: "585",
      district_id: "32",
      name: "Uchtosh MFY"
    },
    {
      id: "586",
      district_id: "32",
      name: "Kadim MFY"
    },
    {
      id: "587",
      district_id: "32",
      name: "Kipchok MFY"
    },
    {
      id: "588",
      district_id: "32",
      name: "Shurkishlok MFY"
    },
    {
      id: "589",
      district_id: "32",
      name: "Mustaxkam KFY"
    },
    {
      id: "590",
      district_id: "32",
      name: "Okbuyra MFY"
    },
    {
      id: "591",
      district_id: "32",
      name: "Namuna Buston MFY"
    },
    {
      id: "592",
      district_id: "32",
      name: "Elas kipchak MFY"
    },
    {
      id: "593",
      district_id: "32",
      name: "Xonaka MFY"
    },
    {
      id: "594",
      district_id: "32",
      name: "Mirzaobod MFY"
    },
    {
      id: "595",
      district_id: "32",
      name: "Katta tojik MFY"
    },
    {
      id: "596",
      district_id: "32",
      name: "Uzbekiston KFY"
    },
    {
      id: "597",
      district_id: "32",
      name: "Toshtepa MFY"
    },
    {
      id: "598",
      district_id: "32",
      name: "Durman MFY"
    },
    {
      id: "599",
      district_id: "32",
      name: "Argin MFY"
    },
    {
      id: "600",
      district_id: "32",
      name: "Tuvadak MFY"
    },
    {
      id: "601",
      district_id: "32",
      name: "T.Aliev MFY"
    },
    {
      id: "602",
      district_id: "32",
      name: "Navkan MFY"
    },
    {
      id: "603",
      district_id: "32",
      name: "Kujgan KFY"
    },
    {
      id: "604",
      district_id: "32",
      name: "Navoiy MFY"
    },
    {
      id: "605",
      district_id: "32",
      name: "Chuntak MFY"
    },
    {
      id: "606",
      district_id: "32",
      name: "Chek MFY"
    },
    {
      id: "607",
      district_id: "32",
      name: "Kujgan MFY"
    },
    {
      id: "608",
      district_id: "32",
      name: "Ozod MFY"
    },
    {
      id: "609",
      district_id: "32",
      name: "Markayuz MFY"
    },
    {
      id: "610",
      district_id: "32",
      name: "Ungut MFY"
    },
    {
      id: "611",
      district_id: "32",
      name: "Kayragoch MFY"
    },
    {
      id: "612",
      district_id: "32",
      name: "Kungirot MFY"
    },
    {
      id: "613",
      district_id: "32",
      name: "Buzarik MFY"
    },
    {
      id: "614",
      district_id: "32",
      name: "Yukori buz MFY"
    },
    {
      id: "615",
      district_id: "32",
      name: "Koratepa KFY"
    },
    {
      id: "616",
      district_id: "32",
      name: "Kurama MFY"
    },
    {
      id: "617",
      district_id: "32",
      name: "Gancha yuz"
    },
    {
      id: "618",
      district_id: "32",
      name: "Koratepa MFY"
    },
    {
      id: "619",
      district_id: "32",
      name: "Bexabar MFY"
    },
    {
      id: "620",
      district_id: "32",
      name: "Katagon MFY"
    },
    {
      id: "621",
      district_id: "32",
      name: "Bozorboshi MFY"
    },
    {
      id: "622",
      district_id: "32",
      name: "Niyozbotir KFY"
    },
    {
      id: "623",
      district_id: "32",
      name: "Niyozbotir MFY"
    },
    {
      id: "624",
      district_id: "32",
      name: "Baxrin MFY"
    },
    {
      id: "625",
      district_id: "32",
      name: "YangiObod MFY"
    },
    {
      id: "626",
      district_id: "32",
      name: "Mexnatobod MFY"
    },
    {
      id: "627",
      district_id: "32",
      name: "Asaka MFY"
    },
    {
      id: "628",
      district_id: "32",
      name: "Ittifoq MFY"
    },
    {
      id: "629",
      district_id: "32",
      name: "Amir Temur MFY"
    },
    {
      id: "630",
      district_id: "32",
      name: "Baynalminal MFY"
    },
    {
      id: "631",
      district_id: "32",
      name: "Bobur MFY"
    },
    {
      id: "632",
      district_id: "32",
      name: "Birlik MFY"
    },
    {
      id: "633",
      district_id: "32",
      name: "Do`stlik MFY"
    },
    {
      id: "634",
      district_id: "32",
      name: "Xamdo`stlik MFY"
    },
    {
      id: "635",
      district_id: "32",
      name: "Nurafshon MFY"
    },
    {
      id: "636",
      district_id: "32",
      name: "Qadiryat MFY"
    },
    {
      id: "637",
      district_id: "32",
      name: "Istiqlol MFY"
    },
    {
      id: "638",
      district_id: "32",
      name: "Navoiy MFY"
    },
    {
      id: "639",
      district_id: "32",
      name: "Muqumiy MFY"
    },
    {
      id: "640",
      district_id: "32",
      name: "T.Matyoqubov MFY"
    },
    {
      id: "641",
      district_id: "32",
      name: "Shodlik MFY"
    },
    {
      id: "642",
      district_id: "32",
      name: "Ibn-Sino MFY"
    },
    {
      id: "643",
      district_id: "32",
      name: "O`zbekiston MFY"
    },
    {
      id: "644",
      district_id: "32",
      name: "Ulug`bek MFY"
    },
    {
      id: "645",
      district_id: "33",
      name: "Siza QFY"
    },
    {
      id: "646",
      district_id: "33",
      name: "Oq-tepa MFY"
    },
    {
      id: "647",
      district_id: "33",
      name: "Siza MFY"
    },
    {
      id: "648",
      district_id: "33",
      name: "Yangi qishloq MFY"
    },
    {
      id: "649",
      district_id: "33",
      name: "Mallachek MFY"
    },
    {
      id: "650",
      district_id: "33",
      name: "Nasriddinobod MFY"
    },
    {
      id: "651",
      district_id: "33",
      name: "Eskihaqulobod QFY"
    },
    {
      id: "652",
      district_id: "33",
      name: "Еttiqashqa MFY"
    },
    {
      id: "653",
      district_id: "33",
      name: "O`lmas MFY"
    },
    {
      id: "654",
      district_id: "33",
      name: "Eskihaqulobod MFY"
    },
    {
      id: "655",
      district_id: "33",
      name: "Dog`iston MFY"
    },
    {
      id: "656",
      district_id: "33",
      name: "Yangi hayot MFY"
    },
    {
      id: "657",
      district_id: "33",
      name: "Mustaqillik MFY"
    },
    {
      id: "658",
      district_id: "33",
      name: "Tulkiobod MFY"
    },
    {
      id: "659",
      district_id: "33",
      name: "Tovuldi MFY"
    },
    {
      id: "660",
      district_id: "33",
      name: "Yangiqishloq MFY"
    },
    {
      id: "661",
      district_id: "33",
      name: "Xo`jaobod QFY"
    },
    {
      id: "662",
      district_id: "33",
      name: "Madaminov MFY"
    },
    {
      id: "663",
      district_id: "33",
      name: "Guzar MFY"
    },
    {
      id: "664",
      district_id: "33",
      name: "Qahramon MFY"
    },
    {
      id: "665",
      district_id: "33",
      name: "Buloqboshi MFY"
    },
    {
      id: "666",
      district_id: "33",
      name: "Qo`rg`oncha MFY"
    },
    {
      id: "667",
      district_id: "33",
      name: "Fayzobod MFY"
    },
    {
      id: "668",
      district_id: "33",
      name: "Aъlam MFY"
    },
    {
      id: "669",
      district_id: "33",
      name: "Oxunboboev QFY"
    },
    {
      id: "670",
      district_id: "33",
      name: "Omonariq MFY"
    },
    {
      id: "671",
      district_id: "33",
      name: "Chinobod MFY"
    },
    {
      id: "672",
      district_id: "33",
      name: "Sho`r MFY"
    },
    {
      id: "673",
      district_id: "33",
      name: "Tumor MFY"
    },
    {
      id: "674",
      district_id: "33",
      name: "Botir MFY"
    },
    {
      id: "675",
      district_id: "33",
      name: "Baliqchi MFY"
    },
    {
      id: "676",
      district_id: "33",
      name: "Zaxkash MFY"
    },
    {
      id: "677",
      district_id: "33",
      name: "To`da MFY"
    },
    {
      id: "678",
      district_id: "33",
      name: "Qiyali MFY"
    },
    {
      id: "679",
      district_id: "33",
      name: "Qumtepa MFY"
    },
    {
      id: "680",
      district_id: "33",
      name: "Sarnavul MFY"
    },
    {
      id: "681",
      district_id: "33",
      name: "Qo`rg`oncha MFY"
    },
    {
      id: "682",
      district_id: "33",
      name: "Olimbek QFY"
    },
    {
      id: "683",
      district_id: "33",
      name: "Olimbek MFY"
    },
    {
      id: "684",
      district_id: "33",
      name: "Do`stlik MFY"
    },
    {
      id: "685",
      district_id: "33",
      name: "Fayzaobod MFY"
    },
    {
      id: "686",
      district_id: "33",
      name: "Polvonko`l MFY"
    },
    {
      id: "687",
      district_id: "33",
      name: "Do`ngsaroy MFY"
    },
    {
      id: "688",
      district_id: "33",
      name: "Eshonchek MFY"
    },
    {
      id: "689",
      district_id: "33",
      name: "Zulfiqor MFY"
    },
    {
      id: "690",
      district_id: "33",
      name: "Xalfachek MFY"
    },
    {
      id: "691",
      district_id: "33",
      name: "O`rmonbek QFY"
    },
    {
      id: "692",
      district_id: "33",
      name: "O`rmonbek MFY"
    },
    {
      id: "693",
      district_id: "33",
      name: "Bo`z MFY"
    },
    {
      id: "694",
      district_id: "33",
      name: "Xolmurod MFY"
    },
    {
      id: "695",
      district_id: "33",
      name: "Buston QFY"
    },
    {
      id: "696",
      district_id: "33",
      name: "Alchazor MFY"
    },
    {
      id: "697",
      district_id: "33",
      name: "Bo`ston MFY"
    },
    {
      id: "698",
      district_id: "33",
      name: "Jartepa MFY"
    },
    {
      id: "699",
      district_id: "33",
      name: "Eshonqishloq MFY"
    },
    {
      id: "700",
      district_id: "33",
      name: "Aralxon MFY"
    },
    {
      id: "701",
      district_id: "33",
      name: "Guliston QFY"
    },
    {
      id: "702",
      district_id: "33",
      name: "Ko`lbo`yi MFY"
    },
    {
      id: "703",
      district_id: "33",
      name: "Guliston MFY"
    },
    {
      id: "704",
      district_id: "33",
      name: "Oqqo`rg`on MFY"
    },
    {
      id: "705",
      district_id: "33",
      name: "Sheralichek MFY"
    },
    {
      id: "706",
      district_id: "33",
      name: "Mirzaboshichek MFY"
    },
    {
      id: "707",
      district_id: "33",
      name: "Balikchi QFY"
    },
    {
      id: "708",
      district_id: "33",
      name: "Qo`rg`oncha MFY"
    },
    {
      id: "709",
      district_id: "33",
      name: "O`rtaqo`rg`on MFY"
    },
    {
      id: "710",
      district_id: "33",
      name: "Go`rovon MFY"
    },
    {
      id: "711",
      district_id: "33",
      name: "Yakkatol MFY"
    },
    {
      id: "712",
      district_id: "33",
      name: "Baliqchi MFY"
    },
    {
      id: "713",
      district_id: "33",
      name: "Kattabuloq MFY"
    },
    {
      id: "714",
      district_id: "33",
      name: "Markaz MFY"
    },
    {
      id: "715",
      district_id: "33",
      name: "Islomobod MFY"
    },
    {
      id: "716",
      district_id: "33",
      name: "Oqqo`rg`on MFY"
    },
    {
      id: "717",
      district_id: "33",
      name: "Ko`l MFY"
    },
    {
      id: "718",
      district_id: "34",
      name: "Bulokboshi QFY"
    },
    {
      id: "719",
      district_id: "34",
      name: "Toshkechik MFY"
    },
    {
      id: "720",
      district_id: "34",
      name: "Guliston MFY"
    },
    {
      id: "721",
      district_id: "34",
      name: "Ittifok MFY"
    },
    {
      id: "722",
      district_id: "34",
      name: "M.Ismoiliy MFY"
    },
    {
      id: "723",
      district_id: "34",
      name: "T.Raximov MFY"
    },
    {
      id: "724",
      district_id: "34",
      name: "Kumguzar MFY"
    },
    {
      id: "725",
      district_id: "34",
      name: "Chakar MFY"
    },
    {
      id: "726",
      district_id: "34",
      name: "Bulokboshi MFY"
    },
    {
      id: "727",
      district_id: "34",
      name: "Mayarik QFY"
    },
    {
      id: "728",
      district_id: "34",
      name: "Andijon MFY"
    },
    {
      id: "729",
      district_id: "34",
      name: "Boymaxalla MFY"
    },
    {
      id: "730",
      district_id: "34",
      name: "Uchkucha MFY"
    },
    {
      id: "731",
      district_id: "34",
      name: "Eshonxujaev MFY"
    },
    {
      id: "732",
      district_id: "34",
      name: "Dulana MFY"
    },
    {
      id: "733",
      district_id: "34",
      name: "Madraximova MFY"
    },
    {
      id: "734",
      district_id: "34",
      name: "Mayarik MFY"
    },
    {
      id: "735",
      district_id: "34",
      name: "Nayman QFY"
    },
    {
      id: "736",
      district_id: "34",
      name: "Nayman MFY"
    },
    {
      id: "737",
      district_id: "34",
      name: "Shark yulduzi MFY"
    },
    {
      id: "738",
      district_id: "34",
      name: "Baynalminal MFY"
    },
    {
      id: "739",
      district_id: "34",
      name: "Oxunboboev MFY"
    },
    {
      id: "740",
      district_id: "34",
      name: "Kashkar MFY"
    },
    {
      id: "741",
      district_id: "34",
      name: "Sarvontepa MFY"
    },
    {
      id: "742",
      district_id: "34",
      name: "Shirmonbulok QFY"
    },
    {
      id: "743",
      district_id: "34",
      name: "Shirmonbulok MFY"
    },
    {
      id: "744",
      district_id: "34",
      name: "Kakir MFY"
    },
    {
      id: "745",
      district_id: "34",
      name: "Navoiy MFY"
    },
    {
      id: "746",
      district_id: "34",
      name: "Tinchlik MFY"
    },
    {
      id: "747",
      district_id: "34",
      name: "Zargaldok MFY"
    },
    {
      id: "748",
      district_id: "34",
      name: "Uchtepa MFY"
    },
    {
      id: "749",
      district_id: "34",
      name: "Kulla QFY"
    },
    {
      id: "750",
      district_id: "34",
      name: "Raish MFY"
    },
    {
      id: "751",
      district_id: "34",
      name: "Kiziluy MFY"
    },
    {
      id: "752",
      district_id: "34",
      name: "Kuprikboshi MFY"
    },
    {
      id: "753",
      district_id: "34",
      name: "Bozorboshi MFY"
    },
    {
      id: "754",
      district_id: "34",
      name: "S.Otajonov MFY"
    },
    {
      id: "755",
      district_id: "34",
      name: "Yangi arik MFY"
    },
    {
      id: "756",
      district_id: "34",
      name: "Andijon QFY"
    },
    {
      id: "757",
      district_id: "34",
      name: "Neftchilar MFY"
    },
    {
      id: "758",
      district_id: "34",
      name: "Ittifok MFY"
    },
    {
      id: "759",
      district_id: "34",
      name: "Sanoat MFY"
    },
    {
      id: "760",
      district_id: "34",
      name: "Balandchek MFY"
    },
    {
      id: "761",
      district_id: "35",
      name: "Oxunboboev MFY"
    },
    {
      id: "762",
      district_id: "35",
      name: "A.Yo`lchiev MFY"
    },
    {
      id: "763",
      district_id: "35",
      name: "Nasirdinbek MFY"
    },
    {
      id: "764",
      district_id: "35",
      name: "Guzar MFY"
    },
    {
      id: "765",
      district_id: "35",
      name: "Bo`ston MFY"
    },
    {
      id: "766",
      district_id: "35",
      name: "O`rda to`p MFY"
    },
    {
      id: "767",
      district_id: "35",
      name: "Do`stlik MFY"
    },
    {
      id: "768",
      district_id: "35",
      name: "Axmadobod MFY"
    },
    {
      id: "769",
      district_id: "35",
      name: "Bo`z SHFY"
    },
    {
      id: "770",
      district_id: "35",
      name: "Dexqonobod MFY"
    },
    {
      id: "771",
      district_id: "35",
      name: "Maъrufobod MFY"
    },
    {
      id: "772",
      district_id: "35",
      name: "Mexnatobod MFY"
    },
    {
      id: "773",
      district_id: "35",
      name: "Xovos MFY"
    },
    {
      id: "774",
      district_id: "35",
      name: "Guliston MFY"
    },
    {
      id: "775",
      district_id: "35",
      name: "Xalqobod MFY"
    },
    {
      id: "776",
      district_id: "35",
      name: "Xovos QFY"
    },
    {
      id: "777",
      district_id: "35",
      name: "Solimaxsum MFY"
    },
    {
      id: "778",
      district_id: "35",
      name: "Mustaqillik 15 yilligi MFY"
    },
    {
      id: "779",
      district_id: "35",
      name: "Xoldevonbek MFY"
    },
    {
      id: "780",
      district_id: "35",
      name: "Yangi qishloq MFY"
    },
    {
      id: "781",
      district_id: "35",
      name: "Yangi obod MFY"
    },
    {
      id: "782",
      district_id: "35",
      name: "Holdevonbek QFY"
    },
    {
      id: "783",
      district_id: "35",
      name: "M.Jalolov MFY"
    },
    {
      id: "784",
      district_id: "35",
      name: "Navro`z MFY"
    },
    {
      id: "785",
      district_id: "35",
      name: "Yangi hayot MFY"
    },
    {
      id: "786",
      district_id: "35",
      name: "Darmonqulota MFY"
    },
    {
      id: "787",
      district_id: "35",
      name: "Yangi turmush MFY"
    },
    {
      id: "788",
      district_id: "35",
      name: "Yakka tol MFY"
    },
    {
      id: "789",
      district_id: "35",
      name: "M.Jalolov QFY"
    },
    {
      id: "790",
      district_id: "36",
      name: "Navoiy MFY"
    },
    {
      id: "791",
      district_id: "36",
      name: "Yangichek MFY"
    },
    {
      id: "792",
      district_id: "36",
      name: "Namuna MFY"
    },
    {
      id: "793",
      district_id: "36",
      name: "Urokchi-tepa MFY"
    },
    {
      id: "794",
      district_id: "36",
      name: "Bozarboshi MFY"
    },
    {
      id: "795",
      district_id: "36",
      name: "Kadaksin MFY"
    },
    {
      id: "796",
      district_id: "36",
      name: "Guliston MFY"
    },
    {
      id: "797",
      district_id: "36",
      name: "Sufikishlok MFY"
    },
    {
      id: "798",
      district_id: "36",
      name: "Tuyalas MFY"
    },
    {
      id: "799",
      district_id: "36",
      name: "Boycheki MFY"
    },
    {
      id: "800",
      district_id: "36",
      name: "J.Olamushuk SHFY"
    },
    {
      id: "801",
      district_id: "36",
      name: "Birlashgan MFY"
    },
    {
      id: "802",
      district_id: "36",
      name: "Navoiy MFY"
    },
    {
      id: "803",
      district_id: "36",
      name: "Ittifok MFY"
    },
    {
      id: "804",
      district_id: "36",
      name: "Yorqishloq KFY"
    },
    {
      id: "805",
      district_id: "36",
      name: "Galaba MFY"
    },
    {
      id: "806",
      district_id: "36",
      name: "Yorkishlok MFY"
    },
    {
      id: "807",
      district_id: "36",
      name: "Kutlug MFY"
    },
    {
      id: "808",
      district_id: "36",
      name: "Kashkar MFY"
    },
    {
      id: "809",
      district_id: "36",
      name: "Toshxovuz MFY"
    },
    {
      id: "810",
      district_id: "36",
      name: "Yangikurpa MFY"
    },
    {
      id: "811",
      district_id: "36",
      name: "Beshtol KFY"
    },
    {
      id: "812",
      district_id: "36",
      name: "Kushtepa MFY"
    },
    {
      id: "813",
      district_id: "36",
      name: "Guliston MFY"
    },
    {
      id: "814",
      district_id: "36",
      name: "Beshtol MFY"
    },
    {
      id: "815",
      district_id: "36",
      name: "Xamza MFY"
    },
    {
      id: "816",
      district_id: "36",
      name: "Jalaquduq KFY"
    },
    {
      id: "817",
      district_id: "36",
      name: "Jalakuduk MFY"
    },
    {
      id: "818",
      district_id: "36",
      name: "Dungkishlok MFY"
    },
    {
      id: "819",
      district_id: "36",
      name: "Buston MFY"
    },
    {
      id: "820",
      district_id: "36",
      name: "Yangisor MFY"
    },
    {
      id: "821",
      district_id: "36",
      name: "Urgu MFY"
    },
    {
      id: "822",
      district_id: "36",
      name: "Koragul MFY"
    },
    {
      id: "823",
      district_id: "36",
      name: "Guliston KFY"
    },
    {
      id: "824",
      district_id: "36",
      name: "Gozichek MFY"
    },
    {
      id: "825",
      district_id: "36",
      name: "Beshkaram MFY"
    },
    {
      id: "826",
      district_id: "36",
      name: "Sharxonchek MFY"
    },
    {
      id: "827",
      district_id: "36",
      name: "Kesak MFY"
    },
    {
      id: "828",
      district_id: "36",
      name: "Xasankovok MFY"
    },
    {
      id: "829",
      district_id: "36",
      name: "Abdullabiy KFY"
    },
    {
      id: "830",
      district_id: "36",
      name: "Kalambek MFY"
    },
    {
      id: "831",
      district_id: "36",
      name: "Oxunboboev MFY"
    },
    {
      id: "832",
      district_id: "36",
      name: "Kutarma MFY"
    },
    {
      id: "833",
      district_id: "36",
      name: "Abdullabiy MFY"
    },
    {
      id: "834",
      district_id: "36",
      name: "Dustlik MFY"
    },
    {
      id: "835",
      district_id: "36",
      name: "Ibrat MFY"
    },
    {
      id: "836",
      district_id: "36",
      name: "Oyim KFY"
    },
    {
      id: "837",
      district_id: "36",
      name: "Kukalam MFY"
    },
    {
      id: "838",
      district_id: "36",
      name: "Uzbekiston MFY"
    },
    {
      id: "839",
      district_id: "36",
      name: "Toshlok MFY"
    },
    {
      id: "840",
      district_id: "36",
      name: "Buzrukxontura MFY"
    },
    {
      id: "841",
      district_id: "36",
      name: "Delvarzin MFY"
    },
    {
      id: "842",
      district_id: "36",
      name: "Olmazor MFY"
    },
    {
      id: "843",
      district_id: "36",
      name: "A.Raxmonov MFY"
    },
    {
      id: "844",
      district_id: "36",
      name: "Ittifok MFY"
    },
    {
      id: "845",
      district_id: "36",
      name: "Teshiktosh KFY"
    },
    {
      id: "846",
      district_id: "36",
      name: "Gayrat MFY"
    },
    {
      id: "847",
      district_id: "36",
      name: "Xakikat MFY"
    },
    {
      id: "848",
      district_id: "36",
      name: "Uzunkucha MFY"
    },
    {
      id: "849",
      district_id: "36",
      name: "Bolgariya MFY"
    },
    {
      id: "850",
      district_id: "36",
      name: "Dexkonobod MFY"
    },
    {
      id: "851",
      district_id: "36",
      name: "Kurtki MFY"
    },
    {
      id: "852",
      district_id: "36",
      name: "Qatortol KFY"
    },
    {
      id: "853",
      district_id: "36",
      name: "Korayontok MFY"
    },
    {
      id: "854",
      district_id: "36",
      name: "Kattapolvon MFY"
    },
    {
      id: "855",
      district_id: "36",
      name: "Akcha MFY"
    },
    {
      id: "856",
      district_id: "36",
      name: "Kapa MFY"
    },
    {
      id: "857",
      district_id: "36",
      name: "Xamzaobod MFY"
    },
    {
      id: "858",
      district_id: "36",
      name: "Kilichmozar MFY"
    },
    {
      id: "859",
      district_id: "36",
      name: "Turacheki MFY"
    },
    {
      id: "860",
      district_id: "36",
      name: "Dostonobod MFY"
    },
    {
      id: "861",
      district_id: "36",
      name: "Madaniyat MFY"
    },
    {
      id: "862",
      district_id: "37",
      name: "O.Masaidov MFY"
    },
    {
      id: "863",
      district_id: "37",
      name: "Oybek MFY"
    },
    {
      id: "864",
      district_id: "37",
      name: "Qashqarliq MFY"
    },
    {
      id: "865",
      district_id: "37",
      name: "T.Mamajonov MFY"
    },
    {
      id: "866",
      district_id: "37",
      name: "Oxunboboev MFY"
    },
    {
      id: "867",
      district_id: "37",
      name: "Amir Temur MFY"
    },
    {
      id: "868",
      district_id: "37",
      name: "M.Usmonov MFY"
    },
    {
      id: "869",
      district_id: "37",
      name: "A.Navoiy MFY"
    },
    {
      id: "870",
      district_id: "37",
      name: "U.Mansurov MFY"
    },
    {
      id: "871",
      district_id: "37",
      name: "M.To`xtaboev MFY"
    },
    {
      id: "872",
      district_id: "37",
      name: "Obod MFY"
    },
    {
      id: "873",
      district_id: "37",
      name: "Yuqori-Jonobod MFY"
    },
    {
      id: "874",
      district_id: "37",
      name: "Yangi–obod MFY"
    },
    {
      id: "875",
      district_id: "37",
      name: "Zarbdor MFY"
    },
    {
      id: "876",
      district_id: "37",
      name: "Daminboychek MFY"
    },
    {
      id: "877",
      district_id: "37",
      name: "Oq-oltin MFY"
    },
    {
      id: "878",
      district_id: "37",
      name: "Qo`shko`prik MFY"
    },
    {
      id: "879",
      district_id: "37",
      name: "Jonobod MFY"
    },
    {
      id: "880",
      district_id: "37",
      name: "Birlashgan MFY"
    },
    {
      id: "881",
      district_id: "37",
      name: "O`rtoqlar KFY"
    },
    {
      id: "882",
      district_id: "37",
      name: "Navro`zobod MFY"
    },
    {
      id: "883",
      district_id: "37",
      name: "Birlashgan MFY"
    },
    {
      id: "884",
      district_id: "37",
      name: "A.Jomiy MFY"
    },
    {
      id: "885",
      district_id: "37",
      name: "Tuyachi MFY"
    },
    {
      id: "886",
      district_id: "37",
      name: "Yangizamon MFY"
    },
    {
      id: "887",
      district_id: "37",
      name: "Bo`ston MFY"
    },
    {
      id: "888",
      district_id: "37",
      name: "Do`stlik MFY"
    },
    {
      id: "889",
      district_id: "37",
      name: "Yangizamon KFY"
    },
    {
      id: "890",
      district_id: "37",
      name: "Guliston MFY"
    },
    {
      id: "891",
      district_id: "37",
      name: "Qo`g`ay MFY"
    },
    {
      id: "892",
      district_id: "37",
      name: "Beshterak MFY"
    },
    {
      id: "893",
      district_id: "37",
      name: "Urganji MFY"
    },
    {
      id: "894",
      district_id: "37",
      name: "Kuygan-yor MFY"
    },
    {
      id: "895",
      district_id: "37",
      name: "O`rta-qishloq MFY"
    },
    {
      id: "896",
      district_id: "37",
      name: "Erkin KFY"
    },
    {
      id: "897",
      district_id: "37",
      name: "Gurkirov-1 MFY"
    },
    {
      id: "898",
      district_id: "37",
      name: "Gurkirov-2 MFY"
    },
    {
      id: "899",
      district_id: "37",
      name: "Toshkechik MFY"
    },
    {
      id: "900",
      district_id: "37",
      name: "Uzun-ko`chasi MFY"
    },
    {
      id: "901",
      district_id: "37",
      name: "Qum-ko`chasi MFY"
    },
    {
      id: "902",
      district_id: "37",
      name: "Beshmirza MFY"
    },
    {
      id: "903",
      district_id: "37",
      name: "Qora-yantoq MFY"
    },
    {
      id: "904",
      district_id: "37",
      name: "Yukori-Chuvama MFY"
    },
    {
      id: "905",
      district_id: "37",
      name: "Cho`rtanliq MFY"
    },
    {
      id: "906",
      district_id: "37",
      name: "Izboskan KFY"
    },
    {
      id: "907",
      district_id: "37",
      name: "Yuqori hosil MFY"
    },
    {
      id: "908",
      district_id: "37",
      name: "Moygir MFY"
    },
    {
      id: "909",
      district_id: "37",
      name: "Daryo-bo`yi MFY"
    },
    {
      id: "910",
      district_id: "37",
      name: "Sorboshi MFY"
    },
    {
      id: "911",
      district_id: "37",
      name: "Moygir KFY"
    },
    {
      id: "912",
      district_id: "37",
      name: "Botirobod MFY"
    },
    {
      id: "913",
      district_id: "37",
      name: "To`rtko`l MFY"
    },
    {
      id: "914",
      district_id: "37",
      name: "T.Shokirov MFY"
    },
    {
      id: "915",
      district_id: "37",
      name: "A.Ikromov MFY"
    },
    {
      id: "916",
      district_id: "37",
      name: "Guzar MFY"
    },
    {
      id: "917",
      district_id: "37",
      name: "Shermatobod KFY"
    },
    {
      id: "918",
      district_id: "37",
      name: "To`raobod MFY"
    },
    {
      id: "919",
      district_id: "37",
      name: "Yakkatut MFY"
    },
    {
      id: "920",
      district_id: "37",
      name: "Y.Po`latov MFY"
    },
    {
      id: "921",
      district_id: "37",
      name: "Yakkatut KFY"
    },
    {
      id: "922",
      district_id: "37",
      name: "Boy mahalla MFY"
    },
    {
      id: "923",
      district_id: "37",
      name: "Urganji MFY"
    },
    {
      id: "924",
      district_id: "37",
      name: "Elatan MFY"
    },
    {
      id: "925",
      district_id: "37",
      name: "Yangi-qishloq MFY"
    },
    {
      id: "926",
      district_id: "37",
      name: "Yangikishlok KFY"
    },
    {
      id: "927",
      district_id: "37",
      name: "Chek MFY"
    },
    {
      id: "928",
      district_id: "37",
      name: "Rovot MFY"
    },
    {
      id: "929",
      district_id: "37",
      name: "Navjur MFY"
    },
    {
      id: "930",
      district_id: "37",
      name: "Xaqqulobod MFY"
    },
    {
      id: "931",
      district_id: "37",
      name: "Yuqori MFY"
    },
    {
      id: "932",
      district_id: "37",
      name: "Namyman QFY"
    },
    {
      id: "933",
      district_id: "38",
      name: "A.Navoiy MFY"
    },
    {
      id: "934",
      district_id: "38",
      name: "A.Temur MFY"
    },
    {
      id: "935",
      district_id: "38",
      name: "A.Yassaviy MFY"
    },
    {
      id: "936",
      district_id: "38",
      name: "B.Ahmedov MFY"
    },
    {
      id: "937",
      district_id: "38",
      name: "Bo`rilik MFY"
    },
    {
      id: "938",
      district_id: "38",
      name: "Z.M.Bobur MFY"
    },
    {
      id: "939",
      district_id: "38",
      name: "Paxtachi MFY"
    },
    {
      id: "940",
      district_id: "38",
      name: "M.Ulug`bek MFY"
    },
    {
      id: "941",
      district_id: "38",
      name: "Mustaqillik MFY"
    },
    {
      id: "942",
      district_id: "38",
      name: "Mustaqillikning 15 y. MFY"
    },
    {
      id: "943",
      district_id: "38",
      name: "Uch tegirmon MFY"
    },
    {
      id: "944",
      district_id: "39",
      name: "A.Jomiy MFY"
    },
    {
      id: "945",
      district_id: "39",
      name: "A.Navoiy MFY"
    },
    {
      id: "946",
      district_id: "39",
      name: "Guliston MFY"
    },
    {
      id: "947",
      district_id: "39",
      name: "Ibn Sino MFY"
    },
    {
      id: "948",
      district_id: "39",
      name: "Qo`rg`ontepa MFY"
    },
    {
      id: "949",
      district_id: "39",
      name: "Mustaqillik MFY"
    },
    {
      id: "950",
      district_id: "39",
      name: "Navro`z MFY"
    },
    {
      id: "951",
      district_id: "39",
      name: "S.Raximov MFY"
    },
    {
      id: "952",
      district_id: "39",
      name: "Savay MFY"
    },
    {
      id: "953",
      district_id: "39",
      name: "Toshqo`rg`on MFY"
    },
    {
      id: "954",
      district_id: "39",
      name: "U.YusupovMFY"
    },
    {
      id: "955",
      district_id: "39",
      name: "Xon ko`chasi MFY"
    },
    {
      id: "956",
      district_id: "39",
      name: "Shaxrixonsoy MFY"
    },
    {
      id: "957",
      district_id: "39",
      name: "EshonqishloqMFY"
    },
    {
      id: "958",
      district_id: "39",
      name: "Yangi hayotMFY"
    },
    {
      id: "959",
      district_id: "39",
      name: "Qo`rg`ontepa QFY"
    },
    {
      id: "960",
      district_id: "39",
      name: "Bobur MFY"
    },
    {
      id: "961",
      district_id: "39",
      name: "Bozorboshi MFY"
    },
    {
      id: "962",
      district_id: "39",
      name: "G`ayrat MFY"
    },
    {
      id: "963",
      district_id: "39",
      name: "Dexqonobod MFY"
    },
    {
      id: "964",
      district_id: "39",
      name: "Ijtimoyat MFY"
    },
    {
      id: "965",
      district_id: "39",
      name: "Qo`tkar MFY"
    },
    {
      id: "966",
      district_id: "39",
      name: "Qo`shtepa MFY"
    },
    {
      id: "967",
      district_id: "39",
      name: "Maъmurobod MFY"
    },
    {
      id: "968",
      district_id: "39",
      name: "T.Sodiqov MFY"
    },
    {
      id: "969",
      district_id: "39",
      name: "Toshloq MFY"
    },
    {
      id: "970",
      district_id: "39",
      name: "Uchqun MFY"
    },
    {
      id: "971",
      district_id: "39",
      name: "Ho`jatepa MFY"
    },
    {
      id: "972",
      district_id: "39",
      name: "Sultonobod QFY"
    },
    {
      id: "973",
      district_id: "39",
      name: "Ittifoq MFY"
    },
    {
      id: "974",
      district_id: "39",
      name: "Mirabdullaev MFY"
    },
    {
      id: "975",
      district_id: "39",
      name: "Nishonbekov MFY"
    },
    {
      id: "976",
      district_id: "39",
      name: "Toshmatov MFY"
    },
    {
      id: "977",
      district_id: "39",
      name: "U.Nosirov MFY"
    },
    {
      id: "978",
      district_id: "39",
      name: "Furkat MFY"
    },
    {
      id: "979",
      district_id: "39",
      name: "Xamza MFY"
    },
    {
      id: "980",
      district_id: "39",
      name: "Savay QFY"
    },
    {
      id: "981",
      district_id: "39",
      name: "Birlashgan MFY"
    },
    {
      id: "982",
      district_id: "39",
      name: "G`alaba MFY"
    },
    {
      id: "983",
      district_id: "39",
      name: "Mustaqillik MFY"
    },
    {
      id: "984",
      district_id: "39",
      name: "Obodon MFY"
    },
    {
      id: "985",
      district_id: "39",
      name: "R.Boboxonov MFY"
    },
    {
      id: "986",
      district_id: "39",
      name: "Savay MFY"
    },
    {
      id: "987",
      district_id: "39",
      name: "Chorvador MFY"
    },
    {
      id: "988",
      district_id: "39",
      name: "Yangi-bo`ston MFY"
    },
    {
      id: "989",
      district_id: "39",
      name: "Chimyon QFY"
    },
    {
      id: "990",
      district_id: "39",
      name: "Beshkaltak MFY"
    },
    {
      id: "991",
      district_id: "39",
      name: "Dehqonchek MFY"
    },
    {
      id: "992",
      district_id: "39",
      name: "Do`stlik MFY"
    },
    {
      id: "993",
      district_id: "39",
      name: "Navoiy MFY"
    },
    {
      id: "994",
      district_id: "39",
      name: "Namuna MFY"
    },
    {
      id: "995",
      district_id: "39",
      name: "Norbo`ta MFY"
    },
    {
      id: "996",
      district_id: "39",
      name: "O.Yo`lboev MFY"
    },
    {
      id: "997",
      district_id: "39",
      name: "Ozod MFY"
    },
    {
      id: "998",
      district_id: "39",
      name: "Oltinsoy MFY"
    },
    {
      id: "999",
      district_id: "39",
      name: "SutkonMFY"
    },
    {
      id: "1000",
      district_id: "39",
      name: "Chimyon MFY"
    },
    {
      id: "1001",
      district_id: "39",
      name: "Eshonobod MFY"
    },
    {
      id: "1002",
      district_id: "39",
      name: "Dardoq QFY"
    },
    {
      id: "1003",
      district_id: "39",
      name: "Dardoq MFY"
    },
    {
      id: "1004",
      district_id: "39",
      name: "DardoqtepaMFY"
    },
    {
      id: "1005",
      district_id: "39",
      name: "Yortibosh MFY"
    },
    {
      id: "1006",
      district_id: "39",
      name: "Qizilto`qay MFY"
    },
    {
      id: "1007",
      district_id: "39",
      name: "Qirlik MFY"
    },
    {
      id: "1008",
      district_id: "39",
      name: "Navoiy MFY"
    },
    {
      id: "1009",
      district_id: "39",
      name: "Nodira MFY"
    },
    {
      id: "1010",
      district_id: "39",
      name: "Oxunboboev MFY"
    },
    {
      id: "1011",
      district_id: "39",
      name: "Raxmonov MFY"
    },
    {
      id: "1012",
      district_id: "40",
      name: "Uzbekiston MFY"
    },
    {
      id: "1013",
      district_id: "40",
      name: "Navruz MFY"
    },
    {
      id: "1014",
      district_id: "40",
      name: "Turkiston MFY"
    },
    {
      id: "1015",
      district_id: "40",
      name: "Ming-tepa MFY"
    },
    {
      id: "1016",
      district_id: "40",
      name: "Yangi maxalla MFY"
    },
    {
      id: "1017",
      district_id: "40",
      name: "Guliston MFY"
    },
    {
      id: "1018",
      district_id: "40",
      name: "Marhamat QFY"
    },
    {
      id: "1019",
      district_id: "40",
      name: "T. Mirzaev MFY"
    },
    {
      id: "1020",
      district_id: "40",
      name: "G. Gulom MFY"
    },
    {
      id: "1021",
      district_id: "40",
      name: "X. Vosiliy MFY"
    },
    {
      id: "1022",
      district_id: "40",
      name: "Oybek MFY"
    },
    {
      id: "1023",
      district_id: "40",
      name: "Nayman MFY"
    },
    {
      id: "1024",
      district_id: "40",
      name: "Yangi xayot MFY"
    },
    {
      id: "1025",
      district_id: "40",
      name: "Qoraqo`rg`on QFY"
    },
    {
      id: "1026",
      district_id: "40",
      name: "T. Yusupov MFY"
    },
    {
      id: "1027",
      district_id: "40",
      name: "Korakurgon MFY"
    },
    {
      id: "1028",
      district_id: "40",
      name: "Bozorboshi MFY"
    },
    {
      id: "1029",
      district_id: "40",
      name: "Yulamatol MFY"
    },
    {
      id: "1030",
      district_id: "40",
      name: "Buriboshi MFY"
    },
    {
      id: "1031",
      district_id: "40",
      name: "Xujaarik MFY"
    },
    {
      id: "1032",
      district_id: "40",
      name: "Tosh yuli MFY"
    },
    {
      id: "1033",
      district_id: "40",
      name: "Gar-gar MFY"
    },
    {
      id: "1034",
      district_id: "40",
      name: "Jiydamozor MFY"
    },
    {
      id: "1035",
      district_id: "40",
      name: "Ok bosh MFY"
    },
    {
      id: "1036",
      district_id: "40",
      name: "Ko`tarma QFY"
    },
    {
      id: "1037",
      district_id: "40",
      name: "Kutarma MFY"
    },
    {
      id: "1038",
      district_id: "40",
      name: "Ukchi MFY"
    },
    {
      id: "1039",
      district_id: "40",
      name: "Dustlik MFY"
    },
    {
      id: "1040",
      district_id: "40",
      name: "Uvaysiy MFY"
    },
    {
      id: "1041",
      district_id: "40",
      name: "Dorboz MFY"
    },
    {
      id: "1042",
      district_id: "40",
      name: "Qorabag`ish QFY"
    },
    {
      id: "1043",
      district_id: "40",
      name: "Korabogish MFY"
    },
    {
      id: "1044",
      district_id: "40",
      name: "Roxat MFY"
    },
    {
      id: "1045",
      district_id: "40",
      name: "Chilon MFY"
    },
    {
      id: "1046",
      district_id: "40",
      name: "Yangi kishlok MFY"
    },
    {
      id: "1047",
      district_id: "40",
      name: "Alitepa MFY"
    },
    {
      id: "1048",
      district_id: "40",
      name: "Toshlok MFY"
    },
    {
      id: "1049",
      district_id: "40",
      name: "Kurgoncha MFY"
    },
    {
      id: "1050",
      district_id: "40",
      name: "Boboxorason MFY"
    },
    {
      id: "1051",
      district_id: "40",
      name: "Shukurmergan QFY"
    },
    {
      id: "1052",
      district_id: "40",
      name: "Shomat MFY"
    },
    {
      id: "1053",
      district_id: "40",
      name: "Xakka MFY"
    },
    {
      id: "1054",
      district_id: "40",
      name: "Yuvvosh MFY"
    },
    {
      id: "1055",
      district_id: "40",
      name: "Shurkishlok MFY"
    },
    {
      id: "1056",
      district_id: "40",
      name: "Shurkakir MFY"
    },
    {
      id: "1057",
      district_id: "40",
      name: "Tulga MFY"
    },
    {
      id: "1058",
      district_id: "40",
      name: "Shukurmergan MFY"
    },
    {
      id: "1059",
      district_id: "40",
      name: "Yukori rovvot MFY"
    },
    {
      id: "1060",
      district_id: "40",
      name: "Yangi rovvot MFY"
    },
    {
      id: "1061",
      district_id: "40",
      name: "Xasanmergan MFY"
    },
    {
      id: "1062",
      district_id: "40",
      name: "Polvontosh MFY"
    },
    {
      id: "1063",
      district_id: "40",
      name: "Polvontosh shaxarcha"
    },
    {
      id: "1064",
      district_id: "40",
      name: "S. Raximov MFY"
    },
    {
      id: "1065",
      district_id: "40",
      name: "Markaziy MFY"
    },
    {
      id: "1066",
      district_id: "41",
      name: "Oltinko`l QFY"
    },
    {
      id: "1067",
      district_id: "41",
      name: "Bo`ston MFY"
    },
    {
      id: "1068",
      district_id: "41",
      name: "Saroy-1 MFY"
    },
    {
      id: "1069",
      district_id: "41",
      name: "Saroy-2 MFY"
    },
    {
      id: "1070",
      district_id: "41",
      name: "Ittifoq MFY"
    },
    {
      id: "1071",
      district_id: "41",
      name: "Oq tepa MFY"
    },
    {
      id: "1072",
      district_id: "41",
      name: "Katta oqtepa MFY"
    },
    {
      id: "1073",
      district_id: "41",
      name: "Qoraqolpoq MFY"
    },
    {
      id: "1074",
      district_id: "41",
      name: "Mamayusufchek MFY"
    },
    {
      id: "1075",
      district_id: "41",
      name: "Markaz MFY"
    },
    {
      id: "1076",
      district_id: "41",
      name: "Namuna MFY"
    },
    {
      id: "1077",
      district_id: "41",
      name: "Oftabachek MFY"
    },
    {
      id: "1078",
      district_id: "41",
      name: "Oxunboboev QFY"
    },
    {
      id: "1079",
      district_id: "41",
      name: "Qayirma MFY"
    },
    {
      id: "1080",
      district_id: "41",
      name: "Madiyorchek MFY"
    },
    {
      id: "1081",
      district_id: "41",
      name: "Temirxo`ja MFY"
    },
    {
      id: "1082",
      district_id: "41",
      name: "Xondibog`i MFY"
    },
    {
      id: "1083",
      district_id: "41",
      name: "Jalabek QFY"
    },
    {
      id: "1084",
      district_id: "41",
      name: "Dalvarzin MFY"
    },
    {
      id: "1085",
      district_id: "41",
      name: "Jalabek MFY"
    },
    {
      id: "1086",
      district_id: "41",
      name: "Qo`shtepa MFY"
    },
    {
      id: "1087",
      district_id: "41",
      name: "Mexnat MFY"
    },
    {
      id: "1088",
      district_id: "41",
      name: "Uyg`ur MFY"
    },
    {
      id: "1089",
      district_id: "41",
      name: "Yangi chek MFY"
    },
    {
      id: "1090",
      district_id: "41",
      name: "Kumakay QFY"
    },
    {
      id: "1091",
      district_id: "41",
      name: "Ayshaxonum MFY"
    },
    {
      id: "1092",
      district_id: "41",
      name: "Kumakay MFY"
    },
    {
      id: "1093",
      district_id: "41",
      name: "Sadda MFY"
    },
    {
      id: "1094",
      district_id: "41",
      name: "Uyshin MFY"
    },
    {
      id: "1095",
      district_id: "41",
      name: "Chek MFY"
    },
    {
      id: "1096",
      district_id: "41",
      name: "Cho`ntak MFY"
    },
    {
      id: "1097",
      district_id: "41",
      name: "Qo`shtepasaroy KFY"
    },
    {
      id: "1098",
      district_id: "41",
      name: "Andijon MFY"
    },
    {
      id: "1099",
      district_id: "41",
      name: "Qo`shko`prik MFY"
    },
    {
      id: "1100",
      district_id: "41",
      name: "Saroy MFY"
    },
    {
      id: "1101",
      district_id: "41",
      name: "Safarobod MFY"
    },
    {
      id: "1102",
      district_id: "41",
      name: "Toptiq MFY"
    },
    {
      id: "1103",
      district_id: "41",
      name: "O`rta MFY"
    },
    {
      id: "1104",
      district_id: "41",
      name: "Sharq yulduzi MFY"
    },
    {
      id: "1105",
      district_id: "41",
      name: "Oqtumor MFY"
    },
    {
      id: "1106",
      district_id: "41",
      name: "Maslaxat QFY"
    },
    {
      id: "1107",
      district_id: "41",
      name: "Ijtimoyat MFY"
    },
    {
      id: "1108",
      district_id: "41",
      name: "Ittifoq MFY"
    },
    {
      id: "1109",
      district_id: "41",
      name: "Madaniy-mexnat MFY1"
    },
    {
      id: "1110",
      district_id: "41",
      name: "Madaniy-mexnat MFY2"
    },
    {
      id: "1111",
      district_id: "41",
      name: "Maqsad MFY"
    },
    {
      id: "1112",
      district_id: "41",
      name: "Xasan-Xusan MFY"
    },
    {
      id: "1113",
      district_id: "41",
      name: "Xuja MFY"
    },
    {
      id: "1114",
      district_id: "41",
      name: "Erkin MFY"
    },
    {
      id: "1115",
      district_id: "41",
      name: "Oraziy QFY"
    },
    {
      id: "1116",
      district_id: "41",
      name: "Ganjirovon MFY"
    },
    {
      id: "1117",
      district_id: "41",
      name: "Jiyanbek MFY"
    },
    {
      id: "1118",
      district_id: "41",
      name: "Qipchoq MFY"
    },
    {
      id: "1119",
      district_id: "41",
      name: "Ko`tarmachek MFY"
    },
    {
      id: "1120",
      district_id: "41",
      name: "Uzun kucha MFY"
    },
    {
      id: "1121",
      district_id: "41",
      name: "Suvyulduz QFY"
    },
    {
      id: "1122",
      district_id: "41",
      name: "Ayronchi MFY"
    },
    {
      id: "1123",
      district_id: "41",
      name: "Gulbog`-Ittifoq MFY"
    },
    {
      id: "1124",
      district_id: "41",
      name: "Mirobod MFY"
    },
    {
      id: "1125",
      district_id: "41",
      name: "ORS MFY"
    },
    {
      id: "1126",
      district_id: "41",
      name: "Suvyulduz MFY"
    },
    {
      id: "1127",
      district_id: "41",
      name: "Chaqqon-1 MFY"
    },
    {
      id: "1128",
      district_id: "41",
      name: "Chaqqon-2 MFY"
    },
    {
      id: "1129",
      district_id: "41",
      name: "Qashqar MFY"
    },
    {
      id: "1130",
      district_id: "42",
      name: "Navro`z MFY"
    },
    {
      id: "1131",
      district_id: "42",
      name: "Yuqori MFY"
    },
    {
      id: "1132",
      district_id: "42",
      name: "Shomat MFY"
    },
    {
      id: "1133",
      district_id: "42",
      name: "Z.Xabibiy MFY"
    },
    {
      id: "1134",
      district_id: "42",
      name: "Qo`qonqishloq MFY"
    },
    {
      id: "1135",
      district_id: "42",
      name: "Nodirabegim MFY"
    },
    {
      id: "1136",
      district_id: "42",
      name: "Qashqar MFY"
    },
    {
      id: "1137",
      district_id: "42",
      name: "Muazzinboy MFY"
    },
    {
      id: "1138",
      district_id: "42",
      name: "Qorashox MFY"
    },
    {
      id: "1139",
      district_id: "42",
      name: "Mustaqillik MFY"
    },
    {
      id: "1140",
      district_id: "42",
      name: "Bobur MFY"
    },
    {
      id: "1141",
      district_id: "42",
      name: "Ittifoq QFY"
    },
    {
      id: "1142",
      district_id: "42",
      name: "Sangraobod MFY"
    },
    {
      id: "1143",
      district_id: "42",
      name: "Qo`yi Sangraobod MFY"
    },
    {
      id: "1144",
      district_id: "42",
      name: "To`pajuvoz MFY"
    },
    {
      id: "1145",
      district_id: "42",
      name: "Tojikqishloq MFY"
    },
    {
      id: "1146",
      district_id: "42",
      name: "Xayraobod-1 MFY"
    },
    {
      id: "1147",
      district_id: "42",
      name: "Xayraobod-2 MFY"
    },
    {
      id: "1148",
      district_id: "42",
      name: "Guliston-Pastqishloq MFY"
    },
    {
      id: "1149",
      district_id: "42",
      name: "Shuvoqzor-Boykechik MFY"
    },
    {
      id: "1150",
      district_id: "42",
      name: "Uyg`ur QFY"
    },
    {
      id: "1151",
      district_id: "42",
      name: "Paynob MFY"
    },
    {
      id: "1152",
      district_id: "42",
      name: "Omonjo`ra-1 MFY"
    },
    {
      id: "1153",
      district_id: "42",
      name: "Omonjo`ra-2 MFY"
    },
    {
      id: "1154",
      district_id: "42",
      name: "Do`ngkishlok MFY"
    },
    {
      id: "1155",
      district_id: "42",
      name: "Soxil MFY"
    },
    {
      id: "1156",
      district_id: "42",
      name: "Guzar MFY"
    },
    {
      id: "1157",
      district_id: "42",
      name: "To`qqizbog` MFY"
    },
    {
      id: "1158",
      district_id: "42",
      name: "Shovruq MFY"
    },
    {
      id: "1159",
      district_id: "42",
      name: "Pushmon MFY"
    },
    {
      id: "1160",
      district_id: "42",
      name: "Ittifoq MFY"
    },
    {
      id: "1161",
      district_id: "42",
      name: "Soy MFY"
    },
    {
      id: "1162",
      district_id: "42",
      name: "Uchqurg`on MFY"
    },
    {
      id: "1163",
      district_id: "42",
      name: "Paxtakor QFY"
    },
    {
      id: "1164",
      district_id: "42",
      name: "Yangi chek MFY"
    },
    {
      id: "1165",
      district_id: "42",
      name: "Ovushqa MFY"
    },
    {
      id: "1166",
      district_id: "42",
      name: "Cho`ngqirg`iz MFY"
    },
    {
      id: "1167",
      district_id: "42",
      name: "Teraktagi MFY"
    },
    {
      id: "1168",
      district_id: "42",
      name: "Qumshaydon MFY"
    },
    {
      id: "1169",
      district_id: "42",
      name: "Ko`kto`nlik MFY"
    },
    {
      id: "1170",
      district_id: "42",
      name: "Eskiqo`rg`on MFY"
    },
    {
      id: "1171",
      district_id: "42",
      name: "Uchko`za MFY"
    },
    {
      id: "1172",
      district_id: "42",
      name: "Fayzaobod MFY"
    },
    {
      id: "1173",
      district_id: "42",
      name: "To`raobod MFY"
    },
    {
      id: "1174",
      district_id: "42",
      name: "Yolg`izbog`-1 MFY"
    },
    {
      id: "1175",
      district_id: "42",
      name: "Yolg`izbog`-2 MFY"
    },
    {
      id: "1176",
      district_id: "42",
      name: "Qoraqo`rg`on MFY"
    },
    {
      id: "1177",
      district_id: "42",
      name: "Qayir MFY"
    },
    {
      id: "1178",
      district_id: "42",
      name: "Madaniyat QFY"
    },
    {
      id: "1179",
      district_id: "42",
      name: "Bo`ston MFY"
    },
    {
      id: "1180",
      district_id: "42",
      name: "Xamza MFY"
    },
    {
      id: "1181",
      district_id: "42",
      name: "Bodrog`obod MFY"
    },
    {
      id: "1182",
      district_id: "42",
      name: "Guliston MFY"
    },
    {
      id: "1183",
      district_id: "42",
      name: "Qirg`izqo`rg`on MFY"
    },
    {
      id: "1184",
      district_id: "42",
      name: "Do`stlik MFY"
    },
    {
      id: "1185",
      district_id: "42",
      name: "Chorbog` MFY"
    },
    {
      id: "1186",
      district_id: "42",
      name: "Mustaqillik MFY"
    },
    {
      id: "1187",
      district_id: "42",
      name: "Madaniyat MFY"
    },
    {
      id: "1188",
      district_id: "42",
      name: "Izboskan MFY"
    },
    {
      id: "1189",
      district_id: "42",
      name: "Sanoat MFY"
    },
    {
      id: "1190",
      district_id: "42",
      name: "Tinchlik MFY"
    },
    {
      id: "1191",
      district_id: "42",
      name: "Yangi xayot MFY"
    },
    {
      id: "1192",
      district_id: "42",
      name: "Toshqo`rg`on MFY"
    },
    {
      id: "1193",
      district_id: "42",
      name: "Soxil MFY"
    },
    {
      id: "1194",
      district_id: "42",
      name: "Andijon MFY"
    },
    {
      id: "1195",
      district_id: "42",
      name: "Ittifoq MFY"
    },
    {
      id: "1196",
      district_id: "42",
      name: "Xolboyota MFY"
    },
    {
      id: "1197",
      district_id: "42",
      name: "Buston QFY"
    },
    {
      id: "1198",
      district_id: "42",
      name: "Bo`ston MFY"
    },
    {
      id: "1199",
      district_id: "42",
      name: "Navbaxor MFY"
    },
    {
      id: "1200",
      district_id: "42",
      name: "Yangi xayot MFY"
    },
    {
      id: "1201",
      district_id: "42",
      name: "Do`stlik MFY"
    },
    {
      id: "1202",
      district_id: "43",
      name: "Oq-oltin QFY"
    },
    {
      id: "1203",
      district_id: "43",
      name: "Obod MFY"
    },
    {
      id: "1204",
      district_id: "43",
      name: "Ulug`bek MFY"
    },
    {
      id: "1205",
      district_id: "43",
      name: "Bobur MFY"
    },
    {
      id: "1206",
      district_id: "43",
      name: "Shaxriobod MFY"
    },
    {
      id: "1207",
      district_id: "43",
      name: "Ovulmat MFY"
    },
    {
      id: "1208",
      district_id: "43",
      name: "Gagarin MFY"
    },
    {
      id: "1209",
      district_id: "43",
      name: "Navoiy QFY"
    },
    {
      id: "1210",
      district_id: "43",
      name: "Sariqsuv MFY"
    },
    {
      id: "1211",
      district_id: "43",
      name: "Yangiobod MFY"
    },
    {
      id: "1212",
      district_id: "43",
      name: "To`rttol MFY"
    },
    {
      id: "1213",
      district_id: "43",
      name: "Oq tom MFY"
    },
    {
      id: "1214",
      district_id: "43",
      name: "Guliston MFY"
    },
    {
      id: "1215",
      district_id: "43",
      name: "Mingbuloq QFY"
    },
    {
      id: "1216",
      district_id: "43",
      name: "Cho`lobod MFY"
    },
    {
      id: "1217",
      district_id: "43",
      name: "Mingbuloq MFY"
    },
    {
      id: "1218",
      district_id: "43",
      name: "Terakzor MFY"
    },
    {
      id: "1219",
      district_id: "43",
      name: "Bo`ston MFY"
    },
    {
      id: "1220",
      district_id: "43",
      name: "Dexqonobod MFY"
    },
    {
      id: "1221",
      district_id: "43",
      name: "O`zbekiston MFY"
    },
    {
      id: "1222",
      district_id: "43",
      name: "Mingchinor QFY"
    },
    {
      id: "1223",
      district_id: "43",
      name: "Mingchinor MFY"
    },
    {
      id: "1224",
      district_id: "43",
      name: "Uchko`prik MFY"
    },
    {
      id: "1225",
      district_id: "44",
      name: "Kampirravot MFY"
    },
    {
      id: "1226",
      district_id: "44",
      name: "Teyit MFY"
    },
    {
      id: "1227",
      district_id: "44",
      name: "Mustaqillik MFY"
    },
    {
      id: "1228",
      district_id: "44",
      name: "Fitrat MFY"
    },
    {
      id: "1229",
      district_id: "44",
      name: "Istiqlol MFY"
    },
    {
      id: "1230",
      district_id: "44",
      name: "Anxor MFY"
    },
    {
      id: "1231",
      district_id: "44",
      name: "Xonobod MFY"
    },
    {
      id: "1232",
      district_id: "44",
      name: "Oxunboboev MFY"
    },
    {
      id: "1233",
      district_id: "44",
      name: "Madraximov MFY"
    },
    {
      id: "1234",
      district_id: "44",
      name: "Navoiy MFY"
    },
    {
      id: "1235",
      district_id: "44",
      name: "Xidirsha MFY"
    },
    {
      id: "1236",
      district_id: "44",
      name: "Yangi hayot MFY"
    },
    {
      id: "1237",
      district_id: "44",
      name: "Xonobod SHFY"
    },
    {
      id: "1238",
      district_id: "44",
      name: "Fozilmon MFY"
    },
    {
      id: "1239",
      district_id: "44",
      name: "S.Mexmonov MFY"
    },
    {
      id: "1240",
      district_id: "45",
      name: "Andijon MFY"
    },
    {
      id: "1241",
      district_id: "45",
      name: "Beshkaram MFY"
    },
    {
      id: "1242",
      district_id: "45",
      name: "Navoiy MFY"
    },
    {
      id: "1243",
      district_id: "45",
      name: "Joъme MFY"
    },
    {
      id: "1244",
      district_id: "45",
      name: "Baxrin MFY"
    },
    {
      id: "1245",
      district_id: "45",
      name: "Guliston MFY"
    },
    {
      id: "1246",
      district_id: "45",
      name: "Uzun ko`chasi MFY"
    },
    {
      id: "1247",
      district_id: "45",
      name: "Bobur MFY"
    },
    {
      id: "1248",
      district_id: "45",
      name: "Chimbuloq MFY"
    },
    {
      id: "1249",
      district_id: "45",
      name: "Kurama MFY"
    },
    {
      id: "1250",
      district_id: "45",
      name: "So`qaloq MFY"
    },
    {
      id: "1251",
      district_id: "45",
      name: "Еtmishmergan MFY"
    },
    {
      id: "1252",
      district_id: "45",
      name: "Guraguri MFY"
    },
    {
      id: "1253",
      district_id: "45",
      name: "Xo`jaobod QFY"
    },
    {
      id: "1254",
      district_id: "45",
      name: "Sanoatchilar SHFY"
    },
    {
      id: "1255",
      district_id: "45",
      name: "Ipakchi MFY"
    },
    {
      id: "1256",
      district_id: "45",
      name: "Beshqovoq MFY"
    },
    {
      id: "1257",
      district_id: "45",
      name: "Solpi MFY"
    },
    {
      id: "1258",
      district_id: "45",
      name: "Oltin vodiy QFY"
    },
    {
      id: "1259",
      district_id: "45",
      name: "Ko`tarma SHFY"
    },
    {
      id: "1260",
      district_id: "45",
      name: "Sarqamish MFY"
    },
    {
      id: "1261",
      district_id: "45",
      name: "Xidirsha MFY"
    },
    {
      id: "1262",
      district_id: "45",
      name: "Yangi xayot MFY"
    },
    {
      id: "1263",
      district_id: "45",
      name: "Qorabuloq MFY"
    },
    {
      id: "1264",
      district_id: "45",
      name: "Uch ko`chasi MFY"
    },
    {
      id: "1265",
      district_id: "45",
      name: "Mustaxkam MFY"
    },
    {
      id: "1266",
      district_id: "45",
      name: "Ko`prikboshi MFY"
    },
    {
      id: "1267",
      district_id: "45",
      name: "Birlashgan QFY"
    },
    {
      id: "1268",
      district_id: "45",
      name: "Manak MFY"
    },
    {
      id: "1269",
      district_id: "45",
      name: "Yangi Farg`ona MFY"
    },
    {
      id: "1270",
      district_id: "45",
      name: "Egamberdiobod MFY"
    },
    {
      id: "1271",
      district_id: "45",
      name: "Faqirqishloq MFY"
    },
    {
      id: "1272",
      district_id: "45",
      name: "To`raobod MFY"
    },
    {
      id: "1273",
      district_id: "45",
      name: "Dilkushod MFY"
    },
    {
      id: "1274",
      district_id: "45",
      name: "Quvvatmurod MFY"
    },
    {
      id: "1275",
      district_id: "45",
      name: "Karnaychi MFY"
    },
    {
      id: "1276",
      district_id: "45",
      name: "Orday MFY"
    },
    {
      id: "1277",
      district_id: "45",
      name: "Nishobbo`yi MFY"
    },
    {
      id: "1278",
      district_id: "45",
      name: "Tosh ota MFY"
    },
    {
      id: "1279",
      district_id: "45",
      name: "Guliston MFY"
    },
    {
      id: "1280",
      district_id: "45",
      name: "Manak QFY"
    },
    {
      id: "1281",
      district_id: "46",
      name: "Do`rman MFY"
    },
    {
      id: "1282",
      district_id: "46",
      name: "Xo`jaobod MFY"
    },
    {
      id: "1283",
      district_id: "46",
      name: "Segaza MFY"
    },
    {
      id: "1284",
      district_id: "46",
      name: "Yonbosh durman MFY"
    },
    {
      id: "1285",
      district_id: "46",
      name: "Begbachcha MFY"
    },
    {
      id: "1286",
      district_id: "46",
      name: "Ortish MFY"
    },
    {
      id: "1287",
      district_id: "46",
      name: "Qum MFY"
    },
    {
      id: "1288",
      district_id: "46",
      name: "Paxtaobod Q.F.Y"
    },
    {
      id: "1289",
      district_id: "46",
      name: "Polason MFY"
    },
    {
      id: "1290",
      district_id: "46",
      name: "Oqto`nnik MFY"
    },
    {
      id: "1291",
      district_id: "46",
      name: "Axmadbek MFY"
    },
    {
      id: "1292",
      district_id: "46",
      name: "Shaydo MFY"
    },
    {
      id: "1293",
      district_id: "46",
      name: "Qalacha MFY"
    },
    {
      id: "1294",
      district_id: "46",
      name: "Toshtepa Q.F.Y"
    },
    {
      id: "1295",
      district_id: "46",
      name: "Qibchaqo`rg`on MFY"
    },
    {
      id: "1296",
      district_id: "46",
      name: "Yuzlar MFY"
    },
    {
      id: "1297",
      district_id: "46",
      name: "Nayman MFY"
    },
    {
      id: "1298",
      district_id: "46",
      name: "Markaz MFY"
    },
    {
      id: "1299",
      district_id: "46",
      name: "Yangi yo`l Q.F.Y"
    },
    {
      id: "1300",
      district_id: "46",
      name: "Vaxim MFY"
    },
    {
      id: "1301",
      district_id: "46",
      name: "Yangi vaxim MFY"
    },
    {
      id: "1302",
      district_id: "46",
      name: "Beshmaxalla MFY"
    },
    {
      id: "1303",
      district_id: "46",
      name: "Karnaychi MFY"
    },
    {
      id: "1304",
      district_id: "46",
      name: "Guliston Q.F.Y"
    },
    {
      id: "1305",
      district_id: "46",
      name: "Tegirmon boshi MFY"
    },
    {
      id: "1306",
      district_id: "46",
      name: "Qoziqo`rg`on MFY"
    },
    {
      id: "1307",
      district_id: "46",
      name: "Andijonlik MFY"
    },
    {
      id: "1308",
      district_id: "46",
      name: "Shokirboy MFY"
    },
    {
      id: "1309",
      district_id: "46",
      name: "Yangi maxalla MFY"
    },
    {
      id: "1310",
      district_id: "46",
      name: "O`rta sharhon Q.F.Y"
    },
    {
      id: "1311",
      district_id: "46",
      name: "Qo`rg`oncha MFY"
    },
    {
      id: "1312",
      district_id: "46",
      name: "Nazarmaxram MFY"
    },
    {
      id: "1313",
      district_id: "46",
      name: "Qumtepa MFY"
    },
    {
      id: "1314",
      district_id: "46",
      name: "Nazarmaxram Q.F.Y"
    },
    {
      id: "1315",
      district_id: "46",
      name: "Bayroq MFY"
    },
    {
      id: "1316",
      district_id: "46",
      name: "Maslaxattepa MFY"
    },
    {
      id: "1317",
      district_id: "46",
      name: "Qo`rg`oncha MFY"
    },
    {
      id: "1318",
      district_id: "46",
      name: "Bobochik MFY"
    },
    {
      id: "1319",
      district_id: "46",
      name: "Nayman MFY"
    },
    {
      id: "1320",
      district_id: "46",
      name: "O`zbekiston Q.F.Y"
    },
    {
      id: "1321",
      district_id: "46",
      name: "Yangi naynavo MFY"
    },
    {
      id: "1322",
      district_id: "46",
      name: "Qorabo`yin MFY"
    },
    {
      id: "1323",
      district_id: "46",
      name: "Qushqo`noq MFY"
    },
    {
      id: "1324",
      district_id: "46",
      name: "Qum ariq MFY"
    },
    {
      id: "1325",
      district_id: "46",
      name: "Azamat MFY"
    },
    {
      id: "1326",
      district_id: "46",
      name: "To`lqin MFY"
    },
    {
      id: "1327",
      district_id: "46",
      name: "Naynavo Q.F.Y"
    },
    {
      id: "1328",
      district_id: "46",
      name: "Cho`ja MFY"
    },
    {
      id: "1329",
      district_id: "46",
      name: "Eshon qishloq MFY"
    },
    {
      id: "1330",
      district_id: "46",
      name: "Bo`ston MFY"
    },
    {
      id: "1331",
      district_id: "46",
      name: "Do`stlik MFY"
    },
    {
      id: "1332",
      district_id: "46",
      name: "Quruqsor MFY"
    },
    {
      id: "1333",
      district_id: "46",
      name: "Cho`ja Q.F.Y"
    },
    {
      id: "1334",
      district_id: "46",
      name: "So`zoq MFY"
    },
    {
      id: "1335",
      district_id: "46",
      name: "Abdubiy MFY"
    },
    {
      id: "1336",
      district_id: "46",
      name: "Shurqo`rg`on MFY"
    },
    {
      id: "1337",
      district_id: "46",
      name: "Oqto`nlik MFY"
    },
    {
      id: "1338",
      district_id: "46",
      name: "Birlashkan MFY"
    },
    {
      id: "1339",
      district_id: "46",
      name: "Qumqayroq MFY"
    },
    {
      id: "1340",
      district_id: "46",
      name: "Abdubiy Q.F.Y"
    },
    {
      id: "1341",
      district_id: "46",
      name: "Qashqar MFY"
    },
    {
      id: "1342",
      district_id: "46",
      name: "Saroy MFY"
    },
    {
      id: "1343",
      district_id: "46",
      name: "Paxtako`l MFY"
    },
    {
      id: "1344",
      district_id: "46",
      name: "Dorilamo MFY"
    },
    {
      id: "1345",
      district_id: "46",
      name: "Xaqiqat Q.F.Y"
    },
    {
      id: "1346",
      district_id: "46",
      name: "Soxiobod MFY"
    },
    {
      id: "1347",
      district_id: "46",
      name: "Tumor MFY"
    },
    {
      id: "1348",
      district_id: "46",
      name: "Yangi maxalla MFY"
    },
    {
      id: "1349",
      district_id: "46",
      name: "Do`lan MFY"
    },
    {
      id: "1350",
      district_id: "46",
      name: "Yuqori shahrixon Q.F.Y"
    },
    {
      id: "1351",
      district_id: "46",
      name: "Abdusamad MFY"
    },
    {
      id: "1352",
      district_id: "46",
      name: "Andijonlik MFY"
    },
    {
      id: "1353",
      district_id: "46",
      name: "Beshariq MFY"
    },
    {
      id: "1354",
      district_id: "46",
      name: "Buvayda MFY"
    },
    {
      id: "1355",
      district_id: "46",
      name: "Bo`ston MFY"
    },
    {
      id: "1356",
      district_id: "46",
      name: "Qayrog`ich guzar MFY"
    },
    {
      id: "1357",
      district_id: "46",
      name: "Qorako`rpa MFY"
    },
    {
      id: "1358",
      district_id: "46",
      name: "Mullaboy MFY"
    },
    {
      id: "1359",
      district_id: "46",
      name: "Mustaqillik MFY"
    },
    {
      id: "1360",
      district_id: "46",
      name: "Navbaxor MFY"
    },
    {
      id: "1361",
      district_id: "46",
      name: "Navro`z MFY"
    },
    {
      id: "1362",
      district_id: "46",
      name: "Nomozgox MFY"
    },
    {
      id: "1363",
      district_id: "46",
      name: "Taraqqiyot MFY"
    },
    {
      id: "1364",
      district_id: "46",
      name: "Teraktagi MFY"
    },
    {
      id: "1365",
      district_id: "46",
      name: "O`zbekiston MFY"
    },
    {
      id: "1366",
      district_id: "46",
      name: "Shahrixon MFY"
    },
    {
      id: "1367",
      district_id: "46",
      name: "Yakka tut MFY"
    },
    {
      id: "1368",
      district_id: "46",
      name: "Yangi xayot MFY"
    },
    {
      id: "1369",
      district_id: "47",
      name: "1-son M.Narshaxiy MFY"
    },
    {
      id: "1370",
      district_id: "47",
      name: "2-son S.Boxarziy MFY"
    },
    {
      id: "1371",
      district_id: "47",
      name: "3-son Furqat MFY"
    },
    {
      id: "1372",
      district_id: "47",
      name: "4-son A.Navoiy MFY"
    },
    {
      id: "1373",
      district_id: "47",
      name: "5-son G`.G`ulom MFY"
    },
    {
      id: "1374",
      district_id: "47",
      name: "6-son Ko`kaldosh MFY"
    },
    {
      id: "1375",
      district_id: "47",
      name: "7-son Imom-al Buxoriy MFY"
    },
    {
      id: "1376",
      district_id: "47",
      name: "8-son H.Olimjon MFY"
    },
    {
      id: "1377",
      district_id: "47",
      name: "9-son J.Ikromiy MFY"
    },
    {
      id: "1378",
      district_id: "47",
      name: "10-son A.Fitrat MFY"
    },
    {
      id: "1379",
      district_id: "47",
      name: "11-son S.Sheroziy MFY"
    },
    {
      id: "1380",
      district_id: "47",
      name: "12-son Xo`ja Xunjoriy MFY"
    },
    {
      id: "1381",
      district_id: "47",
      name: "13- son \"Jo`ybor\" MFY"
    },
    {
      id: "1382",
      district_id: "47",
      name: "14- son Abu Ali ibn Sino MFY"
    },
    {
      id: "1383",
      district_id: "47",
      name: "15- son Nizomiy MFY"
    },
    {
      id: "1384",
      district_id: "47",
      name: "16- son M.Ashrafiy MFY"
    },
    {
      id: "1385",
      district_id: "47",
      name: "17-son S.Raximov MFY"
    },
    {
      id: "1386",
      district_id: "47",
      name: "18-son Dilkusho MFY"
    },
    {
      id: "1387",
      district_id: "47",
      name: "19- son F.Xo`jaev MFY"
    },
    {
      id: "1388",
      district_id: "47",
      name: "20-son M.Ulugbek MFY"
    },
    {
      id: "1389",
      district_id: "47",
      name: "21-son Shergiron MFY"
    },
    {
      id: "1390",
      district_id: "47",
      name: "22-son Chorbaxosa MFY"
    },
    {
      id: "1391",
      district_id: "47",
      name: "23-son Ko`ksaroy MFY"
    },
    {
      id: "1392",
      district_id: "47",
      name: "24-son Shayx-ul Olam MFY"
    },
    {
      id: "1393",
      district_id: "47",
      name: "25-son Sitorai Moxi-xosa MFY"
    },
    {
      id: "1394",
      district_id: "47",
      name: "26- son Turki Jandi MFY"
    },
    {
      id: "1395",
      district_id: "47",
      name: "27-son Sharq Yulduzi MFY"
    },
    {
      id: "1396",
      district_id: "47",
      name: "28-son M.Burxonov MFY"
    },
    {
      id: "1397",
      district_id: "47",
      name: "29-son Gulchorbog` MFY"
    },
    {
      id: "1398",
      district_id: "47",
      name: "30-son Xavzi Nav MFY"
    },
    {
      id: "1399",
      district_id: "47",
      name: "31-son Yangiobod MFY"
    },
    {
      id: "1400",
      district_id: "47",
      name: "32-son Guliston MFY"
    },
    {
      id: "1401",
      district_id: "47",
      name: "33-son A.G`ijduvoniy MFY"
    },
    {
      id: "1402",
      district_id: "47",
      name: "34-son Navro`z MFY"
    },
    {
      id: "1403",
      district_id: "47",
      name: "35-son Bunyodkor MFY"
    },
    {
      id: "1404",
      district_id: "47",
      name: "36-son Zarafshon MFY"
    },
    {
      id: "1405",
      district_id: "47",
      name: "37-son A.Temur MFY"
    },
    {
      id: "1406",
      district_id: "47",
      name: "38-son Piridastgir MFY"
    },
    {
      id: "1407",
      district_id: "47",
      name: "39-son Shodlik MFY"
    },
    {
      id: "1408",
      district_id: "47",
      name: "40-son R.Xamroev MFY"
    },
    {
      id: "1409",
      district_id: "47",
      name: "41-son Gulshan MFY"
    },
    {
      id: "1410",
      district_id: "47",
      name: "42-son Varaxsha MFY"
    },
    {
      id: "1411",
      district_id: "47",
      name: "43-son Olim Xo`jaev MFY"
    },
    {
      id: "1412",
      district_id: "47",
      name: "44-son To`qimachi MFY"
    },
    {
      id: "1413",
      district_id: "47",
      name: "45-son Foshun MFY"
    },
    {
      id: "1414",
      district_id: "47",
      name: "46-son Do`stlik MFY"
    },
    {
      id: "1415",
      district_id: "47",
      name: "47-son Istiqlol MFY"
    },
    {
      id: "1416",
      district_id: "47",
      name: "48-son Yoshlik MFY"
    },
    {
      id: "1417",
      district_id: "47",
      name: "49-son Navbaxor MFY"
    },
    {
      id: "1418",
      district_id: "47",
      name: "50-son Namozgox MFY"
    },
    {
      id: "1419",
      district_id: "47",
      name: "51-son B.Nakshband MFY"
    },
    {
      id: "1420",
      district_id: "47",
      name: "52-son Afshor MFY"
    },
    {
      id: "1421",
      district_id: "47",
      name: "53-son M.Tarobiy MFY"
    },
    {
      id: "1422",
      district_id: "47",
      name: "54-son Losha MFY"
    },
    {
      id: "1423",
      district_id: "47",
      name: "55-son S.Ayniy MFY"
    },
    {
      id: "1424",
      district_id: "47",
      name: "56-son A.Donish MFY"
    },
    {
      id: "1425",
      district_id: "47",
      name: "57-son Bixishtiyon MFY"
    },
    {
      id: "1426",
      district_id: "47",
      name: "58-son Toshmasjid MFY"
    },
    {
      id: "1427",
      district_id: "47",
      name: "59-son Oybek MFY"
    },
    {
      id: "1428",
      district_id: "47",
      name: "60-son Xujamushkin MFY"
    },
    {
      id: "1429",
      district_id: "47",
      name: "61-son Bogidasht MFY"
    },
    {
      id: "1430",
      district_id: "47",
      name: "62-son A.Sifatmuniy MFY"
    },
    {
      id: "1431",
      district_id: "47",
      name: "63-son Shayxon MFY"
    },
    {
      id: "1432",
      district_id: "47",
      name: "64-son Otbozor MFY"
    },
    {
      id: "1433",
      district_id: "47",
      name: "65-son Shirbuddin MFY"
    },
    {
      id: "1434",
      district_id: "48",
      name: "Kuchkumar QFY"
    },
    {
      id: "1435",
      district_id: "48",
      name: "Kavola Maxmud QFY"
    },
    {
      id: "1436",
      district_id: "48",
      name: "Sufikorgar QFY"
    },
    {
      id: "1437",
      district_id: "48",
      name: "Bogikalon QFY"
    },
    {
      id: "1438",
      district_id: "48",
      name: "Kushxodim MFY"
    },
    {
      id: "1439",
      district_id: "48",
      name: "Yangiturmush QFY"
    },
    {
      id: "1440",
      district_id: "48",
      name: "Turkon MFY"
    },
    {
      id: "1441",
      district_id: "48",
      name: "Istikbol QFY"
    },
    {
      id: "1442",
      district_id: "48",
      name: "Rabotak MFY"
    },
    {
      id: "1443",
      district_id: "48",
      name: "Kunji-kal`a QFY"
    },
    {
      id: "1444",
      district_id: "48",
      name: "Novmetan MFY"
    },
    {
      id: "1445",
      district_id: "48",
      name: "Zarmanok MFY"
    },
    {
      id: "1446",
      district_id: "48",
      name: "Shergiron QFY"
    },
    {
      id: "1447",
      district_id: "48",
      name: "Rabotipoyon MFY"
    },
    {
      id: "1448",
      district_id: "48",
      name: "Xonabod MFY"
    },
    {
      id: "1449",
      district_id: "48",
      name: "Yurinbolo QFY"
    },
    {
      id: "1450",
      district_id: "48",
      name: "Talaliyon MFY"
    },
    {
      id: "1451",
      district_id: "48",
      name: "Kulonxona MFY"
    },
    {
      id: "1452",
      district_id: "48",
      name: "Rabotikalmok QFY"
    },
    {
      id: "1453",
      district_id: "48",
      name: "Dexcha MFY"
    },
    {
      id: "1454",
      district_id: "48",
      name: "Arabxona MFY"
    },
    {
      id: "1455",
      district_id: "48",
      name: "Podshoxi MFY"
    },
    {
      id: "1456",
      district_id: "48",
      name: "Losha QFY"
    },
    {
      id: "1457",
      district_id: "48",
      name: "Xumin MFY"
    },
    {
      id: "1458",
      district_id: "48",
      name: "Bogdasht MFY"
    },
    {
      id: "1459",
      district_id: "48",
      name: "Shexoncha QFY"
    },
    {
      id: "1460",
      district_id: "48",
      name: "Saxovat QFY"
    },
    {
      id: "1461",
      district_id: "48",
      name: "Soxibkor QFY"
    },
    {
      id: "1462",
      district_id: "48",
      name: "Mustakillik MFY"
    },
    {
      id: "1463",
      district_id: "48",
      name: "Galaosiyo MFY"
    },
    {
      id: "1464",
      district_id: "48",
      name: "Dustlik MFY"
    },
    {
      id: "1465",
      district_id: "48",
      name: "Navruz MFY"
    },
    {
      id: "1466",
      district_id: "48",
      name: "Oybek MFY"
    },
    {
      id: "1467",
      district_id: "49",
      name: "Kumushkent QFY"
    },
    {
      id: "1468",
      district_id: "49",
      name: "Rozmoz MFY"
    },
    {
      id: "1469",
      district_id: "49",
      name: "Xo`jarabod MFY"
    },
    {
      id: "1470",
      district_id: "49",
      name: "Cariosiyo MFY"
    },
    {
      id: "1471",
      district_id: "49",
      name: "Xalvogaron MFY"
    },
    {
      id: "1472",
      district_id: "49",
      name: "Exson QFY"
    },
    {
      id: "1473",
      district_id: "49",
      name: "Garibshox MFY"
    },
    {
      id: "1474",
      district_id: "49",
      name: "Ko`lxatib MFY"
    },
    {
      id: "1475",
      district_id: "49",
      name: "Teraklik MFY"
    },
    {
      id: "1476",
      district_id: "49",
      name: "Kipchok QFY"
    },
    {
      id: "1477",
      district_id: "49",
      name: "Mirvoshi MFY"
    },
    {
      id: "1478",
      district_id: "49",
      name: "Changaron MFY"
    },
    {
      id: "1479",
      district_id: "49",
      name: "Churikalon MFY"
    },
    {
      id: "1480",
      district_id: "49",
      name: "Sufidexkon MFY"
    },
    {
      id: "1481",
      district_id: "49",
      name: "Kungirot QFY"
    },
    {
      id: "1482",
      district_id: "49",
      name: "Kosari MFY"
    },
    {
      id: "1483",
      district_id: "49",
      name: "Muminobod MFY"
    },
    {
      id: "1484",
      district_id: "49",
      name: "Beshrabod MFY"
    },
    {
      id: "1485",
      district_id: "49",
      name: "Xajivon MFY"
    },
    {
      id: "1486",
      district_id: "49",
      name: "Roxkent QFY"
    },
    {
      id: "1487",
      district_id: "49",
      name: "Qo`qin MFY"
    },
    {
      id: "1488",
      district_id: "49",
      name: "Guliston MFY"
    },
    {
      id: "1489",
      district_id: "49",
      name: "Arabxona MFY"
    },
    {
      id: "1490",
      district_id: "49",
      name: "Pirmast QFY"
    },
    {
      id: "1491",
      district_id: "49",
      name: "Bozorjoyi MFY"
    },
    {
      id: "1492",
      district_id: "49",
      name: "Anjirbog MFY"
    },
    {
      id: "1493",
      district_id: "49",
      name: "Ko`lodina MFY"
    },
    {
      id: "1494",
      district_id: "49",
      name: "Xalach QFY"
    },
    {
      id: "1495",
      district_id: "49",
      name: "Latifsobungar MFY"
    },
    {
      id: "1496",
      district_id: "49",
      name: "Shakarkent MFY"
    },
    {
      id: "1497",
      district_id: "49",
      name: "Niyozxuja MFY"
    },
    {
      id: "1498",
      district_id: "49",
      name: "Xargush QFY"
    },
    {
      id: "1499",
      district_id: "49",
      name: "Katagan MFY"
    },
    {
      id: "1500",
      district_id: "49",
      name: "Panob MFY"
    },
    {
      id: "1501",
      district_id: "49",
      name: "Nayman MFY"
    },
    {
      id: "1502",
      district_id: "49",
      name: "Xargo`sh MFY"
    },
    {
      id: "1503",
      district_id: "49",
      name: "Xayrobodcha QFY"
    },
    {
      id: "1504",
      district_id: "49",
      name: "Pushmon MFY"
    },
    {
      id: "1505",
      district_id: "49",
      name: "Uzbakon MFY"
    },
    {
      id: "1506",
      district_id: "49",
      name: "Shanba MFY"
    },
    {
      id: "1507",
      district_id: "49",
      name: "Imomkozixon QFY"
    },
    {
      id: "1508",
      district_id: "49",
      name: "Xalach MFY"
    },
    {
      id: "1509",
      district_id: "49",
      name: "Kalti MFY"
    },
    {
      id: "1510",
      district_id: "49",
      name: "Yangikent QFY"
    },
    {
      id: "1511",
      district_id: "49",
      name: "Shoxnigor MFY"
    },
    {
      id: "1512",
      district_id: "49",
      name: "Chorbogkent MFY"
    },
    {
      id: "1513",
      district_id: "49",
      name: "Shirin MFY"
    },
    {
      id: "1514",
      district_id: "49",
      name: "Vobkent MFY"
    },
    {
      id: "1515",
      district_id: "49",
      name: "Charmgaron MFY"
    },
    {
      id: "1516",
      district_id: "49",
      name: "Shifokor MFY"
    },
    {
      id: "1517",
      district_id: "49",
      name: "Dustlik MFY"
    },
    {
      id: "1518",
      district_id: "49",
      name: "Kuruvchi MFY"
    },
    {
      id: "1519",
      district_id: "49",
      name: "S.Raximov MFY"
    },
    {
      id: "1520",
      district_id: "49",
      name: "Kulolchi MFY"
    },
    {
      id: "1521",
      district_id: "49",
      name: "Rabotoxun MFY"
    },
    {
      id: "1522",
      district_id: "50",
      name: "F.Yunusov QFY"
    },
    {
      id: "1523",
      district_id: "50",
      name: "Havzak MFY"
    },
    {
      id: "1524",
      district_id: "50",
      name: "Paxtaobod QFY"
    },
    {
      id: "1525",
      district_id: "50",
      name: "Ayirtom MFY"
    },
    {
      id: "1526",
      district_id: "50",
      name: "Toshloq MFY"
    },
    {
      id: "1527",
      district_id: "50",
      name: "Ulfatbibi QFY"
    },
    {
      id: "1528",
      district_id: "50",
      name: "Rostgo`y MFY"
    },
    {
      id: "1529",
      district_id: "50",
      name: "Oqrabot MFY"
    },
    {
      id: "1530",
      district_id: "50",
      name: "Baqqollar MFY"
    },
    {
      id: "1531",
      district_id: "50",
      name: "G`ishti MFY"
    },
    {
      id: "1532",
      district_id: "50",
      name: "Beshtuvo MFY"
    },
    {
      id: "1533",
      district_id: "50",
      name: "Baraka MFY"
    },
    {
      id: "1534",
      district_id: "50",
      name: "Qaraxoni QFY"
    },
    {
      id: "1535",
      district_id: "50",
      name: "Qarabog` MFY"
    },
    {
      id: "1536",
      district_id: "50",
      name: "Qo`riq MFY"
    },
    {
      id: "1537",
      district_id: "50",
      name: "Olmazor MFY"
    },
    {
      id: "1538",
      district_id: "50",
      name: "Soktari QFY"
    },
    {
      id: "1539",
      district_id: "50",
      name: "Mirakon MFY"
    },
    {
      id: "1540",
      district_id: "50",
      name: "Tarxanon MFY"
    },
    {
      id: "1541",
      district_id: "50",
      name: "Saidkent MFY"
    },
    {
      id: "1542",
      district_id: "50",
      name: "Sarvari QFY"
    },
    {
      id: "1543",
      district_id: "50",
      name: "Kalon MFY"
    },
    {
      id: "1544",
      district_id: "50",
      name: "Tavariyon MFY"
    },
    {
      id: "1545",
      district_id: "50",
      name: "Zarangari QFY"
    },
    {
      id: "1546",
      district_id: "50",
      name: "Bo`lakiyon MFY"
    },
    {
      id: "1547",
      district_id: "50",
      name: "Mahalla MFY"
    },
    {
      id: "1548",
      district_id: "50",
      name: "Mustaqillik MFY"
    },
    {
      id: "1549",
      district_id: "50",
      name: "G`ovshun QFY"
    },
    {
      id: "1550",
      district_id: "50",
      name: "Xatcha MFY"
    },
    {
      id: "1551",
      district_id: "50",
      name: "O`zanon MFY"
    },
    {
      id: "1552",
      district_id: "50",
      name: "Mahallai Mirzayon MFY"
    },
    {
      id: "1553",
      district_id: "50",
      name: "Mazragan MFY"
    },
    {
      id: "1554",
      district_id: "50",
      name: "Biyosin MFY"
    },
    {
      id: "1555",
      district_id: "50",
      name: "Sarmijon QFY"
    },
    {
      id: "1556",
      district_id: "50",
      name: "Ko`lijabbor MFY"
    },
    {
      id: "1557",
      district_id: "50",
      name: "Labiro`t MFY"
    },
    {
      id: "1558",
      district_id: "50",
      name: "Gajdumak MFY"
    },
    {
      id: "1559",
      district_id: "50",
      name: "Jovgari MFY"
    },
    {
      id: "1560",
      district_id: "50",
      name: "Firishkent QFY"
    },
    {
      id: "1561",
      district_id: "50",
      name: "Sho`rcha MFY"
    },
    {
      id: "1562",
      district_id: "50",
      name: "Sohibiyon MFY"
    },
    {
      id: "1563",
      district_id: "50",
      name: "Qassabon MFY"
    },
    {
      id: "1564",
      district_id: "50",
      name: "Zargaron MFY"
    },
    {
      id: "1565",
      district_id: "50",
      name: "Armechan QFY"
    },
    {
      id: "1566",
      district_id: "50",
      name: "Cho`g`alon MFY"
    },
    {
      id: "1567",
      district_id: "50",
      name: "Todon MFY"
    },
    {
      id: "1568",
      district_id: "50",
      name: "Denov MFY"
    },
    {
      id: "1569",
      district_id: "50",
      name: "Buktaroy QFY"
    },
    {
      id: "1570",
      district_id: "50",
      name: "Chag`dari MFY"
    },
    {
      id: "1571",
      district_id: "50",
      name: "Buktaroy MFY"
    },
    {
      id: "1572",
      district_id: "50",
      name: "Vazirshox MFY"
    },
    {
      id: "1573",
      district_id: "50",
      name: "Ko`shk MFY"
    },
    {
      id: "1574",
      district_id: "50",
      name: "Taxtaxon MFY"
    },
    {
      id: "1575",
      district_id: "50",
      name: "Pozagari QFY"
    },
    {
      id: "1576",
      district_id: "50",
      name: "Dodarak MFY"
    },
    {
      id: "1577",
      district_id: "50",
      name: "Qumoq MFY"
    },
    {
      id: "1578",
      district_id: "50",
      name: "Karna MFY"
    },
    {
      id: "1579",
      district_id: "50",
      name: "Ko`kcha QFY"
    },
    {
      id: "1580",
      district_id: "50",
      name: "Zafarobod SHFY"
    },
    {
      id: "1581",
      district_id: "50",
      name: "Chorsu MFY"
    },
    {
      id: "1582",
      district_id: "50",
      name: "Sardor MFY"
    },
    {
      id: "1583",
      district_id: "50",
      name: "Qo`rg`on MFY"
    },
    {
      id: "1584",
      district_id: "50",
      name: "A.G`ijduvoniy MFY"
    },
    {
      id: "1585",
      district_id: "50",
      name: "Dilkusho MFY"
    },
    {
      id: "1586",
      district_id: "50",
      name: "F.Xo`jaev MFY"
    },
    {
      id: "1587",
      district_id: "50",
      name: "Sharq MFY"
    },
    {
      id: "1588",
      district_id: "50",
      name: "A.Qahhor MFY"
    },
    {
      id: "1589",
      district_id: "50",
      name: "Pomo`za MFY"
    },
    {
      id: "1590",
      district_id: "50",
      name: "Guliston MFY"
    },
    {
      id: "1591",
      district_id: "50",
      name: "Bobur MFY"
    },
    {
      id: "1592",
      district_id: "50",
      name: "F.Yunusov MFY"
    },
    {
      id: "1593",
      district_id: "50",
      name: "Nodirabegim MFY"
    },
    {
      id: "1594",
      district_id: "50",
      name: "Ulug`bek MFY"
    },
    {
      id: "1595",
      district_id: "50",
      name: "Degrezon MFY"
    },
    {
      id: "1596",
      district_id: "51",
      name: "Samonchuq QFY"
    },
    {
      id: "1597",
      district_id: "51",
      name: "Murg`ak MFY"
    },
    {
      id: "1598",
      district_id: "51",
      name: "Samonchuq shfy"
    },
    {
      id: "1599",
      district_id: "51",
      name: "Xumdonak QFY"
    },
    {
      id: "1600",
      district_id: "51",
      name: "Ushot MFY"
    },
    {
      id: "1601",
      district_id: "51",
      name: "Pasana MFY"
    },
    {
      id: "1602",
      district_id: "51",
      name: "Ko`liyon MFY"
    },
    {
      id: "1603",
      district_id: "51",
      name: "Po`loti QFY"
    },
    {
      id: "1604",
      district_id: "51",
      name: "Zangi MFY"
    },
    {
      id: "1605",
      district_id: "51",
      name: "Sho`robot MFY"
    },
    {
      id: "1606",
      district_id: "51",
      name: "Demun MFY"
    },
    {
      id: "1607",
      district_id: "51",
      name: "Hazorman MFY"
    },
    {
      id: "1608",
      district_id: "51",
      name: "Xumin QFY"
    },
    {
      id: "1609",
      district_id: "51",
      name: "Qalmoq MFY"
    },
    {
      id: "1610",
      district_id: "51",
      name: "Qozikenti MFY"
    },
    {
      id: "1611",
      district_id: "51",
      name: "Boloiob MFY"
    },
    {
      id: "1612",
      district_id: "51",
      name: "Qaroli QFY"
    },
    {
      id: "1613",
      district_id: "51",
      name: "Dovud MFY"
    },
    {
      id: "1614",
      district_id: "51",
      name: "Xo`jaxayron MFY"
    },
    {
      id: "1615",
      district_id: "51",
      name: "Eronshox MFY"
    },
    {
      id: "1616",
      district_id: "51",
      name: "Yangiobod MFY"
    },
    {
      id: "1617",
      district_id: "51",
      name: "Sapatta QFY"
    },
    {
      id: "1618",
      district_id: "51",
      name: "Tobagar MFY"
    },
    {
      id: "1619",
      district_id: "51",
      name: "Chorzona MFY"
    },
    {
      id: "1620",
      district_id: "51",
      name: "Darveshi MFY"
    },
    {
      id: "1621",
      district_id: "51",
      name: "Navrabot QFY"
    },
    {
      id: "1622",
      district_id: "51",
      name: "Bahoriston MFY"
    },
    {
      id: "1623",
      district_id: "51",
      name: "Oytug`di MFY"
    },
    {
      id: "1624",
      district_id: "51",
      name: "Pochchoyi MFY"
    },
    {
      id: "1625",
      district_id: "51",
      name: "Qorovul MFY"
    },
    {
      id: "1626",
      district_id: "51",
      name: "Aleli QFY"
    },
    {
      id: "1627",
      district_id: "51",
      name: "Jondor MFY"
    },
    {
      id: "1628",
      district_id: "51",
      name: "Obod MFY"
    },
    {
      id: "1629",
      district_id: "51",
      name: "Rabot MFY"
    },
    {
      id: "1630",
      district_id: "51",
      name: "Oxshix QFY"
    },
    {
      id: "1631",
      district_id: "51",
      name: "Namgoni MFY"
    },
    {
      id: "1632",
      district_id: "51",
      name: "Qovchin MFY"
    },
    {
      id: "1633",
      district_id: "51",
      name: "Lolo QFY"
    },
    {
      id: "1634",
      district_id: "51",
      name: "Luqmon MFY"
    },
    {
      id: "1635",
      district_id: "51",
      name: "Romish QFY"
    },
    {
      id: "1636",
      district_id: "51",
      name: "Oqtepa MFY"
    },
    {
      id: "1637",
      district_id: "51",
      name: "Qazoqon MFY"
    },
    {
      id: "1638",
      district_id: "51",
      name: "Dalmun QFY"
    },
    {
      id: "1639",
      district_id: "51",
      name: "Dalmunobod MFY"
    },
    {
      id: "1640",
      district_id: "51",
      name: "Jamiyat MFY"
    },
    {
      id: "1641",
      district_id: "51",
      name: "Mirzayon QFY"
    },
    {
      id: "1642",
      district_id: "51",
      name: "Yosh kuch MFY"
    },
    {
      id: "1643",
      district_id: "51",
      name: "Jondor SHFY"
    },
    {
      id: "1644",
      district_id: "51",
      name: "Paxtakor MFY"
    },
    {
      id: "1645",
      district_id: "51",
      name: "Zarafshon MFY"
    },
    {
      id: "1646",
      district_id: "51",
      name: "Navgadi MFY"
    },
    {
      id: "1647",
      district_id: "52",
      name: "Beklar QFY"
    },
    {
      id: "1648",
      district_id: "52",
      name: "Istiqbol MFY"
    },
    {
      id: "1649",
      district_id: "52",
      name: "Niyoz hoji QFY"
    },
    {
      id: "1650",
      district_id: "52",
      name: "O`ba-cho`li MFY"
    },
    {
      id: "1651",
      district_id: "52",
      name: "Mustaqillik MFY"
    },
    {
      id: "1652",
      district_id: "52",
      name: "Nurafshon QFY"
    },
    {
      id: "1653",
      district_id: "52",
      name: "Xukumatobod MFY"
    },
    {
      id: "1654",
      district_id: "52",
      name: "Sorgun MFY"
    },
    {
      id: "1655",
      district_id: "52",
      name: "Geofizika MFY"
    },
    {
      id: "1656",
      district_id: "52",
      name: "Tutkunda MFY"
    },
    {
      id: "1657",
      district_id: "52",
      name: "Sarayon QFY"
    },
    {
      id: "1658",
      district_id: "52",
      name: "Navro`z MFY"
    },
    {
      id: "1659",
      district_id: "52",
      name: "O`rta-cho`l MFY"
    },
    {
      id: "1660",
      district_id: "52",
      name: "Choloki MFY"
    },
    {
      id: "1661",
      district_id: "52",
      name: "Siyozpoyon QFY"
    },
    {
      id: "1662",
      district_id: "52",
      name: "Tuniroq MFY"
    },
    {
      id: "1663",
      district_id: "52",
      name: "Kogon QFY"
    },
    {
      id: "1664",
      district_id: "52",
      name: "Naqshband QFY"
    },
    {
      id: "1665",
      district_id: "52",
      name: "Suxor MFY"
    },
    {
      id: "1666",
      district_id: "52",
      name: "Xo`ja-yakshaba QFY"
    },
    {
      id: "1667",
      district_id: "52",
      name: "Yangi-hayot QFY"
    },
    {
      id: "1668",
      district_id: "53",
      name: "Arabxona MFY"
    },
    {
      id: "1669",
      district_id: "53",
      name: "F.Xujaev MFY"
    },
    {
      id: "1670",
      district_id: "53",
      name: "Maxtumkuli MFY"
    },
    {
      id: "1671",
      district_id: "53",
      name: "Zirabod MFY"
    },
    {
      id: "1672",
      district_id: "53",
      name: "Furkat MFY"
    },
    {
      id: "1673",
      district_id: "53",
      name: "A.Kodiriy MFY"
    },
    {
      id: "1674",
      district_id: "53",
      name: "A.Navoiy MFY"
    },
    {
      id: "1675",
      district_id: "53",
      name: "Ziekor MFY"
    },
    {
      id: "1676",
      district_id: "53",
      name: "Xuja bargi MFY"
    },
    {
      id: "1677",
      district_id: "53",
      name: "Bobur MFY"
    },
    {
      id: "1678",
      district_id: "53",
      name: "B.Zokirov MFY"
    },
    {
      id: "1679",
      district_id: "53",
      name: "Temir yo`lchi MFY"
    },
    {
      id: "1680",
      district_id: "53",
      name: "A.Temur MFY"
    },
    {
      id: "1681",
      district_id: "53",
      name: "Istiklol MFY"
    },
    {
      id: "1682",
      district_id: "53",
      name: "Navzirabod MFY"
    },
    {
      id: "1683",
      district_id: "53",
      name: "B. Sharif MFY"
    },
    {
      id: "1684",
      district_id: "53",
      name: "Dustlik MFY"
    },
    {
      id: "1685",
      district_id: "53",
      name: "Beruniy MFY"
    },
    {
      id: "1686",
      district_id: "53",
      name: "Turkiston MFY"
    },
    {
      id: "1687",
      district_id: "53",
      name: "Ulugbek MFY"
    },
    {
      id: "1688",
      district_id: "53",
      name: "Mustakillik MFY"
    },
    {
      id: "1689",
      district_id: "54",
      name: "Eski kal`a MFY"
    },
    {
      id: "1690",
      district_id: "54",
      name: "Zarafshon MFY"
    },
    {
      id: "1691",
      district_id: "54",
      name: "Paxtakor MFY"
    },
    {
      id: "1692",
      district_id: "54",
      name: "Chekirchi MFY"
    },
    {
      id: "1693",
      district_id: "54",
      name: "Xujalar MFY"
    },
    {
      id: "1694",
      district_id: "54",
      name: "Dustlik MFY"
    },
    {
      id: "1695",
      district_id: "54",
      name: "Tinchlik MFY"
    },
    {
      id: "1696",
      district_id: "54",
      name: "Taykir MFY"
    },
    {
      id: "1697",
      district_id: "54",
      name: "Korakul QFY"
    },
    {
      id: "1698",
      district_id: "54",
      name: "Durman MFY"
    },
    {
      id: "1699",
      district_id: "54",
      name: "Tojikent MFY"
    },
    {
      id: "1700",
      district_id: "54",
      name: "Sayyot QFY"
    },
    {
      id: "1701",
      district_id: "54",
      name: "Solur MFY"
    },
    {
      id: "1702",
      district_id: "54",
      name: "Alikaxuja MFY"
    },
    {
      id: "1703",
      district_id: "54",
      name: "Paykent MFY"
    },
    {
      id: "1704",
      district_id: "54",
      name: "Dargali QFY"
    },
    {
      id: "1705",
      district_id: "54",
      name: "Dargabogi MFY"
    },
    {
      id: "1706",
      district_id: "54",
      name: "Shakarbek MFY"
    },
    {
      id: "1707",
      district_id: "54",
      name: "Jigachi QFY"
    },
    {
      id: "1708",
      district_id: "54",
      name: "Vaxm MFY"
    },
    {
      id: "1709",
      district_id: "54",
      name: "Korakulonchi MFY"
    },
    {
      id: "1710",
      district_id: "54",
      name: "Osiyo MFY"
    },
    {
      id: "1711",
      district_id: "54",
      name: "Koraxoji QFY"
    },
    {
      id: "1712",
      district_id: "54",
      name: "Dexkonobod MFY"
    },
    {
      id: "1713",
      district_id: "54",
      name: "Arabxona MFY"
    },
    {
      id: "1714",
      district_id: "54",
      name: "Kuyi Yangibozor QFY"
    },
    {
      id: "1715",
      district_id: "54",
      name: "Arna MFY"
    },
    {
      id: "1716",
      district_id: "54",
      name: "Koraun QFY"
    },
    {
      id: "1717",
      district_id: "54",
      name: "Mirzakal`a MFY"
    },
    {
      id: "1718",
      district_id: "54",
      name: "Yangi zamon MFY"
    },
    {
      id: "1719",
      district_id: "54",
      name: "Sort MFY"
    },
    {
      id: "1720",
      district_id: "54",
      name: "Chovli QFY"
    },
    {
      id: "1721",
      district_id: "54",
      name: "Mustakillik MFY"
    },
    {
      id: "1722",
      district_id: "54",
      name: "Mirob MFY"
    },
    {
      id: "1723",
      district_id: "54",
      name: "Ok oltin MFY"
    },
    {
      id: "1724",
      district_id: "54",
      name: "Mallasheyx QFY"
    },
    {
      id: "1725",
      district_id: "54",
      name: "Xujakon MFY"
    },
    {
      id: "1726",
      district_id: "54",
      name: "Ziyorat QFY"
    },
    {
      id: "1727",
      district_id: "54",
      name: "Regeydar MFY"
    },
    {
      id: "1728",
      district_id: "54",
      name: "Kozon QFY"
    },
    {
      id: "1729",
      district_id: "54",
      name: "Yangi turmush MFY"
    },
    {
      id: "1730",
      district_id: "54",
      name: "Istiklol MFY"
    },
    {
      id: "1731",
      district_id: "54",
      name: "Tashabbus MFY"
    },
    {
      id: "1732",
      district_id: "54",
      name: "Shuroobod QFY"
    },
    {
      id: "1733",
      district_id: "54",
      name: "Bandboshi QFY"
    },
    {
      id: "1734",
      district_id: "54",
      name: "Kulonchi QFY"
    },
    {
      id: "1735",
      district_id: "54",
      name: "Chandirobod QFY"
    },
    {
      id: "1736",
      district_id: "54",
      name: "Kuvvacha QFY"
    },
    {
      id: "1737",
      district_id: "54",
      name: "Yangi kal`a MFY"
    },
    {
      id: "1738",
      district_id: "55",
      name: "Al-Buxoriy MFY"
    },
    {
      id: "1739",
      district_id: "55",
      name: "Cho`lquvar MFY"
    },
    {
      id: "1740",
      district_id: "55",
      name: "Tinchlik MFY"
    },
    {
      id: "1741",
      district_id: "55",
      name: "Bo`ston MFY"
    },
    {
      id: "1742",
      district_id: "55",
      name: "Bo`zachi MFY"
    },
    {
      id: "1743",
      district_id: "55",
      name: "Navbahor QFY"
    },
    {
      id: "1744",
      district_id: "55",
      name: "Jarqoq QFY"
    },
    {
      id: "1745",
      district_id: "56",
      name: "Jumabozor QFY"
    },
    {
      id: "1746",
      district_id: "56",
      name: "Chovdur MFY"
    },
    {
      id: "1747",
      district_id: "56",
      name: "Muxtor MFY"
    },
    {
      id: "1748",
      district_id: "56",
      name: "Jumabozor MFY"
    },
    {
      id: "1749",
      district_id: "56",
      name: "Kesakli MFY"
    },
    {
      id: "1750",
      district_id: "56",
      name: "Soinkorovul QFY"
    },
    {
      id: "1751",
      district_id: "56",
      name: "Chorbog QFY"
    },
    {
      id: "1752",
      district_id: "56",
      name: "Asajam MFY"
    },
    {
      id: "1753",
      district_id: "56",
      name: "Usmonshayx MFY"
    },
    {
      id: "1754",
      district_id: "56",
      name: "Yoshbotir MFY"
    },
    {
      id: "1755",
      district_id: "56",
      name: "Chandir QFY"
    },
    {
      id: "1756",
      district_id: "56",
      name: "Buribek Chandir MFY"
    },
    {
      id: "1757",
      district_id: "56",
      name: "Ganchi Chandir MFY"
    },
    {
      id: "1758",
      district_id: "56",
      name: "Xidreyli MFY"
    },
    {
      id: "1759",
      district_id: "56",
      name: "Buston MFY"
    },
    {
      id: "1760",
      district_id: "56",
      name: "Baxoriston QFY"
    },
    {
      id: "1761",
      district_id: "56",
      name: "Kirtay"
    },
    {
      id: "1762",
      district_id: "56",
      name: "Uzbekiston MFY"
    },
    {
      id: "1763",
      district_id: "56",
      name: "Kul Chovdur MFY"
    },
    {
      id: "1764",
      district_id: "56",
      name: "Paxtakor QFY"
    },
    {
      id: "1765",
      district_id: "56",
      name: "Bayot MFY"
    },
    {
      id: "1766",
      district_id: "56",
      name: "Kumkashon MFY"
    },
    {
      id: "1767",
      district_id: "56",
      name: "Guliston QFY"
    },
    {
      id: "1768",
      district_id: "56",
      name: "Opshok MFY"
    },
    {
      id: "1769",
      district_id: "56",
      name: "Dilkor MFY"
    },
    {
      id: "1770",
      district_id: "56",
      name: "Xosabuyi MFY"
    },
    {
      id: "1771",
      district_id: "56",
      name: "Kirlishon QFY"
    },
    {
      id: "1772",
      district_id: "56",
      name: "Denov QFY"
    },
    {
      id: "1773",
      district_id: "56",
      name: "Kuk kuz MFY"
    },
    {
      id: "1774",
      district_id: "56",
      name: "Pichokchi MFY"
    },
    {
      id: "1775",
      district_id: "56",
      name: "Davlatboy MFY"
    },
    {
      id: "1776",
      district_id: "56",
      name: "Balandmachit"
    },
    {
      id: "1777",
      district_id: "56",
      name: "Talkonsayyot QFY"
    },
    {
      id: "1778",
      district_id: "56",
      name: "Ok oltin MFY"
    },
    {
      id: "1779",
      district_id: "56",
      name: "Fayzobod MFY"
    },
    {
      id: "1780",
      district_id: "56",
      name: "Burjok MFY"
    },
    {
      id: "1781",
      district_id: "56",
      name: "Solokorovul MFY"
    },
    {
      id: "1782",
      district_id: "56",
      name: "Arabxona MFY"
    },
    {
      id: "1783",
      district_id: "56",
      name: "Eski Olot MFY"
    },
    {
      id: "1784",
      district_id: "56",
      name: "Akkali MFY"
    },
    {
      id: "1785",
      district_id: "56",
      name: "Bunyodkor MFY"
    },
    {
      id: "1786",
      district_id: "56",
      name: "Xalifa MFY"
    },
    {
      id: "1787",
      district_id: "56",
      name: "Nonimas MFY"
    },
    {
      id: "1788",
      district_id: "57",
      name: "Yangibozor SHFY"
    },
    {
      id: "1789",
      district_id: "57",
      name: "Mustaqillik MFY"
    },
    {
      id: "1790",
      district_id: "57",
      name: "Chiqirchi MFY"
    },
    {
      id: "1791",
      district_id: "57",
      name: "Istiqbol QFY"
    },
    {
      id: "1792",
      district_id: "57",
      name: "Navbahor MFY"
    },
    {
      id: "1793",
      district_id: "57",
      name: "Bog`imuso QFY"
    },
    {
      id: "1794",
      district_id: "57",
      name: "Valfajr MFY"
    },
    {
      id: "1795",
      district_id: "57",
      name: "Ibn Sino QFY"
    },
    {
      id: "1796",
      district_id: "57",
      name: "Sadir MFY"
    },
    {
      id: "1797",
      district_id: "57",
      name: "Deycha MFY"
    },
    {
      id: "1798",
      district_id: "57",
      name: "Zandani QFY"
    },
    {
      id: "1799",
      district_id: "57",
      name: "Bobohoji MFY"
    },
    {
      id: "1800",
      district_id: "57",
      name: "Xorkash MFY"
    },
    {
      id: "1801",
      district_id: "57",
      name: "Qoraqalpoq QFY"
    },
    {
      id: "1802",
      district_id: "57",
      name: "Do`stlik MFY"
    },
    {
      id: "1803",
      district_id: "57",
      name: "Yangiobod MFY"
    },
    {
      id: "1804",
      district_id: "57",
      name: "Xo`lbor MFY"
    },
    {
      id: "1805",
      district_id: "57",
      name: "KalaymirishkorQFY"
    },
    {
      id: "1806",
      district_id: "57",
      name: "So`sana MFY "
    },
    {
      id: "1807",
      district_id: "57",
      name: "Talisobun MFY"
    },
    {
      id: "1808",
      district_id: "57",
      name: "Navoiy QFY "
    },
    {
      id: "1809",
      district_id: "57",
      name: "Uzbek MFY "
    },
    {
      id: "1810",
      district_id: "57",
      name: "Varaxsho QFY"
    },
    {
      id: "1811",
      district_id: "57",
      name: "Turkiston MFY "
    },
    {
      id: "1812",
      district_id: "57",
      name: "Kuyovxo`ja MFY"
    },
    {
      id: "1813",
      district_id: "57",
      name: "Obidxuja MFY "
    },
    {
      id: "1814",
      district_id: "57",
      name: "Navgoxon MFY"
    },
    {
      id: "1815",
      district_id: "57",
      name: "Shavgon SHFY "
    },
    {
      id: "1816",
      district_id: "57",
      name: "Chibogoni QFY "
    },
    {
      id: "1817",
      district_id: "57",
      name: "Uglon MFY "
    },
    {
      id: "1818",
      district_id: "57",
      name: "Quchoq MFY "
    },
    {
      id: "1819",
      district_id: "57",
      name: "Xurram MFY"
    },
    {
      id: "1820",
      district_id: "57",
      name: "Peshku QFY "
    },
    {
      id: "1821",
      district_id: "57",
      name: "Guliston MFY "
    },
    {
      id: "1822",
      district_id: "57",
      name: "Kamolot MFY "
    },
    {
      id: "1823",
      district_id: "57",
      name: "Jongeldi QFY"
    },
    {
      id: "1824",
      district_id: "58",
      name: "Romitan QFY"
    },
    {
      id: "1825",
      district_id: "58",
      name: "Tarnavut MFY"
    },
    {
      id: "1826",
      district_id: "58",
      name: "Attaron MFY"
    },
    {
      id: "1827",
      district_id: "58",
      name: "Mirishkor MFY"
    },
    {
      id: "1828",
      district_id: "58",
      name: "Bog`cha MFY"
    },
    {
      id: "1829",
      district_id: "58",
      name: "O`ba MFY"
    },
    {
      id: "1830",
      district_id: "58",
      name: "Qahramon MFY"
    },
    {
      id: "1831",
      district_id: "58",
      name: "Q,Chorbog` MFY"
    },
    {
      id: "1832",
      district_id: "58",
      name: "Mug`oncha MFY"
    },
    {
      id: "1833",
      district_id: "58",
      name: "Chelongu QFY"
    },
    {
      id: "1834",
      district_id: "58",
      name: "Chandir MFY"
    },
    {
      id: "1835",
      district_id: "58",
      name: "Toshrabot MFY"
    },
    {
      id: "1836",
      district_id: "58",
      name: "Urganjiyon MFY"
    },
    {
      id: "1837",
      district_id: "58",
      name: "Xosa MFY"
    },
    {
      id: "1838",
      district_id: "58",
      name: "Decha MFY"
    },
    {
      id: "1839",
      district_id: "58",
      name: "G`azberon MFY"
    },
    {
      id: "1840",
      district_id: "58",
      name: "Qo`rg`on QFY"
    },
    {
      id: "1841",
      district_id: "58",
      name: "Baxtiyorchi MFY"
    },
    {
      id: "1842",
      district_id: "58",
      name: "Azizon MFY"
    },
    {
      id: "1843",
      district_id: "58",
      name: "Samosiy MFY"
    },
    {
      id: "1844",
      district_id: "58",
      name: "O`zbekiston MFY"
    },
    {
      id: "1845",
      district_id: "58",
      name: "Bog`iturkon QFY"
    },
    {
      id: "1846",
      district_id: "58",
      name: "Qumrabot MFY"
    },
    {
      id: "1847",
      district_id: "58",
      name: "Bog`isaydon MFY"
    },
    {
      id: "1848",
      district_id: "58",
      name: "Xo`jaubbon MFY"
    },
    {
      id: "1849",
      district_id: "58",
      name: "Marziya MFY"
    },
    {
      id: "1850",
      district_id: "58",
      name: "Hofizrabot MFY"
    },
    {
      id: "1851",
      district_id: "58",
      name: "Hazortut MFY"
    },
    {
      id: "1852",
      district_id: "58",
      name: "Sho`rcha QFY"
    },
    {
      id: "1853",
      district_id: "58",
      name: "O`tabek MFY"
    },
    {
      id: "1854",
      district_id: "58",
      name: "Sho`robod MFY"
    },
    {
      id: "1855",
      district_id: "58",
      name: "Yomg`ir MFY"
    },
    {
      id: "1856",
      district_id: "58",
      name: "Mo`ri MFY"
    },
    {
      id: "1857",
      district_id: "58",
      name: "Sho`rcha MFY"
    },
    {
      id: "1858",
      district_id: "58",
      name: "Qoqishtuvon MFY"
    },
    {
      id: "1859",
      district_id: "58",
      name: "Poyjo`y MFY"
    },
    {
      id: "1860",
      district_id: "58",
      name: "Qizilravot QFY"
    },
    {
      id: "1861",
      district_id: "58",
      name: "Zarafshon M F Y"
    },
    {
      id: "1862",
      district_id: "58",
      name: "A.Navoiy M F Y"
    },
    {
      id: "1863",
      district_id: "58",
      name: "Ibn-Sino M F Y"
    },
    {
      id: "1864",
      district_id: "58",
      name: "Afrosiyob M F Y"
    },
    {
      id: "1865",
      district_id: "58",
      name: "Bobir M F Y"
    },
    {
      id: "1866",
      district_id: "58",
      name: "Guliston M F Y"
    },
    {
      id: "1867",
      district_id: "58",
      name: "Gazli M F Y"
    },
    {
      id: "1868",
      district_id: "58",
      name: "Baynalminal MFY"
    },
    {
      id: "1869",
      district_id: "59",
      name: "Durmen QFY"
    },
    {
      id: "1870",
      district_id: "59",
      name: "Sultonobod MFY"
    },
    {
      id: "1871",
      district_id: "59",
      name: "Temirchi MFY"
    },
    {
      id: "1872",
      district_id: "59",
      name: "Shibirgon MFY"
    },
    {
      id: "1873",
      district_id: "59",
      name: "Denav QFY"
    },
    {
      id: "1874",
      district_id: "59",
      name: "Kayragoch MFY"
    },
    {
      id: "1875",
      district_id: "59",
      name: "Pattaxon MFY"
    },
    {
      id: "1876",
      district_id: "59",
      name: "Navbaxor MFY"
    },
    {
      id: "1877",
      district_id: "59",
      name: "Nekkishi MFY"
    },
    {
      id: "1878",
      district_id: "59",
      name: "Juyrabod QFY"
    },
    {
      id: "1879",
      district_id: "59",
      name: "Xorin MFY"
    },
    {
      id: "1880",
      district_id: "59",
      name: "Kalon MFY"
    },
    {
      id: "1881",
      district_id: "59",
      name: "Juyrabod MFY"
    },
    {
      id: "1882",
      district_id: "59",
      name: "Kurishkent MFY"
    },
    {
      id: "1883",
      district_id: "59",
      name: "Dorigar MFY"
    },
    {
      id: "1884",
      district_id: "59",
      name: "Mingchinor MFY"
    },
    {
      id: "1885",
      district_id: "59",
      name: "Tezguzar QFY"
    },
    {
      id: "1886",
      district_id: "59",
      name: "Boboxaydar MFY"
    },
    {
      id: "1887",
      district_id: "59",
      name: "Paxtaobod MFY"
    },
    {
      id: "1888",
      district_id: "59",
      name: "Savrak QFY"
    },
    {
      id: "1889",
      district_id: "59",
      name: "Kotiyon MFY"
    },
    {
      id: "1890",
      district_id: "59",
      name: "Xorkash MFY"
    },
    {
      id: "1891",
      district_id: "59",
      name: "S.Jura QFY"
    },
    {
      id: "1892",
      district_id: "59",
      name: "Mirzokul MFY"
    },
    {
      id: "1893",
      district_id: "59",
      name: "Bobo-Ato MFY"
    },
    {
      id: "1894",
      district_id: "59",
      name: "Chandir QFY"
    },
    {
      id: "1895",
      district_id: "59",
      name: "Chitkaron MFY"
    },
    {
      id: "1896",
      district_id: "59",
      name: "Jushura MFY"
    },
    {
      id: "1897",
      district_id: "59",
      name: "Arabxona MFY"
    },
    {
      id: "1898",
      district_id: "59",
      name: "Sh.Xamroev QFY"
    },
    {
      id: "1899",
      district_id: "59",
      name: "Talisangobod MFY"
    },
    {
      id: "1900",
      district_id: "59",
      name: "Guliston MFY"
    },
    {
      id: "1901",
      district_id: "59",
      name: "Nurafshon MFY"
    },
    {
      id: "1902",
      district_id: "59",
      name: "Juynav QFY"
    },
    {
      id: "1903",
      district_id: "59",
      name: "Talisafed MFY"
    },
    {
      id: "1904",
      district_id: "59",
      name: "Gulomte MFY"
    },
    {
      id: "1905",
      district_id: "59",
      name: "Vardonze QFY"
    },
    {
      id: "1906",
      district_id: "59",
      name: "Yangikishlok MFY"
    },
    {
      id: "1907",
      district_id: "59",
      name: "K.Vardonze MFY"
    },
    {
      id: "1908",
      district_id: "59",
      name: "Bogiafzal QFY"
    },
    {
      id: "1909",
      district_id: "59",
      name: "Pashmon MFY"
    },
    {
      id: "1910",
      district_id: "59",
      name: "Jilvon MFY"
    },
    {
      id: "1911",
      district_id: "59",
      name: "Iskogare QFY"
    },
    {
      id: "1912",
      district_id: "59",
      name: "Yu.Iskogare MFY"
    },
    {
      id: "1913",
      district_id: "59",
      name: "Kuyi Chukurak"
    },
    {
      id: "1914",
      district_id: "59",
      name: "X.Orif MFY"
    },
    {
      id: "1915",
      district_id: "59",
      name: "Shodlik MFY"
    },
    {
      id: "1916",
      district_id: "59",
      name: "Kalmakon MFY"
    },
    {
      id: "1917",
      district_id: "59",
      name: "Savrak MFY"
    },
    {
      id: "1918",
      district_id: "59",
      name: "Zarchabek MFY"
    },
    {
      id: "1919",
      district_id: "60",
      name: "O.Vodiy QFY"
    },
    {
      id: "1920",
      district_id: "60",
      name: "Yangibo`ston QFY"
    },
    {
      id: "1921",
      district_id: "60",
      name: "Zarafshon QFY"
    },
    {
      id: "1922",
      district_id: "60",
      name: "Do`stlik QFY"
    },
    {
      id: "1923",
      district_id: "60",
      name: "Bo`ston QFY"
    },
    {
      id: "1924",
      district_id: "60",
      name: "Cho`lquvar QFY"
    },
    {
      id: "1925",
      district_id: "60",
      name: "Toshkent MFY"
    },
    {
      id: "1926",
      district_id: "60",
      name: "G`.G`ulom MFY"
    },
    {
      id: "1927",
      district_id: "60",
      name: "Bobur MFY"
    },
    {
      id: "1928",
      district_id: "60",
      name: "Forish MFY"
    },
    {
      id: "1929",
      district_id: "60",
      name: "Baxtli MFY"
    },
    {
      id: "1930",
      district_id: "60",
      name: "Chinobod MFY"
    },
    {
      id: "1931",
      district_id: "60",
      name: "Tinchlik MFY"
    },
    {
      id: "1932",
      district_id: "61",
      name: "O`smat SHFY"
    },
    {
      id: "1933",
      district_id: "61",
      name: "Qutlug`obod MFY"
    },
    {
      id: "1934",
      district_id: "61",
      name: "Oyqor QFY"
    },
    {
      id: "1935",
      district_id: "61",
      name: "Baxmal QFY"
    },
    {
      id: "1936",
      district_id: "61",
      name: "Mo`g`ol QFY"
    },
    {
      id: "1937",
      district_id: "61",
      name: "Oqtosh QFY"
    },
    {
      id: "1938",
      district_id: "61",
      name: "Do`stlik MFY"
    },
    {
      id: "1939",
      district_id: "61",
      name: "Novqa MFY"
    },
    {
      id: "1940",
      district_id: "61",
      name: "Saroy MFY"
    },
    {
      id: "1941",
      district_id: "61",
      name: "Tongotar QFY"
    },
    {
      id: "1942",
      district_id: "61",
      name: "Shodmon MFY"
    },
    {
      id: "1943",
      district_id: "61",
      name: "Qatortol MFY"
    },
    {
      id: "1944",
      district_id: "61",
      name: "Bo`ron MFY"
    },
    {
      id: "1945",
      district_id: "61",
      name: "Do`smat MFY"
    },
    {
      id: "1946",
      district_id: "61",
      name: "Muzbuloq MFY"
    },
    {
      id: "1947",
      district_id: "61",
      name: "Alamli MFY"
    },
    {
      id: "1948",
      district_id: "61",
      name: "Madaniyat MFY"
    },
    {
      id: "1949",
      district_id: "61",
      name: "G`allakon MFY"
    },
    {
      id: "1950",
      district_id: "61",
      name: "Yangibog` MFY"
    },
    {
      id: "1951",
      district_id: "61",
      name: "Toypoqsoy MFY"
    },
    {
      id: "1952",
      district_id: "61",
      name: "Nushkent MFY"
    },
    {
      id: "1953",
      district_id: "61",
      name: "Uzunbuloq QFY"
    },
    {
      id: "1954",
      district_id: "61",
      name: "Barlos QFY"
    },
    {
      id: "1955",
      district_id: "61",
      name: "Bog`ishamol QFY"
    },
    {
      id: "1956",
      district_id: "61",
      name: "Sangzor QFY"
    },
    {
      id: "1957",
      district_id: "61",
      name: "Gulbuloq QFY"
    },
    {
      id: "1958",
      district_id: "62",
      name: "Marjonbuloq SHFY"
    },
    {
      id: "1959",
      district_id: "62",
      name: "Qo`ytosh SHFY"
    },
    {
      id: "1960",
      district_id: "62",
      name: "Do`stlik MFY"
    },
    {
      id: "1961",
      district_id: "62",
      name: "Alamli MFY"
    },
    {
      id: "1962",
      district_id: "62",
      name: "Samarqand MFY"
    },
    {
      id: "1963",
      district_id: "62",
      name: "G`.G`ulom MFY"
    },
    {
      id: "1964",
      district_id: "62",
      name: "Olimlar MFY"
    },
    {
      id: "1965",
      district_id: "62",
      name: "Baxt MFY"
    },
    {
      id: "1966",
      district_id: "62",
      name: "Madaniyat QFY"
    },
    {
      id: "1967",
      district_id: "62",
      name: "Buloqboshi QFY"
    },
    {
      id: "1968",
      district_id: "62",
      name: "Guliston QFY"
    },
    {
      id: "1969",
      district_id: "62",
      name: "Tozaurug` QFY"
    },
    {
      id: "1970",
      district_id: "62",
      name: "Mirzabuloq QFY"
    },
    {
      id: "1971",
      district_id: "62",
      name: "Mulkush QFY"
    },
    {
      id: "1972",
      district_id: "62",
      name: "Moltob QFY"
    },
    {
      id: "1973",
      district_id: "62",
      name: "G`o`bdin QFY"
    },
    {
      id: "1974",
      district_id: "62",
      name: "Xonimqo`rg`on QFY"
    },
    {
      id: "1975",
      district_id: "62",
      name: "Qipchoqsuv QFY"
    },
    {
      id: "1976",
      district_id: "62",
      name: "Jiydali QFY"
    },
    {
      id: "1977",
      district_id: "62",
      name: "Korizquduq QFY"
    },
    {
      id: "1978",
      district_id: "62",
      name: "Gulchambar QFY"
    },
    {
      id: "1979",
      district_id: "62",
      name: "Ko`kbuloq QFY"
    },
    {
      id: "1980",
      district_id: "62",
      name: "Qashqabuloq QFY"
    },
    {
      id: "1981",
      district_id: "62",
      name: "Oqtosh MFY"
    },
    {
      id: "1982",
      district_id: "62",
      name: "Sarbozor MFY"
    },
    {
      id: "1983",
      district_id: "62",
      name: "Savruk MFY"
    },
    {
      id: "1984",
      district_id: "63",
      name: "A.Navoiy MFY"
    },
    {
      id: "1985",
      district_id: "63",
      name: "G`.G`ulom MFY"
    },
    {
      id: "1986",
      district_id: "63",
      name: "Xamza MFY"
    },
    {
      id: "1987",
      district_id: "63",
      name: "Xolxo`jaev MFY"
    },
    {
      id: "1988",
      district_id: "63",
      name: "Qahramon QFY"
    },
    {
      id: "1989",
      district_id: "63",
      name: "Yangiobod QFY"
    },
    {
      id: "1990",
      district_id: "63",
      name: "Saritepa QFY"
    },
    {
      id: "1991",
      district_id: "63",
      name: "Bunyodkor QFY"
    },
    {
      id: "1992",
      district_id: "63",
      name: "Istiqlol QFY"
    },
    {
      id: "1993",
      district_id: "63",
      name: "Navro`z QFY"
    },
    {
      id: "1994",
      district_id: "63",
      name: "Bog`zor QFY"
    },
    {
      id: "1995",
      district_id: "63",
      name: "Mevazor QFY"
    },
    {
      id: "1996",
      district_id: "64",
      name: "Ziyokor QFY"
    },
    {
      id: "1997",
      district_id: "64",
      name: "Ziyokor MFY"
    },
    {
      id: "1998",
      district_id: "64",
      name: "Xavastlik MFY"
    },
    {
      id: "1999",
      district_id: "64",
      name: "Jizzaxlik MFY"
    },
    {
      id: "2000",
      district_id: "64",
      name: "Sovungarlik MFY"
    },
    {
      id: "2001",
      district_id: "64",
      name: "Qulama QFY"
    },
    {
      id: "2002",
      district_id: "64",
      name: "Qo`shko`prik MFY"
    },
    {
      id: "2003",
      district_id: "64",
      name: "Toshkentlik MFY"
    },
    {
      id: "2004",
      district_id: "64",
      name: "Mulkanlik MFY"
    },
    {
      id: "2005",
      district_id: "64",
      name: "Qatortol MFY"
    },
    {
      id: "2006",
      district_id: "64",
      name: "Qizlartepa MFY"
    },
    {
      id: "2007",
      district_id: "64",
      name: "Paxtaobod QFY"
    },
    {
      id: "2008",
      district_id: "64",
      name: "Saraylik MFY"
    },
    {
      id: "2009",
      district_id: "64",
      name: "Yaxtanlik MFY"
    },
    {
      id: "2010",
      district_id: "64",
      name: "Eski Toshkentlik MFY"
    },
    {
      id: "2011",
      district_id: "64",
      name: "Gandumtosh QFY"
    },
    {
      id: "2012",
      district_id: "64",
      name: "Kuyovboshi MFY"
    },
    {
      id: "2013",
      district_id: "64",
      name: "Gandumtosh MFY"
    },
    {
      id: "2014",
      district_id: "64",
      name: "Xamzaobod QFY"
    },
    {
      id: "2015",
      district_id: "64",
      name: "Ittifoq MFY"
    },
    {
      id: "2016",
      district_id: "64",
      name: "Olmachi MFY"
    },
    {
      id: "2017",
      district_id: "64",
      name: "G`ozg`ontepa MFY"
    },
    {
      id: "2018",
      district_id: "64",
      name: "Pastki So`loqli MFY"
    },
    {
      id: "2019",
      district_id: "64",
      name: "Oq oltin QFY"
    },
    {
      id: "2020",
      district_id: "64",
      name: "Qorayantoq MFY"
    },
    {
      id: "2021",
      district_id: "64",
      name: "Yangiobod MFY"
    },
    {
      id: "2022",
      district_id: "64",
      name: "Tuyoqli MFY"
    },
    {
      id: "2023",
      district_id: "64",
      name: "Fayzobod MFY"
    },
    {
      id: "2024",
      district_id: "64",
      name: "Xayrobod QFY"
    },
    {
      id: "2025",
      district_id: "64",
      name: "Xayrobod MFY"
    },
    {
      id: "2026",
      district_id: "64",
      name: "Kattaqishloq MFY"
    },
    {
      id: "2027",
      district_id: "64",
      name: "Sharilloq MFY"
    },
    {
      id: "2028",
      district_id: "64",
      name: "Uch tepa QFY"
    },
    {
      id: "2029",
      district_id: "64",
      name: "Uch tepa MFY"
    },
    {
      id: "2030",
      district_id: "64",
      name: "Yangiobod MFY"
    },
    {
      id: "2031",
      district_id: "64",
      name: "Yangihayot MFY"
    },
    {
      id: "2032",
      district_id: "64",
      name: "Samarqandquduq QFY"
    },
    {
      id: "2033",
      district_id: "64",
      name: "Qangli QFY"
    },
    {
      id: "2034",
      district_id: "64",
      name: "Qangli MFY"
    },
    {
      id: "2035",
      district_id: "64",
      name: "Yangiobod MFY"
    },
    {
      id: "2036",
      district_id: "64",
      name: "Yoyilma MFY"
    },
    {
      id: "2037",
      district_id: "64",
      name: "Toqchilik QFY"
    },
    {
      id: "2038",
      district_id: "64",
      name: "Toqchilik MFY"
    },
    {
      id: "2039",
      district_id: "64",
      name: "Ravalliq MFY"
    },
    {
      id: "2040",
      district_id: "64",
      name: "Ravalliq - 1 MFY"
    },
    {
      id: "2041",
      district_id: "64",
      name: "Ravot QFY"
    },
    {
      id: "2042",
      district_id: "64",
      name: "Umar MFY"
    },
    {
      id: "2043",
      district_id: "64",
      name: "Nonsingil MFY"
    },
    {
      id: "2044",
      district_id: "64",
      name: "Uchqiz yangiqishloq MFY"
    },
    {
      id: "2045",
      district_id: "64",
      name: "Qo`shbarmoq QFY"
    },
    {
      id: "2046",
      district_id: "64",
      name: "Qaxramon MFY"
    },
    {
      id: "2047",
      district_id: "64",
      name: "Qulpisar MFY"
    },
    {
      id: "2048",
      district_id: "64",
      name: "Ko`rpasoy MFY"
    },
    {
      id: "2049",
      district_id: "65",
      name: "Ittifoq MFY"
    },
    {
      id: "2050",
      district_id: "65",
      name: "Yoshlik MFY"
    },
    {
      id: "2051",
      district_id: "65",
      name: "Qaliya MFY"
    },
    {
      id: "2052",
      district_id: "65",
      name: "So`loqli MFY"
    },
    {
      id: "2053",
      district_id: "65",
      name: "Bobur MFY"
    },
    {
      id: "2054",
      district_id: "65",
      name: "Zargarlik MFY"
    },
    {
      id: "2055",
      district_id: "65",
      name: "Xalqabod MFY"
    },
    {
      id: "2056",
      district_id: "65",
      name: "Olmazor MFY"
    },
    {
      id: "2057",
      district_id: "65",
      name: "Qassoblik MFY"
    },
    {
      id: "2058",
      district_id: "65",
      name: "O`ratepalik MFY"
    },
    {
      id: "2059",
      district_id: "65",
      name: "X.Abdujabborov MFY"
    },
    {
      id: "2060",
      district_id: "65",
      name: "Oqqo`rg`onlik MFY"
    },
    {
      id: "2061",
      district_id: "65",
      name: "Toshloq MFY"
    },
    {
      id: "2062",
      district_id: "65",
      name: "Zilol MFY"
    },
    {
      id: "2063",
      district_id: "65",
      name: "Jizzaxlik MFY"
    },
    {
      id: "2064",
      district_id: "65",
      name: "Ravalliq MFY"
    },
    {
      id: "2065",
      district_id: "65",
      name: "Xamzaobod MFY"
    },
    {
      id: "2066",
      district_id: "65",
      name: "Sayiljoyi MFY"
    },
    {
      id: "2067",
      district_id: "65",
      name: "Kimyogar MFY"
    },
    {
      id: "2068",
      district_id: "65",
      name: "Ko`tarma MFY"
    },
    {
      id: "2069",
      district_id: "65",
      name: "Madaniyat MFY"
    },
    {
      id: "2070",
      district_id: "65",
      name: "Ulug`bek MFY"
    },
    {
      id: "2071",
      district_id: "65",
      name: "Tinchlik MFY"
    },
    {
      id: "2072",
      district_id: "65",
      name: "Xayrobod MFY"
    },
    {
      id: "2073",
      district_id: "65",
      name: "Sayxon MFY"
    },
    {
      id: "2074",
      district_id: "65",
      name: "Qipchoq MFY"
    },
    {
      id: "2075",
      district_id: "65",
      name: "Jelli-gulli MFY"
    },
    {
      id: "2076",
      district_id: "65",
      name: "Navro`z MFY"
    },
    {
      id: "2077",
      district_id: "65",
      name: "Bunyod MFY"
    },
    {
      id: "2078",
      district_id: "65",
      name: "H.Olimjon MFY"
    },
    {
      id: "2079",
      district_id: "65",
      name: "A.Navoiy MFY"
    },
    {
      id: "2080",
      district_id: "65",
      name: "Sangzor MFY"
    },
    {
      id: "2081",
      district_id: "65",
      name: "Do`stlik MFY"
    },
    {
      id: "2082",
      district_id: "65",
      name: "Bunyodkor MFY"
    },
    {
      id: "2083",
      district_id: "66",
      name: "Mustaqillik MFY"
    },
    {
      id: "2084",
      district_id: "66",
      name: "Oybek MFY"
    },
    {
      id: "2085",
      district_id: "66",
      name: "Tinchlik MFY"
    },
    {
      id: "2086",
      district_id: "66",
      name: "Oqbuloq MFY"
    },
    {
      id: "2087",
      district_id: "66",
      name: "Shodlik MFY"
    },
    {
      id: "2088",
      district_id: "66",
      name: "Do`stlik MFY"
    },
    {
      id: "2089",
      district_id: "66",
      name: "Navro`z MFY"
    },
    {
      id: "2090",
      district_id: "66",
      name: "Yangiobod MFY"
    },
    {
      id: "2091",
      district_id: "66",
      name: "Lalmikor QFY"
    },
    {
      id: "2092",
      district_id: "66",
      name: "Taraqqiyot MFY"
    },
    {
      id: "2093",
      district_id: "66",
      name: "Ravot MFY"
    },
    {
      id: "2094",
      district_id: "66",
      name: "Navoiy MFY"
    },
    {
      id: "2095",
      district_id: "66",
      name: "Yangihayot MFY"
    },
    {
      id: "2096",
      district_id: "66",
      name: "Yangikent QFY"
    },
    {
      id: "2097",
      district_id: "66",
      name: "Nurafshon MFY"
    },
    {
      id: "2098",
      district_id: "66",
      name: "Adirobod QFY"
    },
    {
      id: "2099",
      district_id: "66",
      name: "Tozaurug` MFY"
    },
    {
      id: "2100",
      district_id: "66",
      name: "Andijon QFY"
    },
    {
      id: "2101",
      district_id: "66",
      name: "Sharq yulduzi QFY"
    },
    {
      id: "2102",
      district_id: "67",
      name: "Zafarobod SHFY"
    },
    {
      id: "2103",
      district_id: "67",
      name: "Bo`ston MFY"
    },
    {
      id: "2104",
      district_id: "67",
      name: "Samarqand MFY"
    },
    {
      id: "2105",
      district_id: "67",
      name: "S.Sindarov QFY"
    },
    {
      id: "2106",
      district_id: "67",
      name: "Yorqin QFY"
    },
    {
      id: "2107",
      district_id: "67",
      name: "Birlik QFY"
    },
    {
      id: "2108",
      district_id: "67",
      name: "Xulkar SHFY"
    },
    {
      id: "2109",
      district_id: "67",
      name: "Lolazor QFY"
    },
    {
      id: "2110",
      district_id: "67",
      name: "Chimqo`rg`on QFY"
    },
    {
      id: "2111",
      district_id: "67",
      name: "Temiryazov QFY"
    },
    {
      id: "2112",
      district_id: "68",
      name: "Ulug`bek MFY"
    },
    {
      id: "2113",
      district_id: "68",
      name: "Xamza MFY"
    },
    {
      id: "2114",
      district_id: "68",
      name: "Beruniy MFY"
    },
    {
      id: "2115",
      district_id: "68",
      name: "Paxtakor MFY"
    },
    {
      id: "2116",
      district_id: "68",
      name: "O`zbekiston MFY"
    },
    {
      id: "2117",
      district_id: "68",
      name: "Qoratepa MFY"
    },
    {
      id: "2118",
      district_id: "68",
      name: "Baxt MFY"
    },
    {
      id: "2119",
      district_id: "68",
      name: "H.Olimjon MFY"
    },
    {
      id: "2120",
      district_id: "68",
      name: "Zomin SHFY"
    },
    {
      id: "2121",
      district_id: "68",
      name: "Bog`ishamol MFY"
    },
    {
      id: "2122",
      district_id: "68",
      name: "Birlik MFY"
    },
    {
      id: "2123",
      district_id: "68",
      name: "Kattabog` MFY"
    },
    {
      id: "2124",
      district_id: "68",
      name: "Qayirma MFY"
    },
    {
      id: "2125",
      district_id: "68",
      name: "Navbahor MFY"
    },
    {
      id: "2126",
      district_id: "68",
      name: "Oqtepa MFY"
    },
    {
      id: "2127",
      district_id: "68",
      name: "S.Rahimov MFY"
    },
    {
      id: "2128",
      district_id: "68",
      name: "Sh.Rashidov MFY"
    },
    {
      id: "2129",
      district_id: "68",
      name: "Qo`rg`on MFY"
    },
    {
      id: "2130",
      district_id: "68",
      name: "G`.G`ulom MFY"
    },
    {
      id: "2131",
      district_id: "68",
      name: "Beshkubi QFY"
    },
    {
      id: "2132",
      district_id: "68",
      name: "Gulshan QFY"
    },
    {
      id: "2133",
      district_id: "68",
      name: "Teshiktepa MFY"
    },
    {
      id: "2134",
      district_id: "68",
      name: "Duoba QFY"
    },
    {
      id: "2135",
      district_id: "68",
      name: "Istiqlol QFY"
    },
    {
      id: "2136",
      district_id: "68",
      name: "Navoiy QFY"
    },
    {
      id: "2137",
      district_id: "68",
      name: "Qo`shtol MFY"
    },
    {
      id: "2138",
      district_id: "68",
      name: "Pishog`ar MFY"
    },
    {
      id: "2139",
      district_id: "68",
      name: "Yoshlik MFY"
    },
    {
      id: "2140",
      district_id: "68",
      name: "Achchi MFY"
    },
    {
      id: "2141",
      district_id: "68",
      name: "Obi-hayot QFY"
    },
    {
      id: "2142",
      district_id: "68",
      name: "Tinchlik QFY"
    },
    {
      id: "2143",
      district_id: "68",
      name: "Guliston MFY"
    },
    {
      id: "2144",
      district_id: "68",
      name: "Toshkesgan QFY"
    },
    {
      id: "2145",
      district_id: "68",
      name: "Chorvador QFY"
    },
    {
      id: "2146",
      district_id: "68",
      name: "Turkman MFY"
    },
    {
      id: "2147",
      district_id: "68",
      name: "Shirin QFY"
    },
    {
      id: "2148",
      district_id: "68",
      name: "G`allakor QFY"
    },
    {
      id: "2149",
      district_id: "68",
      name: "To`rttom MFY"
    },
    {
      id: "2150",
      district_id: "68",
      name: "Laylak uya MFY"
    },
    {
      id: "2151",
      district_id: "68",
      name: "Yangi hayot QFY"
    },
    {
      id: "2152",
      district_id: "68",
      name: "Chilonzor MFY"
    },
    {
      id: "2153",
      district_id: "69",
      name: "Еrjar MFY"
    },
    {
      id: "2154",
      district_id: "69",
      name: "Mustaqillik MFY"
    },
    {
      id: "2155",
      district_id: "69",
      name: "Do`stlik MFY"
    },
    {
      id: "2156",
      district_id: "69",
      name: "G`alaba MFY"
    },
    {
      id: "2157",
      district_id: "69",
      name: "Ipak yo`li QFY"
    },
    {
      id: "2158",
      district_id: "69",
      name: "Mirzadala QFY"
    },
    {
      id: "2159",
      district_id: "69",
      name: "Toshkent QFY"
    },
    {
      id: "2160",
      district_id: "69",
      name: "Yangidala QFY"
    },
    {
      id: "2161",
      district_id: "69",
      name: "Paxtazor QFY"
    },
    {
      id: "2162",
      district_id: "69",
      name: "O`zbekiston QFY"
    },
    {
      id: "2163",
      district_id: "69",
      name: "Gulzor QFY"
    },
    {
      id: "2164",
      district_id: "69",
      name: "Bog`bon QFY"
    },
    {
      id: "2165",
      district_id: "70",
      name: "Do`stlik MFY"
    },
    {
      id: "2166",
      district_id: "70",
      name: "Dilorom MFY"
    },
    {
      id: "2167",
      district_id: "70",
      name: "Toshkent MFY"
    },
    {
      id: "2168",
      district_id: "70",
      name: "Samarqand MFY"
    },
    {
      id: "2169",
      district_id: "70",
      name: "Suvonobod MFY"
    },
    {
      id: "2170",
      district_id: "70",
      name: "G`alaba MFY"
    },
    {
      id: "2171",
      district_id: "70",
      name: "Oltinko`l MFY"
    },
    {
      id: "2172",
      district_id: "70",
      name: "A.Ikromov QFY"
    },
    {
      id: "2173",
      district_id: "70",
      name: "Paxtakor QFY"
    },
    {
      id: "2174",
      district_id: "70",
      name: "Samarqand QFY"
    },
    {
      id: "2175",
      district_id: "70",
      name: "Mingchinor QFY"
    },
    {
      id: "2176",
      district_id: "70",
      name: "Chamanzor QFY"
    },
    {
      id: "2177",
      district_id: "70",
      name: "Olmazor QFY"
    },
    {
      id: "2178",
      district_id: "70",
      name: "Oq-buloq QFY"
    },
    {
      id: "2179",
      district_id: "71",
      name: "Yangiqishloq SHFY"
    },
    {
      id: "2180",
      district_id: "71",
      name: "E.Kamolov MFY"
    },
    {
      id: "2181",
      district_id: "71",
      name: "Bog`don MFY"
    },
    {
      id: "2182",
      district_id: "71",
      name: "O`zbekiston MFY"
    },
    {
      id: "2183",
      district_id: "71",
      name: "Uchquloch SHFY"
    },
    {
      id: "2184",
      district_id: "71",
      name: "Xonbandi MFY"
    },
    {
      id: "2185",
      district_id: "71",
      name: "Omonkeldi QFY"
    },
    {
      id: "2186",
      district_id: "71",
      name: "Darboza QFY"
    },
    {
      id: "2187",
      district_id: "71",
      name: "Arnasoy QFY"
    },
    {
      id: "2188",
      district_id: "71",
      name: "Qizilqum QFY"
    },
    {
      id: "2189",
      district_id: "71",
      name: "Aydarovul MFY"
    },
    {
      id: "2190",
      district_id: "71",
      name: "Egizbuloq QFY"
    },
    {
      id: "2191",
      district_id: "71",
      name: "Oqtom MFY"
    },
    {
      id: "2192",
      district_id: "71",
      name: "Egizbuloq MFY"
    },
    {
      id: "2193",
      district_id: "71",
      name: "Nurak MFY"
    },
    {
      id: "2194",
      district_id: "71",
      name: "Garasha QFY"
    },
    {
      id: "2195",
      district_id: "71",
      name: "Garasha MFY"
    },
    {
      id: "2196",
      district_id: "71",
      name: "Ilonli MFY"
    },
    {
      id: "2197",
      district_id: "71",
      name: "Forish QFY"
    },
    {
      id: "2198",
      district_id: "71",
      name: "Qo`lba MFY"
    },
    {
      id: "2199",
      district_id: "71",
      name: "Uchma MFY"
    },
    {
      id: "2200",
      district_id: "71",
      name: "Osmonsoy QFY"
    },
    {
      id: "2201",
      district_id: "71",
      name: "Osmonsoy MFY"
    },
    {
      id: "2202",
      district_id: "71",
      name: "Sayyod MFY"
    },
    {
      id: "2203",
      district_id: "71",
      name: "Oqtepa MFY"
    },
    {
      id: "2204",
      district_id: "71",
      name: "Qorabdol QFY"
    },
    {
      id: "2205",
      district_id: "71",
      name: "Qorabdol ota MFY"
    },
    {
      id: "2206",
      district_id: "71",
      name: "Narvon MFY"
    },
    {
      id: "2207",
      district_id: "71",
      name: "Yassikechuv MFY"
    },
    {
      id: "2208",
      district_id: "71",
      name: "Mustaqillik MFY"
    },
    {
      id: "2209",
      district_id: "71",
      name: "O`xum QFY"
    },
    {
      id: "2210",
      district_id: "71",
      name: "O`xum MFY"
    },
    {
      id: "2211",
      district_id: "72",
      name: "Xovos QFY"
    },
    {
      id: "2212",
      district_id: "72",
      name: "Puchug`oy MFY"
    },
    {
      id: "2213",
      district_id: "72",
      name: "Balandchaqir MFY"
    },
    {
      id: "2214",
      district_id: "72",
      name: "Sovot QFY"
    },
    {
      id: "2215",
      district_id: "72",
      name: "Sovot MFY"
    },
    {
      id: "2216",
      district_id: "72",
      name: "Sarmich QFY"
    },
    {
      id: "2217",
      district_id: "72",
      name: "Yuqori Sarmich MFY"
    },
    {
      id: "2218",
      district_id: "72",
      name: "Pastki sarmich MFY"
    },
    {
      id: "2219",
      district_id: "72",
      name: "Xo`jamushkent QFY"
    },
    {
      id: "2220",
      district_id: "72",
      name: "Erganakli MFY"
    },
    {
      id: "2221",
      district_id: "72",
      name: "Xovotog` QFY"
    },
    {
      id: "2222",
      district_id: "72",
      name: "Qo`shqand MFY"
    },
    {
      id: "2223",
      district_id: "72",
      name: "Yangiobod MFY"
    },
    {
      id: "2224",
      district_id: "73",
      name: "Batosh QFY"
    },
    {
      id: "2225",
      district_id: "73",
      name: "Mo`minobod MFY"
    },
    {
      id: "2226",
      district_id: "73",
      name: "Bo`ston QFY"
    },
    {
      id: "2227",
      district_id: "73",
      name: "Avѓonboѓ MFY"
    },
    {
      id: "2228",
      district_id: "73",
      name: "Guliston QFY"
    },
    {
      id: "2229",
      district_id: "73",
      name: "Do`ltali MFY"
    },
    {
      id: "2230",
      district_id: "73",
      name: "Toshguzar MFY"
    },
    {
      id: "2231",
      district_id: "73",
      name: "Chugurtma QFY"
    },
    {
      id: "2232",
      district_id: "73",
      name: "Gulshan QFY"
    },
    {
      id: "2233",
      district_id: "73",
      name: "Jarariq MFY"
    },
    {
      id: "2234",
      district_id: "73",
      name: "Yonqishloq MFY"
    },
    {
      id: "2235",
      district_id: "73",
      name: "Yakkadaraxt MFY"
    },
    {
      id: "2236",
      district_id: "73",
      name: "Zarbdor QFY"
    },
    {
      id: "2237",
      district_id: "73",
      name: "Sovliѓor MFY"
    },
    {
      id: "2238",
      district_id: "73",
      name: "Qovchin MFY"
    },
    {
      id: "2239",
      district_id: "73",
      name: "Qorako`l QFY"
    },
    {
      id: "2240",
      district_id: "73",
      name: "Eshonquduq MFY"
    },
    {
      id: "2241",
      district_id: "73",
      name: "Qo`shtepa QFY"
    },
    {
      id: "2242",
      district_id: "73",
      name: "Apardi MFY"
    },
    {
      id: "2243",
      district_id: "73",
      name: "Yarѓunchi MFY"
    },
    {
      id: "2244",
      district_id: "73",
      name: "Mexnatobod QFY"
    },
    {
      id: "2245",
      district_id: "73",
      name: "Sovboѓ MFY"
    },
    {
      id: "2246",
      district_id: "73",
      name: "Ѓarmiston MFY"
    },
    {
      id: "2247",
      district_id: "73",
      name: "Cho`michli MFY"
    },
    {
      id: "2248",
      district_id: "73",
      name: "Pachkamar QFY"
    },
    {
      id: "2249",
      district_id: "73",
      name: "Xalqobod QFY"
    },
    {
      id: "2250",
      district_id: "73",
      name: "Xalqobod MFY"
    },
    {
      id: "2251",
      district_id: "73",
      name: "Shakarbuloq QFY"
    },
    {
      id: "2252",
      district_id: "73",
      name: "Yangikent MFY"
    },
    {
      id: "2253",
      district_id: "73",
      name: "Sherali QFY"
    },
    {
      id: "2254",
      district_id: "73",
      name: "Xo`jaguzar MFY"
    },
    {
      id: "2255",
      district_id: "73",
      name: "Chanoq MFY"
    },
    {
      id: "2256",
      district_id: "73",
      name: "Iqbol Egamberdieva"
    },
    {
      id: "2257",
      district_id: "73",
      name: "Navro`z MFY"
    },
    {
      id: "2258",
      district_id: "73",
      name: "Sobir Raћimov"
    },
    {
      id: "2259",
      district_id: "73",
      name: "Paxtazor MFY"
    },
    {
      id: "2260",
      district_id: "73",
      name: "Amir Temur MFY"
    },
    {
      id: "2261",
      district_id: "73",
      name: "Ergash Qurbonov"
    },
    {
      id: "2262",
      district_id: "73",
      name: "Tinchlik MFY"
    },
    {
      id: "2263",
      district_id: "73",
      name: "Mustakillik MFY"
    },
    {
      id: "2264",
      district_id: "74",
      name: "Dexkonobod SHFY"
    },
    {
      id: "2265",
      district_id: "74",
      name: "Aerodrom MFY"
    },
    {
      id: "2266",
      district_id: "74",
      name: "Oxunbobonv MFY"
    },
    {
      id: "2267",
      district_id: "74",
      name: "Bibikorasoch QFY"
    },
    {
      id: "2268",
      district_id: "74",
      name: "Gumbulok MFY"
    },
    {
      id: "2269",
      district_id: "74",
      name: "Beshbulok MFY"
    },
    {
      id: "2270",
      district_id: "74",
      name: "Otkamar MFY"
    },
    {
      id: "2271",
      district_id: "74",
      name: "Korashina QFY"
    },
    {
      id: "2272",
      district_id: "74",
      name: "Okrabot QFY"
    },
    {
      id: "2273",
      district_id: "74",
      name: "K.Baxshi MFY"
    },
    {
      id: "2274",
      district_id: "74",
      name: "Nodira MFY"
    },
    {
      id: "2275",
      district_id: "74",
      name: "M.Tursunzoda MFY"
    },
    {
      id: "2276",
      district_id: "74",
      name: "Ayridevol MFY"
    },
    {
      id: "2277",
      district_id: "74",
      name: "Kizilcha QFY"
    },
    {
      id: "2278",
      district_id: "74",
      name: "Kurgontosh QFY chegara xudud"
    },
    {
      id: "2279",
      district_id: "74",
      name: "Okirtma QFY (chegara xudud)"
    },
    {
      id: "2280",
      district_id: "74",
      name: "Torkapchugay MFY (chegara xudud)"
    },
    {
      id: "2281",
      district_id: "74",
      name: "Beshkuton QFY"
    },
    {
      id: "2282",
      district_id: "74",
      name: "Guroti MFY"
    },
    {
      id: "2283",
      district_id: "74",
      name: "Oktosh QFY"
    },
    {
      id: "2284",
      district_id: "74",
      name: "Chalika MFY"
    },
    {
      id: "2285",
      district_id: "74",
      name: "Boshchorbog QFY"
    },
    {
      id: "2286",
      district_id: "74",
      name: "Chashmamiron MFY"
    },
    {
      id: "2287",
      district_id: "74",
      name: "Chilgaz MFY"
    },
    {
      id: "2288",
      district_id: "74",
      name: "Sarchashma MFY"
    },
    {
      id: "2289",
      district_id: "74",
      name: "Bozortepa QFY"
    },
    {
      id: "2290",
      district_id: "74",
      name: "Obod MFY"
    },
    {
      id: "2291",
      district_id: "74",
      name: "Obirovon QFY"
    },
    {
      id: "2292",
      district_id: "74",
      name: "Okmachit MFY"
    },
    {
      id: "2293",
      district_id: "74",
      name: "Duob QFY"
    },
    {
      id: "2294",
      district_id: "74",
      name: "Okkishlok QFY"
    },
    {
      id: "2295",
      district_id: "74",
      name: "Oybek MFY"
    },
    {
      id: "2296",
      district_id: "74",
      name: "Koluvdor MFY"
    },
    {
      id: "2297",
      district_id: "74",
      name: "Buston MFY"
    },
    {
      id: "2298",
      district_id: "75",
      name: "Chim QFY"
    },
    {
      id: "2299",
      district_id: "75",
      name: "Kushkapa MFY"
    },
    {
      id: "2300",
      district_id: "75",
      name: "Gishtli MFY"
    },
    {
      id: "2301",
      district_id: "75",
      name: "Gagarin MFY"
    },
    {
      id: "2302",
      district_id: "75",
      name: "Kiziltepa QFY"
    },
    {
      id: "2303",
      district_id: "75",
      name: "Kishlik MFY"
    },
    {
      id: "2304",
      district_id: "75",
      name: "Bobirtepa MFY"
    },
    {
      id: "2305",
      district_id: "75",
      name: "Tukboy QFY"
    },
    {
      id: "2306",
      district_id: "75",
      name: "Berdoli MFY"
    },
    {
      id: "2307",
      district_id: "75",
      name: "Boyburi MFY"
    },
    {
      id: "2308",
      district_id: "75",
      name: "Jonbuzsoy QFY"
    },
    {
      id: "2309",
      district_id: "75",
      name: "Jonbuz MFY"
    },
    {
      id: "2310",
      district_id: "75",
      name: "Mexr MFY"
    },
    {
      id: "2311",
      district_id: "75",
      name: "Kamay QFY"
    },
    {
      id: "2312",
      district_id: "75",
      name: "Okguzar MFY"
    },
    {
      id: "2313",
      district_id: "75",
      name: "Еrtepa QFY"
    },
    {
      id: "2314",
      district_id: "75",
      name: "Oynakul MFY"
    },
    {
      id: "2315",
      district_id: "75",
      name: "Korabog QFY"
    },
    {
      id: "2316",
      district_id: "75",
      name: "Balandchayla MFY"
    },
    {
      id: "2317",
      district_id: "75",
      name: "Kovchin MFY"
    },
    {
      id: "2318",
      district_id: "75",
      name: "Rabod QFY"
    },
    {
      id: "2319",
      district_id: "75",
      name: "Uzun MFY"
    },
    {
      id: "2320",
      district_id: "75",
      name: "Gulshan MFY"
    },
    {
      id: "2321",
      district_id: "75",
      name: "Kaptarxona MFY"
    },
    {
      id: "2322",
      district_id: "75",
      name: "Loykasoy QFY"
    },
    {
      id: "2323",
      district_id: "75",
      name: "Badaxshon MFY"
    },
    {
      id: "2324",
      district_id: "75",
      name: "Qoratepa QFY"
    },
    {
      id: "2325",
      district_id: "75",
      name: "Mayda MFY"
    },
    {
      id: "2326",
      district_id: "75",
      name: "Azlartepa MFY"
    },
    {
      id: "2327",
      district_id: "75",
      name: "Kukbulok QFY"
    },
    {
      id: "2328",
      district_id: "75",
      name: "Kattaura MFY"
    },
    {
      id: "2329",
      district_id: "75",
      name: "Changak MFY"
    },
    {
      id: "2330",
      district_id: "75",
      name: "Kizilkishlok MFY"
    },
    {
      id: "2331",
      district_id: "75",
      name: "Urtadara MFY"
    },
    {
      id: "2332",
      district_id: "75",
      name: "Mangit MFY"
    },
    {
      id: "2333",
      district_id: "75",
      name: "Obod MFY"
    },
    {
      id: "2334",
      district_id: "75",
      name: "Oybek MFY"
    },
    {
      id: "2335",
      district_id: "75",
      name: "F.Xujaev MFY"
    },
    {
      id: "2336",
      district_id: "75",
      name: "Samarkand MFY"
    },
    {
      id: "2337",
      district_id: "75",
      name: "Korasuv MFY"
    },
    {
      id: "2338",
      district_id: "75",
      name: "Uzbekiston MFY"
    },
    {
      id: "2339",
      district_id: "75",
      name: "Ulugbek MFY"
    },
    {
      id: "2340",
      district_id: "75",
      name: "Navoiy MFY"
    },
    {
      id: "2341",
      district_id: "75",
      name: "Ibn-Sino MFY"
    },
    {
      id: "2342",
      district_id: "75",
      name: "Olmazor MFY"
    },
    {
      id: "2343",
      district_id: "75",
      name: "SarbozorMFY"
    },
    {
      id: "2344",
      district_id: "76",
      name: "Bodomzor MFY"
    },
    {
      id: "2345",
      district_id: "76",
      name: "Rovot MFY"
    },
    {
      id: "2346",
      district_id: "76",
      name: "Navruz MFY"
    },
    {
      id: "2347",
      district_id: "76",
      name: "Navbaxor MFY"
    },
    {
      id: "2348",
      district_id: "76",
      name: "Xitoykenti MFY"
    },
    {
      id: "2349",
      district_id: "76",
      name: "S. Raximov MFY"
    },
    {
      id: "2350",
      district_id: "76",
      name: "Navoiy MFY"
    },
    {
      id: "2351",
      district_id: "76",
      name: "Potron QFY"
    },
    {
      id: "2352",
      district_id: "76",
      name: "Yukori Beshkent MFY"
    },
    {
      id: "2353",
      district_id: "76",
      name: "Kuyi Beshkent MFY"
    },
    {
      id: "2354",
      district_id: "76",
      name: "Kaxlak MFY"
    },
    {
      id: "2355",
      district_id: "76",
      name: "Tallikuron QFY"
    },
    {
      id: "2356",
      district_id: "76",
      name: "Chorbogboygundi MFY"
    },
    {
      id: "2357",
      district_id: "76",
      name: "Kovchin QFY"
    },
    {
      id: "2358",
      district_id: "76",
      name: "Shirkent MFY"
    },
    {
      id: "2359",
      district_id: "76",
      name: "Yangi xayot MFY"
    },
    {
      id: "2360",
      district_id: "76",
      name: "Turakul MFY"
    },
    {
      id: "2361",
      district_id: "76",
      name: "Kojor QFY"
    },
    {
      id: "2362",
      district_id: "76",
      name: "Lagandi MFY"
    },
    {
      id: "2363",
      district_id: "76",
      name: "Kojor MFY"
    },
    {
      id: "2364",
      district_id: "76",
      name: "Nukrobod QFY"
    },
    {
      id: "2365",
      district_id: "76",
      name: "Mevazor MFY"
    },
    {
      id: "2366",
      district_id: "76",
      name: "Еrtepa MFY"
    },
    {
      id: "2367",
      district_id: "76",
      name: "Nukrobod MFY"
    },
    {
      id: "2368",
      district_id: "76",
      name: "Еrtepa QFY"
    },
    {
      id: "2369",
      district_id: "76",
      name: "Kuchkak MFY"
    },
    {
      id: "2370",
      district_id: "76",
      name: "Batosh MFY"
    },
    {
      id: "2371",
      district_id: "76",
      name: "Lagmon MFY"
    },
    {
      id: "2372",
      district_id: "76",
      name: "Mirmiron MFY"
    },
    {
      id: "2373",
      district_id: "76",
      name: "Pistakent MFY"
    },
    {
      id: "2374",
      district_id: "76",
      name: "Niyozmudin MFY"
    },
    {
      id: "2375",
      district_id: "76",
      name: "Kat QFY"
    },
    {
      id: "2376",
      district_id: "76",
      name: "Taxtapul MFY"
    },
    {
      id: "2377",
      district_id: "76",
      name: "Paxtazor MFY"
    },
    {
      id: "2378",
      district_id: "76",
      name: "Dasht QFY"
    },
    {
      id: "2379",
      district_id: "76",
      name: "Xonyon MFY"
    },
    {
      id: "2380",
      district_id: "76",
      name: "Jumabozor MFY"
    },
    {
      id: "2381",
      district_id: "76",
      name: "Shilvi MFY"
    },
    {
      id: "2382",
      district_id: "76",
      name: "Koratepa QFY"
    },
    {
      id: "2383",
      district_id: "76",
      name: "Fayzobod MFY"
    },
    {
      id: "2384",
      district_id: "76",
      name: "Mustakillik MFY"
    },
    {
      id: "2385",
      district_id: "76",
      name: "Saroy MFY"
    },
    {
      id: "2386",
      district_id: "76",
      name: "Mangit MFY"
    },
    {
      id: "2387",
      district_id: "76",
      name: "Xonobod QFY"
    },
    {
      id: "2388",
      district_id: "76",
      name: "Xonobod MFY"
    },
    {
      id: "2389",
      district_id: "76",
      name: "Xilol QFY"
    },
    {
      id: "2390",
      district_id: "76",
      name: "Kerayit MFY"
    },
    {
      id: "2391",
      district_id: "76",
      name: "Chulbuston QFY"
    },
    {
      id: "2392",
      district_id: "76",
      name: "Charagil QFY"
    },
    {
      id: "2393",
      district_id: "76",
      name: "Bogobod QFY"
    },
    {
      id: "2394",
      district_id: "76",
      name: "Poshton QFY"
    },
    {
      id: "2395",
      district_id: "77",
      name: "Shayxali shaxarcha"
    },
    {
      id: "2396",
      district_id: "77",
      name: "A.Navoiy MFY"
    },
    {
      id: "2397",
      district_id: "77",
      name: "Aral MFY"
    },
    {
      id: "2398",
      district_id: "77",
      name: "Aralovul MFY"
    },
    {
      id: "2399",
      district_id: "77",
      name: "Arabxona MFY"
    },
    {
      id: "2400",
      district_id: "77",
      name: "Batosh MFY"
    },
    {
      id: "2401",
      district_id: "77",
      name: "Beglar MFY"
    },
    {
      id: "2402",
      district_id: "77",
      name: "Bogishamol MFY"
    },
    {
      id: "2403",
      district_id: "77",
      name: "Buston MFY"
    },
    {
      id: "2404",
      district_id: "77",
      name: "Gulshan MFY"
    },
    {
      id: "2405",
      district_id: "77",
      name: "Gungon MFY"
    },
    {
      id: "2406",
      district_id: "77",
      name: "Geolog MFY"
    },
    {
      id: "2407",
      district_id: "77",
      name: "G.Gulom MFY"
    },
    {
      id: "2408",
      district_id: "77",
      name: "Darvozatutak max"
    },
    {
      id: "2409",
      district_id: "77",
      name: "Zaxokimaron max"
    },
    {
      id: "2410",
      district_id: "77",
      name: "Zogza MFY"
    },
    {
      id: "2411",
      district_id: "77",
      name: "Istiklol MFY"
    },
    {
      id: "2412",
      district_id: "77",
      name: "Kavali MFY"
    },
    {
      id: "2413",
      district_id: "77",
      name: "Kamandi MFY"
    },
    {
      id: "2414",
      district_id: "77",
      name: "Karlikbogot max"
    },
    {
      id: "2415",
      district_id: "77",
      name: "Karlikxona max"
    },
    {
      id: "2416",
      district_id: "77",
      name: "Karshi MFY"
    },
    {
      id: "2417",
      district_id: "77",
      name: "Kat MFY"
    },
    {
      id: "2418",
      district_id: "77",
      name: "Kunchikar MFY"
    },
    {
      id: "2419",
      district_id: "77",
      name: "Kurgoncha MFY"
    },
    {
      id: "2420",
      district_id: "77",
      name: "K.Kurgoncha max"
    },
    {
      id: "2421",
      district_id: "77",
      name: "Magzon MFY"
    },
    {
      id: "2422",
      district_id: "77",
      name: "Maxallot MFY"
    },
    {
      id: "2423",
      district_id: "77",
      name: "Maxtumkuli MFY"
    },
    {
      id: "2424",
      district_id: "77",
      name: "Maxsimobod MFY"
    },
    {
      id: "2425",
      district_id: "77",
      name: "Mustakillik max"
    },
    {
      id: "2426",
      district_id: "77",
      name: "Navo MFY"
    },
    {
      id: "2427",
      district_id: "77",
      name: "Navruz MFY"
    },
    {
      id: "2428",
      district_id: "77",
      name: "Nasaf MFY"
    },
    {
      id: "2429",
      district_id: "77",
      name: "Nuriston MFY"
    },
    {
      id: "2430",
      district_id: "77",
      name: "Neftchi MFY"
    },
    {
      id: "2431",
      district_id: "77",
      name: "Oydin MFY"
    },
    {
      id: "2432",
      district_id: "77",
      name: "Otchopar MFY"
    },
    {
      id: "2433",
      district_id: "77",
      name: "Paxtazor MFY"
    },
    {
      id: "2434",
      district_id: "77",
      name: "Paxtazor-1 MFY"
    },
    {
      id: "2435",
      district_id: "77",
      name: "Ravok MFY"
    },
    {
      id: "2436",
      district_id: "77",
      name: "Roguzar MFY"
    },
    {
      id: "2437",
      district_id: "77",
      name: "Samarkand MFY"
    },
    {
      id: "2438",
      district_id: "77",
      name: "S.Raximov MFY"
    },
    {
      id: "2439",
      district_id: "77",
      name: "Tabassum MFY"
    },
    {
      id: "2440",
      district_id: "77",
      name: "Tabassum-1 MFY"
    },
    {
      id: "2441",
      district_id: "77",
      name: "Temiryulchi MFY"
    },
    {
      id: "2442",
      district_id: "77",
      name: "Usmon.Yusupov MFY"
    },
    {
      id: "2443",
      district_id: "77",
      name: "F.Xujaev MFY"
    },
    {
      id: "2444",
      district_id: "77",
      name: "Xaramjuy MFY"
    },
    {
      id: "2445",
      district_id: "77",
      name: "Xontepa MFY"
    },
    {
      id: "2446",
      district_id: "77",
      name: "Xudoyzod MFY"
    },
    {
      id: "2447",
      district_id: "77",
      name: "Xujaxiyol MFY"
    },
    {
      id: "2448",
      district_id: "77",
      name: "Chakar MFY"
    },
    {
      id: "2449",
      district_id: "77",
      name: "Charmgar MFY"
    },
    {
      id: "2450",
      district_id: "77",
      name: "Chulkuvar MFY"
    },
    {
      id: "2451",
      district_id: "77",
      name: "Shayxali MFY"
    },
    {
      id: "2452",
      district_id: "77",
      name: "Shodlik MFY"
    },
    {
      id: "2453",
      district_id: "77",
      name: "Shurtangaz MFY"
    },
    {
      id: "2454",
      district_id: "77",
      name: "Shoxbekat MFY"
    },
    {
      id: "2455",
      district_id: "77",
      name: "Eskianxor MFY"
    },
    {
      id: "2456",
      district_id: "77",
      name: "Yangiturmush MFY"
    },
    {
      id: "2457",
      district_id: "78",
      name: "Muglon QFY"
    },
    {
      id: "2458",
      district_id: "78",
      name: "Okkamish MFY"
    },
    {
      id: "2459",
      district_id: "78",
      name: "Xujakasbi MFY"
    },
    {
      id: "2460",
      district_id: "78",
      name: "Mustakilobod MFY"
    },
    {
      id: "2461",
      district_id: "78",
      name: "Dustlik MFY"
    },
    {
      id: "2462",
      district_id: "78",
      name: "Tinchlik MFY"
    },
    {
      id: "2463",
      district_id: "78",
      name: "Koratepa MFY"
    },
    {
      id: "2464",
      district_id: "78",
      name: "Yuksalish QFY"
    },
    {
      id: "2465",
      district_id: "78",
      name: "G.Raxmonov MFY"
    },
    {
      id: "2466",
      district_id: "78",
      name: "Kasbi MFY"
    },
    {
      id: "2467",
      district_id: "78",
      name: "Jizza MFY"
    },
    {
      id: "2468",
      district_id: "78",
      name: "Yangi Xayot QFY"
    },
    {
      id: "2469",
      district_id: "78",
      name: "Fazli MFY"
    },
    {
      id: "2470",
      district_id: "78",
      name: "Nazartepa MFY"
    },
    {
      id: "2471",
      district_id: "78",
      name: "Galaba QFY"
    },
    {
      id: "2472",
      district_id: "78",
      name: "Xujakarlik MFY"
    },
    {
      id: "2473",
      district_id: "78",
      name: "Katagan QFY"
    },
    {
      id: "2474",
      district_id: "78",
      name: "Okjangal MFY"
    },
    {
      id: "2475",
      district_id: "78",
      name: "Soxibkor MFY"
    },
    {
      id: "2476",
      district_id: "78",
      name: "Maymanok MFY"
    },
    {
      id: "2477",
      district_id: "78",
      name: "Istiklol MFY"
    },
    {
      id: "2478",
      district_id: "78",
      name: "Kamashi QFY"
    },
    {
      id: "2479",
      district_id: "78",
      name: "Nurobod MFY"
    },
    {
      id: "2480",
      district_id: "78",
      name: "Xujaki MFY"
    },
    {
      id: "2481",
      district_id: "78",
      name: "Denov QFY"
    },
    {
      id: "2482",
      district_id: "78",
      name: "Oktepa MFY"
    },
    {
      id: "2483",
      district_id: "78",
      name: "Talliyulgun MFY"
    },
    {
      id: "2484",
      district_id: "78",
      name: "Pandiron MFY"
    },
    {
      id: "2485",
      district_id: "78",
      name: "Korakungirot QFY"
    },
    {
      id: "2486",
      district_id: "78",
      name: "Shakarjuy MFY"
    },
    {
      id: "2487",
      district_id: "78",
      name: "Talishbe MFY"
    },
    {
      id: "2488",
      district_id: "78",
      name: "M.Ulugbek MFY"
    },
    {
      id: "2489",
      district_id: "78",
      name: "Kungirot MFY"
    },
    {
      id: "2490",
      district_id: "78",
      name: "Komilon QFY"
    },
    {
      id: "2491",
      district_id: "78",
      name: "Mesit MFY"
    },
    {
      id: "2492",
      district_id: "78",
      name: "Chulkuvar QFY"
    },
    {
      id: "2493",
      district_id: "78",
      name: "Xo`jaxayron MFY"
    },
    {
      id: "2494",
      district_id: "78",
      name: "Mushqoqi MFY"
    },
    {
      id: "2495",
      district_id: "79",
      name: "Paxtaobod QFY"
    },
    {
      id: "2496",
      district_id: "79",
      name: "Qaynarbuloq QFY"
    },
    {
      id: "2497",
      district_id: "79",
      name: "Qatorbog` QFY"
    },
    {
      id: "2498",
      district_id: "79",
      name: "Jilisuv QFY"
    },
    {
      id: "2499",
      district_id: "79",
      name: "Sevaz QFY"
    },
    {
      id: "2500",
      district_id: "79",
      name: "Palandara QFY"
    },
    {
      id: "2501",
      district_id: "79",
      name: "Makrid QFY"
    },
    {
      id: "2502",
      district_id: "79",
      name: "Quyioqboy QFY"
    },
    {
      id: "2503",
      district_id: "79",
      name: "Bektemir QFY"
    },
    {
      id: "2504",
      district_id: "79",
      name: "Tupchoq QFY"
    },
    {
      id: "2505",
      district_id: "79",
      name: "Bog`bon QFY"
    },
    {
      id: "2506",
      district_id: "79",
      name: "Beshterak QFY"
    },
    {
      id: "2507",
      district_id: "79",
      name: "Kuxsor MFY"
    },
    {
      id: "2508",
      district_id: "79",
      name: "Surum MFY"
    },
    {
      id: "2509",
      district_id: "79",
      name: "Qaynar MFY"
    },
    {
      id: "2510",
      district_id: "79",
      name: "Sariosie MFY"
    },
    {
      id: "2511",
      district_id: "79",
      name: "Saroy MFY"
    },
    {
      id: "2512",
      district_id: "79",
      name: "Bashir MFY"
    },
    {
      id: "2513",
      district_id: "79",
      name: "Panji MFY"
    },
    {
      id: "2514",
      district_id: "79",
      name: "Iskana MFY"
    },
    {
      id: "2515",
      district_id: "79",
      name: "Beshqazoq MFY"
    },
    {
      id: "2516",
      district_id: "79",
      name: "Vatkana MFY"
    },
    {
      id: "2517",
      district_id: "79",
      name: "Shurobsoy MFY"
    },
    {
      id: "2518",
      district_id: "79",
      name: "Yakkatut MFY"
    },
    {
      id: "2519",
      district_id: "79",
      name: "Oeqchi MFY"
    },
    {
      id: "2520",
      district_id: "79",
      name: "Hoji MFY"
    },
    {
      id: "2521",
      district_id: "79",
      name: "Yo`ldosh shaxarcha MFY"
    },
    {
      id: "2522",
      district_id: "79",
      name: "S.Raximov MFY"
    },
    {
      id: "2523",
      district_id: "79",
      name: "Toshkent MFY"
    },
    {
      id: "2524",
      district_id: "79",
      name: "H.Olimjon MFY"
    },
    {
      id: "2525",
      district_id: "79",
      name: "Guliston MFY"
    },
    {
      id: "2526",
      district_id: "79",
      name: "Ulug`bek MFY"
    },
    {
      id: "2527",
      district_id: "79",
      name: "A.Qushchi MFY"
    },
    {
      id: "2528",
      district_id: "79",
      name: "X.Dustligi MFY"
    },
    {
      id: "2529",
      district_id: "79",
      name: "Xiromiy MFY"
    },
    {
      id: "2530",
      district_id: "79",
      name: "Yangiobod MFY"
    },
    {
      id: "2531",
      district_id: "79",
      name: "Charmgar MFY"
    },
    {
      id: "2532",
      district_id: "79",
      name: "Sanam MFY"
    },
    {
      id: "2533",
      district_id: "80",
      name: "Pulati QFY"
    },
    {
      id: "2534",
      district_id: "80",
      name: "dustlik QFY"
    },
    {
      id: "2535",
      district_id: "80",
      name: "Guvalak QFY"
    },
    {
      id: "2536",
      district_id: "80",
      name: "Alachabob QFY"
    },
    {
      id: "2537",
      district_id: "80",
      name: "Obidida QFY"
    },
    {
      id: "2538",
      district_id: "80",
      name: "tinchlik QFY"
    },
    {
      id: "2539",
      district_id: "80",
      name: "Koson QFY"
    },
    {
      id: "2540",
      district_id: "80",
      name: "Bulmas QFY"
    },
    {
      id: "2541",
      district_id: "80",
      name: "gulbog QFY"
    },
    {
      id: "2542",
      district_id: "80",
      name: "Dustlik MFY"
    },
    {
      id: "2543",
      district_id: "80",
      name: "Ravot MFY"
    },
    {
      id: "2544",
      district_id: "80",
      name: "mesit MFY"
    },
    {
      id: "2545",
      district_id: "80",
      name: "Regzor MFY"
    },
    {
      id: "2546",
      district_id: "80",
      name: "Mugjagul MFY"
    },
    {
      id: "2547",
      district_id: "80",
      name: "Lolazor MFY"
    },
    {
      id: "2548",
      district_id: "80",
      name: "Nartichukur MFY"
    },
    {
      id: "2549",
      district_id: "80",
      name: "jizzalik MFY"
    },
    {
      id: "2550",
      district_id: "80",
      name: "Yangiobod MFY"
    },
    {
      id: "2551",
      district_id: "80",
      name: "nartibaland MFY"
    },
    {
      id: "2552",
      district_id: "80",
      name: "Kuybog MFY"
    },
    {
      id: "2553",
      district_id: "80",
      name: "Istikbol MFY"
    },
    {
      id: "2554",
      district_id: "80",
      name: "paxtazor MFY"
    },
    {
      id: "2555",
      district_id: "80",
      name: "Saripul MFY"
    },
    {
      id: "2556",
      district_id: "80",
      name: "Navbaxor MFY"
    },
    {
      id: "2557",
      district_id: "80",
      name: "Oxunboboev MFY"
    },
    {
      id: "2558",
      district_id: "80",
      name: "Arabxona MFY"
    },
    {
      id: "2559",
      district_id: "80",
      name: "Mulali MFY"
    },
    {
      id: "2560",
      district_id: "80",
      name: "Obod MFY"
    },
    {
      id: "2561",
      district_id: "80",
      name: "Pistali MFY"
    },
    {
      id: "2562",
      district_id: "80",
      name: "Sherbek MFY"
    },
    {
      id: "2563",
      district_id: "80",
      name: "Boyterak MFY"
    },
    {
      id: "2564",
      district_id: "80",
      name: "Kozokli MFY"
    },
    {
      id: "2565",
      district_id: "80",
      name: "Urtaobron MFY"
    },
    {
      id: "2566",
      district_id: "80",
      name: "Yakkasaroy MFY"
    },
    {
      id: "2567",
      district_id: "80",
      name: "Chirokchi MFY"
    },
    {
      id: "2568",
      district_id: "80",
      name: "Guliston MFY"
    },
    {
      id: "2569",
      district_id: "80",
      name: "Boygundi MFY"
    },
    {
      id: "2570",
      district_id: "80",
      name: "Beshkutan MFY"
    },
    {
      id: "2571",
      district_id: "80",
      name: "navruz MFY"
    },
    {
      id: "2572",
      district_id: "80",
      name: "Ushok tepa MFY"
    },
    {
      id: "2573",
      district_id: "80",
      name: "Pudina MFY"
    },
    {
      id: "2574",
      district_id: "80",
      name: "Surxon MFY"
    },
    {
      id: "2575",
      district_id: "80",
      name: "Esaboy MFY"
    },
    {
      id: "2576",
      district_id: "80",
      name: "shirintepa MFY"
    },
    {
      id: "2577",
      district_id: "80",
      name: "darcha MFY"
    },
    {
      id: "2578",
      district_id: "80",
      name: "Xujakuduk MFY"
    },
    {
      id: "2579",
      district_id: "80",
      name: "Korabayir MFY"
    },
    {
      id: "2580",
      district_id: "80",
      name: "Mudin MFY"
    },
    {
      id: "2581",
      district_id: "80",
      name: "Etak MFY"
    },
    {
      id: "2582",
      district_id: "80",
      name: "Maydayobu MFY"
    },
    {
      id: "2583",
      district_id: "80",
      name: "Nekuz MFY"
    },
    {
      id: "2584",
      district_id: "80",
      name: "Ayronchi MFY"
    },
    {
      id: "2585",
      district_id: "80",
      name: "nixol MFY"
    },
    {
      id: "2586",
      district_id: "80",
      name: "Raximsufi MFY"
    },
    {
      id: "2587",
      district_id: "80",
      name: "Xalkobod MFY"
    },
    {
      id: "2588",
      district_id: "80",
      name: "gala MFY"
    },
    {
      id: "2589",
      district_id: "80",
      name: "Kaldaryo MFY"
    },
    {
      id: "2590",
      district_id: "80",
      name: "nurafshon MFY"
    },
    {
      id: "2591",
      district_id: "80",
      name: "kuyiobron MFY"
    },
    {
      id: "2592",
      district_id: "80",
      name: "Uyrot MFY"
    },
    {
      id: "2593",
      district_id: "80",
      name: "Mustakillik MFY"
    },
    {
      id: "2594",
      district_id: "80",
      name: "xalima MFY"
    },
    {
      id: "2595",
      district_id: "80",
      name: "Toshkuprik MFY"
    },
    {
      id: "2596",
      district_id: "81",
      name: "Mirishkor QFY"
    },
    {
      id: "2597",
      district_id: "81",
      name: "Jeynov QFY"
    },
    {
      id: "2598",
      district_id: "81",
      name: "Guliston QFY"
    },
    {
      id: "2599",
      district_id: "81",
      name: "Navbahor QFY"
    },
    {
      id: "2600",
      district_id: "81",
      name: "Obod QFY"
    },
    {
      id: "2601",
      district_id: "81",
      name: "Yangiobod QFY"
    },
    {
      id: "2602",
      district_id: "81",
      name: "Avazcho`l QFY (chegara xudud)"
    },
    {
      id: "2603",
      district_id: "81",
      name: "Pomuq QFY (chegara xudud)"
    },
    {
      id: "2604",
      district_id: "81",
      name: "Chamanzor QFY"
    },
    {
      id: "2605",
      district_id: "81",
      name: "Chandir QFY"
    },
    {
      id: "2606",
      district_id: "81",
      name: "Vori QFY(chegara xudud)"
    },
    {
      id: "2607",
      district_id: "81",
      name: "Gulshanbog` QFY (chegara xudud)"
    },
    {
      id: "2608",
      district_id: "81",
      name: "Yangi Mirishkor MFY"
    },
    {
      id: "2609",
      district_id: "81",
      name: "Obodon MFY"
    },
    {
      id: "2610",
      district_id: "81",
      name: "Kalta MFY"
    },
    {
      id: "2611",
      district_id: "81",
      name: "Qumbangi MFY"
    },
    {
      id: "2612",
      district_id: "81",
      name: "Okmachit MFY"
    },
    {
      id: "2613",
      district_id: "81",
      name: "O`zbekiston MFY"
    },
    {
      id: "2614",
      district_id: "81",
      name: "Yangi Jeynov MFY"
    },
    {
      id: "2615",
      district_id: "81",
      name: "Avvona MFY"
    },
    {
      id: "2616",
      district_id: "81",
      name: "Anxo`y MFY"
    },
    {
      id: "2617",
      district_id: "81",
      name: "Ayzabod MFY"
    },
    {
      id: "2618",
      district_id: "81",
      name: "Kattapoy MFY"
    },
    {
      id: "2619",
      district_id: "81",
      name: "Oltin boshoq MFY"
    },
    {
      id: "2620",
      district_id: "81",
      name: "Bahoriston MFY"
    },
    {
      id: "2621",
      district_id: "81",
      name: "Ignachi MFY"
    },
    {
      id: "2622",
      district_id: "81",
      name: "Yangiqishloq MFY"
    },
    {
      id: "2623",
      district_id: "81",
      name: "Malla MFY"
    },
    {
      id: "2624",
      district_id: "81",
      name: "Shodlik MFY"
    },
    {
      id: "2625",
      district_id: "81",
      name: "Zafar MFY"
    },
    {
      id: "2626",
      district_id: "81",
      name: "Yangihayot MFY"
    },
    {
      id: "2627",
      district_id: "81",
      name: "Istiqlol MFY"
    },
    {
      id: "2628",
      district_id: "81",
      name: "Madaniyat MFY"
    },
    {
      id: "2629",
      district_id: "81",
      name: "Guliston MFY"
    },
    {
      id: "2630",
      district_id: "81",
      name: "Shirin MFY"
    },
    {
      id: "2631",
      district_id: "81",
      name: "Maxtimquli MFY"
    },
    {
      id: "2632",
      district_id: "82",
      name: "Konchilar MFY"
    },
    {
      id: "2633",
      district_id: "82",
      name: "Yoshlik MFY"
    },
    {
      id: "2634",
      district_id: "82",
      name: "Tong MFY"
    },
    {
      id: "2635",
      district_id: "82",
      name: "Bobur MFY"
    },
    {
      id: "2636",
      district_id: "82",
      name: "Dustlik MFY"
    },
    {
      id: "2637",
      district_id: "82",
      name: "A.Navoiy MFY"
    },
    {
      id: "2638",
      district_id: "82",
      name: "Geolog MFY"
    },
    {
      id: "2639",
      district_id: "82",
      name: "Mash`al MFY"
    },
    {
      id: "2640",
      district_id: "82",
      name: "Quruvchilar MFY"
    },
    {
      id: "2641",
      district_id: "82",
      name: "Sariq QFY"
    },
    {
      id: "2642",
      district_id: "82",
      name: "A.Temur MFY"
    },
    {
      id: "2643",
      district_id: "82",
      name: "Muborak QFY"
    },
    {
      id: "2644",
      district_id: "82",
      name: "Kuxnashaxar MFY"
    },
    {
      id: "2645",
      district_id: "82",
      name: "Qora-qum QFY"
    },
    {
      id: "2646",
      district_id: "82",
      name: "X.Ismoilov MFY"
    },
    {
      id: "2647",
      district_id: "82",
      name: "Xitoy MFY"
    },
    {
      id: "2648",
      district_id: "82",
      name: "S.Omonov MFY"
    },
    {
      id: "2649",
      district_id: "82",
      name: "Qarliq QFY"
    },
    {
      id: "2650",
      district_id: "82",
      name: "X.Karimov MFY"
    },
    {
      id: "2651",
      district_id: "82",
      name: "K.Shoniyozov MFY"
    },
    {
      id: "2652",
      district_id: "82",
      name: "Sardoba MFY"
    },
    {
      id: "2653",
      district_id: "83",
      name: "baynalmilal MFY"
    },
    {
      id: "2654",
      district_id: "83",
      name: "ulug`bek MFY"
    },
    {
      id: "2655",
      district_id: "83",
      name: "Navbaxor MFY"
    },
    {
      id: "2656",
      district_id: "83",
      name: "Paxtakor MFY"
    },
    {
      id: "2657",
      district_id: "83",
      name: "Yuksalish MFY"
    },
    {
      id: "2658",
      district_id: "83",
      name: "Paxtaobod MFY"
    },
    {
      id: "2659",
      district_id: "83",
      name: "Nuriston shfy"
    },
    {
      id: "2660",
      district_id: "83",
      name: "Navro`z QFY"
    },
    {
      id: "2661",
      district_id: "83",
      name: "Guliston MFY"
    },
    {
      id: "2662",
      district_id: "83",
      name: "Samarqand MFY"
    },
    {
      id: "2663",
      district_id: "83",
      name: "Istiqbol MFY"
    },
    {
      id: "2664",
      district_id: "83",
      name: "Yangiobod MFY"
    },
    {
      id: "2665",
      district_id: "83",
      name: "Qirqquloch QFY (chegara xudud )"
    },
    {
      id: "2666",
      district_id: "83",
      name: "Obod MFY(chegara xudud)"
    },
    {
      id: "2667",
      district_id: "83",
      name: "Do`stlik MFY(chegara xudud)"
    },
    {
      id: "2668",
      district_id: "83",
      name: "Obixayot MFY(chegara xudud)"
    },
    {
      id: "2669",
      district_id: "83",
      name: "Tinchlik MFY(chegara xudud)"
    },
    {
      id: "2670",
      district_id: "83",
      name: "Shirinobod QFY"
    },
    {
      id: "2671",
      district_id: "83",
      name: "Paxtazor QFY"
    },
    {
      id: "2672",
      district_id: "83",
      name: "Balxiyak QFY"
    },
    {
      id: "2673",
      district_id: "83",
      name: "Nishon QFY"
    },
    {
      id: "2674",
      district_id: "83",
      name: "oq oltin QFY"
    },
    {
      id: "2675",
      district_id: "83",
      name: "oydin QFY"
    },
    {
      id: "2676",
      district_id: "83",
      name: "A.Qodiriy MFY"
    },
    {
      id: "2677",
      district_id: "83",
      name: "Kaptarli MFY"
    },
    {
      id: "2678",
      district_id: "83",
      name: "Ibn sino MFY"
    },
    {
      id: "2679",
      district_id: "83",
      name: "Kimyogar MFY"
    },
    {
      id: "2680",
      district_id: "83",
      name: "Nurchi MFY"
    },
    {
      id: "2681",
      district_id: "84",
      name: "Chiroqchi MFY"
    },
    {
      id: "2682",
      district_id: "84",
      name: "Bog`ishamol MFY"
    },
    {
      id: "2683",
      district_id: "84",
      name: "Kishmishtepa MFY"
    },
    {
      id: "2684",
      district_id: "84",
      name: "O`zbekiston MFY"
    },
    {
      id: "2685",
      district_id: "84",
      name: "Yangiobod MFY"
    },
    {
      id: "2686",
      district_id: "84",
      name: "Choshtepa MFY"
    },
    {
      id: "2687",
      district_id: "84",
      name: "A.Navoiy MFY"
    },
    {
      id: "2688",
      district_id: "84",
      name: "Paxtaobod QFY"
    },
    {
      id: "2689",
      district_id: "84",
      name: "Yangiqishloq MFY"
    },
    {
      id: "2690",
      district_id: "84",
      name: "Olmazor QFY"
    },
    {
      id: "2691",
      district_id: "84",
      name: "Chiljivut MFY"
    },
    {
      id: "2692",
      district_id: "84",
      name: "Dam QFY"
    },
    {
      id: "2693",
      district_id: "84",
      name: "Pakandi MFY"
    },
    {
      id: "2694",
      district_id: "84",
      name: "Zarbdor MFY"
    },
    {
      id: "2695",
      district_id: "84",
      name: "Uymovut QFY"
    },
    {
      id: "2696",
      district_id: "84",
      name: "Xumo QFY"
    },
    {
      id: "2697",
      district_id: "84",
      name: "Yangiobod MFY"
    },
    {
      id: "2698",
      district_id: "84",
      name: "Ko`ktosh MFY"
    },
    {
      id: "2699",
      district_id: "84",
      name: "Jar QFY"
    },
    {
      id: "2700",
      district_id: "84",
      name: "Qizilchovra MFY"
    },
    {
      id: "2701",
      district_id: "84",
      name: "Dodiq QFY"
    },
    {
      id: "2702",
      district_id: "84",
      name: "Navro`z MFY"
    },
    {
      id: "2703",
      district_id: "84",
      name: "Qaxramon QFY"
    },
    {
      id: "2704",
      district_id: "84",
      name: "Buronjuz MFY"
    },
    {
      id: "2705",
      district_id: "84",
      name: "Dursun MFY"
    },
    {
      id: "2706",
      district_id: "84",
      name: "Uyshun QFY"
    },
    {
      id: "2707",
      district_id: "84",
      name: "G`allachi MFY"
    },
    {
      id: "2708",
      district_id: "84",
      name: "Oq oltin MFY"
    },
    {
      id: "2709",
      district_id: "84",
      name: "Oq tosh MFY"
    },
    {
      id: "2710",
      district_id: "84",
      name: "Mirzatup QFY"
    },
    {
      id: "2711",
      district_id: "84",
      name: "Arabbandi MFY"
    },
    {
      id: "2712",
      district_id: "84",
      name: "Chiyal QFY"
    },
    {
      id: "2713",
      district_id: "84",
      name: "Uymovut MFY"
    },
    {
      id: "2714",
      district_id: "84",
      name: "To`qmor MFY"
    },
    {
      id: "2715",
      district_id: "84",
      name: "G`allakor MFY"
    },
    {
      id: "2716",
      district_id: "84",
      name: "Qumdaryo QFY"
    },
    {
      id: "2717",
      district_id: "84",
      name: "Suvliq MFY"
    },
    {
      id: "2718",
      district_id: "84",
      name: "Annaro`z MFY"
    },
    {
      id: "2719",
      district_id: "84",
      name: "Chuvilloq MFY"
    },
    {
      id: "2720",
      district_id: "84",
      name: "Qalqama QFY"
    },
    {
      id: "2721",
      district_id: "84",
      name: "Galabek MFY"
    },
    {
      id: "2722",
      district_id: "84",
      name: "Langar QFY"
    },
    {
      id: "2723",
      district_id: "84",
      name: "Quruqsoy MFY"
    },
    {
      id: "2724",
      district_id: "84",
      name: "Kukdala QFY"
    },
    {
      id: "2725",
      district_id: "84",
      name: "Soybo`yi MFY"
    },
    {
      id: "2726",
      district_id: "84",
      name: "O`tamayli MFY"
    },
    {
      id: "2727",
      district_id: "84",
      name: "Beglamish MFY"
    },
    {
      id: "2728",
      district_id: "84",
      name: "Torjilg`a QFY"
    },
    {
      id: "2729",
      district_id: "84",
      name: "Guliston MFY"
    },
    {
      id: "2730",
      district_id: "84",
      name: "Eski anhor QFY"
    },
    {
      id: "2731",
      district_id: "84",
      name: "Ayritom MFY"
    },
    {
      id: "2732",
      district_id: "84",
      name: "Paxtalisoy MFY"
    },
    {
      id: "2733",
      district_id: "84",
      name: "Yangihayot QFY"
    },
    {
      id: "2734",
      district_id: "84",
      name: "Taloqtepa MFY"
    },
    {
      id: "2735",
      district_id: "84",
      name: "Xarduri MFY"
    },
    {
      id: "2736",
      district_id: "84",
      name: "Sho`rbozor MFY"
    },
    {
      id: "2737",
      district_id: "84",
      name: "Chorvador QFY"
    },
    {
      id: "2738",
      district_id: "84",
      name: "Qanotli MFY"
    },
    {
      id: "2739",
      district_id: "84",
      name: "Sho`rquduq QFY"
    },
    {
      id: "2740",
      district_id: "84",
      name: "Naymansaroy MFY"
    },
    {
      id: "2741",
      district_id: "84",
      name: "Umakay MFY"
    },
    {
      id: "2742",
      district_id: "84",
      name: "Chanbil MFY"
    },
    {
      id: "2743",
      district_id: "84",
      name: "Qirg`iz MFY"
    },
    {
      id: "2744",
      district_id: "85",
      name: "O`rda MFY"
    },
    {
      id: "2745",
      district_id: "85",
      name: "Zingiron MFY"
    },
    {
      id: "2746",
      district_id: "85",
      name: "Kulollik MFY"
    },
    {
      id: "2747",
      district_id: "85",
      name: "Zargarlik MFY"
    },
    {
      id: "2748",
      district_id: "85",
      name: "Qo`shxovuzMFY"
    },
    {
      id: "2749",
      district_id: "85",
      name: "Qoziguzar MFY"
    },
    {
      id: "2750",
      district_id: "85",
      name: "Sa`diy MFY"
    },
    {
      id: "2751",
      district_id: "85",
      name: "X. Baxshi MFY"
    },
    {
      id: "2752",
      district_id: "85",
      name: "Kunchiqar MFY"
    },
    {
      id: "2753",
      district_id: "85",
      name: "Qushxona MFY"
    },
    {
      id: "2754",
      district_id: "85",
      name: "Uychilik MFY"
    },
    {
      id: "2755",
      district_id: "85",
      name: "NamozgoxMFY"
    },
    {
      id: "2756",
      district_id: "85",
      name: "Oq saroy MFY"
    },
    {
      id: "2757",
      district_id: "85",
      name: "XabarlikMFY"
    },
    {
      id: "2758",
      district_id: "85",
      name: "Navro`zMFY"
    },
    {
      id: "2759",
      district_id: "85",
      name: "SariosiyoMFY"
    },
    {
      id: "2760",
      district_id: "85",
      name: "Cho`lponMFY"
    },
    {
      id: "2761",
      district_id: "85",
      name: "Ѓ.Ѓulom MFY"
    },
    {
      id: "2762",
      district_id: "85",
      name: "Ipak Yuli MFY"
    },
    {
      id: "2763",
      district_id: "85",
      name: "Paxtakor MFY"
    },
    {
      id: "2764",
      district_id: "85",
      name: "Kesh MFY"
    },
    {
      id: "2765",
      district_id: "85",
      name: "Do`stlik MFY"
    },
    {
      id: "2766",
      district_id: "85",
      name: "Turon MFY"
    },
    {
      id: "2767",
      district_id: "85",
      name: "Pillakashlik MFY"
    },
    {
      id: "2768",
      district_id: "85",
      name: "Tutzor MFY"
    },
    {
      id: "2769",
      district_id: "85",
      name: "TeparlikMFY"
    },
    {
      id: "2770",
      district_id: "85",
      name: "Pisandi MFY"
    },
    {
      id: "2771",
      district_id: "85",
      name: "KamolotMFY"
    },
    {
      id: "2772",
      district_id: "85",
      name: "A.Jomiy MFY"
    },
    {
      id: "2773",
      district_id: "85",
      name: "Ma`rifat MFY"
    },
    {
      id: "2774",
      district_id: "85",
      name: "Sinabog` MFY"
    },
    {
      id: "2775",
      district_id: "85",
      name: "Kunchiqar QFY"
    },
    {
      id: "2776",
      district_id: "85",
      name: "Shamaton QFY"
    },
    {
      id: "2777",
      district_id: "85",
      name: "O`zbekiston QFY"
    },
    {
      id: "2778",
      district_id: "85",
      name: "Namaton QFY"
    },
    {
      id: "2779",
      district_id: "85",
      name: "Duqchi QFY"
    },
    {
      id: "2780",
      district_id: "85",
      name: "Muminobod QFY"
    },
    {
      id: "2781",
      district_id: "85",
      name: "Shakarteri QFY"
    },
    {
      id: "2782",
      district_id: "85",
      name: "Oqsuv QFY"
    },
    {
      id: "2783",
      district_id: "85",
      name: "Qutchi QFY"
    },
    {
      id: "2784",
      district_id: "85",
      name: "Tudamaydon QFY"
    },
    {
      id: "2785",
      district_id: "85",
      name: "Miraki QFY"
    },
    {
      id: "2786",
      district_id: "85",
      name: "Xisorak QFY (chegara xudud)"
    },
    {
      id: "2787",
      district_id: "85",
      name: "Xitoy QFY"
    },
    {
      id: "2788",
      district_id: "85",
      name: "Muminobod MFY"
    },
    {
      id: "2789",
      district_id: "85",
      name: "Avazmalik MFY"
    },
    {
      id: "2790",
      district_id: "85",
      name: "Uymovut MFY"
    },
    {
      id: "2791",
      district_id: "85",
      name: "Xitoy"
    },
    {
      id: "2792",
      district_id: "85",
      name: "G`elon (chegara xudud)"
    },
    {
      id: "2793",
      district_id: "85",
      name: "Choshtepa MFY"
    },
    {
      id: "2794",
      district_id: "85",
      name: "Chorshanbe MFY"
    },
    {
      id: "2795",
      district_id: "85",
      name: "Yangiqishloq MFY"
    },
    {
      id: "2796",
      district_id: "85",
      name: "K.Novqat MFY"
    },
    {
      id: "2797",
      district_id: "85",
      name: "Paxtakor MFY"
    },
    {
      id: "2798",
      district_id: "85",
      name: "Xujaxuroson MFY"
    },
    {
      id: "2799",
      district_id: "85",
      name: "Urtaqurg`on MFY"
    },
    {
      id: "2800",
      district_id: "85",
      name: "A.Temur MFY"
    },
    {
      id: "2801",
      district_id: "85",
      name: "Tudamaydon MFY"
    },
    {
      id: "2802",
      district_id: "85",
      name: "Xazara MFY"
    },
    {
      id: "2803",
      district_id: "85",
      name: "Qutchi MFY"
    },
    {
      id: "2804",
      district_id: "85",
      name: "Achchig`i MFY"
    },
    {
      id: "2805",
      district_id: "85",
      name: "Saroy MFY"
    },
    {
      id: "2806",
      district_id: "85",
      name: "Ommag`on MFY"
    },
    {
      id: "2807",
      district_id: "85",
      name: "Chuqun MFY"
    },
    {
      id: "2808",
      district_id: "86",
      name: "Furkat MFY"
    },
    {
      id: "2809",
      district_id: "86",
      name: "Oxunboboev MFY"
    },
    {
      id: "2810",
      district_id: "86",
      name: "Jambul MFY"
    },
    {
      id: "2811",
      district_id: "86",
      name: "Chumich MFY"
    },
    {
      id: "2812",
      district_id: "86",
      name: "Yangiobod MFY"
    },
    {
      id: "2813",
      district_id: "86",
      name: "Xujailgor MFY"
    },
    {
      id: "2814",
      district_id: "86",
      name: "Xamza MFY"
    },
    {
      id: "2815",
      district_id: "86",
      name: "Jaychi MFY"
    },
    {
      id: "2816",
      district_id: "86",
      name: "Aygirkul MFY"
    },
    {
      id: "2817",
      district_id: "86",
      name: "Oktosh MFY"
    },
    {
      id: "2818",
      district_id: "86",
      name: "Eski Yakkabog MFY"
    },
    {
      id: "2819",
      district_id: "86",
      name: "Ibn Sino MFY"
    },
    {
      id: "2820",
      district_id: "86",
      name: "Mustakillik MFY"
    },
    {
      id: "2821",
      district_id: "86",
      name: "Esat MFY"
    },
    {
      id: "2822",
      district_id: "86",
      name: "Kozok MFY"
    },
    {
      id: "2823",
      district_id: "86",
      name: "Choydori MFY"
    },
    {
      id: "2824",
      district_id: "86",
      name: "Jiyda MFY"
    },
    {
      id: "2825",
      district_id: "86",
      name: "Uzun MFY"
    },
    {
      id: "2826",
      district_id: "86",
      name: "Kishlik MFY"
    },
    {
      id: "2827",
      district_id: "86",
      name: "Katagon MFY"
    },
    {
      id: "2828",
      district_id: "86",
      name: "Kushchinor MFY"
    },
    {
      id: "2829",
      district_id: "86",
      name: "Mevazor MFY"
    },
    {
      id: "2830",
      district_id: "86",
      name: "Kayragoch MFY"
    },
    {
      id: "2831",
      district_id: "86",
      name: "Uygur MFY"
    },
    {
      id: "2832",
      district_id: "86",
      name: "Xonaka MFY"
    },
    {
      id: "2833",
      district_id: "86",
      name: "Xiyobon MFY"
    },
    {
      id: "2834",
      district_id: "86",
      name: "Darxon MFY"
    },
    {
      id: "2835",
      district_id: "86",
      name: "Kushtegirmon MFY"
    },
    {
      id: "2836",
      district_id: "86",
      name: "Urta MFY"
    },
    {
      id: "2837",
      district_id: "86",
      name: "Ishkent MFY"
    },
    {
      id: "2838",
      district_id: "86",
      name: "Samok MFY"
    },
    {
      id: "2839",
      district_id: "86",
      name: "Tatar MFY"
    },
    {
      id: "2840",
      district_id: "86",
      name: "Kenguzar MFY"
    },
    {
      id: "2841",
      district_id: "86",
      name: "sandal MFY"
    },
    {
      id: "2842",
      district_id: "86",
      name: "Sovukbulok MFY"
    },
    {
      id: "2843",
      district_id: "86",
      name: "Madaniyat MFY"
    },
    {
      id: "2844",
      district_id: "86",
      name: "beshugil MFY"
    },
    {
      id: "2845",
      district_id: "86",
      name: "Daryo MFY"
    },
    {
      id: "2846",
      district_id: "86",
      name: "Shar shar bogat MFY"
    },
    {
      id: "2847",
      district_id: "86",
      name: "Alakuylak MFY"
    },
    {
      id: "2848",
      district_id: "86",
      name: "Ulamji MFY"
    },
    {
      id: "2849",
      district_id: "86",
      name: "Gozlik MFY"
    },
    {
      id: "2850",
      district_id: "86",
      name: "Turon MFY"
    },
    {
      id: "2851",
      district_id: "86",
      name: "Patakor MFY"
    },
    {
      id: "2852",
      district_id: "86",
      name: "Tukboy"
    },
    {
      id: "2853",
      district_id: "86",
      name: "Navruz MFY"
    },
    {
      id: "2854",
      district_id: "87",
      name: "Zarapetyan MFY"
    },
    {
      id: "2855",
      district_id: "87",
      name: "Shaxtyor MFY"
    },
    {
      id: "2856",
      district_id: "87",
      name: "Oltin vodiy MFY"
    },
    {
      id: "2857",
      district_id: "87",
      name: "Kuruvchi MFY"
    },
    {
      id: "2858",
      district_id: "87",
      name: "Yoshlik MFY"
    },
    {
      id: "2859",
      district_id: "87",
      name: "Tinchlik MFY"
    },
    {
      id: "2860",
      district_id: "87",
      name: "Geolog MFY"
    },
    {
      id: "2861",
      district_id: "87",
      name: "Baxor MFY"
    },
    {
      id: "2862",
      district_id: "87",
      name: "Navruz MFY"
    },
    {
      id: "2863",
      district_id: "87",
      name: "Yulduz MFY"
    },
    {
      id: "2864",
      district_id: "87",
      name: "Yangi-Zarafshon"
    },
    {
      id: "2865",
      district_id: "87",
      name: "Muruntau SHFY"
    },
    {
      id: "2866",
      district_id: "87",
      name: "Daugiztau SHFY"
    },
    {
      id: "2867",
      district_id: "88",
      name: "Yangi ariq QFY"
    },
    {
      id: "2868",
      district_id: "88",
      name: "Varq MFY"
    },
    {
      id: "2869",
      district_id: "88",
      name: "Kalovot MFY"
    },
    {
      id: "2870",
      district_id: "88",
      name: "Arg`un MFY"
    },
    {
      id: "2871",
      district_id: "88",
      name: "Yangi ariq MFY"
    },
    {
      id: "2872",
      district_id: "88",
      name: "Talqoq MFY"
    },
    {
      id: "2873",
      district_id: "88",
      name: "Katta machit MFY"
    },
    {
      id: "2874",
      district_id: "88",
      name: "Uyrot QFY"
    },
    {
      id: "2875",
      district_id: "88",
      name: "Uyrot MFY"
    },
    {
      id: "2876",
      district_id: "88",
      name: "Ayronchi MFY"
    },
    {
      id: "2877",
      district_id: "88",
      name: "Yangiobod MFY"
    },
    {
      id: "2878",
      district_id: "88",
      name: "Xoncharbog` MFY"
    },
    {
      id: "2879",
      district_id: "88",
      name: "Durman QFY"
    },
    {
      id: "2880",
      district_id: "88",
      name: "Durman MFY"
    },
    {
      id: "2881",
      district_id: "88",
      name: "Azamat MFY"
    },
    {
      id: "2882",
      district_id: "88",
      name: "Qahramon MFY"
    },
    {
      id: "2883",
      district_id: "88",
      name: "Malikrabot QFY"
    },
    {
      id: "2884",
      district_id: "88",
      name: "Sardoba MFY"
    },
    {
      id: "2885",
      district_id: "88",
      name: "Do`stlik MFY"
    },
    {
      id: "2886",
      district_id: "88",
      name: "Xazora QFY"
    },
    {
      id: "2887",
      district_id: "88",
      name: "Malik MFY"
    },
    {
      id: "2888",
      district_id: "88",
      name: "Toshrabod MFY"
    },
    {
      id: "2889",
      district_id: "88",
      name: "Degaron MFY"
    },
    {
      id: "2890",
      district_id: "88",
      name: "Arabxona MFY"
    },
    {
      id: "2891",
      district_id: "88",
      name: "Narpay QFY"
    },
    {
      id: "2892",
      district_id: "88",
      name: "T. Gafurov MFY"
    },
    {
      id: "2893",
      district_id: "88",
      name: "Navro`z MFY"
    },
    {
      id: "2894",
      district_id: "88",
      name: "Paxtaobod MFY"
    },
    {
      id: "2895",
      district_id: "88",
      name: "S. Umarov MFY"
    },
    {
      id: "2896",
      district_id: "88",
      name: "Jaloir QFY"
    },
    {
      id: "2897",
      district_id: "88",
      name: "Allon MFY"
    },
    {
      id: "2898",
      district_id: "88",
      name: "Gurda MFY"
    },
    {
      id: "2899",
      district_id: "88",
      name: "Yuqori bo`g` MFY"
    },
    {
      id: "2900",
      district_id: "88",
      name: "Shibzon MFY"
    },
    {
      id: "2901",
      district_id: "88",
      name: "Arabxona MFY"
    },
    {
      id: "2902",
      district_id: "88",
      name: "Mirsaid Baxrom MFY"
    },
    {
      id: "2903",
      district_id: "88",
      name: "Xisrav MFY"
    },
    {
      id: "2904",
      district_id: "88",
      name: "Ko`hna Qurg`on MFY"
    },
    {
      id: "2905",
      district_id: "88",
      name: "Gulobod MFY"
    },
    {
      id: "2906",
      district_id: "88",
      name: "A.Navoiy MFY"
    },
    {
      id: "2907",
      district_id: "88",
      name: "U. Yusupov MFY"
    },
    {
      id: "2908",
      district_id: "88",
      name: "Farhod MFY"
    },
    {
      id: "2909",
      district_id: "88",
      name: "Dehqon MFY"
    },
    {
      id: "2910",
      district_id: "88",
      name: "Beshkent MFY"
    },
    {
      id: "2911",
      district_id: "89",
      name: "Xuja-Xasan KFY"
    },
    {
      id: "2912",
      district_id: "89",
      name: "Gamxur MFY"
    },
    {
      id: "2913",
      district_id: "89",
      name: "Urtakurgon MFY"
    },
    {
      id: "2914",
      district_id: "89",
      name: "Xasancha MFY"
    },
    {
      id: "2915",
      district_id: "89",
      name: "Malikobod MFY"
    },
    {
      id: "2916",
      district_id: "89",
      name: "Uzilishkent MFY"
    },
    {
      id: "2917",
      district_id: "89",
      name: "Saroy MFY"
    },
    {
      id: "2918",
      district_id: "89",
      name: "Kal`ayi-Azizon MFY"
    },
    {
      id: "2919",
      district_id: "89",
      name: "Xujakurgon MFY"
    },
    {
      id: "2920",
      district_id: "89",
      name: "Okrabot MFY"
    },
    {
      id: "2921",
      district_id: "89",
      name: "Bobodugi MFY"
    },
    {
      id: "2922",
      district_id: "89",
      name: "Gardiyon KFY"
    },
    {
      id: "2923",
      district_id: "89",
      name: "Mayta MFY"
    },
    {
      id: "2924",
      district_id: "89",
      name: "Balandgardiyon MFY"
    },
    {
      id: "2925",
      district_id: "89",
      name: "Kulolon MFY"
    },
    {
      id: "2926",
      district_id: "89",
      name: "Kusharta MFY"
    },
    {
      id: "2927",
      district_id: "89",
      name: "Buston KFY"
    },
    {
      id: "2928",
      district_id: "89",
      name: "Sufiyon MFY"
    },
    {
      id: "2929",
      district_id: "89",
      name: "Kasriashurak MFY"
    },
    {
      id: "2930",
      district_id: "89",
      name: "Bulakrabot MFY"
    },
    {
      id: "2931",
      district_id: "89",
      name: "Xomrabot MFY"
    },
    {
      id: "2932",
      district_id: "89",
      name: "Tavois MFY"
    },
    {
      id: "2933",
      district_id: "89",
      name: "Goyibon MFY"
    },
    {
      id: "2934",
      district_id: "89",
      name: "Gumbaz MFY"
    },
    {
      id: "2935",
      district_id: "89",
      name: "Ok oltin KFY"
    },
    {
      id: "2936",
      district_id: "89",
      name: "Miltikchi MFY"
    },
    {
      id: "2937",
      district_id: "89",
      name: "Oksoch MFY"
    },
    {
      id: "2938",
      district_id: "89",
      name: "Ayronchi MFY"
    },
    {
      id: "2939",
      district_id: "89",
      name: "Vangozi KFY"
    },
    {
      id: "2940",
      district_id: "89",
      name: "Vangozi MFY"
    },
    {
      id: "2941",
      district_id: "89",
      name: "Toshmachit MFY"
    },
    {
      id: "2942",
      district_id: "89",
      name: "Bashir MFY"
    },
    {
      id: "2943",
      district_id: "89",
      name: "Madaniyat MFY"
    },
    {
      id: "2944",
      district_id: "89",
      name: "Tojikon MFY"
    },
    {
      id: "2945",
      district_id: "89",
      name: "Paxtaobod MFY"
    },
    {
      id: "2946",
      district_id: "89",
      name: "Okmachit MFY"
    },
    {
      id: "2947",
      district_id: "89",
      name: "Xafkoriyon MFY"
    },
    {
      id: "2948",
      district_id: "89",
      name: "Zarmetan KFY"
    },
    {
      id: "2949",
      district_id: "89",
      name: "Zarmetan MFY"
    },
    {
      id: "2950",
      district_id: "89",
      name: "Rabot MFY"
    },
    {
      id: "2951",
      district_id: "89",
      name: "Azizobod MFY"
    },
    {
      id: "2952",
      district_id: "89",
      name: "Arabxona MFY"
    },
    {
      id: "2953",
      district_id: "89",
      name: "Varozun MFY"
    },
    {
      id: "2954",
      district_id: "89",
      name: "Sheyxon MFY"
    },
    {
      id: "2955",
      district_id: "89",
      name: "Arabon KFY"
    },
    {
      id: "2956",
      district_id: "89",
      name: "Xusbuddin MFY"
    },
    {
      id: "2957",
      district_id: "89",
      name: "Demas MFY"
    },
    {
      id: "2958",
      district_id: "89",
      name: "Konsurun MFY"
    },
    {
      id: "2959",
      district_id: "89",
      name: "Gulbog MFY"
    },
    {
      id: "2960",
      district_id: "89",
      name: "Yangi Xayot KFY"
    },
    {
      id: "2961",
      district_id: "89",
      name: "Furkat MFY"
    },
    {
      id: "2962",
      district_id: "89",
      name: "Gulzor MFY"
    },
    {
      id: "2963",
      district_id: "89",
      name: "T.Xamid nomli"
    },
    {
      id: "2964",
      district_id: "89",
      name: "Uzbekiston MFY"
    },
    {
      id: "2965",
      district_id: "89",
      name: "F.Xujaev MFY"
    },
    {
      id: "2966",
      district_id: "90",
      name: "Konimex SHFY"
    },
    {
      id: "2967",
      district_id: "90",
      name: "Navruz MFY"
    },
    {
      id: "2968",
      district_id: "90",
      name: "Dustlik MFY"
    },
    {
      id: "2969",
      district_id: "90",
      name: "Birlik MFY"
    },
    {
      id: "2970",
      district_id: "90",
      name: "Chordora KFY"
    },
    {
      id: "2971",
      district_id: "90",
      name: "Shurtepa MFY"
    },
    {
      id: "2972",
      district_id: "90",
      name: "U.Mirzaliev MFY"
    },
    {
      id: "2973",
      district_id: "90",
      name: "Telemen MFY"
    },
    {
      id: "2974",
      district_id: "90",
      name: "Yangiobod KFY"
    },
    {
      id: "2975",
      district_id: "90",
      name: "M.Muratov MFY"
    },
    {
      id: "2976",
      district_id: "90",
      name: "Oxunbobaev MFY"
    },
    {
      id: "2977",
      district_id: "90",
      name: "Yangikazgan KFY"
    },
    {
      id: "2978",
      district_id: "90",
      name: "Karakata KFY"
    },
    {
      id: "2979",
      district_id: "90",
      name: "Sarjal OFY"
    },
    {
      id: "2980",
      district_id: "90",
      name: "Baymurat OFY (chegaraga yaqin )"
    },
    {
      id: "2981",
      district_id: "90",
      name: "Uchtepa OFY (chegaraga yaqin )"
    },
    {
      id: "2982",
      district_id: "91",
      name: "\"Keskanterak\" KFY"
    },
    {
      id: "2983",
      district_id: "91",
      name: "\"Kushkochdi\" MFY"
    },
    {
      id: "2984",
      district_id: "91",
      name: "\"Korajon\" MFY"
    },
    {
      id: "2985",
      district_id: "91",
      name: "Keskanterak MFY"
    },
    {
      id: "2986",
      district_id: "91",
      name: "Yangi xayot MFY"
    },
    {
      id: "2987",
      district_id: "91",
      name: "Kiziloy MFY"
    },
    {
      id: "2988",
      district_id: "91",
      name: "Yangi yul KFY"
    },
    {
      id: "2989",
      district_id: "91",
      name: "Uzbekiston MFY"
    },
    {
      id: "2990",
      district_id: "91",
      name: "Gujbogtepa MFY"
    },
    {
      id: "2991",
      district_id: "91",
      name: "O.Farmonov MFY"
    },
    {
      id: "2992",
      district_id: "91",
      name: "Burkut MFY"
    },
    {
      id: "2993",
      district_id: "91",
      name: "Mirzamumin MFY"
    },
    {
      id: "2994",
      district_id: "91",
      name: "Mavlonbobo MFY"
    },
    {
      id: "2995",
      district_id: "91",
      name: "Paxtakor MFY"
    },
    {
      id: "2996",
      district_id: "91",
      name: "Beshrabod KFY"
    },
    {
      id: "2997",
      district_id: "91",
      name: "Arabxona MFY"
    },
    {
      id: "2998",
      district_id: "91",
      name: "Kuxron MFY"
    },
    {
      id: "2999",
      district_id: "91",
      name: "Beshrabod MFY"
    },
    {
      id: "3000",
      district_id: "91",
      name: "Yukori Beshrabot MFY"
    },
    {
      id: "3001",
      district_id: "91",
      name: "Yangiobod MFY"
    },
    {
      id: "3002",
      district_id: "91",
      name: "Ok oltin MFY"
    },
    {
      id: "3003",
      district_id: "91",
      name: "Kelachi M.F.Y"
    },
    {
      id: "3004",
      district_id: "91",
      name: "Olchin KFY"
    },
    {
      id: "3005",
      district_id: "91",
      name: "ToshrabotMFY"
    },
    {
      id: "3006",
      district_id: "91",
      name: "Kalkonota MFY"
    },
    {
      id: "3007",
      district_id: "91",
      name: "Uchtut M.F.Y"
    },
    {
      id: "3008",
      district_id: "91",
      name: "Mexnat M.F.Y"
    },
    {
      id: "3009",
      district_id: "91",
      name: "Xalovat-tepa M.F.Y"
    },
    {
      id: "3010",
      district_id: "91",
      name: "Yosh kuch MFY."
    },
    {
      id: "3011",
      district_id: "91",
      name: "Mirzo Ulug`bek"
    },
    {
      id: "3012",
      district_id: "91",
      name: "Arabsaroy KFY"
    },
    {
      id: "3013",
      district_id: "91",
      name: "Karvon MFY"
    },
    {
      id: "3014",
      district_id: "91",
      name: "Sovungar MFY"
    },
    {
      id: "3015",
      district_id: "91",
      name: "Arabxona MFY"
    },
    {
      id: "3016",
      district_id: "91",
      name: "Saroy MFY"
    },
    {
      id: "3017",
      district_id: "91",
      name: "Xashman MFY"
    },
    {
      id: "3018",
      district_id: "91",
      name: "Vomitan MFY"
    },
    {
      id: "3019",
      district_id: "91",
      name: "Armijon MFY"
    },
    {
      id: "3020",
      district_id: "91",
      name: "Duldul MFY"
    },
    {
      id: "3021",
      district_id: "91",
      name: "Turkiston QFY"
    },
    {
      id: "3022",
      district_id: "91",
      name: "Kiziltepa MFY"
    },
    {
      id: "3023",
      district_id: "91",
      name: "Yangi kuch MFY"
    },
    {
      id: "3024",
      district_id: "91",
      name: "Yaltirabot M.F.Y"
    },
    {
      id: "3025",
      district_id: "91",
      name: "Qizilrabot MFY"
    },
    {
      id: "3026",
      district_id: "91",
      name: "Yangiqurg`on QFY"
    },
    {
      id: "3027",
      district_id: "91",
      name: "Charvokguzar M.F.Y"
    },
    {
      id: "3028",
      district_id: "91",
      name: "Navkar M.F.Y"
    },
    {
      id: "3029",
      district_id: "91",
      name: "Sarbozor MFY"
    },
    {
      id: "3030",
      district_id: "92",
      name: "Hayot MFY"
    },
    {
      id: "3031",
      district_id: "92",
      name: "Istiqlol MFY"
    },
    {
      id: "3032",
      district_id: "92",
      name: "Yangi ariq MFY"
    },
    {
      id: "3033",
      district_id: "92",
      name: "Guliston MFY"
    },
    {
      id: "3034",
      district_id: "92",
      name: "Binokor MFY"
    },
    {
      id: "3035",
      district_id: "92",
      name: "Janubiy MFY"
    },
    {
      id: "3036",
      district_id: "92",
      name: "Bunyodkor MFY"
    },
    {
      id: "3037",
      district_id: "92",
      name: "O`zbekiston MFY"
    },
    {
      id: "3038",
      district_id: "92",
      name: "G`alaba MFY"
    },
    {
      id: "3039",
      district_id: "92",
      name: "Zarafshon MFY"
    },
    {
      id: "3040",
      district_id: "92",
      name: "Yangiobod MFY"
    },
    {
      id: "3041",
      district_id: "92",
      name: "Lochin MFY"
    },
    {
      id: "3042",
      district_id: "92",
      name: "Me`mor MFY"
    },
    {
      id: "3043",
      district_id: "92",
      name: "Muruvvat MFY"
    },
    {
      id: "3044",
      district_id: "92",
      name: "Orzu MFY"
    },
    {
      id: "3045",
      district_id: "92",
      name: "Umid MFY"
    },
    {
      id: "3046",
      district_id: "92",
      name: "Baxor MFY"
    },
    {
      id: "3047",
      district_id: "92",
      name: "Xumo MFY"
    },
    {
      id: "3048",
      district_id: "92",
      name: "Do`stlik MFY"
    },
    {
      id: "3049",
      district_id: "92",
      name: "Oltin Vodiy MFY"
    },
    {
      id: "3050",
      district_id: "92",
      name: "Matonat MFY"
    },
    {
      id: "3051",
      district_id: "92",
      name: "Gulzor MFY"
    },
    {
      id: "3052",
      district_id: "92",
      name: "Turon MFY"
    },
    {
      id: "3053",
      district_id: "92",
      name: "Mustaqillik MFY"
    },
    {
      id: "3054",
      district_id: "92",
      name: "Ishonch MFY"
    },
    {
      id: "3055",
      district_id: "92",
      name: "Vatan MFY"
    },
    {
      id: "3056",
      district_id: "92",
      name: "Chinor MFY"
    },
    {
      id: "3057",
      district_id: "92",
      name: "Kimyogar MFY"
    },
    {
      id: "3058",
      district_id: "92",
      name: "Tinchlik MFY"
    },
    {
      id: "3059",
      district_id: "92",
      name: "Xoncharvoq MFY"
    },
    {
      id: "3060",
      district_id: "93",
      name: "Sayidato MFY"
    },
    {
      id: "3061",
      district_id: "93",
      name: "Okmachit MFY"
    },
    {
      id: "3062",
      district_id: "93",
      name: "Isiklol MFY"
    },
    {
      id: "3063",
      district_id: "93",
      name: "Turko MFY"
    },
    {
      id: "3064",
      district_id: "93",
      name: "A.Navoiy MFY"
    },
    {
      id: "3065",
      district_id: "93",
      name: "Shaxriston MFY"
    },
    {
      id: "3066",
      district_id: "93",
      name: "Mirishkor MFY"
    },
    {
      id: "3067",
      district_id: "93",
      name: "G.Gulom MFY"
    },
    {
      id: "3068",
      district_id: "93",
      name: "E.Sudur MFY"
    },
    {
      id: "3069",
      district_id: "93",
      name: "Budik MFY"
    },
    {
      id: "3070",
      district_id: "93",
      name: "Ibn Sino MFY"
    },
    {
      id: "3071",
      district_id: "93",
      name: "Mustakillik MFY"
    },
    {
      id: "3072",
      district_id: "93",
      name: "\"Nurota 60 yil\" MFY"
    },
    {
      id: "3073",
      district_id: "93",
      name: "Nurota KFY"
    },
    {
      id: "3074",
      district_id: "93",
      name: "Yangixayot MFY"
    },
    {
      id: "3075",
      district_id: "93",
      name: "Amon Jalil MFY"
    },
    {
      id: "3076",
      district_id: "93",
      name: "Chuya KFY"
    },
    {
      id: "3077",
      district_id: "93",
      name: "Chuya MFY"
    },
    {
      id: "3078",
      district_id: "93",
      name: "Kadok MFY"
    },
    {
      id: "3079",
      district_id: "93",
      name: "Jarma MFY"
    },
    {
      id: "3080",
      district_id: "93",
      name: "Gum KFY"
    },
    {
      id: "3081",
      district_id: "93",
      name: "Yangiturmush MFY"
    },
    {
      id: "3082",
      district_id: "93",
      name: "Suvlik MFY"
    },
    {
      id: "3083",
      district_id: "93",
      name: "Istiklol MFY"
    },
    {
      id: "3084",
      district_id: "93",
      name: "Dexibaland KFY"
    },
    {
      id: "3085",
      district_id: "93",
      name: "Dexibaland MFY"
    },
    {
      id: "3086",
      district_id: "93",
      name: "Avazsoy MFY"
    },
    {
      id: "3087",
      district_id: "93",
      name: "Orasoy MFY"
    },
    {
      id: "3088",
      district_id: "93",
      name: "G`ozgon KFY"
    },
    {
      id: "3089",
      district_id: "93",
      name: "Guliston MFY"
    },
    {
      id: "3090",
      district_id: "93",
      name: "Shayxon MFY"
    },
    {
      id: "3091",
      district_id: "93",
      name: "Marmar-obod MFY"
    },
    {
      id: "3092",
      district_id: "93",
      name: "Tumor MFY"
    },
    {
      id: "3093",
      district_id: "93",
      name: "Kizilcha KFY"
    },
    {
      id: "3094",
      district_id: "93",
      name: "Kizilcha MFY"
    },
    {
      id: "3095",
      district_id: "93",
      name: "Sentob KFY"
    },
    {
      id: "3096",
      district_id: "93",
      name: "Sentob MFY"
    },
    {
      id: "3097",
      district_id: "93",
      name: "Temirkovuk MFY"
    },
    {
      id: "3098",
      district_id: "93",
      name: "A.Zayniddinov MFY"
    },
    {
      id: "3099",
      district_id: "94",
      name: "\"Tomdibuloq\" OFY"
    },
    {
      id: "3100",
      district_id: "94",
      name: "\"Aktau\" OFY"
    },
    {
      id: "3101",
      district_id: "94",
      name: "\"Ayakquduq\" OFY"
    },
    {
      id: "3102",
      district_id: "94",
      name: "\"Sukitti\" OFY (chegarada joylashgan)"
    },
    {
      id: "3103",
      district_id: "94",
      name: "\"Kerizbulak\" OFY (chegarada joylashgan)"
    },
    {
      id: "3104",
      district_id: "94",
      name: "\"Keregetau\" OFY (chegarada joylashgan)"
    },
    {
      id: "3105",
      district_id: "94",
      name: "\"Shieli\" OFY (chegarada joylashgan)"
    },
    {
      id: "3106",
      district_id: "95",
      name: "Dustlik MFY"
    },
    {
      id: "3107",
      district_id: "95",
      name: "Mustakillik MFY"
    },
    {
      id: "3108",
      district_id: "95",
      name: "Aytim MFY"
    },
    {
      id: "3109",
      district_id: "95",
      name: "Navoiy MFY"
    },
    {
      id: "3110",
      district_id: "95",
      name: "Abay MFY"
    },
    {
      id: "3111",
      district_id: "95",
      name: "Ko`kpatas MFY"
    },
    {
      id: "3112",
      district_id: "95",
      name: "L.Murashimov OFY"
    },
    {
      id: "3113",
      district_id: "95",
      name: "Bozdun OFY"
    },
    {
      id: "3114",
      district_id: "95",
      name: "Mingbulok OFY"
    },
    {
      id: "3115",
      district_id: "95",
      name: "Altintau OFY (chegaraga yaqin joylashgan)"
    },
    {
      id: "3116",
      district_id: "95",
      name: "Uzunkuduk OFY"
    },
    {
      id: "3117",
      district_id: "95",
      name: "Avangard OFY (chegaraga yaqin joylashgan)"
    },
    {
      id: "3118",
      district_id: "96",
      name: "Yangirobod QFY"
    },
    {
      id: "3119",
      district_id: "96",
      name: "Damariq MFY"
    },
    {
      id: "3120",
      district_id: "96",
      name: "Samarqand MFY"
    },
    {
      id: "3121",
      district_id: "96",
      name: "Paraxun MFY"
    },
    {
      id: "3122",
      district_id: "96",
      name: "Navbahor MFY"
    },
    {
      id: "3123",
      district_id: "96",
      name: "Chinobod MFY"
    },
    {
      id: "3124",
      district_id: "96",
      name: "R.Maxmanov MFY"
    },
    {
      id: "3125",
      district_id: "96",
      name: "Q.Razzoqov MFY"
    },
    {
      id: "3126",
      district_id: "96",
      name: "Langar MFY"
    },
    {
      id: "3127",
      district_id: "96",
      name: "Yangirobod MFY"
    },
    {
      id: "3128",
      district_id: "96",
      name: "Oq-oltin QFY"
    },
    {
      id: "3129",
      district_id: "96",
      name: "Bogishamol MFY"
    },
    {
      id: "3130",
      district_id: "96",
      name: "P.Yorloqobov MFY"
    },
    {
      id: "3131",
      district_id: "96",
      name: "Chechak-ota MFY"
    },
    {
      id: "3132",
      district_id: "96",
      name: "Q.Gadoev MFY"
    },
    {
      id: "3133",
      district_id: "96",
      name: "Mustaqillik MFY"
    },
    {
      id: "3134",
      district_id: "96",
      name: "Bogchakolon QFY"
    },
    {
      id: "3135",
      district_id: "96",
      name: "Navruz MFY"
    },
    {
      id: "3136",
      district_id: "96",
      name: "Zarafshon MFY"
    },
    {
      id: "3137",
      district_id: "96",
      name: "Bogchakolon MFY"
    },
    {
      id: "3138",
      district_id: "96",
      name: "Tinchlik MFY"
    },
    {
      id: "3139",
      district_id: "96",
      name: "Yangi qurulish MFY"
    },
    {
      id: "3140",
      district_id: "96",
      name: "Qoracha QFY"
    },
    {
      id: "3141",
      district_id: "96",
      name: "U.Boirov MFY"
    },
    {
      id: "3142",
      district_id: "96",
      name: "M.Bobomurodov MFY"
    },
    {
      id: "3143",
      district_id: "96",
      name: "A.Navoiy MFY"
    },
    {
      id: "3144",
      district_id: "96",
      name: "Kattasoy MFY"
    },
    {
      id: "3145",
      district_id: "96",
      name: "Quchchi MFY"
    },
    {
      id: "3146",
      district_id: "96",
      name: "Changir MFY"
    },
    {
      id: "3147",
      district_id: "96",
      name: "Qoracha MFY"
    },
    {
      id: "3148",
      district_id: "96",
      name: "E.Layliev MFY"
    },
    {
      id: "3149",
      district_id: "96",
      name: "Saroy MFY"
    },
    {
      id: "3150",
      district_id: "96",
      name: "Zarbdor MFY"
    },
    {
      id: "3151",
      district_id: "96",
      name: "Uzbekiston QFY"
    },
    {
      id: "3152",
      district_id: "96",
      name: "Galabek MFY"
    },
    {
      id: "3153",
      district_id: "96",
      name: "J.Hamroev MFY"
    },
    {
      id: "3154",
      district_id: "96",
      name: "K.Arab MFY"
    },
    {
      id: "3155",
      district_id: "96",
      name: "A.Temur MFY"
    },
    {
      id: "3156",
      district_id: "96",
      name: "Qurg`oncha MFY"
    },
    {
      id: "3157",
      district_id: "96",
      name: "T.Shirinov MFY"
    },
    {
      id: "3158",
      district_id: "96",
      name: "Yangiyul QFY"
    },
    {
      id: "3159",
      district_id: "96",
      name: "Paxtakor MFY"
    },
    {
      id: "3160",
      district_id: "96",
      name: "Novja MFY"
    },
    {
      id: "3161",
      district_id: "96",
      name: "Xujakulobod MFY"
    },
    {
      id: "3162",
      district_id: "96",
      name: "Toshquloq MFY"
    },
    {
      id: "3163",
      district_id: "96",
      name: "Ikrom Karvon MFY"
    },
    {
      id: "3164",
      district_id: "96",
      name: "Istiqlol MFY"
    },
    {
      id: "3165",
      district_id: "96",
      name: "Tamabaxrin MFY"
    },
    {
      id: "3166",
      district_id: "96",
      name: "Polvon ota MFY"
    },
    {
      id: "3167",
      district_id: "96",
      name: "Avoqli MFY"
    },
    {
      id: "3168",
      district_id: "96",
      name: "Kuksaroy MFY"
    },
    {
      id: "3169",
      district_id: "96",
      name: "Olchinobod QFY"
    },
    {
      id: "3170",
      district_id: "96",
      name: "Oq-oltin MFY"
    },
    {
      id: "3171",
      district_id: "96",
      name: "T.Narzullaev MFY"
    },
    {
      id: "3172",
      district_id: "96",
      name: "Jaloyir MFY"
    },
    {
      id: "3173",
      district_id: "96",
      name: "A.Jumanov MFY"
    },
    {
      id: "3174",
      district_id: "96",
      name: "M.Ulug`bek MFY"
    },
    {
      id: "3175",
      district_id: "96",
      name: "N.Uroqov MFY"
    },
    {
      id: "3176",
      district_id: "96",
      name: "Madaniyat MFY"
    },
    {
      id: "3177",
      district_id: "96",
      name: "Xonaqa QFY"
    },
    {
      id: "3178",
      district_id: "96",
      name: "Yangi MFY"
    },
    {
      id: "3179",
      district_id: "96",
      name: "Bug`irdoq MFY"
    },
    {
      id: "3180",
      district_id: "96",
      name: "Jaloer MFY"
    },
    {
      id: "3181",
      district_id: "96",
      name: "Uyshun MFY"
    },
    {
      id: "3182",
      district_id: "96",
      name: "Chag`atoy MFY"
    },
    {
      id: "3183",
      district_id: "96",
      name: "Tasmachi MFY"
    },
    {
      id: "3184",
      district_id: "96",
      name: "Oltinobod MFY"
    },
    {
      id: "3185",
      district_id: "96",
      name: "Mirdosh MFY"
    },
    {
      id: "3186",
      district_id: "96",
      name: "Uchqora MFY"
    },
    {
      id: "3187",
      district_id: "96",
      name: "Pulkan Shoir QFY"
    },
    {
      id: "3188",
      district_id: "96",
      name: "Oltinsoy MFY"
    },
    {
      id: "3189",
      district_id: "96",
      name: "Angidon MFY"
    },
    {
      id: "3190",
      district_id: "96",
      name: "Sangijuman MFY"
    },
    {
      id: "3191",
      district_id: "96",
      name: "Baxshijar MFY"
    },
    {
      id: "3192",
      district_id: "96",
      name: "Oqtepa MFY"
    },
    {
      id: "3193",
      district_id: "96",
      name: "Maydon MFY"
    },
    {
      id: "3194",
      district_id: "97",
      name: "A.Dadaxonov MFY"
    },
    {
      id: "3195",
      district_id: "97",
      name: "A.Jomiy MFY"
    },
    {
      id: "3196",
      district_id: "97",
      name: "A.Navoiy MFY"
    },
    {
      id: "3197",
      district_id: "97",
      name: "Beshketmon MFY"
    },
    {
      id: "3198",
      district_id: "97",
      name: "Baxoriston MFY"
    },
    {
      id: "3199",
      district_id: "97",
      name: "Bog kucha MFY"
    },
    {
      id: "3200",
      district_id: "97",
      name: "Bog MFY"
    },
    {
      id: "3201",
      district_id: "97",
      name: "Bogishamol MFY"
    },
    {
      id: "3202",
      district_id: "97",
      name: "Bogishamol-1 MFY"
    },
    {
      id: "3203",
      district_id: "97",
      name: "Bomraxa MFY"
    },
    {
      id: "3204",
      district_id: "97",
      name: "Bulokboshi MFY"
    },
    {
      id: "3205",
      district_id: "97",
      name: "Buston MFY"
    },
    {
      id: "3206",
      district_id: "97",
      name: "Chak MFY"
    },
    {
      id: "3207",
      district_id: "97",
      name: "Chindovul MFY"
    },
    {
      id: "3208",
      district_id: "97",
      name: "Chindovul QFY"
    },
    {
      id: "3209",
      district_id: "97",
      name: "Chorbog MFY"
    },
    {
      id: "3210",
      district_id: "97",
      name: "Chungbosh MFY"
    },
    {
      id: "3211",
      district_id: "97",
      name: "Chust kucha MFY"
    },
    {
      id: "3212",
      district_id: "97",
      name: "Dam MFY"
    },
    {
      id: "3213",
      district_id: "97",
      name: "Dilshod MFY"
    },
    {
      id: "3214",
      district_id: "97",
      name: "Gul bog MFY"
    },
    {
      id: "3215",
      district_id: "97",
      name: "Guliston-1 MFY"
    },
    {
      id: "3216",
      district_id: "97",
      name: "Guliston-2 MFY"
    },
    {
      id: "3217",
      district_id: "97",
      name: "Gulobod MFY"
    },
    {
      id: "3218",
      district_id: "97",
      name: "Gurmiron MFY"
    },
    {
      id: "3219",
      district_id: "97",
      name: "Guzar MFY"
    },
    {
      id: "3220",
      district_id: "97",
      name: "Iftixor MFY"
    },
    {
      id: "3221",
      district_id: "97",
      name: "Jar MFY"
    },
    {
      id: "3222",
      district_id: "97",
      name: "Korasuv MFY"
    },
    {
      id: "3223",
      district_id: "97",
      name: "Koson QFY"
    },
    {
      id: "3224",
      district_id: "97",
      name: "Kozokovul MFY"
    },
    {
      id: "3225",
      district_id: "97",
      name: "Kukumboy MFY"
    },
    {
      id: "3226",
      district_id: "97",
      name: "M`azam MFY"
    },
    {
      id: "3227",
      district_id: "97",
      name: "Navbaxor MFY"
    },
    {
      id: "3228",
      district_id: "97",
      name: "Navbaxor-1 MFY"
    },
    {
      id: "3229",
      district_id: "97",
      name: "Navruz MFY"
    },
    {
      id: "3230",
      district_id: "97",
      name: "o`Ashirov MFY"
    },
    {
      id: "3231",
      district_id: "97",
      name: "Obod MFY"
    },
    {
      id: "3232",
      district_id: "97",
      name: "Obodon MFY"
    },
    {
      id: "3233",
      district_id: "97",
      name: "Olmazor MFY"
    },
    {
      id: "3234",
      district_id: "97",
      name: "Ozod MFY"
    },
    {
      id: "3235",
      district_id: "97",
      name: "Panixon MFY"
    },
    {
      id: "3236",
      district_id: "97",
      name: "Qorasuv QFY"
    },
    {
      id: "3237",
      district_id: "97",
      name: "Ququmboy QFY"
    },
    {
      id: "3238",
      district_id: "97",
      name: "Ravot MFY"
    },
    {
      id: "3239",
      district_id: "97",
      name: "S.Sheroziy MFY"
    },
    {
      id: "3240",
      district_id: "97",
      name: "Sadacha MFY"
    },
    {
      id: "3241",
      district_id: "97",
      name: "Shayxon MFY"
    },
    {
      id: "3242",
      district_id: "97",
      name: "Shirin QFY"
    },
    {
      id: "3243",
      district_id: "97",
      name: "Soy buyi MFY"
    },
    {
      id: "3244",
      district_id: "97",
      name: "Soycha MFY"
    },
    {
      id: "3245",
      district_id: "97",
      name: "Tergachi QFY"
    },
    {
      id: "3246",
      district_id: "97",
      name: "Tagijar MFY"
    },
    {
      id: "3247",
      district_id: "97",
      name: "Takarang MFY"
    },
    {
      id: "3248",
      district_id: "97",
      name: "Taxta kuprik MFY"
    },
    {
      id: "3249",
      district_id: "97",
      name: "Uchkurgon MFY"
    },
    {
      id: "3250",
      district_id: "97",
      name: "Urikzor MFY"
    },
    {
      id: "3251",
      district_id: "97",
      name: "Urta kucha MFY"
    },
    {
      id: "3252",
      district_id: "97",
      name: "Urta tukay MFY"
    },
    {
      id: "3253",
      district_id: "97",
      name: "O`zbekiston MFY"
    },
    {
      id: "3254",
      district_id: "97",
      name: "Uzunkishlok MFY"
    },
    {
      id: "3255",
      district_id: "97",
      name: "Xonkurgon MFY"
    },
    {
      id: "3256",
      district_id: "97",
      name: "Xuriyat MFY"
    },
    {
      id: "3257",
      district_id: "97",
      name: "Xurriyat-1 MFY"
    },
    {
      id: "3258",
      district_id: "97",
      name: "Yalama MFY"
    },
    {
      id: "3259",
      district_id: "97",
      name: "Yangi shaxar MFY"
    },
    {
      id: "3260",
      district_id: "97",
      name: "Yangi yul MFY"
    },
    {
      id: "3261",
      district_id: "97",
      name: "Yoshlik MFY"
    },
    {
      id: "3262",
      district_id: "97",
      name: "Yoshlik QFY"
    },
    {
      id: "3263",
      district_id: "97",
      name: "Yu.Sh.M MFY"
    },
    {
      id: "3264",
      district_id: "98",
      name: "Alami MFY"
    },
    {
      id: "3265",
      district_id: "98",
      name: "Beserka MFY"
    },
    {
      id: "3266",
      district_id: "98",
      name: "Baland Gurtepa MFY"
    },
    {
      id: "3267",
      district_id: "98",
      name: "Birlashgan MFY"
    },
    {
      id: "3268",
      district_id: "98",
      name: "Bozorboshi MFY"
    },
    {
      id: "3269",
      district_id: "98",
      name: "Bo`ston qfy"
    },
    {
      id: "3270",
      district_id: "98",
      name: "Chordona MFY"
    },
    {
      id: "3271",
      district_id: "98",
      name: "Damkul MFY"
    },
    {
      id: "3272",
      district_id: "98",
      name: "Dovduq QFY"
    },
    {
      id: "3273",
      district_id: "98",
      name: "Farovon MFY"
    },
    {
      id: "3274",
      district_id: "98",
      name: "Guliston MFY"
    },
    {
      id: "3275",
      district_id: "98",
      name: "Gulobog` QFY"
    },
    {
      id: "3276",
      district_id: "98",
      name: "Gurtepa QFY"
    },
    {
      id: "3277",
      district_id: "98",
      name: "Ingichka MFY"
    },
    {
      id: "3278",
      district_id: "98",
      name: "Jomashuy SHFY"
    },
    {
      id: "3279",
      district_id: "98",
      name: "Kayrogochovul MFY"
    },
    {
      id: "3280",
      district_id: "98",
      name: "Kichik jomashuy MFY"
    },
    {
      id: "3281",
      district_id: "98",
      name: "Kirkchek MFY"
    },
    {
      id: "3282",
      district_id: "98",
      name: "Kizilkum MFY"
    },
    {
      id: "3283",
      district_id: "98",
      name: "Kolgandaryo"
    },
    {
      id: "3284",
      district_id: "98",
      name: "Kora shaxar MFY"
    },
    {
      id: "3285",
      district_id: "98",
      name: "Kozokovul MFY"
    },
    {
      id: "3286",
      district_id: "98",
      name: "Kugolikul MFY"
    },
    {
      id: "3287",
      district_id: "98",
      name: "Kurikobod MFY"
    },
    {
      id: "3288",
      district_id: "98",
      name: "Kushkishlok MFY"
    },
    {
      id: "3289",
      district_id: "98",
      name: "Mexnaobod MFY"
    },
    {
      id: "3290",
      district_id: "98",
      name: "Mexnaobod QFY"
    },
    {
      id: "3291",
      district_id: "98",
      name: "Madaniyat MFY"
    },
    {
      id: "3292",
      district_id: "98",
      name: "Madiyarovul MFY"
    },
    {
      id: "3293",
      district_id: "98",
      name: "Momoxon QFY"
    },
    {
      id: "3294",
      district_id: "98",
      name: "Momoxon MFY"
    },
    {
      id: "3295",
      district_id: "98",
      name: "Mulkobod MFY"
    },
    {
      id: "3296",
      district_id: "98",
      name: "Mustakillik MFY"
    },
    {
      id: "3297",
      district_id: "98",
      name: "Nayman MFY"
    },
    {
      id: "3298",
      district_id: "98",
      name: "Oltinko`l QFY"
    },
    {
      id: "3299",
      district_id: "98",
      name: "Oyb?k MFY"
    },
    {
      id: "3300",
      district_id: "98",
      name: "Paxtakor MFY"
    },
    {
      id: "3301",
      district_id: "98",
      name: "Serxarakat MFY"
    },
    {
      id: "3302",
      district_id: "98",
      name: "Tegirmonboshi MFY"
    },
    {
      id: "3303",
      district_id: "98",
      name: "Tollik MFY"
    },
    {
      id: "3304",
      district_id: "98",
      name: "Tupsada MFY"
    },
    {
      id: "3305",
      district_id: "98",
      name: "Urta kishlok MFY"
    },
    {
      id: "3306",
      district_id: "98",
      name: "Uyurchi damkul MFY"
    },
    {
      id: "3307",
      district_id: "98",
      name: "Uzgarish MFY"
    },
    {
      id: "3308",
      district_id: "98",
      name: "Xayitobod MFY"
    },
    {
      id: "3309",
      district_id: "98",
      name: "Yakkatol MFY"
    },
    {
      id: "3310",
      district_id: "98",
      name: "Yangi Gulbog` MFY"
    },
    {
      id: "3311",
      district_id: "98",
      name: "Yangiobod MFY"
    },
    {
      id: "3312",
      district_id: "98",
      name: "Yoshlik MFY"
    },
    {
      id: "3313",
      district_id: "99",
      name: "Anjirzor MFY"
    },
    {
      id: "3314",
      district_id: "99",
      name: "Bektemir (jamoatchi) MFY"
    },
    {
      id: "3315",
      district_id: "99",
      name: "Beshkapa MFY"
    },
    {
      id: "3316",
      district_id: "99",
      name: "Bodomzor (jamoatchi) MFY"
    },
    {
      id: "3317",
      district_id: "99",
      name: "Bog` kucha MFY"
    },
    {
      id: "3318",
      district_id: "99",
      name: "Bog` mahalla MFY"
    },
    {
      id: "3319",
      district_id: "99",
      name: "Bog`ishamol QFY"
    },
    {
      id: "3320",
      district_id: "99",
      name: "Bozorboshi MFY"
    },
    {
      id: "3321",
      district_id: "99",
      name: "Bo`ston MFY"
    },
    {
      id: "3322",
      district_id: "99",
      name: "Chag`ir MFY"
    },
    {
      id: "3323",
      district_id: "99",
      name: "Dasht MFY"
    },
    {
      id: "3324",
      district_id: "99",
      name: "Elatan MFY"
    },
    {
      id: "3325",
      district_id: "99",
      name: "Eshobod MFY"
    },
    {
      id: "3326",
      district_id: "99",
      name: "G`alcha-1 MFY"
    },
    {
      id: "3327",
      district_id: "99",
      name: "G`alcha-2 MFY"
    },
    {
      id: "3328",
      district_id: "99",
      name: "G`alcha-3 MFY"
    },
    {
      id: "3329",
      district_id: "99",
      name: "G`lcha QFY"
    },
    {
      id: "3330",
      district_id: "99",
      name: "G`irvon QFY"
    },
    {
      id: "3331",
      district_id: "99",
      name: "G`uldirov MFY"
    },
    {
      id: "3332",
      district_id: "99",
      name: "I.Raxmatov QFY"
    },
    {
      id: "3333",
      district_id: "99",
      name: "Irvadon -1 MFY"
    },
    {
      id: "3334",
      district_id: "99",
      name: "Irvadon -2 MFY"
    },
    {
      id: "3335",
      district_id: "99",
      name: "Irvadon -3 MFY"
    },
    {
      id: "3336",
      district_id: "99",
      name: "Irvadon QFY"
    },
    {
      id: "3337",
      district_id: "99",
      name: "Katta Toshbuloq MFY"
    },
    {
      id: "3338",
      district_id: "99",
      name: "Kaykovus MFY"
    },
    {
      id: "3339",
      district_id: "99",
      name: "Kichik qurama MFY"
    },
    {
      id: "3340",
      district_id: "99",
      name: "Kichik Toshbuloq MFY"
    },
    {
      id: "3341",
      district_id: "99",
      name: "Ko`l bo`yi MFY"
    },
    {
      id: "3342",
      district_id: "99",
      name: "Ko`lqo`rg`on (jamoatchi) MFY"
    },
    {
      id: "3343",
      district_id: "99",
      name: "Qumkurg`on QFY"
    },
    {
      id: "3344",
      district_id: "99",
      name: "Kurmak MFY"
    },
    {
      id: "3345",
      district_id: "99",
      name: "Mallahovuz MFY"
    },
    {
      id: "3346",
      district_id: "99",
      name: "Mallaxovuz MFY"
    },
    {
      id: "3347",
      district_id: "99",
      name: "Mirishkor QFY"
    },
    {
      id: "3348",
      district_id: "99",
      name: "Mirishkor-1 MFY"
    },
    {
      id: "3349",
      district_id: "99",
      name: "Mirishkor-2 MFY"
    },
    {
      id: "3350",
      district_id: "99",
      name: "Mullakudung-1 MFY"
    },
    {
      id: "3351",
      district_id: "99",
      name: "Mullakudung-2 MFY"
    },
    {
      id: "3352",
      district_id: "99",
      name: "Ne`matjon MFY"
    },
    {
      id: "3353",
      district_id: "99",
      name: "No`g`ayqo`rg`on MFY"
    },
    {
      id: "3354",
      district_id: "99",
      name: "Olaxamak MFY"
    },
    {
      id: "3355",
      district_id: "99",
      name: "Oq ?r MFY"
    },
    {
      id: "3356",
      district_id: "99",
      name: "Oq buloq MFY"
    },
    {
      id: "3357",
      district_id: "99",
      name: "Oq-Er MFY"
    },
    {
      id: "3358",
      district_id: "99",
      name: "Orzu MFY"
    },
    {
      id: "3359",
      district_id: "99",
      name: "Oxunboboev QFY"
    },
    {
      id: "3360",
      district_id: "99",
      name: "O`lmas MFY"
    },
    {
      id: "3361",
      district_id: "99",
      name: "O`rta G`irvon MFY"
    },
    {
      id: "3362",
      district_id: "99",
      name: "O`rta Rovuston MFY"
    },
    {
      id: "3363",
      district_id: "99",
      name: "Past Qiyot MFY"
    },
    {
      id: "3364",
      district_id: "99",
      name: "Qirg`izqo`rg`on MFY"
    },
    {
      id: "3365",
      district_id: "99",
      name: "Qorako`l MFY"
    },
    {
      id: "3366",
      district_id: "99",
      name: "Qoratepa 1 MFY"
    },
    {
      id: "3367",
      district_id: "99",
      name: "Qoratepa 2 MFY"
    },
    {
      id: "3368",
      district_id: "99",
      name: "Qo`qon-qishloq MFY"
    },
    {
      id: "3369",
      district_id: "99",
      name: "Qumqo`rg`on 1 MFY"
    },
    {
      id: "3370",
      district_id: "99",
      name: "Qumqo`rg`on 2 MFY"
    },
    {
      id: "3371",
      district_id: "99",
      name: "Qurama MFY"
    },
    {
      id: "3372",
      district_id: "99",
      name: "Quyi G`irvon MFY"
    },
    {
      id: "3373",
      district_id: "99",
      name: "Quyi Rovuston MFY"
    },
    {
      id: "3374",
      district_id: "99",
      name: "Sherbuloq MFY"
    },
    {
      id: "3375",
      district_id: "99",
      name: "Shamsiko`l MFY"
    },
    {
      id: "3376",
      district_id: "99",
      name: "Shishaki MFY"
    },
    {
      id: "3377",
      district_id: "99",
      name: "Sho`rqishloq MFY"
    },
    {
      id: "3378",
      district_id: "99",
      name: "Sho`rqo`rg`on MFY"
    },
    {
      id: "3379",
      district_id: "99",
      name: "Shurkishlok QFY"
    },
    {
      id: "3380",
      district_id: "99",
      name: "Tepa MFY"
    },
    {
      id: "3381",
      district_id: "99",
      name: "Tepa Qiyot MFY"
    },
    {
      id: "3382",
      district_id: "99",
      name: "Tepakurg`on QFY"
    },
    {
      id: "3383",
      district_id: "99",
      name: "Tepaqo`rg`on MFY"
    },
    {
      id: "3384",
      district_id: "99",
      name: "Toshbuloq SHFY"
    },
    {
      id: "3385",
      district_id: "99",
      name: "To`sar MFY"
    },
    {
      id: "3386",
      district_id: "99",
      name: "Urganji MFY"
    },
    {
      id: "3387",
      district_id: "99",
      name: "Uzbekiston QFY"
    },
    {
      id: "3388",
      district_id: "99",
      name: "Xonobod QFY"
    },
    {
      id: "3389",
      district_id: "99",
      name: "Xonobod MFY"
    },
    {
      id: "3390",
      district_id: "99",
      name: "xo`jaqishloq-1 MFY"
    },
    {
      id: "3391",
      district_id: "99",
      name: "xo`jaqishloq-2 MFY"
    },
    {
      id: "3392",
      district_id: "99",
      name: "Yangi yo`l MFY"
    },
    {
      id: "3393",
      district_id: "99",
      name: "Yuqori G`irvon MFY"
    },
    {
      id: "3394",
      district_id: "99",
      name: "Yuqori Rovuston MFY"
    },
    {
      id: "3395",
      district_id: "100",
      name: "A.Beruniy MFY"
    },
    {
      id: "3396",
      district_id: "100",
      name: "A.Fazliy MFY"
    },
    {
      id: "3397",
      district_id: "100",
      name: "Alpomish MFY"
    },
    {
      id: "3398",
      district_id: "100",
      name: "Atangan Guzar MFY"
    },
    {
      id: "3399",
      district_id: "100",
      name: "Avliyo Domla MFY"
    },
    {
      id: "3400",
      district_id: "100",
      name: "Axsikent MFY"
    },
    {
      id: "3401",
      district_id: "100",
      name: "B. Eshon MFY"
    },
    {
      id: "3402",
      district_id: "100",
      name: "Baxor MFY"
    },
    {
      id: "3403",
      district_id: "100",
      name: "Baynalminal MFY"
    },
    {
      id: "3404",
      district_id: "100",
      name: "Bunyodkor MFY"
    },
    {
      id: "3405",
      district_id: "100",
      name: "Buston MFY"
    },
    {
      id: "3406",
      district_id: "100",
      name: "Chinor MFY"
    },
    {
      id: "3407",
      district_id: "100",
      name: "Chorsu MFY"
    },
    {
      id: "3408",
      district_id: "100",
      name: "Dambog` MFY"
    },
    {
      id: "3409",
      district_id: "100",
      name: "Dashtbog` MFY"
    },
    {
      id: "3410",
      district_id: "100",
      name: "Davlatobod MFY"
    },
    {
      id: "3411",
      district_id: "100",
      name: "Do`stlik MFY"
    },
    {
      id: "3412",
      district_id: "100",
      name: "Furqat MFY"
    },
    {
      id: "3413",
      district_id: "100",
      name: "G`isht kuprik MFY"
    },
    {
      id: "3414",
      district_id: "100",
      name: "Gulbog MFY"
    },
    {
      id: "3415",
      district_id: "100",
      name: "Guliston MFY"
    },
    {
      id: "3416",
      district_id: "100",
      name: "Gulpora MFY"
    },
    {
      id: "3417",
      district_id: "100",
      name: "Gulshan MFY"
    },
    {
      id: "3418",
      district_id: "100",
      name: "Guncha MFY"
    },
    {
      id: "3419",
      district_id: "100",
      name: "Guzal MFY"
    },
    {
      id: "3420",
      district_id: "100",
      name: "Isfarxon MFY"
    },
    {
      id: "3421",
      district_id: "100",
      name: "Ishchi MFY"
    },
    {
      id: "3422",
      district_id: "100",
      name: "Ishonch MFY"
    },
    {
      id: "3423",
      district_id: "100",
      name: "Islomobod MFY"
    },
    {
      id: "3424",
      district_id: "100",
      name: "Isok Chuyan MFY"
    },
    {
      id: "3425",
      district_id: "100",
      name: "Istikbol MFY"
    },
    {
      id: "3426",
      district_id: "100",
      name: "Istiqlol MFY"
    },
    {
      id: "3427",
      district_id: "100",
      name: "Kurashxona MFY"
    },
    {
      id: "3428",
      district_id: "100",
      name: "M.Maorif MFY"
    },
    {
      id: "3429",
      district_id: "100",
      name: "Mexnatobod MFY"
    },
    {
      id: "3430",
      district_id: "100",
      name: "Mexribonlik MFY"
    },
    {
      id: "3431",
      district_id: "100",
      name: "Ma`naviyat MFY"
    },
    {
      id: "3432",
      district_id: "100",
      name: "Ma`rifat MFY"
    },
    {
      id: "3433",
      district_id: "100",
      name: "Madaniy MFY"
    },
    {
      id: "3434",
      district_id: "100",
      name: "Majnuntol MFY"
    },
    {
      id: "3435",
      district_id: "100",
      name: "Marg`ilon MFY"
    },
    {
      id: "3436",
      district_id: "100",
      name: "Mashrab MFY"
    },
    {
      id: "3437",
      district_id: "100",
      name: "Mingchinor MFY"
    },
    {
      id: "3438",
      district_id: "100",
      name: "Mingterak MFY"
    },
    {
      id: "3439",
      district_id: "100",
      name: "Must.5-yilligi MFY"
    },
    {
      id: "3440",
      district_id: "100",
      name: "Mustakillik MFY"
    },
    {
      id: "3441",
      district_id: "100",
      name: "Navbaxor MFY"
    },
    {
      id: "3442",
      district_id: "100",
      name: "Navruz MFY"
    },
    {
      id: "3443",
      district_id: "100",
      name: "Nurobod MFY"
    },
    {
      id: "3444",
      district_id: "100",
      name: "Obixayot MFY"
    },
    {
      id: "3445",
      district_id: "100",
      name: "Obod MFY"
    },
    {
      id: "3446",
      district_id: "100",
      name: "Olvalizor MFY"
    },
    {
      id: "3447",
      district_id: "100",
      name: "Oromgox MFY"
    },
    {
      id: "3448",
      district_id: "100",
      name: "Ozod MFY"
    },
    {
      id: "3449",
      district_id: "100",
      name: "O`zbekiston MFY"
    },
    {
      id: "3450",
      district_id: "100",
      name: "Porloq MFY"
    },
    {
      id: "3451",
      district_id: "100",
      name: "Qadamjoy MFY"
    },
    {
      id: "3452",
      district_id: "100",
      name: "R.Mumin MFY"
    },
    {
      id: "3453",
      district_id: "100",
      name: "S.Guzari MFY"
    },
    {
      id: "3454",
      district_id: "100",
      name: "Sardoba MFY"
    },
    {
      id: "3455",
      district_id: "100",
      name: "Shark tongi MFY"
    },
    {
      id: "3456",
      district_id: "100",
      name: "Sharshara MFY"
    },
    {
      id: "3457",
      district_id: "100",
      name: "Sixatgoh MFY"
    },
    {
      id: "3458",
      district_id: "100",
      name: "Soxibkor MFY"
    },
    {
      id: "3459",
      district_id: "100",
      name: "Sufizoda MFY"
    },
    {
      id: "3460",
      district_id: "100",
      name: "Tinchlik MFY"
    },
    {
      id: "3461",
      district_id: "100",
      name: "To`quvchi MFY"
    },
    {
      id: "3462",
      district_id: "100",
      name: "Uch yog`och MFY"
    },
    {
      id: "3463",
      district_id: "100",
      name: "Umid MFY"
    },
    {
      id: "3464",
      district_id: "100",
      name: "Haqiqat MFY"
    },
    {
      id: "3465",
      district_id: "100",
      name: "Xalklar dustligi MFY"
    },
    {
      id: "3466",
      district_id: "100",
      name: "Xasti-Xizir MFY"
    },
    {
      id: "3467",
      district_id: "100",
      name: "Yakkasada MFY"
    },
    {
      id: "3468",
      district_id: "100",
      name: "Yangi asr MFY"
    },
    {
      id: "3469",
      district_id: "100",
      name: "Yangi kurilish MFY"
    },
    {
      id: "3470",
      district_id: "100",
      name: "Yangi rivojiya MFY"
    },
    {
      id: "3471",
      district_id: "100",
      name: "Yaagi tong MFY"
    },
    {
      id: "3472",
      district_id: "100",
      name: "Yangi xayot MFY"
    },
    {
      id: "3473",
      district_id: "100",
      name: "Yangi yul MFY"
    },
    {
      id: "3474",
      district_id: "100",
      name: "Zarafshon MFY"
    },
    {
      id: "3475",
      district_id: "100",
      name: "Zarbdor MFY"
    },
    {
      id: "3476",
      district_id: "100",
      name: "Zarkent MFY"
    },
    {
      id: "3477",
      district_id: "101",
      name: "Ettiqashqa MFY"
    },
    {
      id: "3478",
      district_id: "101",
      name: "A.Ikromov MFY"
    },
    {
      id: "3479",
      district_id: "101",
      name: "Bobur MFY"
    },
    {
      id: "3480",
      district_id: "101",
      name: "Boyovul MFY"
    },
    {
      id: "3481",
      district_id: "101",
      name: "Buritepa MFY"
    },
    {
      id: "3482",
      district_id: "101",
      name: "Buzulmas MFY"
    },
    {
      id: "3483",
      district_id: "101",
      name: "Changitma MFY"
    },
    {
      id: "3484",
      district_id: "101",
      name: "Dumar MFY"
    },
    {
      id: "3485",
      district_id: "101",
      name: "Do`stlik MFY"
    },
    {
      id: "3486",
      district_id: "101",
      name: "Furqat MFY"
    },
    {
      id: "3487",
      district_id: "101",
      name: "Kemaboshi MFY"
    },
    {
      id: "3488",
      district_id: "101",
      name: "Katta Ulmas MFY"
    },
    {
      id: "3489",
      district_id: "101",
      name: "Katta Yaydok MFY"
    },
    {
      id: "3490",
      district_id: "101",
      name: "Katta-Oktovlik MFY"
    },
    {
      id: "3491",
      district_id: "101",
      name: "Kiziltov MFY"
    },
    {
      id: "3492",
      district_id: "101",
      name: "Korateri MFY"
    },
    {
      id: "3493",
      district_id: "101",
      name: "Kozokovul MFY"
    },
    {
      id: "3494",
      district_id: "101",
      name: "Kukmozor MFY"
    },
    {
      id: "3495",
      district_id: "101",
      name: "Qurama MFY"
    },
    {
      id: "3496",
      district_id: "101",
      name: "Qurg`oncha MFY"
    },
    {
      id: "3497",
      district_id: "101",
      name: "Kurg`ontepa QFY"
    },
    {
      id: "3498",
      district_id: "101",
      name: "Kusharik MFY"
    },
    {
      id: "3499",
      district_id: "101",
      name: "Kushchek MFY"
    },
    {
      id: "3500",
      district_id: "101",
      name: "Kuyultepa MFY"
    },
    {
      id: "3501",
      district_id: "101",
      name: "Margizor QFY"
    },
    {
      id: "3502",
      district_id: "101",
      name: "Margizor MFY"
    },
    {
      id: "3503",
      district_id: "101",
      name: "Mirsultonchek MFY"
    },
    {
      id: "3504",
      district_id: "101",
      name: "Mustakillikning 20 yilligi"
    },
    {
      id: "3505",
      district_id: "101",
      name: "Navoiy MFY"
    },
    {
      id: "3506",
      district_id: "101",
      name: "Naymanobod MFY"
    },
    {
      id: "3507",
      district_id: "101",
      name: "Norinkapa QFY"
    },
    {
      id: "3508",
      district_id: "101",
      name: "Norinkapa MFY"
    },
    {
      id: "3509",
      district_id: "101",
      name: "Otbozor MFY"
    },
    {
      id: "3510",
      district_id: "101",
      name: "Pastki-chuja MFY"
    },
    {
      id: "3511",
      district_id: "101",
      name: "Paxtaqishloq QFY"
    },
    {
      id: "3512",
      district_id: "101",
      name: "Polvonkul MFY"
    },
    {
      id: "3513",
      district_id: "101",
      name: "S.Raximov MFY"
    },
    {
      id: "3514",
      district_id: "101",
      name: "Shoxidmozor MFY"
    },
    {
      id: "3515",
      district_id: "101",
      name: "Shoxidon MFY"
    },
    {
      id: "3516",
      district_id: "101",
      name: "Shurariq MFY"
    },
    {
      id: "3517",
      district_id: "101",
      name: "Sirmok MFY"
    },
    {
      id: "3518",
      district_id: "101",
      name: "Soy buyi MFY"
    },
    {
      id: "3519",
      district_id: "101",
      name: "Suzakovul MFY"
    },
    {
      id: "3520",
      district_id: "101",
      name: "Tegirmonboshi MFY"
    },
    {
      id: "3521",
      district_id: "101",
      name: "Toshkin MFY"
    },
    {
      id: "3522",
      district_id: "101",
      name: "Toshlok QFY"
    },
    {
      id: "3523",
      district_id: "101",
      name: "Toshlok MFY"
    },
    {
      id: "3524",
      district_id: "101",
      name: "Tuda QFY"
    },
    {
      id: "3525",
      district_id: "101",
      name: "Tuda MFY"
    },
    {
      id: "3526",
      district_id: "101",
      name: "Tulkin MFY"
    },
    {
      id: "3527",
      district_id: "101",
      name: "Uchtepa QFY"
    },
    {
      id: "3528",
      district_id: "101",
      name: "Uchtepa MFY"
    },
    {
      id: "3529",
      district_id: "101",
      name: "O`zbekiston MFY"
    },
    {
      id: "3530",
      district_id: "101",
      name: "Xajintoli MFY"
    },
    {
      id: "3531",
      district_id: "101",
      name: "Xo`jaqurgoncha MFY"
    },
    {
      id: "3532",
      district_id: "101",
      name: "Xo`jaobod QFY"
    },
    {
      id: "3533",
      district_id: "101",
      name: "Xo`jaobod MFY"
    },
    {
      id: "3534",
      district_id: "101",
      name: "Yangi tong MFY"
    },
    {
      id: "3535",
      district_id: "101",
      name: "Yangi-Farg`ona MFY"
    },
    {
      id: "3536",
      district_id: "101",
      name: "Yashik MFY"
    },
    {
      id: "3537",
      district_id: "101",
      name: "Yaydok MFY"
    },
    {
      id: "3538",
      district_id: "101",
      name: "Yuqori-Chuja MFY"
    },
    {
      id: "3539",
      district_id: "101",
      name: "Zarbdor MFY"
    },
    {
      id: "3540",
      district_id: "102",
      name: "A.Kaxxor MFY"
    },
    {
      id: "3541",
      district_id: "102",
      name: "A.Navoyi MFY"
    },
    {
      id: "3542",
      district_id: "102",
      name: "Birlashgan MFY"
    },
    {
      id: "3543",
      district_id: "102",
      name: "Bog kucha MFY"
    },
    {
      id: "3544",
      district_id: "102",
      name: "Bog MFY"
    },
    {
      id: "3545",
      district_id: "102",
      name: "Buchiyon MFY"
    },
    {
      id: "3546",
      district_id: "102",
      name: "Chartok MFY"
    },
    {
      id: "3547",
      district_id: "102",
      name: "Chiganok MFY"
    },
    {
      id: "3548",
      district_id: "102",
      name: "Chinor MFY"
    },
    {
      id: "3549",
      district_id: "102",
      name: "Chodak boshi MFY"
    },
    {
      id: "3550",
      district_id: "102",
      name: "Chodak QFY"
    },
    {
      id: "3551",
      district_id: "102",
      name: "Chorkesar MFY"
    },
    {
      id: "3552",
      district_id: "102",
      name: "Chorkesar SHFY"
    },
    {
      id: "3553",
      district_id: "102",
      name: "Do`stlik MFY"
    },
    {
      id: "3554",
      district_id: "102",
      name: "Do`stlik MFY"
    },
    {
      id: "3555",
      district_id: "102",
      name: "Eski qishloq MFY"
    },
    {
      id: "3556",
      district_id: "102",
      name: "Guliston MFY"
    },
    {
      id: "3557",
      district_id: "102",
      name: "G`urumsaroy MFY"
    },
    {
      id: "3558",
      district_id: "102",
      name: "Guzar MFY"
    },
    {
      id: "3559",
      district_id: "102",
      name: "Imom ota MFY"
    },
    {
      id: "3560",
      district_id: "102",
      name: "Iskovut MFY"
    },
    {
      id: "3561",
      district_id: "102",
      name: "Ittifoq MFY"
    },
    {
      id: "3562",
      district_id: "102",
      name: "Kenagas MFY"
    },
    {
      id: "3563",
      district_id: "102",
      name: "Kalqurbon MFY"
    },
    {
      id: "3564",
      district_id: "102",
      name: "Kandig`on MFY"
    },
    {
      id: "3565",
      district_id: "102",
      name: "Qushminor MFY"
    },
    {
      id: "3566",
      district_id: "102",
      name: "Qushtepa MFY"
    },
    {
      id: "3567",
      district_id: "102",
      name: "M.Toshmatov QFY"
    },
    {
      id: "3568",
      district_id: "102",
      name: "M.Umurzaqov QFY"
    },
    {
      id: "3569",
      district_id: "102",
      name: "Madaniyat MFY"
    },
    {
      id: "3570",
      district_id: "102",
      name: "Madanyat QFY"
    },
    {
      id: "3571",
      district_id: "102",
      name: "Margizor-1 MFY"
    },
    {
      id: "3572",
      district_id: "102",
      name: "Margizor-2 MFY"
    },
    {
      id: "3573",
      district_id: "102",
      name: "Mayda millat MFY"
    },
    {
      id: "3574",
      district_id: "102",
      name: "Maydon MFY"
    },
    {
      id: "3575",
      district_id: "102",
      name: "Mozor MFY"
    },
    {
      id: "3576",
      district_id: "102",
      name: "Muqimiy MFY"
    },
    {
      id: "3577",
      district_id: "102",
      name: "Navbaxor SHFY"
    },
    {
      id: "3578",
      district_id: "102",
      name: "Navboxor MFY"
    },
    {
      id: "3579",
      district_id: "102",
      name: "Navruz MFY"
    },
    {
      id: "3580",
      district_id: "102",
      name: "Nayman MFY"
    },
    {
      id: "3581",
      district_id: "102",
      name: "Nayman QFY"
    },
    {
      id: "3582",
      district_id: "102",
      name: "Olmozor MFY"
    },
    {
      id: "3583",
      district_id: "102",
      name: "Oltinkon SHFY"
    },
    {
      id: "3584",
      district_id: "102",
      name: "Oybek MFY"
    },
    {
      id: "3585",
      district_id: "102",
      name: "Paxtakor MFY"
    },
    {
      id: "3586",
      district_id: "102",
      name: "Paxtaobod QFY"
    },
    {
      id: "3587",
      district_id: "102",
      name: "Pillakash MFY"
    },
    {
      id: "3588",
      district_id: "102",
      name: "Pilol MFY"
    },
    {
      id: "3589",
      district_id: "102",
      name: "Pop MFY"
    },
    {
      id: "3590",
      district_id: "102",
      name: "Pop QFY"
    },
    {
      id: "3591",
      district_id: "102",
      name: "Pungon QFY"
    },
    {
      id: "3592",
      district_id: "102",
      name: "S.Ergashev MFY"
    },
    {
      id: "3593",
      district_id: "102",
      name: "S.Raximov MFY"
    },
    {
      id: "3594",
      district_id: "102",
      name: "Shayxon MFY"
    },
    {
      id: "3595",
      district_id: "102",
      name: "Shomozor MFY"
    },
    {
      id: "3596",
      district_id: "102",
      name: "Soxibkor MFY"
    },
    {
      id: "3597",
      district_id: "102",
      name: "Temir yo`l usti. MFY"
    },
    {
      id: "3598",
      district_id: "102",
      name: "Tepaqurg`on MFY"
    },
    {
      id: "3599",
      district_id: "102",
      name: "Tinchlik MFY"
    },
    {
      id: "3600",
      district_id: "102",
      name: "Toshqurg`on MFY"
    },
    {
      id: "3601",
      district_id: "102",
      name: "Tuman-1 MFY"
    },
    {
      id: "3602",
      district_id: "102",
      name: "U.Ikromov MFY"
    },
    {
      id: "3603",
      district_id: "102",
      name: "uch uyli MFY"
    },
    {
      id: "3604",
      district_id: "102",
      name: "Ultarma MFY"
    },
    {
      id: "3605",
      district_id: "102",
      name: "Uyg`ur QFY"
    },
    {
      id: "3606",
      district_id: "102",
      name: "Uyg`ursoy SHFY"
    },
    {
      id: "3607",
      district_id: "102",
      name: "Uyg`ursoy SHFY"
    },
    {
      id: "3608",
      district_id: "102",
      name: "Uyg`ur MFY"
    },
    {
      id: "3609",
      district_id: "102",
      name: "O`zbekiston MFY"
    },
    {
      id: "3610",
      district_id: "102",
      name: "Vodiy MFY"
    },
    {
      id: "3611",
      district_id: "102",
      name: "H.Olimjon MFY"
    },
    {
      id: "3612",
      district_id: "102",
      name: "Xalkobod-1 MFY"
    },
    {
      id: "3613",
      district_id: "102",
      name: "Xalkobod-2 MFY"
    },
    {
      id: "3614",
      district_id: "102",
      name: "Xalkobod-3 MFY"
    },
    {
      id: "3615",
      district_id: "102",
      name: "Xalkobod-4 MFY"
    },
    {
      id: "3616",
      district_id: "102",
      name: "Xalqabod SHFY"
    },
    {
      id: "3617",
      district_id: "102",
      name: "Hamza MFY"
    },
    {
      id: "3618",
      district_id: "102",
      name: "Hazrati bob MFY"
    },
    {
      id: "3619",
      district_id: "102",
      name: "Xo`jaobod-1 MFY"
    },
    {
      id: "3620",
      district_id: "102",
      name: "Xo`jaobod-2 MFY"
    },
    {
      id: "3621",
      district_id: "102",
      name: "Xonobod urta MFY"
    },
    {
      id: "3622",
      district_id: "102",
      name: "Yakkatut MFY"
    },
    {
      id: "3623",
      district_id: "102",
      name: "Yangier MFY"
    },
    {
      id: "3624",
      district_id: "102",
      name: "Yangi qishloq MFY"
    },
    {
      id: "3625",
      district_id: "102",
      name: "Yangichek MFY"
    },
    {
      id: "3626",
      district_id: "102",
      name: "Yangiobod MFY"
    },
    {
      id: "3627",
      district_id: "102",
      name: "Yangihayot QFY"
    },
    {
      id: "3628",
      district_id: "102",
      name: "Yu.Xotamov MFY"
    },
    {
      id: "3629",
      district_id: "102",
      name: "Yuqori chodak boshi MFY"
    },
    {
      id: "3630",
      district_id: "102",
      name: "Yukori qishloq MFY"
    },
    {
      id: "3631",
      district_id: "103",
      name: "Elxon"
    },
    {
      id: "3632",
      district_id: "103",
      name: "Er Masjid MFY"
    },
    {
      id: "3633",
      district_id: "103",
      name: "Ettikon MFY"
    },
    {
      id: "3634",
      district_id: "103",
      name: "Axsi QFY"
    },
    {
      id: "3635",
      district_id: "103",
      name: "Axsi MFY"
    },
    {
      id: "3636",
      district_id: "103",
      name: "Bekobod MFY"
    },
    {
      id: "3637",
      district_id: "103",
      name: "Beruniy MFY"
    },
    {
      id: "3638",
      district_id: "103",
      name: "Baxt"
    },
    {
      id: "3639",
      district_id: "103",
      name: "Birlashgan MFY"
    },
    {
      id: "3640",
      district_id: "103",
      name: "Bordimkul MFY"
    },
    {
      id: "3641",
      district_id: "103",
      name: "Buramatut QFY"
    },
    {
      id: "3642",
      district_id: "103",
      name: "Buramatut MFY"
    },
    {
      id: "3643",
      district_id: "103",
      name: "Ch.Kuprik"
    },
    {
      id: "3644",
      district_id: "103",
      name: "Chorbog` MFY"
    },
    {
      id: "3645",
      district_id: "103",
      name: "Dasht MFY"
    },
    {
      id: "3646",
      district_id: "103",
      name: "Dukat MFY"
    },
    {
      id: "3647",
      district_id: "103",
      name: "Eshonchek MFY"
    },
    {
      id: "3648",
      district_id: "103",
      name: "Fayziobod MFY"
    },
    {
      id: "3649",
      district_id: "103",
      name: "Go`zal"
    },
    {
      id: "3650",
      district_id: "103",
      name: "Guliston MFY"
    },
    {
      id: "3651",
      district_id: "103",
      name: "Gulkishloq MFY"
    },
    {
      id: "3652",
      district_id: "103",
      name: "Ibrat MFY"
    },
    {
      id: "3653",
      district_id: "103",
      name: "Isvaxon MFY"
    },
    {
      id: "3654",
      district_id: "103",
      name: "Kalvak MFY"
    },
    {
      id: "3655",
      district_id: "103",
      name: "Qashqarguzar MFY"
    },
    {
      id: "3656",
      district_id: "103",
      name: "Qatag`on MFY"
    },
    {
      id: "3657",
      district_id: "103",
      name: "Qatag`on-Saroy QFY"
    },
    {
      id: "3658",
      district_id: "103",
      name: "Katta Qo`rg`oncha MFY"
    },
    {
      id: "3659",
      district_id: "103",
      name: "Katta-Qurama MFY"
    },
    {
      id: "3660",
      district_id: "103",
      name: "Kichik Qo`rg`oncha MFY"
    },
    {
      id: "3661",
      district_id: "103",
      name: "Kodirobod MFY"
    },
    {
      id: "3662",
      district_id: "103",
      name: "Kujron MFY"
    },
    {
      id: "3663",
      district_id: "103",
      name: "Kumidon MFY"
    },
    {
      id: "3664",
      district_id: "103",
      name: "Qushqayrag`och MFY"
    },
    {
      id: "3665",
      district_id: "103",
      name: "Kuymazor MFY"
    },
    {
      id: "3666",
      district_id: "103",
      name: "Langarbobo MFY"
    },
    {
      id: "3667",
      district_id: "103",
      name: "M.Kayumov MFY"
    },
    {
      id: "3668",
      district_id: "103",
      name: "Majnuntol MFY"
    },
    {
      id: "3669",
      district_id: "103",
      name: "Mozorkuxna MFY"
    },
    {
      id: "3670",
      district_id: "103",
      name: "Obod MFY"
    },
    {
      id: "3671",
      district_id: "103",
      name: "Obodon MFY"
    },
    {
      id: "3672",
      district_id: "103",
      name: "Okava MFY"
    },
    {
      id: "3673",
      district_id: "103",
      name: "Oktosh MFY"
    },
    {
      id: "3674",
      district_id: "103",
      name: "Oktosh shfy"
    },
    {
      id: "3675",
      district_id: "103",
      name: "Olchin MFY"
    },
    {
      id: "3676",
      district_id: "103",
      name: "Ozod MFY"
    },
    {
      id: "3677",
      district_id: "103",
      name: "Parasmon MFY"
    },
    {
      id: "3678",
      district_id: "103",
      name: "Past Naymancha MFY"
    },
    {
      id: "3679",
      district_id: "103",
      name: "Past-Mugultoy MFY"
    },
    {
      id: "3680",
      district_id: "103",
      name: "Saroy MFY"
    },
    {
      id: "3681",
      district_id: "103",
      name: "Sayram QFY"
    },
    {
      id: "3682",
      district_id: "103",
      name: "Shark MFY"
    },
    {
      id: "3683",
      district_id: "103",
      name: "Shaxand QFY"
    },
    {
      id: "3684",
      district_id: "103",
      name: "Shovon MFY"
    },
    {
      id: "3685",
      district_id: "103",
      name: "Shoxidon MFY"
    },
    {
      id: "3686",
      district_id: "103",
      name: "Soxibkor MFY"
    },
    {
      id: "3687",
      district_id: "103",
      name: "Soxilobod-1"
    },
    {
      id: "3688",
      district_id: "103",
      name: "Soxilobod-2"
    },
    {
      id: "3689",
      district_id: "103",
      name: "Temirqishloq MFY"
    },
    {
      id: "3690",
      district_id: "103",
      name: "Tepa Naymancha MFY"
    },
    {
      id: "3691",
      district_id: "103",
      name: "Toshkent MFY"
    },
    {
      id: "3692",
      district_id: "103",
      name: "Toshlok MFY"
    },
    {
      id: "3693",
      district_id: "103",
      name: "Turkiston MFY"
    },
    {
      id: "3694",
      district_id: "103",
      name: "O`rda MFY"
    },
    {
      id: "3695",
      district_id: "103",
      name: "O`rta qishloq MFY"
    },
    {
      id: "3696",
      district_id: "103",
      name: "O`zbekiston MFY"
    },
    {
      id: "3697",
      district_id: "103",
      name: "O`zbekiston MFY"
    },
    {
      id: "3698",
      district_id: "103",
      name: "H.Olimjon"
    },
    {
      id: "3699",
      district_id: "103",
      name: "Xolmatov QFY"
    },
    {
      id: "3700",
      district_id: "103",
      name: "Xujand MFY"
    },
    {
      id: "3701",
      district_id: "103",
      name: "Xujand QFY"
    },
    {
      id: "3702",
      district_id: "103",
      name: "Yakkatom MFY"
    },
    {
      id: "3703",
      district_id: "103",
      name: "Yangi shaxar MFY"
    },
    {
      id: "3704",
      district_id: "103",
      name: "Yangi hayot MFY"
    },
    {
      id: "3705",
      district_id: "103",
      name: "Yangiobod MFY"
    },
    {
      id: "3706",
      district_id: "103",
      name: "Yangiobod MFY"
    },
    {
      id: "3707",
      district_id: "103",
      name: "Yortepa QFY"
    },
    {
      id: "3708",
      district_id: "103",
      name: "Yortepa kucha"
    },
    {
      id: "3709",
      district_id: "103",
      name: "Yortepa MFY"
    },
    {
      id: "3710",
      district_id: "103",
      name: "Yu.Mugultoy"
    },
    {
      id: "3711",
      district_id: "103",
      name: "Zarbdor MFY"
    },
    {
      id: "3712",
      district_id: "104",
      name: "A.Mo`minov MFY"
    },
    {
      id: "3713",
      district_id: "104",
      name: "Beruniy MFY"
    },
    {
      id: "3714",
      district_id: "104",
      name: "Balandariq MFY"
    },
    {
      id: "3715",
      district_id: "104",
      name: "Birlashgan QFY"
    },
    {
      id: "3716",
      district_id: "104",
      name: "Bog` ko`cha MFY"
    },
    {
      id: "3717",
      district_id: "104",
      name: "Bog` MFY"
    },
    {
      id: "3718",
      district_id: "104",
      name: "Boyagon MFY"
    },
    {
      id: "3719",
      district_id: "104",
      name: "Bsston MFY"
    },
    {
      id: "3720",
      district_id: "104",
      name: "Churtuk MFY"
    },
    {
      id: "3721",
      district_id: "104",
      name: "Dexqon MFY"
    },
    {
      id: "3722",
      district_id: "104",
      name: "Dexqonobod MFY"
    },
    {
      id: "3723",
      district_id: "104",
      name: "Daxyakota MFY"
    },
    {
      id: "3724",
      district_id: "104",
      name: "Do`stlik MFY"
    },
    {
      id: "3725",
      district_id: "104",
      name: "Do`stlik MFY"
    },
    {
      id: "3726",
      district_id: "104",
      name: "Ezgulik MFY"
    },
    {
      id: "3727",
      district_id: "104",
      name: "Fayziobod MFY"
    },
    {
      id: "3728",
      district_id: "104",
      name: "g`ayrat MFY"
    },
    {
      id: "3729",
      district_id: "104",
      name: "g`ayrat QFY"
    },
    {
      id: "3730",
      district_id: "104",
      name: "Gulbog` MFY"
    },
    {
      id: "3731",
      district_id: "104",
      name: "Guliston MFY"
    },
    {
      id: "3732",
      district_id: "104",
      name: "Gulzor MFY"
    },
    {
      id: "3733",
      district_id: "104",
      name: "Gumbaz MFY"
    },
    {
      id: "3734",
      district_id: "104",
      name: "Guzar MFY"
    },
    {
      id: "3735",
      district_id: "104",
      name: "I.Ro`ziba?v MFY"
    },
    {
      id: "3736",
      district_id: "104",
      name: "Islomobod MFY"
    },
    {
      id: "3737",
      district_id: "104",
      name: "Ittifoq MFY"
    },
    {
      id: "3738",
      district_id: "104",
      name: "Jiydakapa QFY"
    },
    {
      id: "3739",
      district_id: "104",
      name: "Keskanyor MFY"
    },
    {
      id: "3740",
      district_id: "104",
      name: "Mevazor MFY"
    },
    {
      id: "3741",
      district_id: "104",
      name: "Mashad MFY"
    },
    {
      id: "3742",
      district_id: "104",
      name: "Mashad QFY"
    },
    {
      id: "3743",
      district_id: "104",
      name: "Mirzaravot MFY"
    },
    {
      id: "3744",
      district_id: "104",
      name: "Muborak MFY"
    },
    {
      id: "3745",
      district_id: "104",
      name: "Navoiy MFY"
    },
    {
      id: "3746",
      district_id: "104",
      name: "Objuvoz MFY"
    },
    {
      id: "3747",
      district_id: "104",
      name: "Obod MFY"
    },
    {
      id: "3748",
      district_id: "104",
      name: "Olmurut MFY"
    },
    {
      id: "3749",
      district_id: "104",
      name: "Oltitosh MFY"
    },
    {
      id: "3750",
      district_id: "104",
      name: "Oqtosh MFY"
    },
    {
      id: "3751",
      district_id: "104",
      name: "Oxunbobo?v MFY"
    },
    {
      id: "3752",
      district_id: "104",
      name: "O`nxayat MFY"
    },
    {
      id: "3753",
      district_id: "104",
      name: "O`nxayat SHFY"
    },
    {
      id: "3754",
      district_id: "104",
      name: "o`urriyat MFY"
    },
    {
      id: "3755",
      district_id: "104",
      name: "Pastguzar MFY"
    },
    {
      id: "3756",
      district_id: "104",
      name: "Qashqar MFY"
    },
    {
      id: "3757",
      district_id: "104",
      name: "Qaxramon MFY"
    },
    {
      id: "3758",
      district_id: "104",
      name: "Qo`rg`oncha MFY"
    },
    {
      id: "3759",
      district_id: "104",
      name: "Qumtepa MFY"
    },
    {
      id: "3760",
      district_id: "104",
      name: "Quvurboshi MFY"
    },
    {
      id: "3761",
      district_id: "104",
      name: "Rovot SHFY"
    },
    {
      id: "3762",
      district_id: "104",
      name: "Sanoat MFY"
    },
    {
      id: "3763",
      district_id: "104",
      name: "Sh.Xo`jamb?rdi?v MFY"
    },
    {
      id: "3764",
      district_id: "104",
      name: "Shaftoli MFY"
    },
    {
      id: "3765",
      district_id: "104",
      name: "Shifokor MFY"
    },
    {
      id: "3766",
      district_id: "104",
      name: "Soku MFY"
    },
    {
      id: "3767",
      district_id: "104",
      name: "Tepasaroy MFY"
    },
    {
      id: "3768",
      district_id: "104",
      name: "Toshloq MFY"
    },
    {
      id: "3769",
      district_id: "104",
      name: "Umid MFY"
    },
    {
      id: "3770",
      district_id: "104",
      name: "Uychi QFY"
    },
    {
      id: "3771",
      district_id: "104",
      name: "Uychi SHFY"
    },
    {
      id: "3772",
      district_id: "104",
      name: "Xizirobod MFY"
    },
    {
      id: "3773",
      district_id: "104",
      name: "Xojiobod MFY"
    },
    {
      id: "3774",
      district_id: "104",
      name: "Xo`jaobod MFY"
    },
    {
      id: "3775",
      district_id: "104",
      name: "Yakkatut MFY"
    },
    {
      id: "3776",
      district_id: "104",
      name: "Yangi er MFY"
    },
    {
      id: "3777",
      district_id: "104",
      name: "Yangi xayot MFY"
    },
    {
      id: "3778",
      district_id: "104",
      name: "Yangich?k MFY"
    },
    {
      id: "3779",
      district_id: "104",
      name: "Yorkatay MFY"
    },
    {
      id: "3780",
      district_id: "104",
      name: "Yorkatay QFY"
    },
    {
      id: "3781",
      district_id: "104",
      name: "Yorqo`rg`on QFY"
    },
    {
      id: "3782",
      district_id: "104",
      name: "Yuksalish MFY"
    },
    {
      id: "3783",
      district_id: "104",
      name: "Ziyokor MFY"
    },
    {
      id: "3784",
      district_id: "105",
      name: "A.Rustamov MFY"
    },
    {
      id: "3785",
      district_id: "105",
      name: "Atlas MFY"
    },
    {
      id: "3786",
      district_id: "105",
      name: "Balandkuprik MFY"
    },
    {
      id: "3787",
      district_id: "105",
      name: "Baxriobod MFY"
    },
    {
      id: "3788",
      district_id: "105",
      name: "Baxt QFY"
    },
    {
      id: "3789",
      district_id: "105",
      name: "Birlik MFY"
    },
    {
      id: "3790",
      district_id: "105",
      name: "Bog kucha MFY"
    },
    {
      id: "3791",
      district_id: "105",
      name: "Buston MFY"
    },
    {
      id: "3792",
      district_id: "105",
      name: "Chek MFY"
    },
    {
      id: "3793",
      district_id: "105",
      name: "Chorvador MFY"
    },
    {
      id: "3794",
      district_id: "105",
      name: "Dexkonobod MFY"
    },
    {
      id: "3795",
      district_id: "105",
      name: "Do`stlik MFY"
    },
    {
      id: "3796",
      district_id: "105",
      name: "Do`stlik MFY"
    },
    {
      id: "3797",
      district_id: "105",
      name: "Elatan MFY"
    },
    {
      id: "3798",
      district_id: "105",
      name: "Eshontupi MFY"
    },
    {
      id: "3799",
      district_id: "105",
      name: "Fargona MFY"
    },
    {
      id: "3800",
      district_id: "105",
      name: "Farovon MFY"
    },
    {
      id: "3801",
      district_id: "105",
      name: "Fayziobod MFY"
    },
    {
      id: "3802",
      district_id: "105",
      name: "Guliston MFY"
    },
    {
      id: "3803",
      district_id: "105",
      name: "Islomobod MFY"
    },
    {
      id: "3804",
      district_id: "105",
      name: "Istiqlol MFY"
    },
    {
      id: "3805",
      district_id: "105",
      name: "Kattach?k MFY"
    },
    {
      id: "3806",
      district_id: "105",
      name: "Kattamogol MFY"
    },
    {
      id: "3807",
      district_id: "105",
      name: "Kayki QFY"
    },
    {
      id: "3808",
      district_id: "105",
      name: "Kozokovul MFY"
    },
    {
      id: "3809",
      district_id: "105",
      name: "Kuchaboshi MFY"
    },
    {
      id: "3810",
      district_id: "105",
      name: "Kugay QFY"
    },
    {
      id: "3811",
      district_id: "105",
      name: "Kugay MFY"
    },
    {
      id: "3812",
      district_id: "105",
      name: "Kugay Ulmas QFY"
    },
    {
      id: "3813",
      district_id: "105",
      name: "Kugay Ulmas MFY"
    },
    {
      id: "3814",
      district_id: "105",
      name: "Kumtugon MFY"
    },
    {
      id: "3815",
      district_id: "105",
      name: "Kuprikboshi MFY"
    },
    {
      id: "3816",
      district_id: "105",
      name: "Kurama MFY"
    },
    {
      id: "3817",
      district_id: "105",
      name: "Kurgoncha MFY"
    },
    {
      id: "3818",
      district_id: "105",
      name: "Mexnatobod MFY"
    },
    {
      id: "3819",
      district_id: "105",
      name: "Madaniyat MFY"
    },
    {
      id: "3820",
      district_id: "105",
      name: "Madaniyat MFY"
    },
    {
      id: "3821",
      district_id: "105",
      name: "Namuna MFY"
    },
    {
      id: "3822",
      district_id: "105",
      name: "Navoiy MFY"
    },
    {
      id: "3823",
      district_id: "105",
      name: "Norin MFY"
    },
    {
      id: "3824",
      district_id: "105",
      name: "Nurobod MFY"
    },
    {
      id: "3825",
      district_id: "105",
      name: "Obod MFY"
    },
    {
      id: "3826",
      district_id: "105",
      name: "Oktovlik MFY"
    },
    {
      id: "3827",
      district_id: "105",
      name: "Ozod MFY"
    },
    {
      id: "3828",
      district_id: "105",
      name: "Paxtachi MFY"
    },
    {
      id: "3829",
      district_id: "105",
      name: "Sanoat MFY"
    },
    {
      id: "3830",
      district_id: "105",
      name: "Sharxanchek MFY"
    },
    {
      id: "3831",
      district_id: "105",
      name: "Sholdirama MFY"
    },
    {
      id: "3832",
      district_id: "105",
      name: "Soxil MFY"
    },
    {
      id: "3833",
      district_id: "105",
      name: "Tegirmon MFY"
    },
    {
      id: "3834",
      district_id: "105",
      name: "Turkiston MFY"
    },
    {
      id: "3835",
      district_id: "105",
      name: "Uchkuprik MFY"
    },
    {
      id: "3836",
      district_id: "105",
      name: "Uchyogoch MFY"
    },
    {
      id: "3837",
      district_id: "105",
      name: "Uchyogoch-2 MFY"
    },
    {
      id: "3838",
      district_id: "105",
      name: "Uljatupi MFY"
    },
    {
      id: "3839",
      district_id: "105",
      name: "Ulugbek MFY"
    },
    {
      id: "3840",
      district_id: "105",
      name: "Urdabog MFY"
    },
    {
      id: "3841",
      district_id: "105",
      name: "Uzunkucha MFY"
    },
    {
      id: "3842",
      district_id: "105",
      name: "Xalfatupi MFY"
    },
    {
      id: "3843",
      district_id: "105",
      name: "Xamza QFY"
    },
    {
      id: "3844",
      district_id: "105",
      name: "Xamza MFY"
    },
    {
      id: "3845",
      district_id: "105",
      name: "Yangier QFY"
    },
    {
      id: "3846",
      district_id: "105",
      name: "Yangier MFY"
    },
    {
      id: "3847",
      district_id: "105",
      name: "Yangiobod QFY"
    },
    {
      id: "3848",
      district_id: "105",
      name: "Yangiobod MFY"
    },
    {
      id: "3849",
      district_id: "105",
      name: "Yangixayot MFY"
    },
    {
      id: "3850",
      district_id: "105",
      name: "Yangixayot MFY"
    },
    {
      id: "3851",
      district_id: "105",
      name: "Yashik QFY"
    },
    {
      id: "3852",
      district_id: "105",
      name: "Yashik MFY"
    },
    {
      id: "3853",
      district_id: "105",
      name: "Yogdu MFY"
    },
    {
      id: "3854",
      district_id: "105",
      name: "Yopisxon MFY"
    },
    {
      id: "3855",
      district_id: "105",
      name: "Yorkinboychek MFY"
    },
    {
      id: "3856",
      district_id: "105",
      name: "Yorkinxayot MFY"
    },
    {
      id: "3857",
      district_id: "105",
      name: "Yoshlik MFY"
    },
    {
      id: "3858",
      district_id: "106",
      name: "A.Navoiy MFY"
    },
    {
      id: "3859",
      district_id: "106",
      name: "A.Navoiy MFY"
    },
    {
      id: "3860",
      district_id: "106",
      name: "Alixon MFY"
    },
    {
      id: "3861",
      district_id: "106",
      name: "Alixon QFY"
    },
    {
      id: "3862",
      district_id: "106",
      name: "Arbag`ish MFY"
    },
    {
      id: "3863",
      district_id: "106",
      name: "Beshkapa MFY"
    },
    {
      id: "3864",
      district_id: "106",
      name: "Beshkapa MFY"
    },
    {
      id: "3865",
      district_id: "106",
      name: "Beshtol MFY"
    },
    {
      id: "3866",
      district_id: "106",
      name: "Baliq-ko`l MFY"
    },
    {
      id: "3867",
      district_id: "106",
      name: "Bog` MFY"
    },
    {
      id: "3868",
      district_id: "106",
      name: "Bog` MFY"
    },
    {
      id: "3869",
      district_id: "106",
      name: "Bog`iston MFY"
    },
    {
      id: "3870",
      district_id: "106",
      name: "Bog`iston QFY"
    },
    {
      id: "3871",
      district_id: "106",
      name: "Bozorboshi MFY"
    },
    {
      id: "3872",
      district_id: "106",
      name: "Bulon MFY"
    },
    {
      id: "3873",
      district_id: "106",
      name: "Bulon MFY"
    },
    {
      id: "3874",
      district_id: "106",
      name: "Chig`atoy MFY(Jamoatchilik)"
    },
    {
      id: "3875",
      district_id: "106",
      name: "Chorsu MFY"
    },
    {
      id: "3876",
      district_id: "106",
      name: "Dehqonobod MFY"
    },
    {
      id: "3877",
      district_id: "106",
      name: "Damariq MFY"
    },
    {
      id: "3878",
      district_id: "106",
      name: "Do`stlik MFY"
    },
    {
      id: "3879",
      district_id: "106",
      name: "Do`stlik MFY"
    },
    {
      id: "3880",
      district_id: "106",
      name: "Guldirov MFY"
    },
    {
      id: "3881",
      district_id: "106",
      name: "Gulshan MFY"
    },
    {
      id: "3882",
      district_id: "106",
      name: "Gulshan QFY"
    },
    {
      id: "3883",
      district_id: "106",
      name: "Iftixor MFY"
    },
    {
      id: "3884",
      district_id: "106",
      name: "Iftixor MFY"
    },
    {
      id: "3885",
      district_id: "106",
      name: "Isroilov MFY"
    },
    {
      id: "3886",
      district_id: "106",
      name: "Keskanyor MFY(Jamoatchi)"
    },
    {
      id: "3887",
      district_id: "106",
      name: "Koroskon QFY"
    },
    {
      id: "3888",
      district_id: "106",
      name: "Laskidon MFY"
    },
    {
      id: "3889",
      district_id: "106",
      name: "Muchum QFY"
    },
    {
      id: "3890",
      district_id: "106",
      name: "Mustaqillik MFY"
    },
    {
      id: "3891",
      district_id: "106",
      name: "Namangan MFY"
    },
    {
      id: "3892",
      district_id: "106",
      name: "Namangan MFY"
    },
    {
      id: "3893",
      district_id: "106",
      name: "Navbaxor MFY"
    },
    {
      id: "3894",
      district_id: "106",
      name: "Navbaxor MFY"
    },
    {
      id: "3895",
      district_id: "106",
      name: "Navro`z MFY"
    },
    {
      id: "3896",
      district_id: "106",
      name: "Oltitosh MFY(Jamoatchilik)"
    },
    {
      id: "3897",
      district_id: "106",
      name: "Oqterak MFY"
    },
    {
      id: "3898",
      district_id: "106",
      name: "Ora-ariq MFY"
    },
    {
      id: "3899",
      district_id: "106",
      name: "Oromgox MFY"
    },
    {
      id: "3900",
      district_id: "106",
      name: "Oromgox MFY"
    },
    {
      id: "3901",
      district_id: "106",
      name: "Oyqiron MFY"
    },
    {
      id: "3902",
      district_id: "106",
      name: "Oyqiron QFY"
    },
    {
      id: "3903",
      district_id: "106",
      name: "O`rikzor MFY"
    },
    {
      id: "3904",
      district_id: "106",
      name: "O`zbekiston MFY"
    },
    {
      id: "3905",
      district_id: "106",
      name: "O`zbekiston MFY"
    },
    {
      id: "3906",
      district_id: "106",
      name: "Peshqo`rg`on QFY"
    },
    {
      id: "3907",
      district_id: "106",
      name: "Qorabog` MFY"
    },
    {
      id: "3908",
      district_id: "106",
      name: "Qoramurt MFY"
    },
    {
      id: "3909",
      district_id: "106",
      name: "S.Raximov MFY"
    },
    {
      id: "3910",
      district_id: "106",
      name: "S.Raximov MFY"
    },
    {
      id: "3911",
      district_id: "106",
      name: "Sarkor MFY"
    },
    {
      id: "3912",
      district_id: "106",
      name: "Saroy MFY"
    },
    {
      id: "3913",
      district_id: "106",
      name: "Saroy QFY"
    },
    {
      id: "3914",
      district_id: "106",
      name: "Shodlik MFY(Jamoatchi)"
    },
    {
      id: "3915",
      district_id: "106",
      name: "Soxibkor MFY(Jamoatchi)"
    },
    {
      id: "3916",
      district_id: "106",
      name: "Soy MFY"
    },
    {
      id: "3917",
      district_id: "106",
      name: "Soz-soy"
    },
    {
      id: "3918",
      district_id: "106",
      name: "Tinchlik MFY"
    },
    {
      id: "3919",
      district_id: "106",
      name: "Tinchlik MFY"
    },
    {
      id: "3920",
      district_id: "106",
      name: "To`pqayrag`och MFY"
    },
    {
      id: "3921",
      district_id: "106",
      name: "Turiq MFY"
    },
    {
      id: "3922",
      district_id: "106",
      name: "Turkiston MFY"
    },
    {
      id: "3923",
      district_id: "106",
      name: "Turkiston MFY"
    },
    {
      id: "3924",
      district_id: "106",
      name: "Uzunko`cha MFY"
    },
    {
      id: "3925",
      district_id: "106",
      name: "Hazratishox MFY"
    },
    {
      id: "3926",
      district_id: "106",
      name: "Hazratishox QFY"
    },
    {
      id: "3927",
      district_id: "106",
      name: "Yangiobod MFY"
    },
    {
      id: "3928",
      district_id: "106",
      name: "Yangiobod MFY"
    },
    {
      id: "3929",
      district_id: "106",
      name: "Yangiobod MFY"
    },
    {
      id: "3930",
      district_id: "106",
      name: "Z.Diyor MFY"
    },
    {
      id: "3931",
      district_id: "106",
      name: "Z.Diyor MFY"
    },
    {
      id: "3932",
      district_id: "106",
      name: "Zangobod MFY"
    },
    {
      id: "3933",
      district_id: "107",
      name: "Ettiqo`rg`on MFY"
    },
    {
      id: "3934",
      district_id: "107",
      name: "Ariqbo`yi MFY"
    },
    {
      id: "3935",
      district_id: "107",
      name: "Aqcha QFY"
    },
    {
      id: "3936",
      district_id: "107",
      name: "Baliqchi MFY"
    },
    {
      id: "3937",
      district_id: "107",
      name: "Baymoq MFY"
    },
    {
      id: "3938",
      district_id: "107",
      name: "Baymoq QFY"
    },
    {
      id: "3939",
      district_id: "107",
      name: "Bibiona MFY"
    },
    {
      id: "3940",
      district_id: "107",
      name: "Birlik MFY"
    },
    {
      id: "3941",
      district_id: "107",
      name: "Birlik MFY"
    },
    {
      id: "3942",
      district_id: "107",
      name: "Bofanda MFY"
    },
    {
      id: "3943",
      district_id: "107",
      name: "Bog`ieram MFY"
    },
    {
      id: "3944",
      district_id: "107",
      name: "Bog`ormos MFY"
    },
    {
      id: "3945",
      district_id: "107",
      name: "Bolo MFY"
    },
    {
      id: "3946",
      district_id: "107",
      name: "Bozorboshi MFY"
    },
    {
      id: "3947",
      district_id: "107",
      name: "Buloqboshi MFY"
    },
    {
      id: "3948",
      district_id: "107",
      name: "Chustnon-Do`stlarobod MFY"
    },
    {
      id: "3949",
      district_id: "107",
      name: "Dehqonobod MFY"
    },
    {
      id: "3950",
      district_id: "107",
      name: "Dam MFY"
    },
    {
      id: "3951",
      district_id: "107",
      name: "Do`stlik MFY"
    },
    {
      id: "3952",
      district_id: "107",
      name: "Do`stlik MFY"
    },
    {
      id: "3953",
      district_id: "107",
      name: "Do`zanda MFY"
    },
    {
      id: "3954",
      district_id: "107",
      name: "G`ova QFY"
    },
    {
      id: "3955",
      district_id: "107",
      name: "Guliston MFY"
    },
    {
      id: "3956",
      district_id: "107",
      name: "Guliston MFY"
    },
    {
      id: "3957",
      district_id: "107",
      name: "Guzar MFY"
    },
    {
      id: "3958",
      district_id: "107",
      name: "Istiqlol MFY"
    },
    {
      id: "3959",
      district_id: "107",
      name: "Kamarsada MFY"
    },
    {
      id: "3960",
      district_id: "107",
      name: "Karkidon QFY"
    },
    {
      id: "3961",
      district_id: "107",
      name: "Karnon QFY"
    },
    {
      id: "3962",
      district_id: "107",
      name: "Ko`cha MFY"
    },
    {
      id: "3963",
      district_id: "107",
      name: "Ko`ktosh MFY"
    },
    {
      id: "3964",
      district_id: "107",
      name: "Laylakuya MFY"
    },
    {
      id: "3965",
      district_id: "107",
      name: "Mehnatobod MFY"
    },
    {
      id: "3966",
      district_id: "107",
      name: "Mashxad MFY"
    },
    {
      id: "3967",
      district_id: "107",
      name: "Maydon MFY"
    },
    {
      id: "3968",
      district_id: "107",
      name: "Mo`nchoqtepa MFY"
    },
    {
      id: "3969",
      district_id: "107",
      name: "Mustaqillik MFY"
    },
    {
      id: "3970",
      district_id: "107",
      name: "Navbahor MFY"
    },
    {
      id: "3971",
      district_id: "107",
      name: "Navro`z MFY"
    },
    {
      id: "3972",
      district_id: "107",
      name: "Og`asaroy MFY"
    },
    {
      id: "3973",
      district_id: "107",
      name: "Og`asaroy QFY"
    },
    {
      id: "3974",
      district_id: "107",
      name: "Olmos QFY"
    },
    {
      id: "3975",
      district_id: "107",
      name: "Pansada MFY"
    },
    {
      id: "3976",
      district_id: "107",
      name: "Pilol MFY"
    },
    {
      id: "3977",
      district_id: "107",
      name: "Qaleai poyon MFY"
    },
    {
      id: "3978",
      district_id: "107",
      name: "Qayirma MFY"
    },
    {
      id: "3979",
      district_id: "107",
      name: "Qiziltepa MFY"
    },
    {
      id: "3980",
      district_id: "107",
      name: "Qorakapa MFY"
    },
    {
      id: "3981",
      district_id: "107",
      name: "Qoraqo`rg`on MFY"
    },
    {
      id: "3982",
      district_id: "107",
      name: "Quyi Karnon MFY"
    },
    {
      id: "3983",
      district_id: "107",
      name: "Rezaksoy MFY"
    },
    {
      id: "3984",
      district_id: "107",
      name: "Serob MFY"
    },
    {
      id: "3985",
      district_id: "107",
      name: "Sabzazor MFY"
    },
    {
      id: "3986",
      district_id: "107",
      name: "Sadacha MFY"
    },
    {
      id: "3987",
      district_id: "107",
      name: "Sarimsoqtepa MFY"
    },
    {
      id: "3988",
      district_id: "107",
      name: "Sarqamish-Mirzaobod MFY"
    },
    {
      id: "3989",
      district_id: "107",
      name: "Shoyon MFY"
    },
    {
      id: "3990",
      district_id: "107",
      name: "Shoyon QFY"
    },
    {
      id: "3991",
      district_id: "107",
      name: "Sho`rbuloq MFY"
    },
    {
      id: "3992",
      district_id: "107",
      name: "Shurkent QFY"
    },
    {
      id: "3993",
      district_id: "107",
      name: "Shuvar MFY"
    },
    {
      id: "3994",
      district_id: "107",
      name: "Tepaqo`rg`on MFY"
    },
    {
      id: "3995",
      district_id: "107",
      name: "Toshqo`rg`on MFY"
    },
    {
      id: "3996",
      district_id: "107",
      name: "Toymas-1 MFY"
    },
    {
      id: "3997",
      district_id: "107",
      name: "Toymas-2 MFY"
    },
    {
      id: "3998",
      district_id: "107",
      name: "Varzigon MFY"
    },
    {
      id: "3999",
      district_id: "107",
      name: "Varzik QFY"
    },
    {
      id: "4000",
      district_id: "107",
      name: "Xisorak MFY"
    },
    {
      id: "4001",
      district_id: "107",
      name: "Xisorak QFY"
    },
    {
      id: "4002",
      district_id: "107",
      name: "Xo`jaobod MFY"
    },
    {
      id: "4003",
      district_id: "107",
      name: "Yakkabuloq MFY"
    },
    {
      id: "4004",
      district_id: "107",
      name: "Yangichak MFY"
    },
    {
      id: "4005",
      district_id: "107",
      name: "Yangihayot MFY"
    },
    {
      id: "4006",
      district_id: "107",
      name: "Yangiobod MFY"
    },
    {
      id: "4007",
      district_id: "107",
      name: "Yorqishloq MFY"
    },
    {
      id: "4008",
      district_id: "107",
      name: "Yuqori Karnon MFY"
    },
    {
      id: "4009",
      district_id: "107",
      name: "Yuqori MFY"
    },
    {
      id: "4010",
      district_id: "107",
      name: "Yutmos MFY"
    },
    {
      id: "4011",
      district_id: "107",
      name: "Zarafshon MFY"
    },
    {
      id: "4012",
      district_id: "107",
      name: "Zarafshon MFY"
    },
    {
      id: "4013",
      district_id: "107",
      name: "Zvutqand MFY"
    },
    {
      id: "4014",
      district_id: "108",
      name: "Bekobod QFY"
    },
    {
      id: "4015",
      district_id: "108",
      name: "Beshbulok MFY"
    },
    {
      id: "4016",
      district_id: "108",
      name: "Baraka MFY"
    },
    {
      id: "4017",
      district_id: "108",
      name: "Baratov MFY"
    },
    {
      id: "4018",
      district_id: "108",
      name: "Birlashgan K.FY"
    },
    {
      id: "4019",
      district_id: "108",
      name: "Birlik MFY"
    },
    {
      id: "4020",
      district_id: "108",
      name: "Bog MFY"
    },
    {
      id: "4021",
      district_id: "108",
      name: "Bogiston MFY"
    },
    {
      id: "4022",
      district_id: "108",
      name: "Bulokboshi MFY"
    },
    {
      id: "4023",
      district_id: "108",
      name: "Buston MFY"
    },
    {
      id: "4024",
      district_id: "108",
      name: "Chunbagish MFY"
    },
    {
      id: "4025",
      district_id: "108",
      name: "Dexkonobod MFY"
    },
    {
      id: "4026",
      district_id: "108",
      name: "Duldi MFY"
    },
    {
      id: "4027",
      district_id: "108",
      name: "Dustlk MFY"
    },
    {
      id: "4028",
      district_id: "108",
      name: "Furkat MFY"
    },
    {
      id: "4029",
      district_id: "108",
      name: "Furkat MFY"
    },
    {
      id: "4030",
      district_id: "108",
      name: "Gaiston MFY"
    },
    {
      id: "4031",
      district_id: "108",
      name: "Gayrat MFY"
    },
    {
      id: "4032",
      district_id: "108",
      name: "Gaznon MFY"
    },
    {
      id: "4033",
      district_id: "108",
      name: "Govozon MFY"
    },
    {
      id: "4034",
      district_id: "108",
      name: "Guliston MFY"
    },
    {
      id: "4035",
      district_id: "108",
      name: "Guliston MFY"
    },
    {
      id: "4036",
      district_id: "108",
      name: "Ibrat MFY"
    },
    {
      id: "4037",
      district_id: "108",
      name: "Istiqlol QFY"
    },
    {
      id: "4038",
      district_id: "108",
      name: "Kanda MFY"
    },
    {
      id: "4039",
      district_id: "108",
      name: "Kandiyon MFY"
    },
    {
      id: "4040",
      district_id: "108",
      name: "Kayroki MFY"
    },
    {
      id: "4041",
      district_id: "108",
      name: "Kizilqiyoq MFY"
    },
    {
      id: "4042",
      district_id: "108",
      name: "Kizilyozi MFY"
    },
    {
      id: "4043",
      district_id: "108",
      name: "Korapolvon QFY"
    },
    {
      id: "4044",
      district_id: "108",
      name: "Korapolvon MFY"
    },
    {
      id: "4045",
      district_id: "108",
      name: "Korayontok MFY"
    },
    {
      id: "4046",
      district_id: "108",
      name: "Kukyor MFY"
    },
    {
      id: "4047",
      district_id: "108",
      name: "Kurik MFY"
    },
    {
      id: "4048",
      district_id: "108",
      name: "Kutlug`tol MFY"
    },
    {
      id: "4049",
      district_id: "108",
      name: "Kuyikorapolvon MFY"
    },
    {
      id: "4050",
      district_id: "108",
      name: "Madaniyat MFY"
    },
    {
      id: "4051",
      district_id: "108",
      name: "Madaniyat MFY"
    },
    {
      id: "4052",
      district_id: "108",
      name: "Mamay MFY"
    },
    {
      id: "4053",
      district_id: "108",
      name: "Mugol MFY"
    },
    {
      id: "4054",
      district_id: "108",
      name: "Nanay QFY"
    },
    {
      id: "4055",
      district_id: "108",
      name: "Navkent QFY"
    },
    {
      id: "4056",
      district_id: "108",
      name: "Navkent MFY"
    },
    {
      id: "4057",
      district_id: "108",
      name: "Navruzobod QFY"
    },
    {
      id: "4058",
      district_id: "108",
      name: "Nov MFY"
    },
    {
      id: "4059",
      district_id: "108",
      name: "Oksuvgovozon MFY"
    },
    {
      id: "4060",
      district_id: "108",
      name: "Oktepa MFY"
    },
    {
      id: "4061",
      district_id: "108",
      name: "Oktom MFY"
    },
    {
      id: "4062",
      district_id: "108",
      name: "Olmazor MFY"
    },
    {
      id: "4063",
      district_id: "108",
      name: "Oxunbobo?v MFY"
    },
    {
      id: "4064",
      district_id: "108",
      name: "Poromon QFY"
    },
    {
      id: "4065",
      district_id: "108",
      name: "Poromon MFY"
    },
    {
      id: "4066",
      district_id: "108",
      name: "Radivon MFY"
    },
    {
      id: "4067",
      district_id: "108",
      name: "Rovot MFY"
    },
    {
      id: "4068",
      district_id: "108",
      name: "Rovut MFY"
    },
    {
      id: "4069",
      district_id: "108",
      name: "Salmon MFY"
    },
    {
      id: "4070",
      district_id: "108",
      name: "Shark Yulduzi QFY"
    },
    {
      id: "4071",
      district_id: "108",
      name: "Soxibkor MFY"
    },
    {
      id: "4072",
      district_id: "108",
      name: "Soxil MFY"
    },
    {
      id: "4073",
      district_id: "108",
      name: "Soy buyi MFY"
    },
    {
      id: "4074",
      district_id: "108",
      name: "Sutli bulok MFY"
    },
    {
      id: "4075",
      district_id: "108",
      name: "Tinchlik MFY"
    },
    {
      id: "4076",
      district_id: "108",
      name: "Tinchlik MFY"
    },
    {
      id: "4077",
      district_id: "108",
      name: "Toshkent MFY"
    },
    {
      id: "4078",
      district_id: "108",
      name: "Tuman MFY"
    },
    {
      id: "4079",
      district_id: "108",
      name: "Urta MFY"
    },
    {
      id: "4080",
      district_id: "108",
      name: "Xadikent MFY"
    },
    {
      id: "4081",
      district_id: "108",
      name: "Xakikat MFY"
    },
    {
      id: "4082",
      district_id: "108",
      name: "Xujashurkent MFY"
    },
    {
      id: "4083",
      district_id: "108",
      name: "Xurriyat MFY"
    },
    {
      id: "4084",
      district_id: "108",
      name: "Yangi bogiston MFY"
    },
    {
      id: "4085",
      district_id: "108",
      name: "Yangiobod MFY"
    },
    {
      id: "4086",
      district_id: "108",
      name: "Yangiobod MFY"
    },
    {
      id: "4087",
      district_id: "108",
      name: "Yorilgan MFY"
    },
    {
      id: "4088",
      district_id: "108",
      name: "Yukori Korayontok MFY"
    },
    {
      id: "4089",
      district_id: "108",
      name: "Yukorinavkent MFY"
    },
    {
      id: "4090",
      district_id: "108",
      name: "Yumalok tepa MFY"
    },
    {
      id: "4091",
      district_id: "108",
      name: "Zarbdor QFY"
    },
    {
      id: "4092",
      district_id: "108",
      name: "Zarbdor MFY"
    },
    {
      id: "4093",
      district_id: "108",
      name: "Zarkent QFY"
    },
    {
      id: "4094",
      district_id: "109",
      name: "A.Temur MFY"
    },
    {
      id: "4095",
      district_id: "109",
      name: "Avliyo Parpi"
    },
    {
      id: "4096",
      district_id: "109",
      name: "Beshkuvi MFY"
    },
    {
      id: "4097",
      district_id: "109",
      name: "Beshqo`ton MFY"
    },
    {
      id: "4098",
      district_id: "109",
      name: "Beshqo`ton QFY"
    },
    {
      id: "4099",
      district_id: "109",
      name: "Bog`bon MFY"
    },
    {
      id: "4100",
      district_id: "109",
      name: "Bo`dana MFY"
    },
    {
      id: "4101",
      district_id: "109",
      name: "Bulung`ur MFY"
    },
    {
      id: "4102",
      district_id: "109",
      name: "Bulung`ur-ariq MFY"
    },
    {
      id: "4103",
      district_id: "109",
      name: "Changal MFY"
    },
    {
      id: "4104",
      district_id: "109",
      name: "Changal-1 MFY"
    },
    {
      id: "4105",
      district_id: "109",
      name: "Changalpayon MFY"
    },
    {
      id: "4106",
      district_id: "109",
      name: "Chorbog` MFY"
    },
    {
      id: "4107",
      district_id: "109",
      name: "Do`stlik MFY"
    },
    {
      id: "4108",
      district_id: "109",
      name: "Erganakli MFY"
    },
    {
      id: "4109",
      district_id: "109",
      name: "Esonturdi MFY"
    },
    {
      id: "4110",
      district_id: "109",
      name: "FYo`ldosh QFY"
    },
    {
      id: "4111",
      district_id: "109",
      name: "G`o`bdin MFY"
    },
    {
      id: "4112",
      district_id: "109",
      name: "Guliston MFY"
    },
    {
      id: "4113",
      district_id: "109",
      name: "Gulobod MFY"
    },
    {
      id: "4114",
      district_id: "109",
      name: "Gulzor MFY"
    },
    {
      id: "4115",
      district_id: "109",
      name: "Isori O`roqli"
    },
    {
      id: "4116",
      district_id: "109",
      name: "Istiqlol MFY"
    },
    {
      id: "4117",
      district_id: "109",
      name: "Kaptarxona MFY"
    },
    {
      id: "4118",
      district_id: "109",
      name: "Kattqishloq MFY"
    },
    {
      id: "4119",
      district_id: "109",
      name: "Kattqishloq-1 MFY"
    },
    {
      id: "4120",
      district_id: "109",
      name: "Kichikkildon MFY"
    },
    {
      id: "4121",
      district_id: "109",
      name: "Kildon MFY"
    },
    {
      id: "4122",
      district_id: "109",
      name: "Kildon QFY"
    },
    {
      id: "4123",
      district_id: "109",
      name: "Kulchabiy QFY"
    },
    {
      id: "4124",
      district_id: "109",
      name: "Mehrjon MFY"
    },
    {
      id: "4125",
      district_id: "109",
      name: "Mextar MFY"
    },
    {
      id: "4126",
      district_id: "109",
      name: "Mingchinor MFY"
    },
    {
      id: "4127",
      district_id: "109",
      name: "Mingtepa MFY"
    },
    {
      id: "4128",
      district_id: "109",
      name: "Mo`g`ol MFY"
    },
    {
      id: "4129",
      district_id: "109",
      name: "Nebo`sa MFY"
    },
    {
      id: "4130",
      district_id: "109",
      name: "Navbahor MFY"
    },
    {
      id: "4131",
      district_id: "109",
      name: "Navoiy QFY"
    },
    {
      id: "4132",
      district_id: "109",
      name: "Niyozmat MFY"
    },
    {
      id: "4133",
      district_id: "109",
      name: "Nurli yo`l MFY"
    },
    {
      id: "4134",
      district_id: "109",
      name: "Olmazor MFY"
    },
    {
      id: "4135",
      district_id: "109",
      name: "Oqtepa MFY"
    },
    {
      id: "4136",
      district_id: "109",
      name: "Oqtosh MFY"
    },
    {
      id: "4137",
      district_id: "109",
      name: "O`roqli MFY"
    },
    {
      id: "4138",
      district_id: "109",
      name: "O`rtabuloq QFY"
    },
    {
      id: "4139",
      district_id: "109",
      name: "Qirqshodi MFY"
    },
    {
      id: "4140",
      district_id: "109",
      name: "Qo`ng`irot MFY"
    },
    {
      id: "4141",
      district_id: "109",
      name: "Samarqand MFY"
    },
    {
      id: "4142",
      district_id: "109",
      name: "Sarpichoq MFY"
    },
    {
      id: "4143",
      district_id: "109",
      name: "Sayiltepa MFY"
    },
    {
      id: "4144",
      district_id: "109",
      name: "Soxibkor MFY"
    },
    {
      id: "4145",
      district_id: "109",
      name: "Soxibkor QFY"
    },
    {
      id: "4146",
      district_id: "109",
      name: "Suluqo`rg`on MFY"
    },
    {
      id: "4147",
      district_id: "109",
      name: "Ulug`bek MFY"
    },
    {
      id: "4148",
      district_id: "109",
      name: "Xo`jabachcha MFY"
    },
    {
      id: "4149",
      district_id: "109",
      name: "Xo`jamazgil MFY"
    },
    {
      id: "4150",
      district_id: "109",
      name: "Yangiariq MFY"
    },
    {
      id: "4151",
      district_id: "109",
      name: "Yangiobod MFY"
    },
    {
      id: "4152",
      district_id: "109",
      name: "Yangiqo`rg`on MFY"
    },
    {
      id: "4153",
      district_id: "109",
      name: "Zarafshon MFY"
    },
    {
      id: "4154",
      district_id: "110",
      name: "A.Navoiy MFY"
    },
    {
      id: "4155",
      district_id: "110",
      name: "A.Qurbonov MFY"
    },
    {
      id: "4156",
      district_id: "110",
      name: "Beshbola MFY"
    },
    {
      id: "4157",
      district_id: "110",
      name: "Dehqonobod QFY"
    },
    {
      id: "4158",
      district_id: "110",
      name: "Dexqonobod MFY"
    },
    {
      id: "4159",
      district_id: "110",
      name: "Eski Jomboy MFY"
    },
    {
      id: "4160",
      district_id: "110",
      name: "Eski Jomboy QFY"
    },
    {
      id: "4161",
      district_id: "110",
      name: "G`azira MFY"
    },
    {
      id: "4162",
      district_id: "110",
      name: "Guliston MFY"
    },
    {
      id: "4163",
      district_id: "110",
      name: "Juriyat MFY"
    },
    {
      id: "4164",
      district_id: "110",
      name: "Juriyat QFY"
    },
    {
      id: "4165",
      district_id: "110",
      name: "Katta qishloq MFY"
    },
    {
      id: "4166",
      district_id: "110",
      name: "Kukgumbaz MFY"
    },
    {
      id: "4167",
      district_id: "110",
      name: "Nayman MFY"
    },
    {
      id: "4168",
      district_id: "110",
      name: "Naymantepa MFY"
    },
    {
      id: "4169",
      district_id: "110",
      name: "Nazar MFY"
    },
    {
      id: "4170",
      district_id: "110",
      name: "Nogaxon MFY"
    },
    {
      id: "4171",
      district_id: "110",
      name: "No`sh MFY"
    },
    {
      id: "4172",
      district_id: "110",
      name: "Olmazor MFY"
    },
    {
      id: "4173",
      district_id: "110",
      name: "Polvonariq MFY"
    },
    {
      id: "4174",
      district_id: "110",
      name: "Qang`li MFY"
    },
    {
      id: "4175",
      district_id: "110",
      name: "Qang`li QFY"
    },
    {
      id: "4176",
      district_id: "110",
      name: "Qoramo`yin MFY"
    },
    {
      id: "4177",
      district_id: "110",
      name: "Qoramo`yin QFY"
    },
    {
      id: "4178",
      district_id: "110",
      name: "Qo`lbosti MFY"
    },
    {
      id: "4179",
      district_id: "110",
      name: "Qo`ng`irot MFY"
    },
    {
      id: "4180",
      district_id: "110",
      name: "Qo`ng`irot QFY"
    },
    {
      id: "4181",
      district_id: "110",
      name: "Qo`rg`onsalomon MFY"
    },
    {
      id: "4182",
      district_id: "110",
      name: "Quduqli MFY"
    },
    {
      id: "4183",
      district_id: "110",
      name: "Samarqand MFY"
    },
    {
      id: "4184",
      district_id: "110",
      name: "Sarichashma MFY"
    },
    {
      id: "4185",
      district_id: "110",
      name: "Sariqipchoq MFY"
    },
    {
      id: "4186",
      district_id: "110",
      name: "Saroy MFY"
    },
    {
      id: "4187",
      district_id: "110",
      name: "Sherqo`rg`on MFY"
    },
    {
      id: "4188",
      district_id: "110",
      name: "Sherqo`rg`on QFY"
    },
    {
      id: "4189",
      district_id: "110",
      name: "Shirinkent MFY"
    },
    {
      id: "4190",
      district_id: "110",
      name: "Shodlik MFY"
    },
    {
      id: "4191",
      district_id: "110",
      name: "So`xmon MFY"
    },
    {
      id: "4192",
      district_id: "110",
      name: "Taldirazzoq MFY"
    },
    {
      id: "4193",
      district_id: "110",
      name: "Toshkent MFY"
    },
    {
      id: "4194",
      district_id: "110",
      name: "To`qqizboy MFY"
    },
    {
      id: "4195",
      district_id: "110",
      name: "Tut MFY"
    },
    {
      id: "4196",
      district_id: "110",
      name: "Xitoypayon MFY"
    },
    {
      id: "4197",
      district_id: "110",
      name: "Xolvoyi MFY"
    },
    {
      id: "4198",
      district_id: "110",
      name: "Xolvoyi QFY"
    },
    {
      id: "4199",
      district_id: "110",
      name: "Yangi hayot MFY"
    },
    {
      id: "4200",
      district_id: "110",
      name: "Zarafshon MFY"
    },
    {
      id: "4201",
      district_id: "111",
      name: "Arabxona MFY"
    },
    {
      id: "4202",
      district_id: "111",
      name: "Azamat MFY"
    },
    {
      id: "4203",
      district_id: "111",
      name: "Azamat QFY"
    },
    {
      id: "4204",
      district_id: "111",
      name: "Beshbola MFY"
    },
    {
      id: "4205",
      district_id: "111",
      name: "Beshkapa MFY"
    },
    {
      id: "4206",
      district_id: "111",
      name: "Baxrin MFY"
    },
    {
      id: "4207",
      district_id: "111",
      name: "Bokon MFY"
    },
    {
      id: "4208",
      district_id: "111",
      name: "Borlos MFY"
    },
    {
      id: "4209",
      district_id: "111",
      name: "Boylata MFY"
    },
    {
      id: "4210",
      district_id: "111",
      name: "Boytubi MFY"
    },
    {
      id: "4211",
      district_id: "111",
      name: "Buronxuja MFY"
    },
    {
      id: "4212",
      district_id: "111",
      name: "Buston MFY"
    },
    {
      id: "4213",
      district_id: "111",
      name: "Chagatoy MFY"
    },
    {
      id: "4214",
      district_id: "111",
      name: "Chakar MFY"
    },
    {
      id: "4215",
      district_id: "111",
      name: "Chayjavul MFY"
    },
    {
      id: "4216",
      district_id: "111",
      name: "Chimkurg`on MFY"
    },
    {
      id: "4217",
      district_id: "111",
      name: "Chinortepa MFY"
    },
    {
      id: "4218",
      district_id: "111",
      name: "Chordara QFY"
    },
    {
      id: "4219",
      district_id: "111",
      name: "Dehqonobod MFY"
    },
    {
      id: "4220",
      district_id: "111",
      name: "Damarik MFY"
    },
    {
      id: "4221",
      district_id: "111",
      name: "Do`stlik MFY"
    },
    {
      id: "4222",
      district_id: "111",
      name: "Fayziobod QFY"
    },
    {
      id: "4223",
      district_id: "111",
      name: "g` G`ulom MFY"
    },
    {
      id: "4224",
      district_id: "111",
      name: "Ishtixon MFY"
    },
    {
      id: "4225",
      district_id: "111",
      name: "J.Mahmudov MFY"
    },
    {
      id: "4226",
      district_id: "111",
      name: "K. Qarshiev MFY"
    },
    {
      id: "4227",
      district_id: "111",
      name: "Qatag`on MFY"
    },
    {
      id: "4228",
      district_id: "111",
      name: "Kattakang`li MFY"
    },
    {
      id: "4229",
      district_id: "111",
      name: "Qayirma MFY"
    },
    {
      id: "4230",
      district_id: "111",
      name: "Qirqyigit MFY"
    },
    {
      id: "4231",
      district_id: "111",
      name: "Qiyot MFY"
    },
    {
      id: "4232",
      district_id: "111",
      name: "Qoraqishloq MFY"
    },
    {
      id: "4233",
      district_id: "111",
      name: "Kubay MFY"
    },
    {
      id: "4234",
      district_id: "111",
      name: "Kuktepa MFY"
    },
    {
      id: "4235",
      district_id: "111",
      name: "Kuljamol MFY"
    },
    {
      id: "4236",
      district_id: "111",
      name: "Qung`irot MFY"
    },
    {
      id: "4237",
      district_id: "111",
      name: "Kurilish MFY"
    },
    {
      id: "4238",
      district_id: "111",
      name: "Kurli QFY"
    },
    {
      id: "4239",
      district_id: "111",
      name: "Kutarma MFY"
    },
    {
      id: "4240",
      district_id: "111",
      name: "Minglar MFY"
    },
    {
      id: "4241",
      district_id: "111",
      name: "Mirishkor MFY"
    },
    {
      id: "4242",
      district_id: "111",
      name: "Mirzakul MFY"
    },
    {
      id: "4243",
      district_id: "111",
      name: "Mitan SHFY"
    },
    {
      id: "4244",
      district_id: "111",
      name: "Moxpar MFY"
    },
    {
      id: "4245",
      district_id: "111",
      name: "Namuna MFY"
    },
    {
      id: "4246",
      district_id: "111",
      name: "Odil MFY"
    },
    {
      id: "4247",
      district_id: "111",
      name: "Orlot MFY"
    },
    {
      id: "4248",
      district_id: "111",
      name: "O`zbekiston MFY"
    },
    {
      id: "4249",
      district_id: "111",
      name: "Qoraqo`yli MFY"
    },
    {
      id: "4250",
      district_id: "111",
      name: "Ravot MFY"
    },
    {
      id: "4251",
      district_id: "111",
      name: "Ravot QFY"
    },
    {
      id: "4252",
      district_id: "111",
      name: "Safoxo`ja MFY"
    },
    {
      id: "4253",
      district_id: "111",
      name: "Sh`yxlar MFY"
    },
    {
      id: "4254",
      district_id: "111",
      name: "Shayxlarkent MFY"
    },
    {
      id: "4255",
      district_id: "111",
      name: "Shayxislom MFY"
    },
    {
      id: "4256",
      district_id: "111",
      name: "Sugat MFY"
    },
    {
      id: "4257",
      district_id: "111",
      name: "Tallak MFY"
    },
    {
      id: "4258",
      district_id: "111",
      name: "Tinibek MFY"
    },
    {
      id: "4259",
      district_id: "111",
      name: "Toytuyok MFY"
    },
    {
      id: "4260",
      district_id: "111",
      name: "Tupor MFY"
    },
    {
      id: "4261",
      district_id: "111",
      name: "Urtakishlok QFY"
    },
    {
      id: "4262",
      district_id: "111",
      name: "O`zbekqo`rg`on MFY"
    },
    {
      id: "4263",
      district_id: "111",
      name: "Haqiqat QFY"
    },
    {
      id: "4264",
      district_id: "111",
      name: "Xalqobod MFY"
    },
    {
      id: "4265",
      district_id: "111",
      name: "Xalqobod QFY"
    },
    {
      id: "4266",
      district_id: "111",
      name: "Xazar bobo MFY"
    },
    {
      id: "4267",
      district_id: "111",
      name: "Xonaqa MFY"
    },
    {
      id: "4268",
      district_id: "111",
      name: "Yangi Ravot MFY"
    },
    {
      id: "4269",
      district_id: "111",
      name: "Yangikent MFY"
    },
    {
      id: "4270",
      district_id: "111",
      name: "Yugontepa MFY"
    },
    {
      id: "4271",
      district_id: "111",
      name: "Zarband MFY"
    },
    {
      id: "4272",
      district_id: "111",
      name: "Zarband QFY"
    },
    {
      id: "4273",
      district_id: "112",
      name: "Alijon MFY"
    },
    {
      id: "4274",
      district_id: "112",
      name: "Andoksoy MFY"
    },
    {
      id: "4275",
      district_id: "112",
      name: "Balandchordara MFY"
    },
    {
      id: "4276",
      district_id: "112",
      name: "Balandravot MFY"
    },
    {
      id: "4277",
      district_id: "112",
      name: "Bog`ot MFY"
    },
    {
      id: "4278",
      district_id: "112",
      name: "Burgansoy MFY"
    },
    {
      id: "4279",
      district_id: "112",
      name: "Chagatoy MFY"
    },
    {
      id: "4280",
      district_id: "112",
      name: "Charog`on MFY"
    },
    {
      id: "4281",
      district_id: "112",
      name: "Chiganok MFY"
    },
    {
      id: "4282",
      district_id: "112",
      name: "Chuyanchi MFY"
    },
    {
      id: "4283",
      district_id: "112",
      name: "Durbesh QFY"
    },
    {
      id: "4284",
      district_id: "112",
      name: "Do`stlik MFY"
    },
    {
      id: "4285",
      district_id: "112",
      name: "Do`stlik MFY"
    },
    {
      id: "4286",
      district_id: "112",
      name: "Fayzikent MFY"
    },
    {
      id: "4287",
      district_id: "112",
      name: "Girdikurgon QFY"
    },
    {
      id: "4288",
      district_id: "112",
      name: "Javlon MFY"
    },
    {
      id: "4289",
      district_id: "112",
      name: "Jizmonsoy MFY"
    },
    {
      id: "4290",
      district_id: "112",
      name: "Jonkil MFY"
    },
    {
      id: "4291",
      district_id: "112",
      name: "Jumaboy QFY"
    },
    {
      id: "4292",
      district_id: "112",
      name: "Jumaboy MFY"
    },
    {
      id: "4293",
      district_id: "112",
      name: "Kadan MFY"
    },
    {
      id: "4294",
      district_id: "112",
      name: "Karadaryo MFY"
    },
    {
      id: "4295",
      district_id: "112",
      name: "Kattakurpa QFY"
    },
    {
      id: "4296",
      district_id: "112",
      name: "Kattakurpa MFY"
    },
    {
      id: "4297",
      district_id: "112",
      name: "Kattaming QFY"
    },
    {
      id: "4298",
      district_id: "112",
      name: "Kattaming MFY"
    },
    {
      id: "4299",
      district_id: "112",
      name: "Kichikmundiyon QFY"
    },
    {
      id: "4300",
      district_id: "112",
      name: "Qirg`iz MFY"
    },
    {
      id: "4301",
      district_id: "112",
      name: "Qiyot MFY"
    },
    {
      id: "4302",
      district_id: "112",
      name: "Koksoy MFY"
    },
    {
      id: "4303",
      district_id: "112",
      name: "Korakulcha MFY"
    },
    {
      id: "4304",
      district_id: "112",
      name: "Kumok MFY"
    },
    {
      id: "4305",
      district_id: "112",
      name: "Kumushkent MFY"
    },
    {
      id: "4306",
      district_id: "112",
      name: "Kumushkirgok MFY"
    },
    {
      id: "4307",
      district_id: "112",
      name: "Kushbegi MFY"
    },
    {
      id: "4308",
      district_id: "112",
      name: "Kushkuton MFY"
    },
    {
      id: "4309",
      district_id: "112",
      name: "Qushtepa QFY"
    },
    {
      id: "4310",
      district_id: "112",
      name: "Qushtepa MFY"
    },
    {
      id: "4311",
      district_id: "112",
      name: "Qushxovuz MFY"
    },
    {
      id: "4312",
      district_id: "112",
      name: "M.Ulug`bek MFY"
    },
    {
      id: "4313",
      district_id: "112",
      name: "Melixo`ja MFY"
    },
    {
      id: "4314",
      district_id: "112",
      name: "Madrasa MFY"
    },
    {
      id: "4315",
      district_id: "112",
      name: "Moybuloq MFY"
    },
    {
      id: "4316",
      district_id: "112",
      name: "Moybuloq QFY"
    },
    {
      id: "4317",
      district_id: "112",
      name: "Mullakurpa MFY"
    },
    {
      id: "4318",
      district_id: "112",
      name: "Mullatog`ay MFY"
    },
    {
      id: "4319",
      district_id: "112",
      name: "Muminxo`ja MFY"
    },
    {
      id: "4320",
      district_id: "112",
      name: "Mundiyon MFY"
    },
    {
      id: "4321",
      district_id: "112",
      name: "Murodkosimov MFY"
    },
    {
      id: "4322",
      district_id: "112",
      name: "Navbaxor MFY"
    },
    {
      id: "4323",
      district_id: "112",
      name: "Navoiy MFY"
    },
    {
      id: "4324",
      district_id: "112",
      name: "Nayman MFY"
    },
    {
      id: "4325",
      district_id: "112",
      name: "Nisbat MFY"
    },
    {
      id: "4326",
      district_id: "112",
      name: "Nomozpolvon MFY"
    },
    {
      id: "4327",
      district_id: "112",
      name: "Olmazor MFY"
    },
    {
      id: "4328",
      district_id: "112",
      name: "Omonboy QFY"
    },
    {
      id: "4329",
      district_id: "112",
      name: "Omonboykuprik MFY"
    },
    {
      id: "4330",
      district_id: "112",
      name: "Omonkalxat MFY"
    },
    {
      id: "4331",
      district_id: "112",
      name: "Oyjon MFY"
    },
    {
      id: "4332",
      district_id: "112",
      name: "Payshanba SHFY"
    },
    {
      id: "4333",
      district_id: "112",
      name: "Polvontepa MFY"
    },
    {
      id: "4334",
      district_id: "112",
      name: "Sebuston MFY"
    },
    {
      id: "4335",
      district_id: "112",
      name: "Saraykurg`on MFY"
    },
    {
      id: "4336",
      district_id: "112",
      name: "Saroykur`gon QFY"
    },
    {
      id: "4337",
      district_id: "112",
      name: "Shurak MFY"
    },
    {
      id: "4338",
      district_id: "112",
      name: "Suv hovuzi SHFY"
    },
    {
      id: "4339",
      district_id: "112",
      name: "Tarnov MFY"
    },
    {
      id: "4340",
      district_id: "112",
      name: "Tavaron MFY"
    },
    {
      id: "4341",
      district_id: "112",
      name: "Uyshun MFY"
    },
    {
      id: "4342",
      district_id: "112",
      name: "Valijon MFY"
    },
    {
      id: "4343",
      district_id: "112",
      name: "Vayrot MFY"
    },
    {
      id: "4344",
      district_id: "112",
      name: "Yakkabog` MFY"
    },
    {
      id: "4345",
      district_id: "112",
      name: "Yangi hayot MFY"
    },
    {
      id: "4346",
      district_id: "112",
      name: "Yangiqiyot MFY"
    },
    {
      id: "4347",
      district_id: "112",
      name: "Yangiqo`rg`oncha MFY"
    },
    {
      id: "4348",
      district_id: "112",
      name: "Yangiobod MFY"
    },
    {
      id: "4349",
      district_id: "112",
      name: "Yangirabot MFY"
    },
    {
      id: "4350",
      district_id: "112",
      name: "Yaniqo`rg`oncha QFY"
    },
    {
      id: "4351",
      district_id: "112",
      name: "Yodgorxo`ja MFY"
    },
    {
      id: "4352",
      district_id: "112",
      name: "Yonboshsoy MFY"
    },
    {
      id: "4353",
      district_id: "112",
      name: "Yovi MFY"
    },
    {
      id: "4354",
      district_id: "112",
      name: "Zarqo`rg`on MFY"
    },
    {
      id: "4355",
      district_id: "113",
      name: "Er machit MFY"
    },
    {
      id: "4356",
      district_id: "113",
      name: "Abdulla Qahhor MFY"
    },
    {
      id: "4357",
      district_id: "113",
      name: "Alisher Navoiy MFY"
    },
    {
      id: "4358",
      district_id: "113",
      name: "Amir Temur MFY"
    },
    {
      id: "4359",
      district_id: "113",
      name: "Arabxona MFY"
    },
    {
      id: "4360",
      district_id: "113",
      name: "Bahoriston MFY"
    },
    {
      id: "4361",
      district_id: "113",
      name: "Baland chordara MFY"
    },
    {
      id: "4362",
      district_id: "113",
      name: "Chordara MFY"
    },
    {
      id: "4363",
      district_id: "113",
      name: "Do`stlik MFY"
    },
    {
      id: "4364",
      district_id: "113",
      name: "G`arib Machit MFY"
    },
    {
      id: "4365",
      district_id: "113",
      name: "Ingichka SHFY"
    },
    {
      id: "4366",
      district_id: "113",
      name: "Islom Shoir MFY"
    },
    {
      id: "4367",
      district_id: "113",
      name: "Kuchaxur MFY"
    },
    {
      id: "4368",
      district_id: "113",
      name: "Kunjipay MFY"
    },
    {
      id: "4369",
      district_id: "113",
      name: "Meli Razzoqov MFY"
    },
    {
      id: "4370",
      district_id: "113",
      name: "Miyonkol MFY"
    },
    {
      id: "4371",
      district_id: "113",
      name: "Muxammad Daminov MFY"
    },
    {
      id: "4372",
      district_id: "113",
      name: "Narzullo Tog`aev MFY"
    },
    {
      id: "4373",
      district_id: "113",
      name: "Navbahor MFY"
    },
    {
      id: "4374",
      district_id: "113",
      name: "Nizomiddin Zokirov MFY"
    },
    {
      id: "4375",
      district_id: "113",
      name: "Noqis MFY"
    },
    {
      id: "4376",
      district_id: "113",
      name: "Nurobod MFY"
    },
    {
      id: "4377",
      district_id: "113",
      name: "Ochildi Murod Miriy MFY"
    },
    {
      id: "4378",
      district_id: "113",
      name: "Oq oltin MFY"
    },
    {
      id: "4379",
      district_id: "113",
      name: "O`rikzor MFY"
    },
    {
      id: "4380",
      district_id: "113",
      name: "Qorirovot MFY"
    },
    {
      id: "4381",
      district_id: "113",
      name: "Rahima Islomova MFY"
    },
    {
      id: "4382",
      district_id: "113",
      name: "Safar Xushnazarov MFY"
    },
    {
      id: "4383",
      district_id: "113",
      name: "Sarmazor MFY"
    },
    {
      id: "4384",
      district_id: "113",
      name: "Siplon MFY"
    },
    {
      id: "4385",
      district_id: "113",
      name: "So`fi Olloyor MFY"
    },
    {
      id: "4386",
      district_id: "113",
      name: "Umar Norov MFY"
    },
    {
      id: "4387",
      district_id: "113",
      name: "Usmon Nosir MFY"
    },
    {
      id: "4388",
      district_id: "113",
      name: "Xaydarchaman MFY"
    },
    {
      id: "4389",
      district_id: "113",
      name: "Xojikurbon MFY"
    },
    {
      id: "4390",
      district_id: "113",
      name: "Zarifobod MFY"
    },
    {
      id: "4391",
      district_id: "114",
      name: "Boypurushli MFY"
    },
    {
      id: "4392",
      district_id: "114",
      name: "Boyto`p MFY"
    },
    {
      id: "4393",
      district_id: "114",
      name: "Bozorjoy MFY"
    },
    {
      id: "4394",
      district_id: "114",
      name: "Bulok MFY"
    },
    {
      id: "4395",
      district_id: "114",
      name: "Bulokboshi MFY"
    },
    {
      id: "4396",
      district_id: "114",
      name: "Chinok MFY"
    },
    {
      id: "4397",
      district_id: "114",
      name: "Chorlok MFY"
    },
    {
      id: "4398",
      district_id: "114",
      name: "Do`stlik MFY"
    },
    {
      id: "4399",
      district_id: "114",
      name: "Jonbulok MFY"
    },
    {
      id: "4400",
      district_id: "114",
      name: "Jush QFY"
    },
    {
      id: "4401",
      district_id: "114",
      name: "Jush ota MFY"
    },
    {
      id: "4402",
      district_id: "114",
      name: "Katta Okmachit MFY"
    },
    {
      id: "4403",
      district_id: "114",
      name: "Kiykim MFY"
    },
    {
      id: "4404",
      district_id: "114",
      name: "Koratosh MFY"
    },
    {
      id: "4405",
      district_id: "114",
      name: "Kovunchi MFY"
    },
    {
      id: "4406",
      district_id: "114",
      name: "Kurgon MFY"
    },
    {
      id: "4407",
      district_id: "114",
      name: "Kurolos MFY"
    },
    {
      id: "4408",
      district_id: "114",
      name: "Kushrabot QFY"
    },
    {
      id: "4409",
      district_id: "114",
      name: "Kushrabot MFY"
    },
    {
      id: "4410",
      district_id: "114",
      name: "Kushtamgoli MFY"
    },
    {
      id: "4411",
      district_id: "114",
      name: "Kuvkalla MFY"
    },
    {
      id: "4412",
      district_id: "114",
      name: "Mayintepa MFY"
    },
    {
      id: "4413",
      district_id: "114",
      name: "Minishkor MFY"
    },
    {
      id: "4414",
      district_id: "114",
      name: "Mustakillik MFY"
    },
    {
      id: "4415",
      district_id: "114",
      name: "Novkat MFY"
    },
    {
      id: "4416",
      district_id: "114",
      name: "Okchopsoy MFY"
    },
    {
      id: "4417",
      district_id: "114",
      name: "Okmachit MFY"
    },
    {
      id: "4418",
      district_id: "114",
      name: "Oktepa QFY"
    },
    {
      id: "4419",
      district_id: "114",
      name: "Ozod MFY"
    },
    {
      id: "4420",
      district_id: "114",
      name: "Pangat MFY"
    },
    {
      id: "4421",
      district_id: "114",
      name: "Pichot QFY"
    },
    {
      id: "4422",
      district_id: "114",
      name: "Pichot MFY"
    },
    {
      id: "4423",
      district_id: "114",
      name: "Shovo MFY"
    },
    {
      id: "4424",
      district_id: "114",
      name: "Shovona"
    },
    {
      id: "4425",
      district_id: "114",
      name: "Soxibkor QFY"
    },
    {
      id: "4426",
      district_id: "114",
      name: "Tegirmonovul MFY"
    },
    {
      id: "4427",
      district_id: "114",
      name: "Toz MFY"
    },
    {
      id: "4428",
      district_id: "114",
      name: "Urganji QFY"
    },
    {
      id: "4429",
      district_id: "114",
      name: "Urganji MFY"
    },
    {
      id: "4430",
      district_id: "114",
      name: "Urtasoy MFY"
    },
    {
      id: "4431",
      district_id: "114",
      name: "Xonnazar MFY"
    },
    {
      id: "4432",
      district_id: "114",
      name: "Yangikishlok MFY"
    },
    {
      id: "4433",
      district_id: "114",
      name: "Yu.Saroy MFY"
    },
    {
      id: "4434",
      district_id: "114",
      name: "Yukori Jush MFY"
    },
    {
      id: "4435",
      district_id: "114",
      name: "Zarkent MFY"
    },
    {
      id: "4436",
      district_id: "114",
      name: "Zarmitan QFY"
    },
    {
      id: "4437",
      district_id: "115",
      name: "A. Navoiy MFY"
    },
    {
      id: "4438",
      district_id: "115",
      name: "A.Navoiy MFY"
    },
    {
      id: "4439",
      district_id: "115",
      name: "A.Rasulov MFY"
    },
    {
      id: "4440",
      district_id: "115",
      name: "A.Temur MFY"
    },
    {
      id: "4441",
      district_id: "115",
      name: "A.Xaknazarov MFY"
    },
    {
      id: "4442",
      district_id: "115",
      name: "Arabxona MFY"
    },
    {
      id: "4443",
      district_id: "115",
      name: "Beklar MFY"
    },
    {
      id: "4444",
      district_id: "115",
      name: "Birlik MFY"
    },
    {
      id: "4445",
      district_id: "115",
      name: "Bolgali MFY"
    },
    {
      id: "4446",
      district_id: "115",
      name: "Shakar QFY"
    },
    {
      id: "4447",
      district_id: "115",
      name: "Charxin MFY"
    },
    {
      id: "4448",
      district_id: "115",
      name: "Chaykal MFY"
    },
    {
      id: "4449",
      district_id: "115",
      name: "Chorbog` MFY"
    },
    {
      id: "4450",
      district_id: "115",
      name: "Dedan MFY"
    },
    {
      id: "4451",
      district_id: "115",
      name: "Do`stlik MFY"
    },
    {
      id: "4452",
      district_id: "115",
      name: "Guliston MFY"
    },
    {
      id: "4453",
      district_id: "115",
      name: "I.Shoir QFY"
    },
    {
      id: "4454",
      district_id: "115",
      name: "I.Shoir MFY"
    },
    {
      id: "4455",
      district_id: "115",
      name: "Islomobod MFY"
    },
    {
      id: "4456",
      district_id: "115",
      name: "Istiqlol MFY"
    },
    {
      id: "4457",
      district_id: "115",
      name: "Iymon MFY"
    },
    {
      id: "4458",
      district_id: "115",
      name: "Kadim QFY"
    },
    {
      id: "4459",
      district_id: "115",
      name: "Korakul QFY"
    },
    {
      id: "4460",
      district_id: "115",
      name: "Korasiyrok QFY"
    },
    {
      id: "4461",
      district_id: "115",
      name: "Kosogoron QFY"
    },
    {
      id: "4462",
      district_id: "115",
      name: "Kozikent MFY"
    },
    {
      id: "4463",
      district_id: "115",
      name: "Koziyokli MFY"
    },
    {
      id: "4464",
      district_id: "115",
      name: "Ko`k-ota MFY"
    },
    {
      id: "4465",
      district_id: "115",
      name: "Magit MFY"
    },
    {
      id: "4466",
      district_id: "115",
      name: "Maydakozok MFY"
    },
    {
      id: "4467",
      district_id: "115",
      name: "Mirbozor SHFY"
    },
    {
      id: "4468",
      district_id: "115",
      name: "Muqimiy MFY"
    },
    {
      id: "4469",
      district_id: "115",
      name: "Mushkent MFY"
    },
    {
      id: "4470",
      district_id: "115",
      name: "Mustaqillik MFY"
    },
    {
      id: "4471",
      district_id: "115",
      name: "N.Urinov MFY"
    },
    {
      id: "4472",
      district_id: "115",
      name: "Narpay MFY"
    },
    {
      id: "4473",
      district_id: "115",
      name: "Navro`z MFY"
    },
    {
      id: "4474",
      district_id: "115",
      name: "Nog`araxona MFY"
    },
    {
      id: "4475",
      district_id: "115",
      name: "Nug`ay MFY"
    },
    {
      id: "4476",
      district_id: "115",
      name: "o`Abduraximov MFY"
    },
    {
      id: "4477",
      district_id: "115",
      name: "Olti ug`il QFY"
    },
    {
      id: "4478",
      district_id: "115",
      name: "Olti ug`il MFY"
    },
    {
      id: "4479",
      district_id: "115",
      name: "Oq-oltin MFY"
    },
    {
      id: "4480",
      district_id: "115",
      name: "O`zbekiston MFY"
    },
    {
      id: "4481",
      district_id: "115",
      name: "O`zbekkenti MFY"
    },
    {
      id: "4482",
      district_id: "115",
      name: "R.Olchin MFY"
    },
    {
      id: "4483",
      district_id: "115",
      name: "Salovat MFY"
    },
    {
      id: "4484",
      district_id: "115",
      name: "Sarbozor MFY"
    },
    {
      id: "4485",
      district_id: "115",
      name: "shahar mfylari"
    },
    {
      id: "4486",
      district_id: "115",
      name: "Sohibkor MFY"
    },
    {
      id: "4487",
      district_id: "115",
      name: "T.Roziqov MFY"
    },
    {
      id: "4488",
      district_id: "115",
      name: "Tepa MFY"
    },
    {
      id: "4489",
      district_id: "115",
      name: "Tepaqo`rg`on MFY"
    },
    {
      id: "4490",
      district_id: "115",
      name: "Tinchlik MFY"
    },
    {
      id: "4491",
      district_id: "115",
      name: "Tortuvli MFY"
    },
    {
      id: "4492",
      district_id: "115",
      name: "Toshko`prik MFY"
    },
    {
      id: "4493",
      district_id: "115",
      name: "Totkent MFY"
    },
    {
      id: "4494",
      district_id: "115",
      name: "To`ron MFY"
    },
    {
      id: "4495",
      district_id: "115",
      name: "X. Aliqulov MFY"
    },
    {
      id: "4496",
      district_id: "115",
      name: "Xalqobod MFY"
    },
    {
      id: "4497",
      district_id: "115",
      name: "Xo`jakarzon MFY"
    },
    {
      id: "4498",
      district_id: "115",
      name: "Xo`jaqo`rg`on MFY"
    },
    {
      id: "4499",
      district_id: "115",
      name: "Yangi ariq MFY"
    },
    {
      id: "4500",
      district_id: "115",
      name: "Yangiqo`rg`on QFY"
    },
    {
      id: "4501",
      district_id: "115",
      name: "Yangirabod QFY"
    },
    {
      id: "4502",
      district_id: "115",
      name: "Zirabulok MFY"
    },
    {
      id: "4503",
      district_id: "115",
      name: "Zoir ota MFY"
    },
    {
      id: "4504",
      district_id: "116",
      name: "Agron MFY"
    },
    {
      id: "4505",
      district_id: "116",
      name: "Amir-Temur MFY"
    },
    {
      id: "4506",
      district_id: "116",
      name: "Arab-ota MFY"
    },
    {
      id: "4507",
      district_id: "116",
      name: "Boshkuduk MFY"
    },
    {
      id: "4508",
      district_id: "116",
      name: "Do`stlik MFY"
    },
    {
      id: "4509",
      district_id: "116",
      name: "Eshat MFY"
    },
    {
      id: "4510",
      district_id: "116",
      name: "Girdikurg`on MFY"
    },
    {
      id: "4511",
      district_id: "116",
      name: "Jarkuduk MFY"
    },
    {
      id: "4512",
      district_id: "116",
      name: "Jarquduq QFY"
    },
    {
      id: "4513",
      district_id: "116",
      name: "Jom QFY"
    },
    {
      id: "4514",
      district_id: "116",
      name: "Jom MFY"
    },
    {
      id: "4515",
      district_id: "116",
      name: "K?chk?ldik MFY"
    },
    {
      id: "4516",
      district_id: "116",
      name: "Kalta MFY"
    },
    {
      id: "4517",
      district_id: "116",
      name: "Kilichli MFY"
    },
    {
      id: "4518",
      district_id: "116",
      name: "Mehnatkash MFY"
    },
    {
      id: "4519",
      district_id: "116",
      name: "Navbahor MFY"
    },
    {
      id: "4520",
      district_id: "116",
      name: "Navruz MFY"
    },
    {
      id: "4521",
      district_id: "116",
      name: "Nurbulok MFY"
    },
    {
      id: "4522",
      district_id: "116",
      name: "Nurbuloq QFY"
    },
    {
      id: "4523",
      district_id: "116",
      name: "Nurdum MFY"
    },
    {
      id: "4524",
      district_id: "116",
      name: "Oksoy MFY"
    },
    {
      id: "4525",
      district_id: "116",
      name: "Olga MFY"
    },
    {
      id: "4526",
      district_id: "116",
      name: "Omondara MFY"
    },
    {
      id: "4527",
      district_id: "116",
      name: "Pulatchi MFY"
    },
    {
      id: "4528",
      district_id: "116",
      name: "Qo`rg`oncha MFY"
    },
    {
      id: "4529",
      district_id: "116",
      name: "Sepki MFY"
    },
    {
      id: "4530",
      district_id: "116",
      name: "Sarikul MFY"
    },
    {
      id: "4531",
      district_id: "116",
      name: "Saroy MFY"
    },
    {
      id: "4532",
      district_id: "116",
      name: "Sazag`on QFY"
    },
    {
      id: "4533",
      district_id: "116",
      name: "Sazag`on MFY"
    },
    {
      id: "4534",
      district_id: "116",
      name: "Sharq-Yulduzi MFY"
    },
    {
      id: "4535",
      district_id: "116",
      name: "Shaxar mfylari"
    },
    {
      id: "4536",
      district_id: "116",
      name: "Shurobod MFY"
    },
    {
      id: "4537",
      district_id: "116",
      name: "T.Usanov MFY"
    },
    {
      id: "4538",
      district_id: "116",
      name: "Tegirmonboshi MFY"
    },
    {
      id: "4539",
      district_id: "116",
      name: "Tepakul MFY"
    },
    {
      id: "4540",
      district_id: "116",
      name: "Tim QFY"
    },
    {
      id: "4541",
      district_id: "116",
      name: "Tutli QFY"
    },
    {
      id: "4542",
      district_id: "116",
      name: "Ulus QFY"
    },
    {
      id: "4543",
      district_id: "116",
      name: "Ulus MFY"
    },
    {
      id: "4544",
      district_id: "116",
      name: "Urtabuz MFY"
    },
    {
      id: "4545",
      district_id: "116",
      name: "Xalkobod MFY"
    },
    {
      id: "4546",
      district_id: "116",
      name: "Xazarmali MFY"
    },
    {
      id: "4547",
      district_id: "117",
      name: "A.Navoiy QFY"
    },
    {
      id: "4548",
      district_id: "117",
      name: "Amur Temur MFY"
    },
    {
      id: "4549",
      district_id: "117",
      name: "Arpa MFY"
    },
    {
      id: "4550",
      district_id: "117",
      name: "Avazali MFY"
    },
    {
      id: "4551",
      district_id: "117",
      name: "Boshdarxon MFY"
    },
    {
      id: "4552",
      district_id: "117",
      name: "Bozorjoy MFY"
    },
    {
      id: "4553",
      district_id: "117",
      name: "Charbog` 2 MFY"
    },
    {
      id: "4554",
      district_id: "117",
      name: "Dahbed MFY"
    },
    {
      id: "4555",
      district_id: "117",
      name: "Dahbed SHFY"
    },
    {
      id: "4556",
      district_id: "117",
      name: "Galaravot MFY"
    },
    {
      id: "4557",
      district_id: "117",
      name: "Ko`ksoqol MFY"
    },
    {
      id: "4558",
      district_id: "117",
      name: "Kumushkent MFY"
    },
    {
      id: "4559",
      district_id: "117",
      name: "Loyish MFY"
    },
    {
      id: "4560",
      district_id: "117",
      name: "Loyish SHFY"
    },
    {
      id: "4561",
      district_id: "117",
      name: "Moykovok MFY"
    },
    {
      id: "4562",
      district_id: "117",
      name: "Mustaqillik MFY"
    },
    {
      id: "4563",
      district_id: "117",
      name: "Navoiy MFY"
    },
    {
      id: "4564",
      district_id: "117",
      name: "Navro`z MFY"
    },
    {
      id: "4565",
      district_id: "117",
      name: "Oqdaryo MFY"
    },
    {
      id: "4566",
      district_id: "117",
      name: "Oytamg`ali MFY"
    },
    {
      id: "4567",
      district_id: "117",
      name: "O`zbekiston MFY"
    },
    {
      id: "4568",
      district_id: "117",
      name: "Paxtaobod MFY"
    },
    {
      id: "4569",
      district_id: "117",
      name: "Po`latdarxon MFY"
    },
    {
      id: "4570",
      district_id: "117",
      name: "Primknt MFY"
    },
    {
      id: "4571",
      district_id: "117",
      name: "Primkent QFY"
    },
    {
      id: "4572",
      district_id: "117",
      name: "Qorateri QFY"
    },
    {
      id: "4573",
      district_id: "117",
      name: "Rayimqo`lov MFY"
    },
    {
      id: "4574",
      district_id: "117",
      name: "Sarka MFY"
    },
    {
      id: "4575",
      district_id: "117",
      name: "Shermatov MFY"
    },
    {
      id: "4576",
      district_id: "117",
      name: "Sug`onchi MFY"
    },
    {
      id: "4577",
      district_id: "117",
      name: "Temirak MFY"
    },
    {
      id: "4578",
      district_id: "117",
      name: "Uchtepa MFY"
    },
    {
      id: "4579",
      district_id: "117",
      name: "Uzunqishloq MFY"
    },
    {
      id: "4580",
      district_id: "117",
      name: "Yangihayot MFY"
    },
    {
      id: "4581",
      district_id: "117",
      name: "Yangikent QFY"
    },
    {
      id: "4582",
      district_id: "117",
      name: "Yangiobod MFY"
    },
    {
      id: "4583",
      district_id: "117",
      name: "Yangiqishloq MFY"
    },
    {
      id: "4584",
      district_id: "117",
      name: "Yangiqo`rg`on MFY"
    },
    {
      id: "4585",
      district_id: "117",
      name: "Yangiqo`rg`on QFY"
    },
    {
      id: "4586",
      district_id: "117",
      name: "Yangiravot-1MFY"
    },
    {
      id: "4587",
      district_id: "117",
      name: "Yangiravot-2 MFY"
    },
    {
      id: "4588",
      district_id: "117",
      name: "Zarafshon QFY"
    },
    {
      id: "4589",
      district_id: "118",
      name: "A Navoiy MFY"
    },
    {
      id: "4590",
      district_id: "118",
      name: "Sarbozor MFY"
    },
    {
      id: "4591",
      district_id: "118",
      name: "A Primov MFY"
    },
    {
      id: "4592",
      district_id: "118",
      name: "A Yassaviy MFY"
    },
    {
      id: "4593",
      district_id: "118",
      name: "Aliobod MFY"
    },
    {
      id: "4594",
      district_id: "118",
      name: "Beshqo`rg`on MFY"
    },
    {
      id: "4595",
      district_id: "118",
      name: "Bahor MFY"
    },
    {
      id: "4596",
      district_id: "118",
      name: "Baxrin MFY"
    },
    {
      id: "4597",
      district_id: "118",
      name: "Birlashgan QFY"
    },
    {
      id: "4598",
      district_id: "118",
      name: "Birlashuv MFY"
    },
    {
      id: "4599",
      district_id: "118",
      name: "Boshcho`rosh MFY"
    },
    {
      id: "4600",
      district_id: "118",
      name: "Bo`ri MFY"
    },
    {
      id: "4601",
      district_id: "118",
      name: "Bunyodkor MFY"
    },
    {
      id: "4602",
      district_id: "118",
      name: "Chelak SHFY"
    },
    {
      id: "4603",
      district_id: "118",
      name: "Cholmo`yin MFY"
    },
    {
      id: "4604",
      district_id: "118",
      name: "Choporoshli QFY"
    },
    {
      id: "4605",
      district_id: "118",
      name: "Choshtepa MFY"
    },
    {
      id: "4606",
      district_id: "118",
      name: "Choshtepa QFY"
    },
    {
      id: "4607",
      district_id: "118",
      name: "Dehqonobod MFY"
    },
    {
      id: "4608",
      district_id: "118",
      name: "Darvishiq MFY"
    },
    {
      id: "4609",
      district_id: "118",
      name: "Do`stlarobod MFY"
    },
    {
      id: "4610",
      district_id: "118",
      name: "Do`stlik MFY"
    },
    {
      id: "4611",
      district_id: "118",
      name: "Emalach MFY"
    },
    {
      id: "4612",
      district_id: "118",
      name: "Ernazarqo`rg`on MFY"
    },
    {
      id: "4613",
      district_id: "118",
      name: "Farovon MFY"
    },
    {
      id: "4614",
      district_id: "118",
      name: "Fidokor MFY"
    },
    {
      id: "4615",
      district_id: "118",
      name: "g`allakor MFY"
    },
    {
      id: "4616",
      district_id: "118",
      name: "G`oyibota MFY"
    },
    {
      id: "4617",
      district_id: "118",
      name: "Go`zal MFY"
    },
    {
      id: "4618",
      district_id: "118",
      name: "Guliston MFY"
    },
    {
      id: "4619",
      district_id: "118",
      name: "Guliston QFY"
    },
    {
      id: "4620",
      district_id: "118",
      name: "I Ergashev MFY"
    },
    {
      id: "4621",
      district_id: "118",
      name: "Ilg`or MFY"
    },
    {
      id: "4622",
      district_id: "118",
      name: "Istiqlol MFY"
    },
    {
      id: "4623",
      district_id: "118",
      name: "Juvozxona MFY"
    },
    {
      id: "4624",
      district_id: "118",
      name: "Kattasaydov MFY"
    },
    {
      id: "4625",
      district_id: "118",
      name: "Ko`kdala QFY"
    },
    {
      id: "4626",
      district_id: "118",
      name: "Ko`ktepa MFY"
    },
    {
      id: "4627",
      district_id: "118",
      name: "Ko`lto`sin MFY"
    },
    {
      id: "4628",
      district_id: "118",
      name: "Ko`paki MFY"
    },
    {
      id: "4629",
      district_id: "118",
      name: "Kulto`sin QFY"
    },
    {
      id: "4630",
      district_id: "118",
      name: "M Ulug`bek MFY"
    },
    {
      id: "4631",
      district_id: "118",
      name: "Madaniyat MFY"
    },
    {
      id: "4632",
      district_id: "118",
      name: "Maniobod MFY"
    },
    {
      id: "4633",
      district_id: "118",
      name: "Mustaqillik MFY"
    },
    {
      id: "4634",
      district_id: "118",
      name: "Muxammadi MFY"
    },
    {
      id: "4635",
      district_id: "118",
      name: "Nakurt MFY"
    },
    {
      id: "4636",
      district_id: "118",
      name: "Navbahor MFY"
    },
    {
      id: "4637",
      district_id: "118",
      name: "Navro`z MFY"
    },
    {
      id: "4638",
      district_id: "118",
      name: "Olmazor MFY"
    },
    {
      id: "4639",
      district_id: "118",
      name: "Oqqo`rg`on MFY"
    },
    {
      id: "4640",
      district_id: "118",
      name: "Oqqo`rg`on QFY"
    },
    {
      id: "4641",
      district_id: "118",
      name: "Oytamg`ali QFY"
    },
    {
      id: "4642",
      district_id: "118",
      name: "O`rtasaydov QFY"
    },
    {
      id: "4643",
      district_id: "118",
      name: "O`zbekiston MFY"
    },
    {
      id: "4644",
      district_id: "118",
      name: "Polvonariq MFY"
    },
    {
      id: "4645",
      district_id: "118",
      name: "Qahramon MFY"
    },
    {
      id: "4646",
      district_id: "118",
      name: "Qirqovul MFY"
    },
    {
      id: "4647",
      district_id: "118",
      name: "Qorasuv QFY"
    },
    {
      id: "4648",
      district_id: "118",
      name: "Qumchuq MFY"
    },
    {
      id: "4649",
      district_id: "118",
      name: "Rayim MFY"
    },
    {
      id: "4650",
      district_id: "118",
      name: "Sanoat QFY"
    },
    {
      id: "4651",
      district_id: "118",
      name: "Sho`rtepa MFY"
    },
    {
      id: "4652",
      district_id: "118",
      name: "Sorisuv MFY"
    },
    {
      id: "4653",
      district_id: "118",
      name: "T Axmedov MFY"
    },
    {
      id: "4654",
      district_id: "118",
      name: "T Jo`raev MFY"
    },
    {
      id: "4655",
      district_id: "118",
      name: "Tamoyrot MFY"
    },
    {
      id: "4656",
      district_id: "118",
      name: "Toshhavuz MFY"
    },
    {
      id: "4657",
      district_id: "118",
      name: "Toxirshayx MFY"
    },
    {
      id: "4658",
      district_id: "118",
      name: "To`polos MFY"
    },
    {
      id: "4659",
      district_id: "118",
      name: "Turkibola MFY"
    },
    {
      id: "4660",
      district_id: "118",
      name: "X.Ismoil MFY"
    },
    {
      id: "4661",
      district_id: "118",
      name: "Xolqobod MFY"
    },
    {
      id: "4662",
      district_id: "118",
      name: "Xosa MFY"
    },
    {
      id: "4663",
      district_id: "118",
      name: "Xo`jaobod MFY"
    },
    {
      id: "4664",
      district_id: "118",
      name: "Zarafshon MFY"
    },
    {
      id: "4665",
      district_id: "119",
      name: "A.Temur MFY"
    },
    {
      id: "4666",
      district_id: "119",
      name: "Agron MFY"
    },
    {
      id: "4667",
      district_id: "119",
      name: "Anhor QFY"
    },
    {
      id: "4668",
      district_id: "119",
      name: "Arabxona QFY"
    },
    {
      id: "4669",
      district_id: "119",
      name: "Beklar MFY"
    },
    {
      id: "4670",
      district_id: "119",
      name: "Beshbola MFY"
    },
    {
      id: "4671",
      district_id: "119",
      name: "Beshqahramon QFY"
    },
    {
      id: "4672",
      district_id: "119",
      name: "Beshnayman MFY"
    },
    {
      id: "4673",
      district_id: "119",
      name: "Bakkol MFY"
    },
    {
      id: "4674",
      district_id: "119",
      name: "Balxiyon MFY"
    },
    {
      id: "4675",
      district_id: "119",
      name: "Baxor MFY"
    },
    {
      id: "4676",
      district_id: "119",
      name: "Baxshiboy MFY"
    },
    {
      id: "4677",
      district_id: "119",
      name: "Bobur nomli MFY"
    },
    {
      id: "4678",
      district_id: "119",
      name: "Bogishamol MFY"
    },
    {
      id: "4679",
      district_id: "119",
      name: "Bogonali MFY"
    },
    {
      id: "4680",
      district_id: "119",
      name: "Bolatosh QFY"
    },
    {
      id: "4681",
      district_id: "119",
      name: "Boldir MFY"
    },
    {
      id: "4682",
      district_id: "119",
      name: "Boltali MFY"
    },
    {
      id: "4683",
      district_id: "119",
      name: "Buston MFY"
    },
    {
      id: "4684",
      district_id: "119",
      name: "Buyuk turon MFY"
    },
    {
      id: "4685",
      district_id: "119",
      name: "Chandir MFY"
    },
    {
      id: "4686",
      district_id: "119",
      name: "Chandirobod MFY"
    },
    {
      id: "4687",
      district_id: "119",
      name: "Charxin MFY"
    },
    {
      id: "4688",
      district_id: "119",
      name: "Charxin SHFY"
    },
    {
      id: "4689",
      district_id: "119",
      name: "Chimboy QFY"
    },
    {
      id: "4690",
      district_id: "119",
      name: "Chimboy MFY"
    },
    {
      id: "4691",
      district_id: "119",
      name: "Chortut MFY"
    },
    {
      id: "4692",
      district_id: "119",
      name: "Dimishkibola QFY"
    },
    {
      id: "4693",
      district_id: "119",
      name: "Durmonsoy MFY"
    },
    {
      id: "4694",
      district_id: "119",
      name: "Durmontepa QFY"
    },
    {
      id: "4695",
      district_id: "119",
      name: "Do`stlik MFY"
    },
    {
      id: "4696",
      district_id: "119",
      name: "Elbek MFY"
    },
    {
      id: "4697",
      district_id: "119",
      name: "Esaboy MFY"
    },
    {
      id: "4698",
      district_id: "119",
      name: "Eski Juma MFY"
    },
    {
      id: "4699",
      district_id: "119",
      name: "Furkat MFY"
    },
    {
      id: "4700",
      district_id: "119",
      name: "Galatut MFY"
    },
    {
      id: "4701",
      district_id: "119",
      name: "Go`zalkent QFY"
    },
    {
      id: "4702",
      district_id: "119",
      name: "Go`zalkent MFY"
    },
    {
      id: "4703",
      district_id: "119",
      name: "Gulakandoz MFY"
    },
    {
      id: "4704",
      district_id: "119",
      name: "Guliston MFY"
    },
    {
      id: "4705",
      district_id: "119",
      name: "Gulobod MFY"
    },
    {
      id: "4706",
      district_id: "119",
      name: "Gumbaz MFY"
    },
    {
      id: "4707",
      district_id: "119",
      name: "Ilm MFY"
    },
    {
      id: "4708",
      district_id: "119",
      name: "Imomjon kadimiy yodgorligi MFY"
    },
    {
      id: "4709",
      district_id: "119",
      name: "Iskandari MFY"
    },
    {
      id: "4710",
      district_id: "119",
      name: "Jagalboyli MFY"
    },
    {
      id: "4711",
      district_id: "119",
      name: "Jaul Kosim MFY"
    },
    {
      id: "4712",
      district_id: "119",
      name: "K.Rajabov MFY"
    },
    {
      id: "4713",
      district_id: "119",
      name: "Kamolot MFY"
    },
    {
      id: "4714",
      district_id: "119",
      name: "Karabuyin MFY"
    },
    {
      id: "4715",
      district_id: "119",
      name: "Katta-Nayman MFY"
    },
    {
      id: "4716",
      district_id: "119",
      name: "Kichik Naymancha MFY"
    },
    {
      id: "4717",
      district_id: "119",
      name: "Koksoy MFY"
    },
    {
      id: "4718",
      district_id: "119",
      name: "Koraguppa MFY"
    },
    {
      id: "4719",
      district_id: "119",
      name: "Korasuv MFY"
    },
    {
      id: "4720",
      district_id: "119",
      name: "Kukoni MFY"
    },
    {
      id: "4721",
      district_id: "119",
      name: "Qush Chinor MFY"
    },
    {
      id: "4722",
      district_id: "119",
      name: "Kushkuduk MFY"
    },
    {
      id: "4723",
      district_id: "119",
      name: "Mehnat MFY"
    },
    {
      id: "4724",
      district_id: "119",
      name: "Madaniy yurish MFY"
    },
    {
      id: "4725",
      district_id: "119",
      name: "Mangitobod MFY"
    },
    {
      id: "4726",
      district_id: "119",
      name: "Mirzatut MFY"
    },
    {
      id: "4727",
      district_id: "119",
      name: "Mustakillik MFY"
    },
    {
      id: "4728",
      district_id: "119",
      name: "Namuna QFY"
    },
    {
      id: "4729",
      district_id: "119",
      name: "Navbaxor MFY"
    },
    {
      id: "4730",
      district_id: "119",
      name: "Navoiy MFY"
    },
    {
      id: "4731",
      district_id: "119",
      name: "Navruz MFY"
    },
    {
      id: "4732",
      district_id: "119",
      name: "Nayman MFY"
    },
    {
      id: "4733",
      district_id: "119",
      name: "Nomozgox MFY"
    },
    {
      id: "4734",
      district_id: "119",
      name: "Novchandir MFY"
    },
    {
      id: "4735",
      district_id: "119",
      name: "Ok mangit MFY"
    },
    {
      id: "4736",
      district_id: "119",
      name: "Oq oltin MFY"
    },
    {
      id: "4737",
      district_id: "119",
      name: "Oltikaxramon"
    },
    {
      id: "4738",
      district_id: "119",
      name: "Oshik ota MFY"
    },
    {
      id: "4739",
      district_id: "119",
      name: "Parcha Chandir MFY"
    },
    {
      id: "4740",
      district_id: "119",
      name: "Parchakora MFY"
    },
    {
      id: "4741",
      district_id: "119",
      name: "Paxtachi MFY"
    },
    {
      id: "4742",
      district_id: "119",
      name: "Paxtakor MFY"
    },
    {
      id: "4743",
      district_id: "119",
      name: "Pulatchi QFY"
    },
    {
      id: "4744",
      district_id: "119",
      name: "Pulatchi MFY"
    },
    {
      id: "4745",
      district_id: "119",
      name: "Qaravultepa MFY"
    },
    {
      id: "4746",
      district_id: "119",
      name: "Qarshiobod MFY"
    },
    {
      id: "4747",
      district_id: "119",
      name: "Qator terak MFY"
    },
    {
      id: "4748",
      district_id: "119",
      name: "Ravot MFY"
    },
    {
      id: "4749",
      district_id: "119",
      name: "Samarqand MFY"
    },
    {
      id: "4750",
      district_id: "119",
      name: "Sanchikul MFY"
    },
    {
      id: "4751",
      district_id: "119",
      name: "Sanchiqul QFY"
    },
    {
      id: "4752",
      district_id: "119",
      name: "Saribosh QFY"
    },
    {
      id: "4753",
      district_id: "119",
      name: "Sazagon MFY"
    },
    {
      id: "4754",
      district_id: "119",
      name: "Sh.Rashidov MFY"
    },
    {
      id: "4755",
      district_id: "119",
      name: "Shombuloq MFY"
    },
    {
      id: "4756",
      district_id: "119",
      name: "Sinchi MFY"
    },
    {
      id: "4757",
      district_id: "119",
      name: "Temir yo`l MFY"
    },
    {
      id: "4758",
      district_id: "119",
      name: "Temirxo`ja MFY"
    },
    {
      id: "4759",
      district_id: "119",
      name: "Tinchlik MFY"
    },
    {
      id: "4760",
      district_id: "119",
      name: "Torarik MFY"
    },
    {
      id: "4761",
      district_id: "119",
      name: "Torarik QFY"
    },
    {
      id: "4762",
      district_id: "119",
      name: "Toz Qulton MFY"
    },
    {
      id: "4763",
      district_id: "119",
      name: "Tukboy MFY"
    },
    {
      id: "4764",
      district_id: "119",
      name: "Turkman MFY"
    },
    {
      id: "4765",
      district_id: "119",
      name: "Turon MFY"
    },
    {
      id: "4766",
      district_id: "119",
      name: "Turt Aygir MFY"
    },
    {
      id: "4767",
      district_id: "119",
      name: "Turt tom MFY"
    },
    {
      id: "4768",
      district_id: "119",
      name: "Uch tepa MFY"
    },
    {
      id: "4769",
      district_id: "119",
      name: "Ulug`bek MFY"
    },
    {
      id: "4770",
      district_id: "119",
      name: "Un ikki MFY"
    },
    {
      id: "4771",
      district_id: "119",
      name: "Urta Charxin MFY"
    },
    {
      id: "4772",
      district_id: "119",
      name: "Usku MFY"
    },
    {
      id: "4773",
      district_id: "119",
      name: "Utarchi MFY"
    },
    {
      id: "4774",
      district_id: "119",
      name: "Xavuzak MFY"
    },
    {
      id: "4775",
      district_id: "119",
      name: "Xindiboy MFY"
    },
    {
      id: "4776",
      district_id: "119",
      name: "Xonchorbog` MFY"
    },
    {
      id: "4777",
      district_id: "119",
      name: "Yangi avlod MFY"
    },
    {
      id: "4778",
      district_id: "119",
      name: "Yangikishlok MFY"
    },
    {
      id: "4779",
      district_id: "119",
      name: "Yangiobod MFY"
    },
    {
      id: "4780",
      district_id: "119",
      name: "Yangiravot MFY"
    },
    {
      id: "4781",
      district_id: "119",
      name: "Yangisanoat MFY"
    },
    {
      id: "4782",
      district_id: "119",
      name: "Yuqori bog`onali MFY"
    },
    {
      id: "4783",
      district_id: "119",
      name: "Zangiboy MFY"
    },
    {
      id: "4784",
      district_id: "119",
      name: "Zormon MFY"
    },
    {
      id: "4785",
      district_id: "120",
      name: "Alisher Navoiy MFY"
    },
    {
      id: "4786",
      district_id: "120",
      name: "Amir Temur MFY"
    },
    {
      id: "4787",
      district_id: "120",
      name: "Amirobod MFY"
    },
    {
      id: "4788",
      district_id: "120",
      name: "Bobon MFY"
    },
    {
      id: "4789",
      district_id: "120",
      name: "Bodoy MFY"
    },
    {
      id: "4790",
      district_id: "120",
      name: "Bog`oloni MFY"
    },
    {
      id: "4791",
      district_id: "120",
      name: "Boltali MFY"
    },
    {
      id: "4792",
      district_id: "120",
      name: "Bo`ston MFY"
    },
    {
      id: "4793",
      district_id: "120",
      name: "Burqut MFY"
    },
    {
      id: "4794",
      district_id: "120",
      name: "Chashma MFY"
    },
    {
      id: "4795",
      district_id: "120",
      name: "Chorgo`sha MFY"
    },
    {
      id: "4796",
      district_id: "120",
      name: "Choshtepa MFY"
    },
    {
      id: "4797",
      district_id: "120",
      name: "Dabus qal`a MFY"
    },
    {
      id: "4798",
      district_id: "120",
      name: "Do`ng MFY"
    },
    {
      id: "4799",
      district_id: "120",
      name: "Do`stobod QFY"
    },
    {
      id: "4800",
      district_id: "120",
      name: "Eshmatjobi MFY"
    },
    {
      id: "4801",
      district_id: "120",
      name: "Farovon yo`ldoshobod"
    },
    {
      id: "4802",
      district_id: "120",
      name: "Go`ro`g`li MFY"
    },
    {
      id: "4803",
      district_id: "120",
      name: "Guliston MFY"
    },
    {
      id: "4804",
      district_id: "120",
      name: "Ismoilobod MFY"
    },
    {
      id: "4805",
      district_id: "120",
      name: "Istiqbol MFY"
    },
    {
      id: "4806",
      district_id: "120",
      name: "Istiqlol MFY"
    },
    {
      id: "4807",
      district_id: "120",
      name: "Jahonobod MFY"
    },
    {
      id: "4808",
      district_id: "120",
      name: "Jona MFY"
    },
    {
      id: "4809",
      district_id: "120",
      name: "Keshtali MFY"
    },
    {
      id: "4810",
      district_id: "120",
      name: "Ko`rpa MFY"
    },
    {
      id: "4811",
      district_id: "120",
      name: "Mirkent MFY"
    },
    {
      id: "4812",
      district_id: "120",
      name: "Mirsiddiq Hashmat"
    },
    {
      id: "4813",
      district_id: "120",
      name: "Mirza Salimiy MFY"
    },
    {
      id: "4814",
      district_id: "120",
      name: "Mirzo Ulug`bek MFY"
    },
    {
      id: "4815",
      district_id: "120",
      name: "Mirzo Nodim MFY"
    },
    {
      id: "4816",
      district_id: "120",
      name: "Mirzo Olim MFY"
    },
    {
      id: "4817",
      district_id: "120",
      name: "Misit QFY"
    },
    {
      id: "4818",
      district_id: "120",
      name: "Mojor MFY"
    },
    {
      id: "4819",
      district_id: "120",
      name: "Nahripay MFY"
    },
    {
      id: "4820",
      district_id: "120",
      name: "Nayman MFY"
    },
    {
      id: "4821",
      district_id: "120",
      name: "Niyozjobi MFY"
    },
    {
      id: "4822",
      district_id: "120",
      name: "Nurafshon MFY"
    },
    {
      id: "4823",
      district_id: "120",
      name: "Oqtepa MFY"
    },
    {
      id: "4824",
      district_id: "120",
      name: "O`rta MFY"
    },
    {
      id: "4825",
      district_id: "120",
      name: "Pastburqut MFY"
    },
    {
      id: "4826",
      district_id: "120",
      name: "Poyonigumbaz MFY"
    },
    {
      id: "4827",
      district_id: "120",
      name: "Po`latchi QFY"
    },
    {
      id: "4828",
      district_id: "120",
      name: "Qarnab QFY"
    },
    {
      id: "4829",
      district_id: "120",
      name: "Qirguli MFY"
    },
    {
      id: "4830",
      district_id: "120",
      name: "Qodiris MFY"
    },
    {
      id: "4831",
      district_id: "120",
      name: "Qoratepa MFY"
    },
    {
      id: "4832",
      district_id: "120",
      name: "Qoraunos MFY"
    },
    {
      id: "4833",
      district_id: "120",
      name: "Qo`shhovuz MFY"
    },
    {
      id: "4834",
      district_id: "120",
      name: "Quvondiq MFY"
    },
    {
      id: "4835",
      district_id: "120",
      name: "Quyibog` QFY"
    },
    {
      id: "4836",
      district_id: "120",
      name: "Sadr ziyo MFY"
    },
    {
      id: "4837",
      district_id: "120",
      name: "Sardoba MFY"
    },
    {
      id: "4838",
      district_id: "120",
      name: "Saroy MFY"
    },
    {
      id: "4839",
      district_id: "120",
      name: "Shamsnazar MFY"
    },
    {
      id: "4840",
      district_id: "120",
      name: "Sohil bo`yi MFY"
    },
    {
      id: "4841",
      district_id: "120",
      name: "Sotiboldi MFY"
    },
    {
      id: "4842",
      district_id: "120",
      name: "Sultonobod QFY"
    },
    {
      id: "4843",
      district_id: "120",
      name: "Suluvqo`rg`on MFY"
    },
    {
      id: "4844",
      district_id: "120",
      name: "Tadbirkor MFY"
    },
    {
      id: "4845",
      district_id: "120",
      name: "Taraqqiyot MFY"
    },
    {
      id: "4846",
      district_id: "120",
      name: "Tinchlik MFY"
    },
    {
      id: "4847",
      district_id: "120",
      name: "Toshko`prik MFY"
    },
    {
      id: "4848",
      district_id: "120",
      name: "To`g`olon MFY"
    },
    {
      id: "4849",
      district_id: "120",
      name: "Ukrash MFY"
    },
    {
      id: "4850",
      district_id: "120",
      name: "Urg`uch MFY"
    },
    {
      id: "4851",
      district_id: "120",
      name: "Urganji MFY"
    },
    {
      id: "4852",
      district_id: "120",
      name: "Hayitelbegi MFY"
    },
    {
      id: "4853",
      district_id: "120",
      name: "Xayrobod QFY"
    },
    {
      id: "4854",
      district_id: "120",
      name: "Xudoyberdi MFY"
    },
    {
      id: "4855",
      district_id: "120",
      name: "Xumor QFY"
    },
    {
      id: "4856",
      district_id: "120",
      name: "Yangiobod MFY"
    },
    {
      id: "4857",
      district_id: "120",
      name: "Zarafshon MFY"
    },
    {
      id: "4858",
      district_id: "120",
      name: "Ziyovuddin SHFY"
    },
    {
      id: "4859",
      district_id: "121",
      name: "Andijoni MFY"
    },
    {
      id: "4860",
      district_id: "121",
      name: "Angarolmos MFY"
    },
    {
      id: "4861",
      district_id: "121",
      name: "Badal MFY"
    },
    {
      id: "4862",
      district_id: "121",
      name: "Bo`zi MFY"
    },
    {
      id: "4863",
      district_id: "121",
      name: "Buxori MFY"
    },
    {
      id: "4864",
      district_id: "121",
      name: "Chaqqa MFY"
    },
    {
      id: "4865",
      district_id: "121",
      name: "Chorshanba MFY"
    },
    {
      id: "4866",
      district_id: "121",
      name: "Chumchuqli MFY"
    },
    {
      id: "4867",
      district_id: "121",
      name: "Dehnav MFY"
    },
    {
      id: "4868",
      district_id: "121",
      name: "Dashtakibolo QFY"
    },
    {
      id: "4869",
      district_id: "121",
      name: "Dashtiso`xta MFY"
    },
    {
      id: "4870",
      district_id: "121",
      name: "Gulbog` MFY"
    },
    {
      id: "4871",
      district_id: "121",
      name: "Gulobod MFY"
    },
    {
      id: "4872",
      district_id: "121",
      name: "Ipakchi MFY"
    },
    {
      id: "4873",
      district_id: "121",
      name: "Jarqishloq MFY"
    },
    {
      id: "4874",
      district_id: "121",
      name: "Jo`yisoy MFY"
    },
    {
      id: "4875",
      district_id: "121",
      name: "Kattako`rgonariq QFY"
    },
    {
      id: "4876",
      district_id: "121",
      name: "Konigil MFY"
    },
    {
      id: "4877",
      district_id: "121",
      name: "Ko`saxo MFY"
    },
    {
      id: "4878",
      district_id: "121",
      name: "Kulba MFY"
    },
    {
      id: "4879",
      district_id: "121",
      name: "Kulbaipoyon QFY"
    },
    {
      id: "4880",
      district_id: "121",
      name: "Markaziy Arabxona MFY"
    },
    {
      id: "4881",
      district_id: "121",
      name: "Mirishkor MFY"
    },
    {
      id: "4882",
      district_id: "121",
      name: "Mironqul MFY"
    },
    {
      id: "4883",
      district_id: "121",
      name: "Navbog` MFY"
    },
    {
      id: "4884",
      district_id: "121",
      name: "Navobod MFY"
    },
    {
      id: "4885",
      district_id: "121",
      name: "Navobod MFY"
    },
    {
      id: "4886",
      district_id: "121",
      name: "Navro`z MFY"
    },
    {
      id: "4887",
      district_id: "121",
      name: "Navro`z MFY"
    },
    {
      id: "4888",
      district_id: "121",
      name: "Nayzat?ppa MFY"
    },
    {
      id: "4889",
      district_id: "121",
      name: "Obod MFY"
    },
    {
      id: "4890",
      district_id: "121",
      name: "Ohalik QFY"
    },
    {
      id: "4891",
      district_id: "121",
      name: "Oqmachit MFY"
    },
    {
      id: "4892",
      district_id: "121",
      name: "O`rta Arabxona MFY"
    },
    {
      id: "4893",
      district_id: "121",
      name: "O`rta Ohalik MFY"
    },
    {
      id: "4894",
      district_id: "121",
      name: "O`rta Turkman MFY"
    },
    {
      id: "4895",
      district_id: "121",
      name: "O`rtashiq MFY"
    },
    {
      id: "4896",
      district_id: "121",
      name: "O`zbekkenti MFY"
    },
    {
      id: "4897",
      district_id: "121",
      name: "Parrandachi MFY"
    },
    {
      id: "4898",
      district_id: "121",
      name: "Past Oxalik MFY"
    },
    {
      id: "4899",
      district_id: "121",
      name: "Pulimug`ob MFY"
    },
    {
      id: "4900",
      district_id: "121",
      name: "Qavchinon MFY"
    },
    {
      id: "4901",
      district_id: "121",
      name: "Qavchinonibolo MFY"
    },
    {
      id: "4902",
      district_id: "121",
      name: "Qaynama QFY"
    },
    {
      id: "4903",
      district_id: "121",
      name: "Qorasuv MFY"
    },
    {
      id: "4904",
      district_id: "121",
      name: "Qoziariq MFY"
    },
    {
      id: "4905",
      district_id: "121",
      name: "Qoziqo`rg`on MFY"
    },
    {
      id: "4906",
      district_id: "121",
      name: "Qo`shko`pruk MFY"
    },
    {
      id: "4907",
      district_id: "121",
      name: "Qo`shmachit MFY"
    },
    {
      id: "4908",
      district_id: "121",
      name: "Qo`shtamg`ali MFY"
    },
    {
      id: "4909",
      district_id: "121",
      name: "Qo`shtamg`ali QFY"
    },
    {
      id: "4910",
      district_id: "121",
      name: "Qo`yi Arabxona MFY"
    },
    {
      id: "4911",
      district_id: "121",
      name: "Qo`yi Chordara MFY"
    },
    {
      id: "4912",
      district_id: "121",
      name: "Qo`yi Qaynama MFY"
    },
    {
      id: "4913",
      district_id: "121",
      name: "Qo`yi Turkman MFY"
    },
    {
      id: "4914",
      district_id: "121",
      name: "Qumzor MFY"
    },
    {
      id: "4915",
      district_id: "121",
      name: "Rajabamin MFY"
    },
    {
      id: "4916",
      district_id: "121",
      name: "Ravonak MFY"
    },
    {
      id: "4917",
      district_id: "121",
      name: "Rustam MFY"
    },
    {
      id: "4918",
      district_id: "121",
      name: "Sarimazor MFY"
    },
    {
      id: "4919",
      district_id: "121",
      name: "Shalg`amon MFY"
    },
    {
      id: "4920",
      district_id: "121",
      name: "Sho`rboi-1 MFY"
    },
    {
      id: "4921",
      district_id: "121",
      name: "Sho`rboi-2 MFY"
    },
    {
      id: "4922",
      district_id: "121",
      name: "Sho`rboicha MFY"
    },
    {
      id: "4923",
      district_id: "121",
      name: "Sulfakabutak MFY"
    },
    {
      id: "4924",
      district_id: "121",
      name: "Talibarzui bolo MFY"
    },
    {
      id: "4925",
      district_id: "121",
      name: "Talibarzui poyon MFY"
    },
    {
      id: "4926",
      district_id: "121",
      name: "Ulug`bek QFY"
    },
    {
      id: "4927",
      district_id: "121",
      name: "Urganji MFY"
    },
    {
      id: "4928",
      district_id: "121",
      name: "Xaymari bolo MFY"
    },
    {
      id: "4929",
      district_id: "121",
      name: "Xaymari poyon MFY"
    },
    {
      id: "4930",
      district_id: "121",
      name: "Xoja Axrori Vali-1 MFY"
    },
    {
      id: "4931",
      district_id: "121",
      name: "Xoja Axrori Vali-2 MFY"
    },
    {
      id: "4932",
      district_id: "121",
      name: "Yangiariq MFY"
    },
    {
      id: "4933",
      district_id: "121",
      name: "Yangiariq MFY"
    },
    {
      id: "4934",
      district_id: "121",
      name: "Yangiariq - 1 MFY"
    },
    {
      id: "4935",
      district_id: "121",
      name: "Yangijoy MFY"
    },
    {
      id: "4936",
      district_id: "121",
      name: "Yangiobod MFY"
    },
    {
      id: "4937",
      district_id: "121",
      name: "Yangiravot MFY"
    },
    {
      id: "4938",
      district_id: "121",
      name: "Yukori Turkman MFY"
    },
    {
      id: "4939",
      district_id: "121",
      name: "Yuqori Arabxona MFY"
    },
    {
      id: "4940",
      district_id: "121",
      name: "Yuqori Chordara MFY"
    },
    {
      id: "4941",
      district_id: "121",
      name: "Yuqori Qaynama MFY"
    },
    {
      id: "4942",
      district_id: "121",
      name: "Zahlik MFY"
    },
    {
      id: "4943",
      district_id: "122",
      name: "Abdulla Qaxxor MFY"
    },
    {
      id: "4944",
      district_id: "122",
      name: "Abdurahmon Jomiy MFY"
    },
    {
      id: "4945",
      district_id: "122",
      name: "Abu Abdullo Rudakiy MFY"
    },
    {
      id: "4946",
      district_id: "122",
      name: "Abu Rayxon B?runiy MFY"
    },
    {
      id: "4947",
      district_id: "122",
      name: "Adolat MFY"
    },
    {
      id: "4948",
      district_id: "122",
      name: "Aeroport MFY"
    },
    {
      id: "4949",
      district_id: "122",
      name: "Afrosiyob MFY"
    },
    {
      id: "4950",
      district_id: "122",
      name: "Al Buxoriy MFY"
    },
    {
      id: "4951",
      district_id: "122",
      name: "Al Farobiy MFY"
    },
    {
      id: "4952",
      district_id: "122",
      name: "Ali Kushchi MFY"
    },
    {
      id: "4953",
      district_id: "122",
      name: "Ali zoda MFY"
    },
    {
      id: "4954",
      district_id: "122",
      name: "Alisher Navoiy MFY"
    },
    {
      id: "4955",
      district_id: "122",
      name: "Amir Temur MFY"
    },
    {
      id: "4956",
      district_id: "122",
      name: "Anhor MFY"
    },
    {
      id: "4957",
      district_id: "122",
      name: "Axillik MFY"
    },
    {
      id: "4958",
      district_id: "122",
      name: "Axmad Yassaviy MFY"
    },
    {
      id: "4959",
      district_id: "122",
      name: "Beklar MFY"
    },
    {
      id: "4960",
      district_id: "122",
      name: "Bekxo MFY"
    },
    {
      id: "4961",
      district_id: "122",
      name: "Besh chinor MFY"
    },
    {
      id: "4962",
      district_id: "122",
      name: "Beshg`ujum MFY"
    },
    {
      id: "4963",
      district_id: "122",
      name: "Baraka MFY"
    },
    {
      id: "4964",
      district_id: "122",
      name: "Baxor MFY"
    },
    {
      id: "4965",
      district_id: "122",
      name: "Birlik MFY"
    },
    {
      id: "4966",
      district_id: "122",
      name: "Bog`i baland MFY"
    },
    {
      id: "4967",
      district_id: "122",
      name: "Bog`i maydon MFY"
    },
    {
      id: "4968",
      district_id: "122",
      name: "Bog`bonlar MFY"
    },
    {
      id: "4969",
      district_id: "122",
      name: "Bog`dod MFY"
    },
    {
      id: "4970",
      district_id: "122",
      name: "Bog`i baland-2 MFY"
    },
    {
      id: "4971",
      district_id: "122",
      name: "Bog`i maydon 2 MFY"
    },
    {
      id: "4972",
      district_id: "122",
      name: "Bog`i saroy MFY"
    },
    {
      id: "4973",
      district_id: "122",
      name: "Bog`i shamol MFY"
    },
    {
      id: "4974",
      district_id: "122",
      name: "Bog`i shifo MFY"
    },
    {
      id: "4975",
      district_id: "122",
      name: "Bog`i Temur MFY"
    },
    {
      id: "4976",
      district_id: "122",
      name: "Bog`ichinor MFY"
    },
    {
      id: "4977",
      district_id: "122",
      name: "Bog`iston MFY"
    },
    {
      id: "4978",
      district_id: "122",
      name: "Botir Zokirov MFY"
    },
    {
      id: "4979",
      district_id: "122",
      name: "Bunyod MFY"
    },
    {
      id: "4980",
      district_id: "122",
      name: "Bunyodkor MFY"
    },
    {
      id: "4981",
      district_id: "122",
      name: "Buston MFY"
    },
    {
      id: "4982",
      district_id: "122",
      name: "Chaqar MFY"
    },
    {
      id: "4983",
      district_id: "122",
      name: "Chashma MFY"
    },
    {
      id: "4984",
      district_id: "122",
      name: "Chilkuduk MFY"
    },
    {
      id: "4985",
      district_id: "122",
      name: "Chilstun MFY"
    },
    {
      id: "4986",
      district_id: "122",
      name: "Chorbog` MFY"
    },
    {
      id: "4987",
      district_id: "122",
      name: "Chupon ota MFY"
    },
    {
      id: "4988",
      district_id: "122",
      name: "D. Samarqandiy MFY"
    },
    {
      id: "4989",
      district_id: "122",
      name: "D.Qalandarxona MFY"
    },
    {
      id: "4990",
      district_id: "122",
      name: "Devori Kundalang MFY"
    },
    {
      id: "4991",
      district_id: "122",
      name: "Dehqon MFY"
    },
    {
      id: "4992",
      district_id: "122",
      name: "Dahbediy MFY"
    },
    {
      id: "4993",
      district_id: "122",
      name: "Damarik-1 MFY"
    },
    {
      id: "4994",
      district_id: "122",
      name: "Darg`om MFY"
    },
    {
      id: "4995",
      district_id: "122",
      name: "Dari Zanjir MFY"
    },
    {
      id: "4996",
      district_id: "122",
      name: "Dukchiyon MFY"
    },
    {
      id: "4997",
      district_id: "122",
      name: "Do`stlik MFY"
    },
    {
      id: "4998",
      district_id: "122",
      name: "Eski Qalandarxona MFY"
    },
    {
      id: "4999",
      district_id: "122",
      name: "Eski Xazora MFY"
    },
    {
      id: "5000",
      district_id: "122",
      name: "Farog`at MFY"
    },
    {
      id: "5001",
      district_id: "122",
      name: "Farovonlik MFY"
    },
    {
      id: "5002",
      district_id: "122",
      name: "Farxod shfy"
    },
    {
      id: "5003",
      district_id: "122",
      name: "Furqat MFY"
    },
    {
      id: "5004",
      district_id: "122",
      name: "G`afur G`ulom MFY"
    },
    {
      id: "5005",
      district_id: "122",
      name: "G`iyosiddin Jamshid MFY"
    },
    {
      id: "5006",
      district_id: "122",
      name: "Geofizika MFY"
    },
    {
      id: "5007",
      district_id: "122",
      name: "Galaosiyo MFY"
    },
    {
      id: "5008",
      district_id: "122",
      name: "Garmako MFY"
    },
    {
      id: "5009",
      district_id: "122",
      name: "Gulbaxor MFY"
    },
    {
      id: "5010",
      district_id: "122",
      name: "Guliston MFY"
    },
    {
      id: "5011",
      district_id: "122",
      name: "Gullar bogi MFY"
    },
    {
      id: "5012",
      district_id: "122",
      name: "Guri Amir MFY"
    },
    {
      id: "5013",
      district_id: "122",
      name: "Ibn Sino MFY"
    },
    {
      id: "5014",
      district_id: "122",
      name: "Ibrohim Xuja MFY"
    },
    {
      id: "5015",
      district_id: "122",
      name: "Ilmobod MFY"
    },
    {
      id: "5016",
      district_id: "122",
      name: "Ilxom MFY"
    },
    {
      id: "5017",
      district_id: "122",
      name: "Imom Vose MFY"
    },
    {
      id: "5018",
      district_id: "122",
      name: "Ipak yo`li MFY"
    },
    {
      id: "5019",
      district_id: "122",
      name: "Islohot MFY"
    },
    {
      id: "5020",
      district_id: "122",
      name: "Istiqlol MFY"
    },
    {
      id: "5021",
      district_id: "122",
      name: "Istiqbol MFY"
    },
    {
      id: "5022",
      district_id: "122",
      name: "Izvoshchilar MFY"
    },
    {
      id: "5023",
      district_id: "122",
      name: "Joyi chukur MFY"
    },
    {
      id: "5024",
      district_id: "122",
      name: "Kadriyat MFY"
    },
    {
      id: "5025",
      district_id: "122",
      name: "Kaftarxona MFY"
    },
    {
      id: "5026",
      district_id: "122",
      name: "Kaftarxona-2 MFY"
    },
    {
      id: "5027",
      district_id: "122",
      name: "Kamolot MFY"
    },
    {
      id: "5028",
      district_id: "122",
      name: "Karshi yuli MFY"
    },
    {
      id: "5029",
      district_id: "122",
      name: "Katta arik MFY"
    },
    {
      id: "5030",
      district_id: "122",
      name: "Kattakurgon MFY"
    },
    {
      id: "5031",
      district_id: "122",
      name: "Kavarzor MFY"
    },
    {
      id: "5032",
      district_id: "122",
      name: "Kavola MFY"
    },
    {
      id: "5033",
      district_id: "122",
      name: "Kavola-3 MFY"
    },
    {
      id: "5034",
      district_id: "122",
      name: "Kimyogarlar shfy"
    },
    {
      id: "5035",
      district_id: "122",
      name: "Kir MFY"
    },
    {
      id: "5036",
      district_id: "122",
      name: "Kuk maschid MFY"
    },
    {
      id: "5037",
      district_id: "122",
      name: "Kuksaroy MFY"
    },
    {
      id: "5038",
      district_id: "122",
      name: "Kul MFY"
    },
    {
      id: "5039",
      district_id: "122",
      name: "Kundi Sufi MFY"
    },
    {
      id: "5040",
      district_id: "122",
      name: "Kurgoncha MFY"
    },
    {
      id: "5041",
      district_id: "122",
      name: "Kush bakkoli MFY"
    },
    {
      id: "5042",
      district_id: "122",
      name: "Kush chinor MFY"
    },
    {
      id: "5043",
      district_id: "122",
      name: "Kush Hovuz MFY"
    },
    {
      id: "5044",
      district_id: "122",
      name: "Kuyi Xuja Soat MFY"
    },
    {
      id: "5045",
      district_id: "122",
      name: "Lolazor-2 MFY"
    },
    {
      id: "5046",
      district_id: "122",
      name: "Loxutiy MFY"
    },
    {
      id: "5047",
      district_id: "122",
      name: "Luchchakon MFY"
    },
    {
      id: "5048",
      district_id: "122",
      name: "M.Kungirokdor MFY"
    },
    {
      id: "5049",
      district_id: "122",
      name: "Mevazor MFY"
    },
    {
      id: "5050",
      district_id: "122",
      name: "Mexnat MFY"
    },
    {
      id: "5051",
      district_id: "122",
      name: "Mexrobod MFY"
    },
    {
      id: "5052",
      district_id: "122",
      name: "Madadkor MFY"
    },
    {
      id: "5053",
      district_id: "122",
      name: "Madaniyat MFY"
    },
    {
      id: "5054",
      district_id: "122",
      name: "Maroqand MFY"
    },
    {
      id: "5055",
      district_id: "122",
      name: "Marxabo MFY"
    },
    {
      id: "5056",
      district_id: "122",
      name: "Mash`al MFY"
    },
    {
      id: "5057",
      district_id: "122",
      name: "Matonat MFY"
    },
    {
      id: "5058",
      district_id: "122",
      name: "Maqsud Shayxzoda MFY"
    },
    {
      id: "5059",
      district_id: "122",
      name: "Maysazor MFY"
    },
    {
      id: "5060",
      district_id: "122",
      name: "Ming tut MFY"
    },
    {
      id: "5061",
      district_id: "122",
      name: "Mir Said Baraka MFY"
    },
    {
      id: "5062",
      district_id: "122",
      name: "Mirzo Ulugbek MFY"
    },
    {
      id: "5063",
      district_id: "122",
      name: "Motrid MFY"
    },
    {
      id: "5064",
      district_id: "122",
      name: "Muborak MFY"
    },
    {
      id: "5065",
      district_id: "122",
      name: "Mulyon MFY"
    },
    {
      id: "5066",
      district_id: "122",
      name: "Mulyon-2 MFY"
    },
    {
      id: "5067",
      district_id: "122",
      name: "Mustakillik MFY"
    },
    {
      id: "5068",
      district_id: "122",
      name: "Namozgoh MFY"
    },
    {
      id: "5069",
      district_id: "122",
      name: "Navbaxor MFY"
    },
    {
      id: "5070",
      district_id: "122",
      name: "Navbogchiyon MFY"
    },
    {
      id: "5071",
      district_id: "122",
      name: "Navro`z MFY"
    },
    {
      id: "5072",
      district_id: "122",
      name: "Navro`z-2 MFY"
    },
    {
      id: "5073",
      district_id: "122",
      name: "Nayman MFY"
    },
    {
      id: "5074",
      district_id: "122",
      name: "Nodirabegim MFY"
    },
    {
      id: "5075",
      district_id: "122",
      name: "Nurafshon MFY"
    },
    {
      id: "5076",
      district_id: "122",
      name: "Nurli kelajak MFY"
    },
    {
      id: "5077",
      district_id: "122",
      name: "Nurli yul MFY"
    },
    {
      id: "5078",
      district_id: "122",
      name: "Nurobod MFY"
    },
    {
      id: "5079",
      district_id: "122",
      name: "Obi Rahmat MFY"
    },
    {
      id: "5080",
      district_id: "122",
      name: "Obod MFY"
    },
    {
      id: "5081",
      district_id: "122",
      name: "Oksaroy MFY"
    },
    {
      id: "5082",
      district_id: "122",
      name: "Oltin Asr MFY"
    },
    {
      id: "5083",
      district_id: "122",
      name: "Orzu MFY"
    },
    {
      id: "5084",
      district_id: "122",
      name: "Panjob MFY"
    },
    {
      id: "5085",
      district_id: "122",
      name: "Puli Mirzo MFY"
    },
    {
      id: "5086",
      district_id: "122",
      name: "Qircha MFY"
    },
    {
      id: "5087",
      district_id: "122",
      name: "Qumzor MFY"
    },
    {
      id: "5088",
      district_id: "122",
      name: "Raim Shokirbekov MFY"
    },
    {
      id: "5089",
      district_id: "122",
      name: "Raxmatobod MFY"
    },
    {
      id: "5090",
      district_id: "122",
      name: "Rohat MFY"
    },
    {
      id: "5091",
      district_id: "122",
      name: "Semurg` MFY"
    },
    {
      id: "5092",
      district_id: "122",
      name: "Sevali MFY"
    },
    {
      id: "5093",
      district_id: "122",
      name: "Sa`di Sheroziy MFY"
    },
    {
      id: "5094",
      district_id: "122",
      name: "Sadaf MFY"
    },
    {
      id: "5095",
      district_id: "122",
      name: "Sadriddin Ayniy MFY"
    },
    {
      id: "5096",
      district_id: "122",
      name: "Safedi MFY"
    },
    {
      id: "5097",
      district_id: "122",
      name: "Said mahalla MFY"
    },
    {
      id: "5098",
      district_id: "122",
      name: "Sarbadorlar MFY"
    },
    {
      id: "5099",
      district_id: "122",
      name: "Sarbon MFY"
    },
    {
      id: "5100",
      district_id: "122",
      name: "Sattepo MFY"
    },
    {
      id: "5101",
      district_id: "122",
      name: "Saxovat MFY"
    },
    {
      id: "5102",
      district_id: "122",
      name: "Sharq Yulduzi MFY"
    },
    {
      id: "5103",
      district_id: "122",
      name: "Sharq MFY"
    },
    {
      id: "5104",
      district_id: "122",
      name: "Shaxriobod MFY"
    },
    {
      id: "5105",
      district_id: "122",
      name: "Shirin MFY"
    },
    {
      id: "5106",
      district_id: "122",
      name: "Shodlik MFY"
    },
    {
      id: "5107",
      district_id: "122",
      name: "Shoyiboflar MFY"
    },
    {
      id: "5108",
      district_id: "122",
      name: "Shukrona MFY"
    },
    {
      id: "5109",
      district_id: "122",
      name: "Shuxrat MFY"
    },
    {
      id: "5110",
      district_id: "122",
      name: "Siyobcha MFY"
    },
    {
      id: "5111",
      district_id: "122",
      name: "So`lim shfy"
    },
    {
      id: "5112",
      district_id: "122",
      name: "Sufi Roziq MFY"
    },
    {
      id: "5113",
      district_id: "122",
      name: "Sugdiyona MFY"
    },
    {
      id: "5114",
      district_id: "122",
      name: "Suzangaron MFY"
    },
    {
      id: "5115",
      district_id: "122",
      name: "Temiryulchilar MFY"
    },
    {
      id: "5116",
      district_id: "122",
      name: "Terakzor MFY"
    },
    {
      id: "5117",
      district_id: "122",
      name: "Tadbirkorlar MFY"
    },
    {
      id: "5118",
      district_id: "122",
      name: "Tazar MFY"
    },
    {
      id: "5119",
      district_id: "122",
      name: "Tinchlik MFY"
    },
    {
      id: "5120",
      district_id: "122",
      name: "Tojmahal MFY"
    },
    {
      id: "5121",
      district_id: "122",
      name: "Tokzor MFY"
    },
    {
      id: "5122",
      district_id: "122",
      name: "Tong MFY"
    },
    {
      id: "5123",
      district_id: "122",
      name: "Toshkandiy MFY"
    },
    {
      id: "5124",
      district_id: "122",
      name: "Tupxona MFY"
    },
    {
      id: "5125",
      district_id: "122",
      name: "Turon MFY"
    },
    {
      id: "5126",
      district_id: "122",
      name: "Tutzor MFY"
    },
    {
      id: "5127",
      district_id: "122",
      name: "Urguti MFY"
    },
    {
      id: "5128",
      district_id: "122",
      name: "Urikzor MFY"
    },
    {
      id: "5129",
      district_id: "122",
      name: "Urta Xuja Soat MFY"
    },
    {
      id: "5130",
      district_id: "122",
      name: "Uvaysiy MFY"
    },
    {
      id: "5131",
      district_id: "122",
      name: "Vatanparvar MFY"
    },
    {
      id: "5132",
      district_id: "122",
      name: "Xadicha Sulaymonova MFY"
    },
    {
      id: "5133",
      district_id: "122",
      name: "Xalifa Ibrohim MFY"
    },
    {
      id: "5134",
      district_id: "122",
      name: "Xalkobod MFY"
    },
    {
      id: "5135",
      district_id: "122",
      name: "Xamid Olimjon MFY"
    },
    {
      id: "5136",
      district_id: "122",
      name: "Xayotobod MFY"
    },
    {
      id: "5137",
      district_id: "122",
      name: "Xazora MFY"
    },
    {
      id: "5138",
      district_id: "122",
      name: "Hilol MFY"
    },
    {
      id: "5139",
      district_id: "122",
      name: "Hofiz Sheroziy MFY"
    },
    {
      id: "5140",
      district_id: "122",
      name: "Xo`ja Abdu Darun MFY"
    },
    {
      id: "5141",
      district_id: "122",
      name: "Xo`ja Axrori Vali MFY"
    },
    {
      id: "5142",
      district_id: "122",
      name: "Xo`ja Chorrux MFY"
    },
    {
      id: "5143",
      district_id: "122",
      name: "Xo`ja gunjoyish MFY"
    },
    {
      id: "5144",
      district_id: "122",
      name: "Xo`ja gunjoyish-2 MFY"
    },
    {
      id: "5145",
      district_id: "122",
      name: "Xo`ja Qishloq MFY"
    },
    {
      id: "5146",
      district_id: "122",
      name: "Xo`ja Soat MFY"
    },
    {
      id: "5147",
      district_id: "122",
      name: "Xo`ja Yusuf MFY"
    },
    {
      id: "5148",
      district_id: "122",
      name: "Xo`jandiy MFY"
    },
    {
      id: "5149",
      district_id: "122",
      name: "Yangi Qo`rg`on MFY"
    },
    {
      id: "5150",
      district_id: "122",
      name: "Yangi obod MFY"
    },
    {
      id: "5151",
      district_id: "122",
      name: "Yangi Hayot MFY"
    },
    {
      id: "5152",
      district_id: "122",
      name: "Yangi Xayrabod MFY"
    },
    {
      id: "5153",
      district_id: "122",
      name: "Yominiy MFY"
    },
    {
      id: "5154",
      district_id: "122",
      name: "Yoshlar MFY"
    },
    {
      id: "5155",
      district_id: "122",
      name: "Yoshlik MFY"
    },
    {
      id: "5156",
      district_id: "122",
      name: "Yuqori Xo`ja Soat MFY"
    },
    {
      id: "5157",
      district_id: "122",
      name: "Yulduz MFY"
    },
    {
      id: "5158",
      district_id: "122",
      name: "Zarafshon MFY"
    },
    {
      id: "5159",
      district_id: "122",
      name: "Zarduzlar MFY"
    },
    {
      id: "5160",
      district_id: "122",
      name: "Zargartepo MFY"
    },
    {
      id: "5161",
      district_id: "122",
      name: "Ziyokorlar MFY"
    },
    {
      id: "5162",
      district_id: "122",
      name: "Ziyolilar MFY"
    },
    {
      id: "5163",
      district_id: "122",
      name: "Zominiy MFY"
    },
    {
      id: "5164",
      district_id: "122",
      name: "Zulfiya MFY"
    },
    {
      id: "5165",
      district_id: "123",
      name: "Adas MFY"
    },
    {
      id: "5166",
      district_id: "123",
      name: "Adas QFY"
    },
    {
      id: "5167",
      district_id: "123",
      name: "Bachki MFY"
    },
    {
      id: "5168",
      district_id: "123",
      name: "Baxshitepa MFY"
    },
    {
      id: "5169",
      district_id: "123",
      name: "Bog`izog`on QFY"
    },
    {
      id: "5170",
      district_id: "123",
      name: "Bogizogon MFY"
    },
    {
      id: "5171",
      district_id: "123",
      name: "Butboy MFY"
    },
    {
      id: "5172",
      district_id: "123",
      name: "Chorboktepa MFY"
    },
    {
      id: "5173",
      district_id: "123",
      name: "Davlatobod MFY"
    },
    {
      id: "5174",
      district_id: "123",
      name: "Do`stlik MFY"
    },
    {
      id: "5175",
      district_id: "123",
      name: "Eskijuma MFY"
    },
    {
      id: "5176",
      district_id: "123",
      name: "Fayziobod MFY"
    },
    {
      id: "5177",
      district_id: "123",
      name: "Gadoykushchi MFY"
    },
    {
      id: "5178",
      district_id: "123",
      name: "Galabotir MFY"
    },
    {
      id: "5179",
      district_id: "123",
      name: "Gulba MFY"
    },
    {
      id: "5180",
      district_id: "123",
      name: "Gulba QFY"
    },
    {
      id: "5181",
      district_id: "123",
      name: "Jalolobod MFY"
    },
    {
      id: "5182",
      district_id: "123",
      name: "Jumabozor MFY"
    },
    {
      id: "5183",
      district_id: "123",
      name: "Jumabozor QFY"
    },
    {
      id: "5184",
      district_id: "123",
      name: "Katta Taylok MFY"
    },
    {
      id: "5185",
      district_id: "123",
      name: "Kovchinon MFY"
    },
    {
      id: "5186",
      district_id: "123",
      name: "Kurgoncha MFY"
    },
    {
      id: "5187",
      district_id: "123",
      name: "Madaniyat MFY"
    },
    {
      id: "5188",
      district_id: "123",
      name: "Madaniyat QFY"
    },
    {
      id: "5189",
      district_id: "123",
      name: "Mulkiayoz MFY"
    },
    {
      id: "5190",
      district_id: "123",
      name: "Nakkashon MFY"
    },
    {
      id: "5191",
      district_id: "123",
      name: "Navzandak MFY"
    },
    {
      id: "5192",
      district_id: "123",
      name: "Nayman-1 MFY"
    },
    {
      id: "5193",
      district_id: "123",
      name: "Nayman-2 MFY"
    },
    {
      id: "5194",
      district_id: "123",
      name: "Payshanbasiyob MFY"
    },
    {
      id: "5195",
      district_id: "123",
      name: "Qo`rg`oncha QFY"
    },
    {
      id: "5196",
      district_id: "123",
      name: "Ravot MFY"
    },
    {
      id: "5197",
      district_id: "123",
      name: "Saribozor MFY"
    },
    {
      id: "5198",
      district_id: "123",
      name: "Sariosiyo MFY"
    },
    {
      id: "5199",
      district_id: "123",
      name: "Shopulot MFY"
    },
    {
      id: "5200",
      district_id: "123",
      name: "Sochak-1 MFY"
    },
    {
      id: "5201",
      district_id: "123",
      name: "Sochak-2 MFY"
    },
    {
      id: "5202",
      district_id: "123",
      name: "Sochak-3 MFY"
    },
    {
      id: "5203",
      district_id: "123",
      name: "Sochakibolo QFY"
    },
    {
      id: "5204",
      district_id: "123",
      name: "Sochakipoyon-1 MFY"
    },
    {
      id: "5205",
      district_id: "123",
      name: "Sochakipoyon-2 MFY"
    },
    {
      id: "5206",
      district_id: "123",
      name: "Tepaqishloq MFY"
    },
    {
      id: "5207",
      district_id: "123",
      name: "Tepaqishloq QFY"
    },
    {
      id: "5208",
      district_id: "123",
      name: "Talliota MFY"
    },
    {
      id: "5209",
      district_id: "123",
      name: "Tayloq QFY"
    },
    {
      id: "5210",
      district_id: "123",
      name: "Ukrach MFY"
    },
    {
      id: "5211",
      district_id: "123",
      name: "Uray-Elipok MFY"
    },
    {
      id: "5212",
      district_id: "123",
      name: "O`rtaqishloq MFY"
    },
    {
      id: "5213",
      district_id: "123",
      name: "O`zbekiston MFY"
    },
    {
      id: "5214",
      district_id: "123",
      name: "Uzunqishloq MFY"
    },
    {
      id: "5215",
      district_id: "123",
      name: "Vorsin MFY"
    },
    {
      id: "5216",
      district_id: "123",
      name: "Xo`jaqishloq MFY"
    },
    {
      id: "5217",
      district_id: "123",
      name: "Xo`jayuz MFY"
    },
    {
      id: "5218",
      district_id: "123",
      name: "Yalang`och MFY"
    },
    {
      id: "5219",
      district_id: "123",
      name: "Yangi Tayloq MFY"
    },
    {
      id: "5220",
      district_id: "123",
      name: "Yangi Hayot MFY"
    },
    {
      id: "5221",
      district_id: "123",
      name: "Yastepa MFY"
    },
    {
      id: "5222",
      district_id: "123",
      name: "Yuqori Tayloq MFY"
    },
    {
      id: "5223",
      district_id: "123",
      name: "Zarafshon MFY"
    },
    {
      id: "5224",
      district_id: "124",
      name: "Etti uylik MFY"
    },
    {
      id: "5225",
      district_id: "124",
      name: "A`loxotin MFY"
    },
    {
      id: "5226",
      district_id: "124",
      name: "Algar MFY"
    },
    {
      id: "5227",
      district_id: "124",
      name: "Andak MFY"
    },
    {
      id: "5228",
      district_id: "124",
      name: "Bekravot MFY"
    },
    {
      id: "5229",
      district_id: "124",
      name: "Beshbuloq QFY"
    },
    {
      id: "5230",
      district_id: "124",
      name: "Beshkal MFY"
    },
    {
      id: "5231",
      district_id: "124",
      name: "Beshkapa -1 MFY"
    },
    {
      id: "5232",
      district_id: "124",
      name: "Beshkapa MFY"
    },
    {
      id: "5233",
      district_id: "124",
      name: "Beshkapa-2 MFY"
    },
    {
      id: "5234",
      district_id: "124",
      name: "Beshyog`och MFY"
    },
    {
      id: "5235",
      district_id: "124",
      name: "Baxrin MFY"
    },
    {
      id: "5236",
      district_id: "124",
      name: "Baxrin QFY"
    },
    {
      id: "5237",
      district_id: "124",
      name: "Bog`ishamol MFY"
    },
    {
      id: "5238",
      district_id: "124",
      name: "Boybul MFY"
    },
    {
      id: "5239",
      district_id: "124",
      name: "Chagizmon MFY"
    },
    {
      id: "5240",
      district_id: "124",
      name: "Chor-chinor MFY"
    },
    {
      id: "5241",
      district_id: "124",
      name: "Chorraha MFY"
    },
    {
      id: "5242",
      district_id: "124",
      name: "Choshtepa MFY"
    },
    {
      id: "5243",
      district_id: "124",
      name: "Chumchuqli MFY"
    },
    {
      id: "5244",
      district_id: "124",
      name: "Do`stlik MFY"
    },
    {
      id: "5245",
      district_id: "124",
      name: "Do`stlik MFY"
    },
    {
      id: "5246",
      district_id: "124",
      name: "G`o`s QFY"
    },
    {
      id: "5247",
      district_id: "124",
      name: "Gijduvon MFY"
    },
    {
      id: "5248",
      district_id: "124",
      name: "Gisht machti MFY"
    },
    {
      id: "5249",
      district_id: "124",
      name: "Goyibota MFY"
    },
    {
      id: "5250",
      district_id: "124",
      name: "Go`slik MFY"
    },
    {
      id: "5251",
      district_id: "124",
      name: "Guliston MFY"
    },
    {
      id: "5252",
      district_id: "124",
      name: "Guliston MFY"
    },
    {
      id: "5253",
      district_id: "124",
      name: "Gulobod MFY"
    },
    {
      id: "5254",
      district_id: "124",
      name: "Guzni MFY"
    },
    {
      id: "5255",
      district_id: "124",
      name: "Hamza QFY"
    },
    {
      id: "5256",
      district_id: "124",
      name: "Ilonli MFY"
    },
    {
      id: "5257",
      district_id: "124",
      name: "Ilonli QFY"
    },
    {
      id: "5258",
      district_id: "124",
      name: "Ipakli MFY"
    },
    {
      id: "5259",
      district_id: "124",
      name: "Ishchan MFY"
    },
    {
      id: "5260",
      district_id: "124",
      name: "Ispanza QFY"
    },
    {
      id: "5261",
      district_id: "124",
      name: "Jarkishlok MFY"
    },
    {
      id: "5262",
      district_id: "124",
      name: "Jartepa MFY"
    },
    {
      id: "5263",
      district_id: "124",
      name: "Jartepa QFY"
    },
    {
      id: "5264",
      district_id: "124",
      name: "Jayratepa MFY"
    },
    {
      id: "5265",
      district_id: "124",
      name: "Jozmon MFY"
    },
    {
      id: "5266",
      district_id: "124",
      name: "Juraptepa MFY"
    },
    {
      id: "5267",
      district_id: "124",
      name: "K.Torinjak MFY"
    },
    {
      id: "5268",
      district_id: "124",
      name: "K.Torinjak MFY"
    },
    {
      id: "5269",
      district_id: "124",
      name: "Kenagas MFY"
    },
    {
      id: "5270",
      district_id: "124",
      name: "Kamangaron MFY"
    },
    {
      id: "5271",
      district_id: "124",
      name: "Kamangaroncha MFY"
    },
    {
      id: "5272",
      district_id: "124",
      name: "Kamardon MFY"
    },
    {
      id: "5273",
      district_id: "124",
      name: "Kayrokli MFY"
    },
    {
      id: "5274",
      district_id: "124",
      name: "Kayrokli MFY"
    },
    {
      id: "5275",
      district_id: "124",
      name: "Kingir MFY"
    },
    {
      id: "5276",
      district_id: "124",
      name: "Kizilbosh MFY"
    },
    {
      id: "5277",
      district_id: "124",
      name: "Koldivoyjar MFY"
    },
    {
      id: "5278",
      district_id: "124",
      name: "Koratepa MFY"
    },
    {
      id: "5279",
      district_id: "124",
      name: "Kulkishlok MFY"
    },
    {
      id: "5280",
      district_id: "124",
      name: "Kulollik MFY"
    },
    {
      id: "5281",
      district_id: "124",
      name: "Kutarma MFY"
    },
    {
      id: "5282",
      district_id: "124",
      name: "Kuyi algar MFY"
    },
    {
      id: "5283",
      district_id: "124",
      name: "Kuyi guzar MFY"
    },
    {
      id: "5284",
      district_id: "124",
      name: "Kuyi Tegana MFY"
    },
    {
      id: "5285",
      district_id: "124",
      name: "Quyiqishloq MFY"
    },
    {
      id: "5286",
      district_id: "124",
      name: "Kuzichi MFY"
    },
    {
      id: "5287",
      district_id: "124",
      name: "Mergancha MFY"
    },
    {
      id: "5288",
      district_id: "124",
      name: "Mangitobod MFY"
    },
    {
      id: "5289",
      district_id: "124",
      name: "Mazortepa MFY"
    },
    {
      id: "5290",
      district_id: "124",
      name: "Mirzaboglon MFY"
    },
    {
      id: "5291",
      district_id: "124",
      name: "Mirzakishlok MFY"
    },
    {
      id: "5292",
      district_id: "124",
      name: "Mirzaqishloq QFY"
    },
    {
      id: "5293",
      district_id: "124",
      name: "Mugol MFY"
    },
    {
      id: "5294",
      district_id: "124",
      name: "Muminobod-1 MFY"
    },
    {
      id: "5295",
      district_id: "124",
      name: "Muminobod-2 MFY"
    },
    {
      id: "5296",
      district_id: "124",
      name: "Murotkishlok MFY"
    },
    {
      id: "5297",
      district_id: "124",
      name: "Navbog MFY"
    },
    {
      id: "5298",
      district_id: "124",
      name: "Nisbot MFY"
    },
    {
      id: "5299",
      district_id: "124",
      name: "Okmachit MFY"
    },
    {
      id: "5300",
      district_id: "124",
      name: "Omonqo`tan MFY"
    },
    {
      id: "5301",
      district_id: "124",
      name: "O`ramas QFY"
    },
    {
      id: "5302",
      district_id: "124",
      name: "P. Kalangar MFY"
    },
    {
      id: "5303",
      district_id: "124",
      name: "Paxmob MFY"
    },
    {
      id: "5304",
      district_id: "124",
      name: "Pochvon MFY"
    },
    {
      id: "5305",
      district_id: "124",
      name: "Pochvon QFY"
    },
    {
      id: "5306",
      district_id: "124",
      name: "Qorotepa QFY"
    },
    {
      id: "5307",
      district_id: "124",
      name: "Raxmatobod MFY"
    },
    {
      id: "5308",
      district_id: "124",
      name: "Sanchikul MFY"
    },
    {
      id: "5309",
      district_id: "124",
      name: "Sanchikul MFY"
    },
    {
      id: "5310",
      district_id: "124",
      name: "Sariqtepa MFY"
    },
    {
      id: "5311",
      district_id: "124",
      name: "Satang MFY"
    },
    {
      id: "5312",
      district_id: "124",
      name: "Savgon MFY"
    },
    {
      id: "5313",
      district_id: "124",
      name: "Shahar mfylari"
    },
    {
      id: "5314",
      district_id: "124",
      name: "Soy guzar MFY"
    },
    {
      id: "5315",
      district_id: "124",
      name: "Soygus MFY"
    },
    {
      id: "5316",
      district_id: "124",
      name: "So`fiyon MFY"
    },
    {
      id: "5317",
      district_id: "124",
      name: "Sufi MFY"
    },
    {
      id: "5318",
      district_id: "124",
      name: "Terak MFY"
    },
    {
      id: "5319",
      district_id: "124",
      name: "Tersak MFY"
    },
    {
      id: "5320",
      district_id: "124",
      name: "Tarokli MFY"
    },
    {
      id: "5321",
      district_id: "124",
      name: "Tosharik MFY"
    },
    {
      id: "5322",
      district_id: "124",
      name: "Turtkul MFY"
    },
    {
      id: "5323",
      district_id: "124",
      name: "Ukrach MFY"
    },
    {
      id: "5324",
      district_id: "124",
      name: "Uramas MFY"
    },
    {
      id: "5325",
      district_id: "124",
      name: "Urokboyjar MFY"
    },
    {
      id: "5326",
      district_id: "124",
      name: "Urta guzar MFY"
    },
    {
      id: "5327",
      district_id: "124",
      name: "Uzun MFY"
    },
    {
      id: "5328",
      district_id: "124",
      name: "Vagashti MFY"
    },
    {
      id: "5329",
      district_id: "124",
      name: "Vatak MFY"
    },
    {
      id: "5330",
      district_id: "124",
      name: "Vatkan-Kuzibek MFY"
    },
    {
      id: "5331",
      district_id: "124",
      name: "Xuja guzar MFY"
    },
    {
      id: "5332",
      district_id: "124",
      name: "Xujabaland MFY"
    },
    {
      id: "5333",
      district_id: "124",
      name: "Xujayduk MFY"
    },
    {
      id: "5334",
      district_id: "124",
      name: "Yalpoqtepa MFY"
    },
    {
      id: "5335",
      district_id: "124",
      name: "Yangiariq QFY"
    },
    {
      id: "5336",
      district_id: "124",
      name: "Yu. Qalangar MFY"
    },
    {
      id: "5337",
      district_id: "124",
      name: "Yuqori Tegana MFY"
    },
    {
      id: "5338",
      district_id: "124",
      name: "Zinak MFY"
    },
    {
      id: "5339",
      district_id: "125",
      name: "A.Navoiy QFY"
    },
    {
      id: "5340",
      district_id: "125",
      name: "Angor MFY"
    },
    {
      id: "5341",
      district_id: "125",
      name: "Angor QFY"
    },
    {
      id: "5342",
      district_id: "125",
      name: "Baxor MFY"
    },
    {
      id: "5343",
      district_id: "125",
      name: "Chinobod MFY"
    },
    {
      id: "5344",
      district_id: "125",
      name: "Dehqonbirlashuv MFY"
    },
    {
      id: "5345",
      district_id: "125",
      name: "Dehqonittifok MFY"
    },
    {
      id: "5346",
      district_id: "125",
      name: "Do`stlik MFY"
    },
    {
      id: "5347",
      district_id: "125",
      name: "Do`stlik QFY"
    },
    {
      id: "5348",
      district_id: "125",
      name: "Gilambob MFY"
    },
    {
      id: "5349",
      district_id: "125",
      name: "Gilambob MFY"
    },
    {
      id: "5350",
      district_id: "125",
      name: "Guliston MFY"
    },
    {
      id: "5351",
      district_id: "125",
      name: "Gulzor MFY"
    },
    {
      id: "5352",
      district_id: "125",
      name: "Ilg`or MFY"
    },
    {
      id: "5353",
      district_id: "125",
      name: "Istiqlol QFY"
    },
    {
      id: "5354",
      district_id: "125",
      name: "Karvon MFY"
    },
    {
      id: "5355",
      district_id: "125",
      name: "Kattakum MFY"
    },
    {
      id: "5356",
      district_id: "125",
      name: "Kayran MFY"
    },
    {
      id: "5357",
      district_id: "125",
      name: "Kayran QFY"
    },
    {
      id: "5358",
      district_id: "125",
      name: "Qo`shtegirmon MFY"
    },
    {
      id: "5359",
      district_id: "125",
      name: "Madaniyat MFY"
    },
    {
      id: "5360",
      district_id: "125",
      name: "Markaz MFY"
    },
    {
      id: "5361",
      district_id: "125",
      name: "Navoiy MFY"
    },
    {
      id: "5362",
      district_id: "125",
      name: "Navro`z MFY"
    },
    {
      id: "5363",
      district_id: "125",
      name: "Navshaxar MFY"
    },
    {
      id: "5364",
      district_id: "125",
      name: "Ozod Buxoro MFY"
    },
    {
      id: "5365",
      district_id: "125",
      name: "O`zbekiston MFY"
    },
    {
      id: "5366",
      district_id: "125",
      name: "Qorabog` MFY"
    },
    {
      id: "5367",
      district_id: "125",
      name: "Qorasuv MFY"
    },
    {
      id: "5368",
      district_id: "125",
      name: "Tallashkon MFY"
    },
    {
      id: "5369",
      district_id: "125",
      name: "Tallimaron MFY"
    },
    {
      id: "5370",
      district_id: "125",
      name: "Tallimaron QFY"
    },
    {
      id: "5371",
      district_id: "125",
      name: "To`lkin MFY"
    },
    {
      id: "5372",
      district_id: "125",
      name: "Ulug`bek MFY"
    },
    {
      id: "5373",
      district_id: "125",
      name: "Xomkon MFY"
    },
    {
      id: "5374",
      district_id: "125",
      name: "Xujanko MFY"
    },
    {
      id: "5375",
      district_id: "125",
      name: "Y. Oxunboboev MFY"
    },
    {
      id: "5376",
      district_id: "125",
      name: "Yangi Turmush MFY"
    },
    {
      id: "5377",
      district_id: "125",
      name: "Yangiobod MFY"
    },
    {
      id: "5378",
      district_id: "125",
      name: "Yangiobod QFY"
    },
    {
      id: "5379",
      district_id: "125",
      name: "Yuqori Tallashqon MFY"
    },
    {
      id: "5380",
      district_id: "125",
      name: "Yuqori Xo`jakiya MFY"
    },
    {
      id: "5381",
      district_id: "125",
      name: "Zang QFY"
    },
    {
      id: "5382",
      district_id: "125",
      name: "Zartepa MFY"
    },
    {
      id: "5383",
      district_id: "126",
      name: "Avlod QFY"
    },
    {
      id: "5384",
      district_id: "126",
      name: "Alachapon (Jamoatchi) MFY"
    },
    {
      id: "5385",
      district_id: "126",
      name: "Ariq usti MFY"
    },
    {
      id: "5386",
      district_id: "126",
      name: "Avlod MFY"
    },
    {
      id: "5387",
      district_id: "126",
      name: "Bibishirin MFY"
    },
    {
      id: "5388",
      district_id: "126",
      name: "Bog`ibolo MFY"
    },
    {
      id: "5389",
      district_id: "126",
      name: "Boysun QFY"
    },
    {
      id: "5390",
      district_id: "126",
      name: "Chilonzor MFY"
    },
    {
      id: "5391",
      district_id: "126",
      name: "Chorchinor MFY"
    },
    {
      id: "5392",
      district_id: "126",
      name: "Dexibolo (Jamoatchi) MFY"
    },
    {
      id: "5393",
      district_id: "126",
      name: "Darband MFY"
    },
    {
      id: "5394",
      district_id: "126",
      name: "Darband QFY"
    },
    {
      id: "5395",
      district_id: "126",
      name: "Dashtig`oz MFY"
    },
    {
      id: "5396",
      district_id: "126",
      name: "Duoba MFY"
    },
    {
      id: "5397",
      district_id: "126",
      name: "Gaza MFY"
    },
    {
      id: "5398",
      district_id: "126",
      name: "Inkabot MFY"
    },
    {
      id: "5399",
      district_id: "126",
      name: "Kofrun MFY"
    },
    {
      id: "5400",
      district_id: "126",
      name: "Kuchkak MFY"
    },
    {
      id: "5401",
      district_id: "126",
      name: "Machay QFY"
    },
    {
      id: "5402",
      district_id: "126",
      name: "Munchok MFY"
    },
    {
      id: "5403",
      district_id: "126",
      name: "Mustakillik MFY"
    },
    {
      id: "5404",
      district_id: "126",
      name: "N`a`zamov MFY"
    },
    {
      id: "5405",
      district_id: "126",
      name: "Obi MFY"
    },
    {
      id: "5406",
      district_id: "126",
      name: "O`rta Machay MFY"
    },
    {
      id: "5407",
      district_id: "126",
      name: "Pasurxi MFY"
    },
    {
      id: "5408",
      district_id: "126",
      name: "Poygaboshi MFY"
    },
    {
      id: "5409",
      district_id: "126",
      name: "Pulhokim MFY"
    },
    {
      id: "5410",
      district_id: "126",
      name: "Qizilnavr (Jamoatchi) MFY"
    },
    {
      id: "5411",
      district_id: "126",
      name: "Qorabo`yin MFY"
    },
    {
      id: "5412",
      district_id: "126",
      name: "Qo`rg`oncha MFY"
    },
    {
      id: "5413",
      district_id: "126",
      name: "Qo`rgoncha QFY"
    },
    {
      id: "5414",
      district_id: "126",
      name: "Quduqsoy MFY"
    },
    {
      id: "5415",
      district_id: "126",
      name: "Rabot MFY"
    },
    {
      id: "5416",
      district_id: "126",
      name: "Rabot QFY"
    },
    {
      id: "5417",
      district_id: "126",
      name: "Sangchil MFY"
    },
    {
      id: "5418",
      district_id: "126",
      name: "Sariosiyo MFY"
    },
    {
      id: "5419",
      district_id: "126",
      name: "Sayrob MFY"
    },
    {
      id: "5420",
      district_id: "126",
      name: "Sayrob QFY"
    },
    {
      id: "5421",
      district_id: "126",
      name: "Sho`rob (Jamoatchi)"
    },
    {
      id: "5422",
      district_id: "126",
      name: "Sho`rsoy MFY"
    },
    {
      id: "5423",
      district_id: "126",
      name: "Tangumush MFY"
    },
    {
      id: "5424",
      district_id: "126",
      name: "Tuda (Jamoatchi) MFY"
    },
    {
      id: "5425",
      district_id: "126",
      name: "Tuzbozor MFY"
    },
    {
      id: "5426",
      district_id: "126",
      name: "Xo`jabulg`on MFY"
    },
    {
      id: "5427",
      district_id: "126",
      name: "Yu.Qodirov MFY"
    },
    {
      id: "5428",
      district_id: "126",
      name: "Yuqori machay MFY"
    },
    {
      id: "5429",
      district_id: "127",
      name: "Bobotog` (Jamoatchi) MFY"
    },
    {
      id: "5430",
      district_id: "127",
      name: "Mingbuloq MFY"
    },
    {
      id: "5431",
      district_id: "127",
      name: "Sh.Norqobilov MFY"
    },
    {
      id: "5432",
      district_id: "127",
      name: "A.Ikromov MFY"
    },
    {
      id: "5433",
      district_id: "127",
      name: "A.Jomiy MFY"
    },
    {
      id: "5434",
      district_id: "127",
      name: "A.Shukurov MFY"
    },
    {
      id: "5435",
      district_id: "127",
      name: "A.Turdiev MFY"
    },
    {
      id: "5436",
      district_id: "127",
      name: "Abbos Malik MFY"
    },
    {
      id: "5437",
      district_id: "127",
      name: "Anbarsoy QFY"
    },
    {
      id: "5438",
      district_id: "127",
      name: "Anorbuloq (Jamoatchi) MFY"
    },
    {
      id: "5439",
      district_id: "127",
      name: "B.G`ulomov (sina 1) MFY"
    },
    {
      id: "5440",
      district_id: "127",
      name: "B.Yusupov MFY"
    },
    {
      id: "5441",
      district_id: "127",
      name: "Bandixon (Jamoatchi) MFY"
    },
    {
      id: "5442",
      district_id: "127",
      name: "Baynalminal MFY"
    },
    {
      id: "5443",
      district_id: "127",
      name: "Binokor QFY"
    },
    {
      id: "5444",
      district_id: "127",
      name: "Chagam (Jamoatchi) MFY"
    },
    {
      id: "5445",
      district_id: "127",
      name: "Chambil MFY"
    },
    {
      id: "5446",
      district_id: "127",
      name: "Chim MFY"
    },
    {
      id: "5447",
      district_id: "127",
      name: "Chorgul MFY"
    },
    {
      id: "5448",
      district_id: "127",
      name: "Chukurqishloq MFY"
    },
    {
      id: "5449",
      district_id: "127",
      name: "Chuntosh MFY"
    },
    {
      id: "5450",
      district_id: "127",
      name: "Denov QFY"
    },
    {
      id: "5451",
      district_id: "127",
      name: "Dashtichinor MFY"
    },
    {
      id: "5452",
      district_id: "127",
      name: "Davlatsoy MFY"
    },
    {
      id: "5453",
      district_id: "127",
      name: "Daxana QFY MFY"
    },
    {
      id: "5454",
      district_id: "127",
      name: "Daxana MFY"
    },
    {
      id: "5455",
      district_id: "127",
      name: "Dug`ob (Jamoatchi) MFY"
    },
    {
      id: "5456",
      district_id: "127",
      name: "Dunyotepa MFY"
    },
    {
      id: "5457",
      district_id: "127",
      name: "Do`stlik QFY"
    },
    {
      id: "5458",
      district_id: "127",
      name: "Do`stlik MFY"
    },
    {
      id: "5459",
      district_id: "127",
      name: "E.Mirzaxmedov MFY"
    },
    {
      id: "5460",
      district_id: "127",
      name: "Elobod MFY"
    },
    {
      id: "5461",
      district_id: "127",
      name: "Farg`ona QFY"
    },
    {
      id: "5462",
      district_id: "127",
      name: "Guliston MFY"
    },
    {
      id: "5463",
      district_id: "127",
      name: "Guliston MFY"
    },
    {
      id: "5464",
      district_id: "127",
      name: "Gulobod MFY"
    },
    {
      id: "5465",
      district_id: "127",
      name: "I.Ismoilov (sina 2) MFY"
    },
    {
      id: "5466",
      district_id: "127",
      name: "Ibn Sino MFY"
    },
    {
      id: "5467",
      district_id: "127",
      name: "Istikbol MFY"
    },
    {
      id: "5468",
      district_id: "127",
      name: "Jamatak MFY"
    },
    {
      id: "5469",
      district_id: "127",
      name: "Jart?pa MFY"
    },
    {
      id: "5470",
      district_id: "127",
      name: "Jiydabuloq (Jamoatchi) MFY"
    },
    {
      id: "5471",
      district_id: "127",
      name: "K.Karimov MFY"
    },
    {
      id: "5472",
      district_id: "127",
      name: "K.Sayfullaev (sina 3) MFY"
    },
    {
      id: "5473",
      district_id: "127",
      name: "K.Xandalov MFY"
    },
    {
      id: "5474",
      district_id: "127",
      name: "Kenagas QFY"
    },
    {
      id: "5475",
      district_id: "127",
      name: "Katta-Qarshi MFY"
    },
    {
      id: "5476",
      district_id: "127",
      name: "Qaytmas MFY"
    },
    {
      id: "5477",
      district_id: "127",
      name: "Kiyovsuv (Jamoatchi) MFY"
    },
    {
      id: "5478",
      district_id: "127",
      name: "Kiziljar MFY"
    },
    {
      id: "5479",
      district_id: "127",
      name: "Kiziljar QFY"
    },
    {
      id: "5480",
      district_id: "127",
      name: "Korabogtepa MFY"
    },
    {
      id: "5481",
      district_id: "127",
      name: "Korakuz MFY"
    },
    {
      id: "5482",
      district_id: "127",
      name: "Koralang MFY"
    },
    {
      id: "5483",
      district_id: "127",
      name: "Koraxon MFY"
    },
    {
      id: "5484",
      district_id: "127",
      name: "Kovunlisoy MFY"
    },
    {
      id: "5485",
      district_id: "127",
      name: "Kuchakli MFY"
    },
    {
      id: "5486",
      district_id: "127",
      name: "Kukabulok MFY"
    },
    {
      id: "5487",
      district_id: "127",
      name: "Lagmonota MFY"
    },
    {
      id: "5488",
      district_id: "127",
      name: "Lochin MFY"
    },
    {
      id: "5489",
      district_id: "127",
      name: "Lolazor MFY"
    },
    {
      id: "5490",
      district_id: "127",
      name: "Lupon MFY"
    },
    {
      id: "5491",
      district_id: "127",
      name: "M.Sh.Oybek MFY"
    },
    {
      id: "5492",
      district_id: "127",
      name: "Minora MFY"
    },
    {
      id: "5493",
      district_id: "127",
      name: "Muqumiy MFY"
    },
    {
      id: "5494",
      district_id: "127",
      name: "Namozgox MFY"
    },
    {
      id: "5495",
      district_id: "127",
      name: "Navbaxor MFY"
    },
    {
      id: "5496",
      district_id: "127",
      name: "Navro`z MFY"
    },
    {
      id: "5497",
      district_id: "127",
      name: "Obodon MFY"
    },
    {
      id: "5498",
      district_id: "127",
      name: "Olovuddin MFY"
    },
    {
      id: "5499",
      district_id: "127",
      name: "Ostona MFY"
    },
    {
      id: "5500",
      district_id: "127",
      name: "Oxlar MFY"
    },
    {
      id: "5501",
      district_id: "127",
      name: "Oxtom MFY"
    },
    {
      id: "5502",
      district_id: "127",
      name: "Ozod MFY"
    },
    {
      id: "5503",
      district_id: "127",
      name: "O`rtaqishloq MFY"
    },
    {
      id: "5504",
      district_id: "127",
      name: "O`zgarish MFY"
    },
    {
      id: "5505",
      district_id: "127",
      name: "Pastkiziljar MFY"
    },
    {
      id: "5506",
      district_id: "127",
      name: "Paxtakurash MFY"
    },
    {
      id: "5507",
      district_id: "127",
      name: "Pistamozor QFY"
    },
    {
      id: "5508",
      district_id: "127",
      name: "Pojir (Jamoatchi) MFY"
    },
    {
      id: "5509",
      district_id: "127",
      name: "Qizilgul MFY"
    },
    {
      id: "5510",
      district_id: "127",
      name: "S.Bekmurodov MFY"
    },
    {
      id: "5511",
      district_id: "127",
      name: "S.Raximov MFY"
    },
    {
      id: "5512",
      district_id: "127",
      name: "Sebzor MFY"
    },
    {
      id: "5513",
      district_id: "127",
      name: "Sarixalka (Jamoatchi) MFY"
    },
    {
      id: "5514",
      district_id: "127",
      name: "Sh.Rashidov MFY"
    },
    {
      id: "5515",
      district_id: "127",
      name: "Shamoli MFY"
    },
    {
      id: "5516",
      district_id: "127",
      name: "Shaxrinav MFY"
    },
    {
      id: "5517",
      district_id: "127",
      name: "Sina QFY"
    },
    {
      id: "5518",
      district_id: "127",
      name: "Surnaytepa MFY"
    },
    {
      id: "5519",
      district_id: "127",
      name: "T.Tilavov (Jamoatchi) MFY"
    },
    {
      id: "5520",
      district_id: "127",
      name: "Terak (Jamoatchi) MFY"
    },
    {
      id: "5521",
      district_id: "127",
      name: "Tasmasoy MFY"
    },
    {
      id: "5522",
      district_id: "127",
      name: "Tolqishloq MFY"
    },
    {
      id: "5523",
      district_id: "127",
      name: "Tortuvli QFY"
    },
    {
      id: "5524",
      district_id: "127",
      name: "U.Qoraev MFY"
    },
    {
      id: "5525",
      district_id: "127",
      name: "U.Nabiev MFY"
    },
    {
      id: "5526",
      district_id: "127",
      name: "O`rta qishloq MFY"
    },
    {
      id: "5527",
      district_id: "127",
      name: "Ushor MFY"
    },
    {
      id: "5528",
      district_id: "127",
      name: "O`zbekiston MFY"
    },
    {
      id: "5529",
      district_id: "127",
      name: "X.Maxmudov MFY"
    },
    {
      id: "5530",
      district_id: "127",
      name: "X.Murodov MFY"
    },
    {
      id: "5531",
      district_id: "127",
      name: "X.Ostonaqulov MFY"
    },
    {
      id: "5532",
      district_id: "127",
      name: "X.X.Niyoziy MFY"
    },
    {
      id: "5533",
      district_id: "127",
      name: "Xayrabod QFY"
    },
    {
      id: "5534",
      district_id: "127",
      name: "Xazorbog` QFY"
    },
    {
      id: "5535",
      district_id: "127",
      name: "Xitoyan MFY"
    },
    {
      id: "5536",
      district_id: "127",
      name: "Xolchayon QFY"
    },
    {
      id: "5537",
      district_id: "127",
      name: "Xolchayon MFY"
    },
    {
      id: "5538",
      district_id: "127",
      name: "Xujakulsin (Jamoatchi) MFY"
    },
    {
      id: "5539",
      district_id: "127",
      name: "Xujaxalki MFY"
    },
    {
      id: "5540",
      district_id: "127",
      name: "Y.Oxunboboev MFY"
    },
    {
      id: "5541",
      district_id: "127",
      name: "Yangi hayot MFY"
    },
    {
      id: "5542",
      district_id: "127",
      name: "Yangi hazarbog` MFY"
    },
    {
      id: "5543",
      district_id: "127",
      name: "Yangibog` QFY"
    },
    {
      id: "5544",
      district_id: "127",
      name: "Yangiqishloq MFY"
    },
    {
      id: "5545",
      district_id: "127",
      name: "Yangikuch MFY"
    },
    {
      id: "5546",
      district_id: "127",
      name: "Yangiobod QFY"
    },
    {
      id: "5547",
      district_id: "127",
      name: "Yangiobod MFY"
    },
    {
      id: "5548",
      district_id: "127",
      name: "Yangiobod MFY"
    },
    {
      id: "5549",
      district_id: "127",
      name: "Yangiobod .1 MFY"
    },
    {
      id: "5550",
      district_id: "127",
      name: "Yangiobod .2 MFY"
    },
    {
      id: "5551",
      district_id: "127",
      name: "Yangizamon QFY"
    },
    {
      id: "5552",
      district_id: "127",
      name: "Yurchi QFY"
    },
    {
      id: "5553",
      district_id: "127",
      name: "Yurchi MFY"
    },
    {
      id: "5554",
      district_id: "127",
      name: "Z.M.Bobur MFY"
    },
    {
      id: "5555",
      district_id: "127",
      name: "Zaxartepa MFY"
    },
    {
      id: "5556",
      district_id: "128",
      name: "A.Navoiy MFY"
    },
    {
      id: "5557",
      district_id: "128",
      name: "A.Navoiy MFY"
    },
    {
      id: "5558",
      district_id: "128",
      name: "Avlod MFY"
    },
    {
      id: "5559",
      district_id: "128",
      name: "Beshbuloq MFY"
    },
    {
      id: "5560",
      district_id: "128",
      name: "Bobotog` MFY"
    },
    {
      id: "5561",
      district_id: "128",
      name: "Bobotog` MFY"
    },
    {
      id: "5562",
      district_id: "128",
      name: "Bobur MFY"
    },
    {
      id: "5563",
      district_id: "128",
      name: "Boymoqli MFY"
    },
    {
      id: "5564",
      district_id: "128",
      name: "Chorjo`y MFY"
    },
    {
      id: "5565",
      district_id: "128",
      name: "Chorjo`y QFY"
    },
    {
      id: "5566",
      district_id: "128",
      name: "Dehqonobod MFY"
    },
    {
      id: "5567",
      district_id: "128",
      name: "Dehqonobod QFY"
    },
    {
      id: "5568",
      district_id: "128",
      name: "Dam MFY"
    },
    {
      id: "5569",
      district_id: "128",
      name: "Do`stlik MFY"
    },
    {
      id: "5570",
      district_id: "128",
      name: "Eskiqishloq MFY"
    },
    {
      id: "5571",
      district_id: "128",
      name: "g`ur-g`ur MFY"
    },
    {
      id: "5572",
      district_id: "128",
      name: "Garang MFY"
    },
    {
      id: "5573",
      district_id: "128",
      name: "Guliston MFY"
    },
    {
      id: "5574",
      district_id: "128",
      name: "Gulxovuz MFY"
    },
    {
      id: "5575",
      district_id: "128",
      name: "I.Turopov MFY"
    },
    {
      id: "5576",
      district_id: "128",
      name: "Ismoil tepa MFY"
    },
    {
      id: "5577",
      district_id: "128",
      name: "Istiqlol MFY"
    },
    {
      id: "5578",
      district_id: "128",
      name: "Jarqurg`on QFY"
    },
    {
      id: "5579",
      district_id: "128",
      name: "Jinjaktepa MFY"
    },
    {
      id: "5580",
      district_id: "128",
      name: "Kakaydi QFY"
    },
    {
      id: "5581",
      district_id: "128",
      name: "Kamar MFY"
    },
    {
      id: "5582",
      district_id: "128",
      name: "Kuldovli MFY"
    },
    {
      id: "5583",
      district_id: "128",
      name: "Kunchiqish MFY"
    },
    {
      id: "5584",
      district_id: "128",
      name: "Kushtepa MFY"
    },
    {
      id: "5585",
      district_id: "128",
      name: "Loyqand MFY"
    },
    {
      id: "5586",
      district_id: "128",
      name: "Mehnat rohat MFY"
    },
    {
      id: "5587",
      district_id: "128",
      name: "Mehnatobod MFY"
    },
    {
      id: "5588",
      district_id: "128",
      name: "Markaziy MFY"
    },
    {
      id: "5589",
      district_id: "128",
      name: "Maslahat tepa MFY"
    },
    {
      id: "5590",
      district_id: "128",
      name: "Mingchinor MFY"
    },
    {
      id: "5591",
      district_id: "128",
      name: "Minor MFY"
    },
    {
      id: "5592",
      district_id: "128",
      name: "Minor QFY"
    },
    {
      id: "5593",
      district_id: "128",
      name: "Mopr MFY"
    },
    {
      id: "5594",
      district_id: "128",
      name: "Mustakillik MFY"
    },
    {
      id: "5595",
      district_id: "128",
      name: "N.Boymurodov MFY"
    },
    {
      id: "5596",
      district_id: "128",
      name: "Namuna MFY"
    },
    {
      id: "5597",
      district_id: "128",
      name: "Navro`z MFY"
    },
    {
      id: "5598",
      district_id: "128",
      name: "Oqqurg`on MFY"
    },
    {
      id: "5599",
      district_id: "128",
      name: "Oqqurg`on QFY"
    },
    {
      id: "5600",
      district_id: "128",
      name: "Oqtepa MFY"
    },
    {
      id: "5601",
      district_id: "128",
      name: "Oqtepa MFY"
    },
    {
      id: "5602",
      district_id: "128",
      name: "Oqtepa MFY"
    },
    {
      id: "5603",
      district_id: "128",
      name: "O`zbekiston MFY"
    },
    {
      id: "5604",
      district_id: "128",
      name: "Paxtaobod MFY"
    },
    {
      id: "5605",
      district_id: "128",
      name: "Paxtazavod MFY"
    },
    {
      id: "5606",
      district_id: "128",
      name: "Qahramon MFY"
    },
    {
      id: "5607",
      district_id: "128",
      name: "Qiron MFY"
    },
    {
      id: "5608",
      district_id: "128",
      name: "Qorabo`ra MFY"
    },
    {
      id: "5609",
      district_id: "128",
      name: "Qoraqursoq MFY"
    },
    {
      id: "5610",
      district_id: "128",
      name: "Qorayantoq MFY"
    },
    {
      id: "5611",
      district_id: "128",
      name: "Qorayog`och MFY"
    },
    {
      id: "5612",
      district_id: "128",
      name: "Qumqishloq MFY"
    },
    {
      id: "5613",
      district_id: "128",
      name: "Sh.Yulduzi QFY"
    },
    {
      id: "5614",
      district_id: "128",
      name: "Soqchi MFY"
    },
    {
      id: "5615",
      district_id: "128",
      name: "Surxon QFY"
    },
    {
      id: "5616",
      district_id: "128",
      name: "T.Shoburov MFY"
    },
    {
      id: "5617",
      district_id: "128",
      name: "U.Xudoyberdiev MFY"
    },
    {
      id: "5618",
      district_id: "128",
      name: "Ulug`bek MFY"
    },
    {
      id: "5619",
      district_id: "128",
      name: "Ulug`bek MFY"
    },
    {
      id: "5620",
      district_id: "128",
      name: "H.Olimjon MFY"
    },
    {
      id: "5621",
      district_id: "128",
      name: "Xalqabod MFY"
    },
    {
      id: "5622",
      district_id: "128",
      name: "Xayitobod MFY"
    },
    {
      id: "5623",
      district_id: "128",
      name: "Xo`jaqishloq MFY"
    },
    {
      id: "5624",
      district_id: "128",
      name: "Yangi usul MFY"
    },
    {
      id: "5625",
      district_id: "128",
      name: "Yangiariq MFY"
    },
    {
      id: "5626",
      district_id: "128",
      name: "Yangiobod MFY"
    },
    {
      id: "5627",
      district_id: "128",
      name: "Yangiqishloq MFY"
    },
    {
      id: "5628",
      district_id: "128",
      name: "Zartepa MFY"
    },
    {
      id: "5629",
      district_id: "129",
      name: "Etimqum MFY"
    },
    {
      id: "5630",
      district_id: "129",
      name: "Bektepa MFY"
    },
    {
      id: "5631",
      district_id: "129",
      name: "Bahoriston MFY"
    },
    {
      id: "5632",
      district_id: "129",
      name: "Bandixon MFY"
    },
    {
      id: "5633",
      district_id: "129",
      name: "Bandixon QFY"
    },
    {
      id: "5634",
      district_id: "129",
      name: "Birdamlik MFY"
    },
    {
      id: "5635",
      district_id: "129",
      name: "Bog`iston MFY"
    },
    {
      id: "5636",
      district_id: "129",
      name: "Buston QFY"
    },
    {
      id: "5637",
      district_id: "129",
      name: "Buston MFY"
    },
    {
      id: "5638",
      district_id: "129",
      name: "Chinor MFY"
    },
    {
      id: "5639",
      district_id: "129",
      name: "Chorvador QFY"
    },
    {
      id: "5640",
      district_id: "129",
      name: "Do`stlik MFY"
    },
    {
      id: "5641",
      district_id: "129",
      name: "Gilambob MFY"
    },
    {
      id: "5642",
      district_id: "129",
      name: "Gulbog` MFY"
    },
    {
      id: "5643",
      district_id: "129",
      name: "Guliston MFY"
    },
    {
      id: "5644",
      district_id: "129",
      name: "Gulobod MFY"
    },
    {
      id: "5645",
      district_id: "129",
      name: "Gulzor MFY"
    },
    {
      id: "5646",
      district_id: "129",
      name: "Istara MFY"
    },
    {
      id: "5647",
      district_id: "129",
      name: "Istiqlol MFY"
    },
    {
      id: "5648",
      district_id: "129",
      name: "Karmaki MFY"
    },
    {
      id: "5649",
      district_id: "129",
      name: "Kirshak QFY"
    },
    {
      id: "5650",
      district_id: "129",
      name: "Kirshak MFY"
    },
    {
      id: "5651",
      district_id: "129",
      name: "Korasuv MFY"
    },
    {
      id: "5652",
      district_id: "129",
      name: "Kunchikish MFY"
    },
    {
      id: "5653",
      district_id: "129",
      name: "Kunchikish MFY"
    },
    {
      id: "5654",
      district_id: "129",
      name: "M?xnatobod QFY"
    },
    {
      id: "5655",
      district_id: "129",
      name: "Mustaqillik MFY"
    },
    {
      id: "5656",
      district_id: "129",
      name: "Navbahor MFY"
    },
    {
      id: "5657",
      district_id: "129",
      name: "Navruz MFY"
    },
    {
      id: "5658",
      district_id: "129",
      name: "Okjar MFY"
    },
    {
      id: "5659",
      district_id: "129",
      name: "Olmazor QFY"
    },
    {
      id: "5660",
      district_id: "129",
      name: "Oqqo`ton MFY"
    },
    {
      id: "5661",
      district_id: "129",
      name: "Oxunbobo?v MFY"
    },
    {
      id: "5662",
      district_id: "129",
      name: "O`rgilsoy MFY"
    },
    {
      id: "5663",
      district_id: "129",
      name: "Paxtakor QFY"
    },
    {
      id: "5664",
      district_id: "129",
      name: "Polvontosh MFY"
    },
    {
      id: "5665",
      district_id: "129",
      name: "Qaldirg`och MFY"
    },
    {
      id: "5666",
      district_id: "129",
      name: "Qizil qoloq MFY"
    },
    {
      id: "5667",
      district_id: "129",
      name: "Qiziriq QFY"
    },
    {
      id: "5668",
      district_id: "129",
      name: "Qong`isoy MFY"
    },
    {
      id: "5669",
      district_id: "129",
      name: "Qo`sh qo`ton MFY"
    },
    {
      id: "5670",
      district_id: "129",
      name: "Rabatak MFY"
    },
    {
      id: "5671",
      district_id: "129",
      name: "Sarik SHFY"
    },
    {
      id: "5672",
      district_id: "129",
      name: "Saroy MFY"
    },
    {
      id: "5673",
      district_id: "129",
      name: "Shodlik MFY"
    },
    {
      id: "5674",
      district_id: "129",
      name: "Shreder MFY"
    },
    {
      id: "5675",
      district_id: "129",
      name: "Takiya MFY"
    },
    {
      id: "5676",
      district_id: "129",
      name: "Tinchlik MFY"
    },
    {
      id: "5677",
      district_id: "129",
      name: "Xalkobod MFY"
    },
    {
      id: "5678",
      district_id: "129",
      name: "Xomkon MFY"
    },
    {
      id: "5679",
      district_id: "129",
      name: "Xo`jaipok MFY"
    },
    {
      id: "5680",
      district_id: "129",
      name: "Yakka terak MFY"
    },
    {
      id: "5681",
      district_id: "129",
      name: "Yangi turmush MFY"
    },
    {
      id: "5682",
      district_id: "129",
      name: "Yangi hayot QFY"
    },
    {
      id: "5683",
      district_id: "129",
      name: "Yangi hayot MFY"
    },
    {
      id: "5684",
      district_id: "129",
      name: "Yangi yo`l QFY"
    },
    {
      id: "5685",
      district_id: "129",
      name: "Yangi yo`l MFY"
    },
    {
      id: "5686",
      district_id: "129",
      name: "Yangiobod MFY"
    },
    {
      id: "5687",
      district_id: "129",
      name: "Zevar MFY"
    },
    {
      id: "5688",
      district_id: "129",
      name: "Zarbdor MFY"
    },
    {
      id: "5689",
      district_id: "130",
      name: "A.Jo`raev MFY"
    },
    {
      id: "5690",
      district_id: "130",
      name: "Achamoyli MFY"
    },
    {
      id: "5691",
      district_id: "130",
      name: "Arigoshgan MFY"
    },
    {
      id: "5692",
      district_id: "130",
      name: "Arpapoya MFY"
    },
    {
      id: "5693",
      district_id: "130",
      name: "Arslonboyli QFY"
    },
    {
      id: "5694",
      district_id: "130",
      name: "Arslonboyli MFY"
    },
    {
      id: "5695",
      district_id: "130",
      name: "Azlarsoy MFY"
    },
    {
      id: "5696",
      district_id: "130",
      name: "Bobolochin MFY"
    },
    {
      id: "5697",
      district_id: "130",
      name: "Bobotog` MFY"
    },
    {
      id: "5698",
      district_id: "130",
      name: "Bogaro MFY"
    },
    {
      id: "5699",
      district_id: "130",
      name: "Boymoqli MFY"
    },
    {
      id: "5700",
      district_id: "130",
      name: "Buston MFY"
    },
    {
      id: "5701",
      district_id: "130",
      name: "Chayontepa MFY"
    },
    {
      id: "5702",
      district_id: "130",
      name: "Chukirli MFY"
    },
    {
      id: "5703",
      district_id: "130",
      name: "Do`stlik MFY"
    },
    {
      id: "5704",
      district_id: "130",
      name: "G`alaba MFY"
    },
    {
      id: "5705",
      district_id: "130",
      name: "Guliston MFY"
    },
    {
      id: "5706",
      district_id: "130",
      name: "Gultepa MFY"
    },
    {
      id: "5707",
      district_id: "130",
      name: "Imom tepa MFY"
    },
    {
      id: "5708",
      district_id: "130",
      name: "Islomobod MFY"
    },
    {
      id: "5709",
      district_id: "130",
      name: "Istiqlol MFY"
    },
    {
      id: "5710",
      district_id: "130",
      name: "Jaloir QFY"
    },
    {
      id: "5711",
      district_id: "130",
      name: "Jaloir MFY"
    },
    {
      id: "5712",
      district_id: "130",
      name: "Jarkishlok MFY"
    },
    {
      id: "5713",
      district_id: "130",
      name: "Jiydali MFY"
    },
    {
      id: "5714",
      district_id: "130",
      name: "K.Yuldoshev MFY"
    },
    {
      id: "5715",
      district_id: "130",
      name: "Ketmon QFY"
    },
    {
      id: "5716",
      district_id: "130",
      name: "Karsokli MFY"
    },
    {
      id: "5717",
      district_id: "130",
      name: "Kattakul MFY"
    },
    {
      id: "5718",
      district_id: "130",
      name: "Kindiktepa MFY"
    },
    {
      id: "5719",
      district_id: "130",
      name: "Kuganli MFY"
    },
    {
      id: "5720",
      district_id: "130",
      name: "Qumqurg`on MFY"
    },
    {
      id: "5721",
      district_id: "130",
      name: "M.Qoraboev MFY"
    },
    {
      id: "5722",
      district_id: "130",
      name: "M.Xujamkulov MFY"
    },
    {
      id: "5723",
      district_id: "130",
      name: "Mexrobod MFY"
    },
    {
      id: "5724",
      district_id: "130",
      name: "Munchoktepa MFY"
    },
    {
      id: "5725",
      district_id: "130",
      name: "Mustakillik MFY"
    },
    {
      id: "5726",
      district_id: "130",
      name: "Neftchi MFY"
    },
    {
      id: "5727",
      district_id: "130",
      name: "Navbaxor MFY"
    },
    {
      id: "5728",
      district_id: "130",
      name: "Oqsoy MFY"
    },
    {
      id: "5729",
      district_id: "130",
      name: "Oqtom MFY"
    },
    {
      id: "5730",
      district_id: "130",
      name: "Oqjar QFY"
    },
    {
      id: "5731",
      district_id: "130",
      name: "Oqqopchig`ay QFY"
    },
    {
      id: "5732",
      district_id: "130",
      name: "O`zbekiston 5 yiligi MFY"
    },
    {
      id: "5733",
      district_id: "130",
      name: "O`zbekiston QFY"
    },
    {
      id: "5734",
      district_id: "130",
      name: "Pastxam MFY"
    },
    {
      id: "5735",
      district_id: "130",
      name: "Paxtaobod MFY"
    },
    {
      id: "5736",
      district_id: "130",
      name: "Qumqo`rg`on QFY"
    },
    {
      id: "5737",
      district_id: "130",
      name: "Sherozi MFY"
    },
    {
      id: "5738",
      district_id: "130",
      name: "T.Muqimov MFY"
    },
    {
      id: "5739",
      district_id: "130",
      name: "Tebat MFY"
    },
    {
      id: "5740",
      district_id: "130",
      name: "Tarvuzpoya MFY"
    },
    {
      id: "5741",
      district_id: "130",
      name: "Tayfang MFY"
    },
    {
      id: "5742",
      district_id: "130",
      name: "Tuda MFY"
    },
    {
      id: "5743",
      district_id: "130",
      name: "Ulug`bek MFY"
    },
    {
      id: "5744",
      district_id: "130",
      name: "UYaS MFY"
    },
    {
      id: "5745",
      district_id: "130",
      name: "Xalaki MFY"
    },
    {
      id: "5746",
      district_id: "130",
      name: "Xalkobod MFY"
    },
    {
      id: "5747",
      district_id: "130",
      name: "Xuja kishlok MFY"
    },
    {
      id: "5748",
      district_id: "130",
      name: "Xujamulki MFY"
    },
    {
      id: "5749",
      district_id: "130",
      name: "Xurriyat MFY"
    },
    {
      id: "5750",
      district_id: "130",
      name: "Yangi avlod MFY"
    },
    {
      id: "5751",
      district_id: "130",
      name: "Yangi kishlok MFY"
    },
    {
      id: "5752",
      district_id: "130",
      name: "Yangi shaxar MFY"
    },
    {
      id: "5753",
      district_id: "130",
      name: "Yangier MFY"
    },
    {
      id: "5754",
      district_id: "130",
      name: "Yangiobod MFY"
    },
    {
      id: "5755",
      district_id: "130",
      name: "Yangixayot MFY"
    },
    {
      id: "5756",
      district_id: "130",
      name: "Yuqori kakaydi QFY"
    },
    {
      id: "5757",
      district_id: "131",
      name: "A.Ikromov MFY"
    },
    {
      id: "5758",
      district_id: "131",
      name: "A.Navoiy MFY"
    },
    {
      id: "5759",
      district_id: "131",
      name: "At-Termiziy MFY"
    },
    {
      id: "5760",
      district_id: "131",
      name: "Avjun MFY"
    },
    {
      id: "5761",
      district_id: "131",
      name: "Beshqo`ton QFY"
    },
    {
      id: "5762",
      district_id: "131",
      name: "Boldir MFY"
    },
    {
      id: "5763",
      district_id: "131",
      name: "Boldir QFY"
    },
    {
      id: "5764",
      district_id: "131",
      name: "Bo`ston (Jamoatchi) MFY"
    },
    {
      id: "5765",
      district_id: "131",
      name: "Ch.Quvondiqov-1 MFY"
    },
    {
      id: "5766",
      district_id: "131",
      name: "Ch.Quvondiqov-2 MFY"
    },
    {
      id: "5767",
      district_id: "131",
      name: "Chegarachi MFY"
    },
    {
      id: "5768",
      district_id: "131",
      name: "Dehibolo-Nazariy MFY"
    },
    {
      id: "5769",
      district_id: "131",
      name: "Dehqonobod MFY"
    },
    {
      id: "5770",
      district_id: "131",
      name: "Darband MFY"
    },
    {
      id: "5771",
      district_id: "131",
      name: "Do`stlik MFY"
    },
    {
      id: "5772",
      district_id: "131",
      name: "Duoba MFY"
    },
    {
      id: "5773",
      district_id: "131",
      name: "E.Jo`raev MFY"
    },
    {
      id: "5774",
      district_id: "131",
      name: "Fayziobod MFY"
    },
    {
      id: "5775",
      district_id: "131",
      name: "Gagarin MFY"
    },
    {
      id: "5776",
      district_id: "131",
      name: "Guliston MFY"
    },
    {
      id: "5777",
      district_id: "131",
      name: "Guliston QFY"
    },
    {
      id: "5778",
      district_id: "131",
      name: "Mustaqillik MFY"
    },
    {
      id: "5779",
      district_id: "131",
      name: "Muzrabot MFY"
    },
    {
      id: "5780",
      district_id: "131",
      name: "Muzrabot QFY"
    },
    {
      id: "5781",
      district_id: "131",
      name: "N.Mengliev MFY"
    },
    {
      id: "5782",
      district_id: "131",
      name: "Navbahor QFY"
    },
    {
      id: "5783",
      district_id: "131",
      name: "Navro`z MFY"
    },
    {
      id: "5784",
      district_id: "131",
      name: "Obodon QFY"
    },
    {
      id: "5785",
      district_id: "131",
      name: "Olachapon (Jamoatchi) MFY"
    },
    {
      id: "5786",
      district_id: "131",
      name: "Oltinko`l MFY"
    },
    {
      id: "5787",
      district_id: "131",
      name: "Paxtakor MFY"
    },
    {
      id: "5788",
      district_id: "131",
      name: "Q.Qurbonova MFY"
    },
    {
      id: "5789",
      district_id: "131",
      name: "Qahramon MFY"
    },
    {
      id: "5790",
      district_id: "131",
      name: "Qizilolma MFY"
    },
    {
      id: "5791",
      district_id: "131",
      name: "Qora-kamar QFY"
    },
    {
      id: "5792",
      district_id: "131",
      name: "Qozoyoqli MFY"
    },
    {
      id: "5793",
      district_id: "131",
      name: "Sh.Boboev MFY"
    },
    {
      id: "5794",
      district_id: "131",
      name: "Sho`rob MFY"
    },
    {
      id: "5795",
      district_id: "131",
      name: "Sho`rob QFY"
    },
    {
      id: "5796",
      district_id: "131",
      name: "Soppollitepa MFY"
    },
    {
      id: "5797",
      district_id: "131",
      name: "X.Jo`raev MFY"
    },
    {
      id: "5798",
      district_id: "131",
      name: "Xalqobod QFY MFY"
    },
    {
      id: "5799",
      district_id: "131",
      name: "Yangier MFY"
    },
    {
      id: "5800",
      district_id: "131",
      name: "Yangiobod MFY"
    },
    {
      id: "5801",
      district_id: "131",
      name: "Z.Nozimov MFY"
    },
    {
      id: "5802",
      district_id: "131",
      name: "Z.Qo`ldoshev MFY"
    },
    {
      id: "5803",
      district_id: "132",
      name: "Botosh MFY"
    },
    {
      id: "5804",
      district_id: "132",
      name: "Ipok MFY"
    },
    {
      id: "5805",
      district_id: "132",
      name: "A.Bo`taev MFY"
    },
    {
      id: "5806",
      district_id: "132",
      name: "Besh bola pahlavon MFY"
    },
    {
      id: "5807",
      district_id: "132",
      name: "Barkamol avlod MFY"
    },
    {
      id: "5808",
      district_id: "132",
      name: "Bibizaynab MFY"
    },
    {
      id: "5809",
      district_id: "132",
      name: "Chep MFY"
    },
    {
      id: "5810",
      district_id: "132",
      name: "Chep QFY"
    },
    {
      id: "5811",
      district_id: "132",
      name: "Chinor MFY"
    },
    {
      id: "5812",
      district_id: "132",
      name: "Do`goba QFY"
    },
    {
      id: "5813",
      district_id: "132",
      name: "Dugoba MFY"
    },
    {
      id: "5814",
      district_id: "132",
      name: "Ekraz MFY"
    },
    {
      id: "5815",
      district_id: "132",
      name: "Gulchechak MFY"
    },
    {
      id: "5816",
      district_id: "132",
      name: "Guliston MFY"
    },
    {
      id: "5817",
      district_id: "132",
      name: "Jindibuloq MFY"
    },
    {
      id: "5818",
      district_id: "132",
      name: "Jiyanbobo MFY"
    },
    {
      id: "5819",
      district_id: "132",
      name: "Jobu MFY"
    },
    {
      id: "5820",
      district_id: "132",
      name: "Jobu-1 MFY"
    },
    {
      id: "5821",
      district_id: "132",
      name: "Kaptarxona MFY"
    },
    {
      id: "5822",
      district_id: "132",
      name: "Karsagan MFY"
    },
    {
      id: "5823",
      district_id: "132",
      name: "Korlik MFY"
    },
    {
      id: "5824",
      district_id: "132",
      name: "Ko`sh archa MFY"
    },
    {
      id: "5825",
      district_id: "132",
      name: "M.Omonov MFY"
    },
    {
      id: "5826",
      district_id: "132",
      name: "Madaniyat MFY"
    },
    {
      id: "5827",
      district_id: "132",
      name: "Markaz MFY"
    },
    {
      id: "5828",
      district_id: "132",
      name: "Marmin MFY"
    },
    {
      id: "5829",
      district_id: "132",
      name: "Mingchinor MFY"
    },
    {
      id: "5830",
      district_id: "132",
      name: "Mirshodi QFY"
    },
    {
      id: "5831",
      district_id: "132",
      name: "Mirshodi MFY"
    },
    {
      id: "5832",
      district_id: "132",
      name: "Mo`minkul MFY"
    },
    {
      id: "5833",
      district_id: "132",
      name: "Must.10-yilligi MFY"
    },
    {
      id: "5834",
      district_id: "132",
      name: "Navro`z MFY"
    },
    {
      id: "5835",
      district_id: "132",
      name: "Obshir (Jamoatchi) MFY"
    },
    {
      id: "5836",
      district_id: "132",
      name: "Oltinsoy QFY"
    },
    {
      id: "5837",
      district_id: "132",
      name: "Oq-oltin QFY"
    },
    {
      id: "5838",
      district_id: "132",
      name: "Oqarbulok MFY"
    },
    {
      id: "5839",
      district_id: "132",
      name: "Oqarbulok QFY"
    },
    {
      id: "5840",
      district_id: "132",
      name: "Ovchi MFY"
    },
    {
      id: "5841",
      district_id: "132",
      name: "Qiziltepa MFY"
    },
    {
      id: "5842",
      district_id: "132",
      name: "Qoratepa MFY"
    },
    {
      id: "5843",
      district_id: "132",
      name: "Qorliq QFY"
    },
    {
      id: "5844",
      district_id: "132",
      name: "Qumpaykal MFY"
    },
    {
      id: "5845",
      district_id: "132",
      name: "Qurama-1 MFY"
    },
    {
      id: "5846",
      district_id: "132",
      name: "Qurama-2 MFY"
    },
    {
      id: "5847",
      district_id: "132",
      name: "Sayrak MFY"
    },
    {
      id: "5848",
      district_id: "132",
      name: "Shakar.qamish MFY"
    },
    {
      id: "5849",
      district_id: "132",
      name: "Shoxcha MFY"
    },
    {
      id: "5850",
      district_id: "132",
      name: "To`xtamish MFY"
    },
    {
      id: "5851",
      district_id: "132",
      name: "Vaxshivor QFY"
    },
    {
      id: "5852",
      district_id: "132",
      name: "Vaxshivor-1 MFY"
    },
    {
      id: "5853",
      district_id: "132",
      name: "Vaxshivor-2 MFY"
    },
    {
      id: "5854",
      district_id: "132",
      name: "Xalqobod MFY"
    },
    {
      id: "5855",
      district_id: "132",
      name: "Xayrandara MFY"
    },
    {
      id: "5856",
      district_id: "132",
      name: "Xidirsho MFY"
    },
    {
      id: "5857",
      district_id: "132",
      name: "Xo`jaipok MFY"
    },
    {
      id: "5858",
      district_id: "132",
      name: "Xo`jasoat QFY"
    },
    {
      id: "5859",
      district_id: "132",
      name: "Xo`jasoat-2 MFY"
    },
    {
      id: "5860",
      district_id: "132",
      name: "Yakka tut MFY"
    },
    {
      id: "5861",
      district_id: "132",
      name: "Yangi qurilish MFY"
    },
    {
      id: "5862",
      district_id: "132",
      name: "Yangiariq MFY"
    },
    {
      id: "5863",
      district_id: "132",
      name: "Yangiobod MFY"
    },
    {
      id: "5864",
      district_id: "132",
      name: "Zardaqul MFY"
    },
    {
      id: "5865",
      district_id: "133",
      name: "A.Navoiy MFY"
    },
    {
      id: "5866",
      district_id: "133",
      name: "Aeroport MFY"
    },
    {
      id: "5867",
      district_id: "133",
      name: "Barlos MFY"
    },
    {
      id: "5868",
      district_id: "133",
      name: "Birlik"
    },
    {
      id: "5869",
      district_id: "133",
      name: "Birlik MFY"
    },
    {
      id: "5870",
      district_id: "133",
      name: "Bodomzor MFY"
    },
    {
      id: "5871",
      district_id: "133",
      name: "Bodomzor QFY"
    },
    {
      id: "5872",
      district_id: "133",
      name: "Bog`isamarqand (Jamoatchi) MFY"
    },
    {
      id: "5873",
      district_id: "133",
      name: "Buyrapo`sh MFY"
    },
    {
      id: "5874",
      district_id: "133",
      name: "Chinor MFY"
    },
    {
      id: "5875",
      district_id: "133",
      name: "Daragiston (Jamoatchi) MFY"
    },
    {
      id: "5876",
      district_id: "133",
      name: "Do`stlik MFY"
    },
    {
      id: "5877",
      district_id: "133",
      name: "Do`stlik MFY"
    },
    {
      id: "5878",
      district_id: "133",
      name: "Erkin MFY"
    },
    {
      id: "5879",
      district_id: "133",
      name: "Erkin QFY"
    },
    {
      id: "5880",
      district_id: "133",
      name: "Erman MFY"
    },
    {
      id: "5881",
      district_id: "133",
      name: "Esoqi MFY"
    },
    {
      id: "5882",
      district_id: "133",
      name: "Fozilko`chdi MFY"
    },
    {
      id: "5883",
      district_id: "133",
      name: "G`alaba MFY"
    },
    {
      id: "5884",
      district_id: "133",
      name: "g`ayrat MFY"
    },
    {
      id: "5885",
      district_id: "133",
      name: "Galabutta MFY"
    },
    {
      id: "5886",
      district_id: "133",
      name: "Galabutta MFY"
    },
    {
      id: "5887",
      district_id: "133",
      name: "Gazarak QFY"
    },
    {
      id: "5888",
      district_id: "133",
      name: "Gazarik MFY"
    },
    {
      id: "5889",
      district_id: "133",
      name: "Gulshan MFY"
    },
    {
      id: "5890",
      district_id: "133",
      name: "Kenguzar MFY"
    },
    {
      id: "5891",
      district_id: "133",
      name: "Ko`lob MFY"
    },
    {
      id: "5892",
      district_id: "133",
      name: "M.Ulug`bek MFY"
    },
    {
      id: "5893",
      district_id: "133",
      name: "Madaniyat MFY"
    },
    {
      id: "5894",
      district_id: "133",
      name: "Madaniyat QFY"
    },
    {
      id: "5895",
      district_id: "133",
      name: "Navro`z MFY"
    },
    {
      id: "5896",
      district_id: "133",
      name: "Navro`z QFY"
    },
    {
      id: "5897",
      district_id: "133",
      name: "Nilova MFY"
    },
    {
      id: "5898",
      district_id: "133",
      name: "Nilu (Jamoatchi) MFY"
    },
    {
      id: "5899",
      district_id: "133",
      name: "Olmazor MFY"
    },
    {
      id: "5900",
      district_id: "133",
      name: "Oxunbobev QFY"
    },
    {
      id: "5901",
      district_id: "133",
      name: "Oxunboboev MFY"
    },
    {
      id: "5902",
      district_id: "133",
      name: "Oxunboboev MFY"
    },
    {
      id: "5903",
      district_id: "133",
      name: "Oxunbobov MFY"
    },
    {
      id: "5904",
      district_id: "133",
      name: "O`zbekiston MFY"
    },
    {
      id: "5905",
      district_id: "133",
      name: "O`zgarish MFY"
    },
    {
      id: "5906",
      district_id: "133",
      name: "Paxtakor MFY"
    },
    {
      id: "5907",
      district_id: "133",
      name: "Pistamozor MFY"
    },
    {
      id: "5908",
      district_id: "133",
      name: "Qorasuv MFY"
    },
    {
      id: "5909",
      district_id: "133",
      name: "Qo`shchinor MFY"
    },
    {
      id: "5910",
      district_id: "133",
      name: "Qo`shchinor QFY"
    },
    {
      id: "5911",
      district_id: "133",
      name: "Qulmozor MFY"
    },
    {
      id: "5912",
      district_id: "133",
      name: "S.Raximov MFY"
    },
    {
      id: "5913",
      district_id: "133",
      name: "Sangardak MFY"
    },
    {
      id: "5914",
      district_id: "133",
      name: "Sangardak QFY"
    },
    {
      id: "5915",
      district_id: "133",
      name: "Sarijar MFY"
    },
    {
      id: "5916",
      district_id: "133",
      name: "Sarixo`y MFY"
    },
    {
      id: "5917",
      district_id: "133",
      name: "Shoqishloq MFY"
    },
    {
      id: "5918",
      district_id: "133",
      name: "Shoximardon MFY"
    },
    {
      id: "5919",
      district_id: "133",
      name: "So`fiyon MFY"
    },
    {
      id: "5920",
      district_id: "133",
      name: "Tolpakchinor MFY"
    },
    {
      id: "5921",
      district_id: "138",
      name: "Tamshush MFY\r\n"
    },
    {
      id: "5922",
      district_id: "133",
      name: "Tirgaron MFY"
    },
    {
      id: "5923",
      district_id: "133",
      name: "Tokchiyon MFY"
    },
    {
      id: "5924",
      district_id: "133",
      name: "Torto`li MFY"
    },
    {
      id: "5925",
      district_id: "133",
      name: "Xovzqoq MFY"
    },
    {
      id: "5926",
      district_id: "133",
      name: "Xufar MFY"
    },
    {
      id: "5927",
      district_id: "133",
      name: "Xurvatan MFY"
    },
    {
      id: "5928",
      district_id: "133",
      name: "Y.Oxunbobo?v MFY"
    },
    {
      id: "5929",
      district_id: "133",
      name: "Yangihayot MFY"
    },
    {
      id: "5930",
      district_id: "133",
      name: "Yangiobod MFY"
    },
    {
      id: "5931",
      district_id: "133",
      name: "Yangiqishloq MFY"
    },
    {
      id: "5932",
      district_id: "133",
      name: "Yangiturmush MFY"
    },
    {
      id: "5933",
      district_id: "134",
      name: "A.Navoiy MFY"
    },
    {
      id: "5934",
      district_id: "134",
      name: "A.Temur MFY"
    },
    {
      id: "5935",
      district_id: "134",
      name: "Amu-sohili MFY"
    },
    {
      id: "5936",
      district_id: "134",
      name: "At-Termiziy MFY"
    },
    {
      id: "5937",
      district_id: "134",
      name: "Ayritom MFY"
    },
    {
      id: "5938",
      district_id: "134",
      name: "Chegara MFY"
    },
    {
      id: "5939",
      district_id: "134",
      name: "Do`stlik MFY"
    },
    {
      id: "5940",
      district_id: "134",
      name: "Gulbahor MFY"
    },
    {
      id: "5941",
      district_id: "134",
      name: "Guliston MFY"
    },
    {
      id: "5942",
      district_id: "134",
      name: "Istiqlol MFY"
    },
    {
      id: "5943",
      district_id: "134",
      name: "Jo`yijangal MFY"
    },
    {
      id: "5944",
      district_id: "134",
      name: "Kokildor-ota MFY"
    },
    {
      id: "5945",
      district_id: "134",
      name: "M.Eshtemirov MFY"
    },
    {
      id: "5946",
      district_id: "134",
      name: "Manguzar MFY"
    },
    {
      id: "5947",
      district_id: "134",
      name: "Mustaqilik MFY"
    },
    {
      id: "5948",
      district_id: "134",
      name: "Namuna MFY"
    },
    {
      id: "5949",
      district_id: "134",
      name: "Navro`z MFY"
    },
    {
      id: "5950",
      district_id: "134",
      name: "Orol MFY"
    },
    {
      id: "5951",
      district_id: "134",
      name: "Parandachilik MFY"
    },
    {
      id: "5952",
      district_id: "134",
      name: "Patakesar MFY"
    },
    {
      id: "5953",
      district_id: "134",
      name: "Pattakesar QFY"
    },
    {
      id: "5954",
      district_id: "134",
      name: "Paxtaobod QFY"
    },
    {
      id: "5955",
      district_id: "134",
      name: "Qahramon MFY"
    },
    {
      id: "5956",
      district_id: "134",
      name: "Qoraxon MFY"
    },
    {
      id: "5957",
      district_id: "134",
      name: "Qo`ng`irot MFY"
    },
    {
      id: "5958",
      district_id: "134",
      name: "Quyoshli yurt MFY"
    },
    {
      id: "5959",
      district_id: "134",
      name: "Sh.Rashidov MFY"
    },
    {
      id: "5960",
      district_id: "134",
      name: "Sharq MFY"
    },
    {
      id: "5961",
      district_id: "134",
      name: "Soliobod MFY"
    },
    {
      id: "5962",
      district_id: "134",
      name: "Tinchlik MFY"
    },
    {
      id: "5963",
      district_id: "134",
      name: "Uchkizil MFY"
    },
    {
      id: "5964",
      district_id: "134",
      name: "Uchqizil QFY"
    },
    {
      id: "5965",
      district_id: "134",
      name: "Xalqabod MFY"
    },
    {
      id: "5966",
      district_id: "134",
      name: "Xotinrabot QFY"
    },
    {
      id: "5967",
      district_id: "134",
      name: "Yangi ariq QFY"
    },
    {
      id: "5968",
      district_id: "134",
      name: "Yangi hayot MFY"
    },
    {
      id: "5969",
      district_id: "135",
      name: "A.Jomiy MFY"
    },
    {
      id: "5970",
      district_id: "135",
      name: "A.Navoiy MFY"
    },
    {
      id: "5971",
      district_id: "135",
      name: "Alpomish MFY"
    },
    {
      id: "5972",
      district_id: "135",
      name: "Amu Soxillari MFY"
    },
    {
      id: "5973",
      district_id: "135",
      name: "Baynalminal MFY"
    },
    {
      id: "5974",
      district_id: "135",
      name: "Bog`ishamol MFY"
    },
    {
      id: "5975",
      district_id: "135",
      name: "Bo`ston MFY"
    },
    {
      id: "5976",
      district_id: "135",
      name: "Do`stlik MFY"
    },
    {
      id: "5977",
      district_id: "135",
      name: "Farxod MFY"
    },
    {
      id: "5978",
      district_id: "135",
      name: "Garm MFY"
    },
    {
      id: "5979",
      district_id: "135",
      name: "Guliston MFY"
    },
    {
      id: "5980",
      district_id: "135",
      name: "Ibn.Sino MFY"
    },
    {
      id: "5981",
      district_id: "135",
      name: "Ishchilar MFY"
    },
    {
      id: "5982",
      district_id: "135",
      name: "Jayxun MFY"
    },
    {
      id: "5983",
      district_id: "135",
      name: "Juyjangal MFY"
    },
    {
      id: "5984",
      district_id: "135",
      name: "Katta-bog MFY"
    },
    {
      id: "5985",
      district_id: "135",
      name: "Mexrobod MFY"
    },
    {
      id: "5986",
      district_id: "135",
      name: "Ma`rifat MFY"
    },
    {
      id: "5987",
      district_id: "135",
      name: "Navruz MFY"
    },
    {
      id: "5988",
      district_id: "135",
      name: "Ozodlik MFY"
    },
    {
      id: "5989",
      district_id: "135",
      name: "O`zbekiston MFY"
    },
    {
      id: "5990",
      district_id: "135",
      name: "Pattakesar MFY"
    },
    {
      id: "5991",
      district_id: "135",
      name: "R.Uzoqova MFY"
    },
    {
      id: "5992",
      district_id: "135",
      name: "Shifokor MFY"
    },
    {
      id: "5993",
      district_id: "135",
      name: "Shodlik MFY"
    },
    {
      id: "5994",
      district_id: "135",
      name: "Surxon soxili MFY"
    },
    {
      id: "5995",
      district_id: "135",
      name: "Temir yulchi MFY"
    },
    {
      id: "5996",
      district_id: "135",
      name: "Tuprokkurgon MFY"
    },
    {
      id: "5997",
      district_id: "135",
      name: "Uchkun MFY"
    },
    {
      id: "5998",
      district_id: "135",
      name: "Yulduz MFY"
    },
    {
      id: "5999",
      district_id: "136",
      name: "Beshkapa MFY"
    },
    {
      id: "6000",
      district_id: "136",
      name: "Bobotog` QFY"
    },
    {
      id: "6001",
      district_id: "136",
      name: "Chaqar MFY"
    },
    {
      id: "6002",
      district_id: "136",
      name: "Chinor MFY"
    },
    {
      id: "6003",
      district_id: "136",
      name: "Chosh (Jamoatchi) MFY"
    },
    {
      id: "6004",
      district_id: "136",
      name: "Dehqon MFY"
    },
    {
      id: "6005",
      district_id: "136",
      name: "Do`stlik MFY"
    },
    {
      id: "6006",
      district_id: "136",
      name: "Fayzabod MFY"
    },
    {
      id: "6007",
      district_id: "136",
      name: "Fayzova MFY"
    },
    {
      id: "6008",
      district_id: "136",
      name: "Fayzova QFY"
    },
    {
      id: "6009",
      district_id: "136",
      name: "Guliston MFY"
    },
    {
      id: "6010",
      district_id: "136",
      name: "Istiqlol MFY"
    },
    {
      id: "6011",
      district_id: "136",
      name: "Jonchekka MFY"
    },
    {
      id: "6012",
      district_id: "136",
      name: "Jonchekka QFY"
    },
    {
      id: "6013",
      district_id: "136",
      name: "K.Jonchekka MFY"
    },
    {
      id: "6014",
      district_id: "136",
      name: "Karsh (Jamoatchi) MFY"
    },
    {
      id: "6015",
      district_id: "136",
      name: "M.Turmush MFY"
    },
    {
      id: "6016",
      district_id: "136",
      name: "Mehnat MFY"
    },
    {
      id: "6017",
      district_id: "136",
      name: "Maland (Jamoatchi MFY)"
    },
    {
      id: "6018",
      district_id: "136",
      name: "Malandiyon MFY"
    },
    {
      id: "6019",
      district_id: "136",
      name: "Mustaqillik MFY"
    },
    {
      id: "6020",
      district_id: "136",
      name: "Mustaqillik MFY"
    },
    {
      id: "6021",
      district_id: "136",
      name: "N.Ramazonov MFY"
    },
    {
      id: "6022",
      district_id: "136",
      name: "Obizarang MFY"
    },
    {
      id: "6023",
      district_id: "136",
      name: "Oqmachit MFY"
    },
    {
      id: "6024",
      district_id: "136",
      name: "Oqostona MFY"
    },
    {
      id: "6025",
      district_id: "136",
      name: "Oqostona QFY"
    },
    {
      id: "6026",
      district_id: "136",
      name: "Oqtumshuq MFY"
    },
    {
      id: "6027",
      district_id: "136",
      name: "O`lanqul MFY"
    },
    {
      id: "6028",
      district_id: "136",
      name: "O`zbekiston MFY"
    },
    {
      id: "6029",
      district_id: "136",
      name: "Qarashi MFY"
    },
    {
      id: "6030",
      district_id: "136",
      name: "Serharakat MFY"
    },
    {
      id: "6031",
      district_id: "136",
      name: "Tolpakchinor QFY"
    },
    {
      id: "6032",
      district_id: "136",
      name: "Tojikobod MFY"
    },
    {
      id: "6033",
      district_id: "136",
      name: "Toltug`ay MFY"
    },
    {
      id: "6034",
      district_id: "136",
      name: "Tomchi (Jamoatchi) MFY"
    },
    {
      id: "6035",
      district_id: "136",
      name: "U.Yusupov MFY"
    },
    {
      id: "6036",
      district_id: "136",
      name: "Uzun QFY"
    },
    {
      id: "6037",
      district_id: "136",
      name: "Uzunqishloq MFY"
    },
    {
      id: "6038",
      district_id: "136",
      name: "X.Qaxramon MFY"
    },
    {
      id: "6039",
      district_id: "136",
      name: "Xonjiza MFY"
    },
    {
      id: "6040",
      district_id: "136",
      name: "Xonjiza QFY"
    },
    {
      id: "6041",
      district_id: "136",
      name: "Xursand MFY"
    },
    {
      id: "6042",
      district_id: "136",
      name: "Yangi obod MFY"
    },
    {
      id: "6043",
      district_id: "136",
      name: "Yangi ro`zg`or MFY"
    },
    {
      id: "6044",
      district_id: "136",
      name: "Yangi shahar MFY"
    },
    {
      id: "6045",
      district_id: "136",
      name: "Yangikuch MFY"
    },
    {
      id: "6046",
      district_id: "136",
      name: "Yangixayot MFY"
    },
    {
      id: "6047",
      district_id: "136",
      name: "Yangiyo`l MFY"
    },
    {
      id: "6048",
      district_id: "136",
      name: "Yor Hakimov MFY"
    },
    {
      id: "6049",
      district_id: "136",
      name: "Yoshlik MFY"
    },
    {
      id: "6050",
      district_id: "137",
      name: "Oqqo`rg`on QFY"
    },
    {
      id: "6051",
      district_id: "137",
      name: "A. Ikromov MFY"
    },
    {
      id: "6052",
      district_id: "137",
      name: "Ayinni MFY"
    },
    {
      id: "6053",
      district_id: "137",
      name: "Balxiguzar MFY"
    },
    {
      id: "6054",
      district_id: "137",
      name: "Boybuloq MFY"
    },
    {
      id: "6055",
      district_id: "137",
      name: "Boyqishloq MFY"
    },
    {
      id: "6056",
      district_id: "137",
      name: "Bo`ston QFY"
    },
    {
      id: "6057",
      district_id: "137",
      name: "Chag`atoy MFY"
    },
    {
      id: "6058",
      district_id: "137",
      name: "Chinobod MFY"
    },
    {
      id: "6059",
      district_id: "137",
      name: "Chinobod QFY"
    },
    {
      id: "6060",
      district_id: "137",
      name: "Chorbog` MFY"
    },
    {
      id: "6061",
      district_id: "137",
      name: "Cho`mishli MFY"
    },
    {
      id: "6062",
      district_id: "137",
      name: "Cho`yinchi MFY"
    },
    {
      id: "6063",
      district_id: "137",
      name: "Chuqurko`l MFY"
    },
    {
      id: "6064",
      district_id: "137",
      name: "Do`stlik MFY"
    },
    {
      id: "6065",
      district_id: "137",
      name: "G`alaba MFY"
    },
    {
      id: "6066",
      district_id: "137",
      name: "g`ambur MFY"
    },
    {
      id: "6067",
      district_id: "137",
      name: "g`o`rin Gilambob MFY"
    },
    {
      id: "6068",
      district_id: "137",
      name: "g`urjak MFY"
    },
    {
      id: "6069",
      district_id: "137",
      name: "g`urjak-2 MFY"
    },
    {
      id: "6070",
      district_id: "137",
      name: "Galaguzar MFY"
    },
    {
      id: "6071",
      district_id: "137",
      name: "Guliston MFY"
    },
    {
      id: "6072",
      district_id: "137",
      name: "Hakimobod MFY"
    },
    {
      id: "6073",
      district_id: "137",
      name: "Istiqbol MFY"
    },
    {
      id: "6074",
      district_id: "137",
      name: "Katta xayot MFY"
    },
    {
      id: "6075",
      district_id: "137",
      name: "Kilkon MFY"
    },
    {
      id: "6076",
      district_id: "137",
      name: "Laylagon MFY"
    },
    {
      id: "6077",
      district_id: "137",
      name: "Mehnatobod MFY"
    },
    {
      id: "6078",
      district_id: "137",
      name: "Navbog` MFY"
    },
    {
      id: "6079",
      district_id: "137",
      name: "Navbur MFY"
    },
    {
      id: "6080",
      district_id: "137",
      name: "Oqqo`rg`on MFY"
    },
    {
      id: "6081",
      district_id: "137",
      name: "Oqtepa MFY"
    },
    {
      id: "6082",
      district_id: "137",
      name: "Oxunboboev MFY"
    },
    {
      id: "6083",
      district_id: "137",
      name: "Paxtaobod MFY"
    },
    {
      id: "6084",
      district_id: "137",
      name: "Poshxurt MFY"
    },
    {
      id: "6085",
      district_id: "137",
      name: "Qishloqbozor MFY"
    },
    {
      id: "6086",
      district_id: "137",
      name: "Qizil olma MFY"
    },
    {
      id: "6087",
      district_id: "137",
      name: "Qorabog` MFY"
    },
    {
      id: "6088",
      district_id: "137",
      name: "Qulluqsho MFY"
    },
    {
      id: "6089",
      district_id: "137",
      name: "Rabatak QFY"
    },
    {
      id: "6090",
      district_id: "137",
      name: "Seplon MFY"
    },
    {
      id: "6091",
      district_id: "137",
      name: "Seplon QFY"
    },
    {
      id: "6092",
      district_id: "137",
      name: "Sariqamish MFY"
    },
    {
      id: "6093",
      district_id: "137",
      name: "Sariqamish QFY"
    },
    {
      id: "6094",
      district_id: "137",
      name: "Sherobod MFY"
    },
    {
      id: "6095",
      district_id: "137",
      name: "Tallashqon QFY"
    },
    {
      id: "6096",
      district_id: "137",
      name: "Taroqli MFY"
    },
    {
      id: "6097",
      district_id: "137",
      name: "Uch yog`och MFY"
    },
    {
      id: "6098",
      district_id: "137",
      name: "Vandob (Jamoatchi) MFY"
    },
    {
      id: "6099",
      district_id: "137",
      name: "Xo`jaqiya-1 MFY"
    },
    {
      id: "6100",
      district_id: "137",
      name: "Xo`jaqiya-2 MFY"
    },
    {
      id: "6101",
      district_id: "137",
      name: "Xo`jgi MFY"
    },
    {
      id: "6102",
      district_id: "137",
      name: "Yangi turmush QFY"
    },
    {
      id: "6103",
      district_id: "137",
      name: "Yangiariq MFY"
    },
    {
      id: "6104",
      district_id: "137",
      name: "Yoshlik MFY"
    },
    {
      id: "6105",
      district_id: "137",
      name: "Zarabog` MFY"
    },
    {
      id: "6106",
      district_id: "137",
      name: "Zarabog`QFY"
    },
    {
      id: "6107",
      district_id: "138",
      name: "5 yillik MFY"
    },
    {
      id: "6108",
      district_id: "138",
      name: "8-mart. MFY"
    },
    {
      id: "6109",
      district_id: "138",
      name: "A.Navoiy MFY"
    },
    {
      id: "6110",
      district_id: "138",
      name: "Baxshitepa 1 MFY"
    },
    {
      id: "6111",
      district_id: "138",
      name: "Baxshitepa MFY"
    },
    {
      id: "6112",
      district_id: "138",
      name: "Baxtlit?pa QFY"
    },
    {
      id: "6113",
      district_id: "138",
      name: "Bobotog` MFY"
    },
    {
      id: "6114",
      district_id: "138",
      name: "Bobur MFY"
    },
    {
      id: "6115",
      district_id: "138",
      name: "Bo`ston MFY"
    },
    {
      id: "6116",
      district_id: "138",
      name: "Dalvarzin 1 MFY"
    },
    {
      id: "6117",
      district_id: "138",
      name: "Dalvarzin 2 MFY"
    },
    {
      id: "6118",
      district_id: "138",
      name: "Dalvarzin QFY"
    },
    {
      id: "6119",
      district_id: "138",
      name: "Do`stlik MFY"
    },
    {
      id: "6120",
      district_id: "138",
      name: "Elboyon MFY"
    },
    {
      id: "6121",
      district_id: "138",
      name: "Elboyon SHFY"
    },
    {
      id: "6122",
      district_id: "138",
      name: "Elobod QFY"
    },
    {
      id: "6123",
      district_id: "138",
      name: "Guliston MFY"
    },
    {
      id: "6124",
      district_id: "138",
      name: "Ibn Sino MFY"
    },
    {
      id: "6125",
      district_id: "138",
      name: "Jaloir QFY"
    },
    {
      id: "6126",
      district_id: "138",
      name: "Joloir MFY"
    },
    {
      id: "6127",
      district_id: "138",
      name: "Joyilma MFY"
    },
    {
      id: "6128",
      district_id: "138",
      name: "Kakan MFY"
    },
    {
      id: "6129",
      district_id: "138",
      name: "Kakaydi MFY"
    },
    {
      id: "6130",
      district_id: "138",
      name: "Konobod MFY"
    },
    {
      id: "6131",
      district_id: "138",
      name: "Ko`klam MFY"
    },
    {
      id: "6132",
      district_id: "138",
      name: "Kultepa 1 MFY"
    },
    {
      id: "6133",
      district_id: "138",
      name: "Kultepa MFY"
    },
    {
      id: "6134",
      district_id: "138",
      name: "Laylakxona MFY"
    },
    {
      id: "6135",
      district_id: "138",
      name: "Navro`z MFY"
    },
    {
      id: "6136",
      district_id: "138",
      name: "Obodon MFY"
    },
    {
      id: "6137",
      district_id: "138",
      name: "Olatemir MFY"
    },
    {
      id: "6138",
      district_id: "138",
      name: "Oqkamar MFY"
    },
    {
      id: "6139",
      district_id: "138",
      name: "Oqqo`rg`on MFY"
    },
    {
      id: "6140",
      district_id: "138",
      name: "Oqtumshuq MFY"
    },
    {
      id: "6141",
      district_id: "138",
      name: "Oxunboboev QFY"
    },
    {
      id: "6142",
      district_id: "138",
      name: "Oynakul MFY"
    },
    {
      id: "6143",
      district_id: "138",
      name: "Ozod MFY"
    },
    {
      id: "6144",
      district_id: "138",
      name: "O`rmoncha (Jamoatchi) MFY"
    },
    {
      id: "6145",
      district_id: "138",
      name: "Polvontosh MFY"
    },
    {
      id: "6146",
      district_id: "138",
      name: "Qorariq MFY"
    },
    {
      id: "6147",
      district_id: "138",
      name: "Qo`ldosh MFY"
    },
    {
      id: "6148",
      district_id: "138",
      name: "Qo`ldosh QFY"
    },
    {
      id: "6149",
      district_id: "138",
      name: "Qo`shtegirmon MFY"
    },
    {
      id: "6150",
      district_id: "138",
      name: "Serg`ayrat MFY"
    },
    {
      id: "6151",
      district_id: "138",
      name: "Saksonkappa MFY"
    },
    {
      id: "6152",
      district_id: "138",
      name: "Saurtera MFY"
    },
    {
      id: "6153",
      district_id: "138",
      name: "Savur QFY"
    },
    {
      id: "6154",
      district_id: "138",
      name: "Shakarko`l MFY"
    },
    {
      id: "6155",
      district_id: "138",
      name: "Shaldiroq MFY"
    },
    {
      id: "6156",
      district_id: "138",
      name: "Sho`rchi QFY"
    },
    {
      id: "6157",
      district_id: "138",
      name: "Sovjiranbobo MFY"
    },
    {
      id: "6158",
      district_id: "138",
      name: "Soxibkor QFY"
    },
    {
      id: "6159",
      district_id: "138",
      name: "Tolli MFY"
    },
    {
      id: "6160",
      district_id: "138",
      name: "Tula MFY"
    },
    {
      id: "6161",
      district_id: "138",
      name: "Xayrobod MFY"
    },
    {
      id: "6162",
      district_id: "138",
      name: "Xojibobo MFY"
    },
    {
      id: "6163",
      district_id: "138",
      name: "Xurlik MFY"
    },
    {
      id: "6164",
      district_id: "138",
      name: "Yakkabog` MFY"
    },
    {
      id: "6165",
      district_id: "138",
      name: "Yalti MFY"
    },
    {
      id: "6166",
      district_id: "138",
      name: "Yangiariq MFY"
    },
    {
      id: "6167",
      district_id: "138",
      name: "Yangibozor QFY"
    },
    {
      id: "6168",
      district_id: "138",
      name: "Yorug`lik MFY"
    },
    {
      id: "6169",
      district_id: "138",
      name: "Yoshgayrat MFY"
    },
    {
      id: "6170",
      district_id: "138",
      name: "Zarbdor MFY"
    },
    {
      id: "6171",
      district_id: "139",
      name: "1-Boyovut QFY"
    },
    {
      id: "6172",
      district_id: "139",
      name: "A. Temur MFY"
    },
    {
      id: "6173",
      district_id: "139",
      name: "A.Navoiy-1 MFY"
    },
    {
      id: "6174",
      district_id: "139",
      name: "B. Umurzokov MFY"
    },
    {
      id: "6175",
      district_id: "139",
      name: "Bekat MFY"
    },
    {
      id: "6176",
      district_id: "139",
      name: "Beruniy MFY"
    },
    {
      id: "6177",
      district_id: "139",
      name: "Boyovut SHFY"
    },
    {
      id: "6178",
      district_id: "139",
      name: "Bunyodkor MFY"
    },
    {
      id: "6179",
      district_id: "139",
      name: "Dehqonobod QFY"
    },
    {
      id: "6180",
      district_id: "139",
      name: "Darvozakir QFY"
    },
    {
      id: "6181",
      district_id: "139",
      name: "Do`stlik MFY"
    },
    {
      id: "6182",
      district_id: "139",
      name: "Do`stlik MFY"
    },
    {
      id: "6183",
      district_id: "139",
      name: "Do`stlik QFY"
    },
    {
      id: "6184",
      district_id: "139",
      name: "Farhod MFY"
    },
    {
      id: "6185",
      district_id: "139",
      name: "Gallakor QFY"
    },
    {
      id: "6186",
      district_id: "139",
      name: "Gulbog MFY"
    },
    {
      id: "6187",
      district_id: "139",
      name: "Istiqlol MFY"
    },
    {
      id: "6188",
      district_id: "139",
      name: "J.Usmonov QFY"
    },
    {
      id: "6189",
      district_id: "139",
      name: "Jo`langar MFY"
    },
    {
      id: "6190",
      district_id: "139",
      name: "Laylakkul QFY"
    },
    {
      id: "6191",
      district_id: "139",
      name: "Ma`naviyat MFY"
    },
    {
      id: "6192",
      district_id: "139",
      name: "Madaniyat QFY"
    },
    {
      id: "6193",
      district_id: "139",
      name: "Madaniyat MFY"
    },
    {
      id: "6194",
      district_id: "139",
      name: "Markaz MFY"
    },
    {
      id: "6195",
      district_id: "139",
      name: "Mingchinor QFY"
    },
    {
      id: "6196",
      district_id: "139",
      name: "Mirishkor MFY"
    },
    {
      id: "6197",
      district_id: "139",
      name: "Muqumiy MFY"
    },
    {
      id: "6198",
      district_id: "139",
      name: "N. Mahmudov MFY"
    },
    {
      id: "6199",
      district_id: "139",
      name: "Navbahor MFY"
    },
    {
      id: "6200",
      district_id: "139",
      name: "Navoiy-2 MFY"
    },
    {
      id: "6201",
      district_id: "139",
      name: "Navoiy-3 MFY"
    },
    {
      id: "6202",
      district_id: "139",
      name: "Navro`z MFY"
    },
    {
      id: "6203",
      district_id: "139",
      name: "Olmazor QFY"
    },
    {
      id: "6204",
      district_id: "139",
      name: "Olmazor MFY"
    },
    {
      id: "6205",
      district_id: "139",
      name: "Ozodlik MFY"
    },
    {
      id: "6206",
      district_id: "139",
      name: "O`zbekiston MFY"
    },
    {
      id: "6207",
      district_id: "139",
      name: "Paxtakor MFY"
    },
    {
      id: "6208",
      district_id: "139",
      name: "Qarapchi MFY"
    },
    {
      id: "6209",
      district_id: "139",
      name: "S`ayniy MFY"
    },
    {
      id: "6210",
      district_id: "139",
      name: "Sarmich MFY"
    },
    {
      id: "6211",
      district_id: "139",
      name: "Sh.Rashidov MFY"
    },
    {
      id: "6212",
      district_id: "139",
      name: "Shirin QFY"
    },
    {
      id: "6213",
      district_id: "139",
      name: "Sovotobod MFY"
    },
    {
      id: "6214",
      district_id: "139",
      name: "Tinchlik QFY"
    },
    {
      id: "6215",
      district_id: "139",
      name: "U. Yusupov MFY"
    },
    {
      id: "6216",
      district_id: "139",
      name: "Uchturgon MFY"
    },
    {
      id: "6217",
      district_id: "139",
      name: "Umurzoqobod MFY"
    },
    {
      id: "6218",
      district_id: "139",
      name: "Usmonobod QFY"
    },
    {
      id: "6219",
      district_id: "139",
      name: "Usmonobod MFY"
    },
    {
      id: "6220",
      district_id: "139",
      name: "Yangibo`ston MFY"
    },
    {
      id: "6221",
      district_id: "139",
      name: "Yangiobod MFY"
    },
    {
      id: "6222",
      district_id: "140",
      name: "Etti urug` MFY"
    },
    {
      id: "6223",
      district_id: "140",
      name: "A .Turdiev QFY"
    },
    {
      id: "6224",
      district_id: "140",
      name: "A.Qahhor MFY"
    },
    {
      id: "6225",
      district_id: "140",
      name: "A.Sultonov MFY"
    },
    {
      id: "6226",
      district_id: "140",
      name: "A.Yassaviy MFY"
    },
    {
      id: "6227",
      district_id: "140",
      name: "Beshbuloq MFY"
    },
    {
      id: "6228",
      district_id: "140",
      name: "Beshbuloq QFY"
    },
    {
      id: "6229",
      district_id: "140",
      name: "Baxmal MFY"
    },
    {
      id: "6230",
      district_id: "140",
      name: "Birlashgan MFY"
    },
    {
      id: "6231",
      district_id: "140",
      name: "Birlashgan MFY"
    },
    {
      id: "6232",
      district_id: "140",
      name: "Boyovut MFY"
    },
    {
      id: "6233",
      district_id: "140",
      name: "Chortok MFY"
    },
    {
      id: "6234",
      district_id: "140",
      name: "Chortoq QFY"
    },
    {
      id: "6235",
      district_id: "140",
      name: "Chorvador MFY"
    },
    {
      id: "6236",
      district_id: "140",
      name: "Dehqonobod SHFY"
    },
    {
      id: "6237",
      district_id: "140",
      name: "Do`stlik MFY"
    },
    {
      id: "6238",
      district_id: "140",
      name: "Do`stlik MFY"
    },
    {
      id: "6239",
      district_id: "140",
      name: "Furqat MFY"
    },
    {
      id: "6240",
      district_id: "140",
      name: "G.Yunusov MFY"
    },
    {
      id: "6241",
      district_id: "140",
      name: "Islomobod MFY"
    },
    {
      id: "6242",
      district_id: "140",
      name: "Islomobod MFY"
    },
    {
      id: "6243",
      district_id: "140",
      name: "M.Zokirov MFY"
    },
    {
      id: "6244",
      district_id: "140",
      name: "Mevazor MFY"
    },
    {
      id: "6245",
      district_id: "140",
      name: "Madaniyat MFY"
    },
    {
      id: "6246",
      district_id: "140",
      name: "Mustaqillik MFY"
    },
    {
      id: "6247",
      district_id: "140",
      name: "Navoiy MFY"
    },
    {
      id: "6248",
      district_id: "140",
      name: "Oq oltin MFY"
    },
    {
      id: "6249",
      district_id: "140",
      name: "Oltin O`rda QFY"
    },
    {
      id: "6250",
      district_id: "140",
      name: "Oltin Tepa QFY"
    },
    {
      id: "6251",
      district_id: "140",
      name: "Sh.Eshonqulov MFY"
    },
    {
      id: "6252",
      district_id: "140",
      name: "Shark haqiqati MFY"
    },
    {
      id: "6253",
      district_id: "140",
      name: "Soxilobod QFY"
    },
    {
      id: "6254",
      district_id: "140",
      name: "Soyibobod QFY"
    },
    {
      id: "6255",
      district_id: "140",
      name: "T`azizov MFY"
    },
    {
      id: "6256",
      district_id: "140",
      name: "Tajribakor MFY"
    },
    {
      id: "6257",
      district_id: "140",
      name: "Turkiston MFY"
    },
    {
      id: "6258",
      district_id: "140",
      name: "Turkovul MFY"
    },
    {
      id: "6259",
      district_id: "140",
      name: "Uyuvli MFY"
    },
    {
      id: "6260",
      district_id: "140",
      name: "O`zbekiston MFY"
    },
    {
      id: "6261",
      district_id: "140",
      name: "O`zbekiston MFY"
    },
    {
      id: "6262",
      district_id: "140",
      name: "O`zbekiston MFY"
    },
    {
      id: "6263",
      district_id: "140",
      name: "X.Olimjon 1-MFY"
    },
    {
      id: "6264",
      district_id: "140",
      name: "X.Olimjon 2-MFY"
    },
    {
      id: "6265",
      district_id: "140",
      name: "Xalqobod MFY"
    },
    {
      id: "6266",
      district_id: "140",
      name: "Xumo QFY"
    },
    {
      id: "6267",
      district_id: "140",
      name: "Yangi Hayot MFY"
    },
    {
      id: "6268",
      district_id: "140",
      name: "Yulduz - 1 MFY"
    },
    {
      id: "6269",
      district_id: "140",
      name: "Zarbdor MFY"
    },
    {
      id: "6270",
      district_id: "140",
      name: "Zarbdor QFY"
    },
    {
      id: "6271",
      district_id: "141",
      name: "Ahillik MFY"
    },
    {
      id: "6272",
      district_id: "141",
      name: "Baxor QFY"
    },
    {
      id: "6273",
      district_id: "141",
      name: "Bo`ston MFY"
    },
    {
      id: "6274",
      district_id: "141",
      name: "Do`stlik QFY"
    },
    {
      id: "6275",
      district_id: "141",
      name: "Farxod MFY"
    },
    {
      id: "6276",
      district_id: "141",
      name: "Istiqlol MFY"
    },
    {
      id: "6277",
      district_id: "141",
      name: "Madaniyat MFY"
    },
    {
      id: "6278",
      district_id: "141",
      name: "Muqimiy MFY"
    },
    {
      id: "6279",
      district_id: "141",
      name: "Namuna MFY"
    },
    {
      id: "6280",
      district_id: "141",
      name: "Navbaxor MFY"
    },
    {
      id: "6281",
      district_id: "141",
      name: "Sayqal MFY"
    },
    {
      id: "6282",
      district_id: "141",
      name: "Sh.Rashidov MFY"
    },
    {
      id: "6283",
      district_id: "141",
      name: "T`axmedov MFY"
    },
    {
      id: "6284",
      district_id: "141",
      name: "Taraqqiyot MFY"
    },
    {
      id: "6285",
      district_id: "141",
      name: "U.Yusupov MFY"
    },
    {
      id: "6286",
      district_id: "141",
      name: "Ulug`obod QFY"
    },
    {
      id: "6287",
      district_id: "141",
      name: "Yangi hayot MFY"
    },
    {
      id: "6288",
      district_id: "142",
      name: "Beruniy MFY"
    },
    {
      id: "6289",
      district_id: "142",
      name: "Birlashgan QFY"
    },
    {
      id: "6290",
      district_id: "142",
      name: "Bog`iston MFY"
    },
    {
      id: "6291",
      district_id: "142",
      name: "Boxoriston QFY"
    },
    {
      id: "6292",
      district_id: "142",
      name: "Dehqonobod MFY"
    },
    {
      id: "6293",
      district_id: "142",
      name: "Do`ngariq MFY"
    },
    {
      id: "6294",
      district_id: "142",
      name: "Juvonsiyroq MFY"
    },
    {
      id: "6295",
      district_id: "142",
      name: "M.Ulug`bek MFY"
    },
    {
      id: "6296",
      district_id: "142",
      name: "Mexnatobod QFY"
    },
    {
      id: "6297",
      district_id: "142",
      name: "Mirzacho`l QFY"
    },
    {
      id: "6298",
      district_id: "142",
      name: "Navbaxor QFY"
    },
    {
      id: "6299",
      district_id: "142",
      name: "Navro`z MFY"
    },
    {
      id: "6300",
      district_id: "142",
      name: "Nurafshon QFY"
    },
    {
      id: "6301",
      district_id: "142",
      name: "Oqoltin MFY"
    },
    {
      id: "6302",
      district_id: "142",
      name: "Oqoltin QFY"
    },
    {
      id: "6303",
      district_id: "142",
      name: "Oydin MFY"
    },
    {
      id: "6304",
      district_id: "142",
      name: "T`ahmedov MFY"
    },
    {
      id: "6305",
      district_id: "142",
      name: "Toshkent MFY"
    },
    {
      id: "6306",
      district_id: "142",
      name: "Toshkent QFY"
    },
    {
      id: "6307",
      district_id: "142",
      name: "U.Yusupov MFY"
    },
    {
      id: "6308",
      district_id: "142",
      name: "Yangi hayot-9 MFY"
    },
    {
      id: "6309",
      district_id: "142",
      name: "Yangiovul MFY"
    },
    {
      id: "6310",
      district_id: "142",
      name: "Yangihayot MFY"
    },
    {
      id: "6311",
      district_id: "142",
      name: "Yo`ldoshobod QFY"
    },
    {
      id: "6312",
      district_id: "143",
      name: "A.Ikromov MFY"
    },
    {
      id: "6313",
      district_id: "143",
      name: "A.Navoiy MFY"
    },
    {
      id: "6314",
      district_id: "143",
      name: "A.Yassaviy MFY"
    },
    {
      id: "6315",
      district_id: "143",
      name: "Ahillik QFY"
    },
    {
      id: "6316",
      district_id: "143",
      name: "Andijon QFY"
    },
    {
      id: "6317",
      district_id: "143",
      name: "Bog`iston MFY"
    },
    {
      id: "6318",
      district_id: "143",
      name: "Bo`ston QFY"
    },
    {
      id: "6319",
      district_id: "143",
      name: "Do`stlik MFY"
    },
    {
      id: "6320",
      district_id: "143",
      name: "Farg`ona SHFY"
    },
    {
      id: "6321",
      district_id: "143",
      name: "G.G`ulom MFY"
    },
    {
      id: "6322",
      district_id: "143",
      name: "G.G`ulom MFY"
    },
    {
      id: "6323",
      district_id: "143",
      name: "G`alaba MFY"
    },
    {
      id: "6324",
      district_id: "143",
      name: "Mustaqillik MFY"
    },
    {
      id: "6325",
      district_id: "143",
      name: "Obod MFY"
    },
    {
      id: "6326",
      district_id: "143",
      name: "S.Rahimov MFY"
    },
    {
      id: "6327",
      district_id: "143",
      name: "Sardoba SHFY"
    },
    {
      id: "6328",
      district_id: "143",
      name: "Shodlik QFY"
    },
    {
      id: "6329",
      district_id: "143",
      name: "Sobirobod MFY"
    },
    {
      id: "6330",
      district_id: "143",
      name: "U.Yusupov MFY"
    },
    {
      id: "6331",
      district_id: "143",
      name: "Uchtom MFY"
    },
    {
      id: "6332",
      district_id: "143",
      name: "Yangi hayot MFY"
    },
    {
      id: "6333",
      district_id: "143",
      name: "Z.Bobur MFY"
    },
    {
      id: "6334",
      district_id: "143",
      name: "Zarafshon MFY"
    },
    {
      id: "6335",
      district_id: "144",
      name: "\"Axchob\" MFY"
    },
    {
      id: "6336",
      district_id: "144",
      name: "\"Baxmal\" MFY"
    },
    {
      id: "6337",
      district_id: "144",
      name: "\"Boltoy\" MFY"
    },
    {
      id: "6338",
      district_id: "144",
      name: "\"Do`stlik\" MFY"
    },
    {
      id: "6339",
      district_id: "144",
      name: "\"Gulbuloq\" MFY"
    },
    {
      id: "6340",
      district_id: "144",
      name: "\"Guliston\" MFY"
    },
    {
      id: "6341",
      district_id: "144",
      name: "\"Istiqlol\" QFY"
    },
    {
      id: "6342",
      district_id: "144",
      name: "\"Ittifoq\" MFY"
    },
    {
      id: "6343",
      district_id: "144",
      name: "\"Ittifoq\" QFY"
    },
    {
      id: "6344",
      district_id: "144",
      name: "\"Kalpe\" MFY"
    },
    {
      id: "6345",
      district_id: "144",
      name: "\"Mustaqillik\" MFY"
    },
    {
      id: "6346",
      district_id: "144",
      name: "\"Namuna\" MFY"
    },
    {
      id: "6347",
      district_id: "144",
      name: "\"Navqiron\" MFY"
    },
    {
      id: "6348",
      district_id: "144",
      name: "\"Nurmatobod\" MFY"
    },
    {
      id: "6349",
      district_id: "144",
      name: "\"Nurota\" QFY"
    },
    {
      id: "6350",
      district_id: "144",
      name: "\"Obodon\" MFY"
    },
    {
      id: "6351",
      district_id: "144",
      name: "\"Olg`abos\" MFY"
    },
    {
      id: "6352",
      district_id: "144",
      name: "\"Otamakon\" MFY"
    },
    {
      id: "6353",
      district_id: "144",
      name: "\"O`zbekiston\" MFY"
    },
    {
      id: "6354",
      district_id: "144",
      name: "\"O`zbekiston\" QFY"
    },
    {
      id: "6355",
      district_id: "144",
      name: "\"Parpi ota\" MFY"
    },
    {
      id: "6356",
      district_id: "144",
      name: "\"Paxtakon\" MFY"
    },
    {
      id: "6357",
      district_id: "144",
      name: "\"Paxtaobod\" MFY"
    },
    {
      id: "6358",
      district_id: "144",
      name: "\"Paymard\" MFY"
    },
    {
      id: "6359",
      district_id: "144",
      name: "\"Qorjou\" MFY"
    },
    {
      id: "6360",
      district_id: "144",
      name: "\"Qozoqovul\" MFY"
    },
    {
      id: "6361",
      district_id: "144",
      name: "\"Qumovul\" MFY"
    },
    {
      id: "6362",
      district_id: "144",
      name: "\"Qurultoy\" MFY"
    },
    {
      id: "6363",
      district_id: "144",
      name: "\"Robot\" MFY"
    },
    {
      id: "6364",
      district_id: "144",
      name: "\"Sentob\" MFY"
    },
    {
      id: "6365",
      district_id: "144",
      name: "\"Saritepa\" MFY"
    },
    {
      id: "6366",
      district_id: "144",
      name: "\"Sayxun\" SHFY"
    },
    {
      id: "6367",
      district_id: "144",
      name: "\"Sh. Rashidov\" MFY"
    },
    {
      id: "6368",
      district_id: "144",
      name: "\"Shal-Kushek\" MFY"
    },
    {
      id: "6369",
      district_id: "144",
      name: "\"Shodlik\" MFY"
    },
    {
      id: "6370",
      district_id: "144",
      name: "\"Sho`ro`zak\" MFY"
    },
    {
      id: "6371",
      district_id: "144",
      name: "\"Sho`ro`zak\" SHFY"
    },
    {
      id: "6372",
      district_id: "144",
      name: "\"Soxil\" SHFY"
    },
    {
      id: "6373",
      district_id: "144",
      name: "\"Turkovul\" MFY"
    },
    {
      id: "6374",
      district_id: "144",
      name: "\"Turon\" MFY"
    },
    {
      id: "6375",
      district_id: "144",
      name: "\"Uchqun\" MFY"
    },
    {
      id: "6376",
      district_id: "144",
      name: "\"Xisor\" MFY"
    },
    {
      id: "6377",
      district_id: "144",
      name: "\"Yangi-Hayot\" MFY"
    },
    {
      id: "6378",
      district_id: "144",
      name: "\"Yangi-Hayot\" QFY"
    },
    {
      id: "6379",
      district_id: "144",
      name: "\"Yoshlik\" MFY"
    },
    {
      id: "6380",
      district_id: "144",
      name: "\"Yulduz\" MFY"
    },
    {
      id: "6381",
      district_id: "144",
      name: "\"Zarbdor\" MFY"
    },
    {
      id: "6382",
      district_id: "144",
      name: "\"Zarbdor-1\" MFY"
    },
    {
      id: "6383",
      district_id: "145",
      name: "Baxmal MFY"
    },
    {
      id: "6384",
      district_id: "145",
      name: "Birlashgan MFY"
    },
    {
      id: "6385",
      district_id: "145",
      name: "Bog`ishamol MFY"
    },
    {
      id: "6386",
      district_id: "145",
      name: "Bo`ston MFY"
    },
    {
      id: "6387",
      district_id: "145",
      name: "Cho`lquvar QFY"
    },
    {
      id: "6388",
      district_id: "145",
      name: "Chubor MFY"
    },
    {
      id: "6389",
      district_id: "145",
      name: "Do`stlik MFY"
    },
    {
      id: "6390",
      district_id: "145",
      name: "F.Xo`jaev MFY"
    },
    {
      id: "6391",
      district_id: "145",
      name: "Guliston QFY"
    },
    {
      id: "6392",
      district_id: "145",
      name: "Gulzor QFY"
    },
    {
      id: "6393",
      district_id: "145",
      name: "Gumbaz MFY"
    },
    {
      id: "6394",
      district_id: "145",
      name: "Manas MFY"
    },
    {
      id: "6395",
      district_id: "145",
      name: "Navoiy MFY"
    },
    {
      id: "6396",
      district_id: "145",
      name: "Navro`z MFY"
    },
    {
      id: "6397",
      district_id: "145",
      name: "Paxtakor MFY"
    },
    {
      id: "6398",
      district_id: "145",
      name: "Paxtaobod SHFY"
    },
    {
      id: "6399",
      district_id: "145",
      name: "Qo`rg`ontepa QFY"
    },
    {
      id: "6400",
      district_id: "145",
      name: "Ravot MFY"
    },
    {
      id: "6401",
      district_id: "145",
      name: "S.Raximov MFY"
    },
    {
      id: "6402",
      district_id: "145",
      name: "Ulug`bek MFY"
    },
    {
      id: "6403",
      district_id: "145",
      name: "Ulug`bek MFY"
    },
    {
      id: "6404",
      district_id: "145",
      name: "H.Olimjon MFY"
    },
    {
      id: "6405",
      district_id: "145",
      name: "Xalqobod MFY"
    },
    {
      id: "6406",
      district_id: "145",
      name: "Yangiobod QFY"
    },
    {
      id: "6407",
      district_id: "145",
      name: "Yangiqishloq QFY"
    },
    {
      id: "6408",
      district_id: "145",
      name: "Zomin MFY"
    },
    {
      id: "6409",
      district_id: "145",
      name: "Zominlik MFY"
    },
    {
      id: "6410",
      district_id: "146",
      name: "Bekjonov MFY"
    },
    {
      id: "6411",
      district_id: "146",
      name: "Balki yogoch eli MFY"
    },
    {
      id: "6412",
      district_id: "146",
      name: "Baxor-1 MFY"
    },
    {
      id: "6413",
      district_id: "146",
      name: "Baxor-3 MFY"
    },
    {
      id: "6414",
      district_id: "146",
      name: "Baxt shaxar"
    },
    {
      id: "6415",
      district_id: "146",
      name: "Bogora MFY"
    },
    {
      id: "6416",
      district_id: "146",
      name: "Boruxov MFY"
    },
    {
      id: "6417",
      district_id: "146",
      name: "C.Raximov MFY"
    },
    {
      id: "6418",
      district_id: "146",
      name: "Chultukay QFY"
    },
    {
      id: "6419",
      district_id: "146",
      name: "Dehqonobod MFY"
    },
    {
      id: "6420",
      district_id: "146",
      name: "Dehqonobod MFY"
    },
    {
      id: "6421",
      district_id: "146",
      name: "Do`stlik-2 MFY"
    },
    {
      id: "6422",
      district_id: "146",
      name: "Do`stlik-6 MFY"
    },
    {
      id: "6423",
      district_id: "146",
      name: "Furqat MFY"
    },
    {
      id: "6424",
      district_id: "146",
      name: "Kozokovul MFY"
    },
    {
      id: "6425",
      district_id: "146",
      name: "Quyosh MFY"
    },
    {
      id: "6426",
      district_id: "146",
      name: "Malik QFY"
    },
    {
      id: "6427",
      district_id: "146",
      name: "Malik MFY"
    },
    {
      id: "6428",
      district_id: "146",
      name: "Navbaxor MFY"
    },
    {
      id: "6429",
      district_id: "146",
      name: "Navoiy MFY"
    },
    {
      id: "6430",
      district_id: "146",
      name: "Navro`z MFY"
    },
    {
      id: "6431",
      district_id: "146",
      name: "Navro`z-3 MFY"
    },
    {
      id: "6432",
      district_id: "146",
      name: "Oq-yo`l MFY"
    },
    {
      id: "6433",
      district_id: "146",
      name: "Paxtakor MFY"
    },
    {
      id: "6434",
      district_id: "146",
      name: "Paxtakor-4 MFY"
    },
    {
      id: "6435",
      district_id: "146",
      name: "Paxtazor QFY"
    },
    {
      id: "6436",
      district_id: "146",
      name: "R. Jurabaev MFY"
    },
    {
      id: "6437",
      district_id: "146",
      name: "S.Raximov MFY"
    },
    {
      id: "6438",
      district_id: "146",
      name: "Samarqand MFY"
    },
    {
      id: "6439",
      district_id: "146",
      name: "Sh.Jumabaev MFY"
    },
    {
      id: "6440",
      district_id: "146",
      name: "Sh.Rashidov MFY"
    },
    {
      id: "6441",
      district_id: "146",
      name: "Shirin-5 MFY"
    },
    {
      id: "6442",
      district_id: "146",
      name: "Sholikor QFY"
    },
    {
      id: "6443",
      district_id: "146",
      name: "Sholikor MFY"
    },
    {
      id: "6444",
      district_id: "146",
      name: "Sirdaryo QFY"
    },
    {
      id: "6445",
      district_id: "146",
      name: "Sirdaryo MFY"
    },
    {
      id: "6446",
      district_id: "146",
      name: "Sirdaryo shaxar"
    },
    {
      id: "6447",
      district_id: "146",
      name: "Tinchlik-1 MFY"
    },
    {
      id: "6448",
      district_id: "146",
      name: "Turkiston MFY"
    },
    {
      id: "6449",
      district_id: "146",
      name: "Turon QFY"
    },
    {
      id: "6450",
      district_id: "146",
      name: "U.Yusupov QFY"
    },
    {
      id: "6451",
      district_id: "146",
      name: "Ulug`bek MFY"
    },
    {
      id: "6452",
      district_id: "146",
      name: "O`zbekiston MFY"
    },
    {
      id: "6453",
      district_id: "146",
      name: "Haqiqat QFY"
    },
    {
      id: "6454",
      district_id: "146",
      name: "Haqiqat MFY"
    },
    {
      id: "6455",
      district_id: "146",
      name: "Haqiqat-2 MFY"
    },
    {
      id: "6456",
      district_id: "146",
      name: "Haqiqat-7 MFY"
    },
    {
      id: "6457",
      district_id: "146",
      name: "Xalkobod QFY"
    },
    {
      id: "6458",
      district_id: "146",
      name: "Hamza MFY"
    },
    {
      id: "6459",
      district_id: "146",
      name: "Yangiobod MFY"
    },
    {
      id: "6460",
      district_id: "146",
      name: "Yoshlar MFY"
    },
    {
      id: "6461",
      district_id: "146",
      name: "Yoshlik-2 MFY"
    },
    {
      id: "6462",
      district_id: "146",
      name: "Yoshlik-4 MFY"
    },
    {
      id: "6463",
      district_id: "146",
      name: "Ziyokor MFY"
    },
    {
      id: "6464",
      district_id: "147",
      name: "Amur Temur MFY"
    },
    {
      id: "6465",
      district_id: "147",
      name: "ashi MFY"
    },
    {
      id: "6466",
      district_id: "147",
      name: "Binokor QFY"
    },
    {
      id: "6467",
      district_id: "147",
      name: "Bog`iston MFY"
    },
    {
      id: "6468",
      district_id: "147",
      name: "Boymurodobod MFY"
    },
    {
      id: "6469",
      district_id: "147",
      name: "Chamanzor QFY"
    },
    {
      id: "6470",
      district_id: "147",
      name: "Chamanzor MFY"
    },
    {
      id: "6471",
      district_id: "147",
      name: "Chambil MFY"
    },
    {
      id: "6472",
      district_id: "147",
      name: "Chiroy MFY"
    },
    {
      id: "6473",
      district_id: "147",
      name: "Do`stlik MFY"
    },
    {
      id: "6474",
      district_id: "147",
      name: "Do`stlik MFY"
    },
    {
      id: "6475",
      district_id: "147",
      name: "Farxod QFY"
    },
    {
      id: "6476",
      district_id: "147",
      name: "Fayziobod MFY"
    },
    {
      id: "6477",
      district_id: "147",
      name: "Gulbaxor QFY"
    },
    {
      id: "6478",
      district_id: "147",
      name: "Gulbaxor MFY"
    },
    {
      id: "6479",
      district_id: "147",
      name: "Islom MFY"
    },
    {
      id: "6480",
      district_id: "147",
      name: "Istiqlol MFY"
    },
    {
      id: "6481",
      district_id: "147",
      name: "Karvonsaroy-1 MFY"
    },
    {
      id: "6482",
      district_id: "147",
      name: "Karvonsaroy-2 MFY"
    },
    {
      id: "6483",
      district_id: "147",
      name: "Kaxramon QFY"
    },
    {
      id: "6484",
      district_id: "147",
      name: "Qayirma MFY"
    },
    {
      id: "6485",
      district_id: "147",
      name: "Kayirma MFY"
    },
    {
      id: "6486",
      district_id: "147",
      name: "Koraqum MFY"
    },
    {
      id: "6487",
      district_id: "147",
      name: "Kukoni .Karapchi MFY"
    },
    {
      id: "6488",
      district_id: "147",
      name: "Qo`shqand MFY"
    },
    {
      id: "6489",
      district_id: "147",
      name: "Kuzi-Takaev MFY"
    },
    {
      id: "6490",
      district_id: "147",
      name: "Mustaqillik MFY"
    },
    {
      id: "6491",
      district_id: "147",
      name: "Navoiy MFY"
    },
    {
      id: "6492",
      district_id: "147",
      name: "Navoiy MFY"
    },
    {
      id: "6493",
      district_id: "147",
      name: "Navro`z MFY"
    },
    {
      id: "6494",
      district_id: "147",
      name: "Okchangal MFY"
    },
    {
      id: "6495",
      district_id: "147",
      name: "Parchayuz MFY"
    },
    {
      id: "6496",
      district_id: "147",
      name: "Pastki-Kayirma MFY"
    },
    {
      id: "6497",
      district_id: "147",
      name: "Paxtakor QFY"
    },
    {
      id: "6498",
      district_id: "147",
      name: "Rugund MFY"
    },
    {
      id: "6499",
      district_id: "147",
      name: "Sharkobod MFY"
    },
    {
      id: "6500",
      district_id: "147",
      name: "Soxibkor QFY"
    },
    {
      id: "6501",
      district_id: "147",
      name: "Soxibkor MFY"
    },
    {
      id: "6502",
      district_id: "147",
      name: "Tinchlik MFY"
    },
    {
      id: "6503",
      district_id: "147",
      name: "Turkiston QFY"
    },
    {
      id: "6504",
      district_id: "147",
      name: "Turkiston MFY"
    },
    {
      id: "6505",
      district_id: "147",
      name: "Uvok MFY"
    },
    {
      id: "6506",
      district_id: "147",
      name: "O`zbekiston Tukinchiligi MFY"
    },
    {
      id: "6507",
      district_id: "147",
      name: "Xovos Sh.FY"
    },
    {
      id: "6508",
      district_id: "147",
      name: "Xovotog` QFY"
    },
    {
      id: "6509",
      district_id: "147",
      name: "Xusnobod QFY"
    },
    {
      id: "6510",
      district_id: "147",
      name: "Zafarobod QFY"
    },
    {
      id: "6511",
      district_id: "148",
      name: "A.Qodiriy MFY"
    },
    {
      id: "6512",
      district_id: "148",
      name: "A.Temur MFY"
    },
    {
      id: "6513",
      district_id: "148",
      name: "Do`stlik MFY"
    },
    {
      id: "6514",
      district_id: "148",
      name: "Farhod MFY"
    },
    {
      id: "6515",
      district_id: "148",
      name: "M.Ulugbek MFY"
    },
    {
      id: "6516",
      district_id: "148",
      name: "Nurobod MFY"
    },
    {
      id: "6517",
      district_id: "149",
      name: "A.Jomiy MFY"
    },
    {
      id: "6518",
      district_id: "149",
      name: "Binokor MFY"
    },
    {
      id: "6519",
      district_id: "149",
      name: "Ma`rifat MFY"
    },
    {
      id: "6520",
      district_id: "149",
      name: "Navro`zobod MFY"
    },
    {
      id: "6521",
      district_id: "149",
      name: "Obod yurt MFY"
    },
    {
      id: "6522",
      district_id: "149",
      name: "Shodlik MFY"
    },
    {
      id: "6523",
      district_id: "149",
      name: "T.Malik ify"
    },
    {
      id: "6524",
      district_id: "149",
      name: "Z.Bobur MFY"
    },
    {
      id: "6525",
      district_id: "150",
      name: "8-mart MFY"
    },
    {
      id: "6526",
      district_id: "150",
      name: "Beruniy MFY"
    },
    {
      id: "6527",
      district_id: "150",
      name: "Bobotog MFY"
    },
    {
      id: "6528",
      district_id: "150",
      name: "Bogi Surx MFY"
    },
    {
      id: "6529",
      district_id: "150",
      name: "Buston MFY"
    },
    {
      id: "6530",
      district_id: "150",
      name: "Chigirik kurgoni MFY"
    },
    {
      id: "6531",
      district_id: "150",
      name: "Chinniobod MFY"
    },
    {
      id: "6532",
      district_id: "150",
      name: "Chotkol MFY"
    },
    {
      id: "6533",
      district_id: "150",
      name: "Chotkol-1 MFY"
    },
    {
      id: "6534",
      district_id: "150",
      name: "Dorilfunun MFY"
    },
    {
      id: "6535",
      district_id: "150",
      name: "Do`stlik MFY"
    },
    {
      id: "6536",
      district_id: "150",
      name: "g`Gulom MFY"
    },
    {
      id: "6537",
      district_id: "150",
      name: "Geolog MFY"
    },
    {
      id: "6538",
      district_id: "150",
      name: "Grum MFY"
    },
    {
      id: "6539",
      district_id: "150",
      name: "Gulbog MFY"
    },
    {
      id: "6540",
      district_id: "150",
      name: "Gulzor MFY"
    },
    {
      id: "6541",
      district_id: "150",
      name: "Guzal MFY"
    },
    {
      id: "6542",
      district_id: "150",
      name: "Hakkarman MFY"
    },
    {
      id: "6543",
      district_id: "150",
      name: "Istiqlol MFY"
    },
    {
      id: "6544",
      district_id: "150",
      name: "Jigariston MFY"
    },
    {
      id: "6545",
      district_id: "150",
      name: "Karvon MFY"
    },
    {
      id: "6546",
      district_id: "150",
      name: "Kimyogar-051 MFY"
    },
    {
      id: "6547",
      district_id: "150",
      name: "Korabog MFY"
    },
    {
      id: "6548",
      district_id: "150",
      name: "Kotogon MFY"
    },
    {
      id: "6549",
      district_id: "150",
      name: "Krasnogorsk qo`rg`oni MFY"
    },
    {
      id: "6550",
      district_id: "150",
      name: "KuktErak MFY"
    },
    {
      id: "6551",
      district_id: "150",
      name: "LashkErak MFY"
    },
    {
      id: "6552",
      district_id: "150",
      name: "Maydon MFY"
    },
    {
      id: "6553",
      district_id: "150",
      name: "Mustakillik MFY"
    },
    {
      id: "6554",
      district_id: "150",
      name: "Mustakillik-2 MFY"
    },
    {
      id: "6555",
      district_id: "150",
      name: "Navbaxor MFY"
    },
    {
      id: "6556",
      district_id: "150",
      name: "Navruz-1 MFY"
    },
    {
      id: "6557",
      district_id: "150",
      name: "Navruz-2 MFY"
    },
    {
      id: "6558",
      district_id: "150",
      name: "Nishbosh MFY"
    },
    {
      id: "6559",
      district_id: "150",
      name: "Nurchi MFY"
    },
    {
      id: "6560",
      district_id: "150",
      name: "Nurobod MFY"
    },
    {
      id: "6561",
      district_id: "150",
      name: "Oblik MFY"
    },
    {
      id: "6562",
      district_id: "150",
      name: "Obod MFY"
    },
    {
      id: "6563",
      district_id: "150",
      name: "Opartak MFY"
    },
    {
      id: "6564",
      district_id: "150",
      name: "Ozodlik MFY"
    },
    {
      id: "6565",
      district_id: "150",
      name: "Said-ota MFY"
    },
    {
      id: "6566",
      district_id: "150",
      name: "Samarchug MFY"
    },
    {
      id: "6567",
      district_id: "150",
      name: "Soglom MFY"
    },
    {
      id: "6568",
      district_id: "150",
      name: "TarakQiyot MFY"
    },
    {
      id: "6569",
      district_id: "150",
      name: "Tolbulok MFY"
    },
    {
      id: "6570",
      district_id: "150",
      name: "Ulugb?k MFY"
    },
    {
      id: "6571",
      district_id: "150",
      name: "Yangi Bogi Surx MFY"
    },
    {
      id: "6572",
      district_id: "150",
      name: "Yangi Gushsoy MFY"
    },
    {
      id: "6573",
      district_id: "150",
      name: "Yangi Xayot MFY"
    },
    {
      id: "6574",
      district_id: "150",
      name: "Yangiobod MFY"
    },
    {
      id: "6575",
      district_id: "150",
      name: "Yoshlik MFY"
    },
    {
      id: "6576",
      district_id: "150",
      name: "Zarubuloq MFY"
    },
    {
      id: "6577",
      district_id: "151",
      name: "A.Mirzaev MFY"
    },
    {
      id: "6578",
      district_id: "151",
      name: "A.Qozoqboev MFY"
    },
    {
      id: "6579",
      district_id: "151",
      name: "Achamayli MFY"
    },
    {
      id: "6580",
      district_id: "151",
      name: "Bekobod QFY"
    },
    {
      id: "6581",
      district_id: "151",
      name: "Berdiboy MFY"
    },
    {
      id: "6582",
      district_id: "151",
      name: "Beshyuz MFY"
    },
    {
      id: "6583",
      district_id: "151",
      name: "Baxoriston MFY(jamoatchi)"
    },
    {
      id: "6584",
      district_id: "151",
      name: "Baxoriston QFY"
    },
    {
      id: "6585",
      district_id: "151",
      name: "Bobur Mirzo MFY"
    },
    {
      id: "6586",
      district_id: "151",
      name: "Bog`ishomol MFY"
    },
    {
      id: "6587",
      district_id: "151",
      name: "Bo`ston MFY"
    },
    {
      id: "6588",
      district_id: "151",
      name: "Chanoq QFY"
    },
    {
      id: "6589",
      district_id: "151",
      name: "Dexqonobod MFY"
    },
    {
      id: "6590",
      district_id: "151",
      name: "Dalvarzin QFY"
    },
    {
      id: "6591",
      district_id: "151",
      name: "Do`stlik MFY"
    },
    {
      id: "6592",
      district_id: "151",
      name: "Farxod MFY"
    },
    {
      id: "6593",
      district_id: "151",
      name: "Guliston MFY"
    },
    {
      id: "6594",
      district_id: "151",
      name: "Guliston QFY"
    },
    {
      id: "6595",
      district_id: "151",
      name: "Gulzor MFY"
    },
    {
      id: "6596",
      district_id: "151",
      name: "Isfara MFY"
    },
    {
      id: "6597",
      district_id: "151",
      name: "Istiqlol MFY"
    },
    {
      id: "6598",
      district_id: "151",
      name: "Jumabozor QFY"
    },
    {
      id: "6599",
      district_id: "151",
      name: "Mexnatobod QFY"
    },
    {
      id: "6600",
      district_id: "151",
      name: "Madaniyat QFY"
    },
    {
      id: "6601",
      district_id: "151",
      name: "Mallaboy MFY"
    },
    {
      id: "6602",
      district_id: "151",
      name: "Nayman MFY"
    },
    {
      id: "6603",
      district_id: "151",
      name: "Nazarboy MFY"
    },
    {
      id: "6604",
      district_id: "151",
      name: "Oltin vodiy MFY"
    },
    {
      id: "6605",
      district_id: "151",
      name: "Oqtepa MFY"
    },
    {
      id: "6606",
      district_id: "151",
      name: "Oxunbobo?v QFY"
    },
    {
      id: "6607",
      district_id: "151",
      name: "O`rikzor MFY"
    },
    {
      id: "6608",
      district_id: "151",
      name: "O`zbekiston MFY"
    },
    {
      id: "6609",
      district_id: "151",
      name: "O`zbekobod MFY"
    },
    {
      id: "6610",
      district_id: "151",
      name: "Parchayuz MFY"
    },
    {
      id: "6611",
      district_id: "151",
      name: "Pastki kerayit MFY"
    },
    {
      id: "6612",
      district_id: "151",
      name: "Paxtakor MFY"
    },
    {
      id: "6613",
      district_id: "151",
      name: "Pushkin QFY"
    },
    {
      id: "6614",
      district_id: "151",
      name: "Qiyot QFY"
    },
    {
      id: "6615",
      district_id: "151",
      name: "Qolg`ansir MFY"
    },
    {
      id: "6616",
      district_id: "151",
      name: "Qora qo`yli MFY"
    },
    {
      id: "6617",
      district_id: "151",
      name: "Qo`qoni MFY"
    },
    {
      id: "6618",
      district_id: "151",
      name: "Qo`rg`on MFY"
    },
    {
      id: "6619",
      district_id: "151",
      name: "Qushchi MFY"
    },
    {
      id: "6620",
      district_id: "151",
      name: "Qushtamg`ali MFY"
    },
    {
      id: "6621",
      district_id: "151",
      name: "Saryuz MFY"
    },
    {
      id: "6622",
      district_id: "151",
      name: "Savrak MFY"
    },
    {
      id: "6623",
      district_id: "151",
      name: "Shova MFY"
    },
    {
      id: "6624",
      district_id: "151",
      name: "Terakzor MFY"
    },
    {
      id: "6625",
      district_id: "151",
      name: "Taqachi MFY"
    },
    {
      id: "6626",
      district_id: "151",
      name: "Turkman MFY"
    },
    {
      id: "6627",
      district_id: "151",
      name: "Turon MFY(jamoatchi)"
    },
    {
      id: "6628",
      district_id: "151",
      name: "Uyas MFY"
    },
    {
      id: "6629",
      district_id: "151",
      name: "Xamza MFY"
    },
    {
      id: "6630",
      district_id: "151",
      name: "Xonobod MFY(jamoatchi)"
    },
    {
      id: "6631",
      district_id: "151",
      name: "Xos MFY"
    },
    {
      id: "6632",
      district_id: "151",
      name: "Yangi Hayot QFY"
    },
    {
      id: "6633",
      district_id: "151",
      name: "Yangibozor MFY"
    },
    {
      id: "6634",
      district_id: "151",
      name: "Yoshlik MFY"
    },
    {
      id: "6635",
      district_id: "151",
      name: "Yoshlik-2 MFY"
    },
    {
      id: "6636",
      district_id: "151",
      name: "Zafar SHFY"
    },
    {
      id: "6637",
      district_id: "151",
      name: "Ziyoli MFY"
    },
    {
      id: "6638",
      district_id: "152",
      name: "Amentchi MFY"
    },
    {
      id: "6639",
      district_id: "152",
      name: "A.Navoiy MFY"
    },
    {
      id: "6640",
      district_id: "152",
      name: "Abbasov MFY"
    },
    {
      id: "6641",
      district_id: "152",
      name: "Al-Xorazmiy MFY"
    },
    {
      id: "6642",
      district_id: "152",
      name: "Andijon MFY"
    },
    {
      id: "6643",
      district_id: "152",
      name: "Bobur MFY"
    },
    {
      id: "6644",
      district_id: "152",
      name: "Bog`i shamol MFY"
    },
    {
      id: "6645",
      district_id: "152",
      name: "Buloq ariq MFY"
    },
    {
      id: "6646",
      district_id: "152",
      name: "Do`stlik MFY"
    },
    {
      id: "6647",
      district_id: "152",
      name: "Farg`ona MFY"
    },
    {
      id: "6648",
      district_id: "152",
      name: "Farxod MFY"
    },
    {
      id: "6649",
      district_id: "152",
      name: "Jomiy MFY"
    },
    {
      id: "6650",
      district_id: "152",
      name: "M.Turg`unboeva MFY"
    },
    {
      id: "6651",
      district_id: "152",
      name: "Muqumiy MFY"
    },
    {
      id: "6652",
      district_id: "152",
      name: "Mustaqillik MFY"
    },
    {
      id: "6653",
      district_id: "152",
      name: "Muxammedov MFY"
    },
    {
      id: "6654",
      district_id: "152",
      name: "Navro`z MFY"
    },
    {
      id: "6655",
      district_id: "152",
      name: "Nurli yul MFY"
    },
    {
      id: "6656",
      district_id: "152",
      name: "O`zbekiston MFY"
    },
    {
      id: "6657",
      district_id: "152",
      name: "Paxtakor MFY"
    },
    {
      id: "6658",
      district_id: "152",
      name: "Q.Farmanov MFY"
    },
    {
      id: "6659",
      district_id: "152",
      name: "Q.To`rdiev MFY"
    },
    {
      id: "6660",
      district_id: "152",
      name: "Rudakiy MFY"
    },
    {
      id: "6661",
      district_id: "152",
      name: "S`ayniy MFY"
    },
    {
      id: "6662",
      district_id: "152",
      name: "S.Raximov MFY"
    },
    {
      id: "6663",
      district_id: "152",
      name: "Samarqand MFY"
    },
    {
      id: "6664",
      district_id: "152",
      name: "Sh.Qo`ziboev MFY"
    },
    {
      id: "6665",
      district_id: "152",
      name: "Shirin MFY"
    },
    {
      id: "6666",
      district_id: "152",
      name: "Sirdaryo MFY"
    },
    {
      id: "6667",
      district_id: "152",
      name: "Tinchlik MFY"
    },
    {
      id: "6668",
      district_id: "152",
      name: "Turkiston MFY"
    },
    {
      id: "6669",
      district_id: "152",
      name: "X.Olimjon MFY"
    },
    {
      id: "6670",
      district_id: "152",
      name: "Yangi xayot MFY"
    },
    {
      id: "6671",
      district_id: "152",
      name: "Yoshlik MFY"
    },
    {
      id: "6672",
      district_id: "152",
      name: "Zafar MFY"
    },
    {
      id: "6673",
      district_id: "153",
      name: "Achamayli Fayz-Baraka"
    },
    {
      id: "6674",
      district_id: "153",
      name: "Achamayli MFY"
    },
    {
      id: "6675",
      district_id: "153",
      name: "Beshkapa MFY"
    },
    {
      id: "6676",
      district_id: "153",
      name: "Bo`ka MFY"
    },
    {
      id: "6677",
      district_id: "153",
      name: "Bo`ka sh Madaniyat MFY"
    },
    {
      id: "6678",
      district_id: "153",
      name: "Bo`ka sh. Guliston MFY"
    },
    {
      id: "6679",
      district_id: "153",
      name: "Bo`ka sh. Navruz MFY"
    },
    {
      id: "6680",
      district_id: "153",
      name: "Bo`ka sh. O`zbek MFY"
    },
    {
      id: "6681",
      district_id: "153",
      name: "Bo`ka sh. Toshloq MFY"
    },
    {
      id: "6682",
      district_id: "153",
      name: "Bo`ka sh. Yangiobod MFY"
    },
    {
      id: "6683",
      district_id: "153",
      name: "Bo`ka sh.Do`stlik MFY"
    },
    {
      id: "6684",
      district_id: "153",
      name: "Bo`ka sh.Yangihayot MFY"
    },
    {
      id: "6685",
      district_id: "153",
      name: "Bo`ston QFY"
    },
    {
      id: "6686",
      district_id: "153",
      name: "Buston MFY"
    },
    {
      id: "6687",
      district_id: "153",
      name: "Chig`atoy QFY"
    },
    {
      id: "6688",
      district_id: "153",
      name: "Cho`lobod MFY"
    },
    {
      id: "6689",
      district_id: "153",
      name: "Dashtobod MFY"
    },
    {
      id: "6690",
      district_id: "153",
      name: "Guliston MFY"
    },
    {
      id: "6691",
      district_id: "153",
      name: "Guliston MFY"
    },
    {
      id: "6692",
      district_id: "153",
      name: "Jag`albayli MFY"
    },
    {
      id: "6693",
      district_id: "153",
      name: "Katta ravot MFY"
    },
    {
      id: "6694",
      district_id: "153",
      name: "Kiyikchi MFY"
    },
    {
      id: "6695",
      district_id: "153",
      name: "Kukorol MFY"
    },
    {
      id: "6696",
      district_id: "153",
      name: "Kukorol QFY"
    },
    {
      id: "6697",
      district_id: "153",
      name: "Mirzabek MFY"
    },
    {
      id: "6698",
      district_id: "153",
      name: "Namuna QFY"
    },
    {
      id: "6699",
      district_id: "153",
      name: "Navobod MFY"
    },
    {
      id: "6700",
      district_id: "153",
      name: "Oltish MFY"
    },
    {
      id: "6701",
      district_id: "153",
      name: "O`rta tepa MFY"
    },
    {
      id: "6702",
      district_id: "153",
      name: "Parkent MFY"
    },
    {
      id: "6703",
      district_id: "153",
      name: "Qoraq-uyli MFY"
    },
    {
      id: "6704",
      district_id: "153",
      name: "Qoraq-uyli QFY"
    },
    {
      id: "6705",
      district_id: "153",
      name: "Qoraquduq MFY"
    },
    {
      id: "6706",
      district_id: "153",
      name: "Qo`chqors-uygan MFY"
    },
    {
      id: "6707",
      district_id: "153",
      name: "Qo`ldoshtepa MFY"
    },
    {
      id: "6708",
      district_id: "153",
      name: "Qo`shtepa QFY"
    },
    {
      id: "6709",
      district_id: "153",
      name: "Quldiroq MFY"
    },
    {
      id: "6710",
      district_id: "153",
      name: "Ramadon MFY"
    },
    {
      id: "6711",
      district_id: "153",
      name: "Ravot MFY"
    },
    {
      id: "6712",
      district_id: "153",
      name: "Ravot MFY"
    },
    {
      id: "6713",
      district_id: "153",
      name: "Ravot QFY"
    },
    {
      id: "6714",
      district_id: "153",
      name: "Samarqand MFY"
    },
    {
      id: "6715",
      district_id: "153",
      name: "Turon QFY"
    },
    {
      id: "6716",
      district_id: "153",
      name: "Xo`jaqurg`on MFY"
    },
    {
      id: "6717",
      district_id: "153",
      name: "Yangiobod MFY"
    },
    {
      id: "6718",
      district_id: "153",
      name: "Yangiqo`rg`on MFY"
    },
    {
      id: "6719",
      district_id: "153",
      name: "Zafarobod MFY"
    },
    {
      id: "6720",
      district_id: "154",
      name: "Achchisay MFY"
    },
    {
      id: "6721",
      district_id: "154",
      name: "Alg`abas MFY"
    },
    {
      id: "6722",
      district_id: "154",
      name: "Ashirbek MFY"
    },
    {
      id: "6723",
      district_id: "154",
      name: "Aydarali MFY"
    },
    {
      id: "6724",
      district_id: "154",
      name: "Besh-tut MFY"
    },
    {
      id: "6725",
      district_id: "154",
      name: "Barraj MFY"
    },
    {
      id: "6726",
      district_id: "154",
      name: "Birlik MFY"
    },
    {
      id: "6727",
      district_id: "154",
      name: "Bog`iston MFY"
    },
    {
      id: "6728",
      district_id: "154",
      name: "Boladala MFY"
    },
    {
      id: "6729",
      district_id: "154",
      name: "Bo`ston MFY"
    },
    {
      id: "6730",
      district_id: "154",
      name: "Bo`stonliq MFY"
    },
    {
      id: "6731",
      district_id: "154",
      name: "Burchmullo MFY"
    },
    {
      id: "6732",
      district_id: "154",
      name: "Chimboyliq MFY"
    },
    {
      id: "6733",
      district_id: "154",
      name: "Chimboyliq MFY"
    },
    {
      id: "6734",
      district_id: "154",
      name: "Chimgan MFY"
    },
    {
      id: "6735",
      district_id: "154",
      name: "Chinor MFY"
    },
    {
      id: "6736",
      district_id: "154",
      name: "Chorbog MFY"
    },
    {
      id: "6737",
      district_id: "154",
      name: "Dadaboev MFY"
    },
    {
      id: "6738",
      district_id: "154",
      name: "Daxana MFY"
    },
    {
      id: "6739",
      district_id: "154",
      name: "Dumaloq MFY"
    },
    {
      id: "6740",
      district_id: "154",
      name: "g`azalkent MFY"
    },
    {
      id: "6741",
      district_id: "154",
      name: "Iskandar MFY"
    },
    {
      id: "6742",
      district_id: "154",
      name: "Iskandar MFY"
    },
    {
      id: "6743",
      district_id: "154",
      name: "Istiqlol MFY"
    },
    {
      id: "6744",
      district_id: "154",
      name: "Jaxonobod MFY"
    },
    {
      id: "6745",
      district_id: "154",
      name: "Kichiksoy MFY"
    },
    {
      id: "6746",
      district_id: "154",
      name: "Ko`kto`nli MFY"
    },
    {
      id: "6747",
      district_id: "154",
      name: "Ma`rifat MFY"
    },
    {
      id: "6748",
      district_id: "154",
      name: "Markaziy MFY"
    },
    {
      id: "6749",
      district_id: "154",
      name: "Navro`z MFY"
    },
    {
      id: "6750",
      district_id: "154",
      name: "Novobod MFY"
    },
    {
      id: "6751",
      district_id: "154",
      name: "Nurchilar MFY"
    },
    {
      id: "6752",
      district_id: "154",
      name: "Ozodbosh MFY"
    },
    {
      id: "6753",
      district_id: "154",
      name: "Pargos MFY"
    },
    {
      id: "6754",
      district_id: "154",
      name: "Pargos MFY"
    },
    {
      id: "6755",
      district_id: "154",
      name: "Pskom MFY"
    },
    {
      id: "6756",
      district_id: "154",
      name: "Qoraboy MFY"
    },
    {
      id: "6757",
      district_id: "154",
      name: "Qoramanas MFY"
    },
    {
      id: "6758",
      district_id: "154",
      name: "Qoramozor MFY"
    },
    {
      id: "6759",
      district_id: "154",
      name: "Qoronqul MFY"
    },
    {
      id: "6760",
      district_id: "154",
      name: "Qo`shqo`rg`on MFY"
    },
    {
      id: "6761",
      district_id: "154",
      name: "Qo`shqo`rg`on MFY"
    },
    {
      id: "6762",
      district_id: "154",
      name: "Qurbonov MFY"
    },
    {
      id: "6763",
      district_id: "154",
      name: "S. Raximov MFY"
    },
    {
      id: "6764",
      district_id: "154",
      name: "S. Xondoyliqiy MFY"
    },
    {
      id: "6765",
      district_id: "154",
      name: "Sarbo MFY"
    },
    {
      id: "6766",
      district_id: "154",
      name: "Sari-Kanli MFY"
    },
    {
      id: "6767",
      district_id: "154",
      name: "Sijjak MFY"
    },
    {
      id: "6768",
      district_id: "154",
      name: "Soyliq MFY"
    },
    {
      id: "6769",
      district_id: "154",
      name: "Talpin MFY"
    },
    {
      id: "6770",
      district_id: "154",
      name: "Tovoqsoy MFY"
    },
    {
      id: "6771",
      district_id: "154",
      name: "To`labi MFY"
    },
    {
      id: "6772",
      district_id: "154",
      name: "Uyenkulsay MFY"
    },
    {
      id: "6773",
      district_id: "154",
      name: "Uzun MFY"
    },
    {
      id: "6774",
      district_id: "154",
      name: "Xondoyliq MFY"
    },
    {
      id: "6775",
      district_id: "154",
      name: "Xo`jakent MFY"
    },
    {
      id: "6776",
      district_id: "154",
      name: "Xo`jakent MFY"
    },
    {
      id: "6777",
      district_id: "154",
      name: "Xumsan MFY"
    },
    {
      id: "6778",
      district_id: "154",
      name: "Xumsan MFY"
    },
    {
      id: "6779",
      district_id: "154",
      name: "Yakkatut MFY"
    },
    {
      id: "6780",
      district_id: "154",
      name: "Yangiaul MFY"
    },
    {
      id: "6781",
      district_id: "154",
      name: "Yangimahalla MFY"
    },
    {
      id: "6782",
      district_id: "155",
      name: "A.g`aniev MFY"
    },
    {
      id: "6783",
      district_id: "155",
      name: "A.Mirkomilov MFY"
    },
    {
      id: "6784",
      district_id: "155",
      name: "A.Navoiy MFY"
    },
    {
      id: "6785",
      district_id: "155",
      name: "A.Navoiy-Navro`z MFY"
    },
    {
      id: "6786",
      district_id: "155",
      name: "A.Shorahmedov MFY"
    },
    {
      id: "6787",
      district_id: "155",
      name: "A.Temur MFY"
    },
    {
      id: "6788",
      district_id: "155",
      name: "Abdujalilbob MFY"
    },
    {
      id: "6789",
      district_id: "155",
      name: "Achchi-soy MFY"
    },
    {
      id: "6790",
      district_id: "155",
      name: "Ahillik MFY"
    },
    {
      id: "6791",
      district_id: "155",
      name: "Ahmad Yassaviy MFY"
    },
    {
      id: "6792",
      district_id: "155",
      name: "Alim buva MFY"
    },
    {
      id: "6793",
      district_id: "155",
      name: "Aloqa MFY"
    },
    {
      id: "6794",
      district_id: "155",
      name: "Avliyo ota MFY"
    },
    {
      id: "6795",
      district_id: "155",
      name: "B.Nishonov MFY"
    },
    {
      id: "6796",
      district_id: "155",
      name: "Bel-ariq MFY"
    },
    {
      id: "6797",
      district_id: "155",
      name: "Baliqchi (jamoatchi) MFY"
    },
    {
      id: "6798",
      district_id: "155",
      name: "Birlik (jamoatchi) MFY"
    },
    {
      id: "6799",
      district_id: "155",
      name: "Bog`ishamol MFY"
    },
    {
      id: "6800",
      district_id: "155",
      name: "Bog`zor MFY"
    },
    {
      id: "6801",
      district_id: "155",
      name: "Bo`ston MFY"
    },
    {
      id: "6802",
      district_id: "155",
      name: "Bo`z-suv QFY"
    },
    {
      id: "6803",
      district_id: "155",
      name: "Chig`atoy MFY"
    },
    {
      id: "6804",
      district_id: "155",
      name: "Chig`atoy-Oqt?pa QFY"
    },
    {
      id: "6805",
      district_id: "155",
      name: "Chinor MFY"
    },
    {
      id: "6806",
      district_id: "155",
      name: "Chosh tepa QFY"
    },
    {
      id: "6807",
      district_id: "155",
      name: "Chuvalachi MFY"
    },
    {
      id: "6808",
      district_id: "155",
      name: "Chuvalachi QFY MFY"
    },
    {
      id: "6809",
      district_id: "155",
      name: "Dehqonobod MFY"
    },
    {
      id: "6810",
      district_id: "155",
      name: "Daliguzar MFY"
    },
    {
      id: "6811",
      district_id: "155",
      name: "Darxon MFY"
    },
    {
      id: "6812",
      district_id: "155",
      name: "Diydor MFY"
    },
    {
      id: "6813",
      district_id: "155",
      name: "Do`stlik MFY"
    },
    {
      id: "6814",
      district_id: "155",
      name: "Erkin MFY"
    },
    {
      id: "6815",
      district_id: "155",
      name: "Erkin QFY"
    },
    {
      id: "6816",
      district_id: "155",
      name: "Eshonguzar MFY"
    },
    {
      id: "6817",
      district_id: "155",
      name: "Eshonguzar QFY"
    },
    {
      id: "6818",
      district_id: "155",
      name: "Eski qal`a MFY"
    },
    {
      id: "6819",
      district_id: "155",
      name: "Farobiy MFY"
    },
    {
      id: "6820",
      district_id: "155",
      name: "Fayz MFY"
    },
    {
      id: "6821",
      district_id: "155",
      name: "g`isht-ko`prik MFY"
    },
    {
      id: "6822",
      district_id: "155",
      name: "Gul tepa MFY"
    },
    {
      id: "6823",
      district_id: "155",
      name: "Guliston QFY"
    },
    {
      id: "6824",
      district_id: "155",
      name: "Gulobod MFY"
    },
    {
      id: "6825",
      district_id: "155",
      name: "Gulzor MFY"
    },
    {
      id: "6826",
      district_id: "155",
      name: "Halimko`p MFY"
    },
    {
      id: "6827",
      district_id: "155",
      name: "Harakat MFY"
    },
    {
      id: "6828",
      district_id: "155",
      name: "Hiyobon MFY"
    },
    {
      id: "6829",
      district_id: "155",
      name: "Huvaydo MFY"
    },
    {
      id: "6830",
      district_id: "155",
      name: "I.Bahromov MFY"
    },
    {
      id: "6831",
      district_id: "155",
      name: "I.Yakubov MFY"
    },
    {
      id: "6832",
      district_id: "155",
      name: "Ibrat MFY"
    },
    {
      id: "6833",
      district_id: "155",
      name: "Ibrat MFY"
    },
    {
      id: "6834",
      district_id: "155",
      name: "Iftihor MFY"
    },
    {
      id: "6835",
      district_id: "155",
      name: "Ilg`or MFY"
    },
    {
      id: "6836",
      district_id: "155",
      name: "Iqbol (jamoatchi) MFY"
    },
    {
      id: "6837",
      district_id: "155",
      name: "Iqbol MFY"
    },
    {
      id: "6838",
      district_id: "155",
      name: "Istiqlol MFY"
    },
    {
      id: "6839",
      district_id: "155",
      name: "Istiqlolning 5 yilligi (jamoatchi) MFY"
    },
    {
      id: "6840",
      district_id: "155",
      name: "Jaloir MFY"
    },
    {
      id: "6841",
      district_id: "155",
      name: "Kensoy MFY"
    },
    {
      id: "6842",
      district_id: "155",
      name: "Kalas MFY"
    },
    {
      id: "6843",
      district_id: "155",
      name: "Katta-chinor MFY"
    },
    {
      id: "6844",
      district_id: "155",
      name: "Katta-tepa MFY"
    },
    {
      id: "6845",
      district_id: "155",
      name: "Ko`k - terak QFY MFY"
    },
    {
      id: "6846",
      district_id: "155",
      name: "Ko`k-terak MFY"
    },
    {
      id: "6847",
      district_id: "155",
      name: "Ko`ksaroy MFY"
    },
    {
      id: "6848",
      district_id: "155",
      name: "Ko`ksaroy QFY"
    },
    {
      id: "6849",
      district_id: "155",
      name: "Ko`xi-nur MFY"
    },
    {
      id: "6850",
      district_id: "155",
      name: "M.Fozilov MFY"
    },
    {
      id: "6851",
      district_id: "155",
      name: "M.Ma.murov MFY"
    },
    {
      id: "6852",
      district_id: "155",
      name: "M.Musaev MFY"
    },
    {
      id: "6853",
      district_id: "155",
      name: "M.Yo`ldosh?va MFY"
    },
    {
      id: "6854",
      district_id: "155",
      name: "Mevazor MFY"
    },
    {
      id: "6855",
      district_id: "155",
      name: "Madaniyat (jamoatchi) MFY"
    },
    {
      id: "6856",
      district_id: "155",
      name: "Madaniyat-Oybek MFY"
    },
    {
      id: "6857",
      district_id: "155",
      name: "Majnuntol MFY"
    },
    {
      id: "6858",
      district_id: "155",
      name: "Masalboy QFY"
    },
    {
      id: "6859",
      district_id: "155",
      name: "Mustaqillik MFY"
    },
    {
      id: "6860",
      district_id: "155",
      name: "N`amin MFY"
    },
    {
      id: "6861",
      district_id: "155",
      name: "N.Odilova MFY"
    },
    {
      id: "6862",
      district_id: "155",
      name: "Namdanak MFY"
    },
    {
      id: "6863",
      district_id: "155",
      name: "Nayman MFY"
    },
    {
      id: "6864",
      district_id: "155",
      name: "Nazarbek MFY"
    },
    {
      id: "6865",
      district_id: "155",
      name: "Nazarbek QFY"
    },
    {
      id: "6866",
      district_id: "155",
      name: "Nurafshon MFY"
    },
    {
      id: "6867",
      district_id: "155",
      name: "Nurafshon MFY"
    },
    {
      id: "6868",
      district_id: "155",
      name: "Nurobod MFY"
    },
    {
      id: "6869",
      district_id: "155",
      name: "Obod MFY"
    },
    {
      id: "6870",
      district_id: "155",
      name: "Obodlik MFY"
    },
    {
      id: "6871",
      district_id: "155",
      name: "Olmazor MFY"
    },
    {
      id: "6872",
      district_id: "155",
      name: "Oltintepa MFY"
    },
    {
      id: "6873",
      district_id: "155",
      name: "Oq-tom MFY"
    },
    {
      id: "6874",
      district_id: "155",
      name: "Oq-tosh MFY"
    },
    {
      id: "6875",
      district_id: "155",
      name: "Oqibat MFY"
    },
    {
      id: "6876",
      district_id: "155",
      name: "Oydin xayot MFY"
    },
    {
      id: "6877",
      district_id: "155",
      name: "O`ratepa (jamoatchi) MFY"
    },
    {
      id: "6878",
      district_id: "155",
      name: "O`rikzor MFY"
    },
    {
      id: "6879",
      district_id: "155",
      name: "O`rta MFY"
    },
    {
      id: "6880",
      district_id: "155",
      name: "O`rtaovul MFY"
    },
    {
      id: "6881",
      district_id: "155",
      name: "O`rtaovul QFY"
    },
    {
      id: "6882",
      district_id: "155",
      name: "O`zgarish QFY"
    },
    {
      id: "6883",
      district_id: "155",
      name: "Past-Darxon MFY"
    },
    {
      id: "6884",
      district_id: "155",
      name: "Qahramon MFY"
    },
    {
      id: "6885",
      district_id: "155",
      name: "Qashqarlik MFY"
    },
    {
      id: "6886",
      district_id: "155",
      name: "Qatortol QFY"
    },
    {
      id: "6887",
      district_id: "155",
      name: "Qir-ariq MFY"
    },
    {
      id: "6888",
      district_id: "155",
      name: "Qir-guzar MFY"
    },
    {
      id: "6889",
      district_id: "155",
      name: "Qizg`aldoq QFY"
    },
    {
      id: "6890",
      district_id: "155",
      name: "Qorabo`rik MFY"
    },
    {
      id: "6891",
      district_id: "155",
      name: "Qorako`sa MFY"
    },
    {
      id: "6892",
      district_id: "155",
      name: "Qorasaroy MFY"
    },
    {
      id: "6893",
      district_id: "155",
      name: "Qorasuv MFY"
    },
    {
      id: "6894",
      district_id: "155",
      name: "Qoravoy to`pi (jamoatchi) MFY"
    },
    {
      id: "6895",
      district_id: "155",
      name: "Qum-ariq MFY"
    },
    {
      id: "6896",
      district_id: "155",
      name: "Qurilish MFY"
    },
    {
      id: "6897",
      district_id: "155",
      name: "Quruvchi MFY"
    },
    {
      id: "6898",
      district_id: "155",
      name: "Qush-qo`ndi MFY"
    },
    {
      id: "6899",
      district_id: "155",
      name: "Quyoshli MFY"
    },
    {
      id: "6900",
      district_id: "155",
      name: "R.Dadaxo`ja?v MFY"
    },
    {
      id: "6901",
      district_id: "155",
      name: "Rahbar obod MFY"
    },
    {
      id: "6902",
      district_id: "155",
      name: "Ramadon MFY"
    },
    {
      id: "6903",
      district_id: "155",
      name: "S.Rahimov MFY"
    },
    {
      id: "6904",
      district_id: "155",
      name: "Sabzavot MFY"
    },
    {
      id: "6905",
      district_id: "155",
      name: "Sag`bon MFY"
    },
    {
      id: "6906",
      district_id: "155",
      name: "Sahovat MFY"
    },
    {
      id: "6907",
      district_id: "155",
      name: "Sanoat MFY"
    },
    {
      id: "6908",
      district_id: "155",
      name: "Sarka MFY"
    },
    {
      id: "6909",
      district_id: "155",
      name: "Shamsiobod MFY"
    },
    {
      id: "6910",
      district_id: "155",
      name: "Shirin MFY"
    },
    {
      id: "6911",
      district_id: "155",
      name: "Shodlik MFY"
    },
    {
      id: "6912",
      district_id: "155",
      name: "Sirg`ali MFY"
    },
    {
      id: "6913",
      district_id: "155",
      name: "Sohibkor MFY"
    },
    {
      id: "6914",
      district_id: "155",
      name: "Sohibkor MFY"
    },
    {
      id: "6915",
      district_id: "155",
      name: "Sort?pa MFY"
    },
    {
      id: "6916",
      district_id: "155",
      name: "Tariq-t?shar MFY"
    },
    {
      id: "6917",
      district_id: "155",
      name: "Tarnov MFY"
    },
    {
      id: "6918",
      district_id: "155",
      name: "Tinchlik MFY"
    },
    {
      id: "6919",
      district_id: "155",
      name: "Tokzor MFY"
    },
    {
      id: "6920",
      district_id: "155",
      name: "Toshkent MFY"
    },
    {
      id: "6921",
      district_id: "155",
      name: "To`qayzor (jamoatchi) MFY"
    },
    {
      id: "6922",
      district_id: "155",
      name: "To`qimachi MFY"
    },
    {
      id: "6923",
      district_id: "155",
      name: "Turkiston MFY"
    },
    {
      id: "6924",
      district_id: "155",
      name: "Turkiston QFY"
    },
    {
      id: "6925",
      district_id: "155",
      name: "Turopobod MFY"
    },
    {
      id: "6926",
      district_id: "155",
      name: "Tutzor MFY"
    },
    {
      id: "6927",
      district_id: "155",
      name: "Uch sada MFY"
    },
    {
      id: "6928",
      district_id: "155",
      name: "Ulug`bek (jamoatchi) MFY"
    },
    {
      id: "6929",
      district_id: "155",
      name: "X`abdulla?v MFY"
    },
    {
      id: "6930",
      district_id: "155",
      name: "X.Umarov MFY"
    },
    {
      id: "6931",
      district_id: "155",
      name: "Xasanboy guzar MFY"
    },
    {
      id: "6932",
      district_id: "155",
      name: "Xasanboy MFY"
    },
    {
      id: "6933",
      district_id: "155",
      name: "Xasanboy QFY"
    },
    {
      id: "6934",
      district_id: "155",
      name: "Xonobod MFY"
    },
    {
      id: "6935",
      district_id: "155",
      name: "Xonobod QFY"
    },
    {
      id: "6936",
      district_id: "155",
      name: "Xo`ja mozor MFY"
    },
    {
      id: "6937",
      district_id: "155",
      name: "Y.Karimov MFY"
    },
    {
      id: "6938",
      district_id: "155",
      name: "Y.Oxunbobo?v MFY"
    },
    {
      id: "6939",
      district_id: "155",
      name: "Yangi hayot MFY"
    },
    {
      id: "6940",
      district_id: "155",
      name: "Yunus obod QFY"
    },
    {
      id: "6941",
      district_id: "155",
      name: "Z.Jalilov MFY"
    },
    {
      id: "6942",
      district_id: "155",
      name: "Z.Po`latov MFY"
    },
    {
      id: "6943",
      district_id: "155",
      name: "Z.Zokirova MFY"
    },
    {
      id: "6944",
      district_id: "155",
      name: "Zangiota QFY"
    },
    {
      id: "6945",
      district_id: "155",
      name: "Zarafshon (jamoatchi) MFY"
    },
    {
      id: "6946",
      district_id: "155",
      name: "Zarbdor MFY"
    },
    {
      id: "6947",
      district_id: "155",
      name: "Zargar MFY"
    },
    {
      id: "6948",
      district_id: "155",
      name: "Zax - ariq MFY"
    },
    {
      id: "6949",
      district_id: "155",
      name: "Ziyo (jamoatchi) MFY"
    },
    {
      id: "6950",
      district_id: "156",
      name: "Tuzel QFY"
    },
    {
      id: "6951",
      district_id: "156",
      name: "Uymovut MFY"
    },
    {
      id: "6952",
      district_id: "156",
      name: "A.Navoiy MFY"
    },
    {
      id: "6953",
      district_id: "156",
      name: "Akademiklar (jamoatchi) MFY"
    },
    {
      id: "6954",
      district_id: "156",
      name: "Alisherobod MFY"
    },
    {
      id: "6955",
      district_id: "156",
      name: "Amir Temur MFY"
    },
    {
      id: "6956",
      district_id: "156",
      name: "Arg`in MFY"
    },
    {
      id: "6957",
      district_id: "156",
      name: "Arg`in MFY"
    },
    {
      id: "6958",
      district_id: "156",
      name: "Beruniy MFY"
    },
    {
      id: "6959",
      district_id: "156",
      name: "Bahor MFY"
    },
    {
      id: "6960",
      district_id: "156",
      name: "Baytqo`rg`on MFY"
    },
    {
      id: "6961",
      district_id: "156",
      name: "Baytqo`rg`on QFY"
    },
    {
      id: "6962",
      district_id: "156",
      name: "Birlik (jamoatchi) MFY"
    },
    {
      id: "6963",
      district_id: "156",
      name: "Birlik MFY"
    },
    {
      id: "6964",
      district_id: "156",
      name: "Bobur MFY"
    },
    {
      id: "6965",
      district_id: "156",
      name: "Botanika MFY"
    },
    {
      id: "6966",
      district_id: "156",
      name: "Boyjigit MFY"
    },
    {
      id: "6967",
      district_id: "156",
      name: "Bo`ston MFY"
    },
    {
      id: "6968",
      district_id: "156",
      name: "Chingeldi MFY"
    },
    {
      id: "6969",
      district_id: "156",
      name: "Chinobod MFY"
    },
    {
      id: "6970",
      district_id: "156",
      name: "Chinobod QFY"
    },
    {
      id: "6971",
      district_id: "156",
      name: "Darxon MFY"
    },
    {
      id: "6972",
      district_id: "156",
      name: "Do`rmon MFY"
    },
    {
      id: "6973",
      district_id: "156",
      name: "Do`stlik MFY"
    },
    {
      id: "6974",
      district_id: "156",
      name: "Do`stlik MFY"
    },
    {
      id: "6975",
      district_id: "156",
      name: "Do`stlik MFY"
    },
    {
      id: "6976",
      district_id: "156",
      name: "g`afur g`ulom MFY"
    },
    {
      id: "6977",
      district_id: "156",
      name: "G?ofizika MFY"
    },
    {
      id: "6978",
      district_id: "156",
      name: "Guliston . 1 MFY"
    },
    {
      id: "6979",
      district_id: "156",
      name: "Guliston MFY"
    },
    {
      id: "6980",
      district_id: "156",
      name: "Guliston MFY"
    },
    {
      id: "6981",
      district_id: "156",
      name: "Gulzor . 1 MFY"
    },
    {
      id: "6982",
      district_id: "156",
      name: "Gulzor . 2 MFY"
    },
    {
      id: "6983",
      district_id: "156",
      name: "Islomobod MFY"
    },
    {
      id: "6984",
      district_id: "156",
      name: "Istiqlol MFY"
    },
    {
      id: "6985",
      district_id: "156",
      name: "Jarboshi (jamoatchi) MFY"
    },
    {
      id: "6986",
      district_id: "156",
      name: "Kodiriya GES (jamoatchi) MFY"
    },
    {
      id: "6987",
      district_id: "156",
      name: "Ko`prik boshi MFY"
    },
    {
      id: "6988",
      district_id: "156",
      name: "M.Ulug`bek MFY"
    },
    {
      id: "6989",
      district_id: "156",
      name: "Mevazor MFY"
    },
    {
      id: "6990",
      district_id: "156",
      name: "Mexnat MFY"
    },
    {
      id: "6991",
      district_id: "156",
      name: "Madaniyat MFY"
    },
    {
      id: "6992",
      district_id: "156",
      name: "Matkabulov QFY"
    },
    {
      id: "6993",
      district_id: "156",
      name: "May MFY"
    },
    {
      id: "6994",
      district_id: "156",
      name: "May QFY"
    },
    {
      id: "6995",
      district_id: "156",
      name: "Mirzo Ulug`bek MFY"
    },
    {
      id: "6996",
      district_id: "156",
      name: "Mustaqillik MFY"
    },
    {
      id: "6997",
      district_id: "156",
      name: "Muxtor MFY"
    },
    {
      id: "6998",
      district_id: "156",
      name: "Navbahor MFY"
    },
    {
      id: "6999",
      district_id: "156",
      name: "Navro`z MFY"
    },
    {
      id: "7000",
      district_id: "156",
      name: "Normuxamedov MFY"
    },
    {
      id: "7001",
      district_id: "156",
      name: "Nurafshon MFY"
    },
    {
      id: "7002",
      district_id: "156",
      name: "Nurobod MFY"
    },
    {
      id: "7003",
      district_id: "156",
      name: "Obod MFY"
    },
    {
      id: "7004",
      district_id: "156",
      name: "Oq oltin MFY"
    },
    {
      id: "7005",
      district_id: "156",
      name: "Oq-qovoq QFY"
    },
    {
      id: "7006",
      district_id: "156",
      name: "Otamuxamedov MFY"
    },
    {
      id: "7007",
      district_id: "156",
      name: "Oybek MFY"
    },
    {
      id: "7008",
      district_id: "156",
      name: "O`nqo`rg`on . 1 MFY"
    },
    {
      id: "7009",
      district_id: "156",
      name: "O`nqo`rg`on MFY"
    },
    {
      id: "7010",
      district_id: "156",
      name: "O`nqo`rg`on QFY"
    },
    {
      id: "7011",
      district_id: "156",
      name: "O`tkir MFY"
    },
    {
      id: "7012",
      district_id: "156",
      name: "Pastki yuz MFY"
    },
    {
      id: "7013",
      district_id: "156",
      name: "Po`lat qadam MFY"
    },
    {
      id: "7014",
      district_id: "156",
      name: "Qibray SHFY"
    },
    {
      id: "7015",
      district_id: "156",
      name: "Qichoq QFY"
    },
    {
      id: "7016",
      district_id: "156",
      name: "Qipchoq MFY"
    },
    {
      id: "7017",
      district_id: "156",
      name: "Qizil Shalola MFY"
    },
    {
      id: "7018",
      district_id: "156",
      name: "Qurilish MFY"
    },
    {
      id: "7019",
      district_id: "156",
      name: "S.Raximov MFY"
    },
    {
      id: "7020",
      district_id: "156",
      name: "Selekeiya MFY"
    },
    {
      id: "7021",
      district_id: "156",
      name: "Salor GES MFY"
    },
    {
      id: "7022",
      district_id: "156",
      name: "Salor SHFY"
    },
    {
      id: "7023",
      district_id: "156",
      name: "Sh.Rashidov MFY"
    },
    {
      id: "7024",
      district_id: "156",
      name: "Sheraliev MFY"
    },
    {
      id: "7025",
      district_id: "156",
      name: "Sharq MFY"
    },
    {
      id: "7026",
      district_id: "156",
      name: "Shodlik MFY"
    },
    {
      id: "7027",
      district_id: "156",
      name: "Shodlik MFY"
    },
    {
      id: "7028",
      district_id: "156",
      name: "Sohibkor MFY"
    },
    {
      id: "7029",
      district_id: "156",
      name: "Taraqqiy MFY"
    },
    {
      id: "7030",
      district_id: "156",
      name: "Toshisti MFY"
    },
    {
      id: "7031",
      district_id: "156",
      name: "Tovkentepa MFY"
    },
    {
      id: "7032",
      district_id: "156",
      name: "To`qaytepa MFY"
    },
    {
      id: "7033",
      district_id: "156",
      name: "Tuzel MFY"
    },
    {
      id: "7034",
      district_id: "156",
      name: "Uzumzor MFY"
    },
    {
      id: "7035",
      district_id: "156",
      name: "X`amirov MFY"
    },
    {
      id: "7036",
      district_id: "156",
      name: "Xosildor MFY"
    },
    {
      id: "7037",
      district_id: "156",
      name: "Yalang`och ota MFY"
    },
    {
      id: "7038",
      district_id: "156",
      name: "Yangiobod MFY"
    },
    {
      id: "7039",
      district_id: "156",
      name: "Yangiobod QFY MFY"
    },
    {
      id: "7040",
      district_id: "156",
      name: "Yangixayot MFY"
    },
    {
      id: "7041",
      district_id: "156",
      name: "Yangixayot MFY"
    },
    {
      id: "7042",
      district_id: "156",
      name: "Yangiyo`l MFY"
    },
    {
      id: "7043",
      district_id: "156",
      name: "Yonariq MFY"
    },
    {
      id: "7044",
      district_id: "156",
      name: "Yonariq QFY"
    },
    {
      id: "7045",
      district_id: "156",
      name: "Yoshlik MFY"
    },
    {
      id: "7046",
      district_id: "156",
      name: "Yuqori yuz MFY"
    },
    {
      id: "7047",
      district_id: "156",
      name: "Zebuniso MFY"
    },
    {
      id: "7048",
      district_id: "157",
      name: "1-sonli Ishchilar MFY"
    },
    {
      id: "7049",
      district_id: "157",
      name: "2-sonli Yangi xayot MFY"
    },
    {
      id: "7050",
      district_id: "157",
      name: "3-sonli Oxunbobo?v MFY"
    },
    {
      id: "7051",
      district_id: "157",
      name: "5-sonli F.Xujaev nomli MFY"
    },
    {
      id: "7052",
      district_id: "157",
      name: "Abay MFY(jamoat)"
    },
    {
      id: "7053",
      district_id: "157",
      name: "An-Don-Su MFY"
    },
    {
      id: "7054",
      district_id: "157",
      name: "Beruniy MFY"
    },
    {
      id: "7055",
      district_id: "157",
      name: "Balikchi MFY"
    },
    {
      id: "7056",
      district_id: "157",
      name: "Birlik MFY"
    },
    {
      id: "7057",
      district_id: "157",
      name: "Chakmok MFY"
    },
    {
      id: "7058",
      district_id: "157",
      name: "Do`stlik MFY"
    },
    {
      id: "7059",
      district_id: "157",
      name: "Do`stlik-1 MFY"
    },
    {
      id: "7060",
      district_id: "157",
      name: "Galabotir MFY(jamoat)"
    },
    {
      id: "7061",
      district_id: "157",
      name: "Gul MFY"
    },
    {
      id: "7062",
      district_id: "157",
      name: "Gul QFY"
    },
    {
      id: "7063",
      district_id: "157",
      name: "I.Yunusov MFY(jamoat)"
    },
    {
      id: "7064",
      district_id: "157",
      name: "Istiqlol QFY"
    },
    {
      id: "7065",
      district_id: "157",
      name: "Ittifoq MFY(jamoat)"
    },
    {
      id: "7066",
      district_id: "157",
      name: "Jumag`ul MFY(jamoat)"
    },
    {
      id: "7067",
      district_id: "157",
      name: "Ketmontepa QFY"
    },
    {
      id: "7068",
      district_id: "157",
      name: "Kushek MFY(jamoat)"
    },
    {
      id: "7069",
      district_id: "157",
      name: "Mevazor MFY(jamoat)"
    },
    {
      id: "7070",
      district_id: "157",
      name: "Mashrab nomli 4-son MFY"
    },
    {
      id: "7071",
      district_id: "157",
      name: "Maydontol QFY"
    },
    {
      id: "7072",
      district_id: "157",
      name: "Ming Chinor MFY"
    },
    {
      id: "7073",
      district_id: "157",
      name: "Nurboy ota MFY"
    },
    {
      id: "7074",
      district_id: "157",
      name: "Otajonov MFY"
    },
    {
      id: "7075",
      district_id: "157",
      name: "O`jakent MFY(jamoat)"
    },
    {
      id: "7076",
      district_id: "157",
      name: "O`zbekiston QFY"
    },
    {
      id: "7077",
      district_id: "157",
      name: "Paxtachi MFY"
    },
    {
      id: "7078",
      district_id: "157",
      name: "Paxtazor MFY"
    },
    {
      id: "7079",
      district_id: "157",
      name: "Qo`rg`oncha QFY"
    },
    {
      id: "7080",
      district_id: "157",
      name: "Seregli MFY(jamoat)"
    },
    {
      id: "7081",
      district_id: "157",
      name: "Surum MFY"
    },
    {
      id: "7082",
      district_id: "157",
      name: "Tinchlik MFY(jamoat)"
    },
    {
      id: "7083",
      district_id: "157",
      name: "Toshloq QFY"
    },
    {
      id: "7084",
      district_id: "157",
      name: "Toshovul QFY"
    },
    {
      id: "7085",
      district_id: "157",
      name: "Tukboy MFY"
    },
    {
      id: "7086",
      district_id: "157",
      name: "Vatan MFY(jamoat) MFY"
    },
    {
      id: "7087",
      district_id: "157",
      name: "Xamza MFY"
    },
    {
      id: "7088",
      district_id: "157",
      name: "Xuja MFY"
    },
    {
      id: "7089",
      district_id: "157",
      name: "Xujapiskan MFY"
    },
    {
      id: "7090",
      district_id: "157",
      name: "Yangi xayot MFY"
    },
    {
      id: "7091",
      district_id: "157",
      name: "Yangix ayot QFY"
    },
    {
      id: "7092",
      district_id: "157",
      name: "Yilkichi MFY"
    },
    {
      id: "7093",
      district_id: "157",
      name: "Yulduz MFY"
    },
    {
      id: "7094",
      district_id: "158",
      name: "Achchi QFY"
    },
    {
      id: "7095",
      district_id: "158",
      name: "Birlik MFY"
    },
    {
      id: "7096",
      district_id: "158",
      name: "Boyg`uli MFY"
    },
    {
      id: "7097",
      district_id: "158",
      name: "Buka (jamoatchi) MFY"
    },
    {
      id: "7098",
      district_id: "158",
      name: "Dexkonobod (jamoatchi) MFY"
    },
    {
      id: "7099",
      district_id: "158",
      name: "Do`stlik QFY"
    },
    {
      id: "7100",
      district_id: "158",
      name: "Eltamgali (jamoatchi) MFY"
    },
    {
      id: "7101",
      district_id: "158",
      name: "Eltamgali QFY"
    },
    {
      id: "7102",
      district_id: "158",
      name: "Erkinlik QFY"
    },
    {
      id: "7103",
      district_id: "158",
      name: "Jag`alboyli MFY"
    },
    {
      id: "7104",
      district_id: "158",
      name: "Kalyas MFY"
    },
    {
      id: "7105",
      district_id: "158",
      name: "Kanka (jamoatchi) MFY"
    },
    {
      id: "7106",
      district_id: "158",
      name: "Kaxramon MFY"
    },
    {
      id: "7107",
      district_id: "158",
      name: "Kiziltut MFY"
    },
    {
      id: "7108",
      district_id: "158",
      name: "Kurik (jamoatchi) MFY"
    },
    {
      id: "7109",
      district_id: "158",
      name: "Kushtepa MFY"
    },
    {
      id: "7110",
      district_id: "158",
      name: "Kushtamgali MFY"
    },
    {
      id: "7111",
      district_id: "158",
      name: "Madaniyat MFY"
    },
    {
      id: "7112",
      district_id: "158",
      name: "Mamut (jamoatchi) MFY"
    },
    {
      id: "7113",
      district_id: "158",
      name: "Mustakillik MFY"
    },
    {
      id: "7114",
      district_id: "158",
      name: "Navbaxor MFY"
    },
    {
      id: "7115",
      district_id: "158",
      name: "Navoiy MFY(jamoatchi)"
    },
    {
      id: "7116",
      district_id: "158",
      name: "Navruz MFY"
    },
    {
      id: "7117",
      district_id: "158",
      name: "Olimkent QFY"
    },
    {
      id: "7118",
      district_id: "158",
      name: "Oqqo`rg`on QFY"
    },
    {
      id: "7119",
      district_id: "158",
      name: "Oxunboboev MFY"
    },
    {
      id: "7120",
      district_id: "158",
      name: "Oytamg`ali QFY"
    },
    {
      id: "7121",
      district_id: "158",
      name: "Qo`rg`oncha MFY"
    },
    {
      id: "7122",
      district_id: "158",
      name: "Qo`rg`ontepa MFY"
    },
    {
      id: "7123",
      district_id: "158",
      name: "S.Raximov MFY"
    },
    {
      id: "7124",
      district_id: "158",
      name: "S.Raximov MFY(jamoatchi)"
    },
    {
      id: "7125",
      district_id: "158",
      name: "S.Sezgizboev MFY"
    },
    {
      id: "7126",
      district_id: "158",
      name: "Saidaobod MFY(jamoatchi)"
    },
    {
      id: "7127",
      district_id: "158",
      name: "Samarkand MFY(jamoatchi)"
    },
    {
      id: "7128",
      district_id: "158",
      name: "Shoxruxiya QFY"
    },
    {
      id: "7129",
      district_id: "158",
      name: "Suvti MFY"
    },
    {
      id: "7130",
      district_id: "158",
      name: "Tolovul MFY"
    },
    {
      id: "7131",
      district_id: "158",
      name: "Tortuvli MFY"
    },
    {
      id: "7132",
      district_id: "158",
      name: "Toshto`g`on QFY"
    },
    {
      id: "7133",
      district_id: "158",
      name: "Usta Normat MFY"
    },
    {
      id: "7134",
      district_id: "158",
      name: "Xalkaobod MFY"
    },
    {
      id: "7135",
      district_id: "158",
      name: "Xamzaobod MFY"
    },
    {
      id: "7136",
      district_id: "158",
      name: "Xonobod MFY"
    },
    {
      id: "7137",
      district_id: "158",
      name: "Xosildor MFY"
    },
    {
      id: "7138",
      district_id: "158",
      name: "Yangi tulkin (jamoatchi) MFY"
    },
    {
      id: "7139",
      district_id: "158",
      name: "Yoshlik MFY"
    },
    {
      id: "7140",
      district_id: "158",
      name: "Zafar QFY"
    },
    {
      id: "7141",
      district_id: "158",
      name: "Zarafshon MFY"
    },
    {
      id: "7142",
      district_id: "158",
      name: "Zarbdor QFY"
    },
    {
      id: "7143",
      district_id: "159",
      name: "A`avloniy MFY"
    },
    {
      id: "7144",
      district_id: "159",
      name: "A.Ikromov MFY"
    },
    {
      id: "7145",
      district_id: "159",
      name: "A.Kaxxor MFY"
    },
    {
      id: "7146",
      district_id: "159",
      name: "A.Kodiriy MFY"
    },
    {
      id: "7147",
      district_id: "159",
      name: "A.Navoiy MFY"
    },
    {
      id: "7148",
      district_id: "159",
      name: "A.Yassaviy MFY"
    },
    {
      id: "7149",
      district_id: "159",
      name: "Bobur MFY"
    },
    {
      id: "7150",
      district_id: "159",
      name: "Buston MFY"
    },
    {
      id: "7151",
      district_id: "159",
      name: "Chambil MFY"
    },
    {
      id: "7152",
      district_id: "159",
      name: "Chulpon MFY"
    },
    {
      id: "7153",
      district_id: "159",
      name: "Do`stlik MFY"
    },
    {
      id: "7154",
      district_id: "159",
      name: "Furkat MFY"
    },
    {
      id: "7155",
      district_id: "159",
      name: "g`Gulom MFY"
    },
    {
      id: "7156",
      district_id: "159",
      name: "GRE MFY"
    },
    {
      id: "7157",
      district_id: "159",
      name: "Gultepa MFY"
    },
    {
      id: "7158",
      district_id: "159",
      name: "Ibn-Sino MFY"
    },
    {
      id: "7159",
      district_id: "159",
      name: "Kalmakir MFY"
    },
    {
      id: "7160",
      district_id: "159",
      name: "Kamalak MFY"
    },
    {
      id: "7161",
      district_id: "159",
      name: "Kimyogar MFY"
    },
    {
      id: "7162",
      district_id: "159",
      name: "Koinot MFY"
    },
    {
      id: "7163",
      district_id: "159",
      name: "Kurpasoy MFY"
    },
    {
      id: "7164",
      district_id: "159",
      name: "M.Ulugbek MFY"
    },
    {
      id: "7165",
      district_id: "159",
      name: "Mukumiy MFY"
    },
    {
      id: "7166",
      district_id: "159",
      name: "Mustakillik MFY"
    },
    {
      id: "7167",
      district_id: "159",
      name: "Namuna MFY"
    },
    {
      id: "7168",
      district_id: "159",
      name: "Navruz MFY"
    },
    {
      id: "7169",
      district_id: "159",
      name: "Olmalik ovul MFY"
    },
    {
      id: "7170",
      district_id: "159",
      name: "Olmalik soy MFY"
    },
    {
      id: "7171",
      district_id: "159",
      name: "Oltin MFY"
    },
    {
      id: "7172",
      district_id: "159",
      name: "Oxunboboev MFY"
    },
    {
      id: "7173",
      district_id: "159",
      name: "Oydin MFY"
    },
    {
      id: "7174",
      district_id: "159",
      name: "Ramazon MFY"
    },
    {
      id: "7175",
      district_id: "159",
      name: "Sufi Ollayor MFY"
    },
    {
      id: "7176",
      district_id: "159",
      name: "Terekli MFY"
    },
    {
      id: "7177",
      district_id: "159",
      name: "Tinchlik MFY"
    },
    {
      id: "7178",
      district_id: "159",
      name: "Toshkent MFY"
    },
    {
      id: "7179",
      district_id: "159",
      name: "U.Nosir MFY"
    },
    {
      id: "7180",
      district_id: "159",
      name: "U.Yusupov MFY"
    },
    {
      id: "7181",
      district_id: "159",
      name: "Uvaysiy MFY"
    },
    {
      id: "7182",
      district_id: "159",
      name: "Uzbekiston MFY"
    },
    {
      id: "7183",
      district_id: "159",
      name: "X.Olimjon MFY"
    },
    {
      id: "7184",
      district_id: "159",
      name: "Xamza MFY"
    },
    {
      id: "7185",
      district_id: "159",
      name: "Yulduz MFY"
    },
    {
      id: "7186",
      district_id: "160",
      name: "Adolat MFY"
    },
    {
      id: "7187",
      district_id: "160",
      name: "Alisher MFY(jamoat asosida)"
    },
    {
      id: "7188",
      district_id: "160",
      name: "Azim ota MFY(jamoat asosida)"
    },
    {
      id: "7189",
      district_id: "160",
      name: "Baxt MFY"
    },
    {
      id: "7190",
      district_id: "160",
      name: "Birlik MFY"
    },
    {
      id: "7191",
      district_id: "160",
      name: "Birlik MFY(jamoat asosida)"
    },
    {
      id: "7192",
      district_id: "160",
      name: "Birlik QFY"
    },
    {
      id: "7193",
      district_id: "160",
      name: "Bo`ston MFY"
    },
    {
      id: "7194",
      district_id: "160",
      name: "Bo`ston MFY(jamoat asosida)"
    },
    {
      id: "7195",
      district_id: "160",
      name: "Buloq MFY(jamoat asosida)"
    },
    {
      id: "7196",
      district_id: "160",
      name: "Chetsuv MFY(jamoat asosida)"
    },
    {
      id: "7197",
      district_id: "160",
      name: "Chinor MFY(jamoat asosida)"
    },
    {
      id: "7198",
      district_id: "160",
      name: "Chuvildoq MFY(jamoat asosida)"
    },
    {
      id: "7199",
      district_id: "160",
      name: "Do`stlik MFY"
    },
    {
      id: "7200",
      district_id: "160",
      name: "Do`stlik QFY"
    },
    {
      id: "7201",
      district_id: "160",
      name: "Do`tlik MFY(jamoat asosida)"
    },
    {
      id: "7202",
      district_id: "160",
      name: "Eyval?k MFY(jamoat asosida)"
    },
    {
      id: "7203",
      district_id: "160",
      name: "g`alla-Quduq MFY"
    },
    {
      id: "7204",
      district_id: "160",
      name: "Go`shsoy MFY"
    },
    {
      id: "7205",
      district_id: "160",
      name: "Guliston MFY"
    },
    {
      id: "7206",
      district_id: "160",
      name: "Gulobod MFY(jamoat asosida)"
    },
    {
      id: "7207",
      district_id: "160",
      name: "Ilg`or MFY(jamoat asosida)"
    },
    {
      id: "7208",
      district_id: "160",
      name: "Iloq MFY"
    },
    {
      id: "7209",
      district_id: "160",
      name: "Ko`ksaroy MFY"
    },
    {
      id: "7210",
      district_id: "160",
      name: "Markaziy qo`rg`on MFY(jamoat asosida)"
    },
    {
      id: "7211",
      district_id: "160",
      name: "Mo`minobod MFY(jamoat asosida)"
    },
    {
      id: "7212",
      district_id: "160",
      name: "Mustaqillik MFY"
    },
    {
      id: "7213",
      district_id: "160",
      name: "Namuna MFY"
    },
    {
      id: "7214",
      district_id: "160",
      name: "Navbahor MFY"
    },
    {
      id: "7215",
      district_id: "160",
      name: "Nog`oyqo`rg`on MFY(jamoat asosida)"
    },
    {
      id: "7216",
      district_id: "160",
      name: "Obiz MFY(jamoat asosida)"
    },
    {
      id: "7217",
      district_id: "160",
      name: "Olmazor MFY(jamoat asosida)"
    },
    {
      id: "7218",
      district_id: "160",
      name: "Orzu MFY"
    },
    {
      id: "7219",
      district_id: "160",
      name: "Oxunboboev MFY"
    },
    {
      id: "7220",
      district_id: "160",
      name: "Oybuloq MFY(jamoat asosida)"
    },
    {
      id: "7221",
      district_id: "160",
      name: "Ozodlik MFY(jamoat asosida)"
    },
    {
      id: "7222",
      district_id: "160",
      name: "Ozodlik QFY"
    },
    {
      id: "7223",
      district_id: "160",
      name: "O`bayd MFY(jamoat asosida)"
    },
    {
      id: "7224",
      district_id: "160",
      name: "O`zar MFY(jamoat asosida)"
    },
    {
      id: "7225",
      district_id: "160",
      name: "O`zbekiston MFY(jamoat asosida)"
    },
    {
      id: "7226",
      district_id: "160",
      name: "Qayirma MFY(jamoat asosida)"
    },
    {
      id: "7227",
      district_id: "160",
      name: "Qiziloy MFY"
    },
    {
      id: "7228",
      district_id: "160",
      name: "Qorabaliq MFY(jamoat asosida)"
    },
    {
      id: "7229",
      district_id: "160",
      name: "Qorasuvyoqa MFY(jamoat asosida)"
    },
    {
      id: "7230",
      district_id: "160",
      name: "Qoraxitoy QFY"
    },
    {
      id: "7231",
      district_id: "160",
      name: "Qo`rg`on MFY"
    },
    {
      id: "7232",
      district_id: "160",
      name: "Qurama QFY"
    },
    {
      id: "7233",
      district_id: "160",
      name: "Quyun MFY(jamoat asosida)"
    },
    {
      id: "7234",
      district_id: "160",
      name: "Serkaqirildi MFY(jamoat asosida)"
    },
    {
      id: "7235",
      district_id: "160",
      name: "Sanam MFY"
    },
    {
      id: "7236",
      district_id: "160",
      name: "Sarijayloq MFY(jamoat asosida)"
    },
    {
      id: "7237",
      district_id: "160",
      name: "Sartamg`ali MFY(jamoat asosida)"
    },
    {
      id: "7238",
      district_id: "160",
      name: "Shodlik MFY"
    },
    {
      id: "7239",
      district_id: "160",
      name: "Shodmalik MFY(jamoat asosida)"
    },
    {
      id: "7240",
      district_id: "160",
      name: "Shoshtepa MFY(jamoat asosida)"
    },
    {
      id: "7241",
      district_id: "160",
      name: "Shovg`oz MFY(jamoat asosida)"
    },
    {
      id: "7242",
      district_id: "160",
      name: "Susam MFY(jamoat asosida)"
    },
    {
      id: "7243",
      district_id: "160",
      name: "Susam QFY"
    },
    {
      id: "7244",
      district_id: "160",
      name: "Talov MFY(jamoat asosida)"
    },
    {
      id: "7245",
      district_id: "160",
      name: "Talov QFY"
    },
    {
      id: "7246",
      district_id: "160",
      name: "Tangatopdi MFY(jamoat asosida)"
    },
    {
      id: "7247",
      district_id: "160",
      name: "Toshariq MFY(jamoat asosida)"
    },
    {
      id: "7248",
      district_id: "160",
      name: "Toshsoy MFY(jamoat asosida)"
    },
    {
      id: "7249",
      district_id: "160",
      name: "Tut MFY"
    },
    {
      id: "7250",
      district_id: "160",
      name: "Umid MFY"
    },
    {
      id: "7251",
      district_id: "160",
      name: "Ungut MFY(jamoat asosida)"
    },
    {
      id: "7252",
      district_id: "160",
      name: "Uvak MFY(jamoat asosida)"
    },
    {
      id: "7253",
      district_id: "160",
      name: "Uvak QFY"
    },
    {
      id: "7254",
      district_id: "160",
      name: "Vatan MFY"
    },
    {
      id: "7255",
      district_id: "160",
      name: "Xonobod MFY"
    },
    {
      id: "7256",
      district_id: "160",
      name: "Yalpoqtepa MFY(jamoat asosida)"
    },
    {
      id: "7257",
      district_id: "160",
      name: "Yangi-Hayot MFY"
    },
    {
      id: "7258",
      district_id: "160",
      name: "Yangibo`ston MFY(jamoat asosida)"
    },
    {
      id: "7259",
      district_id: "160",
      name: "Yangilik MFY"
    },
    {
      id: "7260",
      district_id: "160",
      name: "Yangiobod MFY"
    },
    {
      id: "7261",
      district_id: "160",
      name: "Yangiobod MFY(jamoat asosida)"
    },
    {
      id: "7262",
      district_id: "160",
      name: "Yangiqishlog`iloq MFY(jamoat asosida)"
    },
    {
      id: "7263",
      district_id: "160",
      name: "Yonariq MFY"
    },
    {
      id: "7264",
      district_id: "160",
      name: "Yoshlik MFY"
    },
    {
      id: "7265",
      district_id: "161",
      name: "Beshkappa MFY"
    },
    {
      id: "7266",
      district_id: "161",
      name: "Bodomtepa MFY"
    },
    {
      id: "7267",
      district_id: "161",
      name: "Bog`bon MFY"
    },
    {
      id: "7268",
      district_id: "161",
      name: "Boshqizilsoy QFY"
    },
    {
      id: "7269",
      district_id: "161",
      name: "Boyqozon MFY"
    },
    {
      id: "7270",
      district_id: "161",
      name: "Bo`ston MFY"
    },
    {
      id: "7271",
      district_id: "161",
      name: "Bo`ston QFY"
    },
    {
      id: "7272",
      district_id: "161",
      name: "Bulokboshi MFY"
    },
    {
      id: "7273",
      district_id: "161",
      name: "Bursilik MFY"
    },
    {
      id: "7274",
      district_id: "161",
      name: "Changi QFY"
    },
    {
      id: "7275",
      district_id: "161",
      name: "Chinor MFY"
    },
    {
      id: "7276",
      district_id: "161",
      name: "Chinorli MFY"
    },
    {
      id: "7277",
      district_id: "161",
      name: "Chukkayma MFY"
    },
    {
      id: "7278",
      district_id: "161",
      name: "Gulbog MFY"
    },
    {
      id: "7279",
      district_id: "161",
      name: "Gulbog` MFY"
    },
    {
      id: "7280",
      district_id: "161",
      name: "Guliston MFY"
    },
    {
      id: "7281",
      district_id: "161",
      name: "Istikbol MFY"
    },
    {
      id: "7282",
      district_id: "161",
      name: "Kulichi MFY"
    },
    {
      id: "7283",
      district_id: "161",
      name: "Kumushkon MFY"
    },
    {
      id: "7284",
      district_id: "161",
      name: "Kungay MFY"
    },
    {
      id: "7285",
      district_id: "161",
      name: "Kuruksoy MFY"
    },
    {
      id: "7286",
      district_id: "161",
      name: "Kushshukur MFY"
    },
    {
      id: "7287",
      district_id: "161",
      name: "Kuyosh MFY"
    },
    {
      id: "7288",
      district_id: "161",
      name: "Markaziy MFY"
    },
    {
      id: "7289",
      district_id: "161",
      name: "Mozorxoji MFY"
    },
    {
      id: "7290",
      district_id: "161",
      name: "Nevich MFY"
    },
    {
      id: "7291",
      district_id: "161",
      name: "Navruz MFY"
    },
    {
      id: "7292",
      district_id: "161",
      name: "Nomdanak QFY"
    },
    {
      id: "7293",
      district_id: "161",
      name: "Novdak MFY"
    },
    {
      id: "7294",
      district_id: "161",
      name: "Objuvoz MFY"
    },
    {
      id: "7295",
      district_id: "161",
      name: "Oktepa MFY"
    },
    {
      id: "7296",
      district_id: "161",
      name: "Olmazor MFY"
    },
    {
      id: "7297",
      district_id: "161",
      name: "Oybek MFY"
    },
    {
      id: "7298",
      district_id: "161",
      name: "O`rta MFY"
    },
    {
      id: "7299",
      district_id: "161",
      name: "Parkent QFY"
    },
    {
      id: "7300",
      district_id: "161",
      name: "Qirg`izovul MFY"
    },
    {
      id: "7301",
      district_id: "161",
      name: "Qoraqalpoq QFY"
    },
    {
      id: "7302",
      district_id: "161",
      name: "Qo`rg`on MFY"
    },
    {
      id: "7303",
      district_id: "161",
      name: "Qo`rg`ontepa MFY"
    },
    {
      id: "7304",
      district_id: "161",
      name: "Samarobod MFY"
    },
    {
      id: "7305",
      district_id: "161",
      name: "Samsarak-Navbaxor MFY"
    },
    {
      id: "7306",
      district_id: "161",
      name: "Shampan-Sanganak MFY"
    },
    {
      id: "7307",
      district_id: "161",
      name: "Shaxak MFY"
    },
    {
      id: "7308",
      district_id: "161",
      name: "Soy MFY"
    },
    {
      id: "7309",
      district_id: "161",
      name: "Soy MFY"
    },
    {
      id: "7310",
      district_id: "161",
      name: "So`qoq QFY"
    },
    {
      id: "7311",
      district_id: "161",
      name: "Surxi MFY"
    },
    {
      id: "7312",
      district_id: "161",
      name: "Teman MFY"
    },
    {
      id: "7313",
      district_id: "161",
      name: "Teman MFY"
    },
    {
      id: "7314",
      district_id: "161",
      name: "Tojiboy Rizaev MFY"
    },
    {
      id: "7315",
      district_id: "161",
      name: "Uchok MFY"
    },
    {
      id: "7316",
      district_id: "161",
      name: "Ulug`bek MFY"
    },
    {
      id: "7317",
      district_id: "161",
      name: "Xisarak QFY"
    },
    {
      id: "7318",
      district_id: "161",
      name: "Xuja MFY"
    },
    {
      id: "7319",
      district_id: "161",
      name: "Yangi MFY"
    },
    {
      id: "7320",
      district_id: "161",
      name: "Yangiobod MFY"
    },
    {
      id: "7321",
      district_id: "161",
      name: "Yukori MFY"
    },
    {
      id: "7322",
      district_id: "161",
      name: "Yuqori MFY"
    },
    {
      id: "7323",
      district_id: "161",
      name: "Yuqori MFY"
    },
    {
      id: "7324",
      district_id: "161",
      name: "Zarkent QFY"
    },
    {
      id: "7325",
      district_id: "162",
      name: "Bekobod MFY"
    },
    {
      id: "7326",
      district_id: "162",
      name: "Birlik MFY"
    },
    {
      id: "7327",
      district_id: "162",
      name: "Chimkurgon MFY"
    },
    {
      id: "7328",
      district_id: "162",
      name: "Cho`loqqo`rg`on MFY"
    },
    {
      id: "7329",
      district_id: "162",
      name: "Do`ngqo`rg`on QFY"
    },
    {
      id: "7330",
      district_id: "162",
      name: "Do`stlik MFY"
    },
    {
      id: "7331",
      district_id: "162",
      name: "g`ayrat MFY"
    },
    {
      id: "7332",
      district_id: "162",
      name: "Guliston MFY"
    },
    {
      id: "7333",
      district_id: "162",
      name: "Kelovchi QFY"
    },
    {
      id: "7334",
      district_id: "162",
      name: "Koriz QFY"
    },
    {
      id: "7335",
      district_id: "162",
      name: "Kulota MFY"
    },
    {
      id: "7336",
      district_id: "162",
      name: "Kultepa MFY"
    },
    {
      id: "7337",
      district_id: "162",
      name: "Lolaarik MFY"
    },
    {
      id: "7338",
      district_id: "162",
      name: "Maylobod MFY"
    },
    {
      id: "7339",
      district_id: "162",
      name: "Mingtepa MFY"
    },
    {
      id: "7340",
      district_id: "162",
      name: "Mitan MFY"
    },
    {
      id: "7341",
      district_id: "162",
      name: "Mo`minobod MFY"
    },
    {
      id: "7342",
      district_id: "162",
      name: "Murotali QFY"
    },
    {
      id: "7343",
      district_id: "162",
      name: "Mustakillik MFY"
    },
    {
      id: "7344",
      district_id: "162",
      name: "Namuna MFY"
    },
    {
      id: "7345",
      district_id: "162",
      name: "Navoiy MFY"
    },
    {
      id: "7346",
      district_id: "162",
      name: "Novkent MFY"
    },
    {
      id: "7347",
      district_id: "162",
      name: "Oktom MFY"
    },
    {
      id: "7348",
      district_id: "162",
      name: "Oqt?pa QFY"
    },
    {
      id: "7349",
      district_id: "162",
      name: "Oxunbobo?v MFY"
    },
    {
      id: "7350",
      district_id: "162",
      name: "Oybek MFY"
    },
    {
      id: "7351",
      district_id: "162",
      name: "Paxtapunkt MFY"
    },
    {
      id: "7352",
      district_id: "162",
      name: "Said QFY"
    },
    {
      id: "7353",
      district_id: "162",
      name: "Saidobod MFY"
    },
    {
      id: "7354",
      district_id: "162",
      name: "Suvti MFY"
    },
    {
      id: "7355",
      district_id: "162",
      name: "Xolikberdi MFY"
    },
    {
      id: "7356",
      district_id: "162",
      name: "Yangiobod MFY"
    },
    {
      id: "7357",
      district_id: "162",
      name: "Zominovul MFY"
    },
    {
      id: "7358",
      district_id: "163",
      name: " "
    },
    {
      id: "7359",
      district_id: "163",
      name: "A Yulbarisov MFY"
    },
    {
      id: "7360",
      district_id: "163",
      name: "Angor k.FY"
    },
    {
      id: "7361",
      district_id: "163",
      name: "Aranshi MFY"
    },
    {
      id: "7362",
      district_id: "163",
      name: "Argin-Kirgizovul MFY"
    },
    {
      id: "7363",
      district_id: "163",
      name: "Bektemir MFY"
    },
    {
      id: "7364",
      district_id: "163",
      name: "Beshboy MFY"
    },
    {
      id: "7365",
      district_id: "163",
      name: "Bagish MFY"
    },
    {
      id: "7366",
      district_id: "163",
      name: "Birlik MFY"
    },
    {
      id: "7367",
      district_id: "163",
      name: "Birlik MFY"
    },
    {
      id: "7368",
      district_id: "163",
      name: "Bobir MFY"
    },
    {
      id: "7369",
      district_id: "163",
      name: "Boykurgon MFY"
    },
    {
      id: "7370",
      district_id: "163",
      name: "Boyovul MFY"
    },
    {
      id: "7371",
      district_id: "163",
      name: "Burgalik MFY"
    },
    {
      id: "7372",
      district_id: "163",
      name: "Chivintepa MFY"
    },
    {
      id: "7373",
      district_id: "163",
      name: "Chukurovul MFY"
    },
    {
      id: "7374",
      district_id: "163",
      name: "Dexkonobod MFY"
    },
    {
      id: "7375",
      district_id: "163",
      name: "Darxan MFY"
    },
    {
      id: "7376",
      district_id: "163",
      name: "Do`stlik k.FY"
    },
    {
      id: "7377",
      district_id: "163",
      name: "Do`stlik MFY"
    },
    {
      id: "7378",
      district_id: "163",
      name: "Do`stlik MFY"
    },
    {
      id: "7379",
      district_id: "163",
      name: "Evalak MFY"
    },
    {
      id: "7380",
      district_id: "163",
      name: "Galabotir 1 MFY"
    },
    {
      id: "7381",
      district_id: "163",
      name: "Guliston MFY"
    },
    {
      id: "7382",
      district_id: "163",
      name: "Guzar MFY"
    },
    {
      id: "7383",
      district_id: "163",
      name: "Istiqlol k.FY"
    },
    {
      id: "7384",
      district_id: "163",
      name: "Jaloir MFY"
    },
    {
      id: "7385",
      district_id: "163",
      name: "Jangaboy MFY"
    },
    {
      id: "7386",
      district_id: "163",
      name: "Kaytmas MFY"
    },
    {
      id: "7387",
      district_id: "163",
      name: "Konchi MFY"
    },
    {
      id: "7388",
      district_id: "163",
      name: "Korakalpok MFY"
    },
    {
      id: "7389",
      district_id: "163",
      name: "Korasuv k.FY"
    },
    {
      id: "7390",
      district_id: "163",
      name: "Korasuv MFY"
    },
    {
      id: "7391",
      district_id: "163",
      name: "Kuchluk MFY"
    },
    {
      id: "7392",
      district_id: "163",
      name: "Kukm-uyin MFY"
    },
    {
      id: "7393",
      district_id: "163",
      name: "Kukonovul MFY"
    },
    {
      id: "7394",
      district_id: "163",
      name: "Kukonovul MFY"
    },
    {
      id: "7395",
      district_id: "163",
      name: "Kulkora MFY"
    },
    {
      id: "7396",
      district_id: "163",
      name: "Kumarik MFY"
    },
    {
      id: "7397",
      district_id: "163",
      name: "Kumovul QFY"
    },
    {
      id: "7398",
      district_id: "163",
      name: "Kundizak MFY"
    },
    {
      id: "7399",
      district_id: "163",
      name: "Kuramaovul MFY"
    },
    {
      id: "7400",
      district_id: "163",
      name: "Kutib yulduzi MFY"
    },
    {
      id: "7401",
      district_id: "163",
      name: "Mash`al MFY"
    },
    {
      id: "7402",
      district_id: "163",
      name: "Mayramkul MFY"
    },
    {
      id: "7403",
      district_id: "163",
      name: "Mikrarayon MFY"
    },
    {
      id: "7404",
      district_id: "163",
      name: "Mingtepa MFY"
    },
    {
      id: "7405",
      district_id: "163",
      name: "Mukimiy MFY"
    },
    {
      id: "7406",
      district_id: "163",
      name: "Mustakillik MFY"
    },
    {
      id: "7407",
      district_id: "163",
      name: "Mustakillik MFY"
    },
    {
      id: "7408",
      district_id: "163",
      name: "Mutal ota MFY"
    },
    {
      id: "7409",
      district_id: "163",
      name: "Namuna MFY"
    },
    {
      id: "7410",
      district_id: "163",
      name: "Navoiy k.FY"
    },
    {
      id: "7411",
      district_id: "163",
      name: "Navoiy MFY"
    },
    {
      id: "7412",
      district_id: "163",
      name: "Navoiy MFY"
    },
    {
      id: "7413",
      district_id: "163",
      name: "Navruz MFY"
    },
    {
      id: "7414",
      district_id: "163",
      name: "Navruz MFY"
    },
    {
      id: "7415",
      district_id: "163",
      name: "Nomdanak MFY"
    },
    {
      id: "7416",
      district_id: "163",
      name: "o` Sharafutdinov MFY"
    },
    {
      id: "7417",
      district_id: "163",
      name: "Ok ota k.FY"
    },
    {
      id: "7418",
      district_id: "163",
      name: "Olti ugil MFY"
    },
    {
      id: "7419",
      district_id: "163",
      name: "Oppok MFY"
    },
    {
      id: "7420",
      district_id: "163",
      name: "Oybek MFY"
    },
    {
      id: "7421",
      district_id: "163",
      name: "Paxtakor k.FY MFY"
    },
    {
      id: "7422",
      district_id: "163",
      name: "Paxtakor MFY"
    },
    {
      id: "7423",
      district_id: "163",
      name: "Paxtaobod k.FY"
    },
    {
      id: "7424",
      district_id: "163",
      name: "Rovatak MFY"
    },
    {
      id: "7425",
      district_id: "163",
      name: "Saidovul MFY"
    },
    {
      id: "7426",
      district_id: "163",
      name: "Sholikor MFY"
    },
    {
      id: "7427",
      district_id: "163",
      name: "TarakQiyot MFY"
    },
    {
      id: "7428",
      district_id: "163",
      name: "Tinchlik MFY"
    },
    {
      id: "7429",
      district_id: "163",
      name: "Toshlok MFY"
    },
    {
      id: "7430",
      district_id: "163",
      name: "Turkiston MFY"
    },
    {
      id: "7431",
      district_id: "163",
      name: "Tuyabugiz QFY"
    },
    {
      id: "7432",
      district_id: "163",
      name: "Uchkun MFY"
    },
    {
      id: "7433",
      district_id: "163",
      name: "Uchokli MFY"
    },
    {
      id: "7434",
      district_id: "163",
      name: "Urtabuz MFY"
    },
    {
      id: "7435",
      district_id: "163",
      name: "Urtaovul MFY"
    },
    {
      id: "7436",
      district_id: "163",
      name: "Urtasaroy k.FY"
    },
    {
      id: "7437",
      district_id: "163",
      name: "Urtasaroy MFY"
    },
    {
      id: "7438",
      district_id: "163",
      name: "Usmon ota MFY"
    },
    {
      id: "7439",
      district_id: "163",
      name: "Uygur MFY"
    },
    {
      id: "7440",
      district_id: "163",
      name: "X Olimjon MFY"
    },
    {
      id: "7441",
      district_id: "163",
      name: "Yangi turmush MFY"
    },
    {
      id: "7442",
      district_id: "163",
      name: "Yangi turmush MFY"
    },
    {
      id: "7443",
      district_id: "163",
      name: "Yangi xayot MFY"
    },
    {
      id: "7444",
      district_id: "163",
      name: "Yangilik MFY"
    },
    {
      id: "7445",
      district_id: "163",
      name: "Yangiobod MFY"
    },
    {
      id: "7446",
      district_id: "163",
      name: "Yangiobod MFY"
    },
    {
      id: "7447",
      district_id: "163",
      name: "Yangixayot QFY"
    },
    {
      id: "7448",
      district_id: "163",
      name: "Yangixayot MFY"
    },
    {
      id: "7449",
      district_id: "163",
      name: "Yangiyul MFY"
    },
    {
      id: "7450",
      district_id: "163",
      name: "Yorik MFY"
    },
    {
      id: "7451",
      district_id: "163",
      name: "Yukoriovul MFY"
    },
    {
      id: "7452",
      district_id: "163",
      name: "Yungichkoli k.FY"
    },
    {
      id: "7453",
      district_id: "163",
      name: "Yungichkoli MFY"
    },
    {
      id: "7454",
      district_id: "164",
      name: "Uymovut MFY(jamoatchi)"
    },
    {
      id: "7455",
      district_id: "164",
      name: "A.Navoiy MFY"
    },
    {
      id: "7456",
      district_id: "164",
      name: "A.Temur MFY(jamoatchi)"
    },
    {
      id: "7457",
      district_id: "164",
      name: "Abil ota MFY(jamoatchi)"
    },
    {
      id: "7458",
      district_id: "164",
      name: "Abzalobod MFY(jamoatchi)"
    },
    {
      id: "7459",
      district_id: "164",
      name: "Achamayli MFY(jamoatchi)"
    },
    {
      id: "7460",
      district_id: "164",
      name: "Archazor MFY(jamoatchi)"
    },
    {
      id: "7461",
      district_id: "164",
      name: "Avgon MFY"
    },
    {
      id: "7462",
      district_id: "164",
      name: "Axillik MFY(jamoatchi)"
    },
    {
      id: "7463",
      district_id: "164",
      name: "Besh-kapa MFY"
    },
    {
      id: "7464",
      district_id: "164",
      name: "Besh-kapa MFY"
    },
    {
      id: "7465",
      district_id: "164",
      name: "Birlik MFY(jamoatchi)"
    },
    {
      id: "7466",
      district_id: "164",
      name: "Bog`bon MFY(jamoatchi)"
    },
    {
      id: "7467",
      district_id: "164",
      name: "Chinmasjid MFY(jamoatchi)"
    },
    {
      id: "7468",
      district_id: "164",
      name: "Chinoz QFY"
    },
    {
      id: "7469",
      district_id: "164",
      name: "Dexkonobod MFY(jamoatchi)"
    },
    {
      id: "7470",
      district_id: "164",
      name: "Do`stlik MFY(jamoatchi)"
    },
    {
      id: "7471",
      district_id: "164",
      name: "Do`stlik MFY"
    },
    {
      id: "7472",
      district_id: "164",
      name: "Do`stlik MFY"
    },
    {
      id: "7473",
      district_id: "164",
      name: "Do`stlik MFY(jamoatchi)"
    },
    {
      id: "7474",
      district_id: "164",
      name: "Do`stlik MFY(jamoatchi)"
    },
    {
      id: "7475",
      district_id: "164",
      name: "Erkin MFY(jamoatchi)"
    },
    {
      id: "7476",
      district_id: "164",
      name: "Eshonobod QFY"
    },
    {
      id: "7477",
      district_id: "164",
      name: "Eski Toshkent QFY"
    },
    {
      id: "7478",
      district_id: "164",
      name: "Furkat MFY(jamoatchi)"
    },
    {
      id: "7479",
      district_id: "164",
      name: "Gayrat MFY(jamoatchi)"
    },
    {
      id: "7480",
      district_id: "164",
      name: "Guliston MFY(jamoatchi)"
    },
    {
      id: "7481",
      district_id: "164",
      name: "Gulzaraobod MFY"
    },
    {
      id: "7482",
      district_id: "164",
      name: "I.Sharipov MFY"
    },
    {
      id: "7483",
      district_id: "164",
      name: "Ishchilar sh MFY(jamoatchi)"
    },
    {
      id: "7484",
      district_id: "164",
      name: "Ishchilar shaxarchasi MFY"
    },
    {
      id: "7485",
      district_id: "164",
      name: "Islomobod MFY"
    },
    {
      id: "7486",
      district_id: "164",
      name: "Isloxat QFY"
    },
    {
      id: "7487",
      district_id: "164",
      name: "Ittifok MFY(jamoatchi)"
    },
    {
      id: "7488",
      district_id: "164",
      name: "Kerdara MFY(jamoatchi)"
    },
    {
      id: "7489",
      district_id: "164",
      name: "Kanalobod MFY(jamoatchi)"
    },
    {
      id: "7490",
      district_id: "164",
      name: "Kattatepalik MFY(jamoatchi)"
    },
    {
      id: "7491",
      district_id: "164",
      name: "Kaxramon MFY(jamoatchi)"
    },
    {
      id: "7492",
      district_id: "164",
      name: "Kaxramon MFY(jamoatchi)"
    },
    {
      id: "7493",
      district_id: "164",
      name: "Kayragoch MFY(jamoatchi)"
    },
    {
      id: "7494",
      district_id: "164",
      name: "Kora k-uyli MFY(jamoatchi)"
    },
    {
      id: "7495",
      district_id: "164",
      name: "Kozi MFY"
    },
    {
      id: "7496",
      district_id: "164",
      name: "Ko`tarma QFY"
    },
    {
      id: "7497",
      district_id: "164",
      name: "Kurik MFY(jamoatchi)"
    },
    {
      id: "7498",
      district_id: "164",
      name: "Kutarma MFY"
    },
    {
      id: "7499",
      district_id: "164",
      name: "M.Pulatov MFY(jamoatchi)"
    },
    {
      id: "7500",
      district_id: "164",
      name: "Mevazor MFY(jamoatchi)"
    },
    {
      id: "7501",
      district_id: "164",
      name: "Madaniyat MFY"
    },
    {
      id: "7502",
      district_id: "164",
      name: "Markaz MFY"
    },
    {
      id: "7503",
      district_id: "164",
      name: "Markaz MFY(jamoatchi)"
    },
    {
      id: "7504",
      district_id: "164",
      name: "Mukimiy MFY(jamoatchi)"
    },
    {
      id: "7505",
      district_id: "164",
      name: "Navoiy MFY"
    },
    {
      id: "7506",
      district_id: "164",
      name: "Navoiy MFY(jamoatchi)"
    },
    {
      id: "7507",
      district_id: "164",
      name: "Navruz MFY(jamoatchi)"
    },
    {
      id: "7508",
      district_id: "164",
      name: "Naxipov MFY(jamoatchi)"
    },
    {
      id: "7509",
      district_id: "164",
      name: "Norkuziev MFY(jamoatchi)"
    },
    {
      id: "7510",
      district_id: "164",
      name: "Obi xayot MFY(jamoatchi)"
    },
    {
      id: "7511",
      district_id: "164",
      name: "Oq oltin MFY"
    },
    {
      id: "7512",
      district_id: "164",
      name: "Olmazor SHFY"
    },
    {
      id: "7513",
      district_id: "164",
      name: "Olmos MFY(jamoatchi)"
    },
    {
      id: "7514",
      district_id: "164",
      name: "Oxunboboev MFY"
    },
    {
      id: "7515",
      district_id: "164",
      name: "Oxunboboev MFY(jamoatchi)"
    },
    {
      id: "7516",
      district_id: "164",
      name: "Oydin MFY(jamoatchi)"
    },
    {
      id: "7517",
      district_id: "164",
      name: "O`zbekiston QFY"
    },
    {
      id: "7518",
      district_id: "164",
      name: "Paxtaobod MFY"
    },
    {
      id: "7519",
      district_id: "164",
      name: "Qir MFY(jamoatchi)"
    },
    {
      id: "7520",
      district_id: "164",
      name: "Ramadon MFY(jamoatchi)"
    },
    {
      id: "7521",
      district_id: "164",
      name: "Rasulobod MFY"
    },
    {
      id: "7522",
      district_id: "164",
      name: "S`ayniy MFY(jamoatchi)"
    },
    {
      id: "7523",
      district_id: "164",
      name: "S`ayniy MFY(jamoatchi)"
    },
    {
      id: "7524",
      district_id: "164",
      name: "S.Raximov MFY"
    },
    {
      id: "7525",
      district_id: "164",
      name: "S.Segizboev MFY(jamoatchi)"
    },
    {
      id: "7526",
      district_id: "164",
      name: "Safar ota MFY(jamoatchi)"
    },
    {
      id: "7527",
      district_id: "164",
      name: "Samarkand MFY(jamoatchi)"
    },
    {
      id: "7528",
      district_id: "164",
      name: "Shevchenko MFY(jamoatchi)"
    },
    {
      id: "7529",
      district_id: "164",
      name: "Sutbulok MFY"
    },
    {
      id: "7530",
      district_id: "164",
      name: "Sutchilar MFY(jamoatchi)"
    },
    {
      id: "7531",
      district_id: "164",
      name: "Tilla topgan MFY(jamoatchi)"
    },
    {
      id: "7532",
      district_id: "164",
      name: "Tillaobod MFY(jamoatchi)"
    },
    {
      id: "7533",
      district_id: "164",
      name: "Tinchlik MFY(jamoatchi)"
    },
    {
      id: "7534",
      district_id: "164",
      name: "Turkiston QFY"
    },
    {
      id: "7535",
      district_id: "164",
      name: "U.Nosir MFY(jamoatchi)"
    },
    {
      id: "7536",
      district_id: "164",
      name: "U.Nosir MFY(jamoatchi)"
    },
    {
      id: "7537",
      district_id: "164",
      name: "U.Yusupov MFY(jamoatchi)"
    },
    {
      id: "7538",
      district_id: "164",
      name: "Uchkun MFY(jamoatchi)"
    },
    {
      id: "7539",
      district_id: "164",
      name: "Uzbekiston MFY(jamoatchi)"
    },
    {
      id: "7540",
      district_id: "164",
      name: "Uzumzor MFY(jamoatchi)"
    },
    {
      id: "7541",
      district_id: "164",
      name: "X.Olimjon MFY(jamoatchi)"
    },
    {
      id: "7542",
      district_id: "164",
      name: "Xamza MFY"
    },
    {
      id: "7543",
      district_id: "164",
      name: "Xamza MFY(jamoatchi)"
    },
    {
      id: "7544",
      district_id: "164",
      name: "Xamza MFY(jamoatchi)"
    },
    {
      id: "7545",
      district_id: "164",
      name: "Xolikov MFY(jamoatchi)"
    },
    {
      id: "7546",
      district_id: "164",
      name: "Xudoyberganov MFY(jamoatchi)"
    },
    {
      id: "7547",
      district_id: "164",
      name: "Xuja MFY"
    },
    {
      id: "7548",
      district_id: "164",
      name: "Yangi Chinoz SHFY"
    },
    {
      id: "7549",
      district_id: "164",
      name: "Yangi Mahalla MFY"
    },
    {
      id: "7550",
      district_id: "164",
      name: "Yangi obod MFY(jamoatchi)"
    },
    {
      id: "7551",
      district_id: "164",
      name: "Yangi obod MFY(jamoatchi)"
    },
    {
      id: "7552",
      district_id: "164",
      name: "Yangi xayot MFY(jamoatchi)"
    },
    {
      id: "7553",
      district_id: "164",
      name: "Yangiobod MFY"
    },
    {
      id: "7554",
      district_id: "164",
      name: "Yollama QFY"
    },
    {
      id: "7555",
      district_id: "164",
      name: "Yollama MFY(jamoatchi)"
    },
    {
      id: "7556",
      district_id: "164",
      name: "Yoshlik MFY"
    },
    {
      id: "7557",
      district_id: "164",
      name: "Yoshlik MFY(jamoatchi)"
    },
    {
      id: "7558",
      district_id: "164",
      name: "Yovvosh MFY(jamoatchi)"
    },
    {
      id: "7559",
      district_id: "164",
      name: "Yu.Karimov MFY(jamoatchi)"
    },
    {
      id: "7560",
      district_id: "164",
      name: "Yul tushgan MFY(jamoatchi)"
    },
    {
      id: "7561",
      district_id: "165",
      name: ".Lola. MFY"
    },
    {
      id: "7562",
      district_id: "165",
      name: "A.Temur MFY"
    },
    {
      id: "7563",
      district_id: "165",
      name: "A.Yassaviy MFY"
    },
    {
      id: "7564",
      district_id: "165",
      name: "Adolat MFY"
    },
    {
      id: "7565",
      district_id: "165",
      name: "Baxor MFY"
    },
    {
      id: "7566",
      district_id: "165",
      name: "Baxt MFY"
    },
    {
      id: "7567",
      district_id: "165",
      name: "Birlik MFY"
    },
    {
      id: "7568",
      district_id: "165",
      name: "Bobur MFY"
    },
    {
      id: "7569",
      district_id: "165",
      name: "Chinor MFY"
    },
    {
      id: "7570",
      district_id: "165",
      name: "Do`stlik MFY"
    },
    {
      id: "7571",
      district_id: "165",
      name: "G`alaba MFY"
    },
    {
      id: "7572",
      district_id: "165",
      name: "Guliston MFY"
    },
    {
      id: "7573",
      district_id: "165",
      name: "Gulzor MFY"
    },
    {
      id: "7574",
      district_id: "165",
      name: "Iftixor MFY"
    },
    {
      id: "7575",
      district_id: "165",
      name: "Ikbol MFY"
    },
    {
      id: "7576",
      district_id: "165",
      name: "Ishonch MFY"
    },
    {
      id: "7577",
      district_id: "165",
      name: "Istiqlol MFY"
    },
    {
      id: "7578",
      district_id: "165",
      name: "Kabutar MFY"
    },
    {
      id: "7579",
      district_id: "165",
      name: "Kamalak MFY"
    },
    {
      id: "7580",
      district_id: "165",
      name: "Kamolot MFY"
    },
    {
      id: "7581",
      district_id: "165",
      name: "Kimyogar MFY"
    },
    {
      id: "7582",
      district_id: "165",
      name: "Kuyosh MFY"
    },
    {
      id: "7583",
      district_id: "165",
      name: "Ma`rifat MFY"
    },
    {
      id: "7584",
      district_id: "165",
      name: "Madaniyat MFY"
    },
    {
      id: "7585",
      district_id: "165",
      name: "Mir Alisher MFY"
    },
    {
      id: "7586",
      district_id: "165",
      name: "Mirgolib MFY"
    },
    {
      id: "7587",
      district_id: "165",
      name: "Muruvvat MFY"
    },
    {
      id: "7588",
      district_id: "165",
      name: "Navbaxor MFY"
    },
    {
      id: "7589",
      district_id: "165",
      name: "Navro`z MFY"
    },
    {
      id: "7590",
      district_id: "165",
      name: "Nur MFY"
    },
    {
      id: "7591",
      district_id: "165",
      name: "Semurg MFY"
    },
    {
      id: "7592",
      district_id: "165",
      name: "Sharq MFY"
    },
    {
      id: "7593",
      district_id: "165",
      name: "Shodlik MFY"
    },
    {
      id: "7594",
      district_id: "165",
      name: "Tinchlik MFY"
    },
    {
      id: "7595",
      district_id: "165",
      name: "Turon MFY"
    },
    {
      id: "7596",
      district_id: "165",
      name: "Ulugbek MFY"
    },
    {
      id: "7597",
      district_id: "165",
      name: "Umid MFY"
    },
    {
      id: "7598",
      district_id: "165",
      name: "V.Xaydarov MFY"
    },
    {
      id: "7599",
      district_id: "165",
      name: "X.Maksudov MFY"
    },
    {
      id: "7600",
      district_id: "165",
      name: "Xamza MFY"
    },
    {
      id: "7601",
      district_id: "165",
      name: "Xayot guli MFY"
    },
    {
      id: "7602",
      district_id: "165",
      name: "Xumo MFY"
    },
    {
      id: "7603",
      district_id: "165",
      name: "Yoshlik MFY"
    },
    {
      id: "7604",
      district_id: "165",
      name: "Yulduz MFY"
    },
    {
      id: "7605",
      district_id: "166",
      name: "A.Yassaviy MFY"
    },
    {
      id: "7606",
      district_id: "166",
      name: "Arganchi QFY"
    },
    {
      id: "7607",
      district_id: "166",
      name: "Baliqchi MFY"
    },
    {
      id: "7608",
      district_id: "166",
      name: "Baxor MFY"
    },
    {
      id: "7609",
      district_id: "166",
      name: "Birlik MFY"
    },
    {
      id: "7610",
      district_id: "166",
      name: "Bolta MFY"
    },
    {
      id: "7611",
      district_id: "166",
      name: "Bordonkul MFY"
    },
    {
      id: "7612",
      district_id: "166",
      name: "Bordonkul QFY"
    },
    {
      id: "7613",
      district_id: "166",
      name: "Chirchiq MFY"
    },
    {
      id: "7614",
      district_id: "166",
      name: "Chumchuqjar MFY"
    },
    {
      id: "7615",
      district_id: "166",
      name: "Darxan MFY"
    },
    {
      id: "7616",
      district_id: "166",
      name: "Daulboy MFY"
    },
    {
      id: "7617",
      district_id: "166",
      name: "Do`stlik MFY"
    },
    {
      id: "7618",
      district_id: "166",
      name: "Do`stlik MFY"
    },
    {
      id: "7619",
      district_id: "166",
      name: "Do`stlik MFY"
    },
    {
      id: "7620",
      district_id: "166",
      name: "Gulbog` MFY"
    },
    {
      id: "7621",
      district_id: "166",
      name: "Guliston MFY"
    },
    {
      id: "7622",
      district_id: "166",
      name: "Istiqlol QFY"
    },
    {
      id: "7623",
      district_id: "166",
      name: "Ittifoq MFY"
    },
    {
      id: "7624",
      district_id: "166",
      name: "Iyk ota MFY"
    },
    {
      id: "7625",
      district_id: "166",
      name: "Jalol tepa MFY"
    },
    {
      id: "7626",
      district_id: "166",
      name: "Jambul QFY"
    },
    {
      id: "7627",
      district_id: "166",
      name: "Judruq MFY"
    },
    {
      id: "7628",
      district_id: "166",
      name: "Jumabozor MFY"
    },
    {
      id: "7629",
      district_id: "166",
      name: "Junsiz MFY"
    },
    {
      id: "7630",
      district_id: "166",
      name: "Kangli MFY"
    },
    {
      id: "7631",
      district_id: "166",
      name: "Markaziy MFY"
    },
    {
      id: "7632",
      district_id: "166",
      name: "Markaziy MFY"
    },
    {
      id: "7633",
      district_id: "166",
      name: "Mirobod MFY"
    },
    {
      id: "7634",
      district_id: "166",
      name: "Miyam- Kangli MFY"
    },
    {
      id: "7635",
      district_id: "166",
      name: "Navoiy MFY"
    },
    {
      id: "7636",
      district_id: "166",
      name: "Navoiy MFY"
    },
    {
      id: "7637",
      district_id: "166",
      name: "Navro`z MFY"
    },
    {
      id: "7638",
      district_id: "166",
      name: "Navro`z MFY"
    },
    {
      id: "7639",
      district_id: "166",
      name: "Navro`z MFY"
    },
    {
      id: "7640",
      district_id: "166",
      name: "Navro`z QFY"
    },
    {
      id: "7641",
      district_id: "166",
      name: "Obodon MFY"
    },
    {
      id: "7642",
      district_id: "166",
      name: "Oq- ovul QFY"
    },
    {
      id: "7643",
      district_id: "166",
      name: "Oq-ovul MFY"
    },
    {
      id: "7644",
      district_id: "166",
      name: "O`zbekiston MFY"
    },
    {
      id: "7645",
      district_id: "166",
      name: "Qaytmas MFY"
    },
    {
      id: "7646",
      district_id: "166",
      name: "Qizil soy MFY"
    },
    {
      id: "7647",
      district_id: "166",
      name: "Qora su MFY"
    },
    {
      id: "7648",
      district_id: "166",
      name: "Qoratuxum MFY"
    },
    {
      id: "7649",
      district_id: "166",
      name: "Qoratuxum MFY"
    },
    {
      id: "7650",
      district_id: "166",
      name: "Qursoy MFY"
    },
    {
      id: "7651",
      district_id: "166",
      name: "Saksonota MFY"
    },
    {
      id: "7652",
      district_id: "166",
      name: "Saksonota QFY"
    },
    {
      id: "7653",
      district_id: "166",
      name: "Surank?ent QFY"
    },
    {
      id: "7654",
      district_id: "166",
      name: "Tinchlik QFY"
    },
    {
      id: "7655",
      district_id: "166",
      name: "Toshtug`izaq MFY"
    },
    {
      id: "7656",
      district_id: "166",
      name: "To`qimboy MFY"
    },
    {
      id: "7657",
      district_id: "166",
      name: "Usmonobod MFY"
    },
    {
      id: "7658",
      district_id: "166",
      name: "Xitoy-tepa MFY"
    },
    {
      id: "7659",
      district_id: "166",
      name: "Yangibozor QFY"
    },
    {
      id: "7660",
      district_id: "166",
      name: "Yangiobod MFY"
    },
    {
      id: "7661",
      district_id: "166",
      name: "Yashlik MFY"
    },
    {
      id: "7662",
      district_id: "167",
      name: "A Ikromov MFY"
    },
    {
      id: "7663",
      district_id: "167",
      name: "A.Navoiy MFY"
    },
    {
      id: "7664",
      district_id: "167",
      name: "A.Ortikov QFY"
    },
    {
      id: "7665",
      district_id: "167",
      name: "Axil MFY"
    },
    {
      id: "7666",
      district_id: "167",
      name: "Baxor MFY"
    },
    {
      id: "7667",
      district_id: "167",
      name: "Baytish MFY"
    },
    {
      id: "7668",
      district_id: "167",
      name: "Bogbon MFY"
    },
    {
      id: "7669",
      district_id: "167",
      name: "Boz suv shaxarcha MFY"
    },
    {
      id: "7670",
      district_id: "167",
      name: "Chamanzor MFY"
    },
    {
      id: "7671",
      district_id: "167",
      name: "Chang tepa MFY"
    },
    {
      id: "7672",
      district_id: "167",
      name: "Chortok MFY"
    },
    {
      id: "7673",
      district_id: "167",
      name: "Dexkonobod MFY"
    },
    {
      id: "7674",
      district_id: "167",
      name: "Dangir MFY"
    },
    {
      id: "7675",
      district_id: "167",
      name: "Darxon MFY"
    },
    {
      id: "7676",
      district_id: "167",
      name: "Do`stlik MFY"
    },
    {
      id: "7677",
      district_id: "167",
      name: "Do`stlik MFY"
    },
    {
      id: "7678",
      district_id: "167",
      name: "E.Kovunchi QFY"
    },
    {
      id: "7679",
      district_id: "167",
      name: "Epkendi MFY"
    },
    {
      id: "7680",
      district_id: "167",
      name: "Farxod MFY"
    },
    {
      id: "7681",
      district_id: "167",
      name: "Fayzobod MFY"
    },
    {
      id: "7682",
      district_id: "167",
      name: "Galaba MFY"
    },
    {
      id: "7683",
      district_id: "167",
      name: "Gulbaxor MFY"
    },
    {
      id: "7684",
      district_id: "167",
      name: "Gulbaxor shaxarcha MFY"
    },
    {
      id: "7685",
      district_id: "167",
      name: "Gulbog MFY"
    },
    {
      id: "7686",
      district_id: "167",
      name: "Guliston MFY"
    },
    {
      id: "7687",
      district_id: "167",
      name: "I.Urazov MFY"
    },
    {
      id: "7688",
      district_id: "167",
      name: "Inogomov MFY"
    },
    {
      id: "7689",
      district_id: "167",
      name: "Ishchilar shaxarchasi MFY"
    },
    {
      id: "7690",
      district_id: "167",
      name: "Isloxat MFY"
    },
    {
      id: "7691",
      district_id: "167",
      name: "Ittifok MFY"
    },
    {
      id: "7692",
      district_id: "167",
      name: "Ittifok MFY"
    },
    {
      id: "7693",
      district_id: "167",
      name: "Jambul MFY"
    },
    {
      id: "7694",
      district_id: "167",
      name: "King kechik MFY"
    },
    {
      id: "7695",
      district_id: "167",
      name: "Kirimkulov MFY"
    },
    {
      id: "7696",
      district_id: "167",
      name: "Keskan MFY"
    },
    {
      id: "7697",
      district_id: "167",
      name: "Kirsadik MFY"
    },
    {
      id: "7698",
      district_id: "167",
      name: "Kora tepa MFY"
    },
    {
      id: "7699",
      district_id: "167",
      name: "Kovunchi MFY"
    },
    {
      id: "7700",
      district_id: "167",
      name: "KukalamzorMFY"
    },
    {
      id: "7701",
      district_id: "167",
      name: "Kush tepa MFY"
    },
    {
      id: "7702",
      district_id: "167",
      name: "Kush yogoch MFY"
    },
    {
      id: "7703",
      district_id: "167",
      name: "Kush yogoch QFY"
    },
    {
      id: "7704",
      district_id: "167",
      name: "Mezon MFY"
    },
    {
      id: "7705",
      district_id: "167",
      name: "Madaniyat MFY"
    },
    {
      id: "7706",
      district_id: "167",
      name: "Markaz MFY"
    },
    {
      id: "7707",
      district_id: "167",
      name: "Mirishkor MFY"
    },
    {
      id: "7708",
      district_id: "167",
      name: "Mirzababaev MFY"
    },
    {
      id: "7709",
      district_id: "167",
      name: "Muqumiy MFY"
    },
    {
      id: "7710",
      district_id: "167",
      name: "Mustakillik MFY"
    },
    {
      id: "7711",
      district_id: "167",
      name: "Mustaqillik MFY"
    },
    {
      id: "7712",
      district_id: "167",
      name: "N.Niyozov MFY"
    },
    {
      id: "7713",
      district_id: "167",
      name: "Namuna MFY"
    },
    {
      id: "7714",
      district_id: "167",
      name: "Navbaxor MFY"
    },
    {
      id: "7715",
      district_id: "167",
      name: "Navbaxor QFY"
    },
    {
      id: "7716",
      district_id: "167",
      name: "Navro`z MFY"
    },
    {
      id: "7717",
      district_id: "167",
      name: "Navruz MFY"
    },
    {
      id: "7718",
      district_id: "167",
      name: "Navruz MFY"
    },
    {
      id: "7719",
      district_id: "167",
      name: "Niyozbosh QFY"
    },
    {
      id: "7720",
      district_id: "167",
      name: "Nodirabegim MFY"
    },
    {
      id: "7721",
      district_id: "167",
      name: "Nov MFY"
    },
    {
      id: "7722",
      district_id: "167",
      name: "Nurobod MFY"
    },
    {
      id: "7723",
      district_id: "167",
      name: "Oltinobod MFY"
    },
    {
      id: "7724",
      district_id: "167",
      name: "Oxunbabaev MFY"
    },
    {
      id: "7725",
      district_id: "167",
      name: "Oybek MFY"
    },
    {
      id: "7726",
      district_id: "167",
      name: "Paxta MFY"
    },
    {
      id: "7727",
      district_id: "167",
      name: "Pistalik MFY"
    },
    {
      id: "7728",
      district_id: "167",
      name: "Ramadon MFY"
    },
    {
      id: "7729",
      district_id: "167",
      name: "Said ota MFY"
    },
    {
      id: "7730",
      district_id: "167",
      name: "Saida Sultonova MFY"
    },
    {
      id: "7731",
      district_id: "167",
      name: "Samarkand MFY"
    },
    {
      id: "7732",
      district_id: "167",
      name: "Shuralisoy MFY"
    },
    {
      id: "7733",
      district_id: "167",
      name: "Shuralisoy QFY"
    },
    {
      id: "7734",
      district_id: "167",
      name: "Tuyabugiz MFY"
    },
    {
      id: "7735",
      district_id: "167",
      name: "U.Musaev QFY"
    },
    {
      id: "7736",
      district_id: "167",
      name: "Umid MFY"
    },
    {
      id: "7737",
      district_id: "167",
      name: "Uzbekiston bekati MFY"
    },
    {
      id: "7738",
      district_id: "167",
      name: "Uzbekiston MFY"
    },
    {
      id: "7739",
      district_id: "167",
      name: "Vatan MFY"
    },
    {
      id: "7740",
      district_id: "167",
      name: "Xakikat MFY"
    },
    {
      id: "7741",
      district_id: "167",
      name: "Xalkobod MFY"
    },
    {
      id: "7742",
      district_id: "167",
      name: "Xalqobod QFY"
    },
    {
      id: "7743",
      district_id: "167",
      name: "Xonkurogon MFY"
    },
    {
      id: "7744",
      district_id: "167",
      name: "Xo`jaobod MFY"
    },
    {
      id: "7745",
      district_id: "167",
      name: "Yangiobod MFY(jamoatchi)"
    },
    {
      id: "7746",
      district_id: "167",
      name: "Yangiyo`l MFY"
    },
    {
      id: "7747",
      district_id: "167",
      name: "Yoshlik MFY"
    },
    {
      id: "7748",
      district_id: "167",
      name: "Z.M. Bobur MFY"
    },
    {
      id: "7749",
      district_id: "168",
      name: "Abdurazzoq ota MFY"
    },
    {
      id: "7750",
      district_id: "168",
      name: "Abduvay MFY"
    },
    {
      id: "7751",
      district_id: "168",
      name: "Andarxon QFY"
    },
    {
      id: "7752",
      district_id: "168",
      name: "Arikboshi MFY"
    },
    {
      id: "7753",
      district_id: "168",
      name: "Besharik QFY"
    },
    {
      id: "7754",
      district_id: "168",
      name: "Beshkapa MFY"
    },
    {
      id: "7755",
      district_id: "168",
      name: "Beshsari QFY"
    },
    {
      id: "7756",
      district_id: "168",
      name: "Baxmal MFY"
    },
    {
      id: "7757",
      district_id: "168",
      name: "Boy MFY"
    },
    {
      id: "7758",
      district_id: "168",
      name: "Bulokboshi MFY"
    },
    {
      id: "7759",
      district_id: "168",
      name: "Buston MFY"
    },
    {
      id: "7760",
      district_id: "168",
      name: "Chimboy MFY"
    },
    {
      id: "7761",
      district_id: "168",
      name: "Chinobod MFY"
    },
    {
      id: "7762",
      district_id: "168",
      name: "Chorbog MFY"
    },
    {
      id: "7763",
      district_id: "168",
      name: "Chorbogturangi"
    },
    {
      id: "7764",
      district_id: "168",
      name: "D.X.Olimjon MFY"
    },
    {
      id: "7765",
      district_id: "168",
      name: "Dexkonobod MFY"
    },
    {
      id: "7766",
      district_id: "168",
      name: "Dexkontuda MFY"
    },
    {
      id: "7767",
      district_id: "168",
      name: "Dultali MFY"
    },
    {
      id: "7768",
      district_id: "168",
      name: "Eshon MFY"
    },
    {
      id: "7769",
      district_id: "168",
      name: "Fayziobod MFY"
    },
    {
      id: "7770",
      district_id: "168",
      name: "Galcha MFY"
    },
    {
      id: "7771",
      district_id: "168",
      name: "Gambay MFY"
    },
    {
      id: "7772",
      district_id: "168",
      name: "K.Zarkaynar MFY"
    },
    {
      id: "7773",
      district_id: "168",
      name: "Kapayangi MFY"
    },
    {
      id: "7774",
      district_id: "168",
      name: "Kashkar QFY"
    },
    {
      id: "7775",
      district_id: "168",
      name: "Kiyali MFY"
    },
    {
      id: "7776",
      district_id: "168",
      name: "Kiyat-Sartol MFY"
    },
    {
      id: "7777",
      district_id: "168",
      name: "Korabuyin MFY"
    },
    {
      id: "7778",
      district_id: "168",
      name: "Korajiyda QFY"
    },
    {
      id: "7779",
      district_id: "168",
      name: "Korakuyli MFY"
    },
    {
      id: "7780",
      district_id: "168",
      name: "Korayantok MFY"
    },
    {
      id: "7781",
      district_id: "168",
      name: "Kulalobod MFY"
    },
    {
      id: "7782",
      district_id: "168",
      name: "Kum MFY"
    },
    {
      id: "7783",
      district_id: "168",
      name: "Kurgoncha MFY"
    },
    {
      id: "7784",
      district_id: "168",
      name: "Nabi MFY"
    },
    {
      id: "7785",
      district_id: "168",
      name: "Navbaxor MFY"
    },
    {
      id: "7786",
      district_id: "168",
      name: "Navkat MFY"
    },
    {
      id: "7787",
      district_id: "168",
      name: "Obod MFY"
    },
    {
      id: "7788",
      district_id: "168",
      name: "Oktovuk MFY"
    },
    {
      id: "7789",
      district_id: "168",
      name: "P.Yangikurgon MFY"
    },
    {
      id: "7790",
      district_id: "168",
      name: "Pastki Yakkatut MFY"
    },
    {
      id: "7791",
      district_id: "168",
      name: "Rapkon QFY"
    },
    {
      id: "7792",
      district_id: "168",
      name: "Shaxar MFY"
    },
    {
      id: "7793",
      district_id: "168",
      name: "Shaytonkul MFY"
    },
    {
      id: "7794",
      district_id: "168",
      name: "Shoberdi MFY"
    },
    {
      id: "7795",
      district_id: "168",
      name: "Shodlikobod MFY"
    },
    {
      id: "7796",
      district_id: "168",
      name: "Shur MFY"
    },
    {
      id: "7797",
      district_id: "168",
      name: "Sobirtepa MFY"
    },
    {
      id: "7798",
      district_id: "168",
      name: "Soylabi MFY"
    },
    {
      id: "7799",
      district_id: "168",
      name: "Tolov MFY"
    },
    {
      id: "7800",
      district_id: "168",
      name: "Tosharik MFY"
    },
    {
      id: "7801",
      district_id: "168",
      name: "Tovul QFY"
    },
    {
      id: "7802",
      district_id: "168",
      name: "Uttizzambar MFY"
    },
    {
      id: "7803",
      district_id: "168",
      name: "Uzun MFY"
    },
    {
      id: "7804",
      district_id: "168",
      name: "Vatan QFY"
    },
    {
      id: "7805",
      district_id: "168",
      name: "Vorux-Dasht MFY"
    },
    {
      id: "7806",
      district_id: "168",
      name: "Xalqlar Do`stligi MFY"
    },
    {
      id: "7807",
      district_id: "168",
      name: "Ya.Kashkar MFY"
    },
    {
      id: "7808",
      district_id: "168",
      name: "Yakkatut QFY"
    },
    {
      id: "7809",
      district_id: "168",
      name: "Yangi MFY"
    },
    {
      id: "7810",
      district_id: "168",
      name: "Yangi Rapqon MFY"
    },
    {
      id: "7811",
      district_id: "168",
      name: "Yangi Xayot MFY"
    },
    {
      id: "7812",
      district_id: "168",
      name: "Yu,Zarkaynar MFY"
    },
    {
      id: "7813",
      district_id: "168",
      name: "Yu.Tovul MFY"
    },
    {
      id: "7814",
      district_id: "169",
      name: "Amirobod MFY"
    },
    {
      id: "7815",
      district_id: "169",
      name: "Amirobod QFY"
    },
    {
      id: "7816",
      district_id: "169",
      name: "Bedarak MFY"
    },
    {
      id: "7817",
      district_id: "169",
      name: "Bekobod MFY"
    },
    {
      id: "7818",
      district_id: "169",
      name: "Bag`dod SHFY"
    },
    {
      id: "7819",
      district_id: "169",
      name: "Bag`dod-2 MFY"
    },
    {
      id: "7820",
      district_id: "169",
      name: "Bog`ishamol MFY"
    },
    {
      id: "7821",
      district_id: "169",
      name: "Bordon MFY"
    },
    {
      id: "7822",
      district_id: "169",
      name: "Chekmirzaobod MFY"
    },
    {
      id: "7823",
      district_id: "169",
      name: "Cheksaroy MFY"
    },
    {
      id: "7824",
      district_id: "169",
      name: "Cho`l-Yunus MFY"
    },
    {
      id: "7825",
      district_id: "169",
      name: "Cho`rindi MFY"
    },
    {
      id: "7826",
      district_id: "169",
      name: "Chuvalanchi MFY"
    },
    {
      id: "7827",
      district_id: "169",
      name: "Chuvalanchi QFY"
    },
    {
      id: "7828",
      district_id: "169",
      name: "Dasht MFY"
    },
    {
      id: "7829",
      district_id: "169",
      name: "Do`rmancha MFY"
    },
    {
      id: "7830",
      district_id: "169",
      name: "Do`rmancha QFY"
    },
    {
      id: "7831",
      district_id: "169",
      name: "Do`stlik MFY"
    },
    {
      id: "7832",
      district_id: "169",
      name: "Irg`oli MFY"
    },
    {
      id: "7833",
      district_id: "169",
      name: "Ittifoq MFY"
    },
    {
      id: "7834",
      district_id: "169",
      name: "Karimbobo MFY"
    },
    {
      id: "7835",
      district_id: "169",
      name: "Konizar MFY"
    },
    {
      id: "7836",
      district_id: "169",
      name: "Ko`g`oli MFY"
    },
    {
      id: "7837",
      district_id: "169",
      name: "Mexnatobod MFY"
    },
    {
      id: "7838",
      district_id: "169",
      name: "Matqulobod MFY"
    },
    {
      id: "7839",
      district_id: "169",
      name: "Matqulobod QFY"
    },
    {
      id: "7840",
      district_id: "169",
      name: "Mirishkor MFY"
    },
    {
      id: "7841",
      district_id: "169",
      name: "Mirzaobod MFY"
    },
    {
      id: "7842",
      district_id: "169",
      name: "Muqimiy MFY"
    },
    {
      id: "7843",
      district_id: "169",
      name: "Muruvvat MFY"
    },
    {
      id: "7844",
      district_id: "169",
      name: "Olchin MFY"
    },
    {
      id: "7845",
      district_id: "169",
      name: "Oydinbuloq MFY"
    },
    {
      id: "7846",
      district_id: "169",
      name: "O`zbekiston MFY"
    },
    {
      id: "7847",
      district_id: "169",
      name: "Paxtaobod QFY"
    },
    {
      id: "7848",
      district_id: "169",
      name: "Qaroqchitol MFY"
    },
    {
      id: "7849",
      district_id: "169",
      name: "Qashqari MFY"
    },
    {
      id: "7850",
      district_id: "169",
      name: "Qaxat MFY"
    },
    {
      id: "7851",
      district_id: "169",
      name: "Qirqboldi MFY"
    },
    {
      id: "7852",
      district_id: "169",
      name: "Qorako`l MFY"
    },
    {
      id: "7853",
      district_id: "169",
      name: "Qoroqchitol QFY"
    },
    {
      id: "7854",
      district_id: "169",
      name: "Qorovultepa MFY"
    },
    {
      id: "7855",
      district_id: "169",
      name: "Qo`shchinor MFY"
    },
    {
      id: "7856",
      district_id: "169",
      name: "Qo`shtegirmon 1 MFY"
    },
    {
      id: "7857",
      district_id: "169",
      name: "Qo`shtegirmon 2 MFY"
    },
    {
      id: "7858",
      district_id: "169",
      name: "Samandarak MFY"
    },
    {
      id: "7859",
      district_id: "169",
      name: "Samarqand MFY"
    },
    {
      id: "7860",
      district_id: "169",
      name: "Samarqand QFY"
    },
    {
      id: "7861",
      district_id: "169",
      name: "Sho`roqir MFY"
    },
    {
      id: "7862",
      district_id: "169",
      name: "Tinchlik QFY"
    },
    {
      id: "7863",
      district_id: "169",
      name: "Tuvadoq MFY"
    },
    {
      id: "7864",
      district_id: "169",
      name: "Ultarma MFY"
    },
    {
      id: "7865",
      district_id: "169",
      name: "Ultarma QFY"
    },
    {
      id: "7866",
      district_id: "169",
      name: "Xitoy MFY"
    },
    {
      id: "7867",
      district_id: "169",
      name: "Xo`jakishlok MFY"
    },
    {
      id: "7868",
      district_id: "169",
      name: "Yuqori Mirzaobod MFY"
    },
    {
      id: "7869",
      district_id: "169",
      name: "Zafarobod QFY"
    },
    {
      id: "7870",
      district_id: "170",
      name: "Alkor QFY"
    },
    {
      id: "7871",
      district_id: "170",
      name: "Beglar MFY"
    },
    {
      id: "7872",
      district_id: "170",
      name: "Begobod QFY"
    },
    {
      id: "7873",
      district_id: "170",
      name: "Begobod MFY"
    },
    {
      id: "7874",
      district_id: "170",
      name: "Beshterak QFY"
    },
    {
      id: "7875",
      district_id: "170",
      name: "Beshterak MFY"
    },
    {
      id: "7876",
      district_id: "170",
      name: "Buvayda QFY"
    },
    {
      id: "7877",
      district_id: "170",
      name: "Buvimozor MFY"
    },
    {
      id: "7878",
      district_id: "170",
      name: "Chumbogish MFY"
    },
    {
      id: "7879",
      district_id: "170",
      name: "Chutaka MFY"
    },
    {
      id: "7880",
      district_id: "170",
      name: "Dexkonobod MFY"
    },
    {
      id: "7881",
      district_id: "170",
      name: "Dodxo MFY"
    },
    {
      id: "7882",
      district_id: "170",
      name: "Elobod MFY"
    },
    {
      id: "7883",
      district_id: "170",
      name: "Ibrat SHFY"
    },
    {
      id: "7884",
      district_id: "170",
      name: "Ingirchok MFY"
    },
    {
      id: "7885",
      district_id: "170",
      name: "Jalor MFY"
    },
    {
      id: "7886",
      district_id: "170",
      name: "Jov MFY"
    },
    {
      id: "7887",
      district_id: "170",
      name: "Kilovt?pa MFY"
    },
    {
      id: "7888",
      district_id: "170",
      name: "Korakum MFY"
    },
    {
      id: "7889",
      district_id: "170",
      name: "Kum MFY"
    },
    {
      id: "7890",
      district_id: "170",
      name: "Kungirot QFY"
    },
    {
      id: "7891",
      district_id: "170",
      name: "Kurgoncha MFY"
    },
    {
      id: "7892",
      district_id: "170",
      name: "Kurgonobod QFY"
    },
    {
      id: "7893",
      district_id: "170",
      name: "Maslaxat MFY"
    },
    {
      id: "7894",
      district_id: "170",
      name: "Nayman MFY"
    },
    {
      id: "7895",
      district_id: "170",
      name: "Okkurgon QFY"
    },
    {
      id: "7896",
      district_id: "170",
      name: "Oktepa MFY"
    },
    {
      id: "7897",
      district_id: "170",
      name: "Oltinkurgon MFY"
    },
    {
      id: "7898",
      district_id: "170",
      name: "Oyim MFY"
    },
    {
      id: "7899",
      district_id: "170",
      name: "Ozod MFY"
    },
    {
      id: "7900",
      district_id: "170",
      name: "Pishagar MFY"
    },
    {
      id: "7901",
      district_id: "170",
      name: "Ponsod MFY"
    },
    {
      id: "7902",
      district_id: "170",
      name: "Poshshopirim MFY"
    },
    {
      id: "7903",
      district_id: "170",
      name: "Shur kishlok MFY"
    },
    {
      id: "7904",
      district_id: "170",
      name: "Shur MFY"
    },
    {
      id: "7905",
      district_id: "170",
      name: "Tepalik MFY"
    },
    {
      id: "7906",
      district_id: "170",
      name: "Tarrachi MFY"
    },
    {
      id: "7907",
      district_id: "170",
      name: "Toglik MFY"
    },
    {
      id: "7908",
      district_id: "170",
      name: "Tuman MFY"
    },
    {
      id: "7909",
      district_id: "170",
      name: "Turk MFY"
    },
    {
      id: "7910",
      district_id: "170",
      name: "Urganji MFY"
    },
    {
      id: "7911",
      district_id: "170",
      name: "Urta Kungirot MFY"
    },
    {
      id: "7912",
      district_id: "170",
      name: "Uzumzor QFY"
    },
    {
      id: "7913",
      district_id: "170",
      name: "Xakimto`ra MFY"
    },
    {
      id: "7914",
      district_id: "170",
      name: "Xasankurgoncha MFY"
    },
    {
      id: "7915",
      district_id: "170",
      name: "Xonobod MFY"
    },
    {
      id: "7916",
      district_id: "170",
      name: "Xujauldi MFY"
    },
    {
      id: "7917",
      district_id: "170",
      name: "Yangi xayot MFY"
    },
    {
      id: "7918",
      district_id: "170",
      name: "Yangikadam QFY"
    },
    {
      id: "7919",
      district_id: "170",
      name: "Yangikishlok MFY"
    },
    {
      id: "7920",
      district_id: "170",
      name: "Yashnarobod MFY"
    },
    {
      id: "7921",
      district_id: "170",
      name: "Yukori Mangit MFY"
    },
    {
      id: "7922",
      district_id: "170",
      name: "Zarbuloq SHFY"
    },
    {
      id: "7923",
      district_id: "171",
      name: "Abdusamad MFY"
    },
    {
      id: "7924",
      district_id: "171",
      name: "Aravon MFY"
    },
    {
      id: "7925",
      district_id: "171",
      name: "Arziqtepa MFY"
    },
    {
      id: "7926",
      district_id: "171",
      name: "Bog`ish MFY"
    },
    {
      id: "7927",
      district_id: "171",
      name: "Boy-bucha MFY"
    },
    {
      id: "7928",
      district_id: "171",
      name: "Boy-buta MFY"
    },
    {
      id: "7929",
      district_id: "171",
      name: "Burikum MFY"
    },
    {
      id: "7930",
      district_id: "171",
      name: "Chinobod QFY"
    },
    {
      id: "7931",
      district_id: "171",
      name: "Dang`ara SHFY"
    },
    {
      id: "7932",
      district_id: "171",
      name: "Doimobod MFY"
    },
    {
      id: "7933",
      district_id: "171",
      name: "G`alaba QFY"
    },
    {
      id: "7934",
      district_id: "171",
      name: "Gumoyli MFY"
    },
    {
      id: "7935",
      district_id: "171",
      name: "Kapasaroy MFY"
    },
    {
      id: "7936",
      district_id: "171",
      name: "Katta Gajiravon MFY"
    },
    {
      id: "7937",
      district_id: "171",
      name: "Katta-Amirobod MFY"
    },
    {
      id: "7938",
      district_id: "171",
      name: "Katta-Oqtepa MFY"
    },
    {
      id: "7939",
      district_id: "171",
      name: "Katta-turk MFY"
    },
    {
      id: "7940",
      district_id: "171",
      name: "Kichik-turk MFY"
    },
    {
      id: "7941",
      district_id: "171",
      name: "Mangit MFY"
    },
    {
      id: "7942",
      district_id: "171",
      name: "Minglar MFY"
    },
    {
      id: "7943",
      district_id: "171",
      name: "Mulkobod QFY"
    },
    {
      id: "7944",
      district_id: "171",
      name: "Navbaxor MFY"
    },
    {
      id: "7945",
      district_id: "171",
      name: "Naymancha QFY"
    },
    {
      id: "7946",
      district_id: "171",
      name: "Oltikush MFY"
    },
    {
      id: "7947",
      district_id: "171",
      name: "Oqjar QFY"
    },
    {
      id: "7948",
      district_id: "171",
      name: "Pishkaron MFY"
    },
    {
      id: "7949",
      district_id: "171",
      name: "Qashqar MFY"
    },
    {
      id: "7950",
      district_id: "171",
      name: "Qiyali QFY"
    },
    {
      id: "7951",
      district_id: "171",
      name: "Qiyali-qo`rg`oncha MFY"
    },
    {
      id: "7952",
      district_id: "171",
      name: "Qizilmusht MFY"
    },
    {
      id: "7953",
      district_id: "171",
      name: "Qora-kurpa MFY"
    },
    {
      id: "7954",
      district_id: "171",
      name: "Qoramulla MFY"
    },
    {
      id: "7955",
      district_id: "171",
      name: "Qumkiyali MFY"
    },
    {
      id: "7956",
      district_id: "171",
      name: "Raxmatillo MFY"
    },
    {
      id: "7957",
      district_id: "171",
      name: "Sanam QFY"
    },
    {
      id: "7958",
      district_id: "171",
      name: "Shopo`lat MFY"
    },
    {
      id: "7959",
      district_id: "171",
      name: "Soy-shildir MFY"
    },
    {
      id: "7960",
      district_id: "171",
      name: "Teliming MFY"
    },
    {
      id: "7961",
      district_id: "171",
      name: "Tangriqul MFY"
    },
    {
      id: "7962",
      district_id: "171",
      name: "Taptiksaroy MFY"
    },
    {
      id: "7963",
      district_id: "171",
      name: "Targova MFY"
    },
    {
      id: "7964",
      district_id: "171",
      name: "Taypoq MFY"
    },
    {
      id: "7965",
      district_id: "171",
      name: "Taypoq QFY"
    },
    {
      id: "7966",
      district_id: "171",
      name: "To`laboy MFY"
    },
    {
      id: "7967",
      district_id: "171",
      name: "Tumor MFY"
    },
    {
      id: "7968",
      district_id: "171",
      name: "Urganji MFY"
    },
    {
      id: "7969",
      district_id: "171",
      name: "Uvaysiy MFY"
    },
    {
      id: "7970",
      district_id: "171",
      name: "Uymovut MFY"
    },
    {
      id: "7971",
      district_id: "171",
      name: "Yangi-1 MFY"
    },
    {
      id: "7972",
      district_id: "171",
      name: "Yashik MFY"
    },
    {
      id: "7973",
      district_id: "172",
      name: "Guzarboshi MFY\r\n"
    },
    {
      id: "7974",
      district_id: "172",
      name: "Beruniy MFY"
    },
    {
      id: "7975",
      district_id: "172",
      name: "Boxor MFY"
    },
    {
      id: "7976",
      district_id: "172",
      name: "Bo`tqachi MFY"
    },
    {
      id: "7977",
      district_id: "172",
      name: "Cho`liguliston MFY"
    },
    {
      id: "7978",
      district_id: "172",
      name: "Yoshlik MFY\r\n"
    },
    {
      id: "7979",
      district_id: "172",
      name: "Gaston MFY"
    },
    {
      id: "7980",
      district_id: "172",
      name: "Guliston QFY"
    },
    {
      id: "7981",
      district_id: "172",
      name: "Qo\ufffdrg\ufffdoncha MFY\r\n"
    },
    {
      id: "7982",
      district_id: "172",
      name: "Ishtirxon MFY\r\n"
    },
    {
      id: "7983",
      district_id: "172",
      name: "Ittifoq MFY"
    },
    {
      id: "7984",
      district_id: "172",
      name: "Porloq MFY\r\n"
    },
    {
      id: "7985",
      district_id: "172",
      name: "Navro`z MFY"
    },
    {
      id: "7986",
      district_id: "172",
      name: "Qorasaqol MFY\r\n"
    },
    {
      id: "7987",
      district_id: "172",
      name: "Qorasoy MFY"
    },
    {
      id: "7988",
      district_id: "172",
      name: "Qoratepa MFY\r\n"
    },
    {
      id: "7989",
      district_id: "172",
      name: "Qotortol MFY \r\n"
    },
    {
      id: "7990",
      district_id: "172",
      name: " Do\ufffdstlik MFY\r\n"
    },
    {
      id: "7991",
      district_id: "172",
      name: "Qum maxalla MFY"
    },
    {
      id: "7992",
      district_id: "172",
      name: "Soybo\ufffdyi  MFY\r\n"
    },
    {
      id: "7993",
      district_id: "172",
      name: "Yuqori Soybo\ufffdyi MFY\r\n"
    },
    {
      id: "7994",
      district_id: "172",
      name: "Soyyoni MFY"
    },
    {
      id: "7995",
      district_id: "172",
      name: "Suvliariq MFY"
    },
    {
      id: "7996",
      district_id: "172",
      name: "Takalik MFY"
    },
    {
      id: "7997",
      district_id: "172",
      name: "Toshxovuz MFY"
    },
    {
      id: "7998",
      district_id: "172",
      name: "Tegirmonboshi MFY\r\n"
    },
    {
      id: "7999",
      district_id: "172",
      name: "Xonobod MFY\r\n"
    },
    {
      id: "8000",
      district_id: "172",
      name: "Yangibo\ufffdston MFY\r\n"
    },
    {
      id: "8001",
      district_id: "172",
      name: "Yangiobod MFY"
    },
    {
      id: "8002",
      district_id: "172",
      name: "Ijodkor MFY\r\n"
    },
    {
      id: "8003",
      district_id: "172",
      name: "Markaziy Farg\ufffdona MFY\r\n"
    },
    {
      id: "8004",
      district_id: "172",
      name: "Yozyovon MFY\r\n"
    },
    {
      id: "8005",
      district_id: "172",
      name: "Yuqori   MFY\r\n"
    },
    {
      id: "8006",
      district_id: "173",
      name: "Akbarobod QFY"
    },
    {
      id: "8007",
      district_id: "173",
      name: "Baxor QFY"
    },
    {
      id: "8008",
      district_id: "173",
      name: "Baynalminal QFY"
    },
    {
      id: "8009",
      district_id: "173",
      name: "Bolalik MFY"
    },
    {
      id: "8010",
      district_id: "173",
      name: "Boyiston MFY"
    },
    {
      id: "8011",
      district_id: "173",
      name: "Chilon MFY"
    },
    {
      id: "8012",
      district_id: "173",
      name: "Dexqonobod MFY"
    },
    {
      id: "8013",
      district_id: "173",
      name: "Dexqonobod QFY"
    },
    {
      id: "8014",
      district_id: "173",
      name: "Damariq MFY"
    },
    {
      id: "8015",
      district_id: "173",
      name: "Do`stlik MFY"
    },
    {
      id: "8016",
      district_id: "173",
      name: "G`alaba MFY"
    },
    {
      id: "8017",
      district_id: "173",
      name: "Go`zal MFY"
    },
    {
      id: "8018",
      district_id: "173",
      name: "Guliston MFY"
    },
    {
      id: "8019",
      district_id: "173",
      name: "Gulobod MFY"
    },
    {
      id: "8020",
      district_id: "173",
      name: "Iftixor QFY"
    },
    {
      id: "8021",
      district_id: "173",
      name: "Ittifoq QFY"
    },
    {
      id: "8022",
      district_id: "173",
      name: "Jalaler MFY"
    },
    {
      id: "8023",
      district_id: "173",
      name: "Kandabuloq MFY"
    },
    {
      id: "8024",
      district_id: "173",
      name: "Kattaqishloq MFY"
    },
    {
      id: "8025",
      district_id: "173",
      name: "M.Xasanov MFY"
    },
    {
      id: "8026",
      district_id: "173",
      name: "Madaniyat QFY"
    },
    {
      id: "8027",
      district_id: "173",
      name: "Mustaqillik MFY"
    },
    {
      id: "8028",
      district_id: "173",
      name: "Namuna QFY"
    },
    {
      id: "8029",
      district_id: "173",
      name: "Nayman MFY"
    },
    {
      id: "8030",
      district_id: "173",
      name: "Novk?nt MFY"
    },
    {
      id: "8031",
      district_id: "173",
      name: "Oltiariq MFY"
    },
    {
      id: "8032",
      district_id: "173",
      name: "Oqqo`rg`on MFY"
    },
    {
      id: "8033",
      district_id: "173",
      name: "O`raboshi MFY"
    },
    {
      id: "8034",
      district_id: "173",
      name: "O`zbekiston MFY"
    },
    {
      id: "8035",
      district_id: "173",
      name: "Pandigon MFY"
    },
    {
      id: "8036",
      district_id: "173",
      name: "Pastki Xo`ja-Xasan MFY"
    },
    {
      id: "8037",
      district_id: "173",
      name: "Paxtakor MFY"
    },
    {
      id: "8038",
      district_id: "173",
      name: "Qalinpo`stin MFY"
    },
    {
      id: "8039",
      district_id: "173",
      name: "Qaqir MFY"
    },
    {
      id: "8040",
      district_id: "173",
      name: "Qashqar-1 MFY"
    },
    {
      id: "8041",
      district_id: "173",
      name: "Qashqar-2 MFY"
    },
    {
      id: "8042",
      district_id: "173",
      name: "Qayirma MFY"
    },
    {
      id: "8043",
      district_id: "173",
      name: "Qoraqum MFY"
    },
    {
      id: "8044",
      district_id: "173",
      name: "Qorashox MFY"
    },
    {
      id: "8045",
      district_id: "173",
      name: "Qo`rg`oncha MFY"
    },
    {
      id: "8046",
      district_id: "173",
      name: "Quva MFY"
    },
    {
      id: "8047",
      district_id: "173",
      name: "Rasta MFY"
    },
    {
      id: "8048",
      district_id: "173",
      name: "Sanoatchilar SHFY"
    },
    {
      id: "8049",
      district_id: "173",
      name: "Soykeldi MFY"
    },
    {
      id: "8050",
      district_id: "173",
      name: "So`fi MFY"
    },
    {
      id: "8051",
      district_id: "173",
      name: "Sultonobod MFY"
    },
    {
      id: "8052",
      district_id: "173",
      name: "Taxtako`prik MFY"
    },
    {
      id: "8053",
      district_id: "173",
      name: "Tinchlik MFY"
    },
    {
      id: "8054",
      district_id: "173",
      name: "Tojik MFY"
    },
    {
      id: "8055",
      district_id: "173",
      name: "Tolmozor MFY"
    },
    {
      id: "8056",
      district_id: "173",
      name: "Toshkent MFY"
    },
    {
      id: "8057",
      district_id: "173",
      name: "Toshxovuz MFY"
    },
    {
      id: "8058",
      district_id: "173",
      name: "Turk MFY"
    },
    {
      id: "8059",
      district_id: "173",
      name: "Turkravot QFY"
    },
    {
      id: "8060",
      district_id: "173",
      name: "Xonobod MFY"
    },
    {
      id: "8061",
      district_id: "173",
      name: "Yangich?k MFY"
    },
    {
      id: "8062",
      district_id: "173",
      name: "Yangiobod MFY"
    },
    {
      id: "8063",
      district_id: "173",
      name: "Yangiqishloq MFY"
    },
    {
      id: "8064",
      district_id: "173",
      name: "Yangiqishloq QFY"
    },
    {
      id: "8065",
      district_id: "173",
      name: "Yangixayot MFY"
    },
    {
      id: "8066",
      district_id: "173",
      name: "Yangixayot QFY"
    },
    {
      id: "8067",
      district_id: "173",
      name: "Yuziya MFY"
    },
    {
      id: "8068",
      district_id: "174",
      name: "A.Novoiy MFY"
    },
    {
      id: "8069",
      district_id: "174",
      name: "A.Temur MFY"
    },
    {
      id: "8070",
      district_id: "174",
      name: "Arsif QFY"
    },
    {
      id: "8071",
      district_id: "174",
      name: "Bog`bon MFY"
    },
    {
      id: "8072",
      district_id: "174",
      name: "Bo`ston MFY"
    },
    {
      id: "8073",
      district_id: "174",
      name: "Cho`lpon MFY"
    },
    {
      id: "8074",
      district_id: "174",
      name: "Do`stlik SHFY"
    },
    {
      id: "8075",
      district_id: "174",
      name: "Guliston MFY"
    },
    {
      id: "8076",
      district_id: "174",
      name: "Isfayramsoy QFY"
    },
    {
      id: "8077",
      district_id: "174",
      name: "Kalacha MFY"
    },
    {
      id: "8078",
      district_id: "174",
      name: "Kokilon MFY"
    },
    {
      id: "8079",
      district_id: "174",
      name: "Lashkar MFY"
    },
    {
      id: "8080",
      district_id: "174",
      name: "M.Ulug`bek MFY"
    },
    {
      id: "8081",
      district_id: "174",
      name: "Muyan MFY"
    },
    {
      id: "8082",
      district_id: "174",
      name: "Namuna MFY"
    },
    {
      id: "8083",
      district_id: "174",
      name: "Nayman SHFY"
    },
    {
      id: "8084",
      district_id: "174",
      name: "Pakana MFY"
    },
    {
      id: "8085",
      district_id: "174",
      name: "Polmon MFY"
    },
    {
      id: "8086",
      district_id: "174",
      name: "Quchqorchi QFY"
    },
    {
      id: "8087",
      district_id: "174",
      name: "S.Raximov MFY"
    },
    {
      id: "8088",
      district_id: "174",
      name: "Soy-bo`yi MFY"
    },
    {
      id: "8089",
      district_id: "174",
      name: "Sufon QFY"
    },
    {
      id: "8090",
      district_id: "174",
      name: "Valik QFY"
    },
    {
      id: "8091",
      district_id: "174",
      name: "X.Olimjon MFY"
    },
    {
      id: "8092",
      district_id: "174",
      name: "Xuvaydo MFY"
    },
    {
      id: "8093",
      district_id: "174",
      name: "Yangi obod MFY"
    },
    {
      id: "8094",
      district_id: "174",
      name: "Yoshlik MFY"
    },
    {
      id: "8095",
      district_id: "174",
      name: "Yu.Muyan MFY"
    },
    {
      id: "8096",
      district_id: "174",
      name: "Zebuniso MFY"
    },
    {
      id: "8097",
      district_id: "174",
      name: "Ziynat MFY"
    },
    {
      id: "8098",
      district_id: "175",
      name: "A Navoiy MFY"
    },
    {
      id: "8099",
      district_id: "175",
      name: "Achchiqko`l MFY"
    },
    {
      id: "8100",
      district_id: "175",
      name: "Afg`onbog` MFY"
    },
    {
      id: "8101",
      district_id: "175",
      name: "Artizon bo`yi MFY"
    },
    {
      id: "8102",
      district_id: "175",
      name: "Arzik tepa MFY"
    },
    {
      id: "8103",
      district_id: "175",
      name: "Ashurali zoxiriy MFY"
    },
    {
      id: "8104",
      district_id: "175",
      name: "At-Termiziy MFY"
    },
    {
      id: "8105",
      district_id: "175",
      name: "Birlik MFY"
    },
    {
      id: "8106",
      district_id: "175",
      name: "Bo`ston MFY"
    },
    {
      id: "8107",
      district_id: "175",
      name: "Buloqboshi MFY"
    },
    {
      id: "8108",
      district_id: "175",
      name: "Bunyodkor MFY"
    },
    {
      id: "8109",
      district_id: "175",
      name: "Charxini ko`prigi MFY"
    },
    {
      id: "8110",
      district_id: "175",
      name: "D?grezlik MFY"
    },
    {
      id: "8111",
      district_id: "175",
      name: "Davronbek MFY"
    },
    {
      id: "8112",
      district_id: "175",
      name: "Do`stlik MFY"
    },
    {
      id: "8113",
      district_id: "175",
      name: "g`alchasoy MFY"
    },
    {
      id: "8114",
      district_id: "175",
      name: "g`ishtko`prik MFY"
    },
    {
      id: "8115",
      district_id: "175",
      name: "g`ishtli masjid MFY"
    },
    {
      id: "8116",
      district_id: "175",
      name: "g`oziyog`lik MFY"
    },
    {
      id: "8117",
      district_id: "175",
      name: "Gala baqollik MFY"
    },
    {
      id: "8118",
      district_id: "175",
      name: "Isfara guzar MFY"
    },
    {
      id: "8119",
      district_id: "175",
      name: "Islomobod MFY"
    },
    {
      id: "8120",
      district_id: "175",
      name: "Istiqlol MFY"
    },
    {
      id: "8121",
      district_id: "175",
      name: "Ittifoq MFY"
    },
    {
      id: "8122",
      district_id: "175",
      name: "Jumxuriyat MFY"
    },
    {
      id: "8123",
      district_id: "175",
      name: "Kalvak MFY"
    },
    {
      id: "8124",
      district_id: "175",
      name: "Marg`ilon darvozasi MFY"
    },
    {
      id: "8125",
      district_id: "175",
      name: "Misgarlik MFY"
    },
    {
      id: "8126",
      district_id: "175",
      name: "Muqimiy MFY"
    },
    {
      id: "8127",
      district_id: "175",
      name: "Mustaqillik MFY"
    },
    {
      id: "8128",
      district_id: "175",
      name: "Navbaxor MFY"
    },
    {
      id: "8129",
      district_id: "175",
      name: "Navruz MFY"
    },
    {
      id: "8130",
      district_id: "175",
      name: "Noib ko`prigi MFY"
    },
    {
      id: "8131",
      district_id: "175",
      name: "Nonvoylikguzar MFY"
    },
    {
      id: "8132",
      district_id: "175",
      name: "Nurafshon MFY"
    },
    {
      id: "8133",
      district_id: "175",
      name: "Oq oltin MFY"
    },
    {
      id: "8134",
      district_id: "175",
      name: "Ozodlik MFY"
    },
    {
      id: "8135",
      district_id: "175",
      name: "O`rmon bog` MFY"
    },
    {
      id: "8136",
      district_id: "175",
      name: "Parpashabof MFY"
    },
    {
      id: "8137",
      district_id: "175",
      name: "Qalandarxona MFY"
    },
    {
      id: "8138",
      district_id: "175",
      name: "Qaymoqli guzar MFY"
    },
    {
      id: "8139",
      district_id: "175",
      name: "Qipchoq ariq MFY"
    },
    {
      id: "8140",
      district_id: "175",
      name: "Qo`sh chinor MFY"
    },
    {
      id: "8141",
      district_id: "175",
      name: "Quduqlik MFY"
    },
    {
      id: "8142",
      district_id: "175",
      name: "Rayxon MFY"
    },
    {
      id: "8143",
      district_id: "175",
      name: "Saodat MFY"
    },
    {
      id: "8144",
      district_id: "175",
      name: "Shaldiramoq MFY"
    },
    {
      id: "8145",
      district_id: "175",
      name: "Shayxon MFY"
    },
    {
      id: "8146",
      district_id: "175",
      name: "Shikor begi MFY"
    },
    {
      id: "8147",
      district_id: "175",
      name: "Shirin MFY"
    },
    {
      id: "8148",
      district_id: "175",
      name: "Sobir Abdulla MFY"
    },
    {
      id: "8149",
      district_id: "175",
      name: "Sunbula MFY"
    },
    {
      id: "8150",
      district_id: "175",
      name: "Temir yo`lchi MFY"
    },
    {
      id: "8151",
      district_id: "175",
      name: "Tolzor MFY"
    },
    {
      id: "8152",
      district_id: "175",
      name: "Tug`onboshi MFY"
    },
    {
      id: "8153",
      district_id: "175",
      name: "Tuxlimergan MFY"
    },
    {
      id: "8154",
      district_id: "175",
      name: "Urganjibog` MFY"
    },
    {
      id: "8155",
      district_id: "175",
      name: "Usta bozor MFY"
    },
    {
      id: "8156",
      district_id: "175",
      name: "Vaqf chorsu MFY"
    },
    {
      id: "8157",
      district_id: "175",
      name: "Xo`jand Daxasi MFY"
    },
    {
      id: "8158",
      district_id: "175",
      name: "Xurlik MFY"
    },
    {
      id: "8159",
      district_id: "175",
      name: "Yalong`och ota MFY"
    },
    {
      id: "8160",
      district_id: "175",
      name: "Yangi chorsu MFY"
    },
    {
      id: "8161",
      district_id: "175",
      name: "Yangi obod MFY"
    },
    {
      id: "8162",
      district_id: "175",
      name: "Yog` bozori MFY"
    },
    {
      id: "8163",
      district_id: "176",
      name: "Baland - Masjid MFY"
    },
    {
      id: "8164",
      district_id: "176",
      name: "Barot MFY"
    },
    {
      id: "8165",
      district_id: "176",
      name: "Boltakul SHFY"
    },
    {
      id: "8166",
      district_id: "176",
      name: "Buston MFY"
    },
    {
      id: "8167",
      district_id: "176",
      name: "Dexkonobod MFY"
    },
    {
      id: "8168",
      district_id: "176",
      name: "Durmon MFY"
    },
    {
      id: "8169",
      district_id: "176",
      name: "Durmon SHFY"
    },
    {
      id: "8170",
      district_id: "176",
      name: "Eshonguzar MFY"
    },
    {
      id: "8171",
      district_id: "176",
      name: "Fayz QFY"
    },
    {
      id: "8172",
      district_id: "176",
      name: "Garimdon MFY"
    },
    {
      id: "8173",
      district_id: "176",
      name: "Gishtmon MFY"
    },
    {
      id: "8174",
      district_id: "176",
      name: "Gishtmon SHFY"
    },
    {
      id: "8175",
      district_id: "176",
      name: "Istikbol MFY"
    },
    {
      id: "8176",
      district_id: "176",
      name: "Karnaychi MFY"
    },
    {
      id: "8177",
      district_id: "176",
      name: "Kattabeshkapa SHFY"
    },
    {
      id: "8178",
      district_id: "176",
      name: "Kichikbeshkapa MFY"
    },
    {
      id: "8179",
      district_id: "176",
      name: "Kiyki MFY"
    },
    {
      id: "8180",
      district_id: "176",
      name: "Kora-arik SHFY"
    },
    {
      id: "8181",
      district_id: "176",
      name: "Korajiyda SHFY"
    },
    {
      id: "8182",
      district_id: "176",
      name: "Korakaltak MFY"
    },
    {
      id: "8183",
      district_id: "176",
      name: "Korakushchi QFY"
    },
    {
      id: "8184",
      district_id: "176",
      name: "Kumtpa QFY"
    },
    {
      id: "8185",
      district_id: "176",
      name: "Kumtepa SHFY"
    },
    {
      id: "8186",
      district_id: "176",
      name: "Kuprik boshi MFY"
    },
    {
      id: "8187",
      district_id: "176",
      name: "Kurgoncha MFY"
    },
    {
      id: "8188",
      district_id: "176",
      name: "Langar MFY"
    },
    {
      id: "8189",
      district_id: "176",
      name: "Langar QFY"
    },
    {
      id: "8190",
      district_id: "176",
      name: "Loyson QFY"
    },
    {
      id: "8191",
      district_id: "176",
      name: "Oyimcha MFY"
    },
    {
      id: "8192",
      district_id: "176",
      name: "Paxtakor QFY"
    },
    {
      id: "8193",
      district_id: "176",
      name: "Qo`yi oktepa SHFY"
    },
    {
      id: "8194",
      district_id: "176",
      name: "Sarmazor QFY"
    },
    {
      id: "8195",
      district_id: "176",
      name: "Sarmazor SHFY"
    },
    {
      id: "8196",
      district_id: "176",
      name: "Shakar MFY"
    },
    {
      id: "8197",
      district_id: "176",
      name: "Shaxartepa QFY"
    },
    {
      id: "8198",
      district_id: "176",
      name: "Shomirza MFY"
    },
    {
      id: "8199",
      district_id: "176",
      name: "Solijonobod QFY"
    },
    {
      id: "8200",
      district_id: "176",
      name: "Soy-buyi MFY"
    },
    {
      id: "8201",
      district_id: "176",
      name: "Ukchi QFY"
    },
    {
      id: "8202",
      district_id: "176",
      name: "Urta - ukchi MFY"
    },
    {
      id: "8203",
      district_id: "176",
      name: "Vatan MFY"
    },
    {
      id: "8204",
      district_id: "176",
      name: "Xalkabod QFY"
    },
    {
      id: "8205",
      district_id: "176",
      name: "Xotinarik SHFY"
    },
    {
      id: "8206",
      district_id: "176",
      name: "Xujakishlok MFY"
    },
    {
      id: "8207",
      district_id: "176",
      name: "Yangi dukan MFY"
    },
    {
      id: "8208",
      district_id: "176",
      name: "Yangiarik SHFY"
    },
    {
      id: "8209",
      district_id: "176",
      name: "Yuldashobod QFY"
    },
    {
      id: "8210",
      district_id: "177",
      name: "Erkin MFY"
    },
    {
      id: "8211",
      district_id: "177",
      name: "Evkochar MFY"
    },
    {
      id: "8212",
      district_id: "177",
      name: "A.Navoiy MFY"
    },
    {
      id: "8213",
      district_id: "177",
      name: "A.Yassaviy MFY"
    },
    {
      id: "8214",
      district_id: "177",
      name: "Ariq bo`yi MFY"
    },
    {
      id: "8215",
      district_id: "177",
      name: "B.Margiloniy MFY"
    },
    {
      id: "8216",
      district_id: "177",
      name: "Baxrin MFY"
    },
    {
      id: "8217",
      district_id: "177",
      name: "Baynalminal MFY"
    },
    {
      id: "8218",
      district_id: "177",
      name: "Bobur MFY"
    },
    {
      id: "8219",
      district_id: "177",
      name: "Charog`on MFY"
    },
    {
      id: "8220",
      district_id: "177",
      name: "Chilonzor MFY"
    },
    {
      id: "8221",
      district_id: "177",
      name: "Chorchinor MFY"
    },
    {
      id: "8222",
      district_id: "177",
      name: "Do`stlik MFY"
    },
    {
      id: "8223",
      district_id: "177",
      name: "Galatoy MFY"
    },
    {
      id: "8224",
      district_id: "177",
      name: "Go`ravvol MFY"
    },
    {
      id: "8225",
      district_id: "177",
      name: "Guliston MFY"
    },
    {
      id: "8226",
      district_id: "177",
      name: "Ikbol MFY"
    },
    {
      id: "8227",
      district_id: "177",
      name: "Ipak yo`li MFY"
    },
    {
      id: "8228",
      district_id: "177",
      name: "Ipakchi MFY"
    },
    {
      id: "8229",
      district_id: "177",
      name: "Istiqlol MFY"
    },
    {
      id: "8230",
      district_id: "177",
      name: "Kashkar MFY"
    },
    {
      id: "8231",
      district_id: "177",
      name: "Kirguli MFY"
    },
    {
      id: "8232",
      district_id: "177",
      name: "Kosibchilik MFY"
    },
    {
      id: "8233",
      district_id: "177",
      name: "Maorif MFY"
    },
    {
      id: "8234",
      district_id: "177",
      name: "Mashad MFY"
    },
    {
      id: "8235",
      district_id: "177",
      name: "Miltiqsoz MFY"
    },
    {
      id: "8236",
      district_id: "177",
      name: "Mustaqillik MFY"
    },
    {
      id: "8237",
      district_id: "177",
      name: "Nadirmat MFY"
    },
    {
      id: "8238",
      district_id: "177",
      name: "Navbaxor MFY"
    },
    {
      id: "8239",
      district_id: "177",
      name: "Navruz MFY"
    },
    {
      id: "8240",
      district_id: "177",
      name: "Orol bo`yi MFY"
    },
    {
      id: "8241",
      district_id: "177",
      name: "Oxunboboev MFY"
    },
    {
      id: "8242",
      district_id: "177",
      name: "O`rda tagi MFY"
    },
    {
      id: "8243",
      district_id: "177",
      name: "Pichokchi MFY"
    },
    {
      id: "8244",
      district_id: "177",
      name: "Roxat MFY"
    },
    {
      id: "8245",
      district_id: "177",
      name: "Saxovat MFY"
    },
    {
      id: "8246",
      district_id: "177",
      name: "Sholdirama MFY"
    },
    {
      id: "8247",
      district_id: "177",
      name: "Terak tagi MFY"
    },
    {
      id: "8248",
      district_id: "177",
      name: "Tog`lik MFY"
    },
    {
      id: "8249",
      district_id: "177",
      name: "Toshkesar MFY"
    },
    {
      id: "8250",
      district_id: "177",
      name: "Toshloq tepa MFY"
    },
    {
      id: "8251",
      district_id: "177",
      name: "Turon MFY"
    },
    {
      id: "8252",
      district_id: "177",
      name: "Tut tagi MFY"
    },
    {
      id: "8253",
      district_id: "177",
      name: "Tuyagum MFY"
    },
    {
      id: "8254",
      district_id: "177",
      name: "Uvaysiy MFY"
    },
    {
      id: "8255",
      district_id: "177",
      name: "Uzumzor MFY"
    },
    {
      id: "8256",
      district_id: "177",
      name: "Uzun xovuz MFY"
    },
    {
      id: "8257",
      district_id: "177",
      name: "Vatan MFY"
    },
    {
      id: "8258",
      district_id: "177",
      name: "Yagi obod MFY"
    },
    {
      id: "8259",
      district_id: "177",
      name: "Yangi bog` MFY"
    },
    {
      id: "8260",
      district_id: "177",
      name: "Yangi Marg`ilon MFY"
    },
    {
      id: "8261",
      district_id: "177",
      name: "Yangi xat MFY"
    },
    {
      id: "8262",
      district_id: "177",
      name: "Yayilma MFY"
    },
    {
      id: "8263",
      district_id: "177",
      name: "Yo`rmado`z MFY"
    },
    {
      id: "8264",
      district_id: "177",
      name: "Zuxro MFY"
    },
    {
      id: "8265",
      district_id: "178",
      name: "Azimobod SHFY"
    },
    {
      id: "8266",
      district_id: "178",
      name: "Beglar MFY"
    },
    {
      id: "8267",
      district_id: "178",
      name: "Beruniy MFY"
    },
    {
      id: "8268",
      district_id: "178",
      name: "Beshkovok MFY"
    },
    {
      id: "8269",
      district_id: "178",
      name: "Birlashgan MFY"
    },
    {
      id: "8270",
      district_id: "178",
      name: "Bozorboshi MFY"
    },
    {
      id: "8271",
      district_id: "178",
      name: "Bugdoychi MFY"
    },
    {
      id: "8272",
      district_id: "178",
      name: "Bunyodkor MFY"
    },
    {
      id: "8273",
      district_id: "178",
      name: "Burbonlik SHFY"
    },
    {
      id: "8274",
      district_id: "178",
      name: "Buston MFY"
    },
    {
      id: "8275",
      district_id: "178",
      name: "Butabekov MFY"
    },
    {
      id: "8276",
      district_id: "178",
      name: "Chinor SHFY"
    },
    {
      id: "8277",
      district_id: "178",
      name: "Chinortagi MFY"
    },
    {
      id: "8278",
      district_id: "178",
      name: "Do`stlik MFY"
    },
    {
      id: "8279",
      district_id: "178",
      name: "Eskiarab SHFY"
    },
    {
      id: "8280",
      district_id: "178",
      name: "Farovon MFY"
    },
    {
      id: "8281",
      district_id: "178",
      name: "Fayziobod QFY"
    },
    {
      id: "8282",
      district_id: "178",
      name: "Gayrat-1 MFY"
    },
    {
      id: "8283",
      district_id: "178",
      name: "Gulobod MFY"
    },
    {
      id: "8284",
      district_id: "178",
      name: "Ibn Sino MFY"
    },
    {
      id: "8285",
      district_id: "178",
      name: "Jararik MFY"
    },
    {
      id: "8286",
      district_id: "178",
      name: "Jarkurgon MFY"
    },
    {
      id: "8287",
      district_id: "178",
      name: "Jonibek MFY"
    },
    {
      id: "8288",
      district_id: "178",
      name: "Jurak SHFY"
    },
    {
      id: "8289",
      district_id: "178",
      name: "Kapchugay QFY"
    },
    {
      id: "8290",
      district_id: "178",
      name: "Katput SHFY"
    },
    {
      id: "8291",
      district_id: "178",
      name: "Kaxramon MFY"
    },
    {
      id: "8292",
      district_id: "178",
      name: "Kiziltepa QFY"
    },
    {
      id: "8293",
      district_id: "178",
      name: "Kokir MFY"
    },
    {
      id: "8294",
      district_id: "178",
      name: "Kulbuyi MFY"
    },
    {
      id: "8295",
      district_id: "178",
      name: "Kumirchi MFY"
    },
    {
      id: "8296",
      district_id: "178",
      name: "Kurgoncha MFY"
    },
    {
      id: "8297",
      district_id: "178",
      name: "Kuvirboshi MFY"
    },
    {
      id: "8298",
      district_id: "178",
      name: "Maorif MFY"
    },
    {
      id: "8299",
      district_id: "178",
      name: "Mirfozil MFY"
    },
    {
      id: "8300",
      district_id: "178",
      name: "Mukimiy MFY"
    },
    {
      id: "8301",
      district_id: "178",
      name: "Mustakillik MFY"
    },
    {
      id: "8302",
      district_id: "178",
      name: "Navkuron MFY"
    },
    {
      id: "8303",
      district_id: "178",
      name: "Navoiy MFY"
    },
    {
      id: "8304",
      district_id: "178",
      name: "Obod MFY"
    },
    {
      id: "8305",
      district_id: "178",
      name: "Okbuyra SHFY"
    },
    {
      id: "8306",
      district_id: "178",
      name: "Olmazor MFY"
    },
    {
      id: "8307",
      district_id: "178",
      name: "Oltiarik SHFY"
    },
    {
      id: "8308",
      district_id: "178",
      name: "Pavulgon SHFY"
    },
    {
      id: "8309",
      district_id: "178",
      name: "Poloson SHFY"
    },
    {
      id: "8310",
      district_id: "178",
      name: "Sertut MFY"
    },
    {
      id: "8311",
      district_id: "178",
      name: "Shalola MFY"
    },
    {
      id: "8312",
      district_id: "178",
      name: "Shark MFY"
    },
    {
      id: "8313",
      district_id: "178",
      name: "Sodiyona MFY"
    },
    {
      id: "8314",
      district_id: "178",
      name: "Shodlik MFY"
    },
    {
      id: "8315",
      district_id: "178",
      name: "Tegirmonboshi MFY"
    },
    {
      id: "8316",
      district_id: "178",
      name: "Tinchlik MFY"
    },
    {
      id: "8317",
      district_id: "178",
      name: "Tinchlik SHFY"
    },
    {
      id: "8318",
      district_id: "178",
      name: "Tolkucha MFY"
    },
    {
      id: "8319",
      district_id: "178",
      name: "Toshkent MFY"
    },
    {
      id: "8320",
      district_id: "178",
      name: "Toshobod MFY"
    },
    {
      id: "8321",
      district_id: "178",
      name: "Usmonobod MFY"
    },
    {
      id: "8322",
      district_id: "178",
      name: "Ustoz MFY"
    },
    {
      id: "8323",
      district_id: "178",
      name: "Uzbekiston MFY"
    },
    {
      id: "8324",
      district_id: "178",
      name: "Uzumchi MFY"
    },
    {
      id: "8325",
      district_id: "178",
      name: "X.Olimjon MFY"
    },
    {
      id: "8326",
      district_id: "178",
      name: "Yangi Fargona MFY"
    },
    {
      id: "8327",
      district_id: "178",
      name: "Yangiarab MFY"
    },
    {
      id: "8328",
      district_id: "178",
      name: "Yangiarab SHFY"
    },
    {
      id: "8329",
      district_id: "178",
      name: "Yangiarik MFY"
    },
    {
      id: "8330",
      district_id: "178",
      name: "Yangichek MFY"
    },
    {
      id: "8331",
      district_id: "178",
      name: "Yangikurgon SHFY"
    },
    {
      id: "8332",
      district_id: "178",
      name: "Yangiturmush MFY"
    },
    {
      id: "8333",
      district_id: "178",
      name: "Yangixayot MFY"
    },
    {
      id: "8334",
      district_id: "178",
      name: "Yoshlik MFY"
    },
    {
      id: "8335",
      district_id: "178",
      name: "Yuksalish MFY"
    },
    {
      id: "8336",
      district_id: "178",
      name: "Zarxal MFY"
    },
    {
      id: "8337",
      district_id: "178",
      name: "Zilxa SHFY"
    },
    {
      id: "8338",
      district_id: "179",
      name: "Yangi yul"
    },
    {
      id: "8339",
      district_id: "179",
      name: "A.Navoiy MFY"
    },
    {
      id: "8340",
      district_id: "179",
      name: "Amirobod"
    },
    {
      id: "8341",
      district_id: "179",
      name: "Arik buyi"
    },
    {
      id: "8342",
      district_id: "179",
      name: "Beshkapa SHFY"
    },
    {
      id: "8343",
      district_id: "179",
      name: "Birlashgan"
    },
    {
      id: "8344",
      district_id: "179",
      name: "Bogiston MFY"
    },
    {
      id: "8345",
      district_id: "179",
      name: "Bujay"
    },
    {
      id: "8346",
      district_id: "179",
      name: "Bulokboshi"
    },
    {
      id: "8347",
      district_id: "179",
      name: "Buston"
    },
    {
      id: "8348",
      district_id: "179",
      name: "Buston QFY"
    },
    {
      id: "8349",
      district_id: "179",
      name: "Chek Jaler"
    },
    {
      id: "8350",
      district_id: "179",
      name: "Chek Nasriddin"
    },
    {
      id: "8351",
      district_id: "179",
      name: "Chinigaron MFY"
    },
    {
      id: "8352",
      district_id: "179",
      name: "Chuburgon"
    },
    {
      id: "8353",
      district_id: "179",
      name: "Chungara"
    },
    {
      id: "8354",
      district_id: "179",
      name: "Dexkonobod MFY"
    },
    {
      id: "8355",
      district_id: "179",
      name: "Dasht Pandigon"
    },
    {
      id: "8356",
      district_id: "179",
      name: "Dasht Tegirmon"
    },
    {
      id: "8357",
      district_id: "179",
      name: "Daxb?d MFY"
    },
    {
      id: "8358",
      district_id: "179",
      name: "Dorilomon MFY"
    },
    {
      id: "8359",
      district_id: "179",
      name: "Dutir"
    },
    {
      id: "8360",
      district_id: "179",
      name: "Farovonlik MFY"
    },
    {
      id: "8361",
      district_id: "179",
      name: "Guliston"
    },
    {
      id: "8362",
      district_id: "179",
      name: "Gumbaz MFY"
    },
    {
      id: "8363",
      district_id: "179",
      name: "Guzar"
    },
    {
      id: "8364",
      district_id: "179",
      name: "Istikbol MFY"
    },
    {
      id: "8365",
      district_id: "179",
      name: "Jalaer"
    },
    {
      id: "8366",
      district_id: "179",
      name: "Jaxonobod"
    },
    {
      id: "8367",
      district_id: "179",
      name: "Kalaynav"
    },
    {
      id: "8368",
      district_id: "179",
      name: "Kayragoch QFY"
    },
    {
      id: "8369",
      district_id: "179",
      name: "Koshkayron MFY"
    },
    {
      id: "8370",
      district_id: "179",
      name: "Kozi-Axror MFY"
    },
    {
      id: "8371",
      district_id: "179",
      name: "Kurgoncha"
    },
    {
      id: "8372",
      district_id: "179",
      name: "Kuyi Avazboy"
    },
    {
      id: "8373",
      district_id: "179",
      name: "M.Topvoldi?v MFY"
    },
    {
      id: "8374",
      district_id: "179",
      name: "Mevazor"
    },
    {
      id: "8375",
      district_id: "179",
      name: "Mexnatobod"
    },
    {
      id: "8376",
      district_id: "179",
      name: "Mexnatobod QFY"
    },
    {
      id: "8377",
      district_id: "179",
      name: "Markaz MFY"
    },
    {
      id: "8378",
      district_id: "179",
      name: "Minor MFY"
    },
    {
      id: "8379",
      district_id: "179",
      name: "Miskin MFY"
    },
    {
      id: "8380",
      district_id: "179",
      name: "Mustofokul - ota"
    },
    {
      id: "8381",
      district_id: "179",
      name: "Navbaxor"
    },
    {
      id: "8382",
      district_id: "179",
      name: "Nosgar MFY"
    },
    {
      id: "8383",
      district_id: "179",
      name: "o`Sobirov MFY"
    },
    {
      id: "8384",
      district_id: "179",
      name: "Ok-er"
    },
    {
      id: "8385",
      district_id: "179",
      name: "Ok-er SHFY"
    },
    {
      id: "8386",
      district_id: "179",
      name: "Ok-oltin QFY"
    },
    {
      id: "8387",
      district_id: "179",
      name: "Ok-tomir"
    },
    {
      id: "8388",
      district_id: "179",
      name: "Pandigon"
    },
    {
      id: "8389",
      district_id: "179",
      name: "Pastki Beshkapa"
    },
    {
      id: "8390",
      district_id: "179",
      name: "Pastki Bulokboshi"
    },
    {
      id: "8391",
      district_id: "179",
      name: "Rishton QFY"
    },
    {
      id: "8392",
      district_id: "179",
      name: "Shokir-ota MFY"
    },
    {
      id: "8393",
      district_id: "179",
      name: "Suxobod"
    },
    {
      id: "8394",
      district_id: "179",
      name: "T`axmedov"
    },
    {
      id: "8395",
      district_id: "179",
      name: "Toshogolik MFY"
    },
    {
      id: "8396",
      district_id: "179",
      name: "Tuda QFY"
    },
    {
      id: "8397",
      district_id: "179",
      name: "Turaobod"
    },
    {
      id: "8398",
      district_id: "179",
      name: "Ucharik"
    },
    {
      id: "8399",
      district_id: "179",
      name: "Uyrat SHFY"
    },
    {
      id: "8400",
      district_id: "179",
      name: "Uzunkucha"
    },
    {
      id: "8401",
      district_id: "179",
      name: "Voxim"
    },
    {
      id: "8402",
      district_id: "179",
      name: "Xoji-kishlok"
    },
    {
      id: "8403",
      district_id: "179",
      name: "Xuja-Ilgor MFY"
    },
    {
      id: "8404",
      district_id: "179",
      name: "Xurramobod"
    },
    {
      id: "8405",
      district_id: "179",
      name: "Yangi Bujay"
    },
    {
      id: "8406",
      district_id: "179",
      name: "Yoshlik"
    },
    {
      id: "8407",
      district_id: "179",
      name: "Yyilma QFY"
    },
    {
      id: "8408",
      district_id: "179",
      name: "Yukori Avazboy"
    },
    {
      id: "8409",
      district_id: "179",
      name: "Yukori Beshkapa"
    },
    {
      id: "8410",
      district_id: "179",
      name: "Zar-arik MFY"
    },
    {
      id: "8411",
      district_id: "179",
      name: "Zoxidon SHFY"
    },
    {
      id: "8412",
      district_id: "180",
      name: "Bobokalon QFY"
    },
    {
      id: "8413",
      district_id: "180",
      name: "Chashma MFY"
    },
    {
      id: "8414",
      district_id: "180",
      name: "Chumokcha MFY"
    },
    {
      id: "8415",
      district_id: "180",
      name: "Demursad MFY"
    },
    {
      id: "8416",
      district_id: "180",
      name: "Devayron MFY"
    },
    {
      id: "8417",
      district_id: "180",
      name: "Gaznov MFY"
    },
    {
      id: "8418",
      district_id: "180",
      name: "Guliston MFY"
    },
    {
      id: "8419",
      district_id: "180",
      name: "Istiqlol MFY"
    },
    {
      id: "8420",
      district_id: "180",
      name: "Kakir MFY"
    },
    {
      id: "8421",
      district_id: "180",
      name: "Kal`a MFY"
    },
    {
      id: "8422",
      district_id: "180",
      name: "Kal`acha MFY"
    },
    {
      id: "8423",
      district_id: "180",
      name: "Kizilkiyok MFY"
    },
    {
      id: "8424",
      district_id: "180",
      name: "Lenbur MFY"
    },
    {
      id: "8425",
      district_id: "180",
      name: "Mulgon MFY"
    },
    {
      id: "8426",
      district_id: "180",
      name: "Navobod MFY"
    },
    {
      id: "8427",
      district_id: "180",
      name: "Oftobru MFY"
    },
    {
      id: "8428",
      district_id: "180",
      name: "Oxunboboev QFY"
    },
    {
      id: "8429",
      district_id: "180",
      name: "Saribozorcha MFY"
    },
    {
      id: "8430",
      district_id: "180",
      name: "Sarikanda MFY"
    },
    {
      id: "8431",
      district_id: "180",
      name: "Sharkobod MFY"
    },
    {
      id: "8432",
      district_id: "180",
      name: "Sux QFY"
    },
    {
      id: "8433",
      district_id: "180",
      name: "Tul MFY"
    },
    {
      id: "8434",
      district_id: "180",
      name: "Xusheyor QFY"
    },
    {
      id: "8435",
      district_id: "180",
      name: "Yangiarik MFY"
    },
    {
      id: "8436",
      district_id: "181",
      name: "Arabmozor QFY"
    },
    {
      id: "8437",
      district_id: "181",
      name: "Axshak QFY"
    },
    {
      id: "8438",
      district_id: "181",
      name: "Axshakguzar MFY"
    },
    {
      id: "8439",
      district_id: "181",
      name: "Aylanmajar MFY"
    },
    {
      id: "8440",
      district_id: "181",
      name: "Besarang MFY"
    },
    {
      id: "8441",
      district_id: "181",
      name: "Birlik QFY"
    },
    {
      id: "8442",
      district_id: "181",
      name: "Bo`ston MFY"
    },
    {
      id: "8443",
      district_id: "181",
      name: "Chek MFY"
    },
    {
      id: "8444",
      district_id: "181",
      name: "Chuqurkishloq MFY"
    },
    {
      id: "8445",
      district_id: "181",
      name: "Do`stlik MFY"
    },
    {
      id: "8446",
      district_id: "181",
      name: "Farg`ona MFY"
    },
    {
      id: "8447",
      district_id: "181",
      name: "Furqat MFY"
    },
    {
      id: "8448",
      district_id: "181",
      name: "Guzarboshi MFY"
    },
    {
      id: "8449",
      district_id: "181",
      name: "Jarqishloq MFY"
    },
    {
      id: "8450",
      district_id: "181",
      name: "Kattako`cha MFY"
    },
    {
      id: "8451",
      district_id: "181",
      name: "Konizar MFY"
    },
    {
      id: "8452",
      district_id: "181",
      name: "Ko`larik MFY"
    },
    {
      id: "8453",
      district_id: "181",
      name: "Ko`rg`oncha QFY"
    },
    {
      id: "8454",
      district_id: "181",
      name: "Ko`saqishloq MFY"
    },
    {
      id: "8455",
      district_id: "181",
      name: "Mexnatobod MFY"
    },
    {
      id: "8456",
      district_id: "181",
      name: "Nayman QFY"
    },
    {
      id: "8457",
      district_id: "181",
      name: "Naymanbo`ston QFY"
    },
    {
      id: "8458",
      district_id: "181",
      name: "Obisiyo MFY"
    },
    {
      id: "8459",
      district_id: "181",
      name: "Oxunboboev MFY"
    },
    {
      id: "8460",
      district_id: "181",
      name: "O`zbekiston MFY"
    },
    {
      id: "8461",
      district_id: "181",
      name: "Piyozchilik MFY"
    },
    {
      id: "8462",
      district_id: "181",
      name: "Qamchipurush MFY"
    },
    {
      id: "8463",
      district_id: "181",
      name: "Qanjirg`a MFY"
    },
    {
      id: "8464",
      district_id: "181",
      name: "Qipchoqariq MFY"
    },
    {
      id: "8465",
      district_id: "181",
      name: "Qumariq QFY"
    },
    {
      id: "8466",
      district_id: "181",
      name: "Qumqishloq MFY"
    },
    {
      id: "8467",
      district_id: "181",
      name: "Sadda QFY"
    },
    {
      id: "8468",
      district_id: "181",
      name: "Shilva MFY"
    },
    {
      id: "8469",
      district_id: "181",
      name: "Soybo`yi MFY"
    },
    {
      id: "8470",
      district_id: "181",
      name: "So`filar MFY"
    },
    {
      id: "8471",
      district_id: "181",
      name: "So`kchilik MFY"
    },
    {
      id: "8472",
      district_id: "181",
      name: "Suvboshi MFY"
    },
    {
      id: "8473",
      district_id: "181",
      name: "Tegirmonboshi MFY"
    },
    {
      id: "8474",
      district_id: "181",
      name: "Teraktagi MFY"
    },
    {
      id: "8475",
      district_id: "181",
      name: "Tog`lik MFY"
    },
    {
      id: "8476",
      district_id: "181",
      name: "Toshloq SHFY"
    },
    {
      id: "8477",
      district_id: "181",
      name: "To`xtaboev QFY"
    },
    {
      id: "8478",
      district_id: "181",
      name: "Turvat MFY"
    },
    {
      id: "8479",
      district_id: "181",
      name: "Ucholish MFY"
    },
    {
      id: "8480",
      district_id: "181",
      name: "Varzak QFY"
    },
    {
      id: "8481",
      district_id: "181",
      name: "Xamrak MFY"
    },
    {
      id: "8482",
      district_id: "181",
      name: "Xonaqa MFY"
    },
    {
      id: "8483",
      district_id: "181",
      name: "Xonariq MFY"
    },
    {
      id: "8484",
      district_id: "181",
      name: "Xotinqumi MFY"
    },
    {
      id: "8485",
      district_id: "181",
      name: "Xo`jariq MFY"
    },
    {
      id: "8486",
      district_id: "181",
      name: "Yakkavut MFY"
    },
    {
      id: "8487",
      district_id: "181",
      name: "Yangiyo`l MFY"
    },
    {
      id: "8488",
      district_id: "181",
      name: "Yuqoriqishloq MFY"
    },
    {
      id: "8489",
      district_id: "181",
      name: "Zarkent MFY"
    },
    {
      id: "8490",
      district_id: "182",
      name: "Kata-Kushtepa MFY"
    },
    {
      id: "8491",
      district_id: "182",
      name: "Begmurod MFY"
    },
    {
      id: "8492",
      district_id: "182",
      name: "Begobod SHFY"
    },
    {
      id: "8493",
      district_id: "182",
      name: "Beshkapa MFY"
    },
    {
      id: "8494",
      district_id: "182",
      name: "Baxrin MFY"
    },
    {
      id: "8495",
      district_id: "182",
      name: "Boboshb?k MFY"
    },
    {
      id: "8496",
      district_id: "182",
      name: "Buyrak MFY"
    },
    {
      id: "8497",
      district_id: "182",
      name: "Chang MFY"
    },
    {
      id: "8498",
      district_id: "182",
      name: "Chorbog` QFY"
    },
    {
      id: "8499",
      district_id: "182",
      name: "G`ijdon SHFY"
    },
    {
      id: "8500",
      district_id: "182",
      name: "G`ozig`ijdon QFY"
    },
    {
      id: "8501",
      district_id: "182",
      name: "Kenagas QFY"
    },
    {
      id: "8502",
      district_id: "182",
      name: "Kata-Kashkar MFY"
    },
    {
      id: "8503",
      district_id: "182",
      name: "Kata-Korakul MFY"
    },
    {
      id: "8504",
      district_id: "182",
      name: "Kattakenagas MFY"
    },
    {
      id: "8505",
      district_id: "182",
      name: "Kichik-Kenagas MFY"
    },
    {
      id: "8506",
      district_id: "182",
      name: "Korayantok MFY"
    },
    {
      id: "8507",
      district_id: "182",
      name: "Kumarik SHFY"
    },
    {
      id: "8508",
      district_id: "182",
      name: "Kurbonkashkar MFY"
    },
    {
      id: "8509",
      district_id: "182",
      name: "Mergan MFY"
    },
    {
      id: "8510",
      district_id: "182",
      name: "Mexnatobod QFY"
    },
    {
      id: "8511",
      district_id: "182",
      name: "Mashad MFY"
    },
    {
      id: "8512",
      district_id: "182",
      name: "Mirzaxuja MFY"
    },
    {
      id: "8513",
      district_id: "182",
      name: "Navruz QFY"
    },
    {
      id: "8514",
      district_id: "182",
      name: "Olmurod MFY"
    },
    {
      id: "8515",
      district_id: "182",
      name: "Paloxon QFY"
    },
    {
      id: "8516",
      district_id: "182",
      name: "Paloxon SHFY"
    },
    {
      id: "8517",
      district_id: "182",
      name: "Puchugoy MFY"
    },
    {
      id: "8518",
      district_id: "182",
      name: "Qo`qonboy SHFY"
    },
    {
      id: "8519",
      district_id: "182",
      name: "Sarikurgon QFY"
    },
    {
      id: "8520",
      district_id: "182",
      name: "Sarikurgon MFY"
    },
    {
      id: "8521",
      district_id: "182",
      name: "Sobirjon SHFY"
    },
    {
      id: "8522",
      district_id: "182",
      name: "Sulton MFY"
    },
    {
      id: "8523",
      district_id: "182",
      name: "Tepakurgon MFY"
    },
    {
      id: "8524",
      district_id: "182",
      name: "Toshkentliguzar MFY"
    },
    {
      id: "8525",
      district_id: "182",
      name: "Tuksonkovun MFY"
    },
    {
      id: "8526",
      district_id: "182",
      name: "Turgok MFY"
    },
    {
      id: "8527",
      district_id: "182",
      name: "Uchkuprik QFY"
    },
    {
      id: "8528",
      district_id: "182",
      name: "Uchkuprik SHFY"
    },
    {
      id: "8529",
      district_id: "182",
      name: "Xasankora MFY"
    },
    {
      id: "8530",
      district_id: "182",
      name: "Yakkamulla MFY"
    },
    {
      id: "8531",
      district_id: "182",
      name: "Yakkatut MFY"
    },
    {
      id: "8532",
      district_id: "182",
      name: "Yangier MFY"
    },
    {
      id: "8533",
      district_id: "182",
      name: "Yangikishlok QFY"
    },
    {
      id: "8534",
      district_id: "182",
      name: "Yangikishlok SHFY"
    },
    {
      id: "8535",
      district_id: "182",
      name: "Yangiobod MFY"
    },
    {
      id: "8536",
      district_id: "182",
      name: "Yulgunzor MFY"
    },
    {
      id: "8537",
      district_id: "182",
      name: "Zigir MFY"
    },
    {
      id: "8538",
      district_id: "183",
      name: "A. Jomiy MFY"
    },
    {
      id: "8539",
      district_id: "183",
      name: "Akbarobod MFY"
    },
    {
      id: "8540",
      district_id: "183",
      name: "Avgon MFY"
    },
    {
      id: "8541",
      district_id: "183",
      name: "Bekabod MFY"
    },
    {
      id: "8542",
      district_id: "183",
      name: "Beruniy MFY"
    },
    {
      id: "8543",
      district_id: "183",
      name: "Bozor yaypan MFY"
    },
    {
      id: "8544",
      district_id: "183",
      name: "Buston MFY"
    },
    {
      id: "8545",
      district_id: "183",
      name: "Buzukkurgon MFY"
    },
    {
      id: "8546",
      district_id: "183",
      name: "Dexkonobod MFY"
    },
    {
      id: "8547",
      district_id: "183",
      name: "Dasht-chulpon MFY"
    },
    {
      id: "8548",
      district_id: "183",
      name: "Daxanakakir MFY"
    },
    {
      id: "8549",
      district_id: "183",
      name: "Dungsaroy MFY"
    },
    {
      id: "8550",
      district_id: "183",
      name: "Elchi MFY"
    },
    {
      id: "8551",
      district_id: "183",
      name: "Eski Yaypan MFY"
    },
    {
      id: "8552",
      district_id: "183",
      name: "g`anobod QFY"
    },
    {
      id: "8553",
      district_id: "183",
      name: "Gusht MFY"
    },
    {
      id: "8554",
      district_id: "183",
      name: "Islom MFY"
    },
    {
      id: "8555",
      district_id: "183",
      name: "Karimdevona MFY"
    },
    {
      id: "8556",
      district_id: "183",
      name: "Katagon MFY"
    },
    {
      id: "8557",
      district_id: "183",
      name: "Kaykubod MFY"
    },
    {
      id: "8558",
      district_id: "183",
      name: "Kaynar QFY"
    },
    {
      id: "8559",
      district_id: "183",
      name: "Kichik Okmachit MFY"
    },
    {
      id: "8560",
      district_id: "183",
      name: "Kichik tagob MFY"
    },
    {
      id: "8561",
      district_id: "183",
      name: "Kirketmon MFY"
    },
    {
      id: "8562",
      district_id: "183",
      name: "Kizil-kakir QFY"
    },
    {
      id: "8563",
      district_id: "183",
      name: "Kizil-kakir MFY"
    },
    {
      id: "8564",
      district_id: "183",
      name: "Kizilbog MFY"
    },
    {
      id: "8565",
      district_id: "183",
      name: "Konizar QFY"
    },
    {
      id: "8566",
      district_id: "183",
      name: "Kota tagob MFY"
    },
    {
      id: "8567",
      district_id: "183",
      name: "Kudash MFY"
    },
    {
      id: "8568",
      district_id: "183",
      name: "Kul elash MFY"
    },
    {
      id: "8569",
      district_id: "183",
      name: "Kulbek MFY"
    },
    {
      id: "8570",
      district_id: "183",
      name: "Kum MFY"
    },
    {
      id: "8571",
      district_id: "183",
      name: "Kumbosti MFY"
    },
    {
      id: "8572",
      district_id: "183",
      name: "Kurgoncha MFY"
    },
    {
      id: "8573",
      district_id: "183",
      name: "Kushkunok MFY"
    },
    {
      id: "8574",
      district_id: "183",
      name: "Ming tut QFY"
    },
    {
      id: "8575",
      district_id: "183",
      name: "Nursux QFY"
    },
    {
      id: "8576",
      district_id: "183",
      name: "Okmachit MFY"
    },
    {
      id: "8577",
      district_id: "183",
      name: "Oktepa MFY"
    },
    {
      id: "8578",
      district_id: "183",
      name: "Olmazor MFY"
    },
    {
      id: "8579",
      district_id: "183",
      name: "Ovchi QFY"
    },
    {
      id: "8580",
      district_id: "183",
      name: "Ovchi MFY"
    },
    {
      id: "8581",
      district_id: "183",
      name: "Oxunboboev QFY"
    },
    {
      id: "8582",
      district_id: "183",
      name: "Oxunboboev MFY"
    },
    {
      id: "8583",
      district_id: "183",
      name: "Oyimchakakir MFY"
    },
    {
      id: "8584",
      district_id: "183",
      name: "O`qchi-dasht MFY"
    },
    {
      id: "8585",
      district_id: "183",
      name: "Pastkurik MFY"
    },
    {
      id: "8586",
      district_id: "183",
      name: "Rajabgardi MFY"
    },
    {
      id: "8587",
      district_id: "183",
      name: "Rajabgardi QFY"
    },
    {
      id: "8588",
      district_id: "183",
      name: "Shur kishlok MFY"
    },
    {
      id: "8589",
      district_id: "183",
      name: "Shursuv SHFY"
    },
    {
      id: "8590",
      district_id: "183",
      name: "Sochtepa MFY"
    },
    {
      id: "8591",
      district_id: "183",
      name: "Tagob QFY"
    },
    {
      id: "8592",
      district_id: "183",
      name: "Tovar MFY"
    },
    {
      id: "8593",
      district_id: "183",
      name: "Turkiston MFY"
    },
    {
      id: "8594",
      district_id: "183",
      name: "Tuyul MFY"
    },
    {
      id: "8595",
      district_id: "183",
      name: "Uch bulak MFY"
    },
    {
      id: "8596",
      district_id: "183",
      name: "Urta kishlok MFY"
    },
    {
      id: "8597",
      district_id: "183",
      name: "Xaydarobod MFY"
    },
    {
      id: "8598",
      district_id: "183",
      name: "Xotamitoy MFY"
    },
    {
      id: "8599",
      district_id: "183",
      name: "Yakatut MFY"
    },
    {
      id: "8600",
      district_id: "183",
      name: "Zinasha MFY"
    },
    {
      id: "8601",
      district_id: "184",
      name: "Avval QFY"
    },
    {
      id: "8602",
      district_id: "184",
      name: "Beruniy MFY"
    },
    {
      id: "8603",
      district_id: "184",
      name: "Barkaror xam MFY"
    },
    {
      id: "8604",
      district_id: "184",
      name: "Boy maxalla MFY"
    },
    {
      id: "8605",
      district_id: "184",
      name: "Buston MFY"
    },
    {
      id: "8606",
      district_id: "184",
      name: "Chek shura QFY"
    },
    {
      id: "8607",
      district_id: "184",
      name: "Chimyon QFY"
    },
    {
      id: "8608",
      district_id: "184",
      name: "Chimyon SHFY"
    },
    {
      id: "8609",
      district_id: "184",
      name: "D.U.Toshboy MFY"
    },
    {
      id: "8610",
      district_id: "184",
      name: "Damkul QFY"
    },
    {
      id: "8611",
      district_id: "184",
      name: "Fargona MFY"
    },
    {
      id: "8612",
      district_id: "184",
      name: "Guliston MFY"
    },
    {
      id: "8613",
      district_id: "184",
      name: "Gulpiyon MFY"
    },
    {
      id: "8614",
      district_id: "184",
      name: "Gulshan QFY"
    },
    {
      id: "8615",
      district_id: "184",
      name: "Guzar MFY"
    },
    {
      id: "8616",
      district_id: "184",
      name: "I.Siddikov MFY"
    },
    {
      id: "8617",
      district_id: "184",
      name: "Ilgor MFY"
    },
    {
      id: "8618",
      district_id: "184",
      name: "Kaptarxona QFY"
    },
    {
      id: "8619",
      district_id: "184",
      name: "Korasuv MFY"
    },
    {
      id: "8620",
      district_id: "184",
      name: "Korayantok MFY"
    },
    {
      id: "8621",
      district_id: "184",
      name: "Kurgontepa QFY"
    },
    {
      id: "8622",
      district_id: "184",
      name: "Kurik MFY"
    },
    {
      id: "8623",
      district_id: "184",
      name: "Kurilish MFY"
    },
    {
      id: "8624",
      district_id: "184",
      name: "Langar MFY"
    },
    {
      id: "8625",
      district_id: "184",
      name: "Log`on QFY"
    },
    {
      id: "8626",
      district_id: "184",
      name: "Mexnatobod MFY"
    },
    {
      id: "8627",
      district_id: "184",
      name: "Margilon MFY"
    },
    {
      id: "8628",
      district_id: "184",
      name: "Mash`al MFY"
    },
    {
      id: "8629",
      district_id: "184",
      name: "Maydon MFY"
    },
    {
      id: "8630",
      district_id: "184",
      name: "Mindon QFY"
    },
    {
      id: "8631",
      district_id: "184",
      name: "Mindonobod MFY"
    },
    {
      id: "8632",
      district_id: "184",
      name: "Mirzaolim MFY"
    },
    {
      id: "8633",
      district_id: "184",
      name: "Mozortagi MFY"
    },
    {
      id: "8634",
      district_id: "184",
      name: "Navruz MFY"
    },
    {
      id: "8635",
      district_id: "184",
      name: "Novkent QFY"
    },
    {
      id: "8636",
      district_id: "184",
      name: "Obod MFY"
    },
    {
      id: "8637",
      district_id: "184",
      name: "Ok-oltin MFY"
    },
    {
      id: "8638",
      district_id: "184",
      name: "Okbilol QFY"
    },
    {
      id: "8639",
      district_id: "184",
      name: "Oktepa MFY"
    },
    {
      id: "8640",
      district_id: "184",
      name: "Oktom MFY"
    },
    {
      id: "8641",
      district_id: "184",
      name: "Paski Archa MFY"
    },
    {
      id: "8642",
      district_id: "184",
      name: "Sanoat MFY"
    },
    {
      id: "8643",
      district_id: "184",
      name: "Satkak MFY"
    },
    {
      id: "8644",
      district_id: "184",
      name: "Sattorobod MFY"
    },
    {
      id: "8645",
      district_id: "184",
      name: "Sh.Xakikati MFY"
    },
    {
      id: "8646",
      district_id: "184",
      name: "Shifokor MFY"
    },
    {
      id: "8647",
      district_id: "184",
      name: "Shoximardon QFY"
    },
    {
      id: "8648",
      district_id: "184",
      name: "Shoximardonobod MFY"
    },
    {
      id: "8649",
      district_id: "184",
      name: "Soybo`yi QFY"
    },
    {
      id: "8650",
      district_id: "184",
      name: "Tinchlik MFY"
    },
    {
      id: "8651",
      district_id: "184",
      name: "U.Shaxobov MFY"
    },
    {
      id: "8652",
      district_id: "184",
      name: "Ulugbek MFY"
    },
    {
      id: "8653",
      district_id: "184",
      name: "Urta kishlok MFY"
    },
    {
      id: "8654",
      district_id: "184",
      name: "Uzbekiston MFY"
    },
    {
      id: "8655",
      district_id: "184",
      name: "Vaziyo MFY"
    },
    {
      id: "8656",
      district_id: "184",
      name: "Vodil QFY"
    },
    {
      id: "8657",
      district_id: "184",
      name: "XA.Val? MFY"
    },
    {
      id: "8658",
      district_id: "184",
      name: "X.Obilol MFY"
    },
    {
      id: "8659",
      district_id: "184",
      name: "X.Zayni?v MFY"
    },
    {
      id: "8660",
      district_id: "184",
      name: "Xonkiz QFY"
    },
    {
      id: "8661",
      district_id: "184",
      name: "Xuroba MFY"
    },
    {
      id: "8662",
      district_id: "184",
      name: "Yanbarok MFY"
    },
    {
      id: "8663",
      district_id: "184",
      name: "Yangi yul MFY"
    },
    {
      id: "8664",
      district_id: "184",
      name: "Yangiobod MFY"
    },
    {
      id: "8665",
      district_id: "184",
      name: "Yordon MFY"
    },
    {
      id: "8666",
      district_id: "184",
      name: "Yoyilma MFY"
    },
    {
      id: "8667",
      district_id: "184",
      name: "Yu.Vodil QFY"
    },
    {
      id: "8668",
      district_id: "184",
      name: "Yuqori Archa MFY"
    },
    {
      id: "8669",
      district_id: "184",
      name: "Yuqori Gulshan MFY"
    },
    {
      id: "8670",
      district_id: "184",
      name: "Yuqori Mindon MFY"
    },
    {
      id: "8671",
      district_id: "184",
      name: "Zilol MFY"
    },
    {
      id: "8672",
      district_id: "185",
      name: "1-Besh bola MFY"
    },
    {
      id: "8673",
      district_id: "185",
      name: "A.Jomiy MFY"
    },
    {
      id: "8674",
      district_id: "185",
      name: "A.Navoiy MFY"
    },
    {
      id: "8675",
      district_id: "185",
      name: "A.Qodiriy MFY"
    },
    {
      id: "8676",
      district_id: "185",
      name: "A.Xorazmiy MFY"
    },
    {
      id: "8677",
      district_id: "185",
      name: "Al-Farg`oniy MFY"
    },
    {
      id: "8678",
      district_id: "185",
      name: "Beglar MFY"
    },
    {
      id: "8679",
      district_id: "185",
      name: "Beruniy MFY"
    },
    {
      id: "8680",
      district_id: "185",
      name: "Besh-bola MFY"
    },
    {
      id: "8681",
      district_id: "185",
      name: "Barkamol MFY"
    },
    {
      id: "8682",
      district_id: "185",
      name: "Baxor MFY"
    },
    {
      id: "8683",
      district_id: "185",
      name: "Bobur MFY"
    },
    {
      id: "8684",
      district_id: "185",
      name: "Bo`ston MFY"
    },
    {
      id: "8685",
      district_id: "185",
      name: "Do`stlik MFY"
    },
    {
      id: "8686",
      district_id: "185",
      name: "Farg`ona MFY"
    },
    {
      id: "8687",
      district_id: "185",
      name: "Guliston MFY"
    },
    {
      id: "8688",
      district_id: "185",
      name: "Gulzor MFY"
    },
    {
      id: "8689",
      district_id: "185",
      name: "Ibn-Sino MFY"
    },
    {
      id: "8690",
      district_id: "185",
      name: "Ibrat MFY"
    },
    {
      id: "8691",
      district_id: "185",
      name: "Iftixor MFY"
    },
    {
      id: "8692",
      district_id: "185",
      name: "Ipak yo`li MFY"
    },
    {
      id: "8693",
      district_id: "185",
      name: "Istiqbol MFY"
    },
    {
      id: "8694",
      district_id: "185",
      name: "Istiqlol MFY"
    },
    {
      id: "8695",
      district_id: "185",
      name: "Jo`ydam MFY"
    },
    {
      id: "8696",
      district_id: "185",
      name: "Kimyogar MFY"
    },
    {
      id: "8697",
      district_id: "185",
      name: "Kirguli MFY"
    },
    {
      id: "8698",
      district_id: "185",
      name: "Lolazor MFY"
    },
    {
      id: "8699",
      district_id: "185",
      name: "M.Ulug`b?k MFY"
    },
    {
      id: "8700",
      district_id: "185",
      name: "Mexribonlik MFY"
    },
    {
      id: "8701",
      district_id: "185",
      name: "Maarifat MFY"
    },
    {
      id: "8702",
      district_id: "185",
      name: "Madadkor MFY"
    },
    {
      id: "8703",
      district_id: "185",
      name: "Madaniyat MFY"
    },
    {
      id: "8704",
      district_id: "185",
      name: "Mashaal MFY"
    },
    {
      id: "8705",
      district_id: "185",
      name: "Muruvvat MFY"
    },
    {
      id: "8706",
      district_id: "185",
      name: "Mustaqillik MFY"
    },
    {
      id: "8707",
      district_id: "185",
      name: "Nafosat MFY"
    },
    {
      id: "8708",
      district_id: "185",
      name: "Navbaxor MFY"
    },
    {
      id: "8709",
      district_id: "185",
      name: "Navro`z MFY"
    },
    {
      id: "8710",
      district_id: "185",
      name: "Nodirabegim MFY"
    },
    {
      id: "8711",
      district_id: "185",
      name: "Oqariq MFY"
    },
    {
      id: "8712",
      district_id: "185",
      name: "Oqariqobod MFY"
    },
    {
      id: "8713",
      district_id: "185",
      name: "Oybek MFY"
    },
    {
      id: "8714",
      district_id: "185",
      name: "Ozodlik MFY"
    },
    {
      id: "8715",
      district_id: "185",
      name: "O`rmonchilar MFY"
    },
    {
      id: "8716",
      district_id: "185",
      name: "O`zbekiston MFY"
    },
    {
      id: "8717",
      district_id: "185",
      name: "Parvoz MFY"
    },
    {
      id: "8718",
      district_id: "185",
      name: "S.Raximov MFY"
    },
    {
      id: "8719",
      district_id: "185",
      name: "S.Temur MFY"
    },
    {
      id: "8720",
      district_id: "185",
      name: "Sh.Rashidov MFY"
    },
    {
      id: "8721",
      district_id: "185",
      name: "Shakarqishlo MFY"
    },
    {
      id: "8722",
      district_id: "185",
      name: "Sharshara MFY"
    },
    {
      id: "8723",
      district_id: "185",
      name: "Shodiyona MFY"
    },
    {
      id: "8724",
      district_id: "185",
      name: "Shodlik MFY"
    },
    {
      id: "8725",
      district_id: "185",
      name: "Simtepa MFY"
    },
    {
      id: "8726",
      district_id: "185",
      name: "Sovurbuloq MFY"
    },
    {
      id: "8727",
      district_id: "185",
      name: "Soxibkor MFY"
    },
    {
      id: "8728",
      district_id: "185",
      name: "Soy-bo`yi MFY"
    },
    {
      id: "8729",
      district_id: "185",
      name: "Surxtepa MFY"
    },
    {
      id: "8730",
      district_id: "185",
      name: "Tabassum MFY"
    },
    {
      id: "8731",
      district_id: "185",
      name: "Tinchlik MFY"
    },
    {
      id: "8732",
      district_id: "185",
      name: "To`qimachilar MFY"
    },
    {
      id: "8733",
      district_id: "185",
      name: "Xamkorlik MFY"
    },
    {
      id: "8734",
      district_id: "185",
      name: "Xujamag`iz MFY"
    },
    {
      id: "8735",
      district_id: "185",
      name: "Xuvaydo MFY"
    },
    {
      id: "8736",
      district_id: "185",
      name: "Yangi soy MFY"
    },
    {
      id: "8737",
      district_id: "185",
      name: "Yangi yo`l MFY"
    },
    {
      id: "8738",
      district_id: "185",
      name: "Yormozor MFY"
    },
    {
      id: "8739",
      district_id: "185",
      name: "Yoshlar MFY"
    },
    {
      id: "8740",
      district_id: "185",
      name: "Yulduz MFY"
    },
    {
      id: "8741",
      district_id: "185",
      name: "Zarbdor MFY"
    },
    {
      id: "8742",
      district_id: "186",
      name: "Ardaxshon MFY"
    },
    {
      id: "8743",
      district_id: "186",
      name: "Bekobod MFY"
    },
    {
      id: "8744",
      district_id: "186",
      name: "Besh-og`a MFY"
    },
    {
      id: "8745",
      district_id: "186",
      name: "Boltako`l MFY"
    },
    {
      id: "8746",
      district_id: "186",
      name: "Chek-chuvaldoq MFY"
    },
    {
      id: "8747",
      district_id: "186",
      name: "Chilgi-jiyda MFY"
    },
    {
      id: "8748",
      district_id: "186",
      name: "Chirkay MFY"
    },
    {
      id: "8749",
      district_id: "186",
      name: "Eshon MFY"
    },
    {
      id: "8750",
      district_id: "186",
      name: "Eski MFY"
    },
    {
      id: "8751",
      district_id: "186",
      name: "g`allakor QFY"
    },
    {
      id: "8752",
      district_id: "186",
      name: "g`uncha QFY"
    },
    {
      id: "8753",
      district_id: "186",
      name: "Ingichka MFY"
    },
    {
      id: "8754",
      district_id: "186",
      name: "Jang-ketmon MFY"
    },
    {
      id: "8755",
      district_id: "186",
      name: "Kaldushon MFY"
    },
    {
      id: "8756",
      district_id: "186",
      name: "Karmak MFY"
    },
    {
      id: "8757",
      district_id: "186",
      name: "Katta-yangi MFY"
    },
    {
      id: "8758",
      district_id: "186",
      name: "Kichik-yangi MFY"
    },
    {
      id: "8759",
      district_id: "186",
      name: "Ko`k-do`ppi MFY"
    },
    {
      id: "8760",
      district_id: "186",
      name: "Mustaqillik MFY"
    },
    {
      id: "8761",
      district_id: "186",
      name: "Navbaxor MFY"
    },
    {
      id: "8762",
      district_id: "186",
      name: "Navbaxor QFY"
    },
    {
      id: "8763",
      district_id: "186",
      name: "O`rta-qo`rg`on MFY"
    },
    {
      id: "8764",
      district_id: "186",
      name: "Polvontosh MFY"
    },
    {
      id: "8765",
      district_id: "186",
      name: "Qizil-qiyaq MFY"
    },
    {
      id: "8766",
      district_id: "186",
      name: "Qo`qon QFY"
    },
    {
      id: "8767",
      district_id: "186",
      name: "Qo`qonboy MFY"
    },
    {
      id: "8768",
      district_id: "186",
      name: "Qushchi MFY"
    },
    {
      id: "8769",
      district_id: "186",
      name: "Shoyimbek MFY"
    },
    {
      id: "8770",
      district_id: "186",
      name: "Sho`r MFY"
    },
    {
      id: "8771",
      district_id: "186",
      name: "Shunqor MFY"
    },
    {
      id: "8772",
      district_id: "186",
      name: "Shunqor QFY"
    },
    {
      id: "8773",
      district_id: "186",
      name: "Tomosha MFY"
    },
    {
      id: "8774",
      district_id: "186",
      name: "Tomosha QFY"
    },
    {
      id: "8775",
      district_id: "186",
      name: "Xayit MFY"
    },
    {
      id: "8776",
      district_id: "186",
      name: "Yangi MFY"
    },
    {
      id: "8777",
      district_id: "187",
      name: "Ashxabod MFY"
    },
    {
      id: "8778",
      district_id: "187",
      name: "Bejganik MFY"
    },
    {
      id: "8779",
      district_id: "187",
      name: "Besharik MFY"
    },
    {
      id: "8780",
      district_id: "187",
      name: "Beshariq QFY"
    },
    {
      id: "8781",
      district_id: "187",
      name: "Bog`ot SHFY"
    },
    {
      id: "8782",
      district_id: "187",
      name: "Boyqozoq MFY"
    },
    {
      id: "8783",
      district_id: "187",
      name: "Bo`ka MFY"
    },
    {
      id: "8784",
      district_id: "187",
      name: "Bo`kaylar MFY"
    },
    {
      id: "8785",
      district_id: "187",
      name: "Bo`saloq MFY"
    },
    {
      id: "8786",
      district_id: "187",
      name: "Dexkonbozor QFY"
    },
    {
      id: "8787",
      district_id: "187",
      name: "Dexkonobod MFY"
    },
    {
      id: "8788",
      district_id: "187",
      name: "Esamat MFY"
    },
    {
      id: "8789",
      district_id: "187",
      name: "Eshonlar MFY"
    },
    {
      id: "8790",
      district_id: "187",
      name: "G`alaba MFY"
    },
    {
      id: "8791",
      district_id: "187",
      name: "Guduklar MFY"
    },
    {
      id: "8792",
      district_id: "187",
      name: "Hurriyat MFY"
    },
    {
      id: "8793",
      district_id: "187",
      name: "Katta qo`madoq MFY"
    },
    {
      id: "8794",
      district_id: "187",
      name: "Ko`na birlashuv MFY"
    },
    {
      id: "8795",
      district_id: "187",
      name: "Mehnat gul MFY"
    },
    {
      id: "8796",
      district_id: "187",
      name: "Mesit buyi MFY"
    },
    {
      id: "8797",
      district_id: "187",
      name: "Mesit MFY"
    },
    {
      id: "8798",
      district_id: "187",
      name: "Madaniyat MFY"
    },
    {
      id: "8799",
      district_id: "187",
      name: "Madaniyat QFY"
    },
    {
      id: "8800",
      district_id: "187",
      name: "Mayda millat MFY"
    },
    {
      id: "8801",
      district_id: "187",
      name: "Miroblar MFY"
    },
    {
      id: "8802",
      district_id: "187",
      name: "Nafas bobo MFY"
    },
    {
      id: "8803",
      district_id: "187",
      name: "Nayman bo`yi MFY"
    },
    {
      id: "8804",
      district_id: "187",
      name: "Nayman QFY"
    },
    {
      id: "8805",
      district_id: "187",
      name: "Nukus MFY"
    },
    {
      id: "8806",
      district_id: "187",
      name: "Nurafshon MFY"
    },
    {
      id: "8807",
      district_id: "187",
      name: "Obod MFY"
    },
    {
      id: "8808",
      district_id: "187",
      name: "Ogalar MFY"
    },
    {
      id: "8809",
      district_id: "187",
      name: "Olchin solma MFY"
    },
    {
      id: "8810",
      district_id: "187",
      name: "Oq oltin MFY"
    },
    {
      id: "8811",
      district_id: "187",
      name: "Oq tepa MFY"
    },
    {
      id: "8812",
      district_id: "187",
      name: "Osyop MFY"
    },
    {
      id: "8813",
      district_id: "187",
      name: "O`g`uzrabot QFY"
    },
    {
      id: "8814",
      district_id: "187",
      name: "O`rta badoq MFY"
    },
    {
      id: "8815",
      district_id: "187",
      name: "O`zbekiston MFY"
    },
    {
      id: "8816",
      district_id: "187",
      name: "O`zgarish MFY"
    },
    {
      id: "8817",
      district_id: "187",
      name: "Qashqalar MFY"
    },
    {
      id: "8818",
      district_id: "187",
      name: "Qipchoq MFY"
    },
    {
      id: "8819",
      district_id: "187",
      name: "Qipchoq QFY"
    },
    {
      id: "8820",
      district_id: "187",
      name: "Qipchoqlar MFY"
    },
    {
      id: "8821",
      district_id: "187",
      name: "Qirmalar MFY"
    },
    {
      id: "8822",
      district_id: "187",
      name: "Qorabog` MFY"
    },
    {
      id: "8823",
      district_id: "187",
      name: "Qorayontok QFY"
    },
    {
      id: "8824",
      district_id: "187",
      name: "Qo`ldov MFY"
    },
    {
      id: "8825",
      district_id: "187",
      name: "Qo`ngirot MFY"
    },
    {
      id: "8826",
      district_id: "187",
      name: "Qulonkorabog QFY"
    },
    {
      id: "8827",
      district_id: "187",
      name: "Qushlilar MFY"
    },
    {
      id: "8828",
      district_id: "187",
      name: "Saydalijon MFY"
    },
    {
      id: "8829",
      district_id: "187",
      name: "Tozabozor MFY"
    },
    {
      id: "8830",
      district_id: "187",
      name: "Ustalar MFY"
    },
    {
      id: "8831",
      district_id: "187",
      name: "Ustalar MFY"
    },
    {
      id: "8832",
      district_id: "187",
      name: "Uzgarish MFY"
    },
    {
      id: "8833",
      district_id: "187",
      name: "Xitoy QFY"
    },
    {
      id: "8834",
      district_id: "187",
      name: "Xujalik QFY"
    },
    {
      id: "8835",
      district_id: "187",
      name: "Yangi kadam MFY"
    },
    {
      id: "8836",
      district_id: "187",
      name: "Yosh usmir MFY"
    },
    {
      id: "8837",
      district_id: "187",
      name: "Yumaloq to`qay MFY"
    },
    {
      id: "8838",
      district_id: "187",
      name: "Zarbdor MFY"
    },
    {
      id: "8839",
      district_id: "188",
      name: "\"Besh uy\" MFY"
    },
    {
      id: "8840",
      district_id: "188",
      name: "\"Baldokli\" MFY"
    },
    {
      id: "8841",
      district_id: "188",
      name: "\"Birlashgan \"maxalla"
    },
    {
      id: "8842",
      district_id: "188",
      name: "\"Buzkal`a\" MFY"
    },
    {
      id: "8843",
      district_id: "188",
      name: "\"Chakkalar\" MFY"
    },
    {
      id: "8844",
      district_id: "188",
      name: "\"Chinobod\" MFY"
    },
    {
      id: "8845",
      district_id: "188",
      name: "\"Dehqon\" MFY"
    },
    {
      id: "8846",
      district_id: "188",
      name: "\"Dehqonobod\"MFY"
    },
    {
      id: "8847",
      district_id: "188",
      name: "\"Dusimbiy\" qishlog`i"
    },
    {
      id: "8848",
      district_id: "188",
      name: "\"Dusimbiy\"MFY"
    },
    {
      id: "8849",
      district_id: "188",
      name: "\"Do`stlik \" MFY"
    },
    {
      id: "8850",
      district_id: "188",
      name: "\"Do`stlik\" MFY"
    },
    {
      id: "8851",
      district_id: "188",
      name: "\"Do`stlik\" bogi MFY"
    },
    {
      id: "8852",
      district_id: "188",
      name: "\"Do`stlik\" MFY"
    },
    {
      id: "8853",
      district_id: "188",
      name: "\"Esabiy\" MFY"
    },
    {
      id: "8854",
      district_id: "188",
      name: "\"Eshimjiron\" MFY"
    },
    {
      id: "8855",
      district_id: "188",
      name: "\"Jaloir\" MFY"
    },
    {
      id: "8856",
      district_id: "188",
      name: "\"Kangli\" MFY"
    },
    {
      id: "8857",
      district_id: "188",
      name: "\"Kangli\" MFY"
    },
    {
      id: "8858",
      district_id: "188",
      name: "\"Katarik\" MFY"
    },
    {
      id: "8859",
      district_id: "188",
      name: "\"Mevazor\" MFY"
    },
    {
      id: "8860",
      district_id: "188",
      name: "\"Marbugat\" MFY"
    },
    {
      id: "8861",
      district_id: "188",
      name: "\"Moyli\" MFY"
    },
    {
      id: "8862",
      district_id: "188",
      name: "\"Navbir yop\" MFY"
    },
    {
      id: "8863",
      district_id: "188",
      name: "\"Navruz\" MFY"
    },
    {
      id: "8864",
      district_id: "188",
      name: "\"Nukus \" MFY"
    },
    {
      id: "8865",
      district_id: "188",
      name: "\"Nurafshon\" MFY"
    },
    {
      id: "8866",
      district_id: "188",
      name: "\"Obod\" MFY"
    },
    {
      id: "8867",
      district_id: "188",
      name: "\"Okkum\" MFY"
    },
    {
      id: "8868",
      district_id: "188",
      name: "\"Olchin\" MFY"
    },
    {
      id: "8869",
      district_id: "188",
      name: "\"Paxtachi\" MFY"
    },
    {
      id: "8870",
      district_id: "188",
      name: "\"Saxtiyon\" MFY"
    },
    {
      id: "8871",
      district_id: "188",
      name: "\"Shangi\" MFY"
    },
    {
      id: "8872",
      district_id: "188",
      name: "\"Shangi\" MFY"
    },
    {
      id: "8873",
      district_id: "188",
      name: "\"Sovunchi\"MFY"
    },
    {
      id: "8874",
      district_id: "188",
      name: "\"Taxtakupir\" MFY"
    },
    {
      id: "8875",
      district_id: "188",
      name: "\"Toza yorgan\" maxalla"
    },
    {
      id: "8876",
      district_id: "188",
      name: "\"Uyilma\" MFY"
    },
    {
      id: "8877",
      district_id: "188",
      name: "\"Yormish\"MFY"
    },
    {
      id: "8878",
      district_id: "188",
      name: "1-maxalla"
    },
    {
      id: "8879",
      district_id: "188",
      name: "10-maxalla"
    },
    {
      id: "8880",
      district_id: "188",
      name: "11-maxalla"
    },
    {
      id: "8881",
      district_id: "188",
      name: "12-maxalla"
    },
    {
      id: "8882",
      district_id: "188",
      name: "2-maxalla"
    },
    {
      id: "8883",
      district_id: "188",
      name: "3-maxalla"
    },
    {
      id: "8884",
      district_id: "188",
      name: "4-maxalla"
    },
    {
      id: "8885",
      district_id: "188",
      name: "5-maxalla"
    },
    {
      id: "8886",
      district_id: "188",
      name: "6- maxalla"
    },
    {
      id: "8887",
      district_id: "188",
      name: "7-maxalla"
    },
    {
      id: "8888",
      district_id: "188",
      name: "8- maxalla"
    },
    {
      id: "8889",
      district_id: "188",
      name: "9- maxalla"
    },
    {
      id: "8890",
      district_id: "188",
      name: "Birlashgan qishlog`i"
    },
    {
      id: "8891",
      district_id: "188",
      name: "Eshimjiron qishlog`i"
    },
    {
      id: "8892",
      district_id: "188",
      name: "Guliston qishlog`i"
    },
    {
      id: "8893",
      district_id: "188",
      name: "Gurlan shaxarchasi fy"
    },
    {
      id: "8894",
      district_id: "188",
      name: "Olga qishlog`i"
    },
    {
      id: "8895",
      district_id: "188",
      name: "Saxtiyon qishlog`i"
    },
    {
      id: "8896",
      district_id: "188",
      name: "Sholikor qishlog`i"
    },
    {
      id: "8897",
      district_id: "188",
      name: "Vazir qishlog`i"
    },
    {
      id: "8898",
      district_id: "188",
      name: "Xizir-eli qishlog`i"
    },
    {
      id: "8899",
      district_id: "189",
      name: "1-mahalla FY"
    },
    {
      id: "8900",
      district_id: "189",
      name: "1-mahalla FY"
    },
    {
      id: "8901",
      district_id: "189",
      name: "1-mahalla FY"
    },
    {
      id: "8902",
      district_id: "189",
      name: "1-mahalla Fy"
    },
    {
      id: "8903",
      district_id: "189",
      name: "2-mahalla FY"
    },
    {
      id: "8904",
      district_id: "189",
      name: "2-mahalla FY"
    },
    {
      id: "8905",
      district_id: "189",
      name: "2-mahalla FY"
    },
    {
      id: "8906",
      district_id: "189",
      name: "2-mahalla FY"
    },
    {
      id: "8907",
      district_id: "189",
      name: "3-mahalla FY"
    },
    {
      id: "8908",
      district_id: "189",
      name: "3-mahalla FY"
    },
    {
      id: "8909",
      district_id: "189",
      name: "3-mahalla FY"
    },
    {
      id: "8910",
      district_id: "189",
      name: "4-mahalla FY"
    },
    {
      id: "8911",
      district_id: "189",
      name: "4-mahalla FY"
    },
    {
      id: "8912",
      district_id: "189",
      name: "4-mahalla FY"
    },
    {
      id: "8913",
      district_id: "189",
      name: "5-mahalla FY"
    },
    {
      id: "8914",
      district_id: "189",
      name: "5-mahalla FY"
    },
    {
      id: "8915",
      district_id: "189",
      name: "5-mahalla FY"
    },
    {
      id: "8916",
      district_id: "189",
      name: "6-mahalla FY"
    },
    {
      id: "8917",
      district_id: "189",
      name: "6-mahalla FY"
    },
    {
      id: "8918",
      district_id: "189",
      name: "Amirqum MFY"
    },
    {
      id: "8919",
      district_id: "189",
      name: "Arablar MFY"
    },
    {
      id: "8920",
      district_id: "189",
      name: "Ayronko`l MFY"
    },
    {
      id: "8921",
      district_id: "189",
      name: "Baratlar MFY"
    },
    {
      id: "8922",
      district_id: "189",
      name: "Bo`rloq MFY"
    },
    {
      id: "8923",
      district_id: "189",
      name: "Changli 1 MFY"
    },
    {
      id: "8924",
      district_id: "189",
      name: "Changli 2 MFY"
    },
    {
      id: "8925",
      district_id: "189",
      name: "Chiqirchi MFY"
    },
    {
      id: "8926",
      district_id: "189",
      name: "Dovud MFY"
    },
    {
      id: "8927",
      district_id: "189",
      name: "Elobod MFY"
    },
    {
      id: "8928",
      district_id: "189",
      name: "G`ozovot QFY"
    },
    {
      id: "8929",
      district_id: "189",
      name: "Ilgaldi MFY"
    },
    {
      id: "8930",
      district_id: "189",
      name: "Ittifoq MFY"
    },
    {
      id: "8931",
      district_id: "189",
      name: "Kenagas MFY"
    },
    {
      id: "8932",
      district_id: "189",
      name: "Kenagas QFY"
    },
    {
      id: "8933",
      district_id: "189",
      name: "Ko`nazay MFY"
    },
    {
      id: "8934",
      district_id: "189",
      name: "Mehnatobod MFY"
    },
    {
      id: "8935",
      district_id: "189",
      name: "Mast MFY"
    },
    {
      id: "8936",
      district_id: "189",
      name: "Nezaxos MFY"
    },
    {
      id: "8937",
      district_id: "189",
      name: "Oqdarband QFY"
    },
    {
      id: "8938",
      district_id: "189",
      name: "Oshoq qa.la MFY"
    },
    {
      id: "8939",
      district_id: "189",
      name: "O`rta QFY"
    },
    {
      id: "8940",
      district_id: "189",
      name: "O`rtayop QFY"
    },
    {
      id: "8941",
      district_id: "189",
      name: "O`zbekiston MFY"
    },
    {
      id: "8942",
      district_id: "189",
      name: "O`zbekyop QFY"
    },
    {
      id: "8943",
      district_id: "189",
      name: "Polvon MFY"
    },
    {
      id: "8944",
      district_id: "189",
      name: "Qaravulqkala MFY"
    },
    {
      id: "8945",
      district_id: "189",
      name: "Qoramon MFY"
    },
    {
      id: "8946",
      district_id: "189",
      name: "Qoromon qal`a MFY"
    },
    {
      id: "8947",
      district_id: "189",
      name: "Qorovul MFY"
    },
    {
      id: "8948",
      district_id: "189",
      name: "Qotog`on QFY"
    },
    {
      id: "8949",
      district_id: "189",
      name: "Qo`shko`pir SHFY"
    },
    {
      id: "8950",
      district_id: "189",
      name: "Sherobod MFY"
    },
    {
      id: "8951",
      district_id: "189",
      name: "Shix QFY"
    },
    {
      id: "8952",
      district_id: "189",
      name: "Shixmashhad MFY"
    },
    {
      id: "8953",
      district_id: "189",
      name: "Shixmashxad SHFY"
    },
    {
      id: "8954",
      district_id: "189",
      name: "Shixobod FY"
    },
    {
      id: "8955",
      district_id: "189",
      name: "Tagalak MFY"
    },
    {
      id: "8956",
      district_id: "189",
      name: "Taqir davuq MFY"
    },
    {
      id: "8957",
      district_id: "189",
      name: "Vaximchi MFY"
    },
    {
      id: "8958",
      district_id: "189",
      name: "Xadra QFY"
    },
    {
      id: "8959",
      district_id: "189",
      name: "Xayrabod MFY"
    },
    {
      id: "8960",
      district_id: "189",
      name: "Xayrobod QFY"
    },
    {
      id: "8961",
      district_id: "189",
      name: "Xonbod QFY"
    },
    {
      id: "8962",
      district_id: "189",
      name: "Xosiyon MFY"
    },
    {
      id: "8963",
      district_id: "189",
      name: "Xosiyon QFY"
    },
    {
      id: "8964",
      district_id: "189",
      name: "Yangilik MFY,"
    },
    {
      id: "8965",
      district_id: "189",
      name: "Yangilik MFY"
    },
    {
      id: "8966",
      district_id: "189",
      name: "Yangilik QFY"
    },
    {
      id: "8967",
      district_id: "189",
      name: "Yovg`ir MFY"
    },
    {
      id: "8968",
      district_id: "189",
      name: "Zarbdor MFY"
    },
    {
      id: "8969",
      district_id: "190",
      name: "A`azizova MFY"
    },
    {
      id: "8970",
      district_id: "190",
      name: "Ak-Ariklar MFY"
    },
    {
      id: "8971",
      district_id: "190",
      name: "Altinsarin MFY"
    },
    {
      id: "8972",
      district_id: "190",
      name: "Amangaldi MFY"
    },
    {
      id: "8973",
      district_id: "190",
      name: "Amudaryo MFY"
    },
    {
      id: "8974",
      district_id: "190",
      name: "Anjirchilar MFY"
    },
    {
      id: "8975",
      district_id: "190",
      name: "Arablar MFY"
    },
    {
      id: "8976",
      district_id: "190",
      name: "Arbrblar MFY"
    },
    {
      id: "8977",
      district_id: "190",
      name: "Bekobod QFY"
    },
    {
      id: "8978",
      district_id: "190",
      name: "Beruniy MFY"
    },
    {
      id: "8979",
      district_id: "190",
      name: "Baxshilar MFY"
    },
    {
      id: "8980",
      district_id: "190",
      name: "Bogdorchi MFY"
    },
    {
      id: "8981",
      district_id: "190",
      name: "Bokaylar MFY"
    },
    {
      id: "8982",
      district_id: "190",
      name: "Chakka-kuli MFY"
    },
    {
      id: "8983",
      district_id: "190",
      name: "Chakkasholikor QFY"
    },
    {
      id: "8984",
      district_id: "190",
      name: "Chala ovul MFY"
    },
    {
      id: "8985",
      district_id: "190",
      name: "Chandir MFY"
    },
    {
      id: "8986",
      district_id: "190",
      name: "ChandirQiyot QFY"
    },
    {
      id: "8987",
      district_id: "190",
      name: "Chandiryopbuyi MFY"
    },
    {
      id: "8988",
      district_id: "190",
      name: "Chatkupir QFY"
    },
    {
      id: "8989",
      district_id: "190",
      name: "Cholish QFY"
    },
    {
      id: "8990",
      district_id: "190",
      name: "Chulobod MFY"
    },
    {
      id: "8991",
      district_id: "190",
      name: "Dargalar MFY"
    },
    {
      id: "8992",
      district_id: "190",
      name: "Dumbaylar MFY"
    },
    {
      id: "8993",
      district_id: "190",
      name: "Do`stlik MFY"
    },
    {
      id: "8994",
      district_id: "190",
      name: "Do`stlik MFY"
    },
    {
      id: "8995",
      district_id: "190",
      name: "Do`stlik MFY"
    },
    {
      id: "8996",
      district_id: "190",
      name: "E.Raxim MFY"
    },
    {
      id: "8997",
      district_id: "190",
      name: "G`alaba QFY"
    },
    {
      id: "8998",
      district_id: "190",
      name: "G`alaba MFY"
    },
    {
      id: "8999",
      district_id: "190",
      name: "G`aybu QFY"
    },
    {
      id: "9000",
      district_id: "190",
      name: "Gardonlar MFY"
    },
    {
      id: "9001",
      district_id: "190",
      name: "Jambul MFY"
    },
    {
      id: "9002",
      district_id: "190",
      name: "K.Otaniyazov MFY"
    },
    {
      id: "9003",
      district_id: "190",
      name: "Kanal buyi MFY"
    },
    {
      id: "9004",
      district_id: "190",
      name: "Karavul QFY"
    },
    {
      id: "9005",
      district_id: "190",
      name: "Kattabog MFY"
    },
    {
      id: "9006",
      district_id: "190",
      name: "Kaychili MFY"
    },
    {
      id: "9007",
      district_id: "190",
      name: "Kazak ovul MFY"
    },
    {
      id: "9008",
      district_id: "190",
      name: "Killavut MFY"
    },
    {
      id: "9009",
      district_id: "190",
      name: "Qipchoq MFY"
    },
    {
      id: "9010",
      district_id: "190",
      name: "Qiyot MFY"
    },
    {
      id: "9011",
      district_id: "190",
      name: "Koramon QFY"
    },
    {
      id: "9012",
      district_id: "190",
      name: "Koramon MFY"
    },
    {
      id: "9013",
      district_id: "190",
      name: "Korayontok MFY"
    },
    {
      id: "9014",
      district_id: "190",
      name: "Kozikoraboy MFY"
    },
    {
      id: "9015",
      district_id: "190",
      name: "Koziovul MFY"
    },
    {
      id: "9016",
      district_id: "190",
      name: "Kumravot MFY"
    },
    {
      id: "9017",
      district_id: "190",
      name: "Kuna ovul MFY"
    },
    {
      id: "9018",
      district_id: "190",
      name: "Kungirot MFY"
    },
    {
      id: "9019",
      district_id: "190",
      name: "Kupaklar MFY"
    },
    {
      id: "9020",
      district_id: "190",
      name: "Kushchilar MFY"
    },
    {
      id: "9021",
      district_id: "190",
      name: "M.Xorazmiy MFY"
    },
    {
      id: "9022",
      district_id: "190",
      name: "Mergan ovul MFY"
    },
    {
      id: "9023",
      district_id: "190",
      name: "Mevazor MFY"
    },
    {
      id: "9024",
      district_id: "190",
      name: "Matnazar Oxun MFY"
    },
    {
      id: "9025",
      district_id: "190",
      name: "Mirboblar MFY"
    },
    {
      id: "9026",
      district_id: "190",
      name: "Navoiy MFY"
    },
    {
      id: "9027",
      district_id: "190",
      name: "Navruz MFY"
    },
    {
      id: "9028",
      district_id: "190",
      name: "Obod MFY"
    },
    {
      id: "9029",
      district_id: "190",
      name: "Ok matkab MFY"
    },
    {
      id: "9030",
      district_id: "190",
      name: "Oq oltin MFY"
    },
    {
      id: "9031",
      district_id: "190",
      name: "Ok-yop MFY"
    },
    {
      id: "9032",
      district_id: "190",
      name: "Ola uylik MFY"
    },
    {
      id: "9033",
      district_id: "190",
      name: "Oltinkul MFY"
    },
    {
      id: "9034",
      district_id: "190",
      name: "Oyok bog MFY"
    },
    {
      id: "9035",
      district_id: "190",
      name: "Qo`shbog` MFY"
    },
    {
      id: "9036",
      district_id: "190",
      name: "Rovot MFY"
    },
    {
      id: "9037",
      district_id: "190",
      name: "Sevanlar MFY"
    },
    {
      id: "9038",
      district_id: "190",
      name: "Sarichilar MFY"
    },
    {
      id: "9039",
      district_id: "190",
      name: "Sartavul MFY"
    },
    {
      id: "9040",
      district_id: "190",
      name: "Shermatlar MFY"
    },
    {
      id: "9041",
      district_id: "190",
      name: "Sholikor MFY"
    },
    {
      id: "9042",
      district_id: "190",
      name: "Shoxidonlar MFY"
    },
    {
      id: "9043",
      district_id: "190",
      name: "Tandirchi MFY"
    },
    {
      id: "9044",
      district_id: "190",
      name: "Toshkupir MFY"
    },
    {
      id: "9045",
      district_id: "190",
      name: "Turkmanlar MFY"
    },
    {
      id: "9046",
      district_id: "190",
      name: "Urislar MFY"
    },
    {
      id: "9047",
      district_id: "190",
      name: "Urtabog MFY"
    },
    {
      id: "9048",
      district_id: "190",
      name: "Urtabog MFY"
    },
    {
      id: "9049",
      district_id: "190",
      name: "Urtayop MFY"
    },
    {
      id: "9050",
      district_id: "190",
      name: "Ustalar MFY"
    },
    {
      id: "9051",
      district_id: "190",
      name: "Uygur MFY"
    },
    {
      id: "9052",
      district_id: "190",
      name: "Uyshin MFY"
    },
    {
      id: "9053",
      district_id: "190",
      name: "X.Olimjon MFY"
    },
    {
      id: "9054",
      district_id: "190",
      name: "Xasaul MFY"
    },
    {
      id: "9055",
      district_id: "190",
      name: "Xayvat MFY"
    },
    {
      id: "9056",
      district_id: "190",
      name: "Xojiboylar MFY"
    },
    {
      id: "9057",
      district_id: "190",
      name: "Yarmish yop MFY"
    },
    {
      id: "9058",
      district_id: "190",
      name: "Yoshlik MFY"
    },
    {
      id: "9059",
      district_id: "190",
      name: "Yukoribog QFY"
    },
    {
      id: "9060",
      district_id: "190",
      name: "Yukoridurman QFY"
    },
    {
      id: "9061",
      district_id: "190",
      name: "Yukorijirmiz MFY"
    },
    {
      id: "9062",
      district_id: "190",
      name: "Yukoriovul MFY"
    },
    {
      id: "9063",
      district_id: "190",
      name: "Zargarlar MFY"
    },
    {
      id: "9064",
      district_id: "191",
      name: "33-maxalla MFY"
    },
    {
      id: "9065",
      district_id: "191",
      name: "A.Do`schanov MFY"
    },
    {
      id: "9066",
      district_id: "191",
      name: "Al-Xorazmiy MFY"
    },
    {
      id: "9067",
      district_id: "191",
      name: "Ashxobod MFY"
    },
    {
      id: "9068",
      district_id: "191",
      name: "Besh-mergan MFY"
    },
    {
      id: "9069",
      district_id: "191",
      name: "Baynalmichi MFY"
    },
    {
      id: "9070",
      district_id: "191",
      name: "Binokor MFY"
    },
    {
      id: "9071",
      district_id: "191",
      name: "Bobur MFY"
    },
    {
      id: "9072",
      district_id: "191",
      name: "Bo`ston MFY"
    },
    {
      id: "9073",
      district_id: "191",
      name: "Do`stlik MFY"
    },
    {
      id: "9074",
      district_id: "191",
      name: "E.Raxim MFY"
    },
    {
      id: "9075",
      district_id: "191",
      name: "Feruz MFY"
    },
    {
      id: "9076",
      district_id: "191",
      name: "Gulchilar MFY"
    },
    {
      id: "9077",
      district_id: "191",
      name: "Gulshan MFY"
    },
    {
      id: "9078",
      district_id: "191",
      name: "Gulzor MFY"
    },
    {
      id: "9079",
      district_id: "191",
      name: "Istiqlol MFY"
    },
    {
      id: "9080",
      district_id: "191",
      name: "Jambul MFY"
    },
    {
      id: "9081",
      district_id: "191",
      name: "Jingovuz MFY"
    },
    {
      id: "9082",
      district_id: "191",
      name: "K. Ataniyozov MFY"
    },
    {
      id: "9083",
      district_id: "191",
      name: "Ko`hna-qal`a MFY"
    },
    {
      id: "9084",
      district_id: "191",
      name: "Ma.rifat MFY"
    },
    {
      id: "9085",
      district_id: "191",
      name: "Mash`al MFY"
    },
    {
      id: "9086",
      district_id: "191",
      name: "Mustaqillik MFY"
    },
    {
      id: "9087",
      district_id: "191",
      name: "Navbahor MFY"
    },
    {
      id: "9088",
      district_id: "191",
      name: "Navro`z MFY"
    },
    {
      id: "9089",
      district_id: "191",
      name: "Obi-hayot MFY"
    },
    {
      id: "9090",
      district_id: "191",
      name: "Olimpiya MFY"
    },
    {
      id: "9091",
      district_id: "191",
      name: "Sahovat MFY"
    },
    {
      id: "9092",
      district_id: "191",
      name: "Shodlik MFY"
    },
    {
      id: "9093",
      district_id: "191",
      name: "Temir-yo`lchi MFY"
    },
    {
      id: "9094",
      district_id: "191",
      name: "Toza-Bog` MFY"
    },
    {
      id: "9095",
      district_id: "191",
      name: "Umid MFY"
    },
    {
      id: "9096",
      district_id: "191",
      name: "Yangi-hayot MFY"
    },
    {
      id: "9097",
      district_id: "191",
      name: "Yangi-obod MFY"
    },
    {
      id: "9098",
      district_id: "191",
      name: "Yuqori-bog` MFY"
    },
    {
      id: "9099",
      district_id: "192",
      name: "Al Xorazmiy MFY"
    },
    {
      id: "9100",
      district_id: "192",
      name: "Angarik MFY"
    },
    {
      id: "9101",
      district_id: "192",
      name: "Arvik MFY"
    },
    {
      id: "9102",
      district_id: "192",
      name: "Avaz dunak MFY"
    },
    {
      id: "9103",
      district_id: "192",
      name: "Binokor MFY"
    },
    {
      id: "9104",
      district_id: "192",
      name: "Buston MFY"
    },
    {
      id: "9105",
      district_id: "192",
      name: "Chanashik MFY"
    },
    {
      id: "9106",
      district_id: "192",
      name: "Chinobod QFY"
    },
    {
      id: "9107",
      district_id: "192",
      name: "Chinobod MFY"
    },
    {
      id: "9108",
      district_id: "192",
      name: "Doshyok QFY"
    },
    {
      id: "9109",
      district_id: "192",
      name: "Doshyok MFY"
    },
    {
      id: "9110",
      district_id: "192",
      name: "Do`stlik MFY"
    },
    {
      id: "9111",
      district_id: "192",
      name: "Eski kiyat QFY"
    },
    {
      id: "9112",
      district_id: "192",
      name: "Gandimyon QFY"
    },
    {
      id: "9113",
      district_id: "192",
      name: "Gandimyon MFY"
    },
    {
      id: "9114",
      district_id: "192",
      name: "Gazchi MFY"
    },
    {
      id: "9115",
      district_id: "192",
      name: "Gilamchi MFY"
    },
    {
      id: "9116",
      district_id: "192",
      name: "Gulirayxon MFY"
    },
    {
      id: "9117",
      district_id: "192",
      name: "Guliston MFY"
    },
    {
      id: "9118",
      district_id: "192",
      name: "Gulshan MFY"
    },
    {
      id: "9119",
      district_id: "192",
      name: "Ichan kal?a MFY"
    },
    {
      id: "9120",
      district_id: "192",
      name: "Indavak MFY"
    },
    {
      id: "9121",
      district_id: "192",
      name: "Irdimzon QFY"
    },
    {
      id: "9122",
      district_id: "192",
      name: "Istiqlol MFY"
    },
    {
      id: "9123",
      district_id: "192",
      name: "Juryon QFY"
    },
    {
      id: "9124",
      district_id: "192",
      name: "Kalta minor MFY"
    },
    {
      id: "9125",
      district_id: "192",
      name: "Kaptarxona MFY"
    },
    {
      id: "9126",
      district_id: "192",
      name: "Karadamak MFY"
    },
    {
      id: "9127",
      district_id: "192",
      name: "Karakum MFY"
    },
    {
      id: "9128",
      district_id: "192",
      name: "Kattibosh MFY"
    },
    {
      id: "9129",
      district_id: "192",
      name: "Kibla Tozabog MFY"
    },
    {
      id: "9130",
      district_id: "192",
      name: "Qiyot MFY"
    },
    {
      id: "9131",
      district_id: "192",
      name: "Kulli MFY"
    },
    {
      id: "9132",
      district_id: "192",
      name: "Kumyaska MFY"
    },
    {
      id: "9133",
      district_id: "192",
      name: "Kushchi kattabog MFY"
    },
    {
      id: "9134",
      district_id: "192",
      name: "Lolazor MFY"
    },
    {
      id: "9135",
      district_id: "192",
      name: "Mevaston MFY"
    },
    {
      id: "9136",
      district_id: "192",
      name: "Ok kul MFY"
    },
    {
      id: "9137",
      district_id: "192",
      name: "Okyop QFY"
    },
    {
      id: "9138",
      district_id: "192",
      name: "Okyop MFY"
    },
    {
      id: "9139",
      district_id: "192",
      name: "Pano Maksim MFY"
    },
    {
      id: "9140",
      district_id: "192",
      name: "Parchanxos MFY"
    },
    {
      id: "9141",
      district_id: "192",
      name: "Pirnaxos MFY"
    },
    {
      id: "9142",
      district_id: "192",
      name: "Pishkanik MFY"
    },
    {
      id: "9143",
      district_id: "192",
      name: "Polosulton MFY"
    },
    {
      id: "9144",
      district_id: "192",
      name: "Serchali MFY"
    },
    {
      id: "9145",
      district_id: "192",
      name: "Sangar MFY"
    },
    {
      id: "9146",
      district_id: "192",
      name: "Shixlar MFY"
    },
    {
      id: "9147",
      district_id: "192",
      name: "Shomoxulum MFY"
    },
    {
      id: "9148",
      district_id: "192",
      name: "Shomoxulum qfy"
    },
    {
      id: "9149",
      district_id: "192",
      name: "Shurkul MFY"
    },
    {
      id: "9150",
      district_id: "192",
      name: "Soyot QFY"
    },
    {
      id: "9151",
      district_id: "192",
      name: "Soyot MFY"
    },
    {
      id: "9152",
      district_id: "192",
      name: "Tozabog MFY"
    },
    {
      id: "9153",
      district_id: "192",
      name: "Urta Xorvuz MFY"
    },
    {
      id: "9154",
      district_id: "192",
      name: "Varagzon MFY"
    },
    {
      id: "9155",
      district_id: "192",
      name: "Xorvuz MFY"
    },
    {
      id: "9156",
      district_id: "192",
      name: "Yangi turmush MFY"
    },
    {
      id: "9157",
      district_id: "192",
      name: "Yangi xayot MFY"
    },
    {
      id: "9158",
      district_id: "192",
      name: "Yukori xorvuz MFY"
    },
    {
      id: "9159",
      district_id: "193",
      name: "A.Ibragimov. MFY"
    },
    {
      id: "9160",
      district_id: "193",
      name: "Beshta. MFY"
    },
    {
      id: "9161",
      district_id: "193",
      name: "Bogdor. MFY"
    },
    {
      id: "9162",
      district_id: "193",
      name: "G.Gulom. MFY"
    },
    {
      id: "9163",
      district_id: "193",
      name: "Ishchilar. MFY"
    },
    {
      id: "9164",
      district_id: "193",
      name: "Istiqlol MFY"
    },
    {
      id: "9165",
      district_id: "193",
      name: "Jangiota MFY"
    },
    {
      id: "9166",
      district_id: "193",
      name: "Juvondur MFY"
    },
    {
      id: "9167",
      district_id: "193",
      name: "Kovunchi MFY"
    },
    {
      id: "9168",
      district_id: "193",
      name: "Mustakillik"
    },
    {
      id: "9169",
      district_id: "193",
      name: "Muxabbat MFY"
    },
    {
      id: "9170",
      district_id: "193",
      name: "Navbaxor MFY"
    },
    {
      id: "9171",
      district_id: "193",
      name: "Navro`z MFY"
    },
    {
      id: "9172",
      district_id: "193",
      name: "Obod MFY"
    },
    {
      id: "9173",
      district_id: "193",
      name: "Otalik MFY"
    },
    {
      id: "9174",
      district_id: "193",
      name: "Oxunboboev MFY"
    },
    {
      id: "9175",
      district_id: "193",
      name: "Oybek MFY"
    },
    {
      id: "9176",
      district_id: "193",
      name: "Pastom MFY"
    },
    {
      id: "9177",
      district_id: "193",
      name: "Saidlar MFY"
    },
    {
      id: "9178",
      district_id: "193",
      name: "Sayapir MFY"
    },
    {
      id: "9179",
      district_id: "193",
      name: "Sh.Rashidov MFY"
    },
    {
      id: "9180",
      district_id: "193",
      name: "Shexlar MFY"
    },
    {
      id: "9181",
      district_id: "193",
      name: "Sharlauk MFY"
    },
    {
      id: "9182",
      district_id: "193",
      name: "Shovot MFY"
    },
    {
      id: "9183",
      district_id: "193",
      name: "Sulaymon kaloa MFY"
    },
    {
      id: "9184",
      district_id: "193",
      name: "Turta MFY"
    },
    {
      id: "9185",
      district_id: "193",
      name: "Xazorasp MFY"
    },
    {
      id: "9186",
      district_id: "193",
      name: "Yangiobod MFY"
    },
    {
      id: "9187",
      district_id: "193",
      name: "Yoshlik MFY"
    },
    {
      id: "9188",
      district_id: "193",
      name: "12-Narvon MFY"
    },
    {
      id: "9189",
      district_id: "193",
      name: "Al .Xorazmiy MFY"
    },
    {
      id: "9190",
      district_id: "193",
      name: "Alokali ko`l"
    },
    {
      id: "9191",
      district_id: "193",
      name: "Amudaryo MFY"
    },
    {
      id: "9192",
      district_id: "193",
      name: "B.Matirzaev MFY"
    },
    {
      id: "9193",
      district_id: "193",
      name: "Beshta qishlog`i"
    },
    {
      id: "9194",
      district_id: "193",
      name: "Bo`ston kishlog`i"
    },
    {
      id: "9195",
      district_id: "193",
      name: "Buston MFY"
    },
    {
      id: "9196",
      district_id: "193",
      name: "Karvak MFY"
    },
    {
      id: "9197",
      district_id: "193",
      name: "Karvak qishlog`i"
    },
    {
      id: "9198",
      district_id: "193",
      name: "Muxomon MFY"
    },
    {
      id: "9199",
      district_id: "193",
      name: "Muxomon qishlog`i"
    },
    {
      id: "9200",
      district_id: "193",
      name: "Ovshar kishlog`i"
    },
    {
      id: "9201",
      district_id: "193",
      name: "Ovshar MFY"
    },
    {
      id: "9202",
      district_id: "193",
      name: "Pichokchi MFY"
    },
    {
      id: "9203",
      district_id: "193",
      name: "Pichoqchi qishlog`i"
    },
    {
      id: "9204",
      district_id: "193",
      name: "Pitnak QFY"
    },
    {
      id: "9205",
      district_id: "193",
      name: "Sanoat MFY"
    },
    {
      id: "9206",
      district_id: "193",
      name: "Sanoat qishlog`i MFY"
    },
    {
      id: "9207",
      district_id: "193",
      name: "Sarimoy QFY"
    },
    {
      id: "9208",
      district_id: "193",
      name: "Shexyopi Mutpiri"
    },
    {
      id: "9209",
      district_id: "193",
      name: "Tuproqqal`a QFY"
    },
    {
      id: "9210",
      district_id: "193",
      name: "Uzukka qosh"
    },
    {
      id: "9211",
      district_id: "193",
      name: "Xazorasp ShchaFY"
    },
    {
      id: "9212",
      district_id: "193",
      name: "Yangi xayot MFY"
    },
    {
      id: "9213",
      district_id: "193",
      name: "Yangibozor MFY"
    },
    {
      id: "9214",
      district_id: "193",
      name: "Yangibozor qishlog`i"
    },
    {
      id: "9215",
      district_id: "194",
      name: "1-MFY"
    },
    {
      id: "9216",
      district_id: "194",
      name: "2-MFY"
    },
    {
      id: "9217",
      district_id: "194",
      name: "3-MFY"
    },
    {
      id: "9218",
      district_id: "194",
      name: "4-MFY"
    },
    {
      id: "9219",
      district_id: "194",
      name: "5-MFY"
    },
    {
      id: "9220",
      district_id: "194",
      name: "6-MFY"
    },
    {
      id: "9221",
      district_id: "194",
      name: "7-MFY"
    },
    {
      id: "9222",
      district_id: "194",
      name: "8-MFY"
    },
    {
      id: "9223",
      district_id: "194",
      name: "9-MFY"
    },
    {
      id: "9224",
      district_id: "194",
      name: "10-MFY"
    },
    {
      id: "9225",
      district_id: "194",
      name: "11-MFY"
    },
    {
      id: "9226",
      district_id: "194",
      name: "12-MFY"
    },
    {
      id: "9227",
      district_id: "194",
      name: "13-MFY"
    },
    {
      id: "9228",
      district_id: "194",
      name: "14-MFY"
    },
    {
      id: "9229",
      district_id: "194",
      name: "15-MFY"
    },
    {
      id: "9230",
      district_id: "194",
      name: "Amudaryo QFY"
    },
    {
      id: "9231",
      district_id: "194",
      name: "Do`stlik MFY"
    },
    {
      id: "9232",
      district_id: "194",
      name: "Durgadik MFY"
    },
    {
      id: "9233",
      district_id: "194",
      name: "Durmon MFY"
    },
    {
      id: "9234",
      district_id: "194",
      name: "G`ayrat MFY"
    },
    {
      id: "9235",
      district_id: "194",
      name: "Guliston MFY"
    },
    {
      id: "9236",
      district_id: "194",
      name: "Ilg`or MFY"
    },
    {
      id: "9237",
      district_id: "194",
      name: "Istiqlol MFY"
    },
    {
      id: "9238",
      district_id: "194",
      name: "Katta jirmiz QFY"
    },
    {
      id: "9239",
      district_id: "194",
      name: "Katta kuch MFY"
    },
    {
      id: "9240",
      district_id: "194",
      name: "Ko`pchilik MFY"
    },
    {
      id: "9241",
      district_id: "194",
      name: "Mada er MFY"
    },
    {
      id: "9242",
      district_id: "194",
      name: "Madaniyat MFY"
    },
    {
      id: "9243",
      district_id: "194",
      name: "Madir QFY"
    },
    {
      id: "9244",
      district_id: "194",
      name: "Mustaqillik MFY"
    },
    {
      id: "9245",
      district_id: "194",
      name: "Namuna QFY"
    },
    {
      id: "9246",
      district_id: "194",
      name: "Navro`z MFY"
    },
    {
      id: "9247",
      district_id: "194",
      name: "Navxos QFY"
    },
    {
      id: "9248",
      district_id: "194",
      name: "Nuravshon MFY"
    },
    {
      id: "9249",
      district_id: "194",
      name: "Nurobod MFY"
    },
    {
      id: "9250",
      district_id: "194",
      name: "Obod MFY"
    },
    {
      id: "9251",
      district_id: "194",
      name: "Olaja QFY"
    },
    {
      id: "9252",
      district_id: "194",
      name: "Olchin MFY"
    },
    {
      id: "9253",
      district_id: "194",
      name: "Paxtagul MFY"
    },
    {
      id: "9254",
      district_id: "194",
      name: "Paxtakor MFY"
    },
    {
      id: "9255",
      district_id: "194",
      name: "Qirqyop QFY"
    },
    {
      id: "9256",
      district_id: "194",
      name: "Qoramozi MFY"
    },
    {
      id: "9257",
      district_id: "194",
      name: "Qoraqosh QFY"
    },
    {
      id: "9258",
      district_id: "194",
      name: "Sarapoyon QFY"
    },
    {
      id: "9259",
      district_id: "194",
      name: "Shirin MFY"
    },
    {
      id: "9260",
      district_id: "194",
      name: "Shodlik MFY"
    },
    {
      id: "9261",
      district_id: "194",
      name: "Toma MFY"
    },
    {
      id: "9262",
      district_id: "194",
      name: "Tomadurgadik QFY"
    },
    {
      id: "9263",
      district_id: "194",
      name: "Turkiston MFY"
    },
    {
      id: "9264",
      district_id: "194",
      name: "Xonqa ShchaFY"
    },
    {
      id: "9265",
      district_id: "194",
      name: "Yangi turmush MFY"
    },
    {
      id: "9266",
      district_id: "194",
      name: "Yosh kuch MFY"
    },
    {
      id: "9267",
      district_id: "194",
      name: "Znaxos MFY"
    },
    {
      id: "9268",
      district_id: "195",
      name: "Arbek MFY"
    },
    {
      id: "9269",
      district_id: "195",
      name: "Arbob MFY"
    },
    {
      id: "9270",
      district_id: "195",
      name: "Asavey MFY"
    },
    {
      id: "9271",
      district_id: "195",
      name: "Beshchiqir MFY"
    },
    {
      id: "9272",
      district_id: "195",
      name: "Beshmargan MFY"
    },
    {
      id: "9273",
      district_id: "195",
      name: "Beshmargan QFY"
    },
    {
      id: "9274",
      district_id: "195",
      name: "Botirlar MFY"
    },
    {
      id: "9275",
      district_id: "195",
      name: "Bo`ston MFY"
    },
    {
      id: "9276",
      district_id: "195",
      name: "Bo`yrachi QFY"
    },
    {
      id: "9277",
      district_id: "195",
      name: "Bo`yrachi MFY"
    },
    {
      id: "9278",
      district_id: "195",
      name: "Bo`zqal`a MFY"
    },
    {
      id: "9279",
      district_id: "195",
      name: "Bo`zqal`a MFY"
    },
    {
      id: "9280",
      district_id: "195",
      name: "Chig`atoy MFY"
    },
    {
      id: "9281",
      district_id: "195",
      name: "Chig`atoyqal`a MFY"
    },
    {
      id: "9282",
      district_id: "195",
      name: "Chig`atoyqal`a QFY"
    },
    {
      id: "9283",
      district_id: "195",
      name: "Cho`qli QFY"
    },
    {
      id: "9284",
      district_id: "195",
      name: "Do`stlik MFY"
    },
    {
      id: "9285",
      district_id: "195",
      name: "Do`stlik MFY"
    },
    {
      id: "9286",
      district_id: "195",
      name: "Eshonqal`a MFY"
    },
    {
      id: "9287",
      district_id: "195",
      name: "Guliston MFY"
    },
    {
      id: "9288",
      district_id: "195",
      name: "Guliston MFY"
    },
    {
      id: "9289",
      district_id: "195",
      name: "Idaliqal`a MFY"
    },
    {
      id: "9290",
      district_id: "195",
      name: "Ijtimoiyat MFY"
    },
    {
      id: "9291",
      district_id: "195",
      name: "Ijtimoiyat QFY"
    },
    {
      id: "9292",
      district_id: "195",
      name: "Ipakchi MFY"
    },
    {
      id: "9293",
      district_id: "195",
      name: "K.Raximov MFY"
    },
    {
      id: "9294",
      district_id: "195",
      name: "Kangli QFY"
    },
    {
      id: "9295",
      district_id: "195",
      name: "Kangli MFY"
    },
    {
      id: "9296",
      district_id: "195",
      name: "Katqal`a MFY"
    },
    {
      id: "9297",
      district_id: "195",
      name: "Komiljon ota MFY"
    },
    {
      id: "9298",
      district_id: "195",
      name: "Madaniyat MFY"
    },
    {
      id: "9299",
      district_id: "195",
      name: "Madaniyat MFY"
    },
    {
      id: "9300",
      district_id: "195",
      name: "Monoq MFY"
    },
    {
      id: "9301",
      district_id: "195",
      name: "Navro`z MFY"
    },
    {
      id: "9302",
      district_id: "195",
      name: "Navro`z MFY"
    },
    {
      id: "9303",
      district_id: "195",
      name: "Navro`z MFY"
    },
    {
      id: "9304",
      district_id: "195",
      name: "Ogahiy MFY"
    },
    {
      id: "9305",
      district_id: "195",
      name: "Oltinqal`a MFY"
    },
    {
      id: "9306",
      district_id: "195",
      name: "Oq ko`l MFY"
    },
    {
      id: "9307",
      district_id: "195",
      name: "Oq ko`l MFY"
    },
    {
      id: "9308",
      district_id: "195",
      name: "Oq oltin MFY"
    },
    {
      id: "9309",
      district_id: "195",
      name: "Ostona MFY"
    },
    {
      id: "9310",
      district_id: "195",
      name: "Oxunboboev MFY"
    },
    {
      id: "9311",
      district_id: "195",
      name: "Oydin MFY"
    },
    {
      id: "9312",
      district_id: "195",
      name: "O`zbekiston QFY"
    },
    {
      id: "9313",
      district_id: "195",
      name: "Paxtakor MFY"
    },
    {
      id: "9314",
      district_id: "195",
      name: "Po`lat MFY"
    },
    {
      id: "9315",
      district_id: "195",
      name: "Qiyot QFY"
    },
    {
      id: "9316",
      district_id: "195",
      name: "Qiyot MFY"
    },
    {
      id: "9317",
      district_id: "195",
      name: "Qozoqqal`a MFY"
    },
    {
      id: "9318",
      district_id: "195",
      name: "Qo`shko`pir MFY"
    },
    {
      id: "9319",
      district_id: "195",
      name: "Qum yop MFY"
    },
    {
      id: "9320",
      district_id: "195",
      name: "Qunduz MFY"
    },
    {
      id: "9321",
      district_id: "195",
      name: "Royat MFY"
    },
    {
      id: "9322",
      district_id: "195",
      name: "Shovot MFY"
    },
    {
      id: "9323",
      district_id: "195",
      name: "Shovot ShchaFY"
    },
    {
      id: "9324",
      district_id: "195",
      name: "Shovotqal`a QFY"
    },
    {
      id: "9325",
      district_id: "195",
      name: "To`qmang`it MFY"
    },
    {
      id: "9326",
      district_id: "195",
      name: "To`qmang`it MFY"
    },
    {
      id: "9327",
      district_id: "195",
      name: "Turkiston MFY"
    },
    {
      id: "9328",
      district_id: "195",
      name: "Uzunko`l MFY"
    },
    {
      id: "9329",
      district_id: "195",
      name: "Xitoy QFY"
    },
    {
      id: "9330",
      district_id: "195",
      name: "Xitoy MFY"
    },
    {
      id: "9331",
      district_id: "195",
      name: "Xunarmand MFY"
    },
    {
      id: "9332",
      district_id: "195",
      name: "Yangi turmush MFY"
    },
    {
      id: "9333",
      district_id: "195",
      name: "Yangi yo`l MFY"
    },
    {
      id: "9334",
      district_id: "195",
      name: "Yangiobod MFY"
    },
    {
      id: "9335",
      district_id: "196",
      name: "Achchiqquyi MFY"
    },
    {
      id: "9336",
      district_id: "196",
      name: "Angiariq MFY"
    },
    {
      id: "9337",
      district_id: "196",
      name: "Arboblar MFY"
    },
    {
      id: "9338",
      district_id: "196",
      name: "Beshayvon MFY"
    },
    {
      id: "9339",
      district_id: "196",
      name: "Boliqchi MFY"
    },
    {
      id: "9340",
      district_id: "196",
      name: "Boromiq MFY"
    },
    {
      id: "9341",
      district_id: "196",
      name: "Boyot MFY"
    },
    {
      id: "9342",
      district_id: "196",
      name: "Bo`ston MFY"
    },
    {
      id: "9343",
      district_id: "196",
      name: "Chakir MFY"
    },
    {
      id: "9344",
      district_id: "196",
      name: "Chiqirchi MFY"
    },
    {
      id: "9345",
      district_id: "196",
      name: "Chiqirchi QFY"
    },
    {
      id: "9346",
      district_id: "196",
      name: "Do`stlik MFY"
    },
    {
      id: "9347",
      district_id: "196",
      name: "Egrisolma MFY"
    },
    {
      id: "9348",
      district_id: "196",
      name: "G`altak MFY"
    },
    {
      id: "9349",
      district_id: "196",
      name: "Gulabod QFY"
    },
    {
      id: "9350",
      district_id: "196",
      name: "Gullanbog` MFY"
    },
    {
      id: "9351",
      district_id: "196",
      name: "Gullanbog` QFY"
    },
    {
      id: "9352",
      district_id: "196",
      name: "Istiqlol MFY"
    },
    {
      id: "9353",
      district_id: "196",
      name: "Jaloil MFY"
    },
    {
      id: "9354",
      district_id: "196",
      name: "Kattabog` MFY"
    },
    {
      id: "9355",
      district_id: "196",
      name: "Kattabog` QFY"
    },
    {
      id: "9356",
      district_id: "196",
      name: "Killovit MFY"
    },
    {
      id: "9357",
      district_id: "196",
      name: "Kushanda MFY"
    },
    {
      id: "9358",
      district_id: "196",
      name: "Ogoxiy MFY"
    },
    {
      id: "9359",
      district_id: "196",
      name: "Oq-machit MFY"
    },
    {
      id: "9360",
      district_id: "196",
      name: "Ostona MFY"
    },
    {
      id: "9361",
      district_id: "196",
      name: "Ostona QFY"
    },
    {
      id: "9362",
      district_id: "196",
      name: "O`zbekiston MFY"
    },
    {
      id: "9363",
      district_id: "196",
      name: "Po`rsang MFY"
    },
    {
      id: "9364",
      district_id: "196",
      name: "Qarmish MFY"
    },
    {
      id: "9365",
      district_id: "196",
      name: "Qarmish QFY"
    },
    {
      id: "9366",
      district_id: "196",
      name: "Qorako`z MFY"
    },
    {
      id: "9367",
      district_id: "196",
      name: "Qozoqli MFY"
    },
    {
      id: "9368",
      district_id: "196",
      name: "Qo`ng`irot MFY"
    },
    {
      id: "9369",
      district_id: "196",
      name: "Qo`riqtom MFY"
    },
    {
      id: "9370",
      district_id: "196",
      name: "Qo`riqtom QFY"
    },
    {
      id: "9371",
      district_id: "196",
      name: "Qo`shloq MFY"
    },
    {
      id: "9372",
      district_id: "196",
      name: "Sevgan MFY"
    },
    {
      id: "9373",
      district_id: "196",
      name: "Sardorlar MFY"
    },
    {
      id: "9374",
      district_id: "196",
      name: "Sherobod MFY"
    },
    {
      id: "9375",
      district_id: "196",
      name: "Shirsholi MFY"
    },
    {
      id: "9376",
      district_id: "196",
      name: "Shixbog`i MFY"
    },
    {
      id: "9377",
      district_id: "196",
      name: "Soburzon MFY"
    },
    {
      id: "9378",
      district_id: "196",
      name: "Tagan MFY"
    },
    {
      id: "9379",
      district_id: "196",
      name: "Tagan QFY"
    },
    {
      id: "9380",
      district_id: "196",
      name: "Tuzloq MFY"
    },
    {
      id: "9381",
      district_id: "196",
      name: "Ulug`bek MFY"
    },
    {
      id: "9382",
      district_id: "196",
      name: "Urganch MFY"
    },
    {
      id: "9383",
      district_id: "196",
      name: "Uyg`ur MFY"
    },
    {
      id: "9384",
      district_id: "196",
      name: "Vakillar MFY"
    },
    {
      id: "9385",
      district_id: "196",
      name: "Xo`jalar MFY"
    },
    {
      id: "9386",
      district_id: "196",
      name: "Yangier MFY"
    },
    {
      id: "9387",
      district_id: "196",
      name: "Yangiariq MFY"
    },
    {
      id: "9388",
      district_id: "196",
      name: "Yangiariq SHFY"
    },
    {
      id: "9389",
      district_id: "196",
      name: "Yangiobod MFY"
    },
    {
      id: "9390",
      district_id: "197",
      name: "Bogolon MFY"
    },
    {
      id: "9391",
      district_id: "197",
      name: "Bo`ston MFY"
    },
    {
      id: "9392",
      district_id: "197",
      name: "Bo`zkal`a 1 MFY"
    },
    {
      id: "9393",
      district_id: "197",
      name: "Bo`zkal`a 2 MFY"
    },
    {
      id: "9394",
      district_id: "197",
      name: "Bo`zkal`a 3 MFY"
    },
    {
      id: "9395",
      district_id: "197",
      name: "Chubolonchi MFY"
    },
    {
      id: "9396",
      district_id: "197",
      name: "Do`stlik MFY"
    },
    {
      id: "9397",
      district_id: "197",
      name: "Guliston MFY"
    },
    {
      id: "9398",
      district_id: "197",
      name: "Jayxun MFY"
    },
    {
      id: "9399",
      district_id: "197",
      name: "Katli MFY"
    },
    {
      id: "9400",
      district_id: "197",
      name: "Qiyot MFY"
    },
    {
      id: "9401",
      district_id: "197",
      name: "Qora tepa MFY"
    },
    {
      id: "9402",
      district_id: "197",
      name: "Mangitlar MFY"
    },
    {
      id: "9403",
      district_id: "197",
      name: "Ming Bog`olon MFY"
    },
    {
      id: "9404",
      district_id: "197",
      name: "Navr yor MFY"
    },
    {
      id: "9405",
      district_id: "197",
      name: "Navruz MFY"
    },
    {
      id: "9406",
      district_id: "197",
      name: "Ocha kala MFY"
    },
    {
      id: "9407",
      district_id: "197",
      name: "Oltinkul MFY"
    },
    {
      id: "9408",
      district_id: "197",
      name: "Shirinlar MFY"
    },
    {
      id: "9409",
      district_id: "197",
      name: "Shixlar MFY"
    },
    {
      id: "9410",
      district_id: "197",
      name: "Shoirlar MFY"
    },
    {
      id: "9411",
      district_id: "197",
      name: "Tozadurman MFY"
    },
    {
      id: "9412",
      district_id: "197",
      name: "X.Olimjon MFY"
    },
    {
      id: "9413",
      district_id: "197",
      name: "Xalqobod MFY"
    },
    {
      id: "9414",
      district_id: "197",
      name: "Xayvat MFY"
    },
    {
      id: "9415",
      district_id: "197",
      name: "Yangi yor MFY"
    },
    {
      id: "9416",
      district_id: "197",
      name: "Yukori Boshkir MFY"
    },
    {
      id: "9417",
      district_id: "197",
      name: "Bog`olon QFY"
    },
    {
      id: "9418",
      district_id: "197",
      name: "Boshkirshix QFY"
    },
    {
      id: "9419",
      district_id: "197",
      name: "Buzkal`a QFY"
    },
    {
      id: "9420",
      district_id: "197",
      name: "Chubolonchi QFY"
    },
    {
      id: "9421",
      district_id: "197",
      name: "Kalandardurman QFY"
    },
    {
      id: "9422",
      district_id: "197",
      name: "Kargalar MFY"
    },
    {
      id: "9423",
      district_id: "197",
      name: "Oyokdurman QFY"
    },
    {
      id: "9424",
      district_id: "197",
      name: "Shirinkungirot QFY"
    },
    {
      id: "9425",
      district_id: "197",
      name: "Uyg`ur QFY"
    },
    {
      id: "9426",
      district_id: "197",
      name: "Yangibozor SHFY"
    },
    {
      id: "9427",
      district_id: "198",
      name: "Abay MFY"
    },
    {
      id: "9428",
      district_id: "198",
      name: "Bektemir MFY"
    },
    {
      id: "9429",
      district_id: "198",
      name: "Binokor MFY"
    },
    {
      id: "9430",
      district_id: "198",
      name: "Chashma MFY"
    },
    {
      id: "9431",
      district_id: "198",
      name: "Istiqbol MFY"
    },
    {
      id: "9432",
      district_id: "198",
      name: "Maxjnuntol MFY"
    },
    {
      id: "9433",
      district_id: "198",
      name: "Mirishkor MFY"
    },
    {
      id: "9434",
      district_id: "198",
      name: "Nurafshon MFY"
    },
    {
      id: "9435",
      district_id: "198",
      name: "o`Ashurov MFY"
    },
    {
      id: "9436",
      district_id: "198",
      name: "Roxat MFY"
    },
    {
      id: "9437",
      district_id: "198",
      name: "X.Bayqaro MFY"
    },
    {
      id: "9438",
      district_id: "198",
      name: "Zilola MFY"
    },
    {
      id: "9439",
      district_id: "199",
      name: "A.Yugnakiy MFY"
    },
    {
      id: "9440",
      district_id: "199",
      name: "Al-Farobiy MFY"
    },
    {
      id: "9441",
      district_id: "199",
      name: "Alisher Navoiy MFY"
    },
    {
      id: "9442",
      district_id: "199",
      name: "Alpomish MFY"
    },
    {
      id: "9443",
      district_id: "199",
      name: "Avayxon MFY"
    },
    {
      id: "9444",
      district_id: "199",
      name: "Axillik MFY"
    },
    {
      id: "9445",
      district_id: "199",
      name: "Axmad Yassaviy MFY"
    },
    {
      id: "9446",
      district_id: "199",
      name: "Azamat MFY"
    },
    {
      id: "9447",
      district_id: "199",
      name: "Beshkapa MFY"
    },
    {
      id: "9448",
      district_id: "199",
      name: "Baxor MFY"
    },
    {
      id: "9449",
      district_id: "199",
      name: "Bobur MFY"
    },
    {
      id: "9450",
      district_id: "199",
      name: "Bo`z-2 MFY"
    },
    {
      id: "9451",
      district_id: "199",
      name: "Darxon MFY"
    },
    {
      id: "9452",
      district_id: "199",
      name: "Feruza MFY"
    },
    {
      id: "9453",
      district_id: "199",
      name: "Fayzulla Xo`jaev MFY"
    },
    {
      id: "9454",
      district_id: "199",
      name: "Guliston MFY"
    },
    {
      id: "9455",
      district_id: "199",
      name: "Gulzor MFY"
    },
    {
      id: "9456",
      district_id: "199",
      name: "Katta Oltintepa MFY"
    },
    {
      id: "9457",
      district_id: "199",
      name: "Katta Qorasuv MFY"
    },
    {
      id: "9458",
      district_id: "199",
      name: "Katta Yalang`ochota MFY"
    },
    {
      id: "9459",
      district_id: "199",
      name: "Lashkarbegi MFY"
    },
    {
      id: "9460",
      district_id: "199",
      name: "M.Ismoiliy MFY"
    },
    {
      id: "9461",
      district_id: "199",
      name: "Munavvarqori MFY"
    },
    {
      id: "9462",
      district_id: "199",
      name: "Navruz MFY"
    },
    {
      id: "9463",
      district_id: "199",
      name: "Nodirabegim MFY"
    },
    {
      id: "9464",
      district_id: "199",
      name: "Nur MFY"
    },
    {
      id: "9465",
      district_id: "199",
      name: "Olimlar MFY"
    },
    {
      id: "9466",
      district_id: "199",
      name: "Olmachi MFY"
    },
    {
      id: "9467",
      district_id: "199",
      name: "Oltintepa-10 MFY"
    },
    {
      id: "9468",
      district_id: "199",
      name: "Oqibat MFY"
    },
    {
      id: "9469",
      district_id: "199",
      name: "Oqqo`rg`on MFY"
    },
    {
      id: "9470",
      district_id: "199",
      name: "Salar MFY"
    },
    {
      id: "9471",
      district_id: "199",
      name: "Sayram MFY"
    },
    {
      id: "9472",
      district_id: "199",
      name: "Shalola MFY"
    },
    {
      id: "9473",
      district_id: "199",
      name: "Shaxriobod MFY"
    },
    {
      id: "9474",
      district_id: "199",
      name: "Shaxrisabz MFY"
    },
    {
      id: "9475",
      district_id: "199",
      name: "Sho`rtepa MFY"
    },
    {
      id: "9476",
      district_id: "199",
      name: "Shukur Burxonov MFY"
    },
    {
      id: "9477",
      district_id: "199",
      name: "Traktorsozlar MFY"
    },
    {
      id: "9478",
      district_id: "199",
      name: "Turon MFY"
    },
    {
      id: "9479",
      district_id: "199",
      name: "Ulug`bek MFY"
    },
    {
      id: "9480",
      district_id: "199",
      name: "Umid MFY"
    },
    {
      id: "9481",
      district_id: "199",
      name: "Uyg`onish MFY"
    },
    {
      id: "9482",
      district_id: "199",
      name: "X`abdullaev MFY"
    },
    {
      id: "9483",
      district_id: "199",
      name: "Xamid Olimjon MFY"
    },
    {
      id: "9484",
      district_id: "199",
      name: "Xorazm MFY"
    },
    {
      id: "9485",
      district_id: "199",
      name: "Xumoyun MFY"
    },
    {
      id: "9486",
      district_id: "199",
      name: "Yalong`och MFY"
    },
    {
      id: "9487",
      district_id: "199",
      name: "Yalong`och-ota MFY"
    },
    {
      id: "9488",
      district_id: "199",
      name: "Yangi Avayxon MFY"
    },
    {
      id: "9489",
      district_id: "199",
      name: "Yangi xayot MFY"
    },
    {
      id: "9490",
      district_id: "199",
      name: "Yuzrabod MFY"
    },
    {
      id: "9491",
      district_id: "200",
      name: "A`avloniy MFY"
    },
    {
      id: "9492",
      district_id: "200",
      name: "A.Fitrat MFY"
    },
    {
      id: "9493",
      district_id: "200",
      name: "Afrosiyob MFY"
    },
    {
      id: "9494",
      district_id: "200",
      name: "At-Termiziy MFY"
    },
    {
      id: "9495",
      district_id: "200",
      name: "Baratxuja MFY"
    },
    {
      id: "9496",
      district_id: "200",
      name: "Baxor MFY"
    },
    {
      id: "9497",
      district_id: "200",
      name: "Baynalminal MFY"
    },
    {
      id: "9498",
      district_id: "200",
      name: "Bilimdon MFY"
    },
    {
      id: "9499",
      district_id: "200",
      name: "Birodarlik MFY"
    },
    {
      id: "9500",
      district_id: "200",
      name: "Bogishamol MFY"
    },
    {
      id: "9501",
      district_id: "200",
      name: "Chinor MFY"
    },
    {
      id: "9502",
      district_id: "200",
      name: "Do`stlik MFY"
    },
    {
      id: "9503",
      district_id: "200",
      name: "Fayziobod"
    },
    {
      id: "9504",
      district_id: "200",
      name: "Furkat MFY"
    },
    {
      id: "9505",
      district_id: "200",
      name: "Istiqlol MFY"
    },
    {
      id: "9506",
      district_id: "200",
      name: "Korasuv MFY"
    },
    {
      id: "9507",
      district_id: "200",
      name: "Kuylik-ota MFY"
    },
    {
      id: "9508",
      district_id: "200",
      name: "Matonat MFY"
    },
    {
      id: "9509",
      district_id: "200",
      name: "Mingurik MFY"
    },
    {
      id: "9510",
      district_id: "200",
      name: "Mirobod MFY"
    },
    {
      id: "9511",
      district_id: "200",
      name: "Movarounnaxr MFY"
    },
    {
      id: "9512",
      district_id: "200",
      name: "Mustakillik MFY"
    },
    {
      id: "9513",
      district_id: "200",
      name: "Navbaxor MFY"
    },
    {
      id: "9514",
      district_id: "200",
      name: "Navruz MFY"
    },
    {
      id: "9515",
      district_id: "200",
      name: "Ok uy MFY"
    },
    {
      id: "9516",
      district_id: "200",
      name: "Olmazor MFY"
    },
    {
      id: "9517",
      district_id: "200",
      name: "Oltinkul MFY"
    },
    {
      id: "9518",
      district_id: "200",
      name: "Oybek MFY"
    },
    {
      id: "9519",
      district_id: "200",
      name: "Parvona MFY"
    },
    {
      id: "9520",
      district_id: "200",
      name: "Salar MFY"
    },
    {
      id: "9521",
      district_id: "200",
      name: "Sarikul MFY"
    },
    {
      id: "9522",
      district_id: "200",
      name: "Sh.Rashidov MFY"
    },
    {
      id: "9523",
      district_id: "200",
      name: "Shark Yulduzi MFY"
    },
    {
      id: "9524",
      district_id: "200",
      name: "Temiryulchilar MFY"
    },
    {
      id: "9525",
      district_id: "200",
      name: "Tolarik MFY"
    },
    {
      id: "9526",
      district_id: "200",
      name: "Uzbekiston MFY"
    },
    {
      id: "9527",
      district_id: "200",
      name: "Yangi Kuylik MFY"
    },
    {
      id: "9528",
      district_id: "200",
      name: "Yangi Mirobod MFY"
    },
    {
      id: "9529",
      district_id: "200",
      name: "Yangi Zamon MFY"
    },
    {
      id: "9530",
      district_id: "201",
      name: "A.Navoiy MFY"
    },
    {
      id: "9531",
      district_id: "201",
      name: "Achaobod MFY"
    },
    {
      id: "9532",
      district_id: "201",
      name: "Allon MFY"
    },
    {
      id: "9533",
      district_id: "201",
      name: "Axil MFY"
    },
    {
      id: "9534",
      district_id: "201",
      name: "Axmad Yassaviy MFY"
    },
    {
      id: "9535",
      district_id: "201",
      name: "Beruniy Maydoni MFY"
    },
    {
      id: "9536",
      district_id: "201",
      name: "Beruniy MFY"
    },
    {
      id: "9537",
      district_id: "201",
      name: "Beshqo`rg`on MFY"
    },
    {
      id: "9538",
      district_id: "201",
      name: "Bo`ston MFY"
    },
    {
      id: "9539",
      district_id: "201",
      name: "Chig`atoy Darboza MFY"
    },
    {
      id: "9540",
      district_id: "201",
      name: "Chig`atoy Oqtepa MFY"
    },
    {
      id: "9541",
      district_id: "201",
      name: "Chilto`g`on MFY"
    },
    {
      id: "9542",
      district_id: "201",
      name: "Chimboy MFY"
    },
    {
      id: "9543",
      district_id: "201",
      name: "Chuqursoy MFY"
    },
    {
      id: "9544",
      district_id: "201",
      name: "Chustiy MFY"
    },
    {
      id: "9545",
      district_id: "201",
      name: "Do`stlik MFY"
    },
    {
      id: "9546",
      district_id: "201",
      name: "Eski shahar MFY"
    },
    {
      id: "9547",
      district_id: "201",
      name: "G`alaba MFY"
    },
    {
      id: "9548",
      district_id: "201",
      name: "G`ani A.zamov MFY"
    },
    {
      id: "9549",
      district_id: "201",
      name: "Gulzor MFY"
    },
    {
      id: "9550",
      district_id: "201",
      name: "Guruchariq MFY"
    },
    {
      id: "9551",
      district_id: "201",
      name: "Guzarboshi MFY"
    },
    {
      id: "9552",
      district_id: "201",
      name: "Ibroxim ota MFY"
    },
    {
      id: "9553",
      district_id: "201",
      name: "Islom ota MFY"
    },
    {
      id: "9554",
      district_id: "201",
      name: "Ismoil Shoshiy MFY"
    },
    {
      id: "9555",
      district_id: "201",
      name: "Istiqbol MFY"
    },
    {
      id: "9556",
      district_id: "201",
      name: "Istiqlol MFY"
    },
    {
      id: "9557",
      district_id: "201",
      name: "Jiydali MFY"
    },
    {
      id: "9558",
      district_id: "201",
      name: "K.G`ofurov MFY"
    },
    {
      id: "9559",
      district_id: "201",
      name: "Mirza G`olib MFY"
    },
    {
      id: "9560",
      district_id: "201",
      name: "Miskin MFY"
    },
    {
      id: "9561",
      district_id: "201",
      name: "Moyarik MFY"
    },
    {
      id: "9562",
      district_id: "201",
      name: "Mustaqillik MFY"
    },
    {
      id: "9563",
      district_id: "201",
      name: "Namuna MFY"
    },
    {
      id: "9564",
      district_id: "201",
      name: "Navbaxor MFY"
    },
    {
      id: "9565",
      district_id: "201",
      name: "Nixol MFY"
    },
    {
      id: "9566",
      district_id: "201",
      name: "Obod MFY"
    },
    {
      id: "9567",
      district_id: "201",
      name: "Olimpiya MFY"
    },
    {
      id: "9568",
      district_id: "201",
      name: "Paxta MFY"
    },
    {
      id: "9569",
      district_id: "201",
      name: "Qichqiriq MFY"
    },
    {
      id: "9570",
      district_id: "201",
      name: "Qorasaroy MFY"
    },
    {
      id: "9571",
      district_id: "201",
      name: "Qushtut MFY"
    },
    {
      id: "9572",
      district_id: "201",
      name: "S?bzor MFY"
    },
    {
      id: "9573",
      district_id: "201",
      name: "Shifokorlar MFY"
    },
    {
      id: "9574",
      district_id: "201",
      name: "Shodlik MFY"
    },
    {
      id: "9575",
      district_id: "201",
      name: "Shuxrat MFY"
    },
    {
      id: "9576",
      district_id: "201",
      name: "Tabassum MFY"
    },
    {
      id: "9577",
      district_id: "201",
      name: "Taraqqiyot MFY"
    },
    {
      id: "9578",
      district_id: "201",
      name: "Taxtapul MFY"
    },
    {
      id: "9579",
      district_id: "201",
      name: "Umid MFY"
    },
    {
      id: "9580",
      district_id: "201",
      name: "Universitet MFY"
    },
    {
      id: "9581",
      district_id: "201",
      name: "Xastimom MFY"
    },
    {
      id: "9582",
      district_id: "201",
      name: "Xislat MFY"
    },
    {
      id: "9583",
      district_id: "201",
      name: "Xofiz Kuxakiy MFY"
    },
    {
      id: "9584",
      district_id: "201",
      name: "Xonchorbog` MFY"
    },
    {
      id: "9585",
      district_id: "201",
      name: "Yangi Sebzor MFY"
    },
    {
      id: "9586",
      district_id: "201",
      name: "Yoshlik MFY"
    },
    {
      id: "9587",
      district_id: "201",
      name: "Ziyo MFY"
    },
    {
      id: "9588",
      district_id: "202",
      name: "A.Jomiy MFY"
    },
    {
      id: "9589",
      district_id: "202",
      name: "A.Navoiy MFY"
    },
    {
      id: "9590",
      district_id: "202",
      name: "A.Temur MFY"
    },
    {
      id: "9591",
      district_id: "202",
      name: "Al-Farg`oniy MFY"
    },
    {
      id: "9592",
      district_id: "202",
      name: "Bahor MFY"
    },
    {
      id: "9593",
      district_id: "202",
      name: "Bobur MFY"
    },
    {
      id: "9594",
      district_id: "202",
      name: "Chosh-tepa MFY"
    },
    {
      id: "9595",
      district_id: "202",
      name: "Do`stlik MFY"
    },
    {
      id: "9596",
      district_id: "202",
      name: "Guliston MFY"
    },
    {
      id: "9597",
      district_id: "202",
      name: "Ittifoq MFY"
    },
    {
      id: "9598",
      district_id: "202",
      name: "Kum-arik MFY"
    },
    {
      id: "9599",
      district_id: "202",
      name: "Kush-kurgon MFY"
    },
    {
      id: "9600",
      district_id: "202",
      name: "Madaniyat MFY"
    },
    {
      id: "9601",
      district_id: "202",
      name: "Mustaqillik MFY"
    },
    {
      id: "9602",
      district_id: "202",
      name: "Navro`z MFY"
    },
    {
      id: "9603",
      district_id: "202",
      name: "Nilufar MFY"
    },
    {
      id: "9604",
      district_id: "202",
      name: "Nog`ay-qo`rg`on MFY"
    },
    {
      id: "9605",
      district_id: "202",
      name: "Obod MFY"
    },
    {
      id: "9606",
      district_id: "202",
      name: "Oltin vodiy MFY"
    },
    {
      id: "9607",
      district_id: "202",
      name: "Oqibat MFY"
    },
    {
      id: "9608",
      district_id: "202",
      name: "Qipchoq MFY"
    },
    {
      id: "9609",
      district_id: "202",
      name: "Sh.Burxonov MFY"
    },
    {
      id: "9610",
      district_id: "202",
      name: "Temir yo`lchi MFY"
    },
    {
      id: "9611",
      district_id: "202",
      name: "Tinchlik MFY"
    },
    {
      id: "9612",
      district_id: "202",
      name: "Uchuvchilar MFY"
    },
    {
      id: "9613",
      district_id: "202",
      name: "Uzgarish MFY"
    },
    {
      id: "9614",
      district_id: "202",
      name: "Xabibiy MFY"
    },
    {
      id: "9615",
      district_id: "202",
      name: "Xalkobod MFY"
    },
    {
      id: "9616",
      district_id: "202",
      name: "Xonobod MFY"
    },
    {
      id: "9617",
      district_id: "202",
      name: "Yangi hayot MFY"
    },
    {
      id: "9618",
      district_id: "202",
      name: "Yangi Sergeli MFY"
    },
    {
      id: "9619",
      district_id: "202",
      name: "Yorkin hayot MFY"
    },
    {
      id: "9620",
      district_id: "202",
      name: "Yo`ldosh MFY"
    },
    {
      id: "9621",
      district_id: "203",
      name: "A. Kodiriy MFY"
    },
    {
      id: "9622",
      district_id: "203",
      name: "A. Soguniy MFY"
    },
    {
      id: "9623",
      district_id: "203",
      name: "Al-Xorazmiy MFY"
    },
    {
      id: "9624",
      district_id: "203",
      name: "Bekobod MFY"
    },
    {
      id: "9625",
      district_id: "203",
      name: "Beshkayrogoch MFY"
    },
    {
      id: "9626",
      district_id: "203",
      name: "Birlik MFY"
    },
    {
      id: "9627",
      district_id: "203",
      name: "Bog`ichinor MFY"
    },
    {
      id: "9628",
      district_id: "203",
      name: "Bogiston MFY"
    },
    {
      id: "9629",
      district_id: "203",
      name: "Bogobod MFY"
    },
    {
      id: "9630",
      district_id: "203",
      name: "Chamanzor MFY"
    },
    {
      id: "9631",
      district_id: "203",
      name: "Chulpon ota MFY"
    },
    {
      id: "9632",
      district_id: "203",
      name: "Degrez MFY"
    },
    {
      id: "9633",
      district_id: "203",
      name: "Davlatobod MFY"
    },
    {
      id: "9634",
      district_id: "203",
      name: "Farxod MFY"
    },
    {
      id: "9635",
      district_id: "203",
      name: "Guzar MFY"
    },
    {
      id: "9636",
      district_id: "203",
      name: "Ibrat MFY"
    },
    {
      id: "9637",
      district_id: "203",
      name: "Istiroxat MFY"
    },
    {
      id: "9638",
      district_id: "203",
      name: "Jarbuloq MFY"
    },
    {
      id: "9639",
      district_id: "203",
      name: "Jurjoniy MFY"
    },
    {
      id: "9640",
      district_id: "203",
      name: "Katta Ka.ni MFY"
    },
    {
      id: "9641",
      district_id: "203",
      name: "Kori Yogdi MFY"
    },
    {
      id: "9642",
      district_id: "203",
      name: "Koziguzar MFY"
    },
    {
      id: "9643",
      district_id: "203",
      name: "Ko`kchaOqtepa MFY"
    },
    {
      id: "9644",
      district_id: "203",
      name: "Ko`ksaroy MFY"
    },
    {
      id: "9645",
      district_id: "203",
      name: "Ko`rkamobod MFY"
    },
    {
      id: "9646",
      district_id: "203",
      name: "Ko`xnaCho`ponota MFY"
    },
    {
      id: "9647",
      district_id: "203",
      name: "Latifguzar MFY"
    },
    {
      id: "9648",
      district_id: "203",
      name: "Nayman MFY"
    },
    {
      id: "9649",
      district_id: "203",
      name: "Nishabariq MFY"
    },
    {
      id: "9650",
      district_id: "203",
      name: "Nurobod MFY"
    },
    {
      id: "9651",
      district_id: "203",
      name: "Okmachit MFY"
    },
    {
      id: "9652",
      district_id: "203",
      name: "Paxtakor MFY"
    },
    {
      id: "9653",
      district_id: "203",
      name: "Qo`rg`ontepa MFY"
    },
    {
      id: "9654",
      district_id: "203",
      name: "QuyiDarxon MFY"
    },
    {
      id: "9655",
      district_id: "203",
      name: "Shark Guli MFY"
    },
    {
      id: "9656",
      district_id: "203",
      name: "Shark Yulduzi MFY"
    },
    {
      id: "9657",
      district_id: "203",
      name: "Shirin MFY"
    },
    {
      id: "9658",
      district_id: "203",
      name: "Shofayzibogi MFY"
    },
    {
      id: "9659",
      district_id: "203",
      name: "Shoftolizor MFY"
    },
    {
      id: "9660",
      district_id: "203",
      name: "Taqachi MFY"
    },
    {
      id: "9661",
      district_id: "203",
      name: "Tinchlikobod MFY"
    },
    {
      id: "9662",
      district_id: "203",
      name: "Uchtepa MFY"
    },
    {
      id: "9663",
      district_id: "203",
      name: "Urikzor MFY"
    },
    {
      id: "9664",
      district_id: "203",
      name: "Utkir MFY"
    },
    {
      id: "9665",
      district_id: "203",
      name: "Vatan MFY"
    },
    {
      id: "9666",
      district_id: "203",
      name: "Vatanparvar MFY"
    },
    {
      id: "9667",
      district_id: "203",
      name: "Xayratiy MFY"
    },
    {
      id: "9668",
      district_id: "203",
      name: "Xojiobod MFY"
    },
    {
      id: "9669",
      district_id: "203",
      name: "Xondamir MFY"
    },
    {
      id: "9670",
      district_id: "203",
      name: "Xuroson MFY"
    },
    {
      id: "9671",
      district_id: "203",
      name: "Xurshid MFY"
    },
    {
      id: "9672",
      district_id: "203",
      name: "Yu.Sakkokiy MFY"
    },
    {
      id: "9673",
      district_id: "203",
      name: "Zulfizar MFY"
    },
    {
      id: "9674",
      district_id: "204",
      name: "Al-Buxoriy MFY"
    },
    {
      id: "9675",
      district_id: "204",
      name: "Alisher Navoiy MFY"
    },
    {
      id: "9676",
      district_id: "204",
      name: "Amir Temur MFY"
    },
    {
      id: "9677",
      district_id: "204",
      name: "Asalobod MFY"
    },
    {
      id: "9678",
      district_id: "204",
      name: "Aviasozlar MFY"
    },
    {
      id: "9679",
      district_id: "204",
      name: "Axmad Yassaviy MFY"
    },
    {
      id: "9680",
      district_id: "204",
      name: "Behizor MFY"
    },
    {
      id: "9681",
      district_id: "204",
      name: "Besh bola MFY"
    },
    {
      id: "9682",
      district_id: "204",
      name: "Bahor MFY"
    },
    {
      id: "9683",
      district_id: "204",
      name: "Binokor MFY"
    },
    {
      id: "9684",
      district_id: "204",
      name: "Birlashgan MFY"
    },
    {
      id: "9685",
      district_id: "204",
      name: "Bobur MFY"
    },
    {
      id: "9686",
      district_id: "204",
      name: "Boyqo`rg`on MFY"
    },
    {
      id: "9687",
      district_id: "204",
      name: "Boysun MFY"
    },
    {
      id: "9688",
      district_id: "204",
      name: "Bunyodkor MFY"
    },
    {
      id: "9689",
      district_id: "204",
      name: "Cho`lpon MFY"
    },
    {
      id: "9690",
      district_id: "204",
      name: "Donishmand MFY"
    },
    {
      id: "9691",
      district_id: "204",
      name: "Do`stlik MFY"
    },
    {
      id: "9692",
      district_id: "204",
      name: "Go`zal MFY"
    },
    {
      id: "9693",
      district_id: "204",
      name: "Guliston MFY"
    },
    {
      id: "9694",
      district_id: "204",
      name: "Hamza MFY"
    },
    {
      id: "9695",
      district_id: "204",
      name: "Iltifot MFY"
    },
    {
      id: "9696",
      district_id: "204",
      name: "Iqbol MFY"
    },
    {
      id: "9697",
      district_id: "204",
      name: "Istiqlol MFY"
    },
    {
      id: "9698",
      district_id: "204",
      name: "Jarqo`rg`on MFY"
    },
    {
      id: "9699",
      district_id: "204",
      name: "Jo`rabek MFY"
    },
    {
      id: "9700",
      district_id: "204",
      name: "Katta Yangiobod MFY"
    },
    {
      id: "9701",
      district_id: "204",
      name: "Ma`rifat MFY"
    },
    {
      id: "9702",
      district_id: "204",
      name: "Mashinasozlar MFY"
    },
    {
      id: "9703",
      district_id: "204",
      name: "Maxmur MFY"
    },
    {
      id: "9704",
      district_id: "204",
      name: "Mirzo Ulug`bek MFY"
    },
    {
      id: "9705",
      district_id: "204",
      name: "Moxinur MFY"
    },
    {
      id: "9706",
      district_id: "204",
      name: "Muqimiy MFY"
    },
    {
      id: "9707",
      district_id: "204",
      name: "Mustakillik 10 yil MFY"
    },
    {
      id: "9708",
      district_id: "204",
      name: "Mustaqillik MFY"
    },
    {
      id: "9709",
      district_id: "204",
      name: "Muxtor Ashrafiy MFY"
    },
    {
      id: "9710",
      district_id: "204",
      name: "Navro`z MFY"
    },
    {
      id: "9711",
      district_id: "204",
      name: "Nodira MFY"
    },
    {
      id: "9712",
      district_id: "204",
      name: "Olmos MFY"
    },
    {
      id: "9713",
      district_id: "204",
      name: "Oydinko`l MFY"
    },
    {
      id: "9714",
      district_id: "204",
      name: "O`rta Masjid MFY"
    },
    {
      id: "9715",
      district_id: "204",
      name: "Parvoz MFY"
    },
    {
      id: "9716",
      district_id: "204",
      name: "Qatta qo`yliq MFY"
    },
    {
      id: "9717",
      district_id: "204",
      name: "Qo`ylik ota MFY"
    },
    {
      id: "9718",
      district_id: "204",
      name: "Taraqqiyot MFY"
    },
    {
      id: "9719",
      district_id: "204",
      name: "Tarnov boshi MFY"
    },
    {
      id: "9720",
      district_id: "204",
      name: "To`y tepa MFY"
    },
    {
      id: "9721",
      district_id: "204",
      name: "Tuzel MFY"
    },
    {
      id: "9722",
      district_id: "204",
      name: "Umid MFY"
    },
    {
      id: "9723",
      district_id: "204",
      name: "Usmon Nosir MFY"
    },
    {
      id: "9724",
      district_id: "204",
      name: "Xarbiylar MFY"
    },
    {
      id: "9725",
      district_id: "204",
      name: "Yangi Davr MFY"
    },
    {
      id: "9726",
      district_id: "204",
      name: "Yanginur MFY"
    },
    {
      id: "9727",
      district_id: "204",
      name: "Yangiobod MFY"
    },
    {
      id: "9728",
      district_id: "204",
      name: "Yangiqo`rg`on MFY"
    },
    {
      id: "9729",
      district_id: "205",
      name: "1-Charx Kamolon MFY"
    },
    {
      id: "9730",
      district_id: "205",
      name: "1-Qatortol MFY"
    },
    {
      id: "9731",
      district_id: "205",
      name: "2-Charx Kamolon MFY"
    },
    {
      id: "9732",
      district_id: "205",
      name: "2-Qatortol MFY"
    },
    {
      id: "9733",
      district_id: "205",
      name: "3-Charx Kamolon MFY"
    },
    {
      id: "9734",
      district_id: "205",
      name: "Al-Xorazmiy MFY"
    },
    {
      id: "9735",
      district_id: "205",
      name: "Bekto`pi MFY"
    },
    {
      id: "9736",
      district_id: "205",
      name: "Beshqo`rg`on MFY"
    },
    {
      id: "9737",
      district_id: "205",
      name: "Beshyog`och MFY"
    },
    {
      id: "9738",
      district_id: "205",
      name: "Bahoriston MFY"
    },
    {
      id: "9739",
      district_id: "205",
      name: "Bog`iston MFY"
    },
    {
      id: "9740",
      district_id: "205",
      name: "Botirma MFY"
    },
    {
      id: "9741",
      district_id: "205",
      name: "Bo`ri jar MFY"
    },
    {
      id: "9742",
      district_id: "205",
      name: "Chilonzor MFY"
    },
    {
      id: "9743",
      district_id: "205",
      name: "Cho`pon-ota MFY"
    },
    {
      id: "9744",
      district_id: "205",
      name: "Do`mbirobod MFY"
    },
    {
      id: "9745",
      district_id: "205",
      name: "Do`stlik MFY"
    },
    {
      id: "9746",
      district_id: "205",
      name: "G`ofur G`ulom MFY"
    },
    {
      id: "9747",
      district_id: "205",
      name: "Guliston MFY"
    },
    {
      id: "9748",
      district_id: "205",
      name: "Hamza MFY"
    },
    {
      id: "9749",
      district_id: "205",
      name: "Hayrobod MFY"
    },
    {
      id: "9750",
      district_id: "205",
      name: "Katta Dumbiraobod MFY"
    },
    {
      id: "9751",
      district_id: "205",
      name: "Katta Chilonzor-1 MFY"
    },
    {
      id: "9752",
      district_id: "205",
      name: "Katta Chilonzor-2 MFY"
    },
    {
      id: "9753",
      district_id: "205",
      name: "Katta Chilonzor-3 MFY"
    },
    {
      id: "9754",
      district_id: "205",
      name: "Katta Qozirobod MFY"
    },
    {
      id: "9755",
      district_id: "205",
      name: "Katta Xirmon tepa MFY"
    },
    {
      id: "9756",
      district_id: "205",
      name: "Kichik Xirmontepa MFY"
    },
    {
      id: "9757",
      district_id: "205",
      name: "Ko`tarma MFY"
    },
    {
      id: "9758",
      district_id: "205",
      name: "Lutfiy MFY"
    },
    {
      id: "9759",
      district_id: "205",
      name: "Mehrjon MFY"
    },
    {
      id: "9760",
      district_id: "205",
      name: "Mevazor MFY"
    },
    {
      id: "9761",
      district_id: "205",
      name: "Mavzu-8 MFY"
    },
    {
      id: "9762",
      district_id: "205",
      name: "Naqqoshlik MFY"
    },
    {
      id: "9763",
      district_id: "205",
      name: "Navbahor MFY"
    },
    {
      id: "9764",
      district_id: "205",
      name: "Novza MFY"
    },
    {
      id: "9765",
      district_id: "205",
      name: "No`g`oy-Qo`rg`on MFY"
    },
    {
      id: "9766",
      district_id: "205",
      name: "Olmazor MFY"
    },
    {
      id: "9767",
      district_id: "205",
      name: "Oq-tepa MFY"
    },
    {
      id: "9768",
      district_id: "205",
      name: "Qatortol MFY"
    },
    {
      id: "9769",
      district_id: "205",
      name: "Sharaf MFY"
    },
    {
      id: "9770",
      district_id: "205",
      name: "Sharq MFY"
    },
    {
      id: "9771",
      district_id: "205",
      name: "Sharq Tongi MFY"
    },
    {
      id: "9772",
      district_id: "205",
      name: "Tinchlik MFY"
    },
    {
      id: "9773",
      district_id: "205",
      name: "Tirsakobod MFY"
    },
    {
      id: "9774",
      district_id: "205",
      name: "Xalqlar Do`stligi MFY"
    },
    {
      id: "9775",
      district_id: "205",
      name: "Xirmon tepa MFY"
    },
    {
      id: "9776",
      district_id: "205",
      name: "Yakkabog`MFY"
    },
    {
      id: "9777",
      district_id: "205",
      name: "Yakkatut MFY"
    },
    {
      id: "9778",
      district_id: "206",
      name: "Beltepa MFY"
    },
    {
      id: "9779",
      district_id: "206",
      name: "Bog` ko`cha MFY"
    },
    {
      id: "9780",
      district_id: "206",
      name: "Bo`ston MFY"
    },
    {
      id: "9781",
      district_id: "206",
      name: "Chaqar MFY"
    },
    {
      id: "9782",
      district_id: "206",
      name: "Chorsu MFY"
    },
    {
      id: "9783",
      district_id: "206",
      name: "Cho`ponota MFY"
    },
    {
      id: "9784",
      district_id: "206",
      name: "Eshonguzar MFY"
    },
    {
      id: "9785",
      district_id: "206",
      name: "EskiJararik MFY"
    },
    {
      id: "9786",
      district_id: "206",
      name: "Gulbozor MFY"
    },
    {
      id: "9787",
      district_id: "206",
      name: "Gulobod MFY"
    },
    {
      id: "9788",
      district_id: "206",
      name: "Ibn Sino MFY"
    },
    {
      id: "9789",
      district_id: "206",
      name: "Ilg`or MFY"
    },
    {
      id: "9790",
      district_id: "206",
      name: "Ipakchi MFY"
    },
    {
      id: "9791",
      district_id: "206",
      name: "Islomobod MFY"
    },
    {
      id: "9792",
      district_id: "206",
      name: "Janggox MFY"
    },
    {
      id: "9793",
      district_id: "206",
      name: "Jarariq MFY"
    },
    {
      id: "9794",
      district_id: "206",
      name: "Kamolon MFY"
    },
    {
      id: "9795",
      district_id: "206",
      name: "Kattabog` MFY"
    },
    {
      id: "9796",
      district_id: "206",
      name: "Kattaxovuz MFY"
    },
    {
      id: "9797",
      district_id: "206",
      name: "Koxota MFY"
    },
    {
      id: "9798",
      district_id: "206",
      name: "Ko`kcha MFY"
    },
    {
      id: "9799",
      district_id: "206",
      name: "Labzak MFY"
    },
    {
      id: "9800",
      district_id: "206",
      name: "M.Uyg`ur MFY"
    },
    {
      id: "9801",
      district_id: "206",
      name: "Novza MFY"
    },
    {
      id: "9802",
      district_id: "206",
      name: "o`Xo`jaev MFY"
    },
    {
      id: "9803",
      district_id: "206",
      name: "Obinazir MFY"
    },
    {
      id: "9804",
      district_id: "206",
      name: "Olmazor MFY"
    },
    {
      id: "9805",
      district_id: "206",
      name: "Oqilon MFY"
    },
    {
      id: "9806",
      district_id: "206",
      name: "Oqtepa MFY"
    },
    {
      id: "9807",
      district_id: "206",
      name: "O`qchi MFY"
    },
    {
      id: "9808",
      district_id: "206",
      name: "O`rda MFY"
    },
    {
      id: "9809",
      district_id: "206",
      name: "O`zbekiston MFY"
    },
    {
      id: "9810",
      district_id: "206",
      name: "Qoratosh MFY"
    },
    {
      id: "9811",
      district_id: "206",
      name: "S.Darvoza MFY"
    },
    {
      id: "9812",
      district_id: "206",
      name: "Sarxumdon MFY"
    },
    {
      id: "9813",
      district_id: "206",
      name: "Saayxontoxur MFY"
    },
    {
      id: "9814",
      district_id: "206",
      name: "Saodlik MFY"
    },
    {
      id: "9815",
      district_id: "206",
      name: "Saofayzi MFY"
    },
    {
      id: "9816",
      district_id: "206",
      name: "Suzukota MFY"
    },
    {
      id: "9817",
      district_id: "206",
      name: "Taxtapul MFY"
    },
    {
      id: "9818",
      district_id: "206",
      name: "Tinchlik MFY"
    },
    {
      id: "9819",
      district_id: "206",
      name: "Xadra MFY"
    },
    {
      id: "9820",
      district_id: "206",
      name: "Xuvaydo MFY"
    },
    {
      id: "9821",
      district_id: "206",
      name: "Yangi Komolon MFY"
    },
    {
      id: "9822",
      district_id: "206",
      name: "Yangi-Beltepa MFY"
    },
    {
      id: "9823",
      district_id: "206",
      name: "Yangiobod MFY"
    },
    {
      id: "9824",
      district_id: "206",
      name: "Yangishaxar MFY"
    },
    {
      id: "9825",
      district_id: "206",
      name: "Zafarobod MFY"
    },
    {
      id: "9826",
      district_id: "206",
      name: "Zangiota MFY"
    },
    {
      id: "9827",
      district_id: "207",
      name: "Akbarobod MFY"
    },
    {
      id: "9828",
      district_id: "207",
      name: "Astrobod MFY"
    },
    {
      id: "9829",
      district_id: "207",
      name: "Axilobod MFY"
    },
    {
      id: "9830",
      district_id: "207",
      name: "Axmad Donish MFY"
    },
    {
      id: "9831",
      district_id: "207",
      name: "Beruniy MFY"
    },
    {
      id: "9832",
      district_id: "207",
      name: "Bobodexkon MFY"
    },
    {
      id: "9833",
      district_id: "207",
      name: "Bodomzor MFY"
    },
    {
      id: "9834",
      district_id: "207",
      name: "Bogishamol MFY"
    },
    {
      id: "9835",
      district_id: "207",
      name: "Chinor MFY"
    },
    {
      id: "9836",
      district_id: "207",
      name: "Chosh-tepa MFY"
    },
    {
      id: "9837",
      district_id: "207",
      name: "Do`stlik MFY"
    },
    {
      id: "9838",
      district_id: "207",
      name: "Firdavsiy MFY"
    },
    {
      id: "9839",
      district_id: "207",
      name: "G`. Abdullaev MFY"
    },
    {
      id: "9840",
      district_id: "207",
      name: "Gayratiy MFY"
    },
    {
      id: "9841",
      district_id: "207",
      name: "Guliston MFY"
    },
    {
      id: "9842",
      district_id: "207",
      name: "Islomobod MFY"
    },
    {
      id: "9843",
      district_id: "207",
      name: "Ittifoq MFY"
    },
    {
      id: "9844",
      district_id: "207",
      name: "Jomiy MFY"
    },
    {
      id: "9845",
      district_id: "207",
      name: "Kashkar MFY"
    },
    {
      id: "9846",
      district_id: "207",
      name: "Kulolkurgon MFY"
    },
    {
      id: "9847",
      district_id: "207",
      name: "Kushchinor MFY"
    },
    {
      id: "9848",
      district_id: "207",
      name: "M. Ulugbek MFY"
    },
    {
      id: "9849",
      district_id: "207",
      name: "Matonat MFY"
    },
    {
      id: "9850",
      district_id: "207",
      name: "Ming-Urik MFY"
    },
    {
      id: "9851",
      district_id: "207",
      name: "Minor MFY"
    },
    {
      id: "9852",
      district_id: "207",
      name: "Navruz MFY"
    },
    {
      id: "9853",
      district_id: "207",
      name: "Nodirabegim MFY"
    },
    {
      id: "9854",
      district_id: "207",
      name: "Obod MFY"
    },
    {
      id: "9855",
      district_id: "207",
      name: "Okibat MFY"
    },
    {
      id: "9856",
      district_id: "207",
      name: "Okkurgon MFY"
    },
    {
      id: "9857",
      district_id: "207",
      name: "Oktepa MFY"
    },
    {
      id: "9858",
      district_id: "207",
      name: "Otchopar-1 MFY"
    },
    {
      id: "9859",
      district_id: "207",
      name: "Otchopar-2 MFY"
    },
    {
      id: "9860",
      district_id: "207",
      name: "Oybek MFY"
    },
    {
      id: "9861",
      district_id: "207",
      name: "Posira MFY"
    },
    {
      id: "9862",
      district_id: "207",
      name: "Sharq-Haqiqati MFY"
    },
    {
      id: "9863",
      district_id: "207",
      name: "Shaxriston MFY"
    },
    {
      id: "9864",
      district_id: "207",
      name: "Shayx Shivli MFY"
    },
    {
      id: "9865",
      district_id: "207",
      name: "Shodlik MFY"
    },
    {
      id: "9866",
      district_id: "207",
      name: "Sobirobod MFY"
    },
    {
      id: "9867",
      district_id: "207",
      name: "Tinchlik MFY"
    },
    {
      id: "9868",
      district_id: "207",
      name: "Turk-Kurgon MFY"
    },
    {
      id: "9869",
      district_id: "207",
      name: "Turkiston MFY"
    },
    {
      id: "9870",
      district_id: "207",
      name: "Turon MFY"
    },
    {
      id: "9871",
      district_id: "207",
      name: "Uch-Kaxramon MFY"
    },
    {
      id: "9872",
      district_id: "207",
      name: "Umid MFY"
    },
    {
      id: "9873",
      district_id: "207",
      name: "Usta-Shirin MFY"
    },
    {
      id: "9874",
      district_id: "207",
      name: "Uvaysiy MFY"
    },
    {
      id: "9875",
      district_id: "207",
      name: "Uzbek.Mustak. MFY"
    },
    {
      id: "9876",
      district_id: "207",
      name: "Xasanboy MFY"
    },
    {
      id: "9877",
      district_id: "207",
      name: "Xiyobon tepa MFY"
    },
    {
      id: "9878",
      district_id: "207",
      name: "Xusniobod MFY"
    },
    {
      id: "9879",
      district_id: "207",
      name: "Yangi-xayot MFY"
    },
    {
      id: "9880",
      district_id: "207",
      name: "Yangiarik MFY"
    },
    {
      id: "9881",
      district_id: "207",
      name: "Yangiobod MFY"
    },
    {
      id: "9882",
      district_id: "207",
      name: "Yunus ota MFY"
    },
    {
      id: "9883",
      district_id: "207",
      name: "Yunusobod MFY"
    },
    {
      id: "9884",
      district_id: "208",
      name: " Yakkasaroy MFY"
    },
    {
      id: "9885",
      district_id: "208",
      name: " Yakkasaroy 2 MFY"
    },
    {
      id: "9886",
      district_id: "208",
      name: " Rakat MFY"
    },
    {
      id: "9887",
      district_id: "208",
      name: " A.Avloniy MFY"
    },
    {
      id: "9888",
      district_id: "208",
      name: " Muqimiy MFY"
    },
    {
      id: "9889",
      district_id: "208",
      name: " O`rikzor MFY"
    },
    {
      id: "9890",
      district_id: "208",
      name: " To`qimachi MFY"
    },
    {
      id: "9891",
      district_id: "208",
      name: " Bobur MFY"
    },
    {
      id: "9892",
      district_id: "208",
      name: " Qushbegi MFY"
    },
    {
      id: "9893",
      district_id: "208",
      name: " Boshliq MFY"
    },
    {
      id: "9894",
      district_id: "208",
      name: " Usmon Nosir MFY"
    },
    {
      id: "9895",
      district_id: "208",
      name: " Abdulla Qaxxor MFY"
    },
    {
      id: "9896",
      district_id: "208",
      name: " Dam-ariq MFY"
    },
    {
      id: "9897",
      district_id: "208",
      name: " Konstitutsiya MFY"
    },
    {
      id: "9898",
      district_id: "208",
      name: " Tepa MFY"
    },
    {
      id: "9899",
      district_id: "208",
      name: " Turkiston MFY"
    },
    {
      id: "9900",
      district_id: "208",
      name: " Hamid Sulaymonov MFY"
    },
    {
      id: "9901",
      district_id: "208",
      name: " Yunus Rajabiy MFY"
    },
    {
      id: "9902",
      district_id: "20",
      name: "Adabiyot OFY"
    },
    {
      id: "9903",
      district_id: "20",
      name: "O\ufffdrnak OFY"
    },
    {
      id: "9904",
      district_id: "20",
      name: "Turon MFY"
    },
    {
      id: "9905",
      district_id: "20",
      name: "Bo\ufffdston MFY"
    },
    {
      id: "9906",
      district_id: "20",
      name: "Turkiston MFY"
    },
    {
      id: "9907",
      district_id: "20",
      name: "Xorazm OFY"
    },
    {
      id: "9908",
      district_id: "20",
      name: "Qanli OFY"
    },
    {
      id: "9909",
      district_id: "20",
      name: "Olmazor MFY"
    },
    {
      id: "9910",
      district_id: "20",
      name: "Gulobod MFY"
    },
    {
      id: "9911",
      district_id: "20",
      name: "Qumbuz OFY"
    },
    {
      id: "9912",
      district_id: "20",
      name: "Novoiy MFY"
    },
    {
      id: "9913",
      district_id: "20",
      name: "Temiryo\ufffdl MFY"
    },
    {
      id: "9914",
      district_id: "209",
      name: "Abad makan MP"
    },
    {
      id: "9915",
      district_id: "209",
      name: "Jayxun MP"
    },
    {
      id: "9916",
      district_id: "209",
      name: "Taqiyatas MP"
    },
    {
      id: "9917",
      district_id: "209",
      name: "Shamshiraq MP"
    },
    {
      id: "9918",
      district_id: "209",
      name: "Dosliq MP"
    },
    {
      id: "9919",
      district_id: "209",
      name: "Xaliqlar doslig'i MP"
    },
    {
      id: "9920",
      district_id: "209",
      name: "Qusshiliq MP"
    },
    {
      id: "9921",
      district_id: "209",
      name: "Orayliq MP"
    },
    {
      id: "9922",
      district_id: "209",
      name: "Aydin jol MP"
    },
    {
      id: "9923",
      district_id: "209",
      name: "Nurli kelejek MP"
    },
    {
      id: "9924",
      district_id: "209",
      name: "Naymankol AP"
    },
    {
      id: "9925",
      district_id: "209",
      name: "Keneges AP"
    },
    {
      id: "9926",
      district_id: "209",
      name: "Saraykol AP"
    },
    {
      id: "9927",
      district_id: "130",
      name: "Yangi qishloq MFY"
    },
    {
      id: "9928",
      district_id: "130",
      name: "Xalqabod MFY"
    },
    {
      id: "9929",
      district_id: "20",
      name: "Qipchoq OFY"
    },
    {
      id: "9930",
      district_id: "20",
      name: "Ajiniyaz OFY"
    },
    {
      id: "9931",
      district_id: "20",
      name: "Suuenli OFY"
    },
    {
      id: "9932",
      district_id: "20",
      name: "Ravshan OFY"
    },
    {
      id: "9933",
      district_id: "20",
      name: "Mehnatobod OFY"
    },
    {
      id: "9934",
      district_id: "20",
      name: "Ko\ufffdkdaryo OFY"
    },
    {
      id: "9935",
      district_id: "20",
      name: "Ustirt OFY"
    },
    {
      id: "9936",
      district_id: "20",
      name: "Qo\ufffdng\ufffdirot OFY"
    },
    {
      id: "9937",
      district_id: "20",
      name: "Qung'irot MFY"
    },
    {
      id: "9938",
      district_id: "20",
      name: "Ozodlik MFY"
    },
    {
      id: "9939",
      district_id: "20",
      name: "Taraqli MFY"
    },
    {
      id: "9940",
      district_id: "20",
      name: "Jinishke MFY"
    },
    {
      id: "9941",
      district_id: "20",
      name: "Sanoat MFY"
    },
    {
      id: "9942",
      district_id: "20",
      name: "Hokim ota MFY"
    },
    {
      id: "9943",
      district_id: "20",
      name: "Mingjarg\ufffdon MFY"
    },
    {
      id: "9944",
      district_id: "20",
      name: "Talliq MFY"
    },
    {
      id: "9945",
      district_id: "20",
      name: "Qoratol MFY"
    },
    {
      id: "9946",
      district_id: "20",
      name: "Xanjap MFY"
    },
    {
      id: "9947",
      district_id: "20",
      name: "Monshaqli MFY"
    },
    {
      id: "9948",
      district_id: "20",
      name: "Qumbiz MFY"
    },
    {
      id: "9949",
      district_id: "20",
      name: "Berdax MFY"
    },
    {
      id: "9950",
      district_id: "20",
      name: "Qashi MFY"
    },
    {
      id: "9951",
      district_id: "20",
      name: "Kiyet MFY"
    },
    {
      id: "9952",
      district_id: "20",
      name: "Oltinko\ufffdl ShFY"
    },
    {
      id: "9953",
      district_id: "20",
      name: "Elobod ShFY"
    },
    {
      id: "9954",
      district_id: "20",
      name: "Jasliq ShFY"
    },
    {
      id: "9955",
      district_id: "20",
      name: "Qirq qiz ShFY"
    },
    {
      id: "9956",
      district_id: "20",
      name: "Qoraqalpog\ufffdiston ShFY"
    },
    {
      id: "9957",
      district_id: "16",
      name: "Abay OFY"
    },
    {
      id: "9958",
      district_id: "16",
      name: "Amir Temur MFY"
    },
    {
      id: "9959",
      district_id: "16",
      name: "Beruniy OFY"
    },
    {
      id: "9960",
      district_id: "16",
      name: "Biybazar OFY"
    },
    {
      id: "9961",
      district_id: "16",
      name: "Birlik MFY"
    },
    {
      id: "9962",
      district_id: "16",
      name: "Bunyodkor MFY"
    },
    {
      id: "9963",
      district_id: "16",
      name: "Bo'ston MFY"
    },
    {
      id: "9964",
      district_id: "16",
      name: "Guliston MFY"
    },
    {
      id: "9965",
      district_id: "16",
      name: "Do'stlik MFY"
    },
    {
      id: "9966",
      district_id: "16",
      name: "Do'stlik OFY"
    },
    {
      id: "9967",
      district_id: "16",
      name: "Jayxun MFY"
    },
    {
      id: "9968",
      district_id: "16",
      name: "Jumaniyazov MFY"
    },
    {
      id: "9969",
      district_id: "16",
      name: "Ibn-Sino MFY"
    },
    {
      id: "9970",
      district_id: "16",
      name: "Istiqlol MFY"
    },
    {
      id: "9971",
      district_id: "16",
      name: "Qangshartal MFY"
    },
    {
      id: "9972",
      district_id: "16",
      name: "Qiyot MFY"
    },
    {
      id: "9973",
      district_id: "16",
      name: "Qizilqal'a OFY"
    },
    {
      id: "9974",
      district_id: "16",
      name: "Markaziy MFY"
    },
    {
      id: "9975",
      district_id: "16",
      name: "Maxtumquli OFY"
    },
    {
      id: "9976",
      district_id: "16",
      name: "Mustaqillik MFY"
    },
    {
      id: "9977",
      district_id: "16",
      name: "Navoiy MFY"
    },
    {
      id: "9978",
      district_id: "16",
      name: "Navoiy OFY"
    },
    {
      id: "9979",
      district_id: "16",
      name: "Navro'z MFY"
    },
    {
      id: "9980",
      district_id: "16",
      name: "Nayman MFY"
    },
    {
      id: "9981",
      district_id: "16",
      name: "Ozod OFY"
    },
    {
      id: "9982",
      district_id: "16",
      name: "Oltinsoy OFY"
    },
    {
      id: "9983",
      district_id: "16",
      name: "Palvash MFY"
    },
    {
      id: "9984",
      district_id: "16",
      name: "Paxtakor MFY"
    },
    {
      id: "9985",
      district_id: "16",
      name: "Sarkop OFY"
    },
    {
      id: "9986",
      district_id: "16",
      name: "Tinchlik OFY"
    },
    {
      id: "9987",
      district_id: "16",
      name: "To'qimachi MFY"
    },
    {
      id: "9988",
      district_id: "16",
      name: "Turon MFY"
    },
    {
      id: "9989",
      district_id: "16",
      name: "Xorazm MFY"
    },
    {
      id: "9990",
      district_id: "16",
      name: "Shabboz OFY"
    },
    {
      id: "9991",
      district_id: "16",
      name: "Shimom OFY"
    },
    {
      id: "9992",
      district_id: "16",
      name: "Shobboz MFY"
    },
    {
      id: "9993",
      district_id: "16",
      name: "Yangiobod MFY"
    },
    {
      id: "9994",
      district_id: "26",
      name: "Bayterak OFY"
    },
    {
      id: "9995",
      district_id: "26",
      name: "Juzimzar OFY"
    },
    {
      id: "9996",
      district_id: "26",
      name: "Tinichlik OFY"
    },
    {
      id: "9997",
      district_id: "26",
      name: "Kun Nuri OFY"
    },
    {
      id: "9998",
      district_id: "26",
      name: "Murtazabiy OFY"
    },
    {
      id: "9999",
      district_id: "26",
      name: "Madeniyat OFY"
    },
    {
      id: "10000",
      district_id: "26",
      name: "Janajap OFY"
    },
    {
      id: "10001",
      district_id: "26",
      name: "Nurli jol OFY"
    },
    {
      id: "10002",
      district_id: "26",
      name: "Qiqinchi OFY"
    },
    {
      id: "10003",
      district_id: "26",
      name: "Suwenli OFY"
    },
    {
      id: "10004",
      district_id: "26",
      name: "Parvoz OFY"
    },
    {
      id: "10005",
      district_id: "26",
      name: "Qumbiz OFY"
    },
    {
      id: "10006",
      district_id: "26",
      name: "Shagala OFY"
    },
    {
      id: "10007",
      district_id: "26",
      name: "Tutzor OFY"
    },
    {
      id: "10008",
      district_id: "26",
      name: "Bunyuodkor OFY"
    },
    {
      id: "10009",
      district_id: "26",
      name: "Nawriz-mfylar OFY"
    },
    {
      id: "10010",
      district_id: "26",
      name: "Kulap OFY"
    },
    {
      id: "10011",
      district_id: "26",
      name: "Sarshingul OFY"
    },
    {
      id: "10012",
      district_id: "26",
      name: "Mustaqillik OFY"
    },
    {
      id: "10013",
      district_id: "26",
      name: "Amudaryo OFY"
    },
    {
      id: "10014",
      district_id: "26",
      name: "Qumjiqqin OFY"
    },
    {
      id: "10015",
      district_id: "26",
      name: "Samankul OFY"
    },
    {
      id: "10016",
      district_id: "26",
      name: "Vodnik-poselkasi"
    },
    {
      id: "10017",
      district_id: "26",
      name: "Obod OFY"
    },
    {
      id: "10018",
      district_id: "18",
      name: "Arzimbetqum OFY"
    },
    {
      id: "10019",
      district_id: "18",
      name: "Besko'pir OFY"
    },
    {
      id: "10020",
      district_id: "18",
      name: "Bo'ston OFY"
    },
    {
      id: "10021",
      district_id: "18",
      name: "Jayhun MFY"
    },
    {
      id: "10022",
      district_id: "18",
      name: "Jana qala OFY"
    },
    {
      id: "10023",
      district_id: "18",
      name: "Qosjap OFY"
    },
    {
      id: "10024",
      district_id: "18",
      name: "Navruz OFY"
    },
    {
      id: "10025",
      district_id: "18",
      name: "Qonliko'l OFY"
    },
    {
      id: "10026",
      district_id: "18",
      name: "Do'stlik MFY"
    },
    {
      id: "10027",
      district_id: "18",
      name: "Madaniyat MFY"
    },
    {
      id: "10028",
      district_id: "18",
      name: "Qonliko'l SHFY"
    },
    {
      id: "10029",
      district_id: "24",
      name: "Taxtako`pir PFY"
    },
    {
      id: "10030",
      district_id: "24",
      name: "Aydin jol MFY"
    },
    {
      id: "10031",
      district_id: "24",
      name: "Dawir MFY"
    },
    {
      id: "10032",
      district_id: "24",
      name: "G`arezsizlik MFY"
    },
    {
      id: "10033",
      district_id: "24",
      name: "Taxtako`pir OFY"
    },
    {
      id: "10034",
      district_id: "24",
      name: "Atako`l OFY"
    },
    {
      id: "10035",
      district_id: "24",
      name: "O`zbekiston OFY"
    },
    {
      id: "10036",
      district_id: "24",
      name: "Qaraoy MFY"
    },
    {
      id: "10037",
      district_id: "24",
      name: "Qarateren` OFY"
    },
    {
      id: "10038",
      district_id: "24",
      name: "Da`wqara MFY"
    },
    {
      id: "10039",
      district_id: "24",
      name: "Mulik OFY"
    },
    {
      id: "10040",
      district_id: "24",
      name: "Dawitsay MFY"
    },
    {
      id: "10041",
      district_id: "24",
      name: "Marjanko`l OFY"
    },
    {
      id: "10042",
      district_id: "24",
      name: "Jan`adarya OFY"
    },
    {
      id: "10043",
      district_id: "24",
      name: "Beltaw OFY"
    },
    {
      id: "10044",
      district_id: "24",
      name: "Qon`iratko`l OFY"
    },
    {
      id: "10045",
      district_id: "24",
      name: "Qostruba KMFY"
    },
    {
      id: "10046",
      district_id: "185",
      name: "Iftixor MFY"
    },
    {
      id: "10047",
      district_id: "185",
      name: "O'rmonchilar MFY"
    },
    {
      id: "10048",
      district_id: "185",
      name: "Sh. Rashidov MFY"
    },
    {
      id: "10049",
      district_id: "185",
      name: "Tinchlik MFY"
    },
    {
      id: "10050",
      district_id: "185",
      name: "Al-Farg'oniy MFY"
    },
    {
      id: "10051",
      district_id: "185",
      name: "Soy bo'yi MFY"
    },
    {
      id: "10052",
      district_id: "185",
      name: "Ibrat MFY"
    },
    {
      id: "10053",
      district_id: "185",
      name: "Yoshlar MFY"
    },
    {
      id: "10054",
      district_id: "185",
      name: "Farg'ona MFY"
    },
    {
      id: "10055",
      district_id: "185",
      name: "Shodiyona MFY"
    },
    {
      id: "10056",
      district_id: "185",
      name: "Yangi soy MFY"
    },
    {
      id: "10057",
      district_id: "185",
      name: "Ma'rifat MFY"
    },
    {
      id: "10058",
      district_id: "185",
      name: "Simtepa MFY"
    },
    {
      id: "10059",
      district_id: "185",
      name: "Baxor MFY"
    },
    {
      id: "10060",
      district_id: "185",
      name: "Furqat MFY"
    },
    {
      id: "10061",
      district_id: "185",
      name: "Oybek MFY"
    },
    {
      id: "10062",
      district_id: "185",
      name: "Yangi yo'l MFY"
    },
    {
      id: "10063",
      district_id: "185",
      name: "Istiqlol MFY"
    },
    {
      id: "10064",
      district_id: "185",
      name: "Zarbdor MFY"
    },
    {
      id: "10065",
      district_id: "185",
      name: "Guliston MFY"
    },
    {
      id: "10066",
      district_id: "185",
      name: "Bo'ston MFY"
    },
    {
      id: "10067",
      district_id: "185",
      name: "Mustaqillik MFY"
    },
    {
      id: "10068",
      district_id: "185",
      name: "1-Beshbola MFY"
    },
    {
      id: "10069",
      district_id: "185",
      name: "Shakarqishloq MFY"
    },
    {
      id: "10070",
      district_id: "185",
      name: "Jo'ydam MFY"
    },
    {
      id: "10071",
      district_id: "185",
      name: "To'qimachilar MFY"
    },
    {
      id: "10072",
      district_id: "185",
      name: "S. Temur MFY"
    },
    {
      id: "10073",
      district_id: "185",
      name: "Navro'z MFY"
    },
    {
      id: "10074",
      district_id: "185",
      name: "Mash'al MFY"
    },
    {
      id: "10075",
      district_id: "185",
      name: "A. Navoiy MFY"
    },
    {
      id: "10076",
      district_id: "185",
      name: "Oqariqobod MFY"
    },
    {
      id: "10077",
      district_id: "185",
      name: "Al-Xorazmiy MFY"
    },
    {
      id: "10078",
      district_id: "185",
      name: "A. Jomiy MFY"
    },
    {
      id: "10079",
      district_id: "185",
      name: "Do'stlik MFY"
    },
    {
      id: "10080",
      district_id: "185",
      name: "Bobur MFY"
    },
    {
      id: "10081",
      district_id: "185",
      name: "Lolazor MFY"
    },
    {
      id: "10082",
      district_id: "185",
      name: "A. Qodiriy MFY"
    },
    {
      id: "10083",
      district_id: "185",
      name: "Sovurbuloq MFY"
    },
    {
      id: "10084",
      district_id: "185",
      name: "Afrosiyob MFY"
    },
    {
      id: "10085",
      district_id: "185",
      name: "Madadkor MFY"
    },
    {
      id: "10086",
      district_id: "185",
      name: "M. Ulug'bek MFY"
    },
    {
      id: "10087",
      district_id: "185",
      name: "Parvoz MFY"
    },
    {
      id: "10088",
      district_id: "185",
      name: "Nodirabegim MFY"
    },
    {
      id: "10089",
      district_id: "185",
      name: "Besh Bola MFY"
    },
    {
      id: "10090",
      district_id: "185",
      name: "Yormazor MFY"
    },
    {
      id: "10091",
      district_id: "185",
      name: "Oq-ariq MFY"
    },
    {
      id: "10092",
      district_id: "185",
      name: "Ipak yo'li MFY"
    },
    {
      id: "10093",
      district_id: "185",
      name: "Sharshara MFY"
    },
    {
      id: "10094",
      district_id: "185",
      name: "Shodlik MFY"
    },
    {
      id: "10095",
      district_id: "185",
      name: "Nafosat MFY"
    },
    {
      id: "10096",
      district_id: "185",
      name: "Sohibkor MFY"
    },
    {
      id: "10097",
      district_id: "185",
      name: "Gulzor MFY"
    },
    {
      id: "10098",
      district_id: "185",
      name: "Beglar MFY"
    },
    {
      id: "10099",
      district_id: "185",
      name: "O'zbekiston MFY"
    },
    {
      id: "10100",
      district_id: "185",
      name: "Tabassum MFY"
    },
    {
      id: "10101",
      district_id: "185",
      name: "Beruniy MFY"
    },
    {
      id: "10102",
      district_id: "185",
      name: "Xamkorlik MFY"
    },
    {
      id: "10103",
      district_id: "185",
      name: "Madaniyat MFY"
    },
    {
      id: "10104",
      district_id: "185",
      name: "Istiqbol MFY"
    },
    {
      id: "10105",
      district_id: "185",
      name: "Mehribonlik MFY"
    },
    {
      id: "10106",
      district_id: "185",
      name: "Navbaxor MFY"
    },
    {
      id: "10107",
      district_id: "185",
      name: "Yulduz MFY"
    },
    {
      id: "10108",
      district_id: "185",
      name: "Ibn Sino MFY"
    },
    {
      id: "10109",
      district_id: "185",
      name: "Barkamol MFY"
    },
    {
      id: "10110",
      district_id: "185",
      name: "Kimyogar MFY"
    },
    {
      id: "10111",
      district_id: "185",
      name: "Muruvvat MFY"
    },
    {
      id: "10112",
      district_id: "185",
      name: "Xuvaydo MFY"
    },
    {
      id: "10113",
      district_id: "185",
      name: "Kirgili MFY"
    },
    {
      id: "10114",
      district_id: "185",
      name: "Surxtepa MFY"
    },
    {
      id: "10115",
      district_id: "185",
      name: "Xo'jamag'iz MFY"
    },
    {
      id: "10116",
      district_id: "28",
      name: "Aybiynur OFY"
    },
    {
      id: "10117",
      district_id: "28",
      name: "Ak jap OFY"
    },
    {
      id: "10118",
      district_id: "28",
      name: "Begjap OFY"
    },
    {
      id: "10119",
      district_id: "28",
      name: "Birleshik OFY"
    },
    {
      id: "10120",
      district_id: "28",
      name: "Diyxanabad OFY"
    },
    {
      id: "10121",
      district_id: "28",
      name: "Ketenler OFY"
    },
    {
      id: "10122",
      district_id: "28",
      name: "Mamiy OFY"
    },
    {
      id: "10123",
      district_id: "28",
      name: "Sarmanbaykol OFY"
    },
    {
      id: "10124",
      district_id: "28",
      name: "2-sonli MFY "
    },
    {
      id: "10125",
      district_id: "28",
      name: "4-sonli MFY"
    },
    {
      id: "10126",
      district_id: "28",
      name: "1-sonli MFY"
    },
    {
      id: "10127",
      district_id: "28",
      name: "1-sonli MFY"
    },
    {
      id: "10128",
      district_id: "130",
      name: "Bandixon MFY"
    },
    {
      id: "10129",
      district_id: "22",
      name: "Toktau MPJ"
    },
    {
      id: "10130",
      district_id: "22",
      name: "Arbashi OFY"
    },
    {
      id: "10131",
      district_id: "22",
      name: "Bakanshakli OFY"
    },
    {
      id: "10132",
      district_id: "22",
      name: "Kerder OFY"
    },
    {
      id: "10133",
      district_id: "22",
      name: "Krantau OFY"
    },
    {
      id: "10134",
      district_id: "22",
      name: "Kutankul MFY"
    },
    {
      id: "10135",
      district_id: "22",
      name: "Oqmangit PFY"
    },
    {
      id: "10136",
      district_id: "22",
      name: "Oqterak MFY"
    },
    {
      id: "10137",
      district_id: "22",
      name: "Samanbay OFY"
    },
    {
      id: "10138",
      district_id: "22",
      name: "Takirkul OFY"
    },
    {
      id: "10139",
      district_id: "72",
      name: "Qo'riq QFY"
    },
    {
      id: "10140",
      district_id: "72",
      name: "Uchturgan QFY"
    },
    {
      id: "10141",
      district_id: "72",
      name: "Pastkichaqir QFY"
    },
    {
      id: "10142",
      district_id: "72",
      name: "Sohibkor QFY"
    },
    {
      id: "10143",
      district_id: "72",
      name: "Iskandar QFY"
    },
    {
      id: "10144",
      district_id: "72",
      name: "Jo'langar QFY"
    },
    {
      id: "10145",
      district_id: "72",
      name: "Namingon QFY"
    },
    {
      id: "10146",
      district_id: "72",
      name: "Mo'g'ol QFY"
    },
    {
      id: "10147",
      district_id: "72",
      name: "Xo'jamishkent QFY"
    },
    {
      id: "10148",
      district_id: "72",
      name: "Chakand QFY"
    },
    {
      id: "10149",
      district_id: "172",
      name: "Istiqlol MFY\r\n"
    },
    {
      id: "10150",
      district_id: "172",
      name: "Taraqqiyot MFY\r\n"
    },
    {
      id: "10151",
      district_id: "138",
      name: "Oftobmakon MFY\r\n"
    },
    {
      id: "10152",
      district_id: "215",
      name: "Ma\ufffdrifat MFY"
    },
    {
      id: "10153",
      district_id: "215",
      name: "Halimkop MFY"
    },
    {
      id: "10154",
      district_id: "215",
      name: "Gulobod MFY"
    },
    {
      id: "10155",
      district_id: "215",
      name: "Gultepa MFY"
    },
    {
      id: "10156",
      district_id: "215",
      name: "Kalas MFY"
    },
    {
      id: "10157",
      district_id: "215",
      name: "Farovon MFY"
    },
    {
      id: "10158",
      district_id: "215",
      name: "Chuvalachi MFY"
    },
    {
      id: "10159",
      district_id: "215",
      name: "Navoiy MFY"
    },
    {
      id: "10160",
      district_id: "215",
      name: "Hasanboy MFY"
    },
    {
      id: "10161",
      district_id: "215",
      name: "Keles shahri"
    },
    {
      id: "10162",
      district_id: "215",
      name: "Qizg\ufffdaldoq MFY"
    },
    {
      id: "10163",
      district_id: "215",
      name: "Keles massivi"
    },
    {
      id: "10164",
      district_id: "215",
      name: "Uch chinor MFY"
    },
    {
      id: "10165",
      district_id: "215",
      name: "Ittifoq MFY"
    },
    {
      id: "10166",
      district_id: "215",
      name: "G\ufffdishtko\ufffdprik MFY"
    },
    {
      id: "10167",
      district_id: "215",
      name: "Guliston MFY"
    },
    {
      id: "10168",
      district_id: "215",
      name: "Masalboy MFY"
    },
    {
      id: "10169",
      district_id: "156",
      name: "Parvoz MFY"
    },
    {
      id: "10170",
      district_id: "213",
      name: "Navro'z MFY"
    },
    {
      id: "10171",
      district_id: "213",
      name: "Sabo MFY"
    },
    {
      id: "10172",
      district_id: "213",
      name: "Mustaqillik MFY"
    },
    {
      id: "10173",
      district_id: "213",
      name: "Baxt MFY"
    },
    {
      id: "10174",
      district_id: "213",
      name: "Ishchilar shaharchasi MFY"
    },
    {
      id: "10175",
      district_id: "213",
      name: "Olmos (S.Sultonova) MFY"
    },
    {
      id: "10176",
      district_id: "213",
      name: "Yangi bog' (N.Niyozov) MFY"
    },
    {
      id: "10177",
      district_id: "213",
      name: "Mezon MFY"
    },
    {
      id: "10178",
      district_id: "213",
      name: "Ramadon MFY"
    },
    {
      id: "10179",
      district_id: "213",
      name: "Mevazor MFY"
    },
    {
      id: "10180",
      district_id: "213",
      name: "Oltinobod MFY"
    },
    {
      id: "10181",
      district_id: "213",
      name: "Fayzobod MFY"
    },
    {
      id: "10182",
      district_id: "213",
      name: "Fayzli (Farxod) MFY"
    },
    {
      id: "11183",
      district_id: "207",
      name: "Adolat MFY"
    }
]

var regionDivEl=document.createElement('div')

regionDivEl.setAttribute('class','d-inline')
var districtDivEl=document.createElement('div')
districtDivEl.setAttribute('class','d-inline')
var quarterDivEl=document.createElement('div')
quarterDivEl.setAttribute('class','d-inline')


function renderRegion(regions)  {
    let regionSelect = document.createElement('select')
    let regionsOptionFirst = document.createElement('option')

    regionsOptionFirst.textContent = "--Viloyatni tanlang--"
    regionsOptionFirst.setAttribute('disabled', true)
    regionsOptionFirst.setAttribute('selected', true)
    regionSelect.appendChild(regionsOptionFirst)

    for(let region of regions){
        let regionsOption = document.createElement('option')
        regionsOption.setAttribute('value', region.id)
        regionsOption.textContent = region.name_uz

        regionSelect.appendChild(regionsOption)
    }
    regionSelect.addEventListener('change', event=> {
        console.log(regionSelect.value) 
        districtDivEl.replaceChildren(renderDistrict(regionSelect.value ,districts))
    })

    return regionSelect
}
function renderDistrict(districtId , districts){
    let districtSelect=document.createElement('select')
    for(let district of districts){                                                                 
        if(district.region_id===districtId){
        let districtOption=document.createElement('option')
        districtOption.setAttribute('value', district.id)
        districtOption.textContent=district.name_uz;
        districtSelect.appendChild(districtOption)
        }
    }
    districtSelect.addEventListener('change', () =>{
        console.log(districtSelect.value)
        quarterDivEl.replaceChildren(renderQuater(districtSelect.value , quarters))
    })
    return districtSelect
}

function renderQuater( districtId , quarters){
    let quarterSelect=document.createElement('select')
    for(let quarter of quarters){                                                                 
        if(quarter.district_id===districtId){
        let quarterOption=document.createElement('option')
        quarterOption.setAttribute('value', quarter.id)
        quarterOption.textContent=quarter.name;
        quarterSelect.appendChild(quarterOption)
        }
    }
    quarterSelect.addEventListener('change', () =>{
        console.log(quarterSelect.value)
    })
    return quarterSelect
}



regionDivEl.appendChild(renderRegion(regions))

document.body.appendChild(regionDivEl)
document.body.appendChild(districtDivEl)
document.body.appendChild(quarterDivEl)