const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    timezone: "+07:00", // time in vietnam
    logging: false,
    port: 8080,
  }
);

const db_connect_ap = async () => {
  try {
    await sequelize.authenticate();
    console.log("successfully");
  } catch (error) {
    console.error("Unable to connect", error);
  }
};

module.exports = db_connect_ap;
