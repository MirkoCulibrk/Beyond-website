import React,{useState,useEffect} from 'react'
import {IconContext} from 'react-icons';
import {FaTimes} from 'react-icons/fa';
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
    const [type,setType]=useState('');
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
        <div className={`modal-container ${isOpenModal?'activeModal':''}`} >
            <div className="modal-body">
                <div className="close-container" onClick={handleBuyingModal}> 
                <IconContext.Provider value={{className:'icon'}}>
                    <FaTimes></FaTimes>
                </IconContext.Provider>
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
