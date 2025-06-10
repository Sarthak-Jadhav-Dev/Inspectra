const express = require("express")
const router = express.Router()
const aiServices = require('../services/ai.services')
const securityCheck = require('../services/security.services')
const learnerSupports = require("../services/learner.services")
const deadcode = require("../services/deadcode.services")
const codeQuality = require("../services/dashboard.services")
const chatbot = require("../services/chatbot.services")

router.post("/checkcode",async(req,res)=>{
    try{
        const code = req.body.code;
        if(!code){
            return res.status(400).send("Code is Not Recieved Please Try Again")
        }
        const response = await aiServices(code)
        res.json({review:response})
    }catch(error){
        console.log(error)
    }
})
router.post("/security",async(req,res)=>{
    try{
        const code = req.body.code;
        if(!code){
            return res.status(400).send("Code is Not Recieved Please Try Again")
        }
        const response = await securityCheck(code)
        res.json({review:response})
    }catch(error){
        console.log(error)
    }
})
router.post("/learner",async(req,res)=>{
    try{
        const code = req.body.code;
        if(!code){
            return res.status(400).send("Code is Not Recieved Please Try Again")
        }
        const response = await learnerSupports(code)
        res.json({review:response})
    }catch(error){
        console.log(error)
    }
})
router.post("/deadcode",async(req,res)=>{
    try{
        const code = req.body.code;
        if(!code){
            return res.status(400).send("The Code hasnt receivec")
        }
        const response = await deadcode(code)
        res.json({review:response})
    }catch(error){
        console.log(error)
    }
})
router.post("/quality",async(req,res)=>{
    try{
        const code = req.body.code;
        if(!code){
            return res.status(400).send("The code wasnt reciewed")
        }
        const response = await codeQuality(code)
        res.json({review:response})
    }catch(error){
        console.log(error)
    }
})
router.post("/chatbot",async(req,res)=>{
    try {
        const code = req.body.chat;
        if(!chat){
            return res.status(400).send("Sorry Bot Couldnt Catch you Please try Again!")
        }
        const response = await chatbot(chat)
        res.json({review:response})
    }catch(error){
        console.log(error)
    }
})
module.exports = router;
