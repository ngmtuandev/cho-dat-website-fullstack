require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    port: 8080,
    dialect: process.env.DB_DIALECT,
  },
};

// {
//     "development": {
//       "port": 8080,
//       "username": "postgres",
//       "password": "Manhtuan123***",
//       "database": "chodat",
//       "host": "127.0.0.1",
//       "dialect": "postgres",
//       "logging": false,
//       "timezone": "+07:00"
//     }
//   }
