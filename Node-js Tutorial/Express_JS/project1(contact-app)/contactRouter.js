const contactRoute = require('express').Router()
const {
    getAllContacts,
    createContacts,
    getContactById,
    updateContact,
    deleteContact
} = require('./contactController')

contactRoute.get('/', getAllContacts)
contactRoute.post('/', createContacts)
contactRoute.get('/:id', getContactById)
contactRoute.put('/:id', updateContact)
contactRoute.delete('/:id', deleteContact)

module.exports = contactRoute

