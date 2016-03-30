/**
 * Created by admin on 3/15/2016.
 */
angular.module('mainContext')
    .controller('mainContextController', ['$scope', 'taskListService', function ($scope, taskListService) {
        //var createTasks = function() {
        //    return [taskService.getTask('first',10), taskService.getTask('second',20)];
        //};
        taskListService.getAll().then(function (result) {
            $scope.taskListsContainer = result;
        });
        //return taskService.getTask('first,10');
        //};
    }]);

