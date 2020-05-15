import { render, fireEvent } from '@testing-library/react'
import { delay } from 'rxjs/operators'
import LinkWithRipple from './index'

jest.mock('rxjs/operators', () => {
  const operators = jest.requireActual('rxjs/operators')
  operators.delay = jest.fn(() => (s) => s)
  return operators
})

jest.useFakeTimers()

test('LinkWithRipple', () => {
  const mockNavigate = jest.fn()

  const { getByTestId } = render(
    <LinkWithRipple href="/channel" onNavigate={mockNavigate}>
      link
    </LinkWithRipple>
  )

  const wrapper = getByTestId('LinkWithRipple')

  fireEvent.click(wrapper)

  expect(wrapper).toBeInTheDocument()
  expect(wrapper).toHaveClass('mdc-ripple-surface')

  setTimeout(() => {
    expect(delay).toHaveBeenCalledWith(400)
    expect(mockNavigate).toHaveBeenCalled()
  }, 400)
})
