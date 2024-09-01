Dear Andrew

This is your bootstrapped nestjs project with docker, auth, session, hot reload in dev, pgadmin, and typeorm already implemented
First things first, run a migration to set up your db.

# GET STARTED

1. Create a .env with the following
```
  DB_USER
  DB_PASSWORD
  POSTGRES_PORT=5432
  SERVER_PORT
```

2. Find and replace dashbaord with the name of your project

3. Change the package name in the package.json

4. Remove what you don't need

5. Reset the git history

```
  git reset $(git commit-tree HEAD^{tree} -m "Init")
```

6. Create a new git repo and change the origin

```
  git remote set-url origin new.git.url/here
```

7. `make dev-up` to start