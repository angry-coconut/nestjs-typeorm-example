# NestJS application with typeorm and swagger.

NestJS example Application integrated with typeorm. It includes all types of relationships. 

This repo show how look nestjs application with integrated typeorm. How to connect to database. How to create an API endpoints for resources. 
It has good enough folder structure for create an application that easy to support.

**For what reason created this repo?**

Sometimes reading documentation did not help with understanding how you can work with any framework, library or npm package.
When you see how it is implemented it can be more helpful than hours of reading docs.
This is one of  the repository from "Examples" series.
In the future, I will add more repositories for different technologies.

## Running the app

Add dot env to project before start. Content of this file should include next variables.

```
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=

```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Dependencies used in this example

To install all run the next commands. First for things related to DB, Second for OpenApi, third for using env variables from .env

You can copy this commands to run inside your project and then copy part of code related to implementation openapi or typeorm.

``` 
npm i @nestjs/typeorm typeorm typeorm-naming-strategy pg 

npm i @nestjs/swagger swagger-ui-express

npm i env-cmd
```

# Notes

- If you have any suggestion, you can create a PR or open issue with described suggestion.
    
     
