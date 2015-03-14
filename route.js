angular.module('aj', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
          url: '/',
          templateUrl:'main.html',
          controller: 'main'
        })
        .state('other', {
          url: '/other',
          templateUrl:'other.html'
        })

}])
