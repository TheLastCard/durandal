requirejs.config({
    paths: {
        'text': '../bower_components/requirejs-text/text',
        'durandal': '../bower_components/durandal/js',
        'plugins': '../bower_components/durandal/js/plugins',
        'transitions': '../bower_components/durandal/js/transitions',
        'knockout': '../bower_components/knockout.js/knockout.debug',
        'jquery': '../bower_components/jquery/dist/jquery',
        'modernizr': '../bower_components/modernizr/modernizr'
    },
    shim: {
    
    modernizr: {
            exports: 'Modernizr'
        }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'plugins/dialog'], function (system, app, viewLocator, dialog) {
    //>>excludeStart('build', true);
    system.debug(true);
    //>>excludeEnd('build');

    app.title = 'Durandal Webshop';

    app.configurePlugins({
        router:true,
        dialog: true,
        widget: true
    });

    app.start().then(function () {
        // Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        // Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Set messagebox defaults
        dialog.MessageBox.setDefaults({ buttonClass: 'button', primaryButtonClass: 'primary', secondaryButtonClass: 'secondary' });

        // Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell');
    });
});
