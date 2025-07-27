import app from "../src/app.js";
import createUserTable from "../src/data/createUserTable.js";
import serverless from "serverless-http";

createUserTable();

export const handler = serverless(app);
