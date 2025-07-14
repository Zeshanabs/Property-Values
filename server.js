const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Database setup
const db = new sqlite3.Database('./customer_submissions.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
    createTables();
  }
});

// Create tables
function createTables() {
  const buyFormTable = `
    CREATE TABLE IF NOT EXISTS buy_form_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      address TEXT NOT NULL,
      city TEXT NOT NULL,
      state TEXT NOT NULL,
      zipCode TEXT NOT NULL,
      budget TEXT NOT NULL,
      propertyType TEXT NOT NULL,
      bedrooms TEXT NOT NULL,
      bathrooms TEXT NOT NULL,
      timeline TEXT NOT NULL,
      additionalInfo TEXT,
      submissionDate DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;

  const sellFormTable = `
    CREATE TABLE IF NOT EXISTS sell_form_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      propertyAddress TEXT NOT NULL,
      city TEXT NOT NULL,
      state TEXT NOT NULL,
      zipCode TEXT NOT NULL,
      propertyType TEXT NOT NULL,
      bedrooms TEXT NOT NULL,
      bathrooms TEXT NOT NULL,
      squareFootage TEXT NOT NULL,
      yearBuilt TEXT NOT NULL,
      estimatedValue TEXT NOT NULL,
      timeline TEXT NOT NULL,
      additionalInfo TEXT,
      submissionDate DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;

  db.run(buyFormTable, (err) => {
    if (err) {
      console.error('Error creating buy form table:', err.message);
    } else {
      console.log('Buy form submissions table created successfully.');
    }
  });

  db.run(sellFormTable, (err) => {
    if (err) {
      console.error('Error creating sell form table:', err.message);
    } else {
      console.log('Sell form submissions table created successfully.');
    }
  });
}

// API Routes

// Submit buy form
app.post('/api/submit-buy-form', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    zipCode,
    budget,
    propertyType,
    bedrooms,
    bathrooms,
    timeline,
    additionalInfo
  } = req.body;

  const sql = `
    INSERT INTO buy_form_submissions 
    (firstName, lastName, email, phone, address, city, state, zipCode, budget, propertyType, bedrooms, bathrooms, timeline, additionalInfo)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(sql, [firstName, lastName, email, phone, address, city, state, zipCode, budget, propertyType, bedrooms, bathrooms, timeline, additionalInfo], function(err) {
    if (err) {
      console.error('Error inserting buy form submission:', err.message);
      res.status(500).json({ error: 'Failed to submit form' });
    } else {
      console.log(`Buy form submission inserted with ID: ${this.lastID}`);
      res.json({ 
        success: true, 
        message: 'Buy form submitted successfully!',
        submissionId: this.lastID 
      });
    }
  });
});

// Submit sell form
app.post('/api/submit-sell-form', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    propertyAddress,
    city,
    state,
    zipCode,
    propertyType,
    bedrooms,
    bathrooms,
    squareFootage,
    yearBuilt,
    estimatedValue,
    timeline,
    additionalInfo
  } = req.body;

  const sql = `
    INSERT INTO sell_form_submissions 
    (firstName, lastName, email, phone, propertyAddress, city, state, zipCode, propertyType, bedrooms, bathrooms, squareFootage, yearBuilt, estimatedValue, timeline, additionalInfo)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(sql, [firstName, lastName, email, phone, propertyAddress, city, state, zipCode, propertyType, bedrooms, bathrooms, squareFootage, yearBuilt, estimatedValue, timeline, additionalInfo], function(err) {
    if (err) {
      console.error('Error inserting sell form submission:', err.message);
      res.status(500).json({ error: 'Failed to submit form' });
    } else {
      console.log(`Sell form submission inserted with ID: ${this.lastID}`);
      res.json({ 
        success: true, 
        message: 'Sell form submitted successfully!',
        submissionId: this.lastID 
      });
    }
  });
});

// Get all buy form submissions (admin only)
app.get('/api/admin/buy-submissions', (req, res) => {
  const sql = 'SELECT * FROM buy_form_submissions ORDER BY submissionDate DESC';
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Error fetching buy submissions:', err.message);
      res.status(500).json({ error: 'Failed to fetch submissions' });
    } else {
      res.json(rows);
    }
  });
});

// Get all sell form submissions (admin only)
app.get('/api/admin/sell-submissions', (req, res) => {
  const sql = 'SELECT * FROM sell_form_submissions ORDER BY submissionDate DESC';
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Error fetching sell submissions:', err.message);
      res.status(500).json({ error: 'Failed to fetch submissions' });
    } else {
      res.json(rows);
    }
  });
});

// Admin dashboard route
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Admin dashboard available at: http://localhost:${PORT}/admin`);
}); 