const Contact = (props) => {
    return <div>
        <p>{props.firstname}</p>
        <p>{props.lastname}</p>
        <p>{props.email}</p>
        <p>{props.phoneNumber}</p>
    </div>
}

export default Contact;