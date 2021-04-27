import Link from 'next/link';
import Image from 'next/image';
import SideMenu from '../UI/SideMenu/SideMenu';
import Modal from '../UI/Modal/Modal';
import useTranslation from 'next-translate/useTranslation'
import SelectLanguage from '../UI/SelectLang/SelectLanguage';
import {useSideMenu} from '../../context/useSideMenu';
const Nav = () => {
    const {isOpen,smallDevice}=useSideMenu();
    let {t} =useTranslation();
    return (
        <>
            <header className="navbar">
              <div className="container height">
                    <div className="navbar-container">
                        <div className="navbar-container--logo">
                            <Link href="/">
                                <Image src="/logo.png" height="50" width="190" layout="intrinsic" className="logo" alt="logo"></Image>
                            </Link>
                        </div>
                        
                        <nav className="navbar-nav">
                            <ul className={smallDevice?'hidden':''} role="tablist">
                                <Link href="/products"  role="tab">{t('common:navbarproducts')}</Link>
                                <Link href="/contactus"  role="tab">{t('common:navbarabout')}</Link>
                            </ul>
                            <SelectLanguage></SelectLanguage>
                            <SideMenu type="open"></SideMenu>
                        </nav>
                    </div>
                </div>
                
            </header>
            <div className={`mobilenav ${smallDevice&&isOpen?'activenav':''}`}>
                    <nav className="mobilenav-nav">
                        <ul role="tablist">
                            <Link href="/products" className="links"  role="tab">{t('common:navbarproducts')}</Link>
                            <Link href="/contactus" className="links"  role="tab">{t('common:navbarabout')}</Link>
                        </ul> 
                    </nav>
            </div>
            <Modal></Modal>
        </>
    )
}

export default Nav
