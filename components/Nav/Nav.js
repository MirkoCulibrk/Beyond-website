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
                            <Link href="/"passHref>
                                <a>
                                    {smallDevice?null:<img src="/logo.png" height="45" width="40" layout="intrinsic" className="logo" alt="logo"></img>}
                                    <span>{t('common:navlogo')}</span>
                                </a>
                                
                            </Link>
                        </div>
                        
                        <nav className="navbar-nav">
                            <ul className={smallDevice?'hidden':null} role="tablist">
                                <li role="tab">
                                    <Link href="/products"  role="tab">{t('common:navbarproducts')}</Link>
                                </li>
                                <li role="tab">
                                    <Link href="/contactus"  role="tab">{t('common:navbarabout')}</Link>
                                </li>
                                
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
                            <li role="tab">
                                <Link href="/products" className="links" >{t('common:navbarproducts')}</Link>
                            </li>
                            <li role="tab">
                                <Link href="/contactus" className="links"  >{t('common:navbarabout')}</Link>
                            </li>
                            
                        </ul> 
                    </nav>
            </div>
            <Modal></Modal>
        </>
    )
}

export default Nav
