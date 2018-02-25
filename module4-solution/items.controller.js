(() => {
    'use strict';
    const app = angular.module('MenuApp');

    app.controller('ItemsController',ItemsController);

    ItemsController.$inject = ['items'];

    function ItemsController(items){
        let ItemsCtrl = this;
        ItemsCtrl.items = items;
    }
})();
