const puppeteer = require('puppeteer');
const express = require('express');

app.post('/test1', function(req,res){
	return res.redirect('https://www.youtube.com/watch?v=0tOgMSEPFRs');

});

async function scrapeItem(url) {
	
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	const [el] = await page.$x('/html/body/section[2]/div/div[1]/div[1]/dl/dd/span');
	const text = await el.getProperty('p')
	const textTXT = await text.jsonValue();

	cnsole.log({textTXT});
}

scrapeItem('https://www.onlinejobs.ph/jobseekers/info/248015')
