import React from 'react'; 

const NotesButton = ({notesButtonClicked}) => {
    return <input type = "button" value = "?" onClick = {notesButtonClicked} style={{position: 'absolute', top: 0, right: 0, margin: '1em'}}/>
}

export default NotesButton;