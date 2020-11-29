
const mongoose = require("mongoose");
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const messageSchema = new mongoose.Schema({
    from: {
        type: ObjectId,
        required: true,
        min: 6,
        max: 255,
    },
    to: {
        type: ObjectId,
        required: true,
        min: 6,
        max: 255,
    },
    message: {
        type: String,
        required: true,
        min: 1,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("Message",messageSchema);