/**
 * Created by admin on 3/28/2016.
 */
//Create taskList
//Update taskList
//Delete taskList

//TakeTheTaskListModel

angular.module('mainContext')
    .service('taskListService',['',function(){
        var TaskListModel = function(data)
        {
            if (data) {
                this.setData(data);
            }
        };

        TaskListModel.prototype.setData =function(data){
            return angular.extend(this, data);
        };

        TaskListModel.prototype.getAll = function(){
                
        };



    }]);