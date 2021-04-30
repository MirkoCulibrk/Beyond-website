import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
const Results = ({id}) => {
    
  const {t}=useTranslation();
    return (
        <div className="product-results column">
            <h2>{t('common:results')}</h2>
            <img src={`/results${id}.webp`} ></img>
        </div>
    )
}

export default Results
