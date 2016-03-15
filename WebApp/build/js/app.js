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

var app = angular.module('test', []);


app.controller('myController', ['$scope', function ($scope) {
    $scope.Name = 'signalR';

    $scope.TestClick = function(){
        $scope.test = 'test';
    };
}]);
/**
 * Created by antona on 12/28/2015.
 */
var test = 'lalalala';