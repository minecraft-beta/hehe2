const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/firefox', // Ensure you have the correct path here
    headless: true, // This ensures the browser runs without a GUI
  });
  
  const page = await browser.newPage();
  await page.goto('https://example.com');
  console.log(await page.title());
  
  await browser.close();
})();
