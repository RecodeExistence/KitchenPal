import React from 'react'; 

const NotesButton = ({notesButtonClicked}) => {
    return <input type = "button" value = "?" onClick = {notesButtonClicked}/>
}

export default NotesButton;