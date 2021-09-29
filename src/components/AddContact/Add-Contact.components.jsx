import React from 'react';
import './Add-Contact.styles.scss';
import { AddForm } from '../Add-Form/Add-Form.components';

export const AddContact = () => {
    return(
        <div className = "add-contact">
            <div className = "plus-icon">
            <i className="fas fa-plus"></i>
            </div>
            <AddForm/>
        </div>
    )
}