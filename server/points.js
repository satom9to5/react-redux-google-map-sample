"use strict";

const fs = require('fs')
    ;

let featureList = [];

fs.readdir('./data/', (err, files) => {
  if (err) {
    throw err;
  }

  files.forEach(file => {
    fs.readFile('./data/' + file, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      const geojson = JSON.parse(data);
      let preforder = 1;
      geojson.features.forEach(feature => {
        feature.properties.id = feature.properties.P34_001 + '-' + preforder;
        featureList.push(feature);
        preforder++;
      });
    });
  });
});

module.exports = {
  find: (minlat, maxlat, minlng, maxlng) => {
    return featureList.filter(point => {
      const coordinates = point.geometry.coordinates;

      return (
        coordinates[1] >= minlat &&
        coordinates[1] <= maxlat &&
        coordinates[0] >= minlng &&
        coordinates[0] <= maxlng
      );
    });
  }
}
