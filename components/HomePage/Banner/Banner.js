import useTranslation from 'next-translate/useTranslation'
import Button from '../../UI/Button/Button';
import Image from 'next/image';

import {IconContext} from 'react-icons';
import {FaCheck} from 'react-icons/fa';
const Banner = () => {
    let {t} =useTranslation();
    return (
        <section role="banner" className="banner">
            <div className="container">
                <div className="banner-container column">
                    <div className="banner-container row">
                        <div className="banner-text ">
                        <Image src="/award.png" layout="fixed" width="130" height="80" quality="100" alt="Medals for Top Whitening System Award "></Image> 
                            <h1 className="bannner-text--heading">{t('home:h1')}</h1>
                                                  
                            <h5 className="banner-text--info">{t('home:bannerh5')}</h5>
                            <Button text={t('home:learnmore')}></Button>
                                          
                            
                        </div>
                        <div className="banner-imgcontainer row">
                            <Image src="/women.jpg" className="banner-imgcontainer--img"layout="intrinsic" width="310" height="485" alt="women smile"quality={100}/>
                            <Image src="/pic2.jpg" layout="intrinsic" width="310" height="485" className="banner-imgcontainer--image" quality={100}/>
                            
                        </div>
                    </div>
                    <section className="banner-offer" id="info">
                        <div className="banner-offervideo"  >
                            <video src="/video.mp4" autoPlay={true} loop={true} muted={true} id="video"></video>
                            {/* <Image src="/offer.jpg" layout="intrinsic" width="680" height="450px" alt="offer"></Image> */}
                        </div>
                        <div className="banner-offer--info" >
                            <h3 className="banner-offer--heading">{t('home:offerh1')}</h3>
                            <div className="banner-offer-info">
                                <IconContext.Provider value={{ className: 'icon' }}>
                                    <FaCheck></FaCheck>
                                </IconContext.Provider>
                                <p>{t('home:consulting')}</p>
                            </div>
                            <div className="banner-offer-info">
                                <IconContext.Provider value={{ className: 'icon' }}>
                                    <FaCheck></FaCheck>
                                </IconContext.Provider>
                                <p>{t('home:consulting')}</p>
                            </div>
                            <div className="banner-offer-info">
                                <IconContext.Provider value={{ className: 'icon' }}>
                                    <FaCheck></FaCheck>
                                </IconContext.Provider>
                                <p>{t('home:consulting')}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Banner
