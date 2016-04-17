define(['jquery', 'knockout', 'durandal/app', 'durandal/system', 'plugins/router', 'plugins/http', 'constants'], function ($, ko, app, system, router, http, constants) {
    var
        // Properties
        isLoading = ko.observable(false),
        product = ko.observable(null),
        amount = ko.observable(0),
        errorAmount = ko.observable(null),
        productUrl = constants.baseUrl + 'Products/',
        addToBasketUrl = constants.baseUrl + 'Basket/PostProductToBasket/{id}/{amount}',
        // Handlers

        // Lifecycle

        activate = function (id) {
            isLoading(true);

            return loadProduct(id).then(function (loadedProduct) {
                console.log('Product retrieved ', loadedProduct);
                product(loadedProduct);
                isLoading(false);
            });
        },

        deactivate = function () {
        },

        loadProduct = function (id) {
            return http.get(productUrl + id).then(function (response) {
                return response;
            });
        },

        buyProduct = function () {
            isLoading(true);

            if (amount() < 1 || amount() > product().StorageAmount) {
                errorAmount('Invalid amount!');
                return;
            }
            errorAmount(null);

            addToBasket().then(function (response) {
                console.log('addToBasket response -> ', response);
                isLoading(false);
            });
        },

        addToBasket = function () {
            var url = addToBasketUrl.replace('{id}', product().Id).replace('{amount}', parseInt(amount()));
            console.log(url);
            return http.post(url).then(function (response) {
                return response;
            });
        };

    return {
        // Place your public properties here
        product: product,
        errorAmount: errorAmount,
        amount: amount,
        buyProduct: buyProduct,
        isLoading: isLoading,
        activate: activate,
        deactivate: deactivate,
    };
});
