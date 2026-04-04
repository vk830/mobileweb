require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { createClient } = require("@supabase/supabase-js");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Supabase client (for inserts, selects, etc.)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Direct Postgres connection (for CREATE TABLE)
const pool = new Pool({
  connectionString: process.env.SUPABASE_DB_URL, // 👈 must be set in .env
  ssl: { rejectUnauthorized: false }
});

// Ensure table exists
async function ensureTable() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS mobile_orders (
        id SERIAL PRIMARY KEY,
        model TEXT,
        name TEXT,
        email TEXT
      );
    `);
    console.log("✅ mobile_orders table ensured");
  } catch (err) {
    console.error("❌ Table creation error:", err);
  } finally {
    client.release();
  }
}
ensureTable();

// API endpoint to insert a booking
app.post("/bookmobile", async (req, res) => {
  const { model, name, email } = req.body;

  const { data, error } = await supabase
    .from("mobile_orders")
    .insert([{ model, name, email }])
    .select(); // 👈 ensures the inserted row (with id) is returned

  if (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }

  res.json({ success: true, data });
});

// API endpoint to fetch all bookings
app.get("/bookings", async (req, res) => {
  const { data, error } = await supabase
    .from("mobile_orders")
    .select("*");

  if (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

// Start server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
