/**
 * Created by admin on 3/28/2016.
 */
//Create taskList
//Update taskList
//Delete taskList

//TakeTheTaskListModel

angular.module('mainContext')
    .service('taskListService',['restManager','restRoutesConfig', function(restManager, restRoutesConfig){
        var TaskListModel = function(data)
        {
            this.name;
            this.id;
            this.tasks;
            this.taskNumber;

            if (data) {
                this.setData(data);
            }
        };

        TaskListModel.prototype.setData =function(data){
            return angular.extend(this, data);
        };

        //TaskListModel.prototype.getAll = function(){
        //
        //};

        var model = {
            getAll: function(){
                restManager.getDataList(restRoutesConfig.taskListsRoute)
                    .then(function(taskLists){
                        return _.map(taskLists,function(taskList){
                            return new TaskListModel(taskList);
                        });
                    });
            }
        };

        return model;
    }]);