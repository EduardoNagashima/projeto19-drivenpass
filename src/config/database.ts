import pg from "pg";

import dotenv from "dotenv";
dotenv.config();

const dbconfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: null
}

if (process.env.MODE === 'PROD'){
    dbconfig.ssl = {
        rejectUnauthorized: false
    }
}

const {Pool} = pg;
const db = new Pool(dbconfig);

export default db;