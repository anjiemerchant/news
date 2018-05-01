# News App
This project was built over the course of two days for a coding challenge.

Built using Node.js, Express, Sequelize, PostgreSQL, React, Redux, and React-Redux, News Aggregator uses the News API to allow you to see and save top stories from worldwide media outlets.


## Installation
To install the project, fork the project to your github and clone a copy onto your local machine. Run `npm install` to install project dependencies.

### News API Setup
In order to make API calls to the News API endpoints, you'll need to register to obtain an api-key: https://newsapi.org/

To complete setup:

```javascript
process.env.API_KEY = *your api key here*

```

### Database Setup
You'll need to set up a PostgreSQL database to store users' data (ids and saved artciles). If you have PostgreSQL installed globally, run the command:

`createdb polis`

to intialize an empty database.

### Initializing A Local Server
Once you've completed the above, you're ready to sync your database and start a local server. Run `npm start-dev`. Navigate to `http://localhost:8080/` and your app should be up and running.

## Authors
Anjali Merchant

## Acknowledgments
Fullstack Academy's Boilermaker was used as a template for this app.
