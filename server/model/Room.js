
const mongoose = require("mongoose");
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const roomShema = new mongoose.Schema({
    created_by: {
        type: ObjectId,
        required: true,
        min: 6,
        max: 255,
    },
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    room_code:{
        type:String,
        unique:true
    },
    isDisableChat:{
        type: String,
        required: true,
    },

    created_at: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("Room",roomShema);