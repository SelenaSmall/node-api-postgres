#### Run API
```
node index.js
```

#### Run React APP
```
cd client && REACT_APP_API_BASE_URL='http://localhost:5000' PORT=5001 npm start
```

--> TODO Fix script `npm run start` to use `Procfile.dev` for running FE and BE in one command

---

#### Create pg database from command line
```
createdb node-api-postgres
```

#### Run database.js script to create database tables
```
node models/database.js
```

### Deploy API to Heroku
```
git push heroku master
```

--> TODO Deploy script that runs `node models/database.js` so I don't have to run it every time I make a change to the database

##### Configuring Deploy to Heroku

* Provision pg database (hobby-dev)
* Add Procifle
* Use process.env.${var} for accessing Heroku's env vriables
* Log in to Heroku dashboard and run command in the console to create database tables 

--> TODO Make this deploy automatic