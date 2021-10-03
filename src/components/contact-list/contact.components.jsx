import React from 'react';
import DeleteContact from '../delete-contact/delete.components';
import './contact-list.styles.scss';

function ContactList({name,email,number}){
    return(
            <div className = 'contacts'>
            <div className = "contact position">
            <i class="fas fa-user"></i>
                <h6>{name}</h6>
                <h6>{email}</h6>
                <h6>{number}</h6>
                <DeleteContact/>
            </div>
            </div>
    )
}

export default ContactList