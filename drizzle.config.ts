import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    // url: process.env.POSTGRES_URL,
    url: "",
  },
  tablesFilter: ["stegoscan_*"],
});
