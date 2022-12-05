const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const url = process.env.API_URL;

//Middlewares
app.use(cors());

const config = {
  headers: { 'accept-encoding': null }
};

const getBritneyQuote = async (url) => {
  try {
    const response = await axios.get(url, config);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error)
  }
}

app.get('/quotes', async (req, res) => {
  const britneyQuotesData = await getBritneyQuote(url);
  res.json(britneyQuotesData);
});

module.exports = app;