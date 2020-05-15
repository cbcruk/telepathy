const InnerHead: React.FC = () => {
  return (
    <>
      <title>telepathy</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
      />
      <meta name="theme-color" content="#121212" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,900&display=swap&subset=korean"
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-52590917-3"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag('js', new Date()); gtag('config', 'UA-52590917-3');
              `,
        }}
      ></script>
    </>
  )
}

export default InnerHead
