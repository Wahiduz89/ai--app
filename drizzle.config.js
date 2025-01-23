import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url:'postgresql://AI-Study-Material-Gen_owner:npg_nqKj8UxgpYv5@ep-restless-snow-a50d5zqb.us-east-2.aws.neon.tech/AI-Study-Material-Gen?sslmode=require'
  }
});
