'use strict';

define(['plugins/http', 'constants'], function (http, constants) {
    var
        categoriesUrl = constants.baseUrl + 'Category',
        loadCategories = function () {
            return http.get(categoriesUrl).then(function (response) {
                return response;
            });
        };

    return {
        loadCategories: loadCategories
    };
});

