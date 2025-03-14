// Import required modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an Express application
const app = express();

// Define the port number
const port = 3000;

/**
 * GET method to display the JSON contents from products.json
 * This route reads the JSON file and sends its contents as a response
 * 
 * @param {object} req - The request object
 * @param {object} res - The response object
 */
app.get('/products', (req, res) => {
  try {
    // Construct the path to the JSON file
    const filePath = path.join(__dirname, 'data', 'products.json');
    
    // Read the JSON file
    const jsonData = fs.readFileSync(filePath, 'utf8');
    
    // Parse the JSON data
    const products = JSON.parse(jsonData);
    
    // Send the JSON data as the response
    res.json(products);
  } catch (error) {
    // Handle any errors that occur during file reading or parsing
    console.error('Error reading products data:', error);
    res.status(500).json({ error: 'Failed to retrieve products data' });
  }
});

/**
 * Start the Express server and listen on the specified port
 * This will make the application accessible at http://localhost:3000
 */
app.listen(port, () => {
  console.log(`Server2 is running at http://localhost:${port}`);
  console.log(`Access products data at http://localhost:${port}/products`);
});
