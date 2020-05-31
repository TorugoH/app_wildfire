angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('choice', {
    url: '/page1',
    templateUrl: 'templates/choice.html',
    controller: 'choiceCtrl'
  })

  .state('signup', {
    url: '/page2',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/page3',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('fireMapping', {
    url: '/page4',
    templateUrl: 'templates/fireMapping.html',
    controller: 'fireMappingCtrl'
  })

  .state('search', {
    url: '/page13',
    templateUrl: 'templates/search.html',
    controller: 'searchCtrl'
  })

  .state('profile', {
    url: '/page6',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('fireWarning', {
    url: '/page7',
    templateUrl: 'templates/fireWarning.html',
    controller: 'fireWarningCtrl'
  })

  .state('graphics', {
    url: '/page12',
    templateUrl: 'templates/graphics.html',
    controller: 'graphicsCtrl'
  })

  .state('main', {
    url: '/page10',
    templateUrl: 'templates/main.html',
    controller: 'mainCtrl'
  })

$urlRouterProvider.otherwise('/page10')


});