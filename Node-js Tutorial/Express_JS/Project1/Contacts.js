class Contacts {
    constructor() {
        this.contacts = []
    }

    getAllContacts() {
        return this.contacts
    }

    createContacts(contact) {
        contact.id = this.contacts.length + 1
        this.contacts.push(contact)
        return contact
    }

    getContactsById(id) {
        return this.contacts.find((contact) => contact.id === id)
    }

    updateContacts(id, updatedContacs) {
        let index = this.contacts.findIndex(contact => contact.id === id)

        this.contacts[index].name = updatedContacs.name ||this.contacts[index].name
        this.contacts[index].phone = updatedContacs.phone ||this.contacts[index].phone
        this.contacts[index].email = updatedContacs.email ||this.contacts[index].email

        return this.contacts[index]
    }

    deleteContacts(id) {
        let index = this.contacts.findIndex(contact => contact.id === id)
        let deleteObj = this.contacts[index]
        this.contacts = this.contacts.filter(contact => contact.id !== id)
        return deleteObj
    }
}

module.exports = new Contacts()