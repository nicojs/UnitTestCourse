describe('Todo', function () {

    describe('Todo module and ctrl', function (){

        var $ctrl, todoServiceMock, deferred;

        beforeEach(module('todoApp'));

        beforeEach(inject(function ($componentController, $q){
            deferred = $q.defer();
            todoServiceMock = {
                get: function () {
                    return deferred.promise
                }
            }
            $ctrl = $componentController('todoComponent', {
                todoService: todoServiceMock
            });
            $ctrl.$onInit();
        }));

        it('should have a ctrl', function () {
            expect($ctrl).toBeDefined();
        });

        it('should have add function ', function (){
            expect(angular.isFunction($ctrl.add)).toBe(true);
        });

        it('should have and function ', function (){
            expect(angular.isFunction($ctrl.and)).toBe(true);
        });

        it('should have or function ', function (){
            expect(angular.isFunction($ctrl.or)).toBe(true);
        });

        it('should have add method that adds two numbers', function () {
            expect($ctrl.add(1, 2)).toEqual(3);
        });

        it('should return true', function () {
            expect($ctrl.and(true, true)).toEqual(true);
        });

        // it('should return false', function () {
        //     expect($ctrl.and(false, true)).toEqual(false);
        // });

        it('should return true', function () {
            expect($ctrl.or(true, false)).toEqual(true);
        });

        // it('should return false', function () {
        //     expect($ctrl.or(false, false)).toEqual(false);
        // });

        it('should have a service', function () {
            expect(todoServiceMock).toBeDefined();
        });

        it('should have a service.get method', function (){
            expect(todoServiceMock.get).toBeDefined();
        });
    });
});
