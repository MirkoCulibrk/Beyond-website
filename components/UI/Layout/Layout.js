import Footer from "../../Footer/Footer"
import Nav from '../../Nav/Nav';
import {UseSideMenu} from '../../../context/useSideMenu';
import ModalBuy from '../ModalBuy/ModalBuy'
const Layout = ({children}) => {
    return (
        <>  
            <UseSideMenu>
                
                <ModalBuy></ModalBuy>
                <Nav></Nav>
            
                <main role="main">
                    {children}
                </main>
                <Footer></Footer>
            </UseSideMenu>
        </>
    )
}

export default Layout
