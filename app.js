(function (angular){
    'use strict';

    function todoCtrl (){

        var $ctrl = this;
        $ctrl.list = [];

        $ctrl.add = []
    }

    angular.module('todoApp', [])
        .component('todoComponent', {
            controller: todoCtrl
        })
})(angular);
