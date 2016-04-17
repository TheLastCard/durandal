define(["jquery", "knockout", "durandal/app", "durandal/system", "plugins/router", "plugins/http"], function ($, ko, app, system, router, http) {
    var
        // Properties
        isLoading = ko.observable(false),
        product = ko.observable(null),
        amount = ko.observable(0),
        productUrl = "http://durandal-api.kyberutv.no/api/Products/",
        addToBasketUrl = "http://durandal-api.kyberutv.no/api/Basket/AddProduct",
        // Handlers

        // Lifecycle

        activate = function (id) {
            isLoading(true);

            loadProduct(id).then(function (loadedProduct) {
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
            addToBasket().then(function (response) {
                console.log("buyProduct response -> ", response);
                isLoading(false);
            });
        },

        addToBasket = function () {
            return http.post(addToBasketUrl, { Id: product().Id, Amount: amount() }).then(function (response) {
                return response;
            });
        };

    return {
        // Place your public properties here
        product: product,
        amount: amount,
        buyProduct: buyProduct,
        isLoading: isLoading,
        activate: activate,
        deactivate: deactivate,
    };
});
