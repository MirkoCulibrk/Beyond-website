
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Form from '../components/UI/Form/Form';
const contactus = () => {
    let {t} =useTranslation();
    return (
        <>
        <NextSeo
          title={`${t('common:contact')}`}
          description={`${t('common:contactdesc')}`}
        />
        <section className="contact">
            <div className="container">
                <div className="contact-imgcontainer">
                    <Image src="/contact.webp" layout="responsive" width="400" height="450" quality={100}></Image>
                </div>
                <div className="contact-formcontainer">
                    <h1>{t('common:contacth1')}</h1>
                    <h6>{t('common:contacth6')}</h6>
                        <Form type={'contact'}></Form>
                </div>
            </div>
        </section>
        </>
    )
}

export default contactus
