describe('service', function () {

    var calculatorService;

    beforeEach(module('todoApp'))

    beforeEach(inject(function (calculatorService) {
        calculatorService = calculatorService;
    }));

    it('should add two numbers', function (){
        expect(calculatorService.add).toBeDefined();
    });
});
