var angular,
    app,
    ngRoute;

angular = require('angular');
ngRoute = require('angular-route');
app = angular.module('electronPoc', ['ngRoute'])
//Routes
.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html'
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  });
});
