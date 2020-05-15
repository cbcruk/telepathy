import { JSDOM } from 'jsdom'

async function html2document(html: string) {
  const { window } = new JSDOM(html)

  return window.document
}

export default html2document
