/**
 * Created by admin on 3/15/2016.
 */
angular.module('mainContext')
    .controller('mainContextController',['$scope','taskService', function($scope,taskService){
        var createTasks = function() {
            return [taskService.getTask('first',10), taskService.getTask('second',20)];
        };
        $scope.taskListsContainer = createTasks();
            //return taskService.getTask('first,10');
        //};
    }]);

