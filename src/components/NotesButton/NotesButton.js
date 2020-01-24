import React from 'react'; 
import './NotesButton.css'; 

const NotesButton = ({notesButtonClicked}) => {
    return <input type = "button" value = "?" onClick = {notesButtonClicked} id="NotesButton"/>
}

export default NotesButton;