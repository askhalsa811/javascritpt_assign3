// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port number
const port = 3000;

/**
 * GET method for the home page (root route)
 * This route displays the group names using HTML elements
 * 
 * @param {object} req - The request object
 * @param {object} res - The response object
 */
app.get('/', (req, res) => {
  // Send an HTML response with group names
  res.send(`
    <html>
      <head>
        <title>Express Group</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 40px;
            line-height: 1.6;
          }
          h1 {
            color: #333;
          }
          ul {
            list-style-type: circle;
          }
          li {
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <h1>Our Group Members</h1>
        <ul>
          <li>Amanpreet Singh</li>
          <li>ramanjot kaur</li>
          <li>Khushpreet kaur</li>
        </ul>
      </body>
    </html>
  `);
});

/**
 * Start the Express server and listen on the specified port
 * This will make the application accessible at http://localhost:3000
 */
app.listen(port, () => {
  console.log(`Server1 is running at http://localhost:${port}`);
});
