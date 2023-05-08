
(function (){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        let buyList = this;
        
        buyList.items = ShoppingListCheckOffService.getItems();

        buyList.boughtItem = function(index){
            ShoppingListCheckOffService.boughtItem(index, buyList.items);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        let boughtList = this;
        boughtList.items = ShoppingListCheckOffService.items;
    }

    function ShoppingListCheckOffService(){
        let service = this;
        service.items = [];
        let toBuyList = [
            {
                name: "Milk",
                quantity: "2",
            },
            {
                name: "Donuts",
                quantity: "10",
            },
            {
                name: "Cookies",
                quantity: "10",
            },
            {
                name: "Chocolate",
                quantity: "5",
            },
            {
                name: "Cheese Bread",
                quantity: "4"
            }
        
        ];

        service.getItems = function(){
            return toBuyList;
        };

        service.boughtItem = function(index, listOfItems){
            let item = {
                name: "",
                quantity: ""
            }
            item.name = listOfItems[index].name;
            item.quantity = listOfItems[index].quantity;
            listOfItems.splice(index, 1);
            service.items.push(item);
        };
    }
    })();