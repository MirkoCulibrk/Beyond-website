import ReactCompareImage from 'react-compare-image';
import leftImage from '../../../public/teethleft.webp';
import rightImage from '../../../public/teethrigth.webp';
import useTranslation from 'next-translate/useTranslation'
const Slider = () => {
    const {t}=useTranslation();
    return (
        <section className="slider">
            <div className="container">
                <div className="slider-text">
                    <h1 className="heading">{t('home:sliderh1')}</h1>
                    <h2>{t('home:sliderh5')}</h2>
                </div>
                <ReactCompareImage leftImage={leftImage} rightImage={rightImage} leftImageAlt="women teeth before threatment" rightImageAlt="women teeth after threatment"/>
            </div>
            
        </section>
    )
}

export default Slider
