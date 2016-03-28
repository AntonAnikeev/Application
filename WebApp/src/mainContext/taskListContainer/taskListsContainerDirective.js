/**
 * Created by admin on 3/16/2016.
 */
angular.module('mainContext')
    .directive('taskListsContainerDirective',function(){
        return {
            restrict : "EA",
            templateUrl: 'templates/taskListsContainer.tmpl.html',
            //template:'<div><div>{{tasks[0].name}}</div></div>',
            replace: false,
            scope:{
                taskLists: "="
            }
        };
    });