import React,{useState} from "react";
import './app.scss'
import ContactList from "./components/contact-list/contact.components";
import DeleteContact from "./components/delete-contact/delete.components";
import Header from "./components/Header/header.components";



const PageContactManagemnt = () => {
    const [addContact,setContact] = useState([])
    const [searchField,setField] = useState('')
    const contact = (contactText) => {
        if(!contactText) return
        const newContact = [...addContact,contactText]
        setContact(newContact)
    }
    function handleChange(event){
        event.preventDefault();
        setField(event.target.value)
    }

    function remove (e){
        const id = e.target.getAttribute('id')
        console.log(id)
        setContact(addContact.filter(list => list.id != id))
    }

    return(
     <div className = "page-wrap">
         <Header contact ={contact} />
         <div className = 'search-form'>
            <input
            onChange = {handleChange}
            type = "search"
            className = "search"
            placeholder ="search"
            />
        </div>
        <div className = "contact-list-container">
            <div className = "contact-list">
            <div className = "header-list">
                <h6>NAME</h6>
                <h6>EMAIL</h6>
                <h6>PHONE NUMBER</h6>
            </div>
            {
                addContact.filter(({name}) => 
                {
                 if(searchField == ""){
                     return name
                 }else if ( name.toLowerCase().includes(searchField.toLowerCase())){
                     return name
                 }
                }).map(({name,email,number,id}) => {
                    return(
                        <ContactList name = {name} email = {email} number = {number} btn = {<DeleteContact props = {remove} id = {id}/>}/>
                    )
                })
            }
            </div>
        </div>
     </div>
    )
}


export default PageContactManagemnt