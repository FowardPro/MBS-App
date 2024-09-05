require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors'); // Import CORS middleware
const nodemailer = require('nodemailer');
const connection = require('./config/config'); // Import your MySQL connection

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Please provide email and password' });
  }

  const query = 'SELECT * FROM member WHERE email = ?';
  connection.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (results.length > 0) {
      const user = results[0];

      // Directly compare the provided password with the stored password (should use hashing in production)
      if (password === user.password) {
        res.json({ message: 'Login successful', user });
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  });
});

app.post('/api/register', (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    kin_name,
    kin_relationship,
    kin_contact
  } = req.body;

  const sql = `INSERT INTO member (first_name, last_name, email, password, kin_name, kin_relationship, kin_contact)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;

  connection.query(sql, [first_name, last_name, email, password, kin_name, kin_relationship, kin_contact], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Internal server error');
    }

    // Send an email reminder to the user
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 3001,
      secure: true,
      loger: true,
      debug: true,
      secureConnection: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: true
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Complete Your Registration with Proof of Payment',
      text: `Dear ${first_name},\n\nThank you for registering. Please submit your proof of payment within the next 24 hours to complete your registration.\n\nBest regards,\nMBS Properties`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email sending error:', error);
        return res.status(500).send(`Internal server error: ${error.message}`);
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Registration successful. Please check your email for further instructions.');
      }
    });
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASS);
  console.log(`Server running on port ${port}`);

});
