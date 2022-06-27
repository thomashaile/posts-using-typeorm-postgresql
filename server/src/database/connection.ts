import { helpperDataSource } from "./app-data-source";

const db_connect = async () => {
  try {
    await helpperDataSource.initialize();
    console.log("database connection established");
  } catch (error) {
    console.log("database connection error");
  }
};
export default db_connect;
