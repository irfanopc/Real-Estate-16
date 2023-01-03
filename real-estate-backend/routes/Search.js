const router = require('express').Router()
const Property = require('../models/properties')


router.get('/search/:id', async (req, res) => {
    try {

        const List = await Property.findOne({ppdId:(req.params.id).toUpperCase()});

        if (!List) {
            return res.status(400).json({
                success: false,
                message: "There no Such Id"
            })
        }
   
    res.status(200).json({
        success: true,
        List,
    });
        
    } catch (error) {

        res.status(500).json({
            success: false,
            message:error.message,
        });
        
    }
  });

  module.exports =  router