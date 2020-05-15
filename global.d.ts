type ShareData = {
  title?: string
  text?: string
  url?: string
}

interface Navigator {
  share?: (data?: ShareData) => Promise<void>
}

interface Window {
  gtag(event: 'event', eventName: string, eventParams): void
  kakaoAsyncInit(): void
  Kakao: {
    init(key: string): void
    Link: {
      sendDefault(p: {
        objectType: string
        text: string
        link: {
          mobileWebUrl: string
          webUrl: string
        }
        callback(): void
      }): void
    }
  }
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}
