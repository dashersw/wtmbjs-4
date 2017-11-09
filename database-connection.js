const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const hostname = 'localhost'
const database = 'wtm'

mongoose.connect(`mongodb://${hostname}/${database}`, { useMongoClient: true })
