'use strict';

define(['knockout'], function (ko) {
    var
        loggedIn = ko.observable(true),
        activate = function () {
        };


    return {
        loggedIn: loggedIn,
        activate: activate
    };
});