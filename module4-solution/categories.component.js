(function (){
  'use strict';
  // No need to declare controller with as. In Components we have $crtl which do it for us
  angular.module('MenuApp')
  .component('categories',{
    templateUrl: 'categoriescomponent.template.html',
    bindings: {
      items:'<'
    }
  });
})();
