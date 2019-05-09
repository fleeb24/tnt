class NAssets {
  constructor() {
    this.tilePositions = {};
    this.tileNames;
    this.trackPositions = {};
    this.nationPositions = {};
    this.nationNames;
    this.unitCountInfo;
    this.nationalityNames;
    this.unitTypeNames;
    this.factionSetup;
    this.factionNames;
  }
  initAssets(callback) {
    //console.log("loading...");
    this.calculateTrackPositions();
    loadYML("/assets/config/map_pos.yml", data => {
      this.tilePositions = {};
      for (const idTile in data) {
        let id = replaceAll(idTile, " ", "_");
        this.tilePositions[id] = data[idTile];
      }
      this.tileNames = Object.keys(this.tilePositions);
      loadYML("/assets/config/nations.yml", data => {
        this.nationPositions = {};
        for (const idNation in data) {
          let id = replaceAll(idNation, " ", "_");
          this.nationPositions[id] = data[idNation];
        }
        this.nationNames = Object.keys(this.nationPositions);
        loadYML("/assets/config/unit_count.yml", data => {
          this.unitCountInfo = data;
          this.nationalityNames = Object.keys(data);
          this.unitTypeNames = Object.keys(data["Germany"]);

          loadYML("/assets/config/faction_setup.yml", data => {
            this.factionSetup = data;
            this.factionNames = Object.keys(data);
            console.log("...finished loading assets!");
            callback();
          });
        });
      });
    });
  }
  calculateTrackPositions() {
    let arr = [];
    let x = 580;
    let y = 2120;
    for (let i = 0; i < 25; i++) {
      arr.push({x: x, y: y});
      x += 66;
    }
    this.trackPositions.Axis = arr;

    arr = [];
    x = 1310;
    y = 76;
    for (let i = 0; i < 20; i++) {
      arr.push({x: x, y: y});
      x -= 66;
    }
    for (let i = 20; i < 25; i++) {
      arr.push({x: x, y: y});
      y += 66;
    }
    this.trackPositions.West = arr;

    arr = [];
    x = 2210;
    y = 76;
    for (let i = 0; i < 18; i++) {
      arr.push({x: x, y: y});
      x += 66;
    }
    for (let i = 18; i < 25; i++) {
      arr.push({x: x, y: y});
      y += 66;
    }
    this.trackPositions.USSR = arr;
  }
}