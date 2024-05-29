import puppeteer from 'puppeteer';
console.clear();
const searchingstring ="";
const redcolor ="\x1b[31m";
const cmdreset = "\x1b[0m";


(async () => {
  // Launch the browser and open a new blank page
  //By default Puppeteer launches Chrome in the Headless mode.
  try{
		
		const browser = await puppeteer.launch({headless: false,fullPage: true});
		const pagesarr = await browser.pages();
		console.log(pagesarr.length)
		const page = pagesarr[0];
		// Navigate the page to a URL
		const response = await page.goto("https://google.com.tw");
		//console.log(response.constructor.name);
		// Set screen size
		await page.setViewport({width: 1280, height: 1024});
		//const content = await response.text();
		//console.log(content);
		const elementbypath = await page.$('.gLFyf');
		const title = await page.title();
		console.log(`typename=${redcolor}${title.constructor.name}${cmdreset}`);
		console.log(title);
		await elementbypath.click();
		await elementbypath.type(`${searchingstring}`);
		await page.keyboard.press('Enter');
		await page.waitForNavigation();
		console.log(await title);
		console.log(await page.title());
		
		// Type into search box
		
	} catch(err){

	console.log(err);  
	}
})();
 

async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 10000);
  });
  console.log(`type name=${promise.constructor.name}`); // 顯示 "done!"
  let result = await promise;
  console.log(result); 
}

fetchData();
