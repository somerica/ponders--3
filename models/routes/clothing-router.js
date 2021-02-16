const express = require('express')

const ClothingCtrl = require('../controllers/clothing-ctrl')

const router = express.Router()

router.post('/clothing', ClothingCtrl.createClothing)
router.put('/clothing/:id', ClothingCtrl.updateClothing)
router.delete('/clothing/:id', ClothingCtrl.deleteClothing)
router.get('/clothing/:id', ClothingCtrl.getClothingById)
router.get('/clothing', ClothingCtrl.getClothing)

module.exports = router