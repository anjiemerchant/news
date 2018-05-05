# Everything New(s)
Built over the course of two days using Node.js, Express, Sequelize, PostgreSQL, React, Redux, and React-Redux, Everything New(s) uses the News API to allow users to view and save top stories from worldwide media outlets.

## Main Technologies Used
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/) and [Sequelize](http://docs.sequelizejs.com/)
* [React](https://reactjs.org/) and [Redux](https://redux.js.org/)

## Installation
To install the project, fork the project to your github and clone a copy onto your local machine. Run `npm install` to install project dependencies.

### News API Setup
In order to make API calls to the News API endpoints, you'll need to register to obtain an api-key: https://newsapi.org/

### secrets.js Setup
Create a secrets.js file in the main project folder. You'll want to add your API key and an alphanumeric string to use as your session secret. The express-session module will hash your string and use it to sign the session ID cookie.

```javascript

process.env.API_KEY = *your api key here*;
process.env.SESSION_SECRET = *your session secret here*

```

### Database Setup
You'll need manually create a PostgreSQL database to store users' data (ids and saved articles). If you have PostgreSQL installed globally, in your terminal run the command:

`createdb polis`

to intialize an empty database.

### Initializing A Local Server
Once you've completed the above, you're ready to start a local server. Run `npm start-dev` to start the server, compile JSX into JavaScript, and bundle the front-end app.

In your browser, navigate to `http://localhost:8080/` and the app should be up and running.

### Running Tests
To run tests, you'll need to set up a test PostgreSQL datbase. In your terminal, run the command:

`createdb test-polis`

Tests can be run by typing:

`npm run test`

## Authors
Anjali Merchant

## Acknowledgments
[Fullstack Academy's Boilermaker](https://github.com/FullstackAcademy/boilermaker) was used as a template for this app.
