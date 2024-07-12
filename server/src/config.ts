import { configDotenv } from "dotenv";

configDotenv({path: process.env.NODE_ENV == 'development'? 'local.env' : "production.env"});
console.log('mongoDB uri', process.env.MONGODB_URI);
const config = {
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost:27017/",
  port: process.env.PORT || 8080,
  

}

export default config;
