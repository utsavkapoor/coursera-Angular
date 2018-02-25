(() => {
    'use strict';

    const app = angular.module('MenuApp');

    app.controller('CategoriesController',CategoriesController);

    CategoriesController.$inject = ['categories'];

    function CategoriesController(categories){
        let CategoriesCrtl = this;
        console.log(categories);
        CategoriesCrtl.categories = categories;
    }
})();
