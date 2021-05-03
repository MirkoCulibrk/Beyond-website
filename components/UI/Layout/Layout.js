import Footer from "../../Footer/Footer";
import Head from 'next/head';
import Nav from '../../Nav/Nav';
import {UseSideMenu} from '../../../context/useSideMenu';
import ModalBuy from '../ModalBuy/ModalBuy';
const Layout = ({children}) => {
    return (
        <>  
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                 <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"/> 
            </Head>
            <UseSideMenu>
                <ModalBuy></ModalBuy>
                <Nav></Nav>
                <main>
                    {children}
                </main>
                <Footer></Footer>
            </UseSideMenu>
        </>
    )
}

export default Layout
