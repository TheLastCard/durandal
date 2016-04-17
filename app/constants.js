

define([], function () {
    var
        debug = false,
        baseUrl = debug ? 'http://localhost:64446/api/' : 'http://durandal-api.kyberutv.no/api/';

    return {
        baseUrl: baseUrl
    };
});