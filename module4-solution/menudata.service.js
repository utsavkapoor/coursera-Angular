(function (){
  'use strict';

  var dataModule = angular.module('data');

  dataModule.service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$q','$http'];

  function MenuDataService($q,$http){
    var menudata = this;

    menudata.getAllCategories = function (){
      return $http.get('https://davids-restaurant.herokuapp.com/categories.json')
      .then(function(response){
        return response.data;
      })
      .catch(function(error){
        console.log(error);
        return [];
      });
    };

    menudata.getItemsForCategory = function(categoryShortName){
      return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json",{
        params: {category:categoryShortName}
      }).then(function(response){
        return response.data.menu_items;
      }).catch(function(err){
        console.log(err);
        return [];
      });
    };
  }
})();
