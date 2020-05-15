import { render } from '@testing-library/react'
import Channels from './index'

export const channels = [
  {
    id: '486',
    name: '세상에서 제일 예쁜 내 딸 41회',
    percent: '17.1%',
    category: '',
    time: '',
    times: '',
    channel: '',
  },
  {
    id: '487',
    name: '도레미마켓 61',
    percent: '3.62%',
    category: '',
    time: '',
    times: '',
    channel: '',
  },
]

test('Channels', () => {
  const { getByTestId, getAllByTestId } = render(
    <Channels channels={channels} />
  )

  const wrapper = getByTestId('Channels')
  const items = getAllByTestId('Item')
  const item = getByTestId('List-item-0')

  expect(wrapper).toBeInTheDocument()
  expect(items).toHaveLength(2)

  expect(item).toHaveStyle({
    zIndex: 2,
    transform: 'translate3d(0,0px,0)',
    opacity: 0,
  })
})
