const User = require('../models/user')
const Property = require('../models/properties')
const router = require("express").Router();



router.post('/userdetails', async (req, resp) => {
    
    try {
        const ppd_id = "PPID" +  Math.floor(1000 + Math.random() * 9000);
        const views = parseInt(Math.random() * 10);
        const daysLeft = parseInt(Math.random() * 20);
        const {email} = req.body;
        let user = await User.findOne({email});
        const property = await Property.create({
            ppdId: ppd_id, 
            views: views,
            daysLeft: daysLeft,
            userId:user._id,
            ...req.body // taking all fields from user
        });
    
        
        user.properties.push(property)
        await user.save()
        resp.status(200).json({
            status: "Success",
            property:property
        })

    } catch (error) {
        resp.status(400).json({
            status: "failed",
            message: error.message
        })
    }

});
module.exports = router