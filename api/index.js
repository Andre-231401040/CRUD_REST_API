import app from "../src/app.js";
import createUserTable from "../src/data/createUserTable.js";
import ServerlessHttp from "serverless-http";

createUserTable();

export const handler = ServerlessHttp(app);
