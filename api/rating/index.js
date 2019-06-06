const micro = require('micro')
const axios = require('axios')
const cheerio = require('cheerio')
const mem = require('mem')

const memRating = mem(
  async () => {
    const response = await axios.get('https://m.search.daum.net/search', {
      params: {
        q: '실시간 시청률'
      }
    })
    const $ = cheerio.load(response.data)

    const items = $('li', '#spe3TO')
      .toArray()
      .map(item => {
        const $item = $(item)

        const { ctfdId: id } = $item.data()

        const title = $item
          .find('.tit_item')
          .text()
          .trim()

        const [, percent, name] = /^\d+.\d+%/.test(title)
          ? title.match(/(^\d+.\d+%)\s(.+)/i)
          : ['', '', title]

        const [category, time = ''] = $item
          .find('.txt_info')
          .toArray()
          .map(item => {
            const $item = $(item)
            return $item.text().trim()
          })

        const [, channel = '', times = ''] = time
          ? time.match(/(^[^.+\s]+)\s(.+)/)
          : []

        return {
          id,
          percent,
          name,
          category,
          time,
          times,
          channel
        }
      })

    return {
      items
    }
  },
  { maxAge: 60000 }
)

module.exports = micro(() => memRating())
