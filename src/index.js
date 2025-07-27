import app from "./app.js";
import dotenv from "dotenv";
import pool from "./config/db.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const port = process.env.PORT;

// create table before starting server
createUserTable();

// testing postgres connection
app.get("https://crud-rest-api-six.vercel.app/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`The database name is: ${result.rows[0].current_database}`);
});

// server running
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
