
import Image from 'next/image';
import {IconContext} from 'react-icons';
import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from 'react-icons/fa';
import useTranslation from 'next-translate/useTranslation';
import  SocialIcon from '../SocialIcon/SocialIcon';
import SideMenu from '../SideMenu/SideMenu';
import {useSideMenu} from '../../../context/useSideMenu';
const Modal = () => {
    const {t} =useTranslation();
    const {isOpen,smallDevice}=useSideMenu();
    return (
        <>
        <div className={`sidebar ${isOpen&&smallDevice==false?'active':''}`}>
            <div className="sidebar-close">
                <SideMenu type="close"></SideMenu>
            </div>
            <div className="sidebar-logo">
                <Image src="/logo.png" width="190" height="50"></Image>
            </div>
            <div className="sidebar-text">
                <p>{t('common:sidebarfirst')}

</p>
            </div>
            <div className="sidebar-social">
                <h3 className="sidebar-social--heading">{t('common:sidebar-h3')}</h3>
                <div className="sidebar-socialcontainer">
                    <div className="sidebar-socialcontainer--icon">
                        <IconContext.Provider value={{ className: 'sidebar-icons' }}>
                        <div>
                            <FaPhoneAlt></FaPhoneAlt>
                            </div>
                        </IconContext.Provider>
                    </div>
                    <a href="tel:+381640157707" aria-label="Phone"><span>+381640157707</span></a>
                </div>
                <div className="sidebar-socialcontainer">
                    <div className="sidebar-socialcontainer--icon">
                        <IconContext.Provider value={{ className: 'sidebar-icons' }}>
                            <FaEnvelope></FaEnvelope>
                        </IconContext.Provider>
                    </div>
                    <a href="mailto:beyondteethserbia@gmail.com" aria-label="Email">beyondteethserbia@gmail.com</a>
                </div>
                <div className="sidebar-socialcontainer">
                    <div className="sidebar-socialcontainer--icon">
                        <IconContext.Provider value={{ className: 'sidebar-icons' }}>
                            <FaMapMarkerAlt></FaMapMarkerAlt>
                        </IconContext.Provider>
                    </div>
                    <a href="#" aria-label="Place">place</a>
                </div>
            </div>
            <div className="sidebar-socialholder">
                <h3 className="sidebar-socialholder--heading">{t('common:sidebar-h3second')}</h3>
                <div className="sidebar-socialholder--container">
                    <SocialIcon></SocialIcon>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Modal
