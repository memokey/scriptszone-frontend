import Head from "next/head"
import {PrivyProvider} from '@privy-io/react-auth';
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "../redux/store";
import '../styles/globals.css'
import '../styles/app.css'
import '../styles/custom.css'

function MyApp({ Component, pageProps }) {

  const handleLogin = (user) => {
    console.log(`User ${user.id} logged in!`)
  }

  return (
    <Provider store={store}>
      <Head>
        <title>Scriptszone</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
        onSuccess={handleLogin}
        config={{
          loginMethods: ['email'],
          appearance: {
            theme: 'light',
            accentColor: '#FF3D3D',
            logo: 'https://res.cloudinary.com/dmzpebj2g/image/upload/v1690237534/assets/other/slxim9y0qaduirpb5ued.png',
          },
        }}
      >
        <Component {...pageProps} />
        <Toaster
          position="top-right"
          toastOptions={{
            className: '',
            style: {
              border: '1px solid #FFFFFF',
              padding: '16px',
              color: 'light',
            },
          }}
        />
      </PrivyProvider>
    </Provider>
  )
}

export default MyApp