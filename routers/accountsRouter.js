const express = require('express');
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
    db('accounts')
    .insert(req.body, "id")
    .then(id => {
        
          res.status(201).json({id : id, newAccount:req.body});
        })
    
    .catch(() => {
      res.status(500).json({ message: 'Could not add the account' });
    })
})

router.put('/:id',(req, res)=>{
    db('accounts')
    .where(
            { id:req.params.id }
        )
        .update(req.body)
        .then(success => {
            if(success){
                res.status(200).json(
                        { message:"account was updated" }
                    )
            }
            else {
                    res.status(404).json(
                        { message:"could not find the account ID" }
                    )
                }
        })
        .catch(()=>{
            res.status(500).json(
                    { error:"server error" }
                )
        })
})
router.delete('/:id',(req, res)=>{
    db('accounts')
    .where(
            { id:req.params.id }
        )
    .del()
    .then(success=>{
        if(success){
            res.status(200).json(
                    { message:"account was deleted" }
                )
        }
        else {
                res.status(404).json(
                    { message:"could not find the account ID" }
                )
            }
    })
    .catch(()=>{
        res.status(500).json(
                { error:"server error" }
            )
    })
})
module.exports = router