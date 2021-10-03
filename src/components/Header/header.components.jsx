import React,{useState} from "react";
import './header.styles.scss'
import { AddIcon } from "../AddIcon/Add-Icon.components";


function Header({contact}) {
    return(
        <header id = "header">
        <h1>CONTACT</h1>
        <AddIcon props={contact}/>
    </header>
    )
}

export default Header