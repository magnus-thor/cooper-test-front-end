describe('Person', function() {
    beforeEach(function () {
        person = new Person({
            gender: 'Male',
            age: 41
        });
    });

    it('should have gender', function() {
        expect(person.gender).toBeDefined();
        expect(person.gender).toBe('Male');
    });

    it('should have age', function() {
        expect(person.age).toBeDefined();
        expect(person.age).toBe(41);
    });
});