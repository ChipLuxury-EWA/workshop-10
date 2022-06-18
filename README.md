# Sequelize ORM workshop

In this workshop we use Sequelize ORM in a simple node app.

## You will practice

**Sequelize models** - Use Sequelize model to execute queries on your DB

**Migrations** - Manage DB changes using Sequelize migrations


### Prerequisites - complete [workshop #9](https://github.com/monday-u-com/workshop-9), have a football DB in your machine
- Download and install [docker](https://docs.docker.com/get-docker/)
- Open console and pull latest mysql image: ```docker pull mysql/mysql-server ```
- Run mysql container: ```docker run -p 3306:3306 --name mysql_workshop -e MYSQL_ROOT_PASSWORD=password -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=mysql_workshop -d mysql/mysql-server```
- Validate container is up: ```docker ps``` 
- !!! Alternatively to docker - install SQL sever without docker: https://dev.mysql.com/downloads/mysql/
- Download [workshop_create_table.sql](https://github.com/monday-u-com/workshop-9/blob/main/workshop_create_table.sql) and execute it in workbench. This will create the tables for our Football DB.
- Download [workshop_instert_data.sql](https://github.com/monday-u-com/workshop-9/blob/main/workshop_instert_data.sql) and execute it in workbench. This will insert data to the tables in our DB.

## Workshop steps:
1. Clone this repository: `git clone git@github.com:monday-u-com/workshop-10.git`
2. CD workshop-10 directory
3. Explore `server/db` folder files - config (where we set connection details to our db) and models (model definition of player entity)
4. Run `npm install`
5. Run `npm start`
6. Open browser and go to "http://localhost:3042/players" - this will load all players from our db

### Task #1
Implement `getPlayer` function in `storage_service.js`. Use the Player model to find the specific player and return it. 
Verify it works: http://localhost:3042/player/1

[Solution](https://github.com/monday-u-com/workshop-10/pull/4)

### Task #2
Implement `createPlayer` function in `storage_service.js`. Use the Player model to create a new player in our DB.
Verify it works, insert new player using Postman or the command: `curl -X POST localhost:3042/player   -H 'Content-Type: application/json'   -d '{ "player_id":9999,"player_name":"player name","age":30,"position":"Attacker","country":"uk"}'` and load it's data: http://localhost:3042/player/9999

[Solution](https://github.com/monday-u-com/workshop-10/pull/5)


### Task #3
Using [`npx sequelize-cli model:generate`](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-model-and-migration) - create a new model for Salary (run the following from db folder) -  `npx sequelize-cli model:generate --name Salary --attributes start_date:date,end_date:date,amount:integer,player_id:integer`. This will create a migration file in `server/db/migrations`.

Explore the new files that were generated in migrations and model folder. 

Now execute the migration: `npx sequelize-cli db:migrate`  - this will create the Saralies table in our DB. 

[Solution](https://github.com/monday-u-com/workshop-10/pull/6)


### Task #4
Implement `createSalary` function in `storage_service.js`. Use the Salary model to create a new salary in our DB.
Verify it works, insert new Salary using Postman or the command: `curl -X POST localhost:3042/salary   -H 'Content-Type: application/json'   -d '{ "start_date":"2022-01-02","end_date":"2023-01-01","amount":100000,"player_id":1}'` 

[Solution](https://github.com/monday-u-com/workshop-10/pull/2)


### Task #5
Implement the getSalary function, then go to browser and get the salary data via API: http://localhost:3042/salary/1

[Solution](https://github.com/monday-u-com/workshop-10/pull/3)


### Task #6
Add [association](https://sequelize.org/docs/v6/core-concepts/assocs/#:~:text=To%20do%20this%2C%20Sequelize%20provides,The%20HasMany%20association) between Salary's player_id field and Player model.

Include the Player model in getSalary response (use the `include` option `findByPk(id, { include: <model name>})`) 

Go to browser and get the salary data via API: http://localhost:3042/salary/1 , now it should include the player data as well!

[Solution](https://github.com/monday-u-com/workshop-10/pull/1)



## Usefull links:
[Initializing Sequelize](https://sequelize.org/docs/v6/getting-started/)

[Creating migrations](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-model-and-migration)

[DataTypes](https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)

[Association](https://sequelize.org/docs/v6/core-concepts/assocs/#:~:text=To%20do%20this%2C%20Sequelize%20provides,The%20HasMany%20association)

[Sequelize documentation](https://sequelize.org/docs/v6/)
