import { render } from '@testing-library/react'
import { channels } from '../Channels.test'
import Item from './index'

test('Item', () => {
  const { rerender, getByTestId } = render(
    <Item {...{ ...channels[0], index: 1 }} />
  )

  const wrapper = getByTestId('Item')
  const percent = getByTestId('Item-percent')

  expect(wrapper).toBeInTheDocument()

  rerender(<Item {...{ ...channels[0], index: 1, percent: undefined }} />)

  expect(percent.textContent).toBe('0.01%')
})
