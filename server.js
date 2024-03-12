
const express = require('express');
const dotenv = require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const portfolioRoute = require('./routes/portfolioRoute');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/api/portfolio',portfolioRoute);

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server is Running on ${port}`)
});

