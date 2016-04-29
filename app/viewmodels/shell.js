'use strict';

define(['knockout', 'plugins/router', 'durandal/app', 'plugins/http', 'auth', 'constants'], function (ko, router, app, http, auth, constants) {
    var
        basket = ko.observableArray(),
        isLoading = ko.observable(false),
        basketUrl = constants.baseUrl + 'Basket',
        loggedIn = ko.observable(false),

        getBasket = function () {
            return http.get(basketUrl).then(function (response) {
                return response;
            });
        },

        activate = function () {
            isLoading(true);
            loggedIn = auth.loggedIn();

            router.guardRoute = function (model, route) {
                return loggedIn ? route : route;
            };

            router.map([
                { route: '', moduleId: 'viewmodels/home', title: 'Home', nav: true },
                { route: 'products', moduleId: 'viewmodels/products', title: 'Products', nav: true },
                { route: 'products/:id', moduleId: 'viewmodels/product' },
                { route: 'login', moduleId: 'viewmodels/login', title: 'Login', nav: true, navHide: true },
                { route: 'register', moduleId: 'viewmodels/register', title: 'Register', nav: true, navHide: true },
                { route: 'admin*interfaces', moduleId: 'admin/viewmodels/index', title: 'Admin Home', nav: true, hash: '#admin' }
                /*{durandal:routes}*/
            ]).buildNavigationModel();

            getBasket().then(function (retrievedBasket) {
                console.log('Basket retrieved ', retrievedBasket);
                basket(retrievedBasket);
                isLoading(false);
            });

            return router.activate();
        },

        search = function () {
            app.showMessage('Not Implemented', 'Error');
        };

    return {
        router: router,
        basket: basket,
        isLoading: isLoading,
        activate: activate,
        search: search,
        loggedIn: loggedIn
    };
});