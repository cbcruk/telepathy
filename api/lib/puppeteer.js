const chrome = require('chrome-aws-lambda')
const puppeteer = require('puppeteer-core')

let browser

async function getPage(url = '') {
  if (!browser) {
    browser = await puppeteer.launch({
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: true
    })
  }

  const page = await browser.newPage()

  try {
    await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 5000
    })
  } catch (error) {
    await page.close()
    throw new Error('page.goto/waitForSelector timed out.')
  }

  return page
}

module.exports = {
  getPage
}
