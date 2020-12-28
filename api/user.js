const router = require ('express').Router()
const Tuit = require('../models/User')

router.post('/nuevo', async (req, res)=>{
    const data = req.body
    try {
        const response = await User.insertMany(data)
        res.json({nuevo: response._id})
    } catch (err) {
        res.json({error:err})
    }
    
})

router.post('/:id', async (req, res)=>{
    const id = req.params.id
    try {
        const response = await User.findById(id)
        res.json({nuevo: response})
    } catch (err) {
        res.json({error:err})
    }
    
})

module.exports = router
