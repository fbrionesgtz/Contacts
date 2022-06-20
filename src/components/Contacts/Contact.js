import IconEdit from "../IconsComponents/IconEdit";
import IconTrash from "../IconsComponents/IconTrash";
import {useState} from "react";
import ContactForm from "./ContactForm/ContactForm";

const Contact = (props) => {
    const [showEditForm, setShowEditForm] = useState();

    const handleShowEditForm = () => {
        setShowEditForm(prevState => {
            return !prevState;
        })
    }

    return <div>
        {!showEditForm &&
            <div>
                <p>{props.firstname}</p>
                <p>{props.lastname}</p>
                <p>{props.email}</p>
                <p>{props.phoneNumber}</p>
            </div>
        }
        {showEditForm &&
        <ContactForm
            onSubmit={props.onUpdateContact}
            firstname={props.firstname}
            lastname={props.lastname}
            email={props.email}
            phoneNumber={props.phoneNumber}
        />
        }
        <button onClick={handleShowEditForm}>
            <IconEdit
                height="1em"
                width="1em"
                color="black"
                strokeWidth="0.2em"
            />
        </button>
        <button onClick={props.onDeleteContact}>
            <IconTrash
                height="1em"
                width="1em"
                color="black"
                strokeWidth="0.2em"
            />
        </button>

    </div>
}

export default Contact;