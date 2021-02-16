const Clothing = require('../models/clothing-model')

createItem = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a clothing item',
        })
    }

    const clothing = new Clothingitem(body)

    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: clothing._id,
                message: 'Item created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Item not created!',
            })
        })
}

updateClothing = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an item to update',
        })
    }

    Clothing.findOne({ _id: req.params.id }, (err, clothing) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Clothing not found!',
            })
        }
        clothing.detail = body.detail
        clothing.price = body.detail
        clothing.description = body.description
        movie
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Clothing updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Clothing not updated!',
                })
            })
    })
}

deleteClothing = async (req, res) => {
    await Clothing.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!clothing) {
            return res
                .status(404)
                .json({ success: false, error: `Clothing not found` })
        }

        return res.status(200).json({ success: true, data: clothing})
    }).catch(err => console.log(err))
}

getClothingById = async (req, res) => {
    await Clothing.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!clothing) {
            return res
                .status(404)
                .json({ success: false, error: `Clothing not found` })
        }
        return res.status(200).json({ success: true, data: clothing })
    }).catch(err => console.log(err))
}

getClothing = async (req, res) => {
    await Movie.find({}, (err, clothing) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!clothing.length) {
            return res
                .status(404)
                .json({ success: false, error: `clothing not found` })
        }
        return res.status(200).json({ success: true, data: clothing })
    }).catch(err => console.log(err))
}

module.exports = {
    createClothing,
    updateClothing,
    deleteClothing,
    getClothing,
    getClothingById,
}
view raw