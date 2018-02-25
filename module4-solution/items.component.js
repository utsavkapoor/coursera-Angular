(() => {
    'use strict';

    const app = angular.module('MenuApp');

    app.component('listItem',{
        templateUrl: 'itemscomponent.template.html',
        bindings: {
            items: '<'
        }
    });
})();
