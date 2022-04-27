const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate-v2")

const clientSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    phone: Number,
    email: String,
    city: String
})

clientSchema.plugin(mongoosePaginate)

const clientsModel = mongoose.model("Clients-db", clientSchema)

module.exports = clientsModel