/**
 * Created by admin on 3/15/2016.
 */
angular.module('mainContext')
    .controller('mainContextController',['$scope','taskService', function($scope,taskService){
        $scope.getTasks = function(){
            return [taskService('first,10'),taskService('second,20')];
        };
    }]);

