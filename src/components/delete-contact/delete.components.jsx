import React from './delete.components';
import './delete.styles.scss';

function DeleteContact({props,id}){
    return(
        <i onClick = { props} class="fas fa-trash trash" id = {id}></i>
    )
}

export default DeleteContact