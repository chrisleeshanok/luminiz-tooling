angular.module('LuminizTooling.services', [])
.factory('productsAPIService', function($http) {
    var productsAPI = {};
    productsAPI.getProducts = function() {
            return $http({
                method: 'GET',
                url:'http://localhost:8888/luminiz/index.php/api/productapi/getAllProducts'
            });
    };
    return productsAPI;
});
