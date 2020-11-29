const express = require('express');
const router = express.Router();
const { registerValidation } = require("../server/requests/validation");
const User = require("../server/model/User");

router.get('/',((req, res) => {
    res.send('server is up and running');
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
        // if(saveUser)
        //     res.send('register successfully');
        // console.log('register success');
    }catch (e) {
        res.status(400).send(e);
        console.log(e);
    }
}))
module.exports = router;