'use strict';

angular.module('calendarApp4000App', ['calendarApp4000App.auth', 'calendarApp4000App.admin', 'calendarApp4000App.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'validation.match']).config(function ($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
});
//# sourceMappingURL=app.js.map
