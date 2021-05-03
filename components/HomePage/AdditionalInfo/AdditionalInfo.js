import React from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
const AdditionalInfo = () => {
    const {t}=useTranslation();
    return (
        <div className="additional">
            <h2>{t('common:additionh1')}</h2>
            <div className="additional-images">
                <div className="additional-images--move">
                    <img loading="lazy" src="/additional1.png" alt="led curling light"></img>
                    <img  loading="lazy" src="/additional2.png" alt="Single tooth whitening function"></img>
                </div>
                <div className="additional-images--move">
                    <img loading="lazy" src="/additional3.png" alt="Air ionzer Purifier Function"></img>
                    <img loading="lazy" src="/additional4.png" alt="Remote Controled voice instruction function"></img>  
                </div>
                
            </div>
            <div className="additional-tehn">
                <h2>LightBridge™ Technology</h2> 
                <div className="move">
                    <div className="additional-tehn--image">
                        <Image src="/lion.png" layout="responsive" width="690" height="380" quality="100"></Image>
                    </div>
                    <div className="additional-tehn--info">
                        <h5>{t('common:lionh5')}</h5>
                        <p>{t('common:lionp')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalInfo
