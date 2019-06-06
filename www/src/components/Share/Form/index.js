import React from 'react'
import { Formik } from 'formik'
import Button from './Button'
import styles from './style.module.css'

const Form = ({ item, isSupportShare }) => (
  <Formik
    initialValues={{
      text: ''
    }}
    onSubmit={async (values, { setSubmitting }) => {
      const params = new URLSearchParams({
        q: item.name
      })
      const shareUrl = `https://m.search.daum.net/search?${params}`

      if (isSupportShare) {
        try {
          await navigator.share({
            title: item.name,
            text: values.text,
            url: shareUrl
          })

          console.log('Successful share')
        } catch (error) {
          console.log('Error sharing', error)
        }
      } else {
        const { Kakao } = window

        Kakao.Link.sendDefault({
          objectType: 'text',
          text: `${item.name} / ${values.text}`,
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl
          }
        })
      }

      setSubmitting(false)
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
