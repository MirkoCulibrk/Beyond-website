import '../styles/globals.scss'
import Layout from '../components/UI/Layout/Layout';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
         <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
