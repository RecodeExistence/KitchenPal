import React from 'react';
import './FollowUpNotes.css';

const FollowUpNotes = ({backButtonClicked}) => {
    return (
        <div className = "NotesContainer">
                <input type = "button" onClick = {backButtonClicked} value = "Back" id = "backButton"/>
                <div className = 'ListLayoutContainer'>
                
                <h1 style={{textAlign: 'center'}}>Development Follow Up Notes</h1>
                <ul>
                    <h2>Describe and justify some of the key decisions you made in your project. Why did you decide to do what you did? How does your choice compare to the alternatives?</h2>
                
                    
                <li>WireFraming
                    <p>I spent a lot of time on the wireframe and planning process.  This allowed me to ensure I had a solid foundation of the concept I wanted, along with a basic design for it.</p>

                    <p>The alternative was not to follow a wireframe process, which would have created difficulties in tracking meaninful progress, as well as simply staying on track.</p>

                    <p>Finally, following this process, albeit on a small app, allowed me to replicate the software development cycle used in industry on a personal scale.</p>
                    </li><br />

                <li>Flexbox
                    <p>I'm a fan of class based styling, such as tachyon or tailwind, but I believed in this instance Flexbox was a more sustainable option, allowing ease of responsiveness for all devices from the get go.</p>  
                    
                    <p>Adding the fact that flexbox and css grid are in vogue currently means that in the future it could have even further improvement and feature options.</p>

                    <p>Other options as above could have given me the same functionality , but would have required a lot more fine tuning as far as media queries and the like go, for smaller screens.</p>
                </li>

                    <h2>Describe in detail a few things you would have done differently if starting again. What was your rationale that led to the initial decision? What made you realise that a different option would have been a better choice? Why do you believe it to be a better choice?</h2>
                
                <li>API Choice
                    <p>I initially research several options for where to pull the image data from.  Among these were Spoonacular, Chomp and Edamame.  I eventually went with Spoonacular, but later realised that they had a point-per-request quota, which I filled rather quickly just in testing.<br /><br />
                    As a future consideration, unless I would be using a paid/enterprise plan with Spoonacular, I would conduct further research before commiting.
                    </p>
                </li>

                <h2>Describe in detail a few things you would have done had you more time. How would this addition/change benefit the application? What negative impact, if any, does its absence have on the application?</h2>

                <li>Design
                    <p>Despite having a wireframe for the app, I'm not a skilled designer.  I prefer function over form.  I did find myself spending too much time on color choice and aesthetics.<br />

                    In future, and in a developer role, I would be closely following specifications as describe/requested by the client, and in-house designers,allowing me to focus more on productivity and code effectiveness.</p>

                    <p>Finally, if the app got any larger, I would consider using Redux or Context API to manage App level state, and abstract the state away from App.js, as well as implementing react-router to manage routes instead of the way I've done so now <br />
                    
                    This will allow all state overhead to be managable in a much more effective and streamlined manner.</p>
                </li>

                <li>Features
                    <p>This app was designated as a technical challenge, but is by no means finished.  I plan to add several more features over time including: </p>
                        <ol>
                            <li>Recipe Display: Display recipe information for the entered food.</li>
                            <li>Meal Planner:  Create a weekly meal plan via the app interface</li>
                            <li>User System: Develop a user sign in/sign out system, and the related backend server and database.  More than likely a nosql option like MongoDB, to allow ease of interaction between this feature and the json responses from API.</li>
                        </ol>
                </li>
            </ul>
           
        </div>
    </div>
    );

}

export default FollowUpNotes; 