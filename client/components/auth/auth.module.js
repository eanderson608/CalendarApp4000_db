'use strict';

angular.module('calendarApp4000App.auth', [
  'calendarApp4000App.constants',
  'calendarApp4000App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
