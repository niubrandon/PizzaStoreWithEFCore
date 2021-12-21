# PizzaStore

This web app was created with ASP.NET Core 6.0 (minimal API which is a lightweight version of Web API from ASP.NET Core without using controller and `startup.cs`), React, and PostgreSQL.


This project was developed based on the Microsoft dev tutorial which can be found at:
https://docs.microsoft.com/en-ca/learn/paths/aspnet-core-minimal-api/

However, there are many modifications which have been done to meet my learning target:

1. The original tutorial used Sqlite as database, but this has been modified to use PostgreSQL from package `Npgsql.EntityFrameworkCore.PostgreSQL`
2. Replaced the fetch method with axios promised HTTP request
3. Restructured the Pizza component into a separate component and finished implementing update method for the save button
4. Added key attribute for mapped component to fix a console error 

## Tech Stacks:
- React
- ASP.NET core web API (minimal API)
- Swagger & OpenAPI
- PostgreSQL
- Axios
- Json-server (mockup server)

## UI: a simple interface for displaying all items with functionality of updating item
![swagger](https://github.com/niubrandon/PizzaStoreWithEFCore/blob/main/public/FrontEnd.png?raw=true)

## Swagger & OpenAPI documentation:
![swagger](https://github.com/niubrandon/PizzaStoreWithEFCore/blob/main/public/swagger_pizza_store.png?raw=true)

## Dependencies:

#### Backend
- Microsoft.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.Design
- Microsoft.EntityFrameworkCore.InMemory
- EF Core tools (dotnet tool install --global dotnet-ef)
- Npgsql.EntityFrameworkCore.PostgreSQL
- Swashbuckle.AspNetCore

#### Frontend
- json-server
- axios
- styled-component

## Getting Started:

`git clone git@github.com:niubrandon/PizzaStoreWithEFCore.git`
### navigate to pizza-web folder and change the proxy in package.json if needed
```
npm install
npm start
```

### install dependencies for backend server then start the api server

```
dotnet run
```

### Use a Mock Server with json-server for front-end development without api server
1. Install `json-server` package from npm or yarn  
2. create a db.json file with mock data
3. setup proxy in `package.json`
4. `npx json-server --watch --port 5000 db.json`

## Useful commands
- Migrate data model
`dotnet ef migrations add InitialCreate`
- Create database and schema
`dotnet ef database update`
- start backend server
`dotnet run`



