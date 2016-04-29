'use strict';

define(['jquery', 'knockout', 'durandal/app', 'durandal/system', 'plugins/router'], function ($, ko, app, system, router) {
    var
        // Properties

        // Handlers

        // Lifecycle

        activate = function () {
        },

        deactivate = function () {
        },

        login = function () {
            console.log('TODO: Add form serialization and send to server');
        };

    return {
        // Place your public properties here
        activate: activate,
        deactivate: deactivate,
        login: login
    };
});
