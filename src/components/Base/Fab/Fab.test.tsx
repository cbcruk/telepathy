import { render } from '@testing-library/react'
import Icon from '../../Home/Browse/Icon'
import Fab from './index'

test('Fab', () => {
  const { getByTestId } = render(
    <Fab href="/channel?category=전체">
      <Icon />
    </Fab>
  )

  const wrapper = getByTestId('Fab')
  const link = getByTestId('Fab-link')
  const icon = link.querySelector('svg')

  expect(wrapper).toBeInTheDocument()
  expect(wrapper).toHaveClass('wrapper')

  expect(link).toHaveClass('mdc-ripple-surface', 'button')
  expect(link).toContainElement(icon)
})
