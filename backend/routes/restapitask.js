//CREATE ROUTES WITH EXPRESS 
const express = require("express");
const router=express.Router()
const {
    get_tasks,
    get_task_byID,
    post_tasks,
    update_task,
    delete_task
    }=require('../controllers/controllers')


router.get('/',get_tasks)
router.get('/:id',get_task_byID)
router.post('/',post_tasks)
router.delete('/:id',delete_task)
router.patch('/:id',update_task)  
 

module.exports=router