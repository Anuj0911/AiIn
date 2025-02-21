/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:DNLhAPtgw2m3@ep-plain-paper-a1753k8t.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
    }
  };