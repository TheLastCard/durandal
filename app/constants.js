'use strict';

define([], function () {
    var
        debug = false,
        baseUrl = debug ? 'http://localhost:64446/api/' : 'http://durandalapi.knowitsor.no/api/';

    return {
        baseUrl: baseUrl
    };
});