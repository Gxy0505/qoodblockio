module.exports = function(app) {
  var express = require('express');
  var cookieSession = require('cookie-session');
  var bodyParser = require('body-parser');
  var path = require('path');

  var jsonParser = bodyParser.json();
  var urlencodedParser = bodyParser.urlencoded({ extended: false });
  app.use(jsonParser);
  app.use(urlencodedParser);

  app.set('trust proxy', 1);
  app.use(cookieSession({
    name: 'session',
    keys: ['kyxapptrip'],
    maxAge: 24 * 60 * 60 * 1000
  }));
}