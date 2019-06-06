const micro = require('micro')
const axios = require('axios')
const cheerio = require('cheerio')
const moment = require('moment')
const queryString = require('query-string')
const mem = require('mem')
const channels = require('../constants/channels')

const memSchedule = mem(async () => {
  const response = await axios.get(
    'https://m.search.naver.com/p/csearch/content/nqapirender.nhn',
    {
      params: {
        pkid: '66',
        where: 'nexearch',
        key: 'MultiChannelWeekSchedule',
        u1: '999',
        u5: moment().format('YYYYMMDD0hhmm0'),
        u2: Object.keys(channels).join('|')
      }
    }
  )
  const $ = cheerio.load(response.data.dataHtml)

  const items = $('.ind_program.on')
    .toArray()
    .map(item => {
      const $item = $(item)

      const $title = $item.find('.pr_title')
      const $time = $item.find('.time')
      const $nextItem = $item.next()
      const $endTime = $nextItem ? $nextItem.find('.time') : null
      const params = queryString.parse($title.attr('href'))
      const id = params.os
      const [title, start_time] = [$title, $time].map(
        item =>
          $(item)
            .text()
            .trim() || ''
      )
      const end_time = $endTime ? $endTime.text().trim() : '--:--'

      return {
        id,
        title,
        start_time,
        end_time
      }
    })

  return { items }
})

module.exports = micro(() => memSchedule())
