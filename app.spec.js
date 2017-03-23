describe('Todo', function () {

    describe('Todo module and ctrl', function (){

        var $ctrl;

        beforeEach(module('todoApp'));

        beforeEach(inject(function ($componentController){
            $ctrl = $componentController('todoComponent', {});
        }));

        it('should have a ctrl', function () {
            expect($ctrl).toBeDefined();
        });

        it('should have a list', function (){
            expect($ctrl.list).toBeDefined();
        });

        it('should have add function ', function (){
            expect(angular.isFunction($ctrl.add)).toBe(true);
        });

        xit('should add a todo', function () {
            $ctrl.add('TalkTalk');
            expect($ctrl.list.length).toBe(1);
        });
    });
});
