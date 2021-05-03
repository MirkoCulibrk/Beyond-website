
import { NextSeo } from 'next-seo';
import {useState,useEffect} from 'react';
import useTranslation from 'next-translate/useTranslation';
import Alert from '../components/UI/Info/Info';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import {useRouter} from 'next/router';
const contactus = () => {
    const router=useRouter();
    const locale=router.locale;
    let {t} =useTranslation();
    const [type,setType]=useState('');
    const [alertMessage,setAlertMessage]=useState(null);
    const [subject,setSubject]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_45m4otr','template_528wdrr',e.target,'user_YcpAZT7O1wOp2TffKntpV')
                .then(()=>{
                    setType('success')
                    if(locale=='en'){
                        setAlertMessage('Your message is sent.')
                    }else if(locale=='rs'){
                        setAlertMessage('Vaša poruka je poslata')
                    }
                    
                }).then(()=>{
                    setName('');
                    setSubject('');
                    setEmail('');
                    setMessage('');
                }).catch(error=>{
                    if(locale=='en'){
                        setAlertMessage('Something went wrong.')
                    }else if(locale=='rs'){
                        setAlertMessage('Nešto je pošlo po zlu.')
                    }
                });
    }
    useEffect(() => {
        const time=setTimeout(()=>{
            setType(null);
            console.log('working')
        },3000);
       return()=> clearInterval(time); 
    }, [alertMessage])
    return (
        <>
        <NextSeo
          title="Contact us"
          description="A short description goes here."
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
                        {alertMessage && <Alert type={type} message={alertMessage}></Alert>}
                        <button type="submit">{t('common:modalformButton')}</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default contactus
