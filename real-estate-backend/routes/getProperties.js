const router = require('express').Router()
const User = require('../models/user')

router.get('/userdetails', async(req,res)=>{
    try{
        const userProperties = await User.find({
            email:req.body.email
        }).populate('properties')

        if(!userProperties){
            
            return res.status(400).json({
                success:false,
                message:"add some properties"
            })
        }
        
        res.status(200).json({
            success:true,
            userProperties:userProperties.reverse()

        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
   
})
module.exports = router