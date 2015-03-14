angular.module('aj')

.controller('main', ['$scope', '$http', '$state', function($scope, $http, $state) {
   $scope.arr = ['mom', 'dad', 'sister', 'brother'];
   $scope.name = 'todd';
   $scope.showName = false;
   $scope.what = 'norway'
   $scope.blah = function() {
     console.log($scope.username)
     $scope.showName = true;
   }
   $scope.github = function() {
   $http.get('https://api.github.com/users')
   .success(function(data, status, headers, config) {
       console.log(data);
    }).error(function(data) {
      console.log('could not find this url')
    })

   }

   $scope.other = function() {
     $state.go('other');
   }
}]);
