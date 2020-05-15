import { NextApiResponse, NextApiRequest } from 'next'
import rpc from '../../../lib/rpc'
import { querySelectorAll, textContent } from '../../../lib/utils'
import { PROGRAM_SELECTOR, TITLE_SELECTOR, INFO_SELECTOR } from './selectors'

async function rating(_req: NextApiRequest, res: NextApiResponse) {
  const document = await rpc('/search', {
    params: {
      q: '실시간 시청률',
    },
  })

  const items = querySelectorAll(document, PROGRAM_SELECTOR).map((item) => {
    const { ctfdId } = item.dataset
    const title = textContent(item.querySelector(TITLE_SELECTOR))
    const indexOfPercent = title.indexOf('%')
    const percent = (indexOfPercent === -1 ? 0.01 : title.slice(0, indexOfPercent)) + '%'
    const name = title.slice(indexOfPercent + 2)
    const [category, time = ''] = querySelectorAll(item, INFO_SELECTOR).map((info) =>
      textContent(info)
    )
    const [, channel = '', times = ''] = time ? time.match(/(^[^.+\s]+)\s(.+)/) || [] : []

    return {
      id: ctfdId,
      percent,
      name,
      category,
      time,
      times,
      channel,
    }
  })

  res.json({
    items,
  })
}

export default rating
