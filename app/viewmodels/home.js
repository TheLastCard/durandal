define(['knockout', 'durandal/app', 'durandal/system', 'plugins/http', 'constants'], function (ko, app, system, http, constants) {
    var
        // Public Properties
        products = ko.observableArray(),
        isLoading = ko.observable(false),
        productsUrl = constants.baseUrl + 'Products',

        // Private Properties
        messageTitle = 'Application Message',
        message = 'Hello from your application',

        onButtonClick = function onButtonClick() {
            app.showMessage(message, messageTitle);
        },

        // Lifecycle Methods
        activate = function activate() {
            isLoading(true);

            return loadProducts().then(function (loadedProducts) {
                console.log('Products retrieved ', loadedProducts);
                products(loadedProducts);
                isLoading(false);
            });
        },

        deactivate = function deactivate() {
        },

        // Private Methods
        loadProducts = function () {
            return http.get(productsUrl).then(function (response) {
                return response;
            });
        };

    return {
        products: products,
        isLoading: isLoading,

        onButtonClick: onButtonClick,

        activate: activate,
        deactivate: deactivate
    };
});
