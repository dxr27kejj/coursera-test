(function () {
'use strict'

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var toBuyList = this;
	toBuyList.toBuy = ShoppingListCheckOffService.getToBuy();
	toBuyList.msg = "Everything is bought!";
	toBuyList.moveItem = function (itemIndex) {
		ShoppingListCheckOffService.moveItem(itemIndex);
	}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var boughtList = this;
	boughtList.bought = ShoppingListCheckOffService.getBought();
	boughtList.msg = "Nothing bought yet.";
}

function ShoppingListCheckOffService() {
	var service = this;
	var toBuy = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Soda",
    quantity: "27"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }];
	var bought = [];
	service.getToBuy = function () {
    return toBuy;
  };
  	service.getBought = function () {
    return bought;
  };
  	service.moveItem = function (itemIndex) {
  		var item = toBuy.splice(itemIndex, 1)[0];
  		bought.push(item);
  	}
}
})();