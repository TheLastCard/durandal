'use strict';

define(['knockout', 'durandal/app', 'productsFactory'], function (ko, app, productsFactory) {
    var
        // Public Properties
        products = ko.observableArray(),
        isLoading = ko.observable(false),
        

        // Private Properties
        messageTitle = 'Application Message',
        message = 'Hello from your application',

        onButtonClick = function() {
            app.showMessage(message, messageTitle);
        },

        // Private Methods

        // Lifecycle Methods
        activate = function() {
            isLoading(true);

            return productsFactory.loadProducts().then(function (loadedProducts) {
                console.log('Products retrieved ', loadedProducts);
                products(loadedProducts);
                isLoading(false);
            });
        },

        deactivate = function() {
        };

    return {
        products: products,
        isLoading: isLoading,

        onButtonClick: onButtonClick,

        activate: activate,
        deactivate: deactivate
    };
});
