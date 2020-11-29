const express = require('express');
const verify = require('../requests/verifyToken');
const router = express.Router();
// const { registerValidation } = require("../requests/validation");
const Message = require("../model/Message");

router.post("/api/messages/:from/:to",verify,async (req,res) => {
   try{
       const from = req.params.from;
       const to = req.params.to;
       const message = req.body.message;

       const msg = new Message({
           from:from,
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

router.get("/api/messages/:from/:to",verify,async (req,res)=>{
    const from = req.params.from;
    const to = req.params.to;
    const messages = Message.find({
        from:from,
        to:to
    },(err,doc)=>{
        if(err){
            res.status(400).send(err)
        }
        res.send(doc);
    })
})

router.delete("/api/messages/:id",verify,async (req,res)=>{
    Message.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err)
            res.json(err);
        else
            res.json('Successfully removed' + req.params.id);
    });
})

router.put("/api/messages/:id",verify,async (req,res)=>{
    try{
        const id = req.params.id;
        const message = req.body.message;
        Message.findByIdAndUpdate(id,{message:message},{new: true},(err,doc)=>{
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