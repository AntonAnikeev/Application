/**
 * Created by admin on 3/16/2016.
 */
angular.module('mainContext')
    .directive('taskListDirective',function(){
        return {
            restrict : "E",
            templateUrl: 'templates/taskList.tmpl.html',
            scope:{
                tasks: "&"
            },
            //link: function(scope, iElement, iAttrs){
            //
            //}
        };
    });