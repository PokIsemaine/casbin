window.BENCHMARK_DATA = {
  "lastUpdate": 1689504364980,
  "repoUrl": "https://github.com/PokIsemaine/casbin",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9dd1ab08d9600d01779b76528d731a57b41d67b3",
          "message": "feat: benchmark monitoring action (#1263)\n\n* feat: benchmark monitoring\r\n\r\n* fix: action gh-pages-branch\r\n\r\n* fix: change gh-pages-branch",
          "timestamp": "2023-06-15T21:34:23+08:00",
          "tree_id": "ccd939904f3ddedfe83574582cb14277d9a3e712",
          "url": "https://github.com/casbin/casbin/commit/9dd1ab08d9600d01779b76528d731a57b41d67b3"
        },
        "date": 1686836375252,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 25.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48314947 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 270.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4502481 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 272.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4270809 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 282.7,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4256540 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 285.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4014076 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 263.6,
            "unit": "ns/op\t      97 B/op\t       3 allocs/op",
            "extra": "4083482 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 268.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4407315 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 285.7,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "4323384 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 4558,
            "unit": "ns/op\t    1523 B/op\t      18 allocs/op",
            "extra": "254983 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 296.9,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "3886706 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 270.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4358143 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 268.9,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "4511676 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 270.1,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "4328011 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 808.8,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "1496637 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 865.6,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "1364461 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 952.7,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "1272265 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 811.1,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "1417356 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 1198,
            "unit": "ns/op\t     190 B/op\t       7 allocs/op",
            "extra": "839498 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 2084,
            "unit": "ns/op\t     455 B/op\t       9 allocs/op",
            "extra": "613252 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 835.8,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "1420976 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 1037,
            "unit": "ns/op\t     179 B/op\t       7 allocs/op",
            "extra": "1152781 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 2275,
            "unit": "ns/op\t     290 B/op\t      13 allocs/op",
            "extra": "653528 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 26.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48415063 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 5507,
            "unit": "ns/op\t    1491 B/op\t      17 allocs/op",
            "extra": "218856 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 8404,
            "unit": "ns/op\t    2037 B/op\t      35 allocs/op",
            "extra": "140521 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 77008,
            "unit": "ns/op\t   20004 B/op\t     480 allocs/op",
            "extra": "15350 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 875532,
            "unit": "ns/op\t  191414 B/op\t    4827 allocs/op",
            "extra": "1390 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 9712245,
            "unit": "ns/op\t 1899494 B/op\t   48170 allocs/op",
            "extra": "110 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 92999,
            "unit": "ns/op\t   20108 B/op\t     615 allocs/op",
            "extra": "13064 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 899547,
            "unit": "ns/op\t  194116 B/op\t    6024 allocs/op",
            "extra": "1149 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 11037755,
            "unit": "ns/op\t 1954814 B/op\t   61189 allocs/op",
            "extra": "94 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 7096,
            "unit": "ns/op\t    1823 B/op\t      27 allocs/op",
            "extra": "162196 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 7674,
            "unit": "ns/op\t    1806 B/op\t      25 allocs/op",
            "extra": "154899 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 4322,
            "unit": "ns/op\t    1516 B/op\t      17 allocs/op",
            "extra": "277214 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 5570683,
            "unit": "ns/op\t 1306100 B/op\t   40088 allocs/op",
            "extra": "200 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 9400,
            "unit": "ns/op\t    3026 B/op\t      37 allocs/op",
            "extra": "128631 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 10863,
            "unit": "ns/op\t    2449 B/op\t      49 allocs/op",
            "extra": "105994 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 6540,
            "unit": "ns/op\t    1742 B/op\t      22 allocs/op",
            "extra": "186477 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 35124,
            "unit": "ns/op\t   16613 B/op\t     164 allocs/op",
            "extra": "35221 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 127839,
            "unit": "ns/op\t   11953 B/op\t     797 allocs/op",
            "extra": "8962 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 1306656,
            "unit": "ns/op\t  125908 B/op\t    8741 allocs/op",
            "extra": "877 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 17330168,
            "unit": "ns/op\t 1349922 B/op\t   89741 allocs/op",
            "extra": "79 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 9255566801,
            "unit": "ns/op\t5287107600 B/op\t60931003 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 260180145,
            "unit": "ns/op\t139577964 B/op\t 1670247 allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 9703364723,
            "unit": "ns/op\t5424673600 B/op\t62541575 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 16234,
            "unit": "ns/op\t    7538 B/op\t     111 allocs/op",
            "extra": "74847 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 843.5,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1399729 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 16193,
            "unit": "ns/op\t    7541 B/op\t     111 allocs/op",
            "extra": "77476 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "46661603+PokIsemaine@users.noreply.github.com",
            "name": "鱼竿钓鱼干",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f18f44a619c1045258d3d980348027e3107082d",
          "message": "ci: change CI benchmark alert threshold (#1266)",
          "timestamp": "2023-06-17T00:18:17+08:00",
          "tree_id": "2c8a631c329bf5edbfb83b9e2cb12f1b4352b5e7",
          "url": "https://github.com/casbin/casbin/commit/4f18f44a619c1045258d3d980348027e3107082d"
        },
        "date": 1686932557412,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 20.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57444519 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 208.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5718826 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 207.8,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5740225 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 226.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5259009 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 222.6,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5229240 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 204.9,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "5382606 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 215.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5523656 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 233,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "4998908 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 3674,
            "unit": "ns/op\t    1519 B/op\t      18 allocs/op",
            "extra": "307078 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 237,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "5045019 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 208.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5727698 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 210.8,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5693319 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 201.6,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "5262932 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 653.1,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "1854058 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 684.6,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "1764549 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 703.5,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "1712857 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 651.8,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "1778103 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 820.2,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1432188 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1494,
            "unit": "ns/op\t     459 B/op\t       9 allocs/op",
            "extra": "944884 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 665.2,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "1777087 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 779.1,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1388252 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1583,
            "unit": "ns/op\t     293 B/op\t      13 allocs/op",
            "extra": "752514 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 20.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57419490 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 4746,
            "unit": "ns/op\t    1488 B/op\t      17 allocs/op",
            "extra": "246157 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 7155,
            "unit": "ns/op\t    2034 B/op\t      35 allocs/op",
            "extra": "163630 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 62094,
            "unit": "ns/op\t   19964 B/op\t     480 allocs/op",
            "extra": "19478 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 645213,
            "unit": "ns/op\t  191227 B/op\t    4827 allocs/op",
            "extra": "1831 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 7078603,
            "unit": "ns/op\t 1899238 B/op\t   48175 allocs/op",
            "extra": "170 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 75295,
            "unit": "ns/op\t   20053 B/op\t     615 allocs/op",
            "extra": "16150 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 715653,
            "unit": "ns/op\t  194332 B/op\t    6023 allocs/op",
            "extra": "1413 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 8093452,
            "unit": "ns/op\t 1945018 B/op\t   60803 allocs/op",
            "extra": "140 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5887,
            "unit": "ns/op\t    1820 B/op\t      27 allocs/op",
            "extra": "195484 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 6558,
            "unit": "ns/op\t    1803 B/op\t      25 allocs/op",
            "extra": "180169 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 3614,
            "unit": "ns/op\t    1511 B/op\t      17 allocs/op",
            "extra": "315313 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 5153754,
            "unit": "ns/op\t 1302518 B/op\t   40088 allocs/op",
            "extra": "231 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 7663,
            "unit": "ns/op\t    3018 B/op\t      37 allocs/op",
            "extra": "154326 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 8959,
            "unit": "ns/op\t    2441 B/op\t      49 allocs/op",
            "extra": "132133 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 5405,
            "unit": "ns/op\t    1738 B/op\t      22 allocs/op",
            "extra": "219210 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 27940,
            "unit": "ns/op\t   16596 B/op\t     164 allocs/op",
            "extra": "42956 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 100748,
            "unit": "ns/op\t   11952 B/op\t     797 allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 1056333,
            "unit": "ns/op\t  125907 B/op\t    8741 allocs/op",
            "extra": "1070 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 11741690,
            "unit": "ns/op\t 1349914 B/op\t   89741 allocs/op",
            "extra": "98 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 7222853799,
            "unit": "ns/op\t5284878896 B/op\t60929448 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 199841725,
            "unit": "ns/op\t139516489 B/op\t 1670216 allocs/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 7444518276,
            "unit": "ns/op\t5421875096 B/op\t62539860 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 12753,
            "unit": "ns/op\t    7537 B/op\t     111 allocs/op",
            "extra": "94293 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 697.4,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1727203 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 12825,
            "unit": "ns/op\t    7537 B/op\t     111 allocs/op",
            "extra": "93298 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peymanmortazavi@users.noreply.github.com",
            "name": "Peyman Mortazavi",
            "username": "peymanmortazavi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8353eda2716fb0038c5324f3cb7a41e51f36ee0c",
          "message": "fix: add EnforceContext' GetCacheKey() (#1265)\n\n* allow enforce context to get cached\r\n\r\n* add tests\r\n\r\n* Update enforcer_cached.go\r\n\r\n---------\r\n\r\nCo-authored-by: hsluoyz <hsluoyz@qq.com>",
          "timestamp": "2023-06-17T22:31:53+08:00",
          "tree_id": "e865f6b93eafc3c706bd611174ae3ec2a9a16aeb",
          "url": "https://github.com/casbin/casbin/commit/8353eda2716fb0038c5324f3cb7a41e51f36ee0c"
        },
        "date": 1687012573799,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 20.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57207981 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 205,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5670244 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 204.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5816884 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 219.9,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5441822 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 226.9,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5163327 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 211.8,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "4797204 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 204.5,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5501299 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 227.5,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "5215113 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 3704,
            "unit": "ns/op\t    1524 B/op\t      18 allocs/op",
            "extra": "311671 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 232,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "5151146 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 205.9,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5839311 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 218.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "5840869 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext",
            "value": 393,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "3052272 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 203.8,
            "unit": "ns/op\t     105 B/op\t       4 allocs/op",
            "extra": "5154950 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 641.9,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "1852093 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 681.9,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "1777251 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 720.1,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "1674834 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 665.7,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "1799802 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 840.1,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1409118 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1581,
            "unit": "ns/op\t     457 B/op\t       9 allocs/op",
            "extra": "951526 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 672.7,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "1794343 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 774.3,
            "unit": "ns/op\t     178 B/op\t       7 allocs/op",
            "extra": "1425872 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1709,
            "unit": "ns/op\t     290 B/op\t      13 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 20.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55990222 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 4762,
            "unit": "ns/op\t    1490 B/op\t      17 allocs/op",
            "extra": "248553 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 7153,
            "unit": "ns/op\t    2036 B/op\t      35 allocs/op",
            "extra": "163948 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 63261,
            "unit": "ns/op\t   19954 B/op\t     480 allocs/op",
            "extra": "19038 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 646575,
            "unit": "ns/op\t  191316 B/op\t    4828 allocs/op",
            "extra": "1838 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 7263928,
            "unit": "ns/op\t 1895217 B/op\t   48057 allocs/op",
            "extra": "163 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 77648,
            "unit": "ns/op\t   20049 B/op\t     615 allocs/op",
            "extra": "15358 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 746223,
            "unit": "ns/op\t  194381 B/op\t    6023 allocs/op",
            "extra": "1422 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 8042693,
            "unit": "ns/op\t 1945786 B/op\t   60832 allocs/op",
            "extra": "135 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5968,
            "unit": "ns/op\t    1819 B/op\t      27 allocs/op",
            "extra": "189163 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 6638,
            "unit": "ns/op\t    1804 B/op\t      25 allocs/op",
            "extra": "179216 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 3708,
            "unit": "ns/op\t    1513 B/op\t      17 allocs/op",
            "extra": "321110 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 5053302,
            "unit": "ns/op\t 1302992 B/op\t   40088 allocs/op",
            "extra": "237 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 7708,
            "unit": "ns/op\t    3020 B/op\t      37 allocs/op",
            "extra": "152252 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 9132,
            "unit": "ns/op\t    2442 B/op\t      49 allocs/op",
            "extra": "131775 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 5446,
            "unit": "ns/op\t    1738 B/op\t      22 allocs/op",
            "extra": "216006 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 28808,
            "unit": "ns/op\t   16595 B/op\t     164 allocs/op",
            "extra": "41857 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 101996,
            "unit": "ns/op\t   11953 B/op\t     797 allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 1052563,
            "unit": "ns/op\t  125908 B/op\t    8741 allocs/op",
            "extra": "1160 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 12560794,
            "unit": "ns/op\t 1349920 B/op\t   89741 allocs/op",
            "extra": "87 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 7325599901,
            "unit": "ns/op\t5285105568 B/op\t60930356 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 205072186,
            "unit": "ns/op\t139515816 B/op\t 1670232 allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 7663870692,
            "unit": "ns/op\t5422105016 B/op\t62540746 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 12870,
            "unit": "ns/op\t    7536 B/op\t     111 allocs/op",
            "extra": "92415 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 705.1,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "1723117 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 13018,
            "unit": "ns/op\t    7537 B/op\t     111 allocs/op",
            "extra": "91410 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "851892190@qq.com",
            "name": "PokIsemaine",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "851892190@qq.com",
            "name": "PokIsemaine",
            "username": "PokIsemaine"
          },
          "distinct": true,
          "id": "4be15021de84e1f0ba208968ca45836897d5e3fc",
          "message": "feat: support json request for ABAC",
          "timestamp": "2023-07-16T18:22:27+08:00",
          "tree_id": "e9bc464f5f016dc98ace570fcbc99746283e1a65",
          "url": "https://github.com/PokIsemaine/casbin/commit/4be15021de84e1f0ba208968ca45836897d5e3fc"
        },
        "date": 1689503235712,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 20.64,
            "unit": "ns/op",
            "extra": "57451430 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57451430 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57451430 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 235.5,
            "unit": "ns/op",
            "extra": "5207846 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5207846 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5207846 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 231.9,
            "unit": "ns/op",
            "extra": "5110448 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5110448 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5110448 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 234.4,
            "unit": "ns/op",
            "extra": "5075065 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5075065 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5075065 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 238.4,
            "unit": "ns/op",
            "extra": "4943521 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4943521 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4943521 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 219.3,
            "unit": "ns/op",
            "extra": "4630647 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 97,
            "unit": "B/op",
            "extra": "4630647 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4630647 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 234.5,
            "unit": "ns/op",
            "extra": "4776220 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4776220 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4776220 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 251.5,
            "unit": "ns/op",
            "extra": "4911486 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "4911486 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4911486 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 4617,
            "unit": "ns/op",
            "extra": "256534 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1538,
            "unit": "B/op",
            "extra": "256534 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 19,
            "unit": "allocs/op",
            "extra": "256534 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 258.4,
            "unit": "ns/op",
            "extra": "4680638 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4680638 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4680638 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 233.6,
            "unit": "ns/op",
            "extra": "5019360 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5019360 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5019360 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 242.2,
            "unit": "ns/op",
            "extra": "5156708 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5156708 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5156708 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 437,
            "unit": "ns/op",
            "extra": "2732590 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2732590 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2732590 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 215.4,
            "unit": "ns/op",
            "extra": "5446050 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "5446050 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5446050 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 701.9,
            "unit": "ns/op",
            "extra": "1739076 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1739076 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1739076 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 744,
            "unit": "ns/op",
            "extra": "1599860 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1599860 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1599860 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 800.4,
            "unit": "ns/op",
            "extra": "1510393 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1510393 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1510393 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 713.8,
            "unit": "ns/op",
            "extra": "1681746 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1681746 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1681746 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1003,
            "unit": "ns/op",
            "extra": "1196090 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 181,
            "unit": "B/op",
            "extra": "1196090 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1196090 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1635,
            "unit": "ns/op",
            "extra": "901980 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 471,
            "unit": "B/op",
            "extra": "901980 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "901980 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 738.4,
            "unit": "ns/op",
            "extra": "1660592 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1660592 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1660592 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 812.6,
            "unit": "ns/op",
            "extra": "1379395 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1379395 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1379395 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1625,
            "unit": "ns/op",
            "extra": "832237 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 292,
            "unit": "B/op",
            "extra": "832237 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "832237 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 20.6,
            "unit": "ns/op",
            "extra": "58207394 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "58207394 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "58207394 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 5484,
            "unit": "ns/op",
            "extra": "219340 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1540,
            "unit": "B/op",
            "extra": "219340 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "219340 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 8285,
            "unit": "ns/op",
            "extra": "145870 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2180,
            "unit": "B/op",
            "extra": "145870 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "145870 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 101039,
            "unit": "ns/op",
            "extra": "11900 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 23736,
            "unit": "B/op",
            "extra": "11900 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 558,
            "unit": "allocs/op",
            "extra": "11900 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 1128331,
            "unit": "ns/op",
            "extra": "1068 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 229561,
            "unit": "B/op",
            "extra": "1068 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 5628,
            "unit": "allocs/op",
            "extra": "1068 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 12009691,
            "unit": "ns/op",
            "extra": "90 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 2294683,
            "unit": "B/op",
            "extra": "90 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 56466,
            "unit": "allocs/op",
            "extra": "90 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 108504,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 24841,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 715,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 1123534,
            "unit": "ns/op",
            "extra": "985 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 242292,
            "unit": "B/op",
            "extra": "985 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 7026,
            "unit": "allocs/op",
            "extra": "985 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 13258881,
            "unit": "ns/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 2437804,
            "unit": "B/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 71329,
            "unit": "allocs/op",
            "extra": "84 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6727,
            "unit": "ns/op",
            "extra": "176612 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1869,
            "unit": "B/op",
            "extra": "176612 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "176612 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 7846,
            "unit": "ns/op",
            "extra": "152122 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1871,
            "unit": "B/op",
            "extra": "152122 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 26,
            "unit": "allocs/op",
            "extra": "152122 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 4537,
            "unit": "ns/op",
            "extra": "263991 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1530,
            "unit": "B/op",
            "extra": "263991 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "263991 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5821551,
            "unit": "ns/op",
            "extra": "205 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1368598,
            "unit": "B/op",
            "extra": "205 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 42089,
            "unit": "allocs/op",
            "extra": "205 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 8851,
            "unit": "ns/op",
            "extra": "133821 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3072,
            "unit": "B/op",
            "extra": "133821 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "133821 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 10957,
            "unit": "ns/op",
            "extra": "111219 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2766,
            "unit": "B/op",
            "extra": "111219 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "111219 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 6178,
            "unit": "ns/op",
            "extra": "190237 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1806,
            "unit": "B/op",
            "extra": "190237 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "190237 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 32213,
            "unit": "ns/op",
            "extra": "36702 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16654,
            "unit": "B/op",
            "extra": "36702 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 165,
            "unit": "allocs/op",
            "extra": "36702 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 105249,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1107572,
            "unit": "ns/op",
            "extra": "1088 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125909,
            "unit": "B/op",
            "extra": "1088 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1088 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 14182328,
            "unit": "ns/op",
            "extra": "75 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349925,
            "unit": "B/op",
            "extra": "75 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "75 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 7918806126,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5296811896,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60933241,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 214934152,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139813814,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670296,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 8337436215,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5422997000,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62541930,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 13817,
            "unit": "ns/op",
            "extra": "82206 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7552,
            "unit": "B/op",
            "extra": "82206 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "82206 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 732.5,
            "unit": "ns/op",
            "extra": "1635621 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1635621 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1635621 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 13732,
            "unit": "ns/op",
            "extra": "88446 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7537,
            "unit": "B/op",
            "extra": "88446 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "88446 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "851892190@qq.com",
            "name": "PokIsemaine",
            "username": "PokIsemaine"
          },
          "committer": {
            "email": "851892190@qq.com",
            "name": "PokIsemaine",
            "username": "PokIsemaine"
          },
          "distinct": true,
          "id": "59afc3da5025a6af8d6bea93359c511765151c75",
          "message": "feat: acceptJsonRequest",
          "timestamp": "2023-07-16T18:41:15+08:00",
          "tree_id": "276b5f34028d3d550809e3ee27144ca76bfe1687",
          "url": "https://github.com/PokIsemaine/casbin/commit/59afc3da5025a6af8d6bea93359c511765151c75"
        },
        "date": 1689504364570,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 22.46,
            "unit": "ns/op",
            "extra": "57820608 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "57820608 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "57820608 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 243.9,
            "unit": "ns/op",
            "extra": "4668415 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4668415 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4668415 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 238.5,
            "unit": "ns/op",
            "extra": "5287790 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5287790 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5287790 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 247.1,
            "unit": "ns/op",
            "extra": "4753792 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4753792 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4753792 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 274.8,
            "unit": "ns/op",
            "extra": "4059140 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4059140 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4059140 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 247.4,
            "unit": "ns/op",
            "extra": "4731184 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "4731184 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "4731184 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 266.8,
            "unit": "ns/op",
            "extra": "4430500 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4430500 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4430500 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 269.5,
            "unit": "ns/op",
            "extra": "4990372 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "4990372 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4990372 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 3846,
            "unit": "ns/op",
            "extra": "309750 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1522,
            "unit": "B/op",
            "extra": "309750 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "309750 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 276,
            "unit": "ns/op",
            "extra": "4343758 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4343758 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4343758 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 238.4,
            "unit": "ns/op",
            "extra": "5248987 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "5248987 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5248987 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 251.3,
            "unit": "ns/op",
            "extra": "4757334 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "4757334 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "4757334 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 443.8,
            "unit": "ns/op",
            "extra": "2613403 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "2613403 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2613403 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 270.7,
            "unit": "ns/op",
            "extra": "5407054 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 105,
            "unit": "B/op",
            "extra": "5407054 times\n2 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "5407054 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 749.4,
            "unit": "ns/op",
            "extra": "1687646 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "1687646 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1687646 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 751.2,
            "unit": "ns/op",
            "extra": "1510171 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "1510171 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1510171 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 817.2,
            "unit": "ns/op",
            "extra": "1438749 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "1438749 times\n2 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1438749 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 734,
            "unit": "ns/op",
            "extra": "1614980 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "1614980 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1614980 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 1030,
            "unit": "ns/op",
            "extra": "1128651 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 183,
            "unit": "B/op",
            "extra": "1128651 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1128651 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1843,
            "unit": "ns/op",
            "extra": "912184 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 468,
            "unit": "B/op",
            "extra": "912184 times\n2 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "912184 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 781.9,
            "unit": "ns/op",
            "extra": "1582219 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "1582219 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1582219 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 862.9,
            "unit": "ns/op",
            "extra": "1319646 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 178,
            "unit": "B/op",
            "extra": "1319646 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1319646 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1920,
            "unit": "ns/op",
            "extra": "735483 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 303,
            "unit": "B/op",
            "extra": "735483 times\n2 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "735483 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 21.62,
            "unit": "ns/op",
            "extra": "56915190 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "56915190 times\n2 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "56915190 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 4820,
            "unit": "ns/op",
            "extra": "251857 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1490,
            "unit": "B/op",
            "extra": "251857 times\n2 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "251857 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 7508,
            "unit": "ns/op",
            "extra": "169564 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2036,
            "unit": "B/op",
            "extra": "169564 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "169564 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 68827,
            "unit": "ns/op",
            "extra": "18244 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 19964,
            "unit": "B/op",
            "extra": "18244 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "18244 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 796526,
            "unit": "ns/op",
            "extra": "1593 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191201,
            "unit": "B/op",
            "extra": "1593 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "1593 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 9276600,
            "unit": "ns/op",
            "extra": "127 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1899132,
            "unit": "B/op",
            "extra": "127 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48170,
            "unit": "allocs/op",
            "extra": "127 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 82342,
            "unit": "ns/op",
            "extra": "15090 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20088,
            "unit": "B/op",
            "extra": "15090 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "15090 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 798475,
            "unit": "ns/op",
            "extra": "1531 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194140,
            "unit": "B/op",
            "extra": "1531 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6022,
            "unit": "allocs/op",
            "extra": "1531 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 9133485,
            "unit": "ns/op",
            "extra": "132 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1946281,
            "unit": "B/op",
            "extra": "132 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60851,
            "unit": "allocs/op",
            "extra": "132 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 6139,
            "unit": "ns/op",
            "extra": "189506 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1823,
            "unit": "B/op",
            "extra": "189506 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "189506 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 6968,
            "unit": "ns/op",
            "extra": "183352 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1805,
            "unit": "B/op",
            "extra": "183352 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "183352 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 3844,
            "unit": "ns/op",
            "extra": "323176 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1514,
            "unit": "B/op",
            "extra": "323176 times\n2 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "323176 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 5096637,
            "unit": "ns/op",
            "extra": "222 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1306764,
            "unit": "B/op",
            "extra": "222 times\n2 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40088,
            "unit": "allocs/op",
            "extra": "222 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 7746,
            "unit": "ns/op",
            "extra": "153424 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3024,
            "unit": "B/op",
            "extra": "153424 times\n2 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "153424 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 9491,
            "unit": "ns/op",
            "extra": "131805 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2448,
            "unit": "B/op",
            "extra": "131805 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "131805 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 5712,
            "unit": "ns/op",
            "extra": "220536 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1740,
            "unit": "B/op",
            "extra": "220536 times\n2 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "220536 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 29787,
            "unit": "ns/op",
            "extra": "42285 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16612,
            "unit": "B/op",
            "extra": "42285 times\n2 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "42285 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 113546,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11953,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 1172433,
            "unit": "ns/op",
            "extra": "1126 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125908,
            "unit": "B/op",
            "extra": "1126 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1126 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 13119833,
            "unit": "ns/op",
            "extra": "79 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349916,
            "unit": "B/op",
            "extra": "79 times\n2 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "79 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 8447763354,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5294626552,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60932084,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 226517282,
            "unit": "ns/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 139730619,
            "unit": "B/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1670266,
            "unit": "allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 8051166490,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5432062368,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62542542,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 13403,
            "unit": "ns/op",
            "extra": "89804 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7551,
            "unit": "B/op",
            "extra": "89804 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "89804 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 725.2,
            "unit": "ns/op",
            "extra": "1656079 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "1656079 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1656079 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 13442,
            "unit": "ns/op",
            "extra": "88957 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7548,
            "unit": "B/op",
            "extra": "88957 times\n2 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "88957 times\n2 procs"
          }
        ]
      }
    ]
  }
}