'use strict';

angular.module('gramesApp.auth', [
  'gramesApp.constants',
  'gramesApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
