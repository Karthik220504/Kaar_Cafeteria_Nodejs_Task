const express = require('express');
const cafe_inv_route = require('./routes/cafe_inv.route');
const employee_route = require('./routes/empdat.route');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


// A middlewear to convert the json
const app = express();
dotenv.config();
app.use(express.json());

// routes
app.use("/cafe", cafe_inv_route);
app.use("/emp", employee_route);

// Test APIs
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

app.get('/', (req, res) => {
    res.send('response from a Node API - Karthikeyan - Connection Success!');
})

// MongoDB connection
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log('Connected to MongoDB!');})
  .catch((err) => {
    console.error('Connection Failed!', err);
  });