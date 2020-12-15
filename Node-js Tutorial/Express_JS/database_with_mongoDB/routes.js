const router = require('express').Router()

const {
    getAllContact,
    createContact,
    getContactById,
    updateContact,
    deleteContact
} = require('./controllers')

router.get('/', getAllContact)

router.post('/', createContact)

router.get('/:id', getContactById)

router.put('/:id', updateContact)

router.delete('/:id', deleteContact)

module.exports = router