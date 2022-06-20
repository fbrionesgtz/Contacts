import Contact from "./Contact";

const ContactList = (props) => {
    return <section>
        <h1>Contact List</h1>
        {props.contacts.map(contact => (
            <Contact
                firstname={contact.firstname}
                lastname={contact.lastname}
                email={contact.email}
                phoneNumber={contact.phoneNumber}
            />
        ))}
    </section>
}

export default ContactList;