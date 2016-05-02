'use strict';

define(['knockout', 'plugins/router', 'durandal/app', 'productsFactory', 'categoriesFactory', 'Q'], function (ko, router, app, productsFactory, categoriesFactory, Q) {
    var
        isLoading = ko.observable(false),
        categories = ko.observable([]),
        product = ko.observable(''),
        test = 'test',

        activate = function (id) {
            isLoading(true);
            let promises = [
                productsFactory.loadProduct(id).then(function (response) {
                    return response;
                }),
                categoriesFactory.loadCategories().then(function (response) {
                    return response;
                })
            ];

            return Q.all(promises).then((values) => {
                isLoading(false);
                product(values[0]);
                categories(values[1]);
                return true;
            });
        },
        submitChanges = function () {
            console.log('submitChanges');
        };


    return {
        activate: activate,
        submitChanges: submitChanges,
        product: product,
        categories: categories
    };
});