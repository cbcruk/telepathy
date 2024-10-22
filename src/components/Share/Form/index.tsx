import Router from 'next/router'
import { Formik } from 'formik'
import Button from './Button'
import { Props } from './types'
import styles from './style.module.css'

const Form: React.FC<Props> = ({ item }) => (
  <Formik
    initialValues={{
      text: '',
    }}
    onSubmit={async (values, { setSubmitting }) => {
      const isSupportShare = navigator.share
      const params = new URLSearchParams({
        q: item.name,
      })
      const shareUrl = `https://m.search.daum.net/search?${params}`

      if (isSupportShare) {
        try {
          await navigator.share({
            title: item.name,
            text: values.text,
            url: shareUrl,
          })

          Router.back()
        } catch (error) {
          console.error(error)
        }
      } else {
        const { Kakao } = window

        Kakao.Link.sendDefault({
          objectType: 'text',
          text: `${item.name} / ${values.text}`,
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
          callback() {
            Router.back()
          },
        })
      }

      setSubmitting(false)

      window.gtag('event', 'share', {
        method: isSupportShare ? 'web' : 'kakao',
        event_label: item.name,
        value: item.percent,
      })
    }}
  >
    {({ values, handleChange, handleSubmit, isSubmitting }) => (
      <form onSubmit={handleSubmit} className={styles.wrapper}>
        <textarea
          name="text"
          onChange={handleChange}
          className={styles.textarea}
          placeholder="메시지를 입력하세요"
        />

        <div className={styles.submit}>
          <Button disabled={!values.text || isSubmitting} />
        </div>
      </form>
    )}
  </Formik>
)

export default Form
