
import { NextSeo } from 'next-seo';
import {useState} from 'react';
import useTranslation from 'next-translate/useTranslation';
import Alert from '../components/UI/Info/Alert';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import {useRouter} from 'next/router';
const contactus = () => {
    const router=useRouter();
    const locale=router.locale;
    let {t} =useTranslation();
    const [showAlert,setShowAlert]=useState(false);
    const [type,setType]=useState('');
    const [alertMessage,setAlertMessage]=useState('');
    const [subject,setSubject]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_z90f6o5','template_e8dr6nb',e.target,'user_WvaUIQngBRnLekT9HnQvp')
                .then(()=>{
                   
                    if(locale=='en'){
                        setAlertMessage('Your message is sent.')
                    }else if(locale=='sr'){
                        setAlertMessage('Vaša poruka je poslata')
                    }
                    setType('success');
                    setShowAlert(true)
                    
                }).then(()=>{
                    setName('');
                    setSubject('');
                    setEmail('');
                    setMessage('');
                }).catch(error=>{
                    setType('error')
                    if(locale=='en'){
                        setAlertMessage('Something went wrong.')
                    }else if(locale=='rs'){
                        setAlertMessage('Nešto je pošlo po zlu.')
                    }
                    setShowAlert(true)
                });
    }
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
                    <form onSubmit={handleSubmit}>
                        <div className="modal-formfirst">
                            <div className="modal-form--body first">
                                <label htmlFor="subject">{t('common:modalformSubject')}</label>
                                <input type="text" name="subject" id="subject" required value={subject} onChange={(e)=>setSubject(e.target.value)}></input>
                            </div>
                            <div className="modal-form--body first">
                                <label htmlFor="name">{t('common:modalformName')}</label>
                                <input type="text" name="name" id="name" required value={name} onChange={(e)=>setName(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="modal-form--body">
                        <label htmlFor="email">{t('common:modalformEmail')}</label>
                            <input type="email"id="email" name="email" required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>
                        <div className="modal-form--body">
                        <label htmlFor="text">{t('common:modalformMessage')}</label>
                            <textarea  name="message" id="text" required value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                        </div>
                        {showAlert && <Alert type={type} message={alertMessage}showAlert={setShowAlert}></Alert>}
                        <button type="submit">{t('common:modalformButton')}</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default contactus
