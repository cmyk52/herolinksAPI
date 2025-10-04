import { config } from "dotenv"
import mysql2 from "mysql2/promise"
config()

const env_options = {
PORT: process.env.PORT || 3009

}

// Pool conection dba

export const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DBA,
})

export default env_options