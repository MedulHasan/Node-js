const contacts = require('./contacts')

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts())
}

exports.createContacts = (req, res) => {
    let {name, email, phone} = req.body
    let contact = contacts.createContacts({name, email, phone})
    res.json(contact)
}

exports.getContactById = (req, res) => {
    let {id} = req.params
    id = parseInt(id)

    let contact = contacts.getContactById(id)
    res.json(contact)
}

exports.updateContact = (req, res) => {
    let {id} = req.params
    id = parseInt(id)

    let {name, email, phone} = req.body
    let update = contacts.updateContacts(id, {name, email, phone})
    res.json(update)
}

exports.deleteContact = (req, res) => {
    let {id} = req.params
    id = parseInt(id)

    res.json(contacts.deleteContacts(id))
}