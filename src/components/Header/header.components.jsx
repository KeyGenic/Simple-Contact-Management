import React,{useState} from "react";
import './header.styles.scss'
import { AddIcon } from "../AddIcon/Add-Icon.components";


function Header() {
    const [addContact,setContact] = useState([])
    const contact = (contactText) => {
        if(!contactText) return
        const newContact = [...addContact,contactText]
        setContact(newContact)
        console.log(addContact)
    }
    return(
        <header id = "header">
        <h1>CONTACT</h1>
        <AddIcon props={contact}/>
    </header>
    )
}

export default Header