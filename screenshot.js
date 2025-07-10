const puppeteer = require('puppeteer-core');

async function takeScreenshot() {
  try {
    const browser = await puppeteer.launch({ 
      headless: true,
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      args: [
        '--no-sandbox', 
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--no-first-run',
        '--disable-extensions'
      ]
    });
    
    const page = await browser.newPage();
    
    // Set viewport for consistent screenshots
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Navigate to your site
    await page.goto('https://terrisastra.com', { waitUntil: 'networkidle2' });
    
    // Wait longer for brain constellation animation to complete
    await new Promise(resolve => setTimeout(resolve, 6000));
    
    // Take screenshot
    await page.screenshot({ 
      path: 'screenshot.png',
      fullPage: true 
    });
    
    console.log('Screenshot saved as screenshot.png');
    await browser.close();
    
  } catch (error) {
    console.error('Error taking screenshot:', error);
  }
}

takeScreenshot();