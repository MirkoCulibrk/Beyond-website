import React,{useState,useEffect} from 'react';
import {useSideMenu} from '../../../context/useSideMenu';
import emailjs from 'emailjs-com';
import {useRouter} from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Alert from '../Info/Info';
const ModalBuy = () => {
    const{isOpenModal,handleBuyingModal} = useSideMenu();
    const router=useRouter();
    const locale=router.locale;
    const {t}=useTranslation();
    const [type,setType]=useState(null);
    const [alertMessage,setAlertMessage]=useState('');
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
                        setAlertMessage('Nešto je poslo po zlu.')
                    }
                }).finally(()=>{
                    setAlertMessage('');
                });
    }
    useEffect(() => {
        const time=setTimeout(()=>{
            setType(null);
            console.log('working')
        },3000);
       return()=> {
        console.log('hej')   
        clearInterval(time)}; 
    }, [alertMessage])
    return (
        <div className={`modal-container ${isOpenModal?'activeModal':''}`} >
            <div className="modal-body">
                <div className="close-container" onClick={handleBuyingModal}> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
                </div>
                <div className="modal-body--content">
                    <h1>{t('common:modalh1')}</h1>
                    <p>{t('common:modalparagraph')}</p>
                    
                    <form onSubmit={handleSubmit}>
                    {alertMessage && <Alert type={type} message={alertMessage}></Alert>}
                        <div className="modal-form--body">
                            <label htmlFor="subject">{t('common:modalformSubject')}</label>
                            <input type="text" name="subject" id="subject" required value={subject} onChange={(e)=>setSubject(e.target.value)}></input>
                        </div>
                        <div className="modal-form--body">
                            <label htmlFor="name">{t('common:modalformName')}</label>
                            <input type="text" name="name" id="name" required value={name} onChange={(e)=>setName(e.target.value)}></input>
                        </div>
                        <div className="modal-form--body">
                        <label htmlFor="email">{t('common:modalformEmail')}</label>
                            <input type="email"id="email" name="email" required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>
                        <div className="modal-form--body">
                        <label htmlFor="text">{t('common:modalformMessage')}</label>
                            <textarea type="text" name="message" id="text" required value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                        </div>
                        <button type="submit">{t('common:modalformButton')}</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ModalBuy
