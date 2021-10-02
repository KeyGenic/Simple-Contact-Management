import React,{useState} from 'react';
import { AddForm } from '../Add-Form/Add-Form.components';
import './Add-Icon.styles.scss';

export const AddIcon = ({props}) => {
    const [isActive,setActive] = useState(false)
    return(
        <div className = "add-btn">
            <div className = "plus-icon" onClick = {() => {!isActive? setActive(true):setActive(false)}}>
            <i className={`${!isActive? 'fas fa-plus' : 'fas fa-minus' }`}></i>
            </div>
            {isActive === true? (<AddForm onSubmit ={props}/>) : null}
        </div>
    )
}

