/**
 * Created by admin on 3/16/2016.
 */
angular.module('mainContext')
    .service('taskService',function(){
        this.getTask = function(name,intValue){
            return{name: name, intValue: intValue};
        };
    });

