const express = require("express");
const frontrouter=express.Router()

const {
    get_data_frontend,
    get_SVG_byID,
    get_SVG_by_name,
    post_SVG,
    delete_SVG,
    update_SVG
    }=require('../controllers/controller_frontend')
    //Get all task db 1
frontrouter.get('/',get_data_frontend)
frontrouter.get('/logo/:SVGname',get_SVG_by_name)
frontrouter.get('/:id',get_SVG_byID)
frontrouter.post('/',post_SVG)
frontrouter.delete('/:id',delete_SVG)
frontrouter.patch('/:id',update_SVG)


module.exports=frontrouter