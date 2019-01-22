# Development

### Clone repo
```
git clone git@github.com:SelenaSmall/node-api-postgres.git
```

### Install dependencies
```
cd node-api-postgres && npm i
```

### Create local database
Using postgres, from the command line
```
createdb node-api-postgres
```

### Run API and React App
Both the API and the front are being served on the same port

```
npm run start
```

---

# DEPLOY

#### Configure deploy to Heroku

* Provision pg database (hobby-dev)
* Add Procifle
* Use process.env.${var} for accessing Heroku's env vriables
* Log in to Heroku dashboard and run command in the console to create database tables 

--> TODO Make this deploy automatic

### Deploy Latest API and Frontend to Heroku
Latest migration will also run on deploy as per the post-deploy script in `package.json`
```
git push heroku master
```

### Optionally Run latest migration directly on Heroku
```
heroku run knex migrate:latest
```

---

### CORS
CORS was enabled to allow the frontend and backend to run on different ports - it's no longer necessary, however it may be used in the future

### Create the first Admin User directly in the database by running:
```
heroku pg:psql --app app_name --command "INSERT INTO users(email, password, is_admin) VALUES ('user@email.com', 'password', TRUE)"
```
