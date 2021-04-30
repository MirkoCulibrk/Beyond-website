import {useRef} from 'react';
import useTranslation from 'next-translate/useTranslation'
import Button from '../../UI/Button/Button';
import Image from 'next/image';
const Banner = () => {
    let {t} =useTranslation();
    const offerRef=useRef(null);
    const executeScroll = () => offerRef.current.scrollIntoView({behavior: "smooth",block: "start"})    
    return (
        <section role="banner" className="banner">
            <div className="container">
                <div className="banner-container column">
                    <div className="banner-container row">
                        <div className="banner-text ">
                        <Image src="/award.png" layout="fixed" width="130" height="80" quality="100" alt="Medals for Top Whitening System Award "></Image> 
                            <h1 className="bannner-text--heading">{t('home:h1')}</h1>
                                                  
                            <h2 className="banner-text--info">{t('home:bannerh5')}</h2>
                            <Button text={t('home:learnmore')} action={executeScroll}></Button>
                                          
                            
                        </div>
                        <div className="banner-imgcontainer row">
                            <Image src="/women.jpg" className="banner-imgcontainer--img"layout="intrinsic" width="310" height="485" alt="women smile"quality={100}/>
                            <Image src="/pic2.jpg" layout="intrinsic" width="310" height="485" className="banner-imgcontainer--image" quality={100} alt="product"/>
                            
                        </div>
                    </div>
                    <section className="banner-offer" ref={offerRef}>
                        
                        <div className="banner-offer--info" >
                            <h3 className="banner-offer--heading">{t('home:offerh1')}</h3>
                            <h4>{t('home:info')}</h4>
                        </div>
                        <div className="banner-offervideo"  >
                            <video src="/video.mp4" autoPlay={true} loop={true} muted={true} id="video" alt="video"></video>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Banner
