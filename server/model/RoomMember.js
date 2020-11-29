const mongoose = require("mongoose");
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const schema = new mongoose.Schema({
    user_id: {
        type: ObjectId,
        required: true,
        min: 6,
    },
    room_id:{
        type: ObjectId,
        required: true,
        min: 6,
    },
    role:{
        type:String,
        required:true
    },
    isDisableVideo:{
        type:Boolean,
        required:true,
    },
    isDisableAudio:{
        type:Boolean,
        required:true,
    },
    stream_video:{
        type:String,
    },
    join_at: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("RoomMember",schema);