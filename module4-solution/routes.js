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
        controller: 'CategoriesController as CategoriesCtrl',
        resolve: {
        categories : ['MenuDataService', (MenuDataService) => {
            return MenuDataService.getAllCategories();
        }]
        }
      })

      .state('items',{
          url:'/items/{category}',
          templateUrl:'itemsTemplate.html',
          controller:'ItemsController as ItemsCtrl',
          resolve: {
            items: ['MenuDataService', '$stateParams', (MenuDataService, $stateParams) => {
                return MenuDataService.getItemsForCategory($stateParams.category);
            }]
          }
      })
  }
})();
