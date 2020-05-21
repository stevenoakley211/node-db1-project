const express = require('express')
const router =  express.Router();
const db = require("../data/dbConfig.js");

router.get('/',(req, res)=>{
    db('accounts')
    .then(accounts=>{
        res.status(200).json(accounts)
    })
    .catch(()=>{
        res.status(500).json({error:'Server error'})
    })
})
router.get('/:id',(req, res)=>{
    db('accounts')
    .where({id: req.params.id})
    .then(account =>{
        if (account) {
            res.status(200).json(account)
        }
        else {
                    res.status(404).json({message:"Account could not be found"})
                }
    })
    .catch(()=>{
        res.status(500).json(
                    { error:"server error" }
                )
    })
})
router.post('/',(req, res)=>{
    
})
router.put('/',(req, res)=>{
    
})
router.delete('/',(req, res)=>{
    
})