'use strict';

define(['knockout', 'komapping', 'plugins/http', 'constants'], function (ko, komapping, http, constants) {
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
        },
        updateProduct = function (id, product) {

            if (id && product) {
                return http.put(productUrl.replace('{id}', id), product ).then(function (response) {
                    return response;
                });
            }
            throw 'id or product is not defined';
        },
        productModel = function (data) {
            komapping.fromJS(data, {}, this);
            console.log(data);
            this.Category = {};
            this.Category.Id = data.Category ? ko.observable(data.Category.Id) : ko.observable(null);
            return this;
        };

    return {
        loadProducts: loadProducts,
        loadProduct: loadProduct,
        updateProduct: updateProduct,
        productModel: productModel
    };
});

