const fs = require('fs')

const PersonModel = require('../models/person-model')

async function findAll() {
    return PersonModel.find().populate('friends')
}

async function add(person) {
    return PersonModel.create(person)
}

async function del(id) {
    return PersonModel.remove({ id })
}

async function find(id) {
    return PersonModel.findOne({ id }).populate('friends')
}

module.exports = {
    findAll,
    find,
    add,
    del
}
