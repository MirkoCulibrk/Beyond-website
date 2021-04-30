
import Image from 'next/image';
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-icons" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/></svg>
                    </div>
                    <a href="tel:+381640157707" aria-label="Phone"><span>+381640157707</span></a>
                </div>
                <div className="sidebar-socialcontainer">
                    <div className="sidebar-socialcontainer--icon">
                         <svg xmlns="http://www.w3.org/2000/svg"className="sidebar-icons" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"/></svg>
                    </div>
                    <a href="mailto:beyondteethserbia@gmail.com" aria-label="Email">beyondteethserbia@gmail.com</a>
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
