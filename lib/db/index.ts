import { drizzle as drizzleWs } from "drizzle-orm/neon-serverless";
import { drizzle as drizzleHttp } from "drizzle-orm/neon-http";
import { Pool, neon, neonConfig } from "@neondatabase/serverless";
// import ws from "ws";

// if (process.env.NODE_ENV !== "production") {
//   const dotenv = await import("dotenv");
//   dotenv.config();
// }

// This is required for the WebSocket connection to work in Node.js
// See: https://github.com/neondatabase/serverless#example-nodejs-with-poolconnect
neonConfig.fetchConnectionCache = true;

/*
 * Exporting both the Pool and the Neon instance allows us to pick and choose whether we want to use the WebSocket or HTTP connection.
 * This is not necessary per se, but it's a nice feature to have.
 *
 * Note: this is not related to Lucia, as it uses the WebSocket connection by default.
 * But in cases where you want to use the HTTP connection throughout your app, you can do so.
 */
export const pool = new Pool({ connectionString: "postgres://gift.xipu:BLRyzP7Y2nAZ@ep-twilight-moon-28572263.us-east-2.aws.neon.tech/neondb?sslmode=require"});
export const http = neon("postgres://gift.xipu:BLRyzP7Y2nAZ@ep-twilight-moon-28572263.us-east-2.aws.neon.tech/neondb?sslmode=require");

// Same as above but with Drizzle
export const dbPool = drizzleWs(pool);
export const dbHttp = drizzleHttp(http);