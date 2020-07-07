(Insert logo)

# Spot.Me - Fitness Social Media Platform

## **1.0 - Overview**

Team project utilising the MERN stack and third-party APIs to build a platform for users to find local fitness facilities, create groups and post events between followers. 

My role in the project was to work on the back-end creating a wide array of controllers, models and RESTful APIs which enabled the team to consume the required data they needed on the front-end.

Our site required API data from Mapbox (producing maps) and Google Places (for facilities data and reviews) which was good exposure into some of the most popular APIs to date. 

The project was great coordination practice for me, as I needed to ensure all the API calls were clear with what information was required such request content and valid authentication tokens.

## **2.0 Technology Summary**

### **2.1 - Client Side**

- Reactjs (Hooks and Class based)
- Bulma Framework
- Mapbox API
- Google Places API



### **2.2 - Server Side**

- Node.js
- ExpressJS
- MongoDB
- Mongoose
- JWT Authentication
- Heroku

## **3.0 Database**

### **2.1 - MongoDB**

The criteria for this project was to use a noSQL database which was good exposure to this new type of data storage - particularly as it follows fairly similar structure to JS objects and at the time, our team was more comfortable with this syntax.

The nature of social media sites which generally involve many comments and likes that are nested within others means that arguably an SQL database would be far more suitable than mongoDB as there can be multiple join tables with manyTomany relationships.

Nesting too deep within Mongo would have lead to poor efficiency and also confusing syntax when it would be necessary to populate all of the comments. Due to this, we limited the amount of nesting of comments so only one level of nesting could be done by users (commenting on a post but nobody can comment on the comment).

The toughest area to work on was the news feed as it was required to gather and send over a random selection of posts from various different models (group posts, user posts) and all their associated netted comments. - Populating issues were found with this.

### **2.2 - Mongoose**

Mongoose was used to interface with our mongo Database as myself and the team felt more comfortable with the schema like system that it offered. The user models are quite fleshed out and have a lot of detail which connects to all the other models in some form or another.

