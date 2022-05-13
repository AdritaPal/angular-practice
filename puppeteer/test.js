const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('http://localhost:4200/');
    await page.setViewport({
      width:1200,
      height:800,
    })
	await page.select('#fromCurrency','79.677056');
	await page.type('#amount','100');
	await page.select('#toCurrency','1.126735');
    await page.click('#submitButton');
    await page.waitForSelector('#result',{timeout:1500});
    
	const value = await page.$eval("#resValue", e => e.innerHTML);
    
	if(value == "1.00"){
      console.log('TESTCASE:test_case1:success');
	}
    }
     catch(e){
        console.log('TESTCASE:test_case1:failure');
    }finally{
        
        await page.close();
      await browser.close();
    } 
    
 })();
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('http://localhost:4200/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.click('#submitButton');

    await page.waitForSelector('#result',{timeout:1500});
      console.log('TESTCASE:test_case2:failure');
    }
     catch(e){
      console.log('TESTCASE:test_case2:success');
    }finally{
      await page.close();
      await browser.close();
    } 
 })();
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('http://localhost:4200/');
    await page.setViewport({
      width:1200,
      height:800,
    })
	await page.select('#fromCurrency','1.126735');
	await page.type('#amount','4000');
	await page.select('#toCurrency','0.876893');
    await page.click('#submitButton');
    await page.screenshot({path: 'example.png'});
	const value = await page.$eval("#resValue", e => e.innerHTML);
	if(value == "3113.00"){
      console.log('TESTCASE:test_case3:success');
	}
    }
     catch(e){
      console.log('TESTCASE:test_case3:failure');
    }finally{
      await page.close();
      await browser.close();
    } 
 })();
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('http://localhost:4200/');
    await page.setViewport({
      width:1200,
      height:800,
    })
	await page.select('#fromCurrency','0.876893');
	await page.type('#amount','4000');
	await page.select('#toCurrency','1.126735');
    await page.click('#submitButton');
	const value = await page.$eval("#resValue", e => e.innerHTML);
	if(value == "5140.00"){
      console.log('TESTCASE:test_case4:success');
	}
    }
     catch(e){
      console.log('TESTCASE:test_case4:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
 })();
 (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('http://localhost:4200/');
    await page.setViewport({
      width:1200,
      height:800,
    })
	await page.select('#fromCurrency','79.677056');
	await page.type('#amount','200');
	await page.select('#toCurrency','1.126735');
    await page.click('#submitButton');
    await page.screenshot({path: 'example.png'});
	const value = await page.$eval("#resValue", e => e.innerHTML);
	if(value == "3.00"){
      console.log('TESTCASE:test_case5:success');
	}
    }
     catch(e){
      console.log('TESTCASE:test_case5:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
 })();