import { DataSource } from "typeorm";
import { Post } from "../models/Post";
import dotenv from "dotenv";
dotenv.config();

export const helpperDataSource = new DataSource({
  type: "postgres",
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.PG_ACCOUNT,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  synchronize: Boolean(process.env.PG_SYNCHRONIZE),
  logging: Boolean(process.env.PG_LOGGER),
  entities: [Post],
});
