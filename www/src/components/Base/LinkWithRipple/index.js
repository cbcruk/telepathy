import React from 'react'
import { navigate } from '@reach/router'
import { withRipple } from '@material/react-ripple'
import { useEventCallback } from 'rxjs-hooks'
import { delay, tap } from 'rxjs/operators'
import classNames from 'classnames'

const LinkWithRipple = ({
  href,
  className,
  initRipple,
  children,
  ...props
}) => {
  const [clickCallback] = useEventCallback(event$ =>
    event$.pipe(
      delay(400),
      tap(() => navigate(href))
    )
  )

  return (
    <div
      ref={initRipple}
      className={classNames(['mdc-ripple-surface', className])}
      onClick={clickCallback}
      {...props}
    >
      {children}
    </div>
  )
}

export default withRipple(LinkWithRipple)
