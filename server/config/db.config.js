import dotenv from "dotenv";
dotenv.config();
// module.exports = {
  const dbConfig = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    PORT: process.env.DB_PORT,
    dialect: process.env.DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };

export default dbConfig;