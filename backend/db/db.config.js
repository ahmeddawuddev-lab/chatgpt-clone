import mysql2 from "mysql2/promise";
import "dotenv/config";
import fs from "node:fs";

const db = mysql2.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {
    ca: fs.readFileSync(new URL("../certs/ca.pem", import.meta.url)),
    rejectUnauthorized: true,
  },
});

export default db;
