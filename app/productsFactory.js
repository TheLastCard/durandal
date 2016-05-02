'use strict';

define(['plugins/http', 'constants'], function (http, constants) {
    var
        productsUrl = constants.baseUrl + 'Products',
        productUrl = constants.baseUrl + 'Products/{id}',
        loadProducts = function () {
            return http.get(productsUrl).then(function (response) {
                return response;
            });
        },
        loadProduct = function (id) {
            if (id) {
                return http.get(productUrl.replace('{id}', id)).then(function (response) {
                    return response;
                });
            }
            throw 'id is not defined';
        }

    return {
        loadProducts: loadProducts,
        loadProduct: loadProduct
    };
});

