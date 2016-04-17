define(["knockout", "durandal/app", "durandal/system", "plugins/http" ], function (ko, app, system, http) {
    var
        // Public Properties
        products = ko.observableArray(),
        isLoading = ko.observable(false),
        productsUrl = "http://durandal-api.kyberutv.no/api/Products",

        // Private Properties
        messageTitle = "Application Message",
        message = "Hello from your application",

        onButtonClick = function onButtonClick() {
            app.showMessage(message, messageTitle);
        },

        // Lifecycle Methods
        activate = function activate() {
            isLoading(true);

            loadProducts().then(function (loadedProducts) {
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
