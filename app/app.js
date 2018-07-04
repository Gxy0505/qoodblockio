var cluster = require('cluster');
var path = require('path');

if (cluster.isMaster) {
  var numCPUs = require('os').cpus().length;
  for (var i = 0; i < numCPUs; i++) {
    var workers = [];
    ! function spawn(i) {
      workers[i] = cluster.fork();
      workers[i].on('exit', function() {
        spawn(i);
      });
    }(i);
  }
} else {
  var express = require('express');
  var app = express();
  require('./server')(app);
  app.use(express.static(path.normalize(__dirname + '/../dist')));
  app.get('*', function(req, res, next) {
    if (!req.xhr) {
      res.sendFile(path.normalize(__dirname + '/../dist/index.html'));
    }
  });
  app.listen(process.env.NODE_PORT || 5000);
}
