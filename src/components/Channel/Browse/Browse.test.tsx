import { render } from '@testing-library/react'
import Browse from './index'

test('Browse', () => {
  const { getByTestId } = render(<Browse id="486" />)

  const link = getByTestId('Browse-link')

  expect(link).toHaveAttribute('href', '/share/486')
})
