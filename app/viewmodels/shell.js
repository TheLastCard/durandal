define(['plugins/router', "durandal/app"], function (router, app) {
    return {
        router: router,

        search: function () {
            app.showMessage("Not Implemented", "Error");
        },

        activate: function () {
            router.map([
                { route: '', moduleId: 'viewmodels/home', title: "Home", nav: true },
                { route: "products", moduleId: "viewmodels/products", title: "Products", nav: true },
                { route: "products/:id", moduleId: "viewmodels/product"}
                /*{durandal:routes}*/
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});