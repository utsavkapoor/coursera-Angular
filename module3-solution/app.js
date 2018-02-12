(function(){
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .factory('MenuSearchServiceFactory',MenuSearchServiceFactory)
  .directive('foundItems',FoundItems);

  function FoundItems(){
    var ddo = {
      restrict:'AE',
      scope: {
        answer: '<foundItem',
        onRemove:'&'
      },
      templateUrl: 'list.html',
    };

    return ddo;
  }

  function FoundItemsDirectiveController(){
    var list = this;
  }

  NarrowItDownController.$inject = ['MenuSearchServiceFactory'];
  MenuSearchService.$inject = ['$http','$q'];


  function NarrowItDownController(MenuSearchServiceFactory){
    var controller = this;
    controller.search_text = "";
    controller.display=false;
    controller.found = [];
    var MenuSearchService = MenuSearchServiceFactory();
    controller.getData = function(){
      var promise = MenuSearchService.getMatchedMenuItems(controller.search_text);
      if(promise.length === 0){
        controller.display = true;
      } else {
      promise.then(function(data){
          controller.found = data;
          controller.display = false;
          if(controller.found.length === 0){
            controller.display = true;
          }
        }).catch(function(error){
          controller.display = true;
        });
    }
  };

    controller.removeData = function(itemIndex){
      controller.found = MenuSearchService.removeItem(itemIndex,controller.found);
    };
  }


  function MenuSearchService($http,$q){
    this.removeItem = function(index,array){
      array.splice(index,1);
      return array;
    };

    this.getMatchedMenuItems = function(searchTerm) {
      if(searchTerm.length === 0){
        return [];
      } else {
        return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json")
        .then(function(response){
          var found_list = [];
          var list = response.data.menu_items;
          for(var obj in list){
            var des = list[obj].description;
            if(des.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
              var temp_obj = {
                name:list[obj].name,
                short_name:list[obj].short_name,
                description:list[obj].description
              };
              found_list.push(temp_obj);
            }
          }
          if(found_list.length === 0){
            return [];
          }
          return found_list;
        }, function(error){
          console.log("cannot fetch the data");
          return null;
        });
      }
    };
  }

  function MenuSearchServiceFactory($http,$q){
    var factory = function () {
      return new MenuSearchService($http,$q);
    };
    return factory;
  }

})();
