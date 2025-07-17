import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    logging: false
});

const testConnection = async() => {
    try{
        await sequelize.authenticate();
        console.log("Connection has been etablished successfully!");
    }catch(error) {
        console.error("Unable to connect to the datebase", error);
    }
};

testConnection();
export default sequelize;