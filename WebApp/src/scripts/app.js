//var app = angular.module('test', ['eehSignalR']);
////var app = angular.module('test', []);
//
//
//app.controller('myController', ['$scope', function ($scope) {
//    $scope.Name = 'signalR';
//
//    $scope.TestClick = function(){
//        $scope.test = 'test';
//    };
//}]);
//
//app.controller('signalRController',['$scope','eehSignalR',function ($scope, eehSignalR) {
//    var hub = {run:function(){
//        $.connec
//    }};
//    //eehSignalR.url = '';
//    // $scope.StartSignalR = function () {
//    //    var hub = eehSignalR.getHub('assetHub');
//        //hub.client.hello = function (message) {
//        //    $scope.message = message;
//        //    $scope.$apply();
//        //};
//        //eehSignalR.start();
//    //};
//}]);
////app.factory('SignalRService',['$rootScope','Hub', '$timeout', function($rootScope, Hub, $timeout){
////    var hub = new Hub('Test',{
////
////    });
////}]);

var app = angular.module('test', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index', {
            url: 'test',
            views: {
                'viewA': {
                    templateUrl: 'templates/test.tmpl.html'
                }
            }
        })
        .state('default', {
                url: '/',
                views: {
                    'headerView' :{
                        templateUrl: 'templates/header.tmpl.html'
                    },
                    'fotterView': {
                        templateUrl: 'templates/footer.tmpl.html'
                    },
                    'mainContextView':{
                        templateUrl: 'templates/mainContext.tmpl.html'
                    }
                }
            });
}]);

//app.controller('mainController',['',function(){
//
//}]);

app.controller('myController', ['$scope', function ($scope) {
    $scope.Name = 'signalR';

    $scope.TestClick = function () {
        $scope.test = 'test';
    };
}]);