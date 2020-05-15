import { useState, useEffect } from 'react'

const useShare = () => {
  const [isSupport, setIsSupport] = useState(false)

  useEffect(() => {
    const canShare = Boolean(navigator.share)

    if (!canShare) {
      window.kakaoAsyncInit = () => {
        window.Kakao.init(process.env.REACT_APP_KAKAO_KEY)
      }
    }

    setIsSupport(canShare)
  }, [])

  return isSupport
}

export default useShare
