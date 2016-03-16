/**
 * Created by admin on 3/16/2016.
 */
angular.module('mainContext')
    .directive('taskListDirective',function(){
        return {
            restrict : "EA",
            templateUrl: 'templates/taskList.tmpl.html',
            //template:'<div><div>{{tasks}}</div></div>',
            replace: false,
            scope:{
                tasks: "@"
            },
            link: function(scope, iElement, iAttrs){
                console.log(scope.tasks);
            }
        };
    });