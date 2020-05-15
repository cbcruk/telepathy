import { useRouter } from 'next/router'
import { useEventCallback } from 'rxjs-hooks'
import { delay, tap } from 'rxjs/operators'
import classNames from 'classnames'
import { withRipple } from '@material/react-ripple'
import { Props } from './types'

const LinkWithRipple: React.FC<Props> = ({
  href,
  className,
  initRipple,
  onNavigate,
  children,
  ...props
}) => {
  const router = useRouter()
  const [clickCallback] = useEventCallback<void>((event$) =>
    event$.pipe(
      delay(400),
      tap(() => {
        href && router.push(href)
        onNavigate && onNavigate()
      })
    )
  )

  return (
    <div
      ref={initRipple}
      className={classNames(['mdc-ripple-surface', className])}
      onClick={clickCallback}
      data-testid="LinkWithRipple"
      {...props}
    >
      {children}
    </div>
  )
}

export default withRipple(LinkWithRipple)
