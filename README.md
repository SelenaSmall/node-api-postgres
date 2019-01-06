#### Run app
```
node index.js
```

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
