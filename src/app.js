import React,{useState} from "react";
import './app.scss'
import ContactList from "./components/contact-list/contact.components";
import Header from "./components/Header/header.components";
import SearchForm from "./components/search-form/search-form.components";


const PageContactManagemnt = () => {
    const [addContact,setContact] = useState([])
    const contact = (contactText) => {
        if(!contactText) return
        const newContact = [...addContact,contactText]
        setContact(newContact)
        console.log(addContact)
    }
    return(
     <div className = "page-wrap">
         <Header contact ={contact} />
        <SearchForm/>
        <div className = "contact-list-container">
            <div className = "contact-list">
            <div className = "header-list">
                <h6>NAME</h6>
                <h6>EMAIL</h6>
                <h6>PHONE NUMBER</h6>
            </div>
            {
                addContact.map(({name,email,number}) => {
                    return(
                        <ContactList name = {name} email = {email} number = {number} />
                    )
                })
            }
            </div>
        </div>
     </div>
    )
}

export default PageContactManagemnt