(function () {
  'use strict';

  angular.module('data')
    .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = ['$stateParams', 'MenuDataService'];
  function ItemDetailController($stateParams, MenuDataService) {
    var itemDetail = this;
    itemDetail.name = $stateParams.itemId;
    itemDetail.itemList = [];

    // Call the getItemsForCategory() function to retrieve the items for the selected category
    MenuDataService.getItemsForCategory(itemDetail.name)
      .then(function (response) {
        console.log('Response:', response); // Add this line to check the response

        var category = response[itemDetail.name];
        var items = category.menu_items;

        for (var i = 0; i < items.length; i++) {
          var item = items[i];

          // var itemText = '(' +
          //   item.short_name +
          //   '): ' +
          //   item.name +
          //   ' [' +
          //   item.description +
          //   '] Large portion: ' +
          //   item.price_large +
          //   ' $ ';

          itemDetail.itemList.push({
            shortname: item.short_name,
            name: item.name,
            description: item.description,
          });
        }
        console.log(itemDetail.itemList)
      })
      .catch(function (error) {
        console.log("Error retrieving items for category: ", error);
      });
  }
})();
