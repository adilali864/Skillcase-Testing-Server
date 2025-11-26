// Import the PostgreSQL client
const { Pool } = require("pg");
const db_config = require("../config/configuration");
const queries = require("../model/schema");

const pool = new Pool({
  connectionString: db_config.db_config.connection_string,
  ssl: {
    rejectUnauthorized: false,
  },
  max: 10,
  min: 0, // Don't keep idle connections (serverless best practice)
  idleTimeoutMillis: 10000, // Close idle connections after 10s (before Neon does)
  connectionTimeoutMillis: 10000, // Timeout after 10s if no connection
  // Keepalive settings to detect dead connections
  keepAlive: true,
  keepAliveInitialDelayMillis: 10000,
});

// Handle pool errors gracefully
pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client:", err.message);
  // Don't crash the app, just log it
  // The pool will automatically remove the bad client
});

pool
  .connect()
  .then((client) => {
    console.log("Connected to PostgreSQL DB");
    client.release();
  })
  .catch((err) => console.error("DB connection failed:", err));

async function initDb(pool) {
  try {
    await pool.query(queries.createFlashCardSet);
    await pool.query(queries.createCards);
    await pool.query(queries.createUser);
    await pool.query(queries.createUserFlashSubmission);
    await pool.query(queries.createChTest);
    await pool.query(queries.createFinalTest);
    await pool.query(queries.createInterview);
    await pool.query(queries.createPronounceSet);
    await pool.query(queries.createPronounceCards);
    await pool.query(queries.createAgreement);
    await pool.query(queries.createStory);
    await pool.query(queries.createResume);

    console.log("Tables created or already exist!");
  } catch (err) {
    console.error(`Error occurred while creating tables: ${err}`);
  }
}

module.exports = { pool, initDb };
