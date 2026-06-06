const express = require("express");
const cors = require("cors"); // Import CORS middleware

const app = express();

// Enable CORS
app.use(cors());

// Example route
app.get("/durood", (req, res) => {
    const test_ai = res.json({ total_durood: 100000 });
    console.log(test_ai);
});

// app.listen(5000, () => {
//     console.log("Server is running on http://localhost:5000");
// });
