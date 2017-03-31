(function (angular){
    'use strict';

    todoCtrl.$injector = ['todoService']
    function todoCtrl (todoService){

        var $ctrl = this;

        $ctrl.$onInit = function () {
            $ctrl.add = function (a, b) {
              var result = a + b;
              return result;
            };

            $ctrl.logic = function (a, b) {
              var value1 = true, value2 = true;
              var result = value1 && value2;
              return result;
            };

            todoService.get().then(function (data){
                $ctrl.list = data;
            });
            $ctrl.list = [];
        }

    }

    angular.module('todoApp', [])
        .component('todoComponent', {
            controller: todoCtrl
        })
})(angular);
