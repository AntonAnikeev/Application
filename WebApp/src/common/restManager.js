/**
 * Created by admin on 3/28/2016.
 */

angular.module('common')
    .factory('restManager', ['Restangular', function (Restangular) {
        var getDataList = function (url) {
            if(url){
               return Restangular.all('url').getList();
            }
            throw "restManaget.getDataList: url parameter is undefined!"
        };

        var deleteData = function () {
        };

        var updateData = function () {
        };
        return {
            getData: getData(),
            deleteData: deleteData(),
            updateData: updateData()
        };
    }]);
