var scenario0 = {
  gamestate: {
    game: {
      year: 1935,
      last_year: 1945,
      turn_order_options: {
        "1": ["Axis", "USSR", "West"],
        "2": ["Axis", "West", "USSR"],
        "3": ["West", "Axis", "USSR"],
        "4": ["West", "USSR", "Axis"],
        "5": ["USSR", "West", "Axis"],
        "6": ["USSR", "Axis", "West"]
      },
      sequence: [
        "Setup",
        "New_Year",
        "Production",
        "Government",
        "Spring",
        "Summer",
        "Blockade",
        "Fall",
        "Winter",
        "New_Year",
        "Production",
        "Government",
        "Spring",
        "Summer",
        "Blockade",
        "Fall",
        "Winter",
        "New_Year",
        "Production",
        "Government",
        "Spring",
        "Summer",
        "Blockade",
        "Fall",
        "Winter",
        "New_Year",
        "Production",
        "Government",
        "Spring",
        "Summer",
        "Blockade",
        "Fall",
        "Winter",
        "New_Year",
        "Production",
        "Government",
        "Spring",
        "Summer",
        "Blockade",
        "Fall",
        "Winter",
        "New_Year",
        "Production",
        "Government",
        "Spring",
        "Summer",
        "Blockade",
        "Fall",
        "Winter",
        "New_Year",
        "Production",
        "Government",
        "Spring",
        "Summer",
        "Blockade",
        "Fall",
        "Winter",
        "New_Year",
        "Production",
        "Government",
        "Spring",
        "Summer",
        "Blockade",
        "Fall",
        "Winter",
        "New_Year",
        "Production",
        "Government",
        "Spring",
        "Summer",
        "Blockade",
        "Fall",
        "Winter",
        "New_Year",
        "Production",
        "Government",
        "Spring",
        "Summer",
        "Blockade",
        "Fall",
        "Winter",
        "Scoring"
      ],
      index: 0,
      peace_dividends: [0, 1, 0, 2, 1, 1, 0, 1, 0, 2, 1, 2, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0],
      victory: {
        economic: 25
      }
    },
    objects: {
      table: {
        Ottawa: {
          type: "Coast",
          alligence: "Canada",
          res: 1,
          pop: 0,
          muster: 1,
          borders: {
            North_Atlantic_Ocean: "Coast",
            New_York: "Forest"
          },
          name: "Ottawa",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        New_York: {
          type: "Coast",
          alligence: "USA",
          res: 2,
          pop: 1,
          muster: 2,
          borders: {
            Ottawa: "Forest",
            North_Atlantic_Ocean: "Coast",
            Washington: "Plains"
          },
          name: "New_York",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Washington: {
          type: "Coast",
          alligence: "USA",
          res: 2,
          pop: 2,
          muster: 3,
          borders: {
            New_York: "Plains",
            North_Atlantic_Ocean: "Coast"
          },
          name: "Washington",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Irish_Sea: {
          type: "Sea",
          borders: {
            Irminger_Sea: "Sea",
            North_Atlantic_Ocean: "Ocean",
            Bay_of_Biscay: "Sea",
            Norwegian_Sea: "Sea",
            English_Channel: "Sea",
            London: "Coast",
            Glasgow: "Coast",
            Dublin: "Coast",
            Iceland: "Coast"
          },
          name: "Irish_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        North_Atlantic_Ocean: {
          type: "Ocean",
          borders: {
            Ottawa: "Coast",
            New_York: "Coast",
            Washington: "Coast",
            Irminger_Sea: "Ocean",
            Irish_Sea: "Ocean",
            Bay_of_Biscay: "Ocean",
            Azores: "Strait",
            Mid_Atlantic_Ocean: "Ocean"
          },
          name: "North_Atlantic_Ocean",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Mid_Atlantic_Ocean: {
          type: "Ocean",
          borders: {
            North_Atlantic_Ocean: "Ocean",
            Azores: "Strait",
            South_Atlantic_Ocean: "Ocean",
            Rio_de_Janeiro: "Coast",
            Madeira_Sea: "Ocean",
            Dakar: "Coast",
            Morocco: "Coast"
          },
          name: "Mid_Atlantic_Ocean",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        South_Atlantic_Ocean: {
          type: "Ocean",
          borders: {
            Mid_Atlantic_Ocean: "Ocean",
            Rio_de_Janeiro: "Coast",
            Dakar: "Coast",
            West_Indian_Ocean: "Ocean-Africa"
          },
          name: "South_Atlantic_Ocean",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Rio_de_Janeiro: {
          type: "Coast",
          alligence: "Latin_America",
          res: 2,
          pop: 0,
          muster: 1,
          borders: {
            South_Atlantic_Ocean: "Coast",
            Mid_Atlantic_Ocean: "Coast"
          },
          name: "Rio_de_Janeiro",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Dakar: {
          type: "Coast",
          alligence: "French_North_Africa",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            South_Atlantic_Ocean: "Coast",
            Mid_Atlantic_Ocean: "Coast",
            Morocco: "Plains"
          },
          name: "Dakar",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Morocco: {
          type: "Coast",
          alligence: "French_North_Africa",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Mid_Atlantic_Ocean: "Coast",
            Dakar: "Plains",
            Madeira_Sea: "Coast",
            Gibraltar: "Strait",
            Algiers: "Mountains"
          },
          name: "Morocco",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Algiers: {
          type: "Coast",
          alligence: "French_North_Africa",
          res: 0,
          pop: 1,
          muster: 2,
          borders: {
            Gibraltar: "Strait",
            Morocco: "Mountains",
            Tunisia: "Mountains",
            Western_Mediterranean: "Coast"
          },
          name: "Algiers",
          units: {
            set: [151]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Tunisia: {
          type: "Coast",
          alligence: "French_North_Africa",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Algiers: "Mountains",
            Western_Mediterranean: "Coast",
            Sfax: "Mountains",
            Malta: "Strait"
          },
          name: "Tunisia",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Sfax: {
          type: "Land",
          alligence: "French_North_Africa",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Tunisia: "Mountains",
            Tripoli: "Mountains",
            Malta: "Strait"
          },
          name: "Sfax",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Gibraltar: {
          type: "Coast",
          alligence: "Gibraltar",
          res: 0,
          pop: 0,
          muster: 1,
          borders: {
            Madeira_Sea: "Strait",
            Morocco: "Strait",
            Algiers: "Strait",
            Madrid: "Strait",
            Western_Mediterranean: "Strait",
            Barcelona: "Strait"
          },
          name: "Gibraltar",
          units: {
            set: [111]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Madeira_Sea: {
          type: "Sea",
          borders: {
            Mid_Atlantic_Ocean: "Ocean",
            Bay_of_Biscay: "Sea",
            Azores: "Strait",
            Morocco: "Coast",
            Gibraltar: "Strait",
            Lisbon: "Coast",
            Leon: "Coast"
          },
          name: "Madeira_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Lisbon: {
          type: "Coast",
          alligence: "Portugal",
          res: 1,
          pop: 0,
          muster: 1,
          borders: {
            Madrid: "Plains",
            Madeira_Sea: "Coast",
            Leon: "Plains"
          },
          name: "Lisbon",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Madrid: {
          type: "Land",
          alligence: "Spain",
          res: 0,
          pop: 1,
          muster: 3,
          borders: {
            Gibraltar: "Strait",
            Lisbon: "Plains",
            Leon: "Coast",
            Barcelona: "Plains"
          },
          name: "Madrid",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Leon: {
          type: "Coast",
          alligence: "Spain",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Lisbon: "Plains",
            Madeira_Sea: "Coast",
            Bay_of_Biscay: "Coast",
            Madrid: "Coast",
            Barcelona: "Plains",
            Gascony: "Mountains"
          },
          name: "Leon",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Barcelona: {
          type: "Coast",
          alligence: "Spain",
          res: 0,
          pop: 1,
          muster: 0,
          borders: {
            Gibraltar: "Strait",
            Madrid: "Plains",
            Leon: "Plains",
            Western_Mediterranean: "Coast",
            Gascony: "Mountains",
            Marseille: "Mountains"
          },
          name: "Barcelona",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Azores: {
          type: "Coast",
          alligence: "Portugal",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            North_Atlantic_Ocean: "Strait",
            Mid_Atlantic_Ocean: "Strait",
            Madeira_Sea: "Strait",
            Bay_of_Biscay: "Strait"
          },
          name: "Azores",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Bay_of_Biscay: {
          type: "Sea",
          borders: {
            North_Atlantic_Ocean: "Ocean",
            Madeira_Sea: "Sea",
            Azores: "Strait",
            Irish_Sea: "Sea",
            English_Channel: "Sea",
            Leon: "Coast",
            Paris: "Coast",
            Gascony: "Coast"
          },
          name: "Bay_of_Biscay",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Dublin: {
          type: "Coast",
          alligence: "Ireland",
          res: 0,
          pop: 0,
          muster: 1,
          borders: {
            Irish_Sea: "Coast"
          },
          name: "Dublin",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Irminger_Sea: {
          type: "Sea",
          borders: {
            North_Atlantic_Ocean: "Ocean",
            Irish_Sea: "Sea",
            Iceland: "Coast",
            Greenland_Sea: "Sea"
          },
          name: "Irminger_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Iceland: {
          type: "Coast",
          alligence: "Denmark",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Irminger_Sea: "Coast",
            Greenland_Sea: "Coast",
            Norwegian_Sea: "Coast",
            Irish_Sea: "Coast"
          },
          name: "Iceland",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Greenland_Sea: {
          type: "Sea",
          borders: {
            Irminger_Sea: "Sea",
            Norwegian_Sea: "Sea",
            Nordkapp_Sea: "Sea",
            Iceland: "Coast"
          },
          name: "Greenland_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Norwegian_Sea: {
          type: "Sea",
          borders: {
            Greenland_Sea: "Sea",
            Irish_Sea: "Sea",
            Nordkapp_Sea: "Sea",
            Oslo: "Coast",
            North_Sea: "Sea",
            Glasgow: "Coast",
            Iceland: "Coast"
          },
          name: "Norwegian_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Nordkapp_Sea: {
          type: "Sea",
          borders: {
            Barents_Sea: "Sea",
            Narvik: "Coast",
            Oslo: "Coast",
            Norwegian_Sea: "Sea",
            Greenland_Sea: "Sea"
          },
          name: "Nordkapp_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        North_Sea: {
          type: "Sea",
          borders: {
            Copenhagen: "Strait",
            Oslo: "Coast",
            Ruhr: "Coast",
            Norwegian_Sea: "Sea",
            Amsterdam: "Sea",
            Glasgow: "Coast",
            London: "Coast",
            English_Channel: "Sea",
            Paris: "Coast"
          },
          name: "North_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        English_Channel: {
          type: "Sea",
          borders: {
            Irish_Sea: "Sea",
            Bay_of_Biscay: "Sea",
            North_Sea: "Sea",
            London: "Coast",
            Paris: "Coast"
          },
          name: "English_Channel",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Glasgow: {
          type: "Coast",
          alligence: "Britain",
          res: 1,
          pop: 1,
          muster: 2,
          borders: {
            Norwegian_Sea: "Coast",
            North_Sea: "Coast",
            London: "Mountains",
            Irish_Sea: "Coast"
          },
          name: "Glasgow",
          units: {
            set: [155]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        London: {
          type: "Coast",
          alligence: "Britain",
          res: 1,
          pop: 3,
          muster: 3,
          borders: {
            North_Sea: "Coast",
            English_Channel: "Coast",
            Irish_Sea: "Coast",
            Glasgow: "Mountains"
          },
          name: "London",
          units: {
            set: [150, 156, 110, 159]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Paris: {
          type: "Coast",
          alligence: "France",
          res: 0,
          pop: 2,
          muster: 3,
          borders: {
            English_Channel: "Coast",
            Bay_of_Biscay: "Coast",
            Gascony: "Plains",
            Lorraine: "Plains",
            Amsterdam: "Plains",
            North_Sea: "Coast"
          },
          name: "Paris",
          units: {
            set: [148, 157]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Lorraine: {
          type: "Land",
          alligence: "France",
          res: 2,
          pop: 0,
          muster: 0,
          borders: {
            Munich: "River",
            Paris: "Plains",
            Amsterdam: "Forest",
            Gascony: "Plains",
            Marseille: "Plains"
          },
          name: "Lorraine",
          units: {
            set: [113]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Gascony: {
          type: "Coast",
          alligence: "France",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Leon: "Mountains",
            Barcelona: "Mountains",
            Bay_of_Biscay: "Coast",
            Paris: "Plains",
            Lorraine: "Plains",
            Marseille: "Plains"
          },
          name: "Gascony",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Marseille: {
          type: "Coast",
          alligence: "France",
          res: 0,
          pop: 1,
          muster: 2,
          borders: {
            Barcelona: "Mountains",
            Western_Mediterranean: "Coast",
            Gascony: "Plains",
            Lorraine: "Plains",
            Milan: "Mountains"
          },
          name: "Marseille",
          units: {
            set: [152]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Western_Mediterranean: {
          type: "Sea",
          borders: {
            Gibraltar: "Strait",
            Algiers: "Coast",
            Barcelona: "Coast",
            Tunisia: "Coast",
            Sardinia: "Coast",
            Tyrrhenian_Sea: "Sea",
            Milan: "Coast",
            Marseille: "Coast"
          },
          name: "Western_Mediterranean",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Sardinia: {
          type: "Coast",
          alligence: "Italy",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Western_Mediterranean: "Coast",
            Tyrrhenian_Sea: "Coast"
          },
          name: "Sardinia",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Tyrrhenian_Sea: {
          type: "Sea",
          borders: {
            Western_Mediterranean: "Sea",
            Sardinia: "Coast",
            Malta: "Strait",
            Sicily: "Strait",
            Rome: "Coast",
            Milan: "Coast"
          },
          name: "Tyrrhenian_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Malta: {
          type: "Coast",
          alligence: "Malta",
          res: 0,
          pop: 0,
          muster: 1,
          borders: {
            Tunisia: "Strait",
            Sfax: "Strait",
            Tyrrhenian_Sea: "Strait",
            Central_Mediterranean: "Strait",
            Sicily: "Strait"
          },
          name: "Malta",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Sicily: {
          type: "Coast",
          alligence: "Italy",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Malta: "Strait",
            Tyrrhenian_Sea: "Strait",
            Central_Mediterranean: "Strait",
            Rome: "Strait",
            Taranto: "Strait"
          },
          name: "Sicily",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Central_Mediterranean: {
          type: "Sea",
          borders: {
            Malta: "Strait",
            Sicily: "Strait",
            Taranto: "Coast",
            Adriatic_Sea: "Sea",
            Tripoli: "Coast",
            Cyrenaica: "Coast",
            Albania: "Coast",
            Eastern_Mediterranean: "Sea",
            Aegean_Sea: "Sea",
            Athens: "Coast",
            Crete: "Coast"
          },
          name: "Central_Mediterranean",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Adriatic_Sea: {
          type: "Sea",
          borders: {
            Central_Mediterranean: "Sea",
            Venice: "Sea",
            Taranto: "Sea",
            Croatia: "Coast",
            Albania: "Coast"
          },
          name: "Adriatic_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Milan: {
          type: "Coast",
          alligence: "Italy",
          res: 1,
          pop: 1,
          muster: 2,
          borders: {
            Tyrrhenian_Sea: "Coast",
            Rome: "Mountains",
            Western_Mediterranean: "Coast",
            Venice: "Plains",
            Marseille: "Mountains"
          },
          name: "Milan",
          units: {
            set: [115, 126]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Rome: {
          type: "Coast",
          alligence: "Italy",
          res: 0,
          pop: 2,
          muster: 3,
          borders: {
            Sicily: "Strait",
            Tyrrhenian_Sea: "Coast",
            Milan: "Mountains",
            Venice: "Mountains",
            Taranto: "Mountains"
          },
          name: "Rome",
          units: {
            set: [124, 117, 118, 127]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Venice: {
          type: "Coast",
          alligence: "Italy",
          res: 1,
          pop: 0,
          muster: 0,
          borders: {
            Milan: "Plains",
            Rome: "Mountains",
            Taranto: "Mountains",
            Adriatic_Sea: "Sea",
            Vienna: "Mountains",
            Croatia: "Mountains"
          },
          name: "Venice",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Taranto: {
          type: "Coast",
          alligence: "Italy",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Sicily: "Strait",
            Rome: "Mountains",
            Venice: "Mountains",
            Central_Mediterranean: "Coast",
            Adriatic_Sea: "Sea"
          },
          name: "Taranto",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Tripoli: {
          type: "Coast",
          alligence: "Libya",
          res: 0,
          pop: 1,
          muster: 2,
          borders: {
            Sfax: "Mountains",
            Central_Mediterranean: "Coast",
            Cyrenaica: "Plains"
          },
          name: "Tripoli",
          units: {
            set: [134, 119]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Cyrenaica: {
          type: "Coast",
          alligence: "Libya",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Central_Mediterranean: "Coast",
            Tripoli: "Plains",
            Eastern_Mediterranean: "Coast",
            Egypt: "Plains"
          },
          name: "Cyrenaica",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Amsterdam: {
          type: "Coast",
          alligence: "Low_Countries",
          res: 0,
          pop: 1,
          muster: 2,
          borders: {
            Ruhr: "River",
            Munich: "River",
            North_Sea: "Sea",
            Paris: "Plains",
            Lorraine: "Forest"
          },
          name: "Amsterdam",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Vienna: {
          type: "Land",
          alligence: "Austria",
          res: 0,
          pop: 1,
          muster: 2,
          borders: {
            Prague: "Plains",
            Munich: "Plains",
            Venice: "Mountains",
            Croatia: "Mountains",
            Budapest: "Plains"
          },
          name: "Vienna",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Munich: {
          type: "Land",
          alligence: "Germany",
          res: 0,
          pop: 1,
          muster: 2,
          borders: {
            Berlin: "Plains",
            Ruhr: "Plains",
            Prague: "Forest",
            Vienna: "Plains",
            Amsterdam: "River",
            Lorraine: "River"
          },
          name: "Munich",
          units: {
            set: [130, 123]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Ruhr: {
          type: "Coast",
          alligence: "Germany",
          res: 3,
          pop: 2,
          muster: 3,
          borders: {
            Copenhagen: "Strait",
            Baltic_Sea: "Coast",
            North_Sea: "Coast",
            Berlin: "Plains",
            Munich: "Plains",
            Amsterdam: "River"
          },
          name: "Ruhr",
          units: {
            set: [114, 131, 125, 135]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Berlin: {
          type: "Coast",
          alligence: "Germany",
          res: 1,
          pop: 3,
          muster: 3,
          borders: {
            Baltic_Sea: "Coast",
            Warsaw: "River",
            Ruhr: "Plains",
            Prague: "Forest",
            Munich: "Plains"
          },
          name: "Berlin",
          units: {
            set: [128, 129, 132, 116, 133, 122]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Copenhagen: {
          type: "Coast",
          alligence: "Denmark",
          res: 1,
          pop: 0,
          muster: 1,
          borders: {
            Stockholm: "Strait",
            Baltic_Sea: "Strait",
            Oslo: "Strait",
            North_Sea: "Strait",
            Ruhr: "Strait"
          },
          name: "Copenhagen",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Oslo: {
          type: "Coast",
          alligence: "Norway",
          res: 1,
          pop: 0,
          muster: 1,
          borders: {
            Gallivare: "Mountains",
            Stockholm: "Forest",
            Narvik: "Mountains",
            Nordkapp_Sea: "Coast",
            Norwegian_Sea: "Coast",
            Copenhagen: "Strait",
            North_Sea: "Coast"
          },
          name: "Oslo",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Narvik: {
          type: "Coast",
          alligence: "Norway",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Petsamo: "Mountains",
            Barents_Sea: "Coast",
            Gallivare: "Mountains",
            Oslo: "Mountains",
            Nordkapp_Sea: "Coast"
          },
          name: "Narvik",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Gallivare: {
          type: "Coast",
          alligence: "Sweden",
          res: 1,
          pop: 0,
          muster: 0,
          borders: {
            Helsinki: "Forest",
            Petsamo: "Forest",
            Narvik: "Mountains",
            Oslo: "Mountains",
            Stockholm: "Forest",
            Gulf_of_Bothnia: "Coast"
          },
          name: "Gallivare",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Stockholm: {
          type: "Coast",
          alligence: "Sweden",
          res: 1,
          pop: 1,
          muster: 2,
          borders: {
            Gallivare: "Forest",
            Gulf_of_Bothnia: "Coast",
            Baltic_Sea: "Coast",
            Oslo: "Forest",
            Copenhagen: "Strait"
          },
          name: "Stockholm",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Petsamo: {
          type: "Land",
          alligence: "Finland",
          res: 1,
          pop: 0,
          muster: 0,
          borders: {
            Murmansk: "Forest",
            Helsinki: "Forest",
            Narvik: "Mountains",
            Gallivare: "Forest"
          },
          name: "Petsamo",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Helsinki: {
          type: "Coast",
          alligence: "Finland",
          res: 0,
          pop: 0,
          muster: 1,
          borders: {
            Leningrad: "Forest",
            Murmansk: "Forest",
            Petsamo: "Forest",
            Gulf_of_Bothnia: "Coast",
            Gallivare: "Forest"
          },
          name: "Helsinki",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Barents_Sea: {
          type: "Sea",
          borders: {
            Murmansk: "Coast",
            White_Sea: "Sea",
            Narvik: "Coast",
            Nordkapp_Sea: "Sea"
          },
          name: "Barents_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        White_Sea: {
          type: "Sea",
          borders: {
            Archangel: "Coast",
            Murmansk: "Coast",
            Barents_Sea: "Sea"
          },
          name: "White_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Gulf_of_Bothnia: {
          type: "Sea",
          borders: {
            Helsinki: "Coast",
            Leningrad: "Coast",
            Gallivare: "Coast",
            Stockholm: "Coast",
            Riga: "Coast",
            Baltic_Sea: "Sea"
          },
          name: "Gulf_of_Bothnia",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Baltic_Sea: {
          type: "Sea",
          borders: {
            Gulf_of_Bothnia: "Sea",
            Riga: "Coast",
            Stockholm: "Coast",
            Konigsberg: "Coast",
            Warsaw: "Coast",
            Copenhagen: "Strait",
            Berlin: "Coast",
            Ruhr: "Coast"
          },
          name: "Baltic_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Riga: {
          type: "Coast",
          alligence: "Baltic_States",
          res: 0,
          pop: 0,
          muster: 1,
          borders: {
            Leningrad: "Forest",
            Gulf_of_Bothnia: "Coast",
            Baltic_Sea: "Coast",
            Belorussia: "Plains",
            Vilna: "Plains",
            Konigsberg: "Plains"
          },
          name: "Riga",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Konigsberg: {
          type: "Coast",
          alligence: "Germany",
          res: 0,
          pop: 1,
          muster: 2,
          borders: {
            Riga: "Plains",
            Vilna: "Forest",
            Baltic_Sea: "Coast",
            Warsaw: "River"
          },
          name: "Konigsberg",
          units: {
            set: [120, 121]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Warsaw: {
          type: "Coast",
          alligence: "Poland",
          res: 1,
          pop: 1,
          muster: 3,
          borders: {
            Baltic_Sea: "Coast",
            Konigsberg: "River",
            Vilna: "River",
            Lvov: "River",
            Berlin: "River",
            Prague: "Forest"
          },
          name: "Warsaw",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Vilna: {
          type: "Land",
          alligence: "Poland",
          res: 0,
          pop: 0,
          muster: 1,
          borders: {
            Belorussia: "Plains",
            Riga: "Plains",
            Konigsberg: "Forest",
            Lvov: "Plains",
            Warsaw: "River"
          },
          name: "Vilna",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Lvov: {
          type: "Land",
          alligence: "Poland",
          res: 0,
          pop: 1,
          muster: 2,
          borders: {
            Vilna: "Plains",
            Kiev: "Plains",
            Odessa: "Plains",
            Warsaw: "River",
            Prague: "Mountains",
            Budapest: "Mountains",
            Bucharest: "River"
          },
          name: "Lvov",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Prague: {
          type: "Land",
          alligence: "Czechoslovakia",
          res: 0,
          pop: 1,
          muster: 2,
          borders: {
            Lvov: "Mountains",
            Warsaw: "Forest",
            Berlin: "Forest",
            Munich: "Forest",
            Budapest: "Mountains",
            Vienna: "Plains"
          },
          name: "Prague",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Budapest: {
          type: "Land",
          alligence: "Hungary",
          res: 1,
          pop: 1,
          muster: 2,
          borders: {
            Lvov: "Mountains",
            Prague: "Mountains",
            Croatia: "Plains",
            Belgrade: "Plains",
            Vienna: "Plains",
            Bucharest: "Mountains"
          },
          name: "Budapest",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Croatia: {
          type: "Coast",
          alligence: "Yugoslavia",
          res: 1,
          pop: 0,
          muster: 0,
          borders: {
            Adriatic_Sea: "Coast",
            Vienna: "Mountains",
            Venice: "Mountains",
            Budapest: "Plains",
            Belgrade: "Forest",
            Albania: "Mountains"
          },
          name: "Croatia",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Belgrade: {
          type: "Land",
          alligence: "Yugoslavia",
          res: 0,
          pop: 0,
          muster: 1,
          borders: {
            Croatia: "Forest",
            Budapest: "Plains",
            Albania: "Mountains",
            Bucharest: "River",
            Sofia: "Mountains",
            Athens: "Mountains"
          },
          name: "Belgrade",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Albania: {
          type: "Coast",
          alligence: "Albania",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Adriatic_Sea: "Coast",
            Central_Mediterranean: "Coast",
            Croatia: "Mountains",
            Belgrade: "Mountains",
            Athens: "Mountains"
          },
          name: "Albania",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Athens: {
          type: "Coast",
          alligence: "Greece",
          res: 1,
          pop: 0,
          muster: 1,
          borders: {
            Central_Mediterranean: "Coast",
            Istanbul: "Strait",
            Sofia: "Mountains",
            Belgrade: "Mountains",
            Albania: "Mountains",
            Aegean_Sea: "Coast"
          },
          name: "Athens",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Bucharest: {
          type: "Coast",
          alligence: "Rumania",
          res: 2,
          pop: 1,
          muster: 2,
          borders: {
            Lvov: "River",
            Odessa: "River",
            Budapest: "Mountains",
            Belgrade: "River",
            Sofia: "River",
            Western_Black_Sea: "Coast"
          },
          name: "Bucharest",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Sofia: {
          type: "Coast",
          alligence: "Bulgaria",
          res: 1,
          pop: 0,
          muster: 1,
          borders: {
            Belgrade: "Mountains",
            Bucharest: "River",
            Western_Black_Sea: "Coast",
            Istanbul: "Strait",
            Athens: "Mountains"
          },
          name: "Sofia",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Aegean_Sea: {
          type: "Sea",
          borders: {
            Central_Mediterranean: "Sea",
            Crete: "Coast",
            Eastern_Mediterranean: "Sea",
            Izmir: "Coast",
            Istanbul: "Strait",
            Athens: "Coast"
          },
          name: "Aegean_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Crete: {
          type: "Sea",
          borders: {
            Central_Mediterranean: "Coast",
            Aegean_Sea: "Coast",
            Eastern_Mediterranean: "Coast"
          },
          name: "Crete",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Eastern_Mediterranean: {
          type: "Sea",
          borders: {
            Central_Mediterranean: "Sea",
            Cyrenaica: "Coast",
            Aegean_Sea: "Sea",
            Crete: "Coast",
            Suez: "Strait",
            Jordan: "Coast",
            Damascus: "Coast",
            Egypt: "Coast",
            Adana: "Coast",
            Izmir: "Coast"
          },
          name: "Eastern_Mediterranean",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Egypt: {
          type: "Coast",
          alligence: "Middle_East",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Cyrenaica: "Plains",
            Suez: "Strait",
            Eastern_Mediterranean: "Coast"
          },
          name: "Egypt",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Suez: {
          type: "Coast",
          alligence: "Middle_East",
          res: 0,
          pop: 1,
          muster: 2,
          borders: {
            Egypt: "Strait",
            Eastern_Mediterranean: "Strait",
            Sudan: "Strait",
            Jordan: "Strait",
            Red_Sea: "Strait"
          },
          name: "Suez",
          units: {
            set: [153]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Sudan: {
          type: "Coast",
          alligence: "Middle_East",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Suez: "Strait",
            Red_Sea: "Coast"
          },
          name: "Sudan",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Jordan: {
          type: "Coast",
          alligence: "Middle_East",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Suez: "Strait",
            Eastern_Mediterranean: "Coast",
            Damascus: "Plains",
            Iraq: "Plains"
          },
          name: "Jordan",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Iraq: {
          type: "Coast",
          alligence: "Middle_East",
          res: 1,
          res_afr: 1,
          pop: 0,
          muster: 0,
          borders: {
            Persian_Gulf: "Coast",
            Damascus: "Plains",
            Jordan: "Plains",
            Abadan: "Plains"
          },
          name: "Iraq",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Damascus: {
          type: "Coast",
          alligence: "Syria",
          res: 0,
          pop: 0,
          muster: 1,
          borders: {
            Eastern_Mediterranean: "Coast",
            Jordan: "Plains",
            Iraq: "Plains",
            Adana: "Plains"
          },
          name: "Damascus",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Red_Sea: {
          type: "Sea",
          borders: {
            Suez: "Strait",
            Sudan: "Coast",
            Gulf_of_Aden: "Sea"
          },
          name: "Red_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Gulf_of_Aden: {
          type: "Sea",
          borders: {
            Red_Sea: "Sea",
            Arabian_Sea: "Sea",
            West_Indian_Ocean: "Ocean"
          },
          name: "Gulf_of_Aden",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        West_Indian_Ocean: {
          type: "Sea",
          borders: {
            Gulf_of_Aden: "Ocean",
            Arabian_Sea: "Ocean",
            East_Indian_Ocean: "Ocean",
            South_Atlantic_Ocean: "Ocean-Africa"
          },
          name: "West_Indian_Ocean",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        East_Indian_Ocean: {
          type: "Sea",
          borders: {
            Arabian_Sea: "Ocean",
            West_Indian_Ocean: "Ocean",
            Bombay: "Coast",
            Delhi: "Coast"
          },
          name: "East_Indian_Ocean",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Arabian_Sea: {
          type: "Sea",
          borders: {
            Gulf_of_Aden: "Sea",
            West_Indian_Ocean: "Ocean",
            Persian_Gulf: "Sea",
            East_Indian_Ocean: "Ocean",
            Bombay: "Coast",
            Karachi: "Coast",
            Shiraz: "Coast"
          },
          name: "Arabian_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Persian_Gulf: {
          type: "Sea",
          borders: {
            Arabian_Sea: "Sea",
            Shiraz: "Coast",
            Abadan: "Coast",
            Iraq: "Coast"
          },
          name: "Persian_Gulf",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Bombay: {
          type: "Coast",
          alligence: "India",
          res: 1,
          res_afr: 1,
          pop: 1,
          muster: 2,
          borders: {
            Arabian_Sea: "Coast",
            East_Indian_Ocean: "Coast",
            Karachi: "Plains",
            Delhi: "Plains"
          },
          name: "Bombay",
          units: {
            set: [149]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Karachi: {
          type: "Coast",
          alligence: "India",
          res: 0,
          res_afr: 0,
          pop: 0,
          muster: 0,
          borders: {
            Arabian_Sea: "Coast",
            Bombay: "Plains",
            Delhi: "Plains",
            Kabul: "Mountains",
            Shiraz: "Mountains"
          },
          name: "Karachi",
          units: {
            set: [112]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Delhi: {
          type: "Coast",
          alligence: "India",
          res: 1,
          res_afr: 1,
          pop: 2,
          muster: 3,
          borders: {
            East_Indian_Ocean: "Coast",
            Bombay: "Plains",
            Karachi: "Plains"
          },
          name: "Delhi",
          units: {
            set: [154, 158]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Kabul: {
          type: "Land",
          alligence: "Afghanistan",
          res: 0,
          pop: 0,
          muster: 1,
          borders: {
            Karachi: "Mountains",
            Shiraz: "Mountains",
            Tehran: "Mountains",
            Turkmenistan: "Mountains"
          },
          name: "Kabul",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Shiraz: {
          type: "Coast",
          alligence: "Persia",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Persian_Gulf: "Coast",
            Arabian_Sea: "Coast",
            Karachi: "Mountains",
            Kabul: "Mountains",
            Abadan: "Mountains",
            Tehran: "Mountains"
          },
          name: "Shiraz",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Tehran: {
          type: "Coast",
          alligence: "Persia",
          res: 0,
          pop: 1,
          muster: 2,
          borders: {
            Shiraz: "Mountains",
            Abadan: "Mountains",
            Kabul: "Mountains",
            Tabriz: "Mountains",
            Turkmenistan: "Mountains",
            Southern_Caspian_Sea: "Coast"
          },
          name: "Tehran",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Abadan: {
          type: "Coast",
          alligence: "Persia",
          res: 2,
          res_afr: 2,
          pop: 0,
          muster: 0,
          borders: {
            Persian_Gulf: "Coast",
            Shiraz: "Mountains",
            Iraq: "Plains",
            Tehran: "Mountains",
            Tabriz: "Mountains"
          },
          name: "Abadan",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Tabriz: {
          type: "Coast",
          alligence: "Persia",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Abadan: "Mountains",
            Tehran: "Mountains",
            Southern_Caspian_Sea: "Coast",
            Baku: "Mountains",
            Kars: "Mountains",
            Georgia: "Mountains"
          },
          name: "Tabriz",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Kars: {
          type: "Coast",
          alligence: "Turkey",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Tabriz: "Mountains",
            Georgia: "Mountains",
            Eastern_Black_Sea: "Coast",
            Sinope: "Mountains",
            Adana: "Mountains"
          },
          name: "Kars",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Sinope: {
          type: "Coast",
          alligence: "Turkey",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Kars: "Mountains",
            Adana: "Mountains",
            Ankara: "Mountains",
            Eastern_Black_Sea: "Coast"
          },
          name: "Sinope",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Adana: {
          type: "Coast",
          alligence: "Turkey",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Kars: "Mountains",
            Sinope: "Mountains",
            Damascus: "Plains",
            Eastern_Mediterranean: "Coast",
            Ankara: "Mountains",
            Izmir: "Mountains"
          },
          name: "Adana",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Ankara: {
          type: "Coast",
          alligence: "Turkey",
          res: 0,
          pop: 1,
          muster: 3,
          borders: {
            Sinope: "Mountains",
            Adana: "Mountains",
            Izmir: "Mountains",
            Istanbul: "Strait",
            Western_Black_Sea: "Coast"
          },
          name: "Ankara",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Izmir: {
          type: "Coast",
          alligence: "Turkey",
          res: 1,
          pop: 0,
          muster: 1,
          borders: {
            Adana: "Mountains",
            Ankara: "Mountains",
            Eastern_Mediterranean: "Coast",
            Aegean_Sea: "Coast",
            Istanbul: "Strait"
          },
          name: "Izmir",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Istanbul: {
          type: "Coast",
          alligence: "Turkey",
          res: 0,
          pop: 1,
          muster: 2,
          borders: {
            Izmir: "Strait",
            Ankara: "Strait",
            Aegean_Sea: "Strait",
            Western_Black_Sea: "Strait",
            Sofia: "Strait",
            Athens: "Strait"
          },
          name: "Istanbul",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Southern_Caspian_Sea: {
          type: "Sea",
          borders: {
            Tehran: "Coast",
            Tabriz: "Coast",
            Turkmenistan: "Coast",
            Baku: "Coast",
            Northern_Caspian_Sea: "Sea"
          },
          name: "Southern_Caspian_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Northern_Caspian_Sea: {
          type: "Sea",
          borders: {
            Southern_Caspian_Sea: "Sea",
            Turkmenistan: "Coast",
            Baku: "Coast",
            Kazakhstan: "Coast",
            Grozny: "Coast",
            Ufa: "Coast"
          },
          name: "Northern_Caspian_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Eastern_Black_Sea: {
          type: "Sea",
          borders: {
            Kars: "Coast",
            Georgia: "Coast",
            Sinope: "Coast",
            Western_Black_Sea: "Sea",
            Sevastopol: "Strait",
            Kuban: "Coast"
          },
          name: "Eastern_Black_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Western_Black_Sea: {
          type: "Sea",
          borders: {
            Istanbul: "Strait",
            Eastern_Black_Sea: "Sea",
            Ankara: "Coast",
            Sevastopol: "Strait",
            Odessa: "Coast",
            Bucharest: "Coast",
            Sofia: "Coast"
          },
          name: "Western_Black_Sea",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Sea_of_Azov: {
          type: "Sea",
          borders: {
            Sevastopol: "Strait",
            Kuban: "Coast",
            Kharkov: "Coast"
          },
          name: "Sea_of_Azov",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Archangel: {
          type: "Coast",
          alligence: "USSR",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Vologda: "Forest",
            Leningrad: "Forest",
            Murmansk: "Forest",
            White_Sea: "Coast"
          },
          name: "Archangel",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Vologda: {
          type: "Land",
          alligence: "USSR",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Moscow: "Forest",
            Gorky: "Forest",
            Leningrad: "Forest",
            Archangel: "Forest"
          },
          name: "Vologda",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Gorky: {
          type: "Land",
          alligence: "USSR",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Moscow: "River",
            Penza: "River",
            Perm: "Forest",
            Vologda: "Forest"
          },
          name: "Gorky",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Perm: {
          type: "Land",
          alligence: "USSR",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Penza: "River",
            Ufa: "Plains",
            Urals: "Mountains",
            Gorky: "Forest"
          },
          name: "Perm",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Urals: {
          type: "Land",
          alligence: "USSR",
          res: 1,
          pop: 1,
          muster: 2,
          borders: {
            Kazakhstan: "Mountains",
            Western_Siberia: "Plains",
            Ufa: "Mountains",
            Perm: "Mountains"
          },
          name: "Urals",
          units: {
            set: [141]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Western_Siberia: {
          type: "Land",
          alligence: "USSR",
          res: 1,
          pop: 0,
          muster: 0,
          borders: {
            Kazakhstan: "Plains",
            Urals: "Plains"
          },
          name: "Western_Siberia",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Leningrad: {
          type: "Coast",
          alligence: "USSR",
          res: 0,
          pop: 2,
          muster: 3,
          borders: {
            Bryansk: "Forest",
            Belorussia: "Forest",
            Moscow: "Forest",
            Vologda: "Forest",
            Archangel: "Forest",
            Murmansk: "Forest",
            Helsinki: "Forest",
            Gulf_of_Bothnia: "Coast",
            Riga: "Forest"
          },
          name: "Leningrad",
          units: {
            set: [136, 139]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Moscow: {
          type: "Land",
          alligence: "USSR",
          res: 0,
          pop: 3,
          muster: 3,
          borders: {
            Voronezh: "Plains",
            Penza: "Plains",
            Bryansk: "Forest",
            Leningrad: "Forest",
            Gorky: "River",
            Vologda: "Forest"
          },
          name: "Moscow",
          units: {
            set: [144, 145, 146]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Murmansk: {
          type: "Coast",
          alligence: "USSR",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Archangel: "Forest",
            Leningrad: "Forest",
            White_Sea: "Coast",
            Barents_Sea: "Coast",
            Helsinki: "Forest",
            Petsamo: "Forest"
          },
          name: "Murmansk",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Penza: {
          type: "Land",
          alligence: "USSR",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Voronezh: "Forest",
            Ufa: "River",
            Moscow: "Plains",
            Gorky: "River",
            Perm: "River"
          },
          name: "Penza",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Ufa: {
          type: "Coast",
          alligence: "USSR",
          res: 1,
          pop: 0,
          muster: 0,
          borders: {
            Grozny: "River",
            Stalingrad: "River",
            Northern_Caspian_Sea: "Coast",
            Kazakhstan: "Plains",
            Voronezh: "River",
            Penza: "River",
            Perm: "Plains",
            Urals: "Mountains"
          },
          name: "Ufa",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Kazakhstan: {
          type: "Coast",
          alligence: "USSR",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Turkmenistan: "Plains",
            Northern_Caspian_Sea: "Coast",
            Ufa: "Plains",
            Western_Siberia: "Plains",
            Urals: "Mountains"
          },
          name: "Kazakhstan",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Belorussia: {
          type: "Land",
          alligence: "USSR",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Bryansk: "Plains",
            Leningrad: "Forest",
            Riga: "Plains",
            Vilna: "Plains"
          },
          name: "Belorussia",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Bryansk: {
          type: "Land",
          alligence: "USSR",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Kharkov: "Plains",
            Voronezh: "Plains",
            Belorussia: "Plains",
            Moscow: "Forest",
            Kiev: "River",
            Leningrad: "Forest"
          },
          name: "Bryansk",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Voronezh: {
          type: "Land",
          alligence: "USSR",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Stalingrad: "Plains",
            Kharkov: "River",
            Bryansk: "Plains",
            Ufa: "River",
            Moscow: "Plains",
            Penza: "Forest"
          },
          name: "Voronezh",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Stalingrad: {
          type: "Land",
          alligence: "USSR",
          res: 0,
          pop: 1,
          muster: 2,
          borders: {
            Kuban: "Plains",
            Grozny: "Plains",
            Ufa: "River",
            Voronezh: "Plains",
            Kharkov: "River"
          },
          name: "Stalingrad",
          units: {
            set: [140]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Grozny: {
          type: "Coast",
          alligence: "USSR",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Baku: "Mountains",
            Northern_Caspian_Sea: "Coast",
            Georgia: "Mountains",
            Kuban: "Plains",
            Stalingrad: "Plains",
            Ufa: "River"
          },
          name: "Grozny",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Turkmenistan: {
          type: "Coast",
          alligence: "USSR",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Kabul: "Mountains",
            Tehran: "Mountains",
            Southern_Caspian_Sea: "Coast",
            Northern_Caspian_Sea: "Coast",
            Kazakhstan: "Plains"
          },
          name: "Turkmenistan",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Kuban: {
          type: "Coast",
          alligence: "USSR",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Georgia: "Mountains",
            Grozny: "Plains",
            Eastern_Black_Sea: "Coast",
            Sea_of_Azov: "Coast",
            Sevastopol: "Strait",
            Kharkov: "River",
            Stalingrad: "Plains"
          },
          name: "Kuban",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Georgia: {
          type: "Coast",
          alligence: "USSR",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Baku: "Plains",
            Tabriz: "Mountains",
            Grozny: "Mountains",
            Kuban: "Mountains",
            Kars: "Mountains",
            Eastern_Black_Sea: "Coast"
          },
          name: "Georgia",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Baku: {
          type: "Coast",
          alligence: "USSR",
          res: 3,
          res_afr: 1,
          pop: 2,
          muster: 3,
          borders: {
            Tabriz: "Mountains",
            Southern_Caspian_Sea: "Coast",
            Georgia: "Plains",
            Northern_Caspian_Sea: "Coast",
            Grozny: "Mountains"
          },
          name: "Baku",
          units: {
            set: [138, 143]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Kiev: {
          type: "Land",
          alligence: "USSR",
          res: 1,
          pop: 1,
          muster: 2,
          borders: {
            Odessa: "Plains",
            Kharkov: "River",
            Bryansk: "River",
            Lvov: "Plains"
          },
          name: "Kiev",
          units: {
            set: [142]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Kharkov: {
          type: "Coast",
          alligence: "USSR",
          res: 1,
          pop: 1,
          muster: 2,
          borders: {
            Sea_of_Azov: "Coast",
            Sevastopol: "Strait",
            Odessa: "River",
            Kiev: "River",
            Kuban: "River",
            Stalingrad: "River",
            Voronezh: "River",
            Bryansk: "Plains"
          },
          name: "Kharkov",
          units: {
            set: [147]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Odessa: {
          type: "Coast",
          alligence: "USSR",
          res: 2,
          pop: 1,
          muster: 2,
          borders: {
            Kharkov: "River",
            Western_Black_Sea: "Coast",
            Sevastopol: "Strait",
            Kiev: "Plains",
            Lvov: "Plains",
            Bucharest: "River"
          },
          name: "Odessa",
          units: {
            set: [137]
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        Sevastopol: {
          type: "Coast",
          alligence: "USSR",
          res: 0,
          pop: 0,
          muster: 0,
          borders: {
            Western_Black_Sea: "Strait",
            Eastern_Black_Sea: "Strait",
            Sea_of_Azov: "Strait",
            Kuban: "Strait",
            Kharkov: "Strait",
            Odessa: "Strait"
          },
          name: "Sevastopol",
          units: {
            set: []
          },
          obj_type: "tile",
          visible: {
            set: ["USSR", "Axis", "West"]
          }
        },
        action_22: {
          top: "Low_Countries",
          bottom: "Denmark",
          season: "Summer",
          priority: "G",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_22"
        },
        action_23: {
          top: "Denmark",
          bottom: "Turkey",
          season: "Summer",
          priority: "H",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_23"
        },
        action_19: {
          top: "Latin_America",
          bottom: "USA",
          season: "Summer",
          priority: "D",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_19"
        },
        action_13: {
          top: "Romania",
          bottom: "USA",
          season: "Spring",
          priority: "M",
          value: 4,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_13"
        },
        action_47: {
          top: "Finland",
          bottom: "Norway",
          season: "Fall",
          priority: "G",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_47"
        },
        action_1: {
          top: "Yugoslavia",
          bottom: "Spain",
          season: "Spring",
          priority: "A",
          value: 4,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_1"
        },
        action_8: {
          top: "Austria",
          bottom: "Poland",
          season: "Spring",
          priority: "H",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_8"
        },
        action_7: {
          top: "Hungary",
          bottom: "Yugoslavia",
          season: "Spring",
          priority: "G",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_7"
        },
        action_46: {
          top: "Greece",
          bottom: "Latin_America",
          season: "Fall",
          priority: "F",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_46"
        },
        action_26: {
          top: "Latin_America",
          bottom: "Greece",
          season: "Summer",
          priority: "K",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_26"
        },
        action_33: {
          top: "Baltic_States",
          bottom: "Finland",
          season: "Summer",
          priority: "S",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_33"
        },
        action_6: {
          top: "Rumania",
          bottom: "Spain",
          season: "Spring",
          priority: "F",
          value: 5,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_6"
        },
        action_28: {
          top: "Yugoslavia",
          bottom: "Norway",
          season: "Summer",
          priority: "M",
          value: 10,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_28"
        },
        action_31: {
          top: "Austria",
          bottom: "USA",
          season: "Summer",
          priority: "Q",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_31"
        },
        action_21: {
          top: "Rumania",
          bottom: "Yugoslavia",
          season: "Summer",
          priority: "F",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_21"
        },
        action_18: {
          top: "Hungary",
          bottom: "Poland",
          season: "Summer",
          priority: "C",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_18"
        },
        action_34: {
          top: "Hungary",
          bottom: "Yugoslavia",
          season: "Summer",
          priority: "T",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_34"
        },
        action_3: {
          top: "USA",
          bottom: "Latin_America",
          season: "Spring",
          priority: "C",
          value: 4,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_3"
        },
        action_5: {
          top: "Czechoslovakia",
          bottom: "Austria",
          season: "Spring",
          priority: "E",
          value: 5,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_5"
        },
        action_4: {
          top: "Portugal",
          bottom: "Greece",
          season: "Spring",
          priority: "D",
          value: 5,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_4"
        },
        action_43: {
          top: "Low_Countries",
          bottom: "Afghanistan",
          season: "Fall",
          priority: "C",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_43"
        },
        action_30: {
          top: "Hungary",
          bottom: "Greece",
          season: "Summer",
          priority: "P",
          value: 10,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_30"
        },
        action_10: {
          top: "Bulgaria",
          bottom: "Rumania",
          season: "Spring",
          priority: "J",
          value: 5,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_10"
        },
        action_50: {
          top: "Greece",
          bottom: "Turkey",
          season: "Fall",
          priority: "J",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_50"
        },
        action_55: {
          top: "Persia",
          bottom: "Turkey",
          season: "Fall",
          priority: "P",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_55"
        },
        action_49: {
          top: "Low_Countries",
          bottom: "Denmark",
          season: "Fall",
          priority: "I",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_49"
        },
        action_51: {
          top: "Baltic_States",
          bottom: "Sweden",
          season: "Fall",
          priority: "K",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_51"
        },
        action_53: {
          top: "Bulgaria",
          bottom: "Greece",
          season: "Fall",
          priority: "M",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_53"
        },
        action_29: {
          top: "Czechoslovakia",
          bottom: "Yugoslavia",
          season: "Summer",
          priority: "N",
          value: 10,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_29"
        },
        action_37: {
          top: "Bulgaria",
          bottom: "Austria",
          season: "Summer",
          priority: "W",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_37"
        },
        action_14: {
          top: "Portugal",
          bottom: "Hungary",
          season: "Spring",
          priority: "N",
          value: 4,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_14"
        },
        action_32: {
          top: "Czechoslovakia",
          bottom: "Bulgaria",
          season: "Summer",
          priority: "R",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_32"
        },
        action_27: {
          top: "Finland",
          bottom: "Low_Countries",
          season: "Summer",
          priority: "L",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_27"
        },
        action_25: {
          top: "USA",
          bottom: "Sweden",
          season: "Summer",
          priority: "J",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_25"
        },
        action_41: {
          top: "Afghanistan",
          bottom: "Hungary",
          season: "Fall",
          priority: "A",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_41"
        },
        action_11: {
          top: "Austria",
          bottom: "Afghanistan",
          season: "Spring",
          priority: "K",
          value: 5,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_11"
        },
        action_54: {
          top: "Finland",
          bottom: "Czechoslovakia",
          season: "Fall",
          priority: "N",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_54"
        },
        action_16: {
          top: "Czechoslovakia",
          bottom: "Spain",
          season: "Summer",
          priority: "A",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_16"
        },
        action_39: {
          top: "Rumania",
          bottom: "Persia",
          season: "Summer",
          priority: "Y",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_39"
        },
        action_40: {
          top: "Spain",
          bottom: "Poland",
          season: "Summer",
          priority: "Z",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_40"
        },
        action_52: {
          top: "Norway",
          bottom: "Sweden",
          season: "Fall",
          priority: "L",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_52"
        },
        action_38: {
          top: "Austria",
          bottom: "Latin_America",
          season: "Summer",
          priority: "X",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_38"
        },
        action_36: {
          top: "Czechoslovakia",
          bottom: "Portugal",
          season: "Summer",
          priority: "V",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_36"
        },
        action_20: {
          wildcard: "Ties_that_Bind",
          season: "Summer",
          priority: "E",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_20"
        },
        action_9: {
          wildcard: "Ethnic_Ties",
          season: "Spring",
          priority: "I",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_9"
        },
        action_12: {
          wildcard: "Birds_of_a_Feather_1",
          season: "Spring",
          priority: "L",
          value: 5,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_12"
        },
        action_17: {
          wildcard: "Foreign_Aid",
          season: "Summer",
          priority: "B",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_17"
        },
        action_44: {
          wildcard: "Brothers_in_Arms",
          season: "Fall",
          priority: "D",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_44"
        },
        action_45: {
          wildcard: "Birds_of_a_Feather_2",
          season: "Fall",
          priority: "E",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_45"
        },
        action_35: {
          wildcard: "Isolationism",
          season: "Summer",
          priority: "U",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_35"
        },
        action_2: {
          wildcard: "Fear_&_Loathing",
          season: "Spring",
          priority: "B",
          value: 4,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_2"
        },
        action_42: {
          wildcard: "Guarantee",
          season: "Fall",
          priority: "B",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_42"
        },
        action_48: {
          wildcard: "Isolationism",
          season: "Fall",
          priority: "H",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_48"
        },
        action_24: {
          wildcard: "Versailles",
          season: "Summer",
          priority: "I",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_24"
        },
        action_15: {
          wildcard: "Intimidation",
          season: "Spring",
          priority: "P",
          value: 4,
          obj_type: "action_card",
          visible: {
            set: []
          },
          _id: "action_15"
        },
        invest_47: {
          top: "Naval_Radar",
          bottom: "Sonar",
          value: 1,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_47"
        },
        invest_44: {
          top: "Industrial_Espionage",
          bottom: "Precision_Bombsight",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_44"
        },
        invest_21: {
          top: "AirDefense_Radar",
          bottom: "Industrial_Espionage",
          value: 2,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_21"
        },
        invest_22: {
          top: "Atomic_Research_2",
          bottom: "Industrial_Espionage",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_22"
        },
        invest_49: {
          top: "AirDefense_Radar",
          bottom: "Heavy_Tanks",
          value: 2,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_49"
        },
        invest_55: {
          top: "Atomic_Research_4",
          bottom: "Jets",
          value: 4,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_55"
        },
        invest_26: {
          top: "Precision_Bombsights",
          bottom: "Industrial_Espionage",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_26"
        },
        invest_51: {
          top: "Motorized_Infantry",
          bottom: "LSTs",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_51"
        },
        invest_13: {
          top: "Jets",
          bottom: "Heavy_Bombers",
          value: 4,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_13"
        },
        invest_7: {
          top: "AirDefense_Radar",
          bottom: "Sonar",
          value: 1,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_7"
        },
        invest_25: {
          top: "Precision_Bombsights",
          bottom: "Rocket_Artillery",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_25"
        },
        invest_29: {
          top: "Precision_Bombsights",
          bottom: "Heavy_Bombers",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_29"
        },
        invest_9: {
          top: "Sonar",
          bottom: "Rocket_Arillery",
          value: 2,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_9"
        },
        invest_30: {
          top: "Motorized_Infantry",
          bottom: "LSTs",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_30"
        },
        invest_52: {
          top: "Industrial_Espionage",
          bottom: "Heavy_Bombers",
          value: 2,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_52"
        },
        invest_43: {
          top: "Jets",
          bottom: "Heavy_Tanks",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_43"
        },
        invest_18: {
          top: "Atomic_Research_1",
          bottom: "Precision_Bombsights",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_18"
        },
        invest_53: {
          top: "Atomic_Research_3",
          bottom: "Motorized_Infantry",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_53"
        },
        invest_50: {
          top: "Sonar",
          bottom: "Naval_Radar",
          value: 2,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_50"
        },
        invest_16: {
          top: "Atomic_Research_3",
          bottom: "LSTs",
          value: 4,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_16"
        },
        invest_46: {
          top: "Atomic_Research_2",
          bottom: "AirDefense_Radar",
          value: 2,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_46"
        },
        invest_10: {
          top: "Heavy_Tanks",
          bottom: "Naval_Radar",
          value: 2,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_10"
        },
        invest_28: {
          top: "Precision_Bombsights",
          bottom: "Atomic_Research_1",
          value: 2,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_28"
        },
        invest_48: {
          top: "Rocket_Artillery",
          bottom: "Heavy_Tanks",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_48"
        },
        invest_45: {
          top: "Sonar",
          bottom: "Naval_Radar",
          value: 1,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_45"
        },
        invest_1: {
          top: "Heavy_Tanks",
          bottom: "AirDefense_Radar",
          value: 2,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_1"
        },
        invest_8: {
          top: "Naval_Radar",
          bottom: "Sonar",
          value: 2,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_8"
        },
        invest_4: {
          top: "AirDefense_Radar",
          bottom: "Sonar",
          value: 1,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_4"
        },
        invest_6: {
          top: "Rocket_Artillery",
          bottom: "AirDefense_Radar",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_6"
        },
        invest_54: {
          top: "Heavy_Bombers",
          bottom: "LSTs",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_54"
        },
        invest_5: {
          top: "Sonar",
          bottom: "Naval_Radar",
          value: 1,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_5"
        },
        invest_11: {
          top: "Motorized_Infantry",
          bottom: "LSTs",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_11"
        },
        invest_23: {
          top: "Atomic_Research_1",
          bottom: "Precision_Bombsights",
          value: 2,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_23"
        },
        invest_2: {
          top: "Rocket_Artillery",
          bottom: "Heavy_Tanks",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_2"
        },
        invest_42: {
          top: "Atomic_Research_1",
          bottom: "Sonar",
          value: 2,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_42"
        },
        invest_41: {
          top: "Naval_Radar",
          bottom: "AirDefense_Radar",
          value: 1,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_41"
        },
        invest_12: {
          top: "LSTs",
          bottom: "Heavy_Bombers",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_12"
        },
        invest_17: {
          top: "Atomic_Research_4",
          bottom: "Heavy_Bombers",
          value: 4,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_17"
        },
        invest_27: {
          top: "Atomic_Research_2",
          bottom: "Motorized_Infantry",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_27"
        },
        invest_15: {
          top: "Motorized_Infantry",
          bottom: "Jets",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_15"
        },
        invest_38: {
          intelligence: "Coup",
          value: 4,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_38"
        },
        invest_39: {
          intelligence: "Spy_Ring",
          value: 2,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_39"
        },
        invest_34: {
          intelligence: "Spy_Ring",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_34"
        },
        invest_33: {
          intelligence: "Sabotage",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_33"
        },
        invest_32: {
          intelligence: "Agent",
          value: 2,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_32"
        },
        invest_40: {
          intelligence: "Code_Break",
          value: 2,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_40"
        },
        invest_37: {
          intelligence: "Agent",
          value: 1,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_37"
        },
        invest_36: {
          intelligence: "Double_Agent",
          value: 4,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_36"
        },
        invest_31: {
          intelligence: "Mole",
          value: 3,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_31"
        },
        invest_35: {
          intelligence: "Code_Break",
          value: 1,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_35"
        },
        invest_14: {
          value: 1,
          science: ["Sonar", "Naval_Radar", "Heavy_Tanks", "AirDefense_Radar", "Motorized_Infantry", "Atomic_Research_1"],
          year: 1938,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_14"
        },
        invest_24: {
          value: 3,
          science: ["LSTs", "Heavy_Tanks", "AirDefense_Radar", "Rocket_Artillery", "Precision_Bombsights", "Atomic_Research_3"],
          year: 1942,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_24"
        },
        invest_19: {
          value: 2,
          science: ["Sonar", "Naval_Radar", "Heavy_Bombers", "Rocket_Artillery", "Precision_Bombsights", "Atomic_Research_2"],
          year: 1940,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_19"
        },
        invest_3: {
          value: 1,
          science: ["Sonar", "Naval_Radar", "Heavy_Tanks", "AirDefense_Radar", "Motorized_Infantry", "Atomic_Research_1"],
          year: 1938,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_3"
        },
        invest_20: {
          value: 4,
          science: ["LSTs", "Jets", "Heavy_Bombers", "Precision_Bombsights", "Atomic_Research_3", "Atomic_Research_4"],
          year: 1944,
          obj_type: "investment_card",
          visible: {
            set: []
          },
          _id: "invest_20"
        },
        "110": {
          nationality: "Britain",
          tile: "London",
          type: "Fleet",
          cv: 4,
          obj_type: "unit",
          visible: {
            set: ["West"]
          },
          _id: 110
        },
        "111": {
          nationality: "Britain",
          tile: "Gibraltar",
          type: "Fortress",
          cv: 1,
          obj_type: "unit",
          visible: {
            set: ["West"]
          },
          _id: 111
        },
        "112": {
          nationality: "Britain",
          tile: "Karachi",
          type: "Fortress",
          cv: 1,
          obj_type: "unit",
          visible: {
            set: ["West"]
          },
          _id: 112
        },
        "113": {
          nationality: "France",
          tile: "Lorraine",
          type: "Fortress",
          cv: 3,
          obj_type: "unit",
          visible: {
            set: ["West"]
          },
          _id: 113
        },
        "114": {
          nationality: "Germany",
          tile: "Ruhr",
          type: "Infantry",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 114
        },
        "115": {
          nationality: "Italy",
          tile: "Milan",
          type: "Infantry",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 115
        },
        "116": {
          nationality: "Germany",
          tile: "Berlin",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 116
        },
        "117": {
          nationality: "Italy",
          tile: "Rome",
          type: "Infantry",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 117
        },
        "118": {
          nationality: "Italy",
          tile: "Rome",
          type: "Fleet",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 118
        },
        "119": {
          nationality: "Italy",
          tile: "Tripoli",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 119
        },
        "120": {
          nationality: "Germany",
          tile: "Konigsberg",
          type: "Infantry",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 120
        },
        "121": {
          nationality: "Germany",
          tile: "Konigsberg",
          type: "Submarine",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 121
        },
        "122": {
          nationality: "Germany",
          tile: "Berlin",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 122
        },
        "123": {
          nationality: "Germany",
          tile: "Munich",
          type: "Tank",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 123
        },
        "124": {
          nationality: "Italy",
          tile: "Rome",
          type: "Tank",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 124
        },
        "125": {
          nationality: "Germany",
          tile: "Ruhr",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 125
        },
        "126": {
          nationality: "Italy",
          tile: "Milan",
          type: "Tank",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 126
        },
        "127": {
          nationality: "Italy",
          tile: "Rome",
          type: "Carrier",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 127
        },
        "128": {
          nationality: "Germany",
          tile: "Berlin",
          type: "Tank",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 128
        },
        "129": {
          nationality: "Germany",
          tile: "Berlin",
          type: "Submarine",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 129
        },
        "130": {
          nationality: "Germany",
          tile: "Munich",
          type: "Tank",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 130
        },
        "131": {
          nationality: "Germany",
          tile: "Ruhr",
          type: "Carrier",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 131
        },
        "132": {
          nationality: "Germany",
          tile: "Berlin",
          type: "Carrier",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 132
        },
        "133": {
          nationality: "Germany",
          tile: "Berlin",
          type: "Infantry",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 133
        },
        "134": {
          nationality: "Italy",
          tile: "Tripoli",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 134
        },
        "135": {
          nationality: "Germany",
          tile: "Ruhr",
          type: "Fortress",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 135
        },
        "136": {
          nationality: "USSR",
          tile: "Leningrad",
          type: "Carrier",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 136
        },
        "137": {
          nationality: "USSR",
          tile: "Odessa",
          type: "Submarine",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 137
        },
        "138": {
          nationality: "USSR",
          tile: "Baku",
          type: "Fleet",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 138
        },
        "139": {
          nationality: "USSR",
          tile: "Leningrad",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 139
        },
        "140": {
          nationality: "USSR",
          tile: "Stalingrad",
          type: "Fortress",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 140
        },
        "141": {
          nationality: "USSR",
          tile: "Urals",
          type: "Tank",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 141
        },
        "142": {
          nationality: "USSR",
          tile: "Kiev",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 142
        },
        "143": {
          nationality: "USSR",
          tile: "Baku",
          type: "Carrier",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 143
        },
        "144": {
          nationality: "USSR",
          tile: "Moscow",
          type: "Tank",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 144
        },
        "145": {
          nationality: "USSR",
          tile: "Moscow",
          type: "Fortress",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 145
        },
        "146": {
          nationality: "USSR",
          tile: "Moscow",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 146
        },
        "147": {
          nationality: "USSR",
          tile: "Kharkov",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 147
        },
        "148": {
          nationality: "France",
          tile: "Paris",
          type: "Tank",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 148
        },
        "149": {
          nationality: "Britain",
          tile: "Bombay",
          type: "Submarine",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 149
        },
        "150": {
          nationality: "Britain",
          tile: "London",
          type: "Fortress",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 150
        },
        "151": {
          nationality: "France",
          tile: "Algiers",
          type: "Carrier",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 151
        },
        "152": {
          nationality: "France",
          tile: "Marseille",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 152
        },
        "153": {
          nationality: "Britain",
          tile: "Suez",
          type: "Tank",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 153
        },
        "154": {
          nationality: "Britain",
          tile: "Delhi",
          type: "Fortress",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 154
        },
        "155": {
          nationality: "Britain",
          tile: "Glasgow",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 155
        },
        "156": {
          nationality: "Britain",
          tile: "London",
          type: "Submarine",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 156
        },
        "157": {
          nationality: "France",
          tile: "Paris",
          type: "Infantry",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 157
        },
        "158": {
          nationality: "Britain",
          tile: "Delhi",
          type: "Submarine",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 158
        },
        "159": {
          nationality: "Britain",
          tile: "London",
          type: "Carrier",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 159
        }
      },
      created: {
        "159": {
          nationality: "Britain",
          tile: "London",
          type: "Carrier",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 159
        }
      },
      updated: {
        action_54: {
          top: "Finland",
          bottom: "Czechoslovakia",
          season: "Fall",
          priority: "N",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_54"
        },
        action_33: {
          top: "Baltic_States",
          bottom: "Finland",
          season: "Summer",
          priority: "S",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_33"
        },
        action_42: {
          wildcard: "Guarantee",
          season: "Fall",
          priority: "B",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_42"
        },
        action_51: {
          top: "Baltic_States",
          bottom: "Sweden",
          season: "Fall",
          priority: "K",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_51"
        },
        action_55: {
          top: "Persia",
          bottom: "Turkey",
          season: "Fall",
          priority: "P",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_55"
        },
        action_22: {
          top: "Low_Countries",
          bottom: "Denmark",
          season: "Summer",
          priority: "G",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_22"
        },
        action_36: {
          top: "Czechoslovakia",
          bottom: "Portugal",
          season: "Summer",
          priority: "V",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_36"
        },
        action_46: {
          top: "Greece",
          bottom: "Latin_America",
          season: "Fall",
          priority: "F",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_46"
        }
      },
      removed: {}
    },
    tiles: {
      Ottawa: {
        type: "Coast",
        alligence: "Canada",
        res: 1,
        pop: 0,
        muster: 1,
        borders: {
          North_Atlantic_Ocean: "Coast",
          New_York: "Forest"
        },
        name: "Ottawa",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      New_York: {
        type: "Coast",
        alligence: "USA",
        res: 2,
        pop: 1,
        muster: 2,
        borders: {
          Ottawa: "Forest",
          North_Atlantic_Ocean: "Coast",
          Washington: "Plains"
        },
        name: "New_York",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Washington: {
        type: "Coast",
        alligence: "USA",
        res: 2,
        pop: 2,
        muster: 3,
        borders: {
          New_York: "Plains",
          North_Atlantic_Ocean: "Coast"
        },
        name: "Washington",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Irish_Sea: {
        type: "Sea",
        borders: {
          Irminger_Sea: "Sea",
          North_Atlantic_Ocean: "Ocean",
          Bay_of_Biscay: "Sea",
          Norwegian_Sea: "Sea",
          English_Channel: "Sea",
          London: "Coast",
          Glasgow: "Coast",
          Dublin: "Coast",
          Iceland: "Coast"
        },
        name: "Irish_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      North_Atlantic_Ocean: {
        type: "Ocean",
        borders: {
          Ottawa: "Coast",
          New_York: "Coast",
          Washington: "Coast",
          Irminger_Sea: "Ocean",
          Irish_Sea: "Ocean",
          Bay_of_Biscay: "Ocean",
          Azores: "Strait",
          Mid_Atlantic_Ocean: "Ocean"
        },
        name: "North_Atlantic_Ocean",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Mid_Atlantic_Ocean: {
        type: "Ocean",
        borders: {
          North_Atlantic_Ocean: "Ocean",
          Azores: "Strait",
          South_Atlantic_Ocean: "Ocean",
          Rio_de_Janeiro: "Coast",
          Madeira_Sea: "Ocean",
          Dakar: "Coast",
          Morocco: "Coast"
        },
        name: "Mid_Atlantic_Ocean",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      South_Atlantic_Ocean: {
        type: "Ocean",
        borders: {
          Mid_Atlantic_Ocean: "Ocean",
          Rio_de_Janeiro: "Coast",
          Dakar: "Coast",
          West_Indian_Ocean: "Ocean-Africa"
        },
        name: "South_Atlantic_Ocean",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Rio_de_Janeiro: {
        type: "Coast",
        alligence: "Latin_America",
        res: 2,
        pop: 0,
        muster: 1,
        borders: {
          South_Atlantic_Ocean: "Coast",
          Mid_Atlantic_Ocean: "Coast"
        },
        name: "Rio_de_Janeiro",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Dakar: {
        type: "Coast",
        alligence: "French_North_Africa",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          South_Atlantic_Ocean: "Coast",
          Mid_Atlantic_Ocean: "Coast",
          Morocco: "Plains"
        },
        name: "Dakar",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Morocco: {
        type: "Coast",
        alligence: "French_North_Africa",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Mid_Atlantic_Ocean: "Coast",
          Dakar: "Plains",
          Madeira_Sea: "Coast",
          Gibraltar: "Strait",
          Algiers: "Mountains"
        },
        name: "Morocco",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Algiers: {
        type: "Coast",
        alligence: "French_North_Africa",
        res: 0,
        pop: 1,
        muster: 2,
        borders: {
          Gibraltar: "Strait",
          Morocco: "Mountains",
          Tunisia: "Mountains",
          Western_Mediterranean: "Coast"
        },
        name: "Algiers",
        units: {
          set: [151]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Tunisia: {
        type: "Coast",
        alligence: "French_North_Africa",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Algiers: "Mountains",
          Western_Mediterranean: "Coast",
          Sfax: "Mountains",
          Malta: "Strait"
        },
        name: "Tunisia",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Sfax: {
        type: "Land",
        alligence: "French_North_Africa",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Tunisia: "Mountains",
          Tripoli: "Mountains",
          Malta: "Strait"
        },
        name: "Sfax",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Gibraltar: {
        type: "Coast",
        alligence: "Gibraltar",
        res: 0,
        pop: 0,
        muster: 1,
        borders: {
          Madeira_Sea: "Strait",
          Morocco: "Strait",
          Algiers: "Strait",
          Madrid: "Strait",
          Western_Mediterranean: "Strait",
          Barcelona: "Strait"
        },
        name: "Gibraltar",
        units: {
          set: [111]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Madeira_Sea: {
        type: "Sea",
        borders: {
          Mid_Atlantic_Ocean: "Ocean",
          Bay_of_Biscay: "Sea",
          Azores: "Strait",
          Morocco: "Coast",
          Gibraltar: "Strait",
          Lisbon: "Coast",
          Leon: "Coast"
        },
        name: "Madeira_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Lisbon: {
        type: "Coast",
        alligence: "Portugal",
        res: 1,
        pop: 0,
        muster: 1,
        borders: {
          Madrid: "Plains",
          Madeira_Sea: "Coast",
          Leon: "Plains"
        },
        name: "Lisbon",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Madrid: {
        type: "Land",
        alligence: "Spain",
        res: 0,
        pop: 1,
        muster: 3,
        borders: {
          Gibraltar: "Strait",
          Lisbon: "Plains",
          Leon: "Coast",
          Barcelona: "Plains"
        },
        name: "Madrid",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Leon: {
        type: "Coast",
        alligence: "Spain",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Lisbon: "Plains",
          Madeira_Sea: "Coast",
          Bay_of_Biscay: "Coast",
          Madrid: "Coast",
          Barcelona: "Plains",
          Gascony: "Mountains"
        },
        name: "Leon",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Barcelona: {
        type: "Coast",
        alligence: "Spain",
        res: 0,
        pop: 1,
        muster: 0,
        borders: {
          Gibraltar: "Strait",
          Madrid: "Plains",
          Leon: "Plains",
          Western_Mediterranean: "Coast",
          Gascony: "Mountains",
          Marseille: "Mountains"
        },
        name: "Barcelona",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Azores: {
        type: "Coast",
        alligence: "Portugal",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          North_Atlantic_Ocean: "Strait",
          Mid_Atlantic_Ocean: "Strait",
          Madeira_Sea: "Strait",
          Bay_of_Biscay: "Strait"
        },
        name: "Azores",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Bay_of_Biscay: {
        type: "Sea",
        borders: {
          North_Atlantic_Ocean: "Ocean",
          Madeira_Sea: "Sea",
          Azores: "Strait",
          Irish_Sea: "Sea",
          English_Channel: "Sea",
          Leon: "Coast",
          Paris: "Coast",
          Gascony: "Coast"
        },
        name: "Bay_of_Biscay",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Dublin: {
        type: "Coast",
        alligence: "Ireland",
        res: 0,
        pop: 0,
        muster: 1,
        borders: {
          Irish_Sea: "Coast"
        },
        name: "Dublin",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Irminger_Sea: {
        type: "Sea",
        borders: {
          North_Atlantic_Ocean: "Ocean",
          Irish_Sea: "Sea",
          Iceland: "Coast",
          Greenland_Sea: "Sea"
        },
        name: "Irminger_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Iceland: {
        type: "Coast",
        alligence: "Denmark",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Irminger_Sea: "Coast",
          Greenland_Sea: "Coast",
          Norwegian_Sea: "Coast",
          Irish_Sea: "Coast"
        },
        name: "Iceland",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Greenland_Sea: {
        type: "Sea",
        borders: {
          Irminger_Sea: "Sea",
          Norwegian_Sea: "Sea",
          Nordkapp_Sea: "Sea",
          Iceland: "Coast"
        },
        name: "Greenland_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Norwegian_Sea: {
        type: "Sea",
        borders: {
          Greenland_Sea: "Sea",
          Irish_Sea: "Sea",
          Nordkapp_Sea: "Sea",
          Oslo: "Coast",
          North_Sea: "Sea",
          Glasgow: "Coast",
          Iceland: "Coast"
        },
        name: "Norwegian_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Nordkapp_Sea: {
        type: "Sea",
        borders: {
          Barents_Sea: "Sea",
          Narvik: "Coast",
          Oslo: "Coast",
          Norwegian_Sea: "Sea",
          Greenland_Sea: "Sea"
        },
        name: "Nordkapp_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      North_Sea: {
        type: "Sea",
        borders: {
          Copenhagen: "Strait",
          Oslo: "Coast",
          Ruhr: "Coast",
          Norwegian_Sea: "Sea",
          Amsterdam: "Sea",
          Glasgow: "Coast",
          London: "Coast",
          English_Channel: "Sea",
          Paris: "Coast"
        },
        name: "North_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      English_Channel: {
        type: "Sea",
        borders: {
          Irish_Sea: "Sea",
          Bay_of_Biscay: "Sea",
          North_Sea: "Sea",
          London: "Coast",
          Paris: "Coast"
        },
        name: "English_Channel",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Glasgow: {
        type: "Coast",
        alligence: "Britain",
        res: 1,
        pop: 1,
        muster: 2,
        borders: {
          Norwegian_Sea: "Coast",
          North_Sea: "Coast",
          London: "Mountains",
          Irish_Sea: "Coast"
        },
        name: "Glasgow",
        units: {
          set: [155]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      London: {
        type: "Coast",
        alligence: "Britain",
        res: 1,
        pop: 3,
        muster: 3,
        borders: {
          North_Sea: "Coast",
          English_Channel: "Coast",
          Irish_Sea: "Coast",
          Glasgow: "Mountains"
        },
        name: "London",
        units: {
          set: [150, 156, 110, 159]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Paris: {
        type: "Coast",
        alligence: "France",
        res: 0,
        pop: 2,
        muster: 3,
        borders: {
          English_Channel: "Coast",
          Bay_of_Biscay: "Coast",
          Gascony: "Plains",
          Lorraine: "Plains",
          Amsterdam: "Plains",
          North_Sea: "Coast"
        },
        name: "Paris",
        units: {
          set: [148, 157]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Lorraine: {
        type: "Land",
        alligence: "France",
        res: 2,
        pop: 0,
        muster: 0,
        borders: {
          Munich: "River",
          Paris: "Plains",
          Amsterdam: "Forest",
          Gascony: "Plains",
          Marseille: "Plains"
        },
        name: "Lorraine",
        units: {
          set: [113]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Gascony: {
        type: "Coast",
        alligence: "France",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Leon: "Mountains",
          Barcelona: "Mountains",
          Bay_of_Biscay: "Coast",
          Paris: "Plains",
          Lorraine: "Plains",
          Marseille: "Plains"
        },
        name: "Gascony",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Marseille: {
        type: "Coast",
        alligence: "France",
        res: 0,
        pop: 1,
        muster: 2,
        borders: {
          Barcelona: "Mountains",
          Western_Mediterranean: "Coast",
          Gascony: "Plains",
          Lorraine: "Plains",
          Milan: "Mountains"
        },
        name: "Marseille",
        units: {
          set: [152]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Western_Mediterranean: {
        type: "Sea",
        borders: {
          Gibraltar: "Strait",
          Algiers: "Coast",
          Barcelona: "Coast",
          Tunisia: "Coast",
          Sardinia: "Coast",
          Tyrrhenian_Sea: "Sea",
          Milan: "Coast",
          Marseille: "Coast"
        },
        name: "Western_Mediterranean",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Sardinia: {
        type: "Coast",
        alligence: "Italy",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Western_Mediterranean: "Coast",
          Tyrrhenian_Sea: "Coast"
        },
        name: "Sardinia",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Tyrrhenian_Sea: {
        type: "Sea",
        borders: {
          Western_Mediterranean: "Sea",
          Sardinia: "Coast",
          Malta: "Strait",
          Sicily: "Strait",
          Rome: "Coast",
          Milan: "Coast"
        },
        name: "Tyrrhenian_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Malta: {
        type: "Coast",
        alligence: "Malta",
        res: 0,
        pop: 0,
        muster: 1,
        borders: {
          Tunisia: "Strait",
          Sfax: "Strait",
          Tyrrhenian_Sea: "Strait",
          Central_Mediterranean: "Strait",
          Sicily: "Strait"
        },
        name: "Malta",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Sicily: {
        type: "Coast",
        alligence: "Italy",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Malta: "Strait",
          Tyrrhenian_Sea: "Strait",
          Central_Mediterranean: "Strait",
          Rome: "Strait",
          Taranto: "Strait"
        },
        name: "Sicily",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Central_Mediterranean: {
        type: "Sea",
        borders: {
          Malta: "Strait",
          Sicily: "Strait",
          Taranto: "Coast",
          Adriatic_Sea: "Sea",
          Tripoli: "Coast",
          Cyrenaica: "Coast",
          Albania: "Coast",
          Eastern_Mediterranean: "Sea",
          Aegean_Sea: "Sea",
          Athens: "Coast",
          Crete: "Coast"
        },
        name: "Central_Mediterranean",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Adriatic_Sea: {
        type: "Sea",
        borders: {
          Central_Mediterranean: "Sea",
          Venice: "Sea",
          Taranto: "Sea",
          Croatia: "Coast",
          Albania: "Coast"
        },
        name: "Adriatic_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Milan: {
        type: "Coast",
        alligence: "Italy",
        res: 1,
        pop: 1,
        muster: 2,
        borders: {
          Tyrrhenian_Sea: "Coast",
          Rome: "Mountains",
          Western_Mediterranean: "Coast",
          Venice: "Plains",
          Marseille: "Mountains"
        },
        name: "Milan",
        units: {
          set: [115, 126]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Rome: {
        type: "Coast",
        alligence: "Italy",
        res: 0,
        pop: 2,
        muster: 3,
        borders: {
          Sicily: "Strait",
          Tyrrhenian_Sea: "Coast",
          Milan: "Mountains",
          Venice: "Mountains",
          Taranto: "Mountains"
        },
        name: "Rome",
        units: {
          set: [124, 117, 118, 127]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Venice: {
        type: "Coast",
        alligence: "Italy",
        res: 1,
        pop: 0,
        muster: 0,
        borders: {
          Milan: "Plains",
          Rome: "Mountains",
          Taranto: "Mountains",
          Adriatic_Sea: "Sea",
          Vienna: "Mountains",
          Croatia: "Mountains"
        },
        name: "Venice",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Taranto: {
        type: "Coast",
        alligence: "Italy",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Sicily: "Strait",
          Rome: "Mountains",
          Venice: "Mountains",
          Central_Mediterranean: "Coast",
          Adriatic_Sea: "Sea"
        },
        name: "Taranto",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Tripoli: {
        type: "Coast",
        alligence: "Libya",
        res: 0,
        pop: 1,
        muster: 2,
        borders: {
          Sfax: "Mountains",
          Central_Mediterranean: "Coast",
          Cyrenaica: "Plains"
        },
        name: "Tripoli",
        units: {
          set: [134, 119]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Cyrenaica: {
        type: "Coast",
        alligence: "Libya",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Central_Mediterranean: "Coast",
          Tripoli: "Plains",
          Eastern_Mediterranean: "Coast",
          Egypt: "Plains"
        },
        name: "Cyrenaica",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Amsterdam: {
        type: "Coast",
        alligence: "Low_Countries",
        res: 0,
        pop: 1,
        muster: 2,
        borders: {
          Ruhr: "River",
          Munich: "River",
          North_Sea: "Sea",
          Paris: "Plains",
          Lorraine: "Forest"
        },
        name: "Amsterdam",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Vienna: {
        type: "Land",
        alligence: "Austria",
        res: 0,
        pop: 1,
        muster: 2,
        borders: {
          Prague: "Plains",
          Munich: "Plains",
          Venice: "Mountains",
          Croatia: "Mountains",
          Budapest: "Plains"
        },
        name: "Vienna",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Munich: {
        type: "Land",
        alligence: "Germany",
        res: 0,
        pop: 1,
        muster: 2,
        borders: {
          Berlin: "Plains",
          Ruhr: "Plains",
          Prague: "Forest",
          Vienna: "Plains",
          Amsterdam: "River",
          Lorraine: "River"
        },
        name: "Munich",
        units: {
          set: [130, 123]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Ruhr: {
        type: "Coast",
        alligence: "Germany",
        res: 3,
        pop: 2,
        muster: 3,
        borders: {
          Copenhagen: "Strait",
          Baltic_Sea: "Coast",
          North_Sea: "Coast",
          Berlin: "Plains",
          Munich: "Plains",
          Amsterdam: "River"
        },
        name: "Ruhr",
        units: {
          set: [114, 131, 125, 135]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Berlin: {
        type: "Coast",
        alligence: "Germany",
        res: 1,
        pop: 3,
        muster: 3,
        borders: {
          Baltic_Sea: "Coast",
          Warsaw: "River",
          Ruhr: "Plains",
          Prague: "Forest",
          Munich: "Plains"
        },
        name: "Berlin",
        units: {
          set: [128, 129, 132, 116, 133, 122]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Copenhagen: {
        type: "Coast",
        alligence: "Denmark",
        res: 1,
        pop: 0,
        muster: 1,
        borders: {
          Stockholm: "Strait",
          Baltic_Sea: "Strait",
          Oslo: "Strait",
          North_Sea: "Strait",
          Ruhr: "Strait"
        },
        name: "Copenhagen",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Oslo: {
        type: "Coast",
        alligence: "Norway",
        res: 1,
        pop: 0,
        muster: 1,
        borders: {
          Gallivare: "Mountains",
          Stockholm: "Forest",
          Narvik: "Mountains",
          Nordkapp_Sea: "Coast",
          Norwegian_Sea: "Coast",
          Copenhagen: "Strait",
          North_Sea: "Coast"
        },
        name: "Oslo",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Narvik: {
        type: "Coast",
        alligence: "Norway",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Petsamo: "Mountains",
          Barents_Sea: "Coast",
          Gallivare: "Mountains",
          Oslo: "Mountains",
          Nordkapp_Sea: "Coast"
        },
        name: "Narvik",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Gallivare: {
        type: "Coast",
        alligence: "Sweden",
        res: 1,
        pop: 0,
        muster: 0,
        borders: {
          Helsinki: "Forest",
          Petsamo: "Forest",
          Narvik: "Mountains",
          Oslo: "Mountains",
          Stockholm: "Forest",
          Gulf_of_Bothnia: "Coast"
        },
        name: "Gallivare",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Stockholm: {
        type: "Coast",
        alligence: "Sweden",
        res: 1,
        pop: 1,
        muster: 2,
        borders: {
          Gallivare: "Forest",
          Gulf_of_Bothnia: "Coast",
          Baltic_Sea: "Coast",
          Oslo: "Forest",
          Copenhagen: "Strait"
        },
        name: "Stockholm",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Petsamo: {
        type: "Land",
        alligence: "Finland",
        res: 1,
        pop: 0,
        muster: 0,
        borders: {
          Murmansk: "Forest",
          Helsinki: "Forest",
          Narvik: "Mountains",
          Gallivare: "Forest"
        },
        name: "Petsamo",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Helsinki: {
        type: "Coast",
        alligence: "Finland",
        res: 0,
        pop: 0,
        muster: 1,
        borders: {
          Leningrad: "Forest",
          Murmansk: "Forest",
          Petsamo: "Forest",
          Gulf_of_Bothnia: "Coast",
          Gallivare: "Forest"
        },
        name: "Helsinki",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Barents_Sea: {
        type: "Sea",
        borders: {
          Murmansk: "Coast",
          White_Sea: "Sea",
          Narvik: "Coast",
          Nordkapp_Sea: "Sea"
        },
        name: "Barents_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      White_Sea: {
        type: "Sea",
        borders: {
          Archangel: "Coast",
          Murmansk: "Coast",
          Barents_Sea: "Sea"
        },
        name: "White_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Gulf_of_Bothnia: {
        type: "Sea",
        borders: {
          Helsinki: "Coast",
          Leningrad: "Coast",
          Gallivare: "Coast",
          Stockholm: "Coast",
          Riga: "Coast",
          Baltic_Sea: "Sea"
        },
        name: "Gulf_of_Bothnia",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Baltic_Sea: {
        type: "Sea",
        borders: {
          Gulf_of_Bothnia: "Sea",
          Riga: "Coast",
          Stockholm: "Coast",
          Konigsberg: "Coast",
          Warsaw: "Coast",
          Copenhagen: "Strait",
          Berlin: "Coast",
          Ruhr: "Coast"
        },
        name: "Baltic_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Riga: {
        type: "Coast",
        alligence: "Baltic_States",
        res: 0,
        pop: 0,
        muster: 1,
        borders: {
          Leningrad: "Forest",
          Gulf_of_Bothnia: "Coast",
          Baltic_Sea: "Coast",
          Belorussia: "Plains",
          Vilna: "Plains",
          Konigsberg: "Plains"
        },
        name: "Riga",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Konigsberg: {
        type: "Coast",
        alligence: "Germany",
        res: 0,
        pop: 1,
        muster: 2,
        borders: {
          Riga: "Plains",
          Vilna: "Forest",
          Baltic_Sea: "Coast",
          Warsaw: "River"
        },
        name: "Konigsberg",
        units: {
          set: [120, 121]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Warsaw: {
        type: "Coast",
        alligence: "Poland",
        res: 1,
        pop: 1,
        muster: 3,
        borders: {
          Baltic_Sea: "Coast",
          Konigsberg: "River",
          Vilna: "River",
          Lvov: "River",
          Berlin: "River",
          Prague: "Forest"
        },
        name: "Warsaw",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Vilna: {
        type: "Land",
        alligence: "Poland",
        res: 0,
        pop: 0,
        muster: 1,
        borders: {
          Belorussia: "Plains",
          Riga: "Plains",
          Konigsberg: "Forest",
          Lvov: "Plains",
          Warsaw: "River"
        },
        name: "Vilna",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Lvov: {
        type: "Land",
        alligence: "Poland",
        res: 0,
        pop: 1,
        muster: 2,
        borders: {
          Vilna: "Plains",
          Kiev: "Plains",
          Odessa: "Plains",
          Warsaw: "River",
          Prague: "Mountains",
          Budapest: "Mountains",
          Bucharest: "River"
        },
        name: "Lvov",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Prague: {
        type: "Land",
        alligence: "Czechoslovakia",
        res: 0,
        pop: 1,
        muster: 2,
        borders: {
          Lvov: "Mountains",
          Warsaw: "Forest",
          Berlin: "Forest",
          Munich: "Forest",
          Budapest: "Mountains",
          Vienna: "Plains"
        },
        name: "Prague",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Budapest: {
        type: "Land",
        alligence: "Hungary",
        res: 1,
        pop: 1,
        muster: 2,
        borders: {
          Lvov: "Mountains",
          Prague: "Mountains",
          Croatia: "Plains",
          Belgrade: "Plains",
          Vienna: "Plains",
          Bucharest: "Mountains"
        },
        name: "Budapest",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Croatia: {
        type: "Coast",
        alligence: "Yugoslavia",
        res: 1,
        pop: 0,
        muster: 0,
        borders: {
          Adriatic_Sea: "Coast",
          Vienna: "Mountains",
          Venice: "Mountains",
          Budapest: "Plains",
          Belgrade: "Forest",
          Albania: "Mountains"
        },
        name: "Croatia",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Belgrade: {
        type: "Land",
        alligence: "Yugoslavia",
        res: 0,
        pop: 0,
        muster: 1,
        borders: {
          Croatia: "Forest",
          Budapest: "Plains",
          Albania: "Mountains",
          Bucharest: "River",
          Sofia: "Mountains",
          Athens: "Mountains"
        },
        name: "Belgrade",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Albania: {
        type: "Coast",
        alligence: "Albania",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Adriatic_Sea: "Coast",
          Central_Mediterranean: "Coast",
          Croatia: "Mountains",
          Belgrade: "Mountains",
          Athens: "Mountains"
        },
        name: "Albania",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Athens: {
        type: "Coast",
        alligence: "Greece",
        res: 1,
        pop: 0,
        muster: 1,
        borders: {
          Central_Mediterranean: "Coast",
          Istanbul: "Strait",
          Sofia: "Mountains",
          Belgrade: "Mountains",
          Albania: "Mountains",
          Aegean_Sea: "Coast"
        },
        name: "Athens",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Bucharest: {
        type: "Coast",
        alligence: "Rumania",
        res: 2,
        pop: 1,
        muster: 2,
        borders: {
          Lvov: "River",
          Odessa: "River",
          Budapest: "Mountains",
          Belgrade: "River",
          Sofia: "River",
          Western_Black_Sea: "Coast"
        },
        name: "Bucharest",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Sofia: {
        type: "Coast",
        alligence: "Bulgaria",
        res: 1,
        pop: 0,
        muster: 1,
        borders: {
          Belgrade: "Mountains",
          Bucharest: "River",
          Western_Black_Sea: "Coast",
          Istanbul: "Strait",
          Athens: "Mountains"
        },
        name: "Sofia",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Aegean_Sea: {
        type: "Sea",
        borders: {
          Central_Mediterranean: "Sea",
          Crete: "Coast",
          Eastern_Mediterranean: "Sea",
          Izmir: "Coast",
          Istanbul: "Strait",
          Athens: "Coast"
        },
        name: "Aegean_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Crete: {
        type: "Sea",
        borders: {
          Central_Mediterranean: "Coast",
          Aegean_Sea: "Coast",
          Eastern_Mediterranean: "Coast"
        },
        name: "Crete",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Eastern_Mediterranean: {
        type: "Sea",
        borders: {
          Central_Mediterranean: "Sea",
          Cyrenaica: "Coast",
          Aegean_Sea: "Sea",
          Crete: "Coast",
          Suez: "Strait",
          Jordan: "Coast",
          Damascus: "Coast",
          Egypt: "Coast",
          Adana: "Coast",
          Izmir: "Coast"
        },
        name: "Eastern_Mediterranean",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Egypt: {
        type: "Coast",
        alligence: "Middle_East",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Cyrenaica: "Plains",
          Suez: "Strait",
          Eastern_Mediterranean: "Coast"
        },
        name: "Egypt",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Suez: {
        type: "Coast",
        alligence: "Middle_East",
        res: 0,
        pop: 1,
        muster: 2,
        borders: {
          Egypt: "Strait",
          Eastern_Mediterranean: "Strait",
          Sudan: "Strait",
          Jordan: "Strait",
          Red_Sea: "Strait"
        },
        name: "Suez",
        units: {
          set: [153]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Sudan: {
        type: "Coast",
        alligence: "Middle_East",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Suez: "Strait",
          Red_Sea: "Coast"
        },
        name: "Sudan",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Jordan: {
        type: "Coast",
        alligence: "Middle_East",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Suez: "Strait",
          Eastern_Mediterranean: "Coast",
          Damascus: "Plains",
          Iraq: "Plains"
        },
        name: "Jordan",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Iraq: {
        type: "Coast",
        alligence: "Middle_East",
        res: 1,
        res_afr: 1,
        pop: 0,
        muster: 0,
        borders: {
          Persian_Gulf: "Coast",
          Damascus: "Plains",
          Jordan: "Plains",
          Abadan: "Plains"
        },
        name: "Iraq",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Damascus: {
        type: "Coast",
        alligence: "Syria",
        res: 0,
        pop: 0,
        muster: 1,
        borders: {
          Eastern_Mediterranean: "Coast",
          Jordan: "Plains",
          Iraq: "Plains",
          Adana: "Plains"
        },
        name: "Damascus",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Red_Sea: {
        type: "Sea",
        borders: {
          Suez: "Strait",
          Sudan: "Coast",
          Gulf_of_Aden: "Sea"
        },
        name: "Red_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Gulf_of_Aden: {
        type: "Sea",
        borders: {
          Red_Sea: "Sea",
          Arabian_Sea: "Sea",
          West_Indian_Ocean: "Ocean"
        },
        name: "Gulf_of_Aden",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      West_Indian_Ocean: {
        type: "Sea",
        borders: {
          Gulf_of_Aden: "Ocean",
          Arabian_Sea: "Ocean",
          East_Indian_Ocean: "Ocean",
          South_Atlantic_Ocean: "Ocean-Africa"
        },
        name: "West_Indian_Ocean",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      East_Indian_Ocean: {
        type: "Sea",
        borders: {
          Arabian_Sea: "Ocean",
          West_Indian_Ocean: "Ocean",
          Bombay: "Coast",
          Delhi: "Coast"
        },
        name: "East_Indian_Ocean",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Arabian_Sea: {
        type: "Sea",
        borders: {
          Gulf_of_Aden: "Sea",
          West_Indian_Ocean: "Ocean",
          Persian_Gulf: "Sea",
          East_Indian_Ocean: "Ocean",
          Bombay: "Coast",
          Karachi: "Coast",
          Shiraz: "Coast"
        },
        name: "Arabian_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Persian_Gulf: {
        type: "Sea",
        borders: {
          Arabian_Sea: "Sea",
          Shiraz: "Coast",
          Abadan: "Coast",
          Iraq: "Coast"
        },
        name: "Persian_Gulf",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Bombay: {
        type: "Coast",
        alligence: "India",
        res: 1,
        res_afr: 1,
        pop: 1,
        muster: 2,
        borders: {
          Arabian_Sea: "Coast",
          East_Indian_Ocean: "Coast",
          Karachi: "Plains",
          Delhi: "Plains"
        },
        name: "Bombay",
        units: {
          set: [149]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Karachi: {
        type: "Coast",
        alligence: "India",
        res: 0,
        res_afr: 0,
        pop: 0,
        muster: 0,
        borders: {
          Arabian_Sea: "Coast",
          Bombay: "Plains",
          Delhi: "Plains",
          Kabul: "Mountains",
          Shiraz: "Mountains"
        },
        name: "Karachi",
        units: {
          set: [112]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Delhi: {
        type: "Coast",
        alligence: "India",
        res: 1,
        res_afr: 1,
        pop: 2,
        muster: 3,
        borders: {
          East_Indian_Ocean: "Coast",
          Bombay: "Plains",
          Karachi: "Plains"
        },
        name: "Delhi",
        units: {
          set: [154, 158]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Kabul: {
        type: "Land",
        alligence: "Afghanistan",
        res: 0,
        pop: 0,
        muster: 1,
        borders: {
          Karachi: "Mountains",
          Shiraz: "Mountains",
          Tehran: "Mountains",
          Turkmenistan: "Mountains"
        },
        name: "Kabul",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Shiraz: {
        type: "Coast",
        alligence: "Persia",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Persian_Gulf: "Coast",
          Arabian_Sea: "Coast",
          Karachi: "Mountains",
          Kabul: "Mountains",
          Abadan: "Mountains",
          Tehran: "Mountains"
        },
        name: "Shiraz",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Tehran: {
        type: "Coast",
        alligence: "Persia",
        res: 0,
        pop: 1,
        muster: 2,
        borders: {
          Shiraz: "Mountains",
          Abadan: "Mountains",
          Kabul: "Mountains",
          Tabriz: "Mountains",
          Turkmenistan: "Mountains",
          Southern_Caspian_Sea: "Coast"
        },
        name: "Tehran",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Abadan: {
        type: "Coast",
        alligence: "Persia",
        res: 2,
        res_afr: 2,
        pop: 0,
        muster: 0,
        borders: {
          Persian_Gulf: "Coast",
          Shiraz: "Mountains",
          Iraq: "Plains",
          Tehran: "Mountains",
          Tabriz: "Mountains"
        },
        name: "Abadan",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Tabriz: {
        type: "Coast",
        alligence: "Persia",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Abadan: "Mountains",
          Tehran: "Mountains",
          Southern_Caspian_Sea: "Coast",
          Baku: "Mountains",
          Kars: "Mountains",
          Georgia: "Mountains"
        },
        name: "Tabriz",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Kars: {
        type: "Coast",
        alligence: "Turkey",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Tabriz: "Mountains",
          Georgia: "Mountains",
          Eastern_Black_Sea: "Coast",
          Sinope: "Mountains",
          Adana: "Mountains"
        },
        name: "Kars",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Sinope: {
        type: "Coast",
        alligence: "Turkey",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Kars: "Mountains",
          Adana: "Mountains",
          Ankara: "Mountains",
          Eastern_Black_Sea: "Coast"
        },
        name: "Sinope",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Adana: {
        type: "Coast",
        alligence: "Turkey",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Kars: "Mountains",
          Sinope: "Mountains",
          Damascus: "Plains",
          Eastern_Mediterranean: "Coast",
          Ankara: "Mountains",
          Izmir: "Mountains"
        },
        name: "Adana",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Ankara: {
        type: "Coast",
        alligence: "Turkey",
        res: 0,
        pop: 1,
        muster: 3,
        borders: {
          Sinope: "Mountains",
          Adana: "Mountains",
          Izmir: "Mountains",
          Istanbul: "Strait",
          Western_Black_Sea: "Coast"
        },
        name: "Ankara",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Izmir: {
        type: "Coast",
        alligence: "Turkey",
        res: 1,
        pop: 0,
        muster: 1,
        borders: {
          Adana: "Mountains",
          Ankara: "Mountains",
          Eastern_Mediterranean: "Coast",
          Aegean_Sea: "Coast",
          Istanbul: "Strait"
        },
        name: "Izmir",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Istanbul: {
        type: "Coast",
        alligence: "Turkey",
        res: 0,
        pop: 1,
        muster: 2,
        borders: {
          Izmir: "Strait",
          Ankara: "Strait",
          Aegean_Sea: "Strait",
          Western_Black_Sea: "Strait",
          Sofia: "Strait",
          Athens: "Strait"
        },
        name: "Istanbul",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Southern_Caspian_Sea: {
        type: "Sea",
        borders: {
          Tehran: "Coast",
          Tabriz: "Coast",
          Turkmenistan: "Coast",
          Baku: "Coast",
          Northern_Caspian_Sea: "Sea"
        },
        name: "Southern_Caspian_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Northern_Caspian_Sea: {
        type: "Sea",
        borders: {
          Southern_Caspian_Sea: "Sea",
          Turkmenistan: "Coast",
          Baku: "Coast",
          Kazakhstan: "Coast",
          Grozny: "Coast",
          Ufa: "Coast"
        },
        name: "Northern_Caspian_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Eastern_Black_Sea: {
        type: "Sea",
        borders: {
          Kars: "Coast",
          Georgia: "Coast",
          Sinope: "Coast",
          Western_Black_Sea: "Sea",
          Sevastopol: "Strait",
          Kuban: "Coast"
        },
        name: "Eastern_Black_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Western_Black_Sea: {
        type: "Sea",
        borders: {
          Istanbul: "Strait",
          Eastern_Black_Sea: "Sea",
          Ankara: "Coast",
          Sevastopol: "Strait",
          Odessa: "Coast",
          Bucharest: "Coast",
          Sofia: "Coast"
        },
        name: "Western_Black_Sea",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Sea_of_Azov: {
        type: "Sea",
        borders: {
          Sevastopol: "Strait",
          Kuban: "Coast",
          Kharkov: "Coast"
        },
        name: "Sea_of_Azov",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Archangel: {
        type: "Coast",
        alligence: "USSR",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Vologda: "Forest",
          Leningrad: "Forest",
          Murmansk: "Forest",
          White_Sea: "Coast"
        },
        name: "Archangel",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Vologda: {
        type: "Land",
        alligence: "USSR",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Moscow: "Forest",
          Gorky: "Forest",
          Leningrad: "Forest",
          Archangel: "Forest"
        },
        name: "Vologda",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Gorky: {
        type: "Land",
        alligence: "USSR",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Moscow: "River",
          Penza: "River",
          Perm: "Forest",
          Vologda: "Forest"
        },
        name: "Gorky",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Perm: {
        type: "Land",
        alligence: "USSR",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Penza: "River",
          Ufa: "Plains",
          Urals: "Mountains",
          Gorky: "Forest"
        },
        name: "Perm",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Urals: {
        type: "Land",
        alligence: "USSR",
        res: 1,
        pop: 1,
        muster: 2,
        borders: {
          Kazakhstan: "Mountains",
          Western_Siberia: "Plains",
          Ufa: "Mountains",
          Perm: "Mountains"
        },
        name: "Urals",
        units: {
          set: [141]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Western_Siberia: {
        type: "Land",
        alligence: "USSR",
        res: 1,
        pop: 0,
        muster: 0,
        borders: {
          Kazakhstan: "Plains",
          Urals: "Plains"
        },
        name: "Western_Siberia",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Leningrad: {
        type: "Coast",
        alligence: "USSR",
        res: 0,
        pop: 2,
        muster: 3,
        borders: {
          Bryansk: "Forest",
          Belorussia: "Forest",
          Moscow: "Forest",
          Vologda: "Forest",
          Archangel: "Forest",
          Murmansk: "Forest",
          Helsinki: "Forest",
          Gulf_of_Bothnia: "Coast",
          Riga: "Forest"
        },
        name: "Leningrad",
        units: {
          set: [136, 139]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Moscow: {
        type: "Land",
        alligence: "USSR",
        res: 0,
        pop: 3,
        muster: 3,
        borders: {
          Voronezh: "Plains",
          Penza: "Plains",
          Bryansk: "Forest",
          Leningrad: "Forest",
          Gorky: "River",
          Vologda: "Forest"
        },
        name: "Moscow",
        units: {
          set: [144, 145, 146]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Murmansk: {
        type: "Coast",
        alligence: "USSR",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Archangel: "Forest",
          Leningrad: "Forest",
          White_Sea: "Coast",
          Barents_Sea: "Coast",
          Helsinki: "Forest",
          Petsamo: "Forest"
        },
        name: "Murmansk",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Penza: {
        type: "Land",
        alligence: "USSR",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Voronezh: "Forest",
          Ufa: "River",
          Moscow: "Plains",
          Gorky: "River",
          Perm: "River"
        },
        name: "Penza",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Ufa: {
        type: "Coast",
        alligence: "USSR",
        res: 1,
        pop: 0,
        muster: 0,
        borders: {
          Grozny: "River",
          Stalingrad: "River",
          Northern_Caspian_Sea: "Coast",
          Kazakhstan: "Plains",
          Voronezh: "River",
          Penza: "River",
          Perm: "Plains",
          Urals: "Mountains"
        },
        name: "Ufa",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Kazakhstan: {
        type: "Coast",
        alligence: "USSR",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Turkmenistan: "Plains",
          Northern_Caspian_Sea: "Coast",
          Ufa: "Plains",
          Western_Siberia: "Plains",
          Urals: "Mountains"
        },
        name: "Kazakhstan",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Belorussia: {
        type: "Land",
        alligence: "USSR",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Bryansk: "Plains",
          Leningrad: "Forest",
          Riga: "Plains",
          Vilna: "Plains"
        },
        name: "Belorussia",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Bryansk: {
        type: "Land",
        alligence: "USSR",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Kharkov: "Plains",
          Voronezh: "Plains",
          Belorussia: "Plains",
          Moscow: "Forest",
          Kiev: "River",
          Leningrad: "Forest"
        },
        name: "Bryansk",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Voronezh: {
        type: "Land",
        alligence: "USSR",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Stalingrad: "Plains",
          Kharkov: "River",
          Bryansk: "Plains",
          Ufa: "River",
          Moscow: "Plains",
          Penza: "Forest"
        },
        name: "Voronezh",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Stalingrad: {
        type: "Land",
        alligence: "USSR",
        res: 0,
        pop: 1,
        muster: 2,
        borders: {
          Kuban: "Plains",
          Grozny: "Plains",
          Ufa: "River",
          Voronezh: "Plains",
          Kharkov: "River"
        },
        name: "Stalingrad",
        units: {
          set: [140]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Grozny: {
        type: "Coast",
        alligence: "USSR",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Baku: "Mountains",
          Northern_Caspian_Sea: "Coast",
          Georgia: "Mountains",
          Kuban: "Plains",
          Stalingrad: "Plains",
          Ufa: "River"
        },
        name: "Grozny",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Turkmenistan: {
        type: "Coast",
        alligence: "USSR",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Kabul: "Mountains",
          Tehran: "Mountains",
          Southern_Caspian_Sea: "Coast",
          Northern_Caspian_Sea: "Coast",
          Kazakhstan: "Plains"
        },
        name: "Turkmenistan",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Kuban: {
        type: "Coast",
        alligence: "USSR",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Georgia: "Mountains",
          Grozny: "Plains",
          Eastern_Black_Sea: "Coast",
          Sea_of_Azov: "Coast",
          Sevastopol: "Strait",
          Kharkov: "River",
          Stalingrad: "Plains"
        },
        name: "Kuban",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Georgia: {
        type: "Coast",
        alligence: "USSR",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Baku: "Plains",
          Tabriz: "Mountains",
          Grozny: "Mountains",
          Kuban: "Mountains",
          Kars: "Mountains",
          Eastern_Black_Sea: "Coast"
        },
        name: "Georgia",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Baku: {
        type: "Coast",
        alligence: "USSR",
        res: 3,
        res_afr: 1,
        pop: 2,
        muster: 3,
        borders: {
          Tabriz: "Mountains",
          Southern_Caspian_Sea: "Coast",
          Georgia: "Plains",
          Northern_Caspian_Sea: "Coast",
          Grozny: "Mountains"
        },
        name: "Baku",
        units: {
          set: [138, 143]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Kiev: {
        type: "Land",
        alligence: "USSR",
        res: 1,
        pop: 1,
        muster: 2,
        borders: {
          Odessa: "Plains",
          Kharkov: "River",
          Bryansk: "River",
          Lvov: "Plains"
        },
        name: "Kiev",
        units: {
          set: [142]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Kharkov: {
        type: "Coast",
        alligence: "USSR",
        res: 1,
        pop: 1,
        muster: 2,
        borders: {
          Sea_of_Azov: "Coast",
          Sevastopol: "Strait",
          Odessa: "River",
          Kiev: "River",
          Kuban: "River",
          Stalingrad: "River",
          Voronezh: "River",
          Bryansk: "Plains"
        },
        name: "Kharkov",
        units: {
          set: [147]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Odessa: {
        type: "Coast",
        alligence: "USSR",
        res: 2,
        pop: 1,
        muster: 2,
        borders: {
          Kharkov: "River",
          Western_Black_Sea: "Coast",
          Sevastopol: "Strait",
          Kiev: "Plains",
          Lvov: "Plains",
          Bucharest: "River"
        },
        name: "Odessa",
        units: {
          set: [137]
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      },
      Sevastopol: {
        type: "Coast",
        alligence: "USSR",
        res: 0,
        pop: 0,
        muster: 0,
        borders: {
          Western_Black_Sea: "Strait",
          Eastern_Black_Sea: "Strait",
          Sea_of_Azov: "Strait",
          Kuban: "Strait",
          Kharkov: "Strait",
          Odessa: "Strait"
        },
        name: "Sevastopol",
        units: {
          set: []
        },
        obj_type: "tile",
        visible: {
          set: ["USSR", "Axis", "West"]
        }
      }
    },
    nations: {
      designations: {
        Canada: "West",
        USA: "Major",
        Latin_America: "Minor",
        French_North_Africa: "West",
        Gibraltar: "West",
        Portugal: "Minor",
        Spain: "Minor",
        Ireland: "Minor",
        Denmark: "Minor",
        Britain: "West",
        France: "West",
        Italy: "Axis",
        Malta: "West",
        Libya: "Axis",
        Low_Countries: "Minor",
        Austria: "Minor",
        Germany: "Axis",
        Norway: "Minor",
        Sweden: "Minor",
        Finland: "Minor",
        Baltic_States: "Minor",
        Poland: "Minor",
        Czechoslovakia: "Minor",
        Hungary: "Minor",
        Yugoslavia: "Minor",
        Albania: "Minor",
        Greece: "Minor",
        Rumania: "Minor",
        Bulgaria: "Minor",
        Middle_East: "West",
        Syria: "West",
        India: "West",
        Afghanistan: "Minor",
        Persia: "Minor",
        Turkey: "Minor",
        USSR: "USSR"
      },
      territories: {
        Canada: {
          set: ["Ottawa"]
        },
        USA: {
          set: ["New_York", "Washington"]
        },
        Latin_America: {
          set: ["Rio_de_Janeiro"]
        },
        French_North_Africa: {
          set: ["Tunisia", "Morocco", "Dakar", "Sfax", "Algiers"]
        },
        Gibraltar: {
          set: ["Gibraltar"]
        },
        Portugal: {
          set: ["Azores", "Lisbon"]
        },
        Spain: {
          set: ["Leon", "Madrid", "Barcelona"]
        },
        Ireland: {
          set: ["Dublin"]
        },
        Denmark: {
          set: ["Copenhagen", "Iceland"]
        },
        Britain: {
          set: ["Glasgow", "London"]
        },
        France: {
          set: ["Marseille", "Lorraine", "Gascony", "Paris"]
        },
        Italy: {
          set: ["Venice", "Sicily", "Sardinia", "Rome", "Milan", "Taranto"]
        },
        Malta: {
          set: ["Malta"]
        },
        Libya: {
          set: ["Cyrenaica", "Tripoli"]
        },
        Low_Countries: {
          set: ["Amsterdam"]
        },
        Austria: {
          set: ["Vienna"]
        },
        Germany: {
          set: ["Munich", "Ruhr", "Konigsberg", "Berlin"]
        },
        Norway: {
          set: ["Narvik", "Oslo"]
        },
        Sweden: {
          set: ["Gallivare", "Stockholm"]
        },
        Finland: {
          set: ["Petsamo", "Helsinki"]
        },
        Baltic_States: {
          set: ["Riga"]
        },
        Poland: {
          set: ["Warsaw", "Lvov", "Vilna"]
        },
        Czechoslovakia: {
          set: ["Prague"]
        },
        Hungary: {
          set: ["Budapest"]
        },
        Yugoslavia: {
          set: ["Croatia", "Belgrade"]
        },
        Albania: {
          set: ["Albania"]
        },
        Greece: {
          set: ["Athens"]
        },
        Rumania: {
          set: ["Bucharest"]
        },
        Bulgaria: {
          set: ["Sofia"]
        },
        Middle_East: {
          set: ["Sudan", "Suez", "Egypt", "Iraq", "Jordan"]
        },
        Syria: {
          set: ["Damascus"]
        },
        India: {
          set: ["Delhi", "Bombay", "Karachi"]
        },
        Afghanistan: {
          set: ["Kabul"]
        },
        Persia: {
          set: ["Tabriz", "Tehran", "Abadan", "Shiraz"]
        },
        Turkey: {
          set: ["Ankara", "Istanbul", "Izmir", "Sinope", "Kars", "Adana"]
        },
        USSR: {
          set: [
            "Gorky",
            "Voronezh",
            "Urals",
            "Moscow",
            "Bryansk",
            "Kuban",
            "Leningrad",
            "Penza",
            "Sevastopol",
            "Archangel",
            "Kazakhstan",
            "Ufa",
            "Baku",
            "Perm",
            "Vologda",
            "Belorussia",
            "Grozny",
            "Georgia",
            "Turkmenistan",
            "Murmansk",
            "Western_Siberia",
            "Stalingrad",
            "Kiev",
            "Kharkov",
            "Odessa"
          ]
        }
      },
      capitals: {
        Canada: "Ottawa",
        USA: "Washington",
        Latin_America: "Latin_America",
        French_North_Africa: "Algiers",
        Gibraltar: "Gibraltar",
        Portugal: "Lisbon",
        Spain: "Madrid",
        Ireland: "Dublin",
        Denmark: "Copenhagen",
        Britain: "London",
        France: "Paris",
        Italy: "Rome",
        Malta: "Malta",
        Libya: "Tripoli",
        Low_Countries: "Amsterdam",
        Austria: "Vienna",
        Germany: "Berlin",
        Norway: "Oslo",
        Sweden: "Stockholm",
        Finland: "Helsinki",
        Baltic_States: "Riga",
        Poland: "Warsaw",
        Czechoslovakia: "Prague",
        Hungary: "Budapest",
        Yugoslavia: "Belgrade",
        Albania: "Albania",
        Greece: "Athens",
        Rumania: "Bucharest",
        Bulgaria: "Sofia",
        Middle_East: "Suez",
        Syria: "Damascus",
        India: "Delhi",
        Afghanistan: "Kabul",
        Persia: "Tehran",
        Turkey: "Ankara",
        USSR: "Moscow"
      },
      groups: {
        West: {
          set: ["Canada", "Gibraltar", "Malta", "India", "French_North_Africa", "France", "Syria", "Britain", "Middle_East"]
        },
        Major: {
          set: ["USA"]
        },
        Minor: {
          set: [
            "Denmark",
            "Sweden",
            "Afghanistan",
            "Finland",
            "Poland",
            "Turkey",
            "Portugal",
            "Spain",
            "Czechoslovakia",
            "Austria",
            "Norway",
            "Latin_America",
            "Rumania",
            "Greece",
            "Albania",
            "Ireland",
            "Low_Countries",
            "Baltic_States",
            "Hungary",
            "Persia",
            "Yugoslavia",
            "Bulgaria"
          ]
        },
        Axis: {
          set: ["Italy", "Germany", "Libya"]
        },
        USSR: {
          set: ["USSR"]
        }
      }
    },
    players: {
      Axis: {
        stats: {
          handlimit: 7,
          factory_all_costs: [5, 4, 3],
          factory_idx: 0,
          factory_cost: 5,
          emergency_command: 4,
          rivals: {
            set: ["USSR", "West"]
          },
          DoW: {
            USSR: false,
            West: false
          },
          at_war_with: {
            USSR: false,
            West: false
          },
          at_war: false,
          aggressed: false,
          peace_dividends: [],
          enable_USA: false,
          enable_Winter: false,
          great_power: "Germany"
        },
        cities: {
          MainCapital: "Berlin",
          SubCapitals: ["Ruhr", "Rome"]
        },
        members: {
          Germany: {
            set: ["Germany"]
          },
          Italy: {
            set: ["Italy", "Libya"]
          }
        },
        homeland: {
          Germany: {
            set: ["Munich", "Ruhr", "Konigsberg", "Berlin"]
          },
          Italy: {
            set: ["Venice", "Sicily", "Sardinia", "Rome", "Milan", "Taranto"]
          }
        },
        territory: {
          set: [
            "Venice",
            "Tripoli",
            "Rome",
            "Ruhr",
            "Konigsberg",
            "Taranto",
            "Munich",
            "Sicily",
            "Berlin",
            "Milan",
            "Cyrenaica",
            "Sardinia"
          ]
        },
        tracks: {
          POP: 11,
          RES: 6,
          IND: 12
        },
        units: {
          "114": {
            nationality: "Germany",
            tile: "Ruhr",
            type: "Infantry",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 114
          },
          "115": {
            nationality: "Italy",
            tile: "Milan",
            type: "Infantry",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 115
          },
          "116": {
            nationality: "Germany",
            tile: "Berlin",
            type: "AirForce",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 116
          },
          "117": {
            nationality: "Italy",
            tile: "Rome",
            type: "Infantry",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 117
          },
          "118": {
            nationality: "Italy",
            tile: "Rome",
            type: "Fleet",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 118
          },
          "119": {
            nationality: "Italy",
            tile: "Tripoli",
            type: "AirForce",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 119
          },
          "120": {
            nationality: "Germany",
            tile: "Konigsberg",
            type: "Infantry",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 120
          },
          "121": {
            nationality: "Germany",
            tile: "Konigsberg",
            type: "Submarine",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 121
          },
          "122": {
            nationality: "Germany",
            tile: "Berlin",
            type: "AirForce",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 122
          },
          "123": {
            nationality: "Germany",
            tile: "Munich",
            type: "Tank",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 123
          },
          "124": {
            nationality: "Italy",
            tile: "Rome",
            type: "Tank",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 124
          },
          "125": {
            nationality: "Germany",
            tile: "Ruhr",
            type: "AirForce",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 125
          },
          "126": {
            nationality: "Italy",
            tile: "Milan",
            type: "Tank",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 126
          },
          "127": {
            nationality: "Italy",
            tile: "Rome",
            type: "Carrier",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 127
          },
          "128": {
            nationality: "Germany",
            tile: "Berlin",
            type: "Tank",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 128
          },
          "129": {
            nationality: "Germany",
            tile: "Berlin",
            type: "Submarine",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 129
          },
          "130": {
            nationality: "Germany",
            tile: "Munich",
            type: "Tank",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 130
          },
          "131": {
            nationality: "Germany",
            tile: "Ruhr",
            type: "Carrier",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 131
          },
          "132": {
            nationality: "Germany",
            tile: "Berlin",
            type: "Carrier",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 132
          },
          "133": {
            nationality: "Germany",
            tile: "Berlin",
            type: "Infantry",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 133
          },
          "134": {
            nationality: "Italy",
            tile: "Tripoli",
            type: "AirForce",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 134
          },
          "135": {
            nationality: "Germany",
            tile: "Ruhr",
            type: "Fortress",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["Axis"]
            },
            _id: 135
          }
        },
        hand: {
          set: [
            "action_6",
            "action_53",
            "action_44",
            "action_21",
            "action_40",
            "action_1",
            "action_45",
            "action_3",
            "action_16",
            "action_17",
            "action_27",
            "action_47",
            "action_9",
            "action_39"
          ]
        },
        technologies: {
          set: []
        },
        secret_vault: {
          set: []
        },
        influence: {
          set: []
        },
        diplomacy: {
          associates: {
            set: []
          },
          protectorates: {
            set: []
          },
          satellites: {
            set: []
          }
        }
      },
      USSR: {
        stats: {
          handlimit: 6,
          factory_all_costs: [7, 5, 3],
          factory_idx: 0,
          factory_cost: 7,
          emergency_command: 2,
          rivals: {
            set: ["Axis", "West"]
          },
          DoW: {
            Axis: false,
            West: false
          },
          at_war_with: {
            Axis: false,
            West: false
          },
          at_war: false,
          aggressed: false,
          peace_dividends: [],
          enable_USA: false,
          enable_Winter: true,
          great_power: "USSR"
        },
        cities: {
          MainCapital: "Moscow",
          SubCapitals: ["Leningrad", "Baku"]
        },
        members: {
          USSR: {
            set: ["USSR"]
          }
        },
        homeland: {
          USSR: {
            set: [
              "Gorky",
              "Voronezh",
              "Urals",
              "Moscow",
              "Bryansk",
              "Kuban",
              "Leningrad",
              "Penza",
              "Sevastopol",
              "Archangel",
              "Kazakhstan",
              "Ufa",
              "Baku",
              "Perm",
              "Vologda",
              "Belorussia",
              "Grozny",
              "Georgia",
              "Turkmenistan",
              "Murmansk",
              "Western_Siberia",
              "Stalingrad",
              "Kiev",
              "Kharkov",
              "Odessa"
            ]
          }
        },
        territory: {
          set: [
            "Gorky",
            "Voronezh",
            "Urals",
            "Moscow",
            "Bryansk",
            "Kuban",
            "Leningrad",
            "Penza",
            "Sevastopol",
            "Archangel",
            "Kazakhstan",
            "Ufa",
            "Baku",
            "Perm",
            "Vologda",
            "Belorussia",
            "Grozny",
            "Georgia",
            "Turkmenistan",
            "Murmansk",
            "Western_Siberia",
            "Stalingrad",
            "Kiev",
            "Kharkov",
            "Odessa"
          ]
        },
        tracks: {
          POP: 12,
          RES: 11,
          IND: 9
        },
        units: {
          "136": {
            nationality: "USSR",
            tile: "Leningrad",
            type: "Carrier",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["USSR"]
            },
            _id: 136
          },
          "137": {
            nationality: "USSR",
            tile: "Odessa",
            type: "Submarine",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["USSR"]
            },
            _id: 137
          },
          "138": {
            nationality: "USSR",
            tile: "Baku",
            type: "Fleet",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["USSR"]
            },
            _id: 138
          },
          "139": {
            nationality: "USSR",
            tile: "Leningrad",
            type: "AirForce",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["USSR"]
            },
            _id: 139
          },
          "140": {
            nationality: "USSR",
            tile: "Stalingrad",
            type: "Fortress",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["USSR"]
            },
            _id: 140
          },
          "141": {
            nationality: "USSR",
            tile: "Urals",
            type: "Tank",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["USSR"]
            },
            _id: 141
          },
          "142": {
            nationality: "USSR",
            tile: "Kiev",
            type: "AirForce",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["USSR"]
            },
            _id: 142
          },
          "143": {
            nationality: "USSR",
            tile: "Baku",
            type: "Carrier",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["USSR"]
            },
            _id: 143
          },
          "144": {
            nationality: "USSR",
            tile: "Moscow",
            type: "Tank",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["USSR"]
            },
            _id: 144
          },
          "145": {
            nationality: "USSR",
            tile: "Moscow",
            type: "Fortress",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["USSR"]
            },
            _id: 145
          },
          "146": {
            nationality: "USSR",
            tile: "Moscow",
            type: "AirForce",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["USSR"]
            },
            _id: 146
          },
          "147": {
            nationality: "USSR",
            tile: "Kharkov",
            type: "AirForce",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["USSR"]
            },
            _id: 147
          }
        },
        hand: {
          set: ["action_25", "action_32", "action_34", "action_41", "action_31", "action_48"]
        },
        technologies: {
          set: []
        },
        secret_vault: {
          set: []
        },
        influence: {
          set: []
        },
        diplomacy: {
          associates: {
            set: []
          },
          protectorates: {
            set: []
          },
          satellites: {
            set: []
          }
        }
      },
      West: {
        stats: {
          handlimit: 8,
          factory_all_costs: [6, 5, 4, 3],
          factory_idx: 0,
          factory_cost: 6,
          emergency_command: 2,
          rivals: {
            set: ["USSR", "Axis"]
          },
          DoW: {
            USSR: false,
            Axis: false
          },
          at_war_with: {
            USSR: false,
            Axis: false
          },
          at_war: false,
          aggressed: false,
          peace_dividends: [],
          enable_USA: true,
          enable_Winter: false,
          great_power: "Britain"
        },
        cities: {
          MainCapital: "London",
          SubCapitals: ["Delhi", "Paris", "Washington"]
        },
        members: {
          Britain: {
            set: ["Middle_East", "Canada", "Gibraltar", "Britain", "Malta", "India"]
          },
          France: {
            set: ["French_North_Africa", "France", "Syria"]
          }
        },
        homeland: {
          Britain: {
            set: ["Glasgow", "London"]
          },
          France: {
            set: ["Marseille", "Lorraine", "Gascony", "Paris"]
          }
        },
        territory: {
          set: [
            "Morocco",
            "Marseille",
            "Paris",
            "Damascus",
            "Delhi",
            "Gascony",
            "Malta",
            "Algiers",
            "Jordan",
            "Tunisia",
            "London",
            "Gibraltar",
            "Bombay",
            "Suez",
            "Egypt",
            "Sfax",
            "Iraq",
            "Ottawa",
            "Sudan",
            "Lorraine",
            "Glasgow",
            "Karachi",
            "Dakar"
          ]
        },
        tracks: {
          POP: 12,
          RES: 11,
          IND: 7
        },
        units: {
          "110": {
            nationality: "Britain",
            tile: "London",
            type: "Fleet",
            cv: 4,
            obj_type: "unit",
            visible: {
              set: ["West"]
            },
            _id: 110
          },
          "111": {
            nationality: "Britain",
            tile: "Gibraltar",
            type: "Fortress",
            cv: 1,
            obj_type: "unit",
            visible: {
              set: ["West"]
            },
            _id: 111
          },
          "112": {
            nationality: "Britain",
            tile: "Karachi",
            type: "Fortress",
            cv: 1,
            obj_type: "unit",
            visible: {
              set: ["West"]
            },
            _id: 112
          },
          "113": {
            nationality: "France",
            tile: "Lorraine",
            type: "Fortress",
            cv: 3,
            obj_type: "unit",
            visible: {
              set: ["West"]
            },
            _id: 113
          },
          "148": {
            nationality: "France",
            tile: "Paris",
            type: "Tank",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["West"]
            },
            _id: 148
          },
          "149": {
            nationality: "Britain",
            tile: "Bombay",
            type: "Submarine",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["West"]
            },
            _id: 149
          },
          "150": {
            nationality: "Britain",
            tile: "London",
            type: "Fortress",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["West"]
            },
            _id: 150
          },
          "151": {
            nationality: "France",
            tile: "Algiers",
            type: "Carrier",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["West"]
            },
            _id: 151
          },
          "152": {
            nationality: "France",
            tile: "Marseille",
            type: "AirForce",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["West"]
            },
            _id: 152
          },
          "153": {
            nationality: "Britain",
            tile: "Suez",
            type: "Tank",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["West"]
            },
            _id: 153
          },
          "154": {
            nationality: "Britain",
            tile: "Delhi",
            type: "Fortress",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["West"]
            },
            _id: 154
          },
          "155": {
            nationality: "Britain",
            tile: "Glasgow",
            type: "AirForce",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["West"]
            },
            _id: 155
          },
          "156": {
            nationality: "Britain",
            tile: "London",
            type: "Submarine",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["West"]
            },
            _id: 156
          },
          "157": {
            nationality: "France",
            tile: "Paris",
            type: "Infantry",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["West"]
            },
            _id: 157
          },
          "158": {
            nationality: "Britain",
            tile: "Delhi",
            type: "Submarine",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["West"]
            },
            _id: 158
          },
          "159": {
            nationality: "Britain",
            tile: "London",
            type: "Carrier",
            obj_type: "unit",
            cv: 1,
            visible: {
              set: ["West"]
            },
            _id: 159
          }
        },
        hand: {
          set: ["action_51", "action_22", "action_54", "action_33", "action_36", "action_46", "action_55", "action_42"]
        },
        technologies: {
          set: []
        },
        secret_vault: {
          set: []
        },
        influence: {
          set: []
        },
        diplomacy: {
          associates: {
            set: []
          },
          protectorates: {
            set: []
          },
          satellites: {
            set: []
          }
        }
      }
    },
    diplomacy: {
      minors: {
        Latin_America: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Portugal: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Spain: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Ireland: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Denmark: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Low_Countries: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Austria: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Norway: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Sweden: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Finland: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Baltic_States: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Poland: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Czechoslovakia: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Hungary: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Yugoslavia: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Albania: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Greece: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Rumania: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Bulgaria: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Afghanistan: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Persia: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Turkey: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        }
      },
      majors: {
        USA: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        }
      },
      neutrals: {
        Latin_America: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Portugal: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Spain: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Ireland: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Denmark: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Low_Countries: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Austria: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Norway: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Sweden: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Finland: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Baltic_States: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Poland: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Czechoslovakia: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Hungary: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Yugoslavia: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Albania: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Greece: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Rumania: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Bulgaria: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Afghanistan: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Persia: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        Turkey: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        },
        USA: {
          units: {
            set: []
          },
          is_armed: false,
          faction: null,
          value: 0
        }
      },
      influence: {}
    },
    cards: {
      action: {
        deck: [
          "action_8",
          "action_50",
          "action_19",
          "action_18",
          "action_14",
          "action_28",
          "action_4",
          "action_2",
          "action_43",
          "action_10",
          "action_5",
          "action_15",
          "action_12",
          "action_26",
          "action_11",
          "action_37",
          "action_35",
          "action_13",
          "action_20",
          "action_52",
          "action_7",
          "action_49",
          "action_23",
          "action_38",
          "action_30",
          "action_24",
          "action_29"
        ],
        discard_pile: []
      },
      investment: {
        deck: [
          "invest_26",
          "invest_15",
          "invest_40",
          "invest_3",
          "invest_33",
          "invest_11",
          "invest_17",
          "invest_44",
          "invest_52",
          "invest_1",
          "invest_54",
          "invest_9",
          "invest_51",
          "invest_37",
          "invest_55",
          "invest_41",
          "invest_48",
          "invest_5",
          "invest_18",
          "invest_14",
          "invest_21",
          "invest_7",
          "invest_49",
          "invest_53",
          "invest_36",
          "invest_29",
          "invest_10",
          "invest_50",
          "invest_46",
          "invest_32",
          "invest_27",
          "invest_16",
          "invest_4",
          "invest_31",
          "invest_30",
          "invest_39",
          "invest_6",
          "invest_42",
          "invest_38",
          "invest_28",
          "invest_45",
          "invest_13",
          "invest_2",
          "invest_25",
          "invest_34",
          "invest_24",
          "invest_20",
          "invest_12",
          "invest_47",
          "invest_19",
          "invest_22",
          "invest_8",
          "invest_43",
          "invest_35",
          "invest_23"
        ],
        discard_pile: []
      },
      info: {
        action: {
          Ties_that_Bind: {
            message: "Add_1_Friendly_(or_remove_1_Rival)_Influence_marker_from_one_of_the_Neutral_nations_listed_after_your_Faction.",
            add: true,
            remove: true,
            from_self: true,
            options: {
              Axis: ["Austria", "Hungary", "Bulgaria"],
              West: ["USA", "Low_Countries", "Czechoslovakia"],
              USSR: ["Spain", "Yugoslavia"]
            }
          },
          Ethnic_Ties: {
            message: "Add_1_Friendly_(or_remove_1_Rival)_Influence_marker_to_one_of_the_Neutral_Nations_listed_after_your_Faction.",
            add: true,
            remove: true,
            from_self: true,
            options: {
              Axis: ["Austria", "Sweden", "Norway"],
              West: ["USA", "Norway", "Low_Countries", "Rumania"],
              USSR: ["Yugoslavia", "Poland", "Bulgaria"]
            }
          },
          Birds_of_a_Feather_1: {
            message: "Add_1_Friendly_(or_remove_1_Rival)_Influence_marker_in_one_of_the_Neutral_Nations_listed_after_your_Faction.",
            add: true,
            remove: true,
            from_self: true,
            options: {
              Axis: ["Poland", "Spain", "Bulgaria", "Baltic_States"],
              West: ["USA", "Low_Countries", "Denmark", "Czechoslovakia"],
              USSR: ["Spain"]
            }
          },
          Foreign_Aid: {
            message: "Reduce_Friendly_IND_by_1_to_add_1_Friendly_(or_remove_1_Rival)_Influence_marker_in_any_Neutral_Nation",
            add: true,
            remove: true
          },
          Brothers_in_Arms: {
            message: "Add_1_Friendly_(or_remove_1_Rival)_Influence_marker_to_one_of_the_Neutral_Nations_listed_after_your_Faction.",
            add: true,
            remove: true,
            from_self: true,
            options: {
              Axis: ["Austria", "Hungary", "Bulgaria"],
              West: ["USA", "Low_Countries", "Rumania"],
              USSR: ["Spain", "Czechoslovakia"]
            }
          },
          Birds_of_a_Feather_2: {
            message: "Add_1_Friendly_(or_remove_1_Rival)_Influence_marker_in_one_of_the_Neutral_Nations_listed_after_your_Faction.",
            add: true,
            remove: true,
            from_self: true,
            options: {
              Axis: ["Portugal", "Spain", "Yugoslavia", "Latin_America"],
              West: ["USA", "Norway", "Denmark", "Sweden"],
              USSR: ["Spain"]
            }
          },
          Isolationism: {
            message: "Remove_1_Rival_Influence_marker_from_the_USA,_Spain,_Low_Countries,_Poland,_Sweden,_or_Turkey",
            remove: true,
            options: ["USA", "Spain", "Low_Countries", "Poland", "Sweden", "Turkey"]
          },
          "Fear_&_Loathing": {
            message: "Remove_a_Rival_Influence_marker_from_one_of_the_Neutral_Nations_listed_after_that_Rival.",
            remove: true,
            from_self: false,
            options: {
              Axis: ["Low_Countries", "Czechoslovakia", "Poland", "Yugoslavia", "Norway", "Rumania", "USA"],
              West: ["Austria", "Hungary", "Bulgaria", "Latin_America", "Turkey", "Persia"],
              USSR: ["Poland", "Rumania", "Turkey", "Finland", "Sweden", "Baltic_States", "USA"]
            }
          },
          Guarantee: {
            message: "Add_1_Friendly_(or_remove_1_Rival)_Influence_marker_in_any_Neutral_Nation_adjacent_to_Rival-controlled_Territory.",
            add: true,
            remove: true,
            adjacent: true,
            from_self: false
          },
          Versailles: {
            message: "Add_1_Friendly_(or_remove_1_Rival)_Influence_marker_from_one_of_the_Neural_Nations_listed_after_your_Faction.",
            add: true,
            remove: true,
            from_self: true,
            options: {
              Axis: ["Austria", "Hungary", "Turkey"],
              West: ["Poland", "Czechoslovakia", "Yugoslavia"],
              USSR: ["Yugoslavia"]
            }
          },
          Intimidation: {
            message: "Add_1_Friendly_(or_remove_1_Rival)_Influence_marker_in_any_Neutral_Nation_adjacent_to_Friendly-controlled_Territory.",
            add: true,
            remove: true,
            adjacent: true,
            from_self: true
          }
        },
        investment: {
          technologies: {
            Atomic_Research_4: "Implosion_trigger_-_wins_game*",
            Atomic_Research_3: "Plutonium_-_allows_step_4",
            Atomic_Research_2: "Breeder_Reactor_-_allows_step_3",
            Atomic_Research_1: "Atomic_Pile_-_allows_step_2",
            Jets: "AFs_FirstFire",
            Rocket_Artillery: "Infantry_FirstFire",
            LSTs: "2_invaders_per_border",
            Heavy_Bombers: "AFs_move_3",
            Motorized_Infantry: "Infantry_moves_3",
            Heavy_Tanks: "Tanks_FirstFire",
            Precision_Bombsight: "AF_can_bomb_IND",
            Air_Defense_Radar: "AFs_2A3_in_friendly_territory",
            Naval_Radar: "Fleets_FirstFire",
            Sonar: "Fleet_S3",
            Industrial_Espionage: "pair_with_revealed_tech_to_achieve_tech"
          },
          intelligence: {
            Spy_Ring: "Blindly_steal_one_card_from_a_Rival",
            Code_Break: "Inspect_rival_hand",
            Agent: "Inspect_rival_units_on_one_tile",
            Sabotage: "Reduce_rival_industry_by_1",
            Coup: "Remove_all_rival_influence_from_1_neutral_minor",
            Double_Agent: "Reverse_Intel_card_effect",
            Mole: "Inspect_secret_vault,_and_steal_tech_(achieve_a_tech_in_the_vault_by_pairing_with_one_of_your_cards)"
          }
        }
      }
    },
    units: {
      rules: {
        Fortress: {
          priority: 1,
          type: "G",
          move: 0,
          A: 2,
          N: 3,
          G: 4,
          S: 3
        },
        AirForce: {
          rebase: 1,
          priority: 2,
          type: "A",
          move: 2,
          A: 3,
          N: 1,
          G: 1,
          S: 1
        },
        Carrier: {
          rebase: 1,
          doubleHit: 1,
          priority: 3,
          type: "N",
          move: 3,
          A: 2,
          N: 2,
          G: 1,
          S: 2
        },
        Submarine: {
          rebase: 1,
          priority: 4,
          type: "S",
          move: 2,
          A: 0,
          N: 1,
          G: 0,
          S: 1
        },
        Fleet: {
          rebase: 1,
          priority: 5,
          type: "N",
          move: 3,
          A: 1,
          N: 3,
          G: 1,
          S: 2
        },
        Tank: {
          priority: 6,
          type: "G",
          move: 3,
          A: 0,
          N: 0,
          G: 2,
          S: 0
        },
        Infantry: {
          priority: 7,
          type: "G",
          move: 2,
          A: 1,
          N: 1,
          G: 3,
          S: 0
        },
        Convoy: {
          not_placeable: 1,
          priority: 8,
          doubleHit: 1,
          type: "N",
          move: 2,
          A: 0,
          N: 0,
          G: 0,
          S: 0
        }
      },
      placeable: {
        xset: ["AirForce", "Submarine", "Tank", "Fortress", "Carrier", "Fleet", "Infantry"]
      },
      priorities: ["Fortress", "AirForce", "Carrier", "Submarine", "Fleet", "Tank", "Infantry", "Convoy"],
      reserves: {
        Germany: {
          Infantry: 13,
          Fortress: 7,
          Tank: 5,
          AirForce: 5,
          Fleet: 6,
          Carrier: 0,
          Submarine: 6
        },
        Italy: {
          Infantry: 4,
          Fortress: 2,
          Tank: 0,
          AirForce: 1,
          Fleet: 3,
          Carrier: 0,
          Submarine: 2
        },
        USSR: {
          Infantry: 16,
          Fortress: 4,
          Tank: 6,
          AirForce: 2,
          Fleet: 3,
          Carrier: 0,
          Submarine: 1
        },
        Britain: {
          Infantry: 6,
          Fortress: 2,
          Tank: 2,
          AirForce: 3,
          Fleet: 5,
          Carrier: 1,
          Submarine: 0
        },
        France: {
          Infantry: 5,
          Fortress: 2,
          Tank: 1,
          AirForce: 2,
          Fleet: 4,
          Carrier: 0,
          Submarine: 1
        },
        USA: {
          Infantry: 4,
          Fortress: 2,
          Tank: 4,
          AirForce: 4,
          Fleet: 4,
          Carrier: 1,
          Submarine: 1
        }
      }
    },
    logger: {
      _object_Logger: {
        stdout: true,
        logs: {
          Axis: [
            "Beginning phase: Setup\n",
            "Game saved\n",
            "Axis draws 14 action cards (now holding 14 cards)\n",
            "USSR draws 6 action cards (now holding 6 cards)\n",
            "West draws 8 action cards (now holding 8 cards)\n"
          ],
          USSR: [
            "Beginning phase: Setup\n",
            "Game saved\n",
            "Axis draws 14 action cards (now holding 14 cards)\n",
            "USSR draws 6 action cards (now holding 6 cards)\n",
            "West draws 8 action cards (now holding 8 cards)\n"
          ],
          West: [
            "Beginning phase: Setup\n",
            "Game saved\n",
            "Axis draws 14 action cards (now holding 14 cards)\n",
            "USSR draws 6 action cards (now holding 6 cards)\n",
            "West draws 8 action cards (now holding 8 cards)\n"
          ]
        },
        updates: {
          Axis: ["USSR draws 6 action cards (now holding 6 cards)\n", "West draws 8 action cards (now holding 8 cards)\n"],
          USSR: ["West draws 8 action cards (now holding 8 cards)\n"],
          West: []
        }
      }
    },
    temp: {
      setup: {
        Axis: {},
        USSR: {},
        West: {}
      }
    }
  },
  waiting_objs: {
    Axis: {
      created: {
        "136": {
          nationality: "USSR",
          tile: "Leningrad",
          type: "Carrier",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 136
        },
        "137": {
          nationality: "USSR",
          tile: "Odessa",
          type: "Submarine",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 137
        },
        "138": {
          nationality: "USSR",
          tile: "Baku",
          type: "Fleet",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 138
        },
        "139": {
          nationality: "USSR",
          tile: "Leningrad",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 139
        },
        "140": {
          nationality: "USSR",
          tile: "Stalingrad",
          type: "Fortress",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 140
        },
        "141": {
          nationality: "USSR",
          tile: "Urals",
          type: "Tank",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 141
        },
        "142": {
          nationality: "USSR",
          tile: "Kiev",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 142
        },
        "143": {
          nationality: "USSR",
          tile: "Baku",
          type: "Carrier",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 143
        },
        "144": {
          nationality: "USSR",
          tile: "Moscow",
          type: "Tank",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 144
        },
        "145": {
          nationality: "USSR",
          tile: "Moscow",
          type: "Fortress",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 145
        },
        "146": {
          nationality: "USSR",
          tile: "Moscow",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 146
        },
        "147": {
          nationality: "USSR",
          tile: "Kharkov",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 147
        },
        "148": {
          nationality: "France",
          tile: "Paris",
          type: "Tank",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 148
        },
        "149": {
          nationality: "Britain",
          tile: "Bombay",
          type: "Submarine",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 149
        },
        "150": {
          nationality: "Britain",
          tile: "London",
          type: "Fortress",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 150
        },
        "151": {
          nationality: "France",
          tile: "Algiers",
          type: "Carrier",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 151
        },
        "152": {
          nationality: "France",
          tile: "Marseille",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 152
        },
        "153": {
          nationality: "Britain",
          tile: "Suez",
          type: "Tank",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 153
        },
        "154": {
          nationality: "Britain",
          tile: "Delhi",
          type: "Fortress",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 154
        },
        "155": {
          nationality: "Britain",
          tile: "Glasgow",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 155
        },
        "156": {
          nationality: "Britain",
          tile: "London",
          type: "Submarine",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 156
        },
        "157": {
          nationality: "France",
          tile: "Paris",
          type: "Infantry",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 157
        },
        "158": {
          nationality: "Britain",
          tile: "Delhi",
          type: "Submarine",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 158
        },
        "159": {
          nationality: "Britain",
          tile: "London",
          type: "Carrier",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 159
        }
      },
      updated: {
        action_31: {
          top: "Austria",
          bottom: "USA",
          season: "Summer",
          priority: "Q",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_31"
        },
        action_25: {
          top: "USA",
          bottom: "Sweden",
          season: "Summer",
          priority: "J",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_25"
        },
        action_32: {
          top: "Czechoslovakia",
          bottom: "Bulgaria",
          season: "Summer",
          priority: "R",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_32"
        },
        action_34: {
          top: "Hungary",
          bottom: "Yugoslavia",
          season: "Summer",
          priority: "T",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_34"
        },
        action_48: {
          wildcard: "Isolationism",
          season: "Fall",
          priority: "H",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_48"
        },
        action_41: {
          top: "Afghanistan",
          bottom: "Hungary",
          season: "Fall",
          priority: "A",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_41"
        },
        action_54: {
          top: "Finland",
          bottom: "Czechoslovakia",
          season: "Fall",
          priority: "N",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_54"
        },
        action_33: {
          top: "Baltic_States",
          bottom: "Finland",
          season: "Summer",
          priority: "S",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_33"
        },
        action_42: {
          wildcard: "Guarantee",
          season: "Fall",
          priority: "B",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_42"
        },
        action_51: {
          top: "Baltic_States",
          bottom: "Sweden",
          season: "Fall",
          priority: "K",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_51"
        },
        action_55: {
          top: "Persia",
          bottom: "Turkey",
          season: "Fall",
          priority: "P",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_55"
        },
        action_22: {
          top: "Low_Countries",
          bottom: "Denmark",
          season: "Summer",
          priority: "G",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_22"
        },
        action_36: {
          top: "Czechoslovakia",
          bottom: "Portugal",
          season: "Summer",
          priority: "V",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_36"
        },
        action_46: {
          top: "Greece",
          bottom: "Latin_America",
          season: "Fall",
          priority: "F",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_46"
        }
      },
      removed: {}
    },
    USSR: {
      created: {
        "148": {
          nationality: "France",
          tile: "Paris",
          type: "Tank",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 148
        },
        "149": {
          nationality: "Britain",
          tile: "Bombay",
          type: "Submarine",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 149
        },
        "150": {
          nationality: "Britain",
          tile: "London",
          type: "Fortress",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 150
        },
        "151": {
          nationality: "France",
          tile: "Algiers",
          type: "Carrier",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 151
        },
        "152": {
          nationality: "France",
          tile: "Marseille",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 152
        },
        "153": {
          nationality: "Britain",
          tile: "Suez",
          type: "Tank",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 153
        },
        "154": {
          nationality: "Britain",
          tile: "Delhi",
          type: "Fortress",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 154
        },
        "155": {
          nationality: "Britain",
          tile: "Glasgow",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 155
        },
        "156": {
          nationality: "Britain",
          tile: "London",
          type: "Submarine",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 156
        },
        "157": {
          nationality: "France",
          tile: "Paris",
          type: "Infantry",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 157
        },
        "158": {
          nationality: "Britain",
          tile: "Delhi",
          type: "Submarine",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 158
        },
        "159": {
          nationality: "Britain",
          tile: "London",
          type: "Carrier",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 159
        }
      },
      updated: {
        action_54: {
          top: "Finland",
          bottom: "Czechoslovakia",
          season: "Fall",
          priority: "N",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_54"
        },
        action_33: {
          top: "Baltic_States",
          bottom: "Finland",
          season: "Summer",
          priority: "S",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_33"
        },
        action_42: {
          wildcard: "Guarantee",
          season: "Fall",
          priority: "B",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_42"
        },
        action_51: {
          top: "Baltic_States",
          bottom: "Sweden",
          season: "Fall",
          priority: "K",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_51"
        },
        action_55: {
          top: "Persia",
          bottom: "Turkey",
          season: "Fall",
          priority: "P",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_55"
        },
        action_22: {
          top: "Low_Countries",
          bottom: "Denmark",
          season: "Summer",
          priority: "G",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_22"
        },
        action_36: {
          top: "Czechoslovakia",
          bottom: "Portugal",
          season: "Summer",
          priority: "V",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_36"
        },
        action_46: {
          top: "Greece",
          bottom: "Latin_America",
          season: "Fall",
          priority: "F",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_46"
        }
      },
      removed: {}
    }
  },
  waiting_actions: {},
  repeats: {
    Axis: {
      created: {
        "135": {
          nationality: "Germany",
          tile: "Ruhr",
          type: "Fortress",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["Axis"]
          },
          _id: 135
        }
      },
      updated: {
        action_27: {
          top: "Finland",
          bottom: "Low_Countries",
          season: "Summer",
          priority: "L",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_27"
        },
        action_44: {
          wildcard: "Brothers_in_Arms",
          season: "Fall",
          priority: "D",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_44"
        },
        action_9: {
          wildcard: "Ethnic_Ties",
          season: "Spring",
          priority: "I",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_9"
        },
        action_40: {
          top: "Spain",
          bottom: "Poland",
          season: "Summer",
          priority: "Z",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_40"
        },
        action_16: {
          top: "Czechoslovakia",
          bottom: "Spain",
          season: "Summer",
          priority: "A",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_16"
        },
        action_21: {
          top: "Rumania",
          bottom: "Yugoslavia",
          season: "Summer",
          priority: "F",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_21"
        },
        action_45: {
          wildcard: "Birds_of_a_Feather_2",
          season: "Fall",
          priority: "E",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_45"
        },
        action_6: {
          top: "Rumania",
          bottom: "Spain",
          season: "Spring",
          priority: "F",
          value: 5,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_6"
        },
        action_47: {
          top: "Finland",
          bottom: "Norway",
          season: "Fall",
          priority: "G",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_47"
        },
        action_53: {
          top: "Bulgaria",
          bottom: "Greece",
          season: "Fall",
          priority: "M",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_53"
        },
        action_39: {
          top: "Rumania",
          bottom: "Persia",
          season: "Summer",
          priority: "Y",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_39"
        },
        action_1: {
          top: "Yugoslavia",
          bottom: "Spain",
          season: "Spring",
          priority: "A",
          value: 4,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_1"
        },
        action_3: {
          top: "USA",
          bottom: "Latin_America",
          season: "Spring",
          priority: "C",
          value: 4,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_3"
        },
        action_17: {
          wildcard: "Foreign_Aid",
          season: "Summer",
          priority: "B",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["Axis"]
          },
          owner: "Axis",
          _id: "action_17"
        }
      },
      removed: {},
      waiting_for: {
        xset: ["USSR", "West"]
      },
      log: "Axis draws 14 action cards (now holding 14 cards)\n"
    },
    USSR: {
      created: {
        "147": {
          nationality: "USSR",
          tile: "Kharkov",
          type: "AirForce",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["USSR"]
          },
          _id: 147
        }
      },
      updated: {
        action_31: {
          top: "Austria",
          bottom: "USA",
          season: "Summer",
          priority: "Q",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_31"
        },
        action_25: {
          top: "USA",
          bottom: "Sweden",
          season: "Summer",
          priority: "J",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_25"
        },
        action_32: {
          top: "Czechoslovakia",
          bottom: "Bulgaria",
          season: "Summer",
          priority: "R",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_32"
        },
        action_34: {
          top: "Hungary",
          bottom: "Yugoslavia",
          season: "Summer",
          priority: "T",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_34"
        },
        action_48: {
          wildcard: "Isolationism",
          season: "Fall",
          priority: "H",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_48"
        },
        action_41: {
          top: "Afghanistan",
          bottom: "Hungary",
          season: "Fall",
          priority: "A",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["USSR"]
          },
          owner: "USSR",
          _id: "action_41"
        }
      },
      removed: {},
      waiting_for: {
        xset: ["West"]
      },
      log: "USSR draws 6 action cards (now holding 6 cards)\n"
    },
    West: {
      created: {
        "159": {
          nationality: "Britain",
          tile: "London",
          type: "Carrier",
          obj_type: "unit",
          cv: 1,
          visible: {
            set: ["West"]
          },
          _id: 159
        }
      },
      updated: {
        action_54: {
          top: "Finland",
          bottom: "Czechoslovakia",
          season: "Fall",
          priority: "N",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_54"
        },
        action_33: {
          top: "Baltic_States",
          bottom: "Finland",
          season: "Summer",
          priority: "S",
          value: 9,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_33"
        },
        action_42: {
          wildcard: "Guarantee",
          season: "Fall",
          priority: "B",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_42"
        },
        action_51: {
          top: "Baltic_States",
          bottom: "Sweden",
          season: "Fall",
          priority: "K",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_51"
        },
        action_55: {
          top: "Persia",
          bottom: "Turkey",
          season: "Fall",
          priority: "P",
          value: 6,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_55"
        },
        action_22: {
          top: "Low_Countries",
          bottom: "Denmark",
          season: "Summer",
          priority: "G",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_22"
        },
        action_36: {
          top: "Czechoslovakia",
          bottom: "Portugal",
          season: "Summer",
          priority: "V",
          value: 8,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_36"
        },
        action_46: {
          top: "Greece",
          bottom: "Latin_America",
          season: "Fall",
          priority: "F",
          value: 7,
          obj_type: "action_card",
          visible: {
            set: ["West"]
          },
          owner: "West",
          _id: "action_46"
        }
      },
      removed: {},
      waiting_for: {
        xset: []
      },
      log: "West draws 8 action cards (now holding 8 cards)\n"
    }
  },
  phase_done: true
};
