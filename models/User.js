const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    username:{type:String, required: true, unique:true},
    name:{type:String, required:true},
    password:{type:String, requerid:true}
})

module.exports=mongoose.model('User', UserSchema)