var angular,
    app;
    angular = require('angular');

app = angular.module('electronPoc');
//Controller
app.controller('HomeCtrl', [function () {
  var self = this;
  self.wellcomeMessage = "Hello World!";
}]);
