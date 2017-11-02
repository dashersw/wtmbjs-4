module.exports = class Person {
    constructor(id, name, age) {
        this.id = id
        this.name = name
        this.age = age || 0
    }

    static create(person) {
        return new Person(person.id, person.name, person.age);
    }
}
