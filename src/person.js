function Person(attr) {
    this.gender = attr.gender;
    this.age = attr.age;
};

Person.prototype.cooperAssesment = function (distance) {
    this.cooperMessage = assmentCooper(this, distance);
}