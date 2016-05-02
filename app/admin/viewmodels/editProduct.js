'use strict';

define(['knockout', 'komapping', 'plugins/router', 'durandal/app', 'productsFactory', 'categoriesFactory', 'Q'], function (ko, komapping, router, app, productsFactory, categoriesFactory, Q) {
    var
        isLoading = ko.observable(false),
        categories = ko.observable([]),
        product = ko.observable(null),

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
                this.product = new productsFactory.productModel(values[0]);
                this.categories = komapping.fromJS(values[1]);
                return true;
            });
        },
        submitChanges = function () {
            isLoading(true);
            var updatedProduct = ko.mapping.toJS(this.product);
            productsFactory.updateProduct(updatedProduct.Id, updatedProduct).then(function (response) {
                console.log(response);
                isLoading(false);
            });
        };

    return {
        activate: activate,
        submitChanges: submitChanges,
        product: product,
        categories: categories
    };
});