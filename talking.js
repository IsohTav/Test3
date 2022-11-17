const puppeteer = require('puppeteer');
const express = require('express');
const app = express();


app.get('/test1', (req, res) => {
  res.send('hello world')
})
