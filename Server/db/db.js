const mongoose = require('mongoose')

const connectToDB = async ()=>{
    try {
        
        await mongoose.connect(`${process.env.MONGO_URI}/E-commerce`)
        console.log('connected to DB')
    } catch (error) {
        console.log(`Error while connecting to DB ${error.message}`)
    }
}
module.exports = connectToDB;