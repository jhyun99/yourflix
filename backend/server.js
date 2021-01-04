const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express(); 
const port = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json());

const uri = process.env.ATLAS_URI; //No value at the moment

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true)

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB connection successful");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});