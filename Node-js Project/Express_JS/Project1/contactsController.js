const contacts = require('./Contacts')

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts())
}

exports.createContacts = (req, res) => {
    let {name, phone, email} = req.body
    let contact = contacts.createContacts({
        name,
        phone,
        email
    })

    res.json(contact)
}

exports.getContactsById = (req, res) => {
    let {id} = req.params
    id = parseInt(id)

    let contact = contacts.getContactsById(id)
    res.json(contact)
}

exports.updateContacts = (req, res) => {
    let {id} = req.params
    id = parseInt(id)

    let {name, phone, email} = req.body
    let contact = contacts.updateContacts(id, {
        name,
        phone,
        email
    })
    res.json(contact)
}

exports.deleteContacts = (req, res) => {
    let {id} = req.params
    id = parseInt(id)

    let contact = contacts.deleteContacts(id)
    res.json(contact)
}

