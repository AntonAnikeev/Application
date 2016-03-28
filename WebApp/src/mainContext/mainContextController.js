/**
 * Created by admin on 3/15/2016.
 */
angular.module('mainContext')
    .controller('mainContextController',['$scope','taskListService', function($scope,taskListService){
        //var createTasks = function() {
        //    return [taskService.getTask('first',10), taskService.getTask('second',20)];
        //};
        var getTaskList = function(){
            return taskListService.getAll();
        };
        $scope.taskListsContainer = getTaskList();
            //return taskService.getTask('first,10');
        //};
    }]);

