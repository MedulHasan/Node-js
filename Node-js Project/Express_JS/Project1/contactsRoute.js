const router = require('express').Router()

const {
    getAllContacts,
    createContacts,
    getContactsById,
    updateContacts,
    deleteContacts
} = require('./contactsController')

router.get('/', getAllContacts)
router.post('/', createContacts)
router.get('/:id', getContactsById)
router.put('/:id', updateContacts)
router.delete('/:id', deleteContacts)

module.exports = router