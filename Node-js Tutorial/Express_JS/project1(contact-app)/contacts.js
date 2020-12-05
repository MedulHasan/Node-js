class Contacts {
    constructor() {
        this.Contacts = []
    }

    getAllContacts() {
        return this.Contacts
    }

    createContacts(contact) {
        contact.id = this.Contacts.length + 1
        this.Contacts.push(contact)
        return contact
    }

    getContactById(id) {
        return this.Contacts.find(contact => contact.id === id)
    }

    updateContacts(id, updateValue) {
        let index = this.Contacts.findIndex(contact => contact.id === id)

        this.Contacts[index].name = updateValue.name || this.Contacts[index].name
        this.Contacts[index].email = updateValue.email || this.Contacts[index].email
        this.Contacts[index].phone = updateValue.phone || this.Contacts[index].phone

        return this.Contacts[index]
    }

    deleteContacts(id) {
        let index = this.Contacts.findIndex(contact => contact.id === id)

        let deleteObj = this.Contacts[index]
        this.Contacts = this.Contacts.filter(contact => contact.id !== id)
        return deleteObj
    }
}

module.exports = new Contacts()