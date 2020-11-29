const express = require('express');
const verify = require('../requests/verifyToken');
const jwt = require("jsonwebtoken");
const router = express.Router();
const { registerValidation } = require("../requests/validation");
const User = require("../model/User");
const Message = require("../model/Message");
const cors = require('cors');
router.get('/',((req, res) => {
    res.send({
        msg:'server is up and running',
        redirect:'/'
    });
}));

//route register
router.post('/register',(async (req, res) => {
    try{
        const error = await registerValidation(req.body);

        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        // if(error){
        //     return res.status(400).send(error);
        // }

        // const value = User.find({}).exec();
        // console.log('value:',value);
        // console.log('item length:');
        // console.log('existedEmail:',existedEmail);
        // console.log('existedEmail:',existedEmail.length);
        // if(existedEmail) {
        //     // res.status(400).send('Email existed');
        //     console.log('existedEmail:');
        // }else{
        //     console.log('available email!');
        // }

        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        })
        const saveUser = await user.save();
        console.log('saveUser:',saveUser);
        if(saveUser)
            res.send('register successfully');
        console.log('register success');
    }catch (e) {
        res.status(400).send(e);
        console.log(e);
    }
}))

router.post('/login',cors({origin:'*',}),(async (req, res) => {
    try{
        const name = req.body.name;
        const password = req.body.password;
        console.log(name,password);
        const user =await User.findOne({
            name:name,
            password:password
        })
        console.log(user);
        if(user){
            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
            res.header("auth-token", token);
            // res.redirect()
            res.send({
                msg:'Login successfully',
                redirect:'/home',
                token:token
            })
        }
        else
            console.log('Wrong user name password');

    }catch (e) {
        res.status(400).send(e);
        console.log(e);
    }
    res.end();
}))

router.get('/api/users',((req, res) => {
    User.find((err,users) => {
        if(err)
            console.log(err)
        else
            console.log(users);
            res.json(users);
    });
}))

router.put("/api/users/:id",verify,async (req,res) =>{
    try{
        const validate = await registerValidation(req.body);
        console.log('validate',validate);
        if(validate){
            return res.status(400).send(validate);
        }
        const id = req.body.id;
        const update = {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            date:Date.now()
        }

        const user = User.findByIdAndUpdate(id,update,{},(err,doc)=>{
            if (err)
                return res.status(500).send({
                    msg:err
                })
            else
                return res.send({
                    msg:'Update user '+id+' successfully'
                })

        });
    }catch (e) {
        console.log(e);
    }
})
router.delete("/api/users/:id",verify,async (req,res)=>{
    User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err)
            res.json(err);
        else
            res.json('Successfully removed' + req.params.id);
    });
})

/////////////////////////////////////////////////////////////////////////////////////////////
///// ROUTE FOR MESSAGE ONLY ////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;