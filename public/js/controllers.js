angular.module('LuminizTooling.controllers', [])
.controller('productController', function(productsAPIService) {
    this.safeProductList = [];
    this.productList = [];


    productsAPIService.getProducts().success(function(response) {
        this.productList = this.safeProductList.concat(response.result);
    }.bind(this));

    //productService.getProducts().then(function(products) {
    //    productList.productData = products;
    //});
});
