import React from "react";
import './app.scss'
import { AddContact } from "./components/AddContact/Add-Contact.components";

const PageContactManagemnt = () => {
    return(
        <header id = "header">
            <h1>CONTACT</h1>
            <AddContact/>
        </header>
    )
}

export default PageContactManagemnt