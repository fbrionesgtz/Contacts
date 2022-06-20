import ContactForm from "../ContactForm/ContactForm";
import {useCallback} from "react";

const AddContact = () => {
    const postContact = useCallback(async (contact) => {
        await fetch("http://localhost:8081/contact", {
            method: "POST",
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

    const handleSubmit = (contact) => {
        postContact(contact);
    }

    return <section>
        <h1>Add Contact</h1>
        <ContactForm
            onSubmit={handleSubmit}
        />
    </section>
}

export default AddContact;