define({ api: [
  {
    "type": "get",
    "url": "/api/malwareh",
    "title": "returns the number of malwares per hour",
    "name": "Malware_per_H",
    "version": "0.1.0",
    "group": "advanceStats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "field": "String",
            "optional": false,
            "description": "representing json object"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n    \"status\": \"ok\", \n    \"current\":33.75, \n    \"max\":35.291666666666664\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/advances.js"
  },
  {
    "type": "get",
    "url": "/api/threath",
    "title": "returns the number of threats per hour",
    "name": "Threats_per_H",
    "version": "0.1.0",
    "group": "advanceStats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "field": "String",
            "optional": false,
            "description": "representing json object"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n    \"status\": \"ok\", \n    \"current\":33.75, \n    \"max\":35.291666666666664\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/advances.js"
  },
  {
    "type": "get",
    "url": "/api/malware",
    "title": "returns the malwares between specific dates",
    "name": "Malware",
    "version": "0.2.0",
    "group": "basicstats",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "fyear",
            "optional": false,
            "description": "From Year"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "{JSON",
            "optional": true,
            "description": "}] JSon object representing Malware"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"_id\": \"531b3dc48c1d28d5bcb26535\",\n \"alerts\": \"0 \",\n \"city\": null,\n \"country\": null,\n \"desc\": null,\n \"ids\": \" 42\",\n \"ip\": null,\n \"linkToReport\": \"http://r.virscan.org/7c1ea5cecc69ba1e5caeaa167db85f3c\",\n \"ll\": null,\n \"md5\": null,\n \"name\": \"fdminst-lite.exe (4067080\\n)\",\n \"region\": null,\n \"scraped_source\": \"virscan\",\n \"timestamp\": \"Sat Mar 08 2014 17:01:10 GMT+0100 (CET)\",\n \"modified\": \"2014-03-08T16:01:10.044Z\",\n \"geoLoc\": false\n}\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Missing Parameters\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/numberofmalware",
    "title": "returns the number of malwares between specific dates",
    "name": "NumberOfMalware",
    "version": "0.2.0",
    "group": "basicstats",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "fyear",
            "optional": false,
            "description": "From Year"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "field": "Number",
            "optional": false,
            "description": "of Malware between Dates"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"numberofmalware\": \"20\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Missing Parameters\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/numberofthreats",
    "title": "returns the number of threats between specific dates",
    "name": "NumberOfThreat",
    "version": "0.2.0",
    "group": "basicstats",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "fyear",
            "optional": false,
            "description": "From Year"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "field": "Number",
            "optional": false,
            "description": "of Threats between Dates"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"numberofthreat\": \"20\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Missing Parameters\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/threats",
    "title": "returns the threats between specific dates",
    "name": "Threat",
    "version": "0.2.0",
    "group": "basicstats",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "fyear",
            "optional": false,
            "description": "From Year"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "{JSON",
            "optional": true,
            "description": "}] Json Objects"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   \n{\n\"_id\": \"531b3dbad375ff1e9a78f8b4\",\n\"url\": \"http://richiesburgerurge.com/ForumRetrieve.aspx?ForumID=683&amp;TopicID=152063&amp;NoTe (...)\",\n\"timestamp\": \"2014-03-08 16:55:16\",\n\"ip\": \"54.236.189.64\",\n\"alerts\": \"0 \",\n\"ids\": \" 0\",\n\"scraped_source\": \"urlquery\",\n\"country\": \"US\",\n\"city\": \"Ashburn\",\n\"region\": \"VA\",\n\"ll\": \"39.0437,-77.4875\",\n\"__v\": 0,\n\"modified\": \"2014-03-08T15:56:42.941Z\"\n}\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Missing Parameters\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/topcountriesphishers",
    "title": "Request to obtain the top countries phishers list",
    "name": "TopCountries",
    "version": "0.2.0",
    "group": "basicstats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "Country",
            "optional": false,
            "description": "in top country"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "Number",
            "optional": false,
            "description": "of threats"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"country\": \"EN\",\n     \"score\": \"20\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/topcountriesthreats",
    "title": "Request to obtain the top countries threats list",
    "name": "TopCountries",
    "version": "0.2.0",
    "group": "basicstats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "Country",
            "optional": false,
            "description": "in top country"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "Number",
            "optional": false,
            "description": "of threats"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"country\": \"EN\",\n     \"score\": \"20\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/topcountriesmalware",
    "title": "Request to obtain the top malware countries list",
    "name": "TopCountries",
    "version": "0.2.0",
    "group": "basicstats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "Country",
            "optional": false,
            "description": "in top country"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "Number",
            "optional": false,
            "description": "of malware"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"country\": \"EN\",\n     \"score\": \"20\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/totalmalware",
    "title": "Request to obtain total number of malwar",
    "name": "TotalMalware",
    "version": "0.2.0",
    "group": "basicstats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "Totals",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"totals\": \"3000\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/totalphishers",
    "title": "Request to obtain total number of phinshers",
    "name": "TotalPhishers",
    "version": "0.2.0",
    "group": "basicstats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "Totals",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"totals\": \"3000\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/totalthreats",
    "title": "Request to obtain total number threats",
    "name": "TotalThreats",
    "version": "0.2.0",
    "group": "basicstats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "Totals",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"totals\": \"3000\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  }
] });