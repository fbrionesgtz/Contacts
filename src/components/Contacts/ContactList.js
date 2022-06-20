import Contact from "./Contact";
import {useCallback} from "react";

const ContactList = (props) => {
    const updateContact = useCallback(async (id, contact) => {
        await fetch(`http://localhost:8081/contact/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                firstname: contact.firstname,
                lastname: contact.lastname,
                email: contact.email,
                phoneNumber: contact.phoneNumber
            }
        })
    }, []);

    const deleteContact = useCallback(async (id) => {
        await fetch(`http://localhost:8081/contact/${id}`, {
            method: "DELETE"})
    }, []);

    const handleUpdateContact = (id, contact) => {
        updateContact(id, contact);
    }

    const handleDeleteContact = (id) => {
        deleteContact(id);
        props.onDeleteContact(id);
    }

    return <section>
        <h1>Contact List</h1>
        {props.contacts.map(contact => (
            <Contact
                key={contact.id}
                firstname={contact.firstname}
                lastname={contact.lastname}
                email={contact.email}
                phoneNumber={contact.phoneNumber}
                onUpdateContact={handleUpdateContact.bind(null, contact.id)}
                onDeleteContact={handleDeleteContact.bind(null, contact.id)}
            />
        ))}
    </section>
}

export default ContactList;