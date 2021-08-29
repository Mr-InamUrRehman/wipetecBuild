import 'antd/dist/antd.css';
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import router from 'next/router';
import { useState } from 'react';
import Loader from '../components/Loader';
export const config ={
  unstable_runtimeJS: false
}

function MyApp({ Component, pageProps }) {
  const [Loading, setLoading] = useState(false)
  router.events.on('routeChangeStart', (url)=>{
    setLoading(true)
  })
  router.events.on('routeChangeComplete', (url)=>{
    setLoading(false)
  })
  return (
    <> 
      {Loading ? <Loader/> : ""}
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )

}

export default MyApp
