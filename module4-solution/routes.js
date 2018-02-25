(function (){

  angular.module('MenuApp')
  .config(RouterConfig);

  RouterConfig.$inject = ['$stateProvider','$urlRouterProvider'];

  function RouterConfig($stateProvider,$urlRouterProvider){
    // Default
    $urlRouterProvider.otherwise('/');

    // setup states
    // home page
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl:'homeTemplate.html'
      })
      // categories Page
      .state('categories', {
        url:'/categories',
        templateUrl:'categoriesTemplate.html',

      })
  }
})();
