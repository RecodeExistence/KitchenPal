# Jefferson Frank Tech Assessment


## Project Description
This project is my response to a technical skills assessment set by Jefferson Frank International, as part of their recruiting process.  

I will create a single page application (SPA) in ReactJS, which will retrieve data from a public API, and output it in a well designed manner.  

For this purpose, I will be using the Spoonacular API.  
The app will allow a user to enter a food name, it will be looked up on the API, with an image, description, and possibly recipe list for the meal.  

## Project Links
https://github.com/RecodeExistence/KitchenPal

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
 - Take user input. (a food or recipe name).
 - Retrieve meal/recipe data from API based on input
 - Display meal/recipe on the page.
 - Display an image of the meal on the page.

#### PostMVP EXAMPLE
 - 'What's cooking?' button: returns a random meal or recipe.
- Meal list:  Allow user to save favourite meals/food lists.


## React Component Hierarchy

Define the the React components and the architectural design of your app.

## Component Table
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

| Component | Description | 
| --- | :---: |  
| App | STATEFUL: This will make the initial data pull and include React, React-DOM and React Router| 
| Logo | STATELESS: This will render the logo. | 
| FoodImage | STATELESS: This will render the returned image of food.|
| FoodDetail| STATELESS: This will render the food name returned, along with a short description and recipe. |
|SearchBar| STATELESS: This will take the user input to be used in fetching data from the API.| 

## Component Development TimeScales

##### Timescales are key in the development cycle.  These will be estimated, with a little extra time for padding.   

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: | Estimates to follow. 

## Additional Libraries
Will be added here as required. (Possibly Tachyons for a start.)


## Issues and Resolutions
Any issues will be documented correctly via the project repo issues page.  
https://github.com/RecodeExistence/KitchenPal/issues/1
https://github.com/RecodeExistence/KitchenPal/issues/2
