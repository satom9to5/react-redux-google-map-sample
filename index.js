"use strict";

const express = require('express'),
    path = require('path'),
    points = require('./server/points'),
    app = new express(),
    port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

app.get("/points", function(req, res) {
  const minlat = req.query.minlat || null;
  const maxlat = req.query.maxlat || null;
  const minlng = req.query.minlng || null;
  const maxlng = req.query.maxlng || null;

  if (!minlat || !maxlat || !minlng || !maxlng) {
    res.json({
      status: false,
    });

    return;
  }

  res.json(points.find(minlat, maxlat, minlng, maxlng));
})

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
})
