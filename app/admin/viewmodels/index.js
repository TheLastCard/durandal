'use strict';

define(['knockout', 'plugins/router', 'durandal/app', 'plugins/http', 'auth', 'constants', 'Q'], function (ko, router, app, http, auth, constants, Q) {
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId: 'admin',
            fromParent: true
        }).map([
            { route: 'products', moduleId: 'viewmodels/products', title: 'Admin Products', nav: true },
            { route: 'products/:id', moduleId: 'viewmodels/product', title: 'Admin Product', nav: true }
        ]).buildNavigationModel();

    return {
        router: childRouter //the property on the view model should be called router
    };
});