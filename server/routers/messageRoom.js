const express = require('express');
const verify = require('../requests/verifyToken');
const router = express.Router();
// const { registerValidation } = require("../requests/validation");
const MessageRoom = require("../model/MessageRoom");

router.post("/api/messagesRoom/:roomMemberId/:to",verify,async (req,res) => {
   try{
       const roomMemberId = req.params.roomMemberId;
       const to = req.params.to;
       const message = req.body.message;

       const msg = new MessageRoom({
           roomMemberId:roomMemberId,
           to:to,
           message:message,
           created_at:Date.now()
       })
       const save = await msg.save();
       if(save)
       {
           console.log('new message:',msg);
           res.send(msg);
       }
   }catch (e) {
        res.status(400).send(e)
   }


});

router.get("/api/messagesRoom/:roomMemberId/:to",verify,async (req,res)=>{
    const roomMemberId = req.params.roomMemberId;
    const to = req.params.to;
    MessageRoom.find({
        roomMemberId:roomMemberId,
        to:to
    },(err,doc)=>{
        if(err){
            res.status(400).send(err)
        }
        res.send(doc);
    })
})

router.delete("/api/messagesRoom/:id",verify,async (req,res)=>{
    MessageRoom.findByIdAndRemove({_id: req.params.id}, function(err, model){
        if(err)
            res.json(err);
        else
            res.json('Successfully removed' + req.params.id);
    });
})

router.put("/api/messagesRoom/:id",verify,async (req,res)=>{
    try{
        const id = req.params.id;
        const message = req.body.message;
        MessageRoom.findByIdAndUpdate(id,{message:message},{new: true},(err,doc)=>{
            if (err)
                return res.status(500).send({
                    msg:err
                })
            else
                return res.send(doc);
        });
    }catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;