const express = require('express');
const verify = require('../requests/verifyToken');
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
// const { registerValidation } = require("../requests/validation");
const RoomMember = require("../model/RoomMember");
const User = require("../model/User");
const Room = require("../model/Room");

router.post("/api/roomMember/",verify,async (req,res) => {
   try{
       const user_id = req.body.user_id;
       const room_id = req.body.room_id;
       const role = req.body.role;
       const isDisableVideo = req.body.isDisableVideo;
       const isDisableAudio = req.body.isDisableAudio;
       const stream_video = req.body.stream_video;

       const existingRoomMember = await RoomMember.findOne({user_id:user_id,room_id:room_id}).exec();
       if(existingRoomMember)  return res.status(400).send({'msg':'Member already in room'});
       const model = new RoomMember({
           user_id:user_id,
           room_id:room_id,
           role:role,
           isDisableVideo:isDisableVideo,
           isDisableAudio:isDisableAudio,
           stream_video:stream_video,
           join_at:Date.now()
       })
       const user =  await User.findOne({_id:user_id}).exec();
       const room =  await Room.findOne({_id:room_id}).exec();
       const save = await model.save();
       if(save)
       {
           res.send({
               roomMember:model,
               user:user,
               room:room
           });
       }
   }catch (e) {
        res.status(400).send(e)
   }


});
router.put("/api/roomMember/:id",verify,async (req,res)=>{
    try{
        const id = req.params.id;
        const role = req.body.role;
        const isDisableVideo = req.body.isDisableVideo;
        const isDisableAudio = req.body.isDisableAudio;
        const stream_video = req.body.stream_video;


        RoomMember.findByIdAndUpdate(id,{
            role:role,
            isDisableVideo:isDisableVideo,
            isDisableAudio:isDisableAudio,
            stream_video:stream_video
        },{new: true}, async (err,model)=>{
            if (err)
                return res.status(500).send({
                    msg:err
                })
            else{
                const user = await User.findOne({_id:model.user_id}).exec();
                const room = await Room.findOne({_id:model.room_id}).exec();
                res.send({
                    roomMember:model,
                    user:user,
                    room:room
                });
            }
        });
    }catch (e) {
        res.status(400).send(e);
    }
})
router.get("/api/roomMember/:id",verify,async (req,res)=>{
    const id = req.params.id;
    RoomMember.find({
        _id:id
    },(err,doc)=>{
        if(err){
            res.status(400).send(err)
        }
        res.send(doc);
    })
})

router.delete("/api/roomMember/:id",verify,async (req,res)=>{
    RoomMember.findByIdAndRemove({_id: req.params.id}, function(err, model){
        if(err)
            res.json(err);
        else
            res.json('Successfully removed' + req.params.id);
    });
})



module.exports = router;