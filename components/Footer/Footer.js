import Image from 'next/image';
import SocialIcon from '../UI/SocialIcon/SocialIcon';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
const Footer = () => {
    const {t} =useTranslation();
    return (
        <>
        <footer className="footer">
            <div className="container row">
                <div className="footer-info--social">
                    <div>
                    <Link href="/" passHref>
                        <a className="logo">
                            <Image src="/logo2.png" layout="fixed" width="45" height="50" alt="footer logo"></Image>
                            <span>{t('common:navlogo')}</span>
                        </a>
                    </Link>
                    </div>
                    <h1>
                        {t('common:footerh5')}
                    </h1>      
                    
                    <div style={{display:'flex',flexDirection:'row'}} className="icons">
                     <SocialIcon type="white"></SocialIcon>   
                    </div>
                              
                </div>
                <div className="footer-social">
                    <div className="center">
                            <h1 className="footer-social--heading">{t('common:footercontact')}</h1>
                            <div className="footer-socialcontainer">
                                <div className="footer-socialcontainer--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-icons" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/></svg>
                                </div>
                                <a href="tel:+381640157707" aria-label="Phone"><span>+381640157707</span></a>
                            </div>
                            <div className="footer-socialcontainer">
                                <div className="footer-socialcontainer--icon">
                                <svg xmlns="http://www.w3.org/2000/svg"className="sidebar-icons" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"/></svg>
                                </div>
                                <a href="mailto:beyondteethserbia@gmail.com"aria-label="Email">beyondteethserbia@gmail.com</a>
                            </div>
                    </div>
                </div>
                <div className="footer-location">
                    <div className="center">
                        <h1 className="footer-social--heading">{t('common:footerlocation')}</h1>
                        <ul role="tablist">
                            <li role="tab"> <Link href="/products" className="links">{t('common:navbarproducts')}</Link></li>
                            <li role="tab"><Link href="/contactus" className="links" >{t('common:navbarabout')}</Link></li>
                        </ul> 
                    </div>
                </div>
            </div>
            
        </footer>
        <div className="footer-bottom">
            <p>© 2021 </p>
        </div>
    </>
    )
}

export default Footer
