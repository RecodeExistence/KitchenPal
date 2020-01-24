import React from 'react'; 
import './NotesButton.css'; 

const NotesButton = ({notesButtonClicked}) => {
<<<<<<< HEAD
    return <input type = "button" value = "?" onClick = {notesButtonClicked} id="NotesButton"/>
=======
    return <input type = "button" value = "?" onClick = {notesButtonClicked} style={{position: 'absolute', top: 0, right: 0, margin: '1em'}}/>
>>>>>>> bc57abab975c86f55c9f903affe9a640ea31cd75
}

export default NotesButton;