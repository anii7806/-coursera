(function () {
    'use strict';
  
    angular.module('data')
      .service('MenuDataService', MenuDataService);
  
    MenuDataService.$inject = ['$http','$q', '$timeout']
    function MenuDataService($http,$q, $timeout) {
      var service = this;
  
      service.getItemsForCategory = function (categoryByShortName) {
        return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json", {
          params: { category: categoryByShortName }
        })
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log("Error retrieving items for category: ", error);
          return $q.reject(error);
        });
      };
  
      service.getAllCategories = function () {
        return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log("Error retrieving categories: ", error);
          return $q.reject(error);
        });
      };
  
    }
  })();
  