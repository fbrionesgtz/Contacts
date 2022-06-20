import React, {useCallback, useEffect, useState} from 'react';
import ContactList from "./components/Contacts/ContactList";
import AddContact from "./components/Contacts/AddContact/AddContact";


function App() {
    const [contacts , setContacts] = useState([]);

    const fetchContacts = useCallback(async (applyData) => {
        try {
            const response = await fetch("http://localhost:8081/contact");

            if (!response.ok) {
                throw new Error('Request failed');
            }

            const data = await response.json();
            applyData(data);
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    useEffect(() => {
        const transformContacts = (contacts) => {
            const transformedContacts = [];
            for(const key in contacts) {
                transformedContacts.push({
                    id: contacts[key].id,
                    image: contacts[key].image,
                    firstname: contacts[key].firstname,
                    lastname: contacts[key].lastname,
                    email: contacts[key].email,
                    phoneNumber: contacts[key].phoneNumber
                });
            }

            setContacts(transformedContacts);
        }

        fetchContacts(transformContacts);
    }, [fetchContacts]);

    const handleDeleteContact = (id) => {
        setContacts(contacts.filter(contact => {
            return contact.id !== id;
        }));
    }

    return (
        <div>
            <AddContact/>
            <ContactList
                contacts={contacts}
                onDeleteContact={handleDeleteContact}
            />
        </div>

    );
}

export default App;
