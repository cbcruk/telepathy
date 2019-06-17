import { useState, useEffect } from 'react'

const useShare = () => {
  const [isSupport] = useState(Boolean(navigator.share))

  useEffect(() => {
    if (!isSupport) {
      window.kakaoAsyncInit = () => {
        window.Kakao.init(process.env.REACT_APP_KAKAO_KEY)
      }
    }
  }, [isSupport])

  return isSupport
}

export default useShare
