const express = require('express')
const router = express.Router()

const PersonService = require('../services/person-service')

router.get('/', async (req, res, next) => {
    res.send(await PersonService.findAll())
})

router.get('/all', async (req, res, next) => {
    const people = await PersonService.findAll()
    res.render('person-list', {people})
})

router.get('/:id', async (req, res, next) => {
    const person = await PersonService.find(req.params.id)

    res.render('person-detail', {person})
})

router.get('/:id/json', async (req, res, next) => {
    const person = await PersonService.find(req.params.id)
    if (!person) res.status(404)
    res.send(person)
})

router.post('/', async (req, res, next) => {
    const person = await PersonService.add(req.body)

    res.send('OK!')
})

router.post('/:id/friends', async (req, res, next) => {
    const person = await PersonService.find(req.params.id)
    const target = await PersonService.find(req.body.targetId)

    person.friends.addToSet(target)
    const updatedPerson = await person.save()
    res.send(updatedPerson)
});

router.delete('/:id', async (req, res, next) => {
    await PersonService.del(req.params.id)

    res.send('ok!')
})

module.exports = router
