const mongo = require('mongoose')


const user_schema = new mongo.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        
    }

})

module.exports = mongo.model('User',user_schema)
