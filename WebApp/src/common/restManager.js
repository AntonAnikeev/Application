/**
 * Created by admin on 3/28/2016.
 */

angular.module('common')
    .factory('restManager', ['Restangular', function (Restangular) {

        Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
            //if(response.status === 403) {
            //    });
            //    return false; // error handled
            //}
            //return true; // error not handled
        });

        var getDataList = function (url) {
            if(url){
               return Restangular.all(url).getList();
            }
            throw "restManaget.getDataList: url parameter is undefined!"
        };

        var getDataEntity = function(params){

        };

        var deleteData = function () {
        };

        var updateData = function () {
        };
        return {
            getDataList: getDataList(url),
            getDataEntity:getDataEntity(params),
            deleteData: deleteData(),
            updateData: updateData()
        };
    }]);
