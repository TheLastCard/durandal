'use strict';

define(['knockout', 'plugins/router', 'durandal/app', 'productsFactory'], function (ko, router, app, productsFactory) {
    var
        products = ko.observableArray(),
        heading = 'Admin Products',
        isLoading = ko.observable(false),

        activate = function () {
            isLoading(true);

            return productsFactory.loadProducts().then(function (loadedProducts) {
                products(loadedProducts);
                isLoading(false);
            });
        };


    return {
        products: products,
        heading: heading,
        activate: activate
    };
});