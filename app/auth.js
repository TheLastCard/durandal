define(['knockout'], function (ko) {
    var
        loggedIn = ko.observable(false),
        activate = function () {
        };


    return {
        loggedIn: loggedIn,
        activate: activate
    };
});