import Image from 'next/image';
import SocialIcon from '../UI/SocialIcon/SocialIcon';
import {IconContext} from 'react-icons';
import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from 'react-icons/fa';
import Link from 'next/link';
import SimpleMap from '../UI/Map/SimpleMap';
import useTranslation from 'next-translate/useTranslation';
const Footer = () => {
    const {t} =useTranslation();
    return (
        <>
        <footer role="contentinfo" className="footer">
            <div className="container row">
                <div className="footer-info--social">
                    <Link href="/">
                        <Image src="/logo2.png" layout="fixed" width="167" height="54" alt="footer logo"></Image>
                    </Link>
                    <h3>
                        {t('common:footerh5')}
                        </h3>      
                    
                    <div style={{display:'flex',flexDirection:'row'}} className="icons">
                     <SocialIcon type="white"></SocialIcon>   
                    </div>
                              
                </div>
                <div className="footer-social">
                    <div className="center">
                            <h3 className="footer-social--heading">{t('common:footercontact')}</h3>
                            <div className="footer-socialcontainer">
                                <div className="footer-socialcontainer--icon">
                                    <IconContext.Provider value={{ className: 'sidebar-icons' }}>
                                    <div>
                                        <FaPhoneAlt></FaPhoneAlt>
                                        </div>
                                    </IconContext.Provider>
                                </div>
                                <a href="tel:+381640157707" aria-label="Phone"><span>+381640157707</span></a>
                            </div>
                            <div className="footer-socialcontainer">
                                <div className="footer-socialcontainer--icon">
                                    <IconContext.Provider value={{ className: 'sidebar-icons' }}>
                                        <FaEnvelope></FaEnvelope>
                                    </IconContext.Provider>
                                </div>
                                <a href="mailto:beyondteethserbia@gmail.com"aria-label="Email">beyondteethserbia@gmail.com</a>
                            </div>
                            <div className="footer-socialcontainer">
                                <div className="foooter-socialcontainer--icon">
                                    <IconContext.Provider value={{ className: 'sidebar-icons' }}>
                                        <FaMapMarkerAlt></FaMapMarkerAlt>
                                    </IconContext.Provider>
                                </div>
                                <a href="#" aria-label="Place">place</a>
                            </div>
                    </div>
                </div>
                <div className="footer-location">
                    <div className="center">
                        <h3 className="footer-social--heading">{t('common:footerlocation')}</h3>
                        <SimpleMap></SimpleMap>
                    </div>
                </div>
            </div>
            
        </footer>
        <div className="footer-bottom">
            <p>© 2021</p>
        </div>
    </>
    )
}

export default Footer
