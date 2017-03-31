(function (angular){
    'use strict';

    calculatorService.$injector = ['$q']

    function calculatorService ($q){

        this.add = function (a, b) {
            return a + b;
        };
    }

    angular
        .module('todoApp')
        .service('calculatorService', calculatorService)
})(angular);
