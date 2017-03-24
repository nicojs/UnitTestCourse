describe('service', function () {

    var todoServiceMock, httpBackend;

    beforeEach(module('todoApp'))
    beforeEach(inject(function (todoService, $httpBackend){
        todoServiceMock = todoService
        httpBackend = $httpBackend

        httpBackend.when('GET', "http://www.mocky.io/v2/58088826100000e9232b75b0")
            .respond({contact: 'Mattia Assogna'})


    }))
    it('ssf', function (){
        expect(todoServiceMock.get).toBeDefined();
    });

    it('ssf', function () {
        todoServiceMock.get();
        httpBackend.flush();
        httpBackend.expectGET("http://www.mocky.io/v2/58088826100000e9232b75b0")
    })
});
