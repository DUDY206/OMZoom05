const express = require('express');
const verify = require('../requests/verifyToken');
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
// const { registerValidation } = require("../requests/validation");
const Room = require("../model/Room");

router.post("/api/room/:created_by",verify,async (req,res) => {
   try{
       const created_by = req.params.created_by;
       const name = req.body.name;
       const room_code = uuidv4();
       const isDisableChat = req.body.isDisableChat;
       const existingRoom = await Room.findOne({created_by:created_by}).exec();
       if(existingRoom)  return res.status(400).send({'msg':'Existing room'});
       const model = new Room({
           created_by:created_by,
           name:name,
           room_code:room_code,
           isDisableChat:isDisableChat,
           created_at:Date.now()
       })
       const save = await model.save();
       if(save)
       {
           res.send(model);
       }
   }catch (e) {
        res.status(400).send(e)
   }


});
router.put("/api/room/:id",verify,async (req,res)=>{
    try{
        const id = req.params.id;
        const created_by = req.body.created_by;
        const name = req.body.name;
        const room_code = req.body.room_code;
        const isDisableChat = req.body.isDisableChat;

        const existingCode = await Room.findOne({room_code:room_code}).exec();
        if(existingCode)  return res.status(400).send({'msg':'Existing code'});

        Room.findByIdAndUpdate(id,{
            created_by:created_by,
            name:name,
            room_code:room_code,
            isDisableChat:isDisableChat
        },{new: true},(err,model)=>{
            if (err)
                return res.status(500).send({
                    msg:err
                })
            else
                return res.send(model);
        });
    }catch (e) {
        res.status(400).send(e);
    }
})
router.get("/api/room/:id",verify,async (req,res)=>{
    const id = req.params.id;
    const model = Room.find({
        _id:id
    },(err,doc)=>{
        if(err){
            res.status(400).send(err)
        }
        res.send(doc);
    })
})

router.delete("/api/room/:id",verify,async (req,res)=>{
    Room.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err)
            res.json(err);
        else
            res.json('Successfully removed' + req.params.id);
    });
})



module.exports = router;