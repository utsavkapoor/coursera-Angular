(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    this.addItem = function() {
      ShoppingListCheckOffService.addItem(this.Item, this.Quantity);
    };
    this.ItemBought = function(index) {
      console.log("index: " + index);
      ShoppingListCheckOffService.removeItem(index);

    };
    this.item_list = ShoppingListCheckOffService.getToBuyItems();
  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    //this.alreadybought = false;
    this.showItems = ShoppingListCheckOffService.getItems();
  }

  function ShoppingListCheckOffService() {
    var to_buy = [{
      'item': 'Cookies',
      'quantity': 10
    }];
    var bought = [];

    this.addItem = function(name, quantity) {
      var obj = {
        'item': name,
        'quantity': quantity
      };
      to_buy.push(obj);
      //to_buy.push(obj);
      console.log(to_buy);
    };

    this.removeItem = function(index) {
      var del_item = to_buy.splice(index, 1);
      bought.push(del_item[0]);
      console.log(bought);
    };

    this.getItems = function() {
      return bought;
    };
    this.getToBuyItems = function() {
      return to_buy;
    };
  }
})();
