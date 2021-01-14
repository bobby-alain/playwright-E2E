const { chromium } = require("playwright");

(async () => {
    const broswer = await chromium.launch({
        headless: false,
        slowMo: 50
    });
    const page = await broswer.newPage();

    // navigate to the page
    await page.goto("https://google.com/")
    await page.screenshot({path: `example.png`})

    await broswer.close()
})();