import * as dotenv from "dotenv";
import app from "./app";
import db_connect from "./database/connection";

const main = async () => {
  dotenv.config();
  db_connect();
  if (!process.env) {
    process.exit(1);
  }
  const PORT = parseInt(process.env.PORT as string, 10);
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
};
main();
