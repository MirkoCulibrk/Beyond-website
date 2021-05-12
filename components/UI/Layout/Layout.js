import Footer from "../../Footer/Footer";
import {useEffect} from 'react';
import Head from 'next/head';
import Nav from '../../Nav/Nav';
import {UseSideMenu} from '../../../context/useSideMenu';
import ModalBuy from '../ModalBuy/ModalBuy';
import { useMediaQuery } from 'react-responsive'
const Layout = ({children}) => {
    const smallDevicee = useMediaQuery({
        query: '(max-device-width: 768px)'
      });
    return (
        <>  
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;700&family=Open+Sans:wght@400;700&display=swap"/>
                 <link media="print" onload="this.onload=null;this.removeAttribute('media');"  href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"/> 
                 <noscript>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;700&family=Open+Sans:wght@400;700&display=swap"/>
                </noscript>
                </Head>
            {/* <UseSideMenu smallDevice={smallDevicee}>
                <ModalBuy></ModalBuy>
                <Nav></Nav>
                <main>
                    {children}
                </main>
                <Footer></Footer>
            </UseSideMenu> */}
             <div className="soon">
                 <div className="img">
                     
                <img src="/soon.png"></img>
                 </div>
            </div>
        </>
    )
}

export default Layout
