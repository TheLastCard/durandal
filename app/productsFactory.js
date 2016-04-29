'use strict';

define(['plugins/http', 'constants'], function (http, constants) {
    var
        productsUrl = constants.baseUrl + 'Products',
        loadProducts = function () {
            return http.get(productsUrl).then(function (response) {
                return response;
            });
        };

    return {
        loadProducts: loadProducts
    };
});

