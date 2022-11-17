const puppeteer = require('puppeteer');

async function scrapeItem(url) {
	
	const browser = await puppeteer.launch({headless: true, args:['--no-sandbox']});
	const page = await browser.newPage();
	await page.goto(url);

	const [el] = await page.$x('/html/body/section[1]/div[2]/div/div/div[1]/div/img');
	const text = await el.getProperty('src')
	const textTXT = await text.jsonValue();

	console.log({textTXT});
}

scrapeItem('https://www.onlinejobs.ph/jobseekers/info/248015')
