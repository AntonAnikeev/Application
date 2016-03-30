/**
 * Created by admin on 3/28/2016.
 */
//Create taskList
//Update taskList
//Delete taskList

//TakeTheTaskListModel

angular.module('mainContext')
    .service('taskListService', ['restManager', 'restRoutesConfig', '$q', function (restManager, restRoutesConfig, $q) {
        var TaskListModel = function (data) {
            this.name;
            this.id;
            this.tasks;
            this.taskNumber;

            if (data) {
                this.setData(data);
            }
        };

        TaskListModel.prototype.setData = function (data) {
            return angular.extend(this, data);
        };

        //TaskListModel.prototype.getAll = function(){
        //
        //};

        return {
            getAll: function () {
                var deferred = $q.defer();
                restManager.getDataList(restRoutesConfig.taskListsRoute)
                    .then(function (taskLists) {
                        var result = _.map(taskLists, function (taskList) {
                            return new TaskListModel(taskList);
                        });
                        deferred.resolve(result);
                    })
                    .catch(function(error){
                        deferred.reject(error);
                    });
                return deferred.promise;
            }
        };
    }]);