import test from 'ava'
import request from 'supertest'
import app from '../src/app'

test('Get list of people', async t => {
    const personToCreate = {name: 'Armagan Amcalar', age: 33}

    const creation = await request(app)
        .post('/person')
        .send(personToCreate)

	const res = await request(app)
		.get('/person')

    t.is(res.status, 200)
    t.true(Array.isArray(res.body), 'Body should be an array')
    t.true(res.body.length > 0)
});

test('Create new person', async t => {
    const personToCreate = {name: 'Armagan Amcalar', age: 33}

    const res = await request(app)
        .post('/person')
        .send(personToCreate)

    t.is(res.status, 200)
    t.is(res.body.name, personToCreate.name)
    t.is(res.body.age, personToCreate.age)
})

test('Fetch a person', async t => {
    t.plan(2)

    const person = (await request(app)
        .post('/person')
        .send({name: 'Armagan Amcalar', age: 33}))
        .body

    const fetch = await request(app)
        .get(`/person/${person.id}/json`)

    t.is(fetch.status, 200)
    t.deepEqual(fetch.body, person)
})

test('Delete a person', async t => {
    t.plan(3)

    const person = (await request(app)
        .post('/person')
        .send({name: 'Armagan Amcalar', age: 33}))
        .body

    const del = await request(app)
        .delete(`/person/${person.id}`)

    t.is(del.status, 200)
    t.is(del.text, 'ok!')

    const fetch = await request(app)
    .get(`/person/${person.id}/json`)

    t.is(fetch.status, 404)
})

test('Make friends with', async t => {
    const person1 = (await request(app)
        .post('/person')
        .send({name: 'Armagan Amcalar', age: 33}))
        .body

    const person2 = (await request(app)
        .post('/person')
        .send({name: 'Mihri Minaz', age: 29}))
        .body

    const makeFriends = (await request(app)
        .post(`/person/${person1.id}/friends`)
        .send({targetId: person2.id}))

    const updatedPerson1 = (await request(app)
        .get(`/person/${person1.id}/json`))
        .body

    t.deepEqual(updatedPerson1.friends[0], person2)
})
