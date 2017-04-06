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

            $ctrl.and = function (a, b) {
              var result = a && b;
              return result;
            };

            $ctrl.or = function (a, b) {
              var result = a || b;
              return result;
            };
        }

    }

    angular.module('todoApp', [])
        .component('todoComponent', {
            controller: todoCtrl
        })
})(angular);
