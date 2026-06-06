const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL host
  user: 'root',      // Replace with your MySQL username
  password: '',      // Replace with your MySQL password
  database: 'gosha-e-durood', // Replace with your MySQL database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
  } else {
    console.log('Connected to MySQL');
  }
});

// API route to add the submitted number to the total_durood column
app.post('/api/add-durood', (req, res) => {
  const { id, submittedNumber } = req.body;

  if (!id || !submittedNumber) {
    return res.status(400).json({ error: 'Invalid request. ID and submittedNumber are required.' });
  }

  // Find the current value of total_durood
  db.query('SELECT total_durood FROM durood WHERE id = ?', [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database query failed' });
    } 

    if (result.length === 0) {
      return res.status(404).json({ error: 'Record not found' });
    } 

    const currentTotal = result[0].total_durood;

    // Add the submitted number to the existing total
    const updatedTotal = currentTotal + submittedNumber;

    // Update the database
    db.query(
      'UPDATE durood SET total_durood = ? WHERE id = ?',
      [updatedTotal, id],
      (err, updateResult) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to update record' });
        } 

        res.json({ success: true, updatedTotal });
      }
    );
  });
});

// Start the server
const PORT = 5000; // Change this if needed
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
