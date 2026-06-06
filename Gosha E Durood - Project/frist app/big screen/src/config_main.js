const express = require("express");
const mysql = require("mysql2"); // Unified mysql2 library for better compatibility
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create an HTTP server and attach WebSocket server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow requests from React app
    methods: ["GET", "POST"],
  },
});

// MySQL database connection
const db = mysql.createConnection({
  host: "localhost", // Replace with your MySQL host
  user: "root",      // Replace with your MySQL username
  password: "",      // Replace with your MySQL password
  database: "gosha-e-durood", // Replace with your MySQL database name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
  } else {
    console.log("Connected to MySQL");
  }
});

// API route to add the submitted number to the total_durood column
app.post("/api/add-durood", (req, res) => {
  const { id, submittedNumber } = req.body;

  if (!id || !submittedNumber) {
    return res
      .status(400)
      .json({ error: "Invalid request. ID and submittedNumber are required." });
  }

  // Find the current value of total_durood
  db.query("SELECT total_durood FROM durood WHERE id = ?", [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database query failed" });
    }

    if (result.length === 0) {
      return res.status(404).json({ error: "Record not found" });
    }

    const currentTotal = result[0].total_durood;

    // Add the submitted number to the existing total
    const updatedTotal = currentTotal + submittedNumber;

    // Update the database
    db.query(
      "UPDATE durood SET total_durood = ? WHERE id = ?",
      [updatedTotal, id],
      (err, updateResult) => {
        if (err) {
          return res.status(500).json({ error: "Failed to update record" });
        }

        res.json({ success: true, updatedTotal });
      }
    );
  });
});

// API endpoint to fetch total_durood
app.get("/durood", (req, res) => {
  const query = "SELECT total_durood FROM durood LIMIT 1";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).send("Database query failed");
    }
    res.json(results[0]); // Send the first row of the result
  });
});

// WebSocket: Listen for connections
io.on("connection", (socket) => {
  console.log("A client connected");

  // Periodically fetch the latest `total_durood` and send to the client
  const intervalId = setInterval(() => {
    const query = "SELECT total_durood FROM durood LIMIT 1";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Database query error:", err);
        return;
      }
      if (results.length > 0) {
        socket.emit("updateDurood", results[0].total_durood);
      }
    });
  }, 5000); // Check every 5 seconds

  // Clean up when the client disconnects
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(intervalId);
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
