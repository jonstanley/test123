'use strict';

/* Controllers */
var acmeMsgAppControllers = angular.module('acmeMsgAppControllers', []);

acmeMsgAppControllers.controller('LogonCtrl', function($scope, $location) {
    $scope.go = function(path) {
        $location.path('/'+path+'/');
    };
});

acmeMsgAppControllers.controller('DashboardCtrl', function($scope, $http) {
	$http.get('/db/messages.json').success(function(data) {
	$scope.messages = data;
	});
	$scope.orderProp = Array('-todo', 'name.last');
	$scope.go = function(viewMsg) {
          var hash = '/message/';
		  alert(hash);
        };
});

acmeMsgAppControllers.controller('SingleMsgCtrl', function($scope, $http, $routeParams) {
	$http.get('/db/messages.json').success(function(data) {
	$scope.messages = data;
	});
	$scope.orderProp = 'id';
});