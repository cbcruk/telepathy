import Head from 'next/head'
import { useRouter } from 'next/router'
import useShare from '../../hooks/useShare'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { getItem } from '../../store/channels/selectors'
import useId from '../../hooks/useId'
import Layout from '../../components/Layout'
import * as actions from '../../store/channels/actions'
import Form from '../../components/Share/Form'

function Share() {
  const router = useRouter()
  const isSupportShare = useShare()
  const item = useSelector((state: RootState) => getItem(state))
  const { id } = router.query

  useId(id as string, actions.setId)

  return (
    <>
      <Head>
        {!isSupportShare && (
          <script src="//developers.kakao.com/sdk/js/kakao.min.js" />
        )}
      </Head>
      <Layout title={item.name}>
        <Form {...{ item }} />
      </Layout>
    </>
  )
}

export default Share
