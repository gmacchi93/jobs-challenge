import '../styles/globals.css'
import type { AppProps } from 'next/app'
import awsExports from "src/aws-exports";
import { Amplify } from 'aws-amplify';
import { Provider } from "react-redux";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { store } from 'store';
config.autoAddCss = false
Amplify.configure({ ...awsExports, ssr: true});


export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}
