import Head from "next/head"
import '../styles/globals.css'
import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <>
      <Head>
        <title>Scriptszone</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
    // </Provider>
  )
}

export default MyApp