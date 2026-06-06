const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
const port = 5000;

// Use CORS middleware
app.use(cors());

// Create an HTTP server and attach WebSocket server
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Allow requests from React app
        methods: ["GET", "POST"],
    },
});

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Replace with your DB username
    password: "", // Replace with your DB password
    database: "gosha-e-durood", // Replace with your database name
});

db.connect((err) => {
    if (err) {
        console.error("Database connection error:", err);
        return;
    }
    console.log("Connected to database!");
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

// Listen for WebSocket connections
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
