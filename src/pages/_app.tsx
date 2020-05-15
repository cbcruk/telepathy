import App, { AppInitialProps, AppContext } from 'next/app'
import Head from 'next/head'
import { wrapper } from '../store'
import InnerHead from '../components/Base/InnerHead'
import '../styles/global.css'
import { fetchItems } from '../store/channels/actions'

class TelepathyApp extends App<AppInitialProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    ctx.store.dispatch(fetchItems())

    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        pathname: ctx.pathname,
      },
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <InnerHead />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default wrapper.withRedux(TelepathyApp)
