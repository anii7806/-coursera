(function (){
    'use strict';
    
    angular.module('AssignmentOne', [])
    .controller('FoodController', FoodController);
    
    FoodController.$inject = ['$scope'];
    function FoodController($scope){
        $scope.message = "";
        $scope.dishes = "";

        $scope.check = function(){
            let dishesArray = $scope.dishes.split(',');
            let count = 0;

            dishesArray.forEach((item) => {
                if(item != false){
                    count++;
                }
            })

            if(count > 0 && count < 4){
                $scope.message = "Enjoy!";
            }else if(count >= 4){
                $scope.message = "Too much!";
            }else{
                $scope.message = "Please enter the data first!";
            }
        };
    }
    })();