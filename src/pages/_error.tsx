function Error({ statusCode }) {
  return (
    <p>
      {`네트워크에 문제(${statusCode})가 생겼습니다. 새로고침 버튼을 눌러주세요.`}
    </p>
  )
}
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode || 404
  return { statusCode }
}

export default Error
