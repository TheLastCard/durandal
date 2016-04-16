define(["knockout", "durandal/app", "durandal/system", "plugins/http" ], function (ko, app, system, http) {
    var
        // Public Properties
        products = ko.observableArray(),
        selectedTodo = ko.observable(),
        isLoading = ko.observable(false),
        productsUrl = "http://durandal-api.kyberutv.no/api/Values",

        // Private Properties
        messageTitle = "Application Message",
        message = "Hello from your application",

        // Event Handlers
        onTodoClick = function onTodoClick(note) {
            app.showMessage(note.content, note.title);
        },

        onButtonClick = function onButtonClick() {
            app.showMessage(message, messageTitle);
        },

        // Lifecycle Methods
        activate = function activate() {
            isLoading(true);

            return loadProducts().then(function (loadedProducts) {
                products(loadedProducts);
                isLoading(false);
            });
        },

        deactivate = function deactivate() {
            selectedTodo(null);
        },

        // Private Methods
        loadProducts = function () {
            console.log("loading products");
            return http.get(productsUrl).then(function (response) {
                console.log("response ->", response);
                return response;
            });
        };

    return {
        products: products,
        selectedTodo: selectedTodo,
        isLoading: isLoading,

        onTodoClick: onTodoClick,
        onButtonClick: onButtonClick,

        activate: activate,
        deactivate: deactivate
    };
});
