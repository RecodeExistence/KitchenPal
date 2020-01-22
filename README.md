# Jefferson Frank Tech Assessment


## Project Description
This project is my response to a technical skills assessment set by Jefferson Frank International, as part of their recruiting process.  

I will create a single page application (SPA) in ReactJS, which will retrieve data from a public API, and output it in a well designed manner.  

For this purpose, I will be using the Spoonacular API.  
The app will allow a user to enter a food name, it will be looked up on the API, with an image, description, and possibly recipe list for the meal.  

## Project Links
https://github.com/RecodeExistence/Plateful

## Wireframes
Link: [https://res.cloudinary.com/recodelifetech/image/upload/v1579733312/App%20WireFrames/Selection_019_lgbtvd.png](https://res.cloudinary.com/recodelifetech/image/upload/v1579733312/App%20WireFrames/Selection_019_lgbtvd.png)

Description:  Simple MVP layout with search bar, display sections for food image and food description/recipe.  Logo and Name for App at top.  

## API

This project will use the Spoonacular Food API at: 
[https://spoonacular.com/food-api](https://spoonacular.com/food-api)

Provide a small code sample of the returned data that you will use to build your app. TODO

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
-Take user input. (a food or recipe name). 
-Retrieve meal/recipe data from API based on input
-Display meal/recipe on the page. 
-Display an image of the meal on the page.  

#### PostMVP EXAMPLE

-'What's cooking?' button: returns a random meal or recipe.
-Meal list:  Allow user to save favourite meals/food lists.

## React Component Hierarchy

Define the the React components and the architectural design of your app.

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React, React-DOM and React Router| 
| Logo | This will render the logo. | 
| FoodImage | This will render the returned image of food.|
| FoodDetail| This will render the food name returned, along with a short description and recipe. |
|UserInputBar | This will render the user input bar for searching. | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object