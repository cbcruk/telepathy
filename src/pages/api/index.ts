import { NextApiResponse, NextApiRequest } from 'next'
import { version } from '../../../package.json'

async function rating(_req: NextApiRequest, res: NextApiResponse) {
  res.json({
    version,
  })
}

export default rating
