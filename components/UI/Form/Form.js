
import {useForm} from 'react-hook-form';
import {useState} from 'react';
import Alert from '../Info/Alert';
import useTranslation from 'next-translate/useTranslation';
import {useRouter} from 'next/router';
import axios from 'axios';
const Form = ({type}) => {
    const {register,handleSubmit,errors}=useForm();
    let {t} =useTranslation();
    const router=useRouter();
    const locale=router.locale;
    const [subject,setSubject]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const [showAlert,setShowAlert]=useState(false);
    const [typeAlert,setTypeAlert]=useState('');
    const [alertMessage,setAlertMessage]=useState('');
    const subjectError=locale==='sr'?'Molimo Vas unesite temu emaila':"Please enter email subject";
    const nameError=locale=='sr'?'Molimo Vas unesite Vase ime':'Please enter your name';
    const emailError=locale=='sr'?'Molimo Vas unesite email adresu':'Please enter email address';
    const messageError=locale=='sr'?'Molimo Vas unesite tekst poruke':'Please enter message';
    async function onSubmitForm(values){
        let config={
            method:'post',
            url:'https://www.blistavosmeh.com/api/contact',
            headers:{
                'Content-Type':'application/json'
            },
            data:values
        };
        try{
            const response=await axios(config);
            if(response.status==200){
                if(locale=='en'){
                    setAlertMessage('Your message is sent.')
                }else if(locale=='sr'){
                    setAlertMessage('Vaša poruka je poslata')
                }
                setTypeAlert('success');
                setShowAlert(true)
                setSubject('');
                setName('');
                setEmail('');
                setMessage('');
            }
        }catch(err){
            setTypeAlert('error')
            if(locale=='en'){
                setAlertMessage('Something went wrong.')
            }else if(locale=='sr'){
                setAlertMessage('Nešto je pošlo po zlu.')
            }
            setShowAlert(true)
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            {showAlert && <Alert type={typeAlert} message={alertMessage}showAlert={setShowAlert}></Alert>}
            <div className="modal-formfirst">
                <div className={`modal-form--body ${type=='contact'?'first':null}`}>
                    <label htmlFor="subject">{t('common:modalformSubject')}</label>
                    <input type="text" ref={register({
                        required:{
                            value:true,
                            message:`${subjectError}`
                        }})} 
                        name="subject" 
                        id="subject"  
                        value={subject} 
                        onChange={(e)=>setSubject(e.target.value)}
                        className={`${errors.subject?'red':null}`}
                        ></input>
                        <span className="modal-form--span">{errors?.subject?.message}</span>
                </div>
                <div className={`modal-form--body ${type=='contact'?'first':null}`}>
                    <label htmlFor="name">{t('common:modalformName')}</label>
                    <input type="text" ref={register({
                        required:{
                            value:true,
                            message:`${nameError}`
                        }})} name="name" id="name"  value={name} onChange={(e)=>setName(e.target.value)} className={`${errors.name?'red':null}`}></input>
                    <span className="modal-form--span">{errors?.name?.message}</span>
                </div>
            </div>
            <div className="modal-form--body">
            <label htmlFor="email">{t('common:modalformEmail')}</label>
                <input type="email"id="email" ref={register({
                    required:{
                        value:true,
                        message:`${emailError}`
                    },
                    pattern:{
                        value:'/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i',
                        message:`${locale=='sr'?'Email mora da bude pravilnog oblika':'Email address needs to be valid'}`
                    }
                })} 
                    name="email" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                    className={`${errors.email?'red':null}`}
                    ></input>
                    <span className="modal-form--span">{errors?.email?.message}</span>
            </div>
            <div className="modal-form--body">
            <label htmlFor="text">{t('common:modalformMessage')}</label>
                <textarea  name="message"  
                ref={register({
                    required:{
                        value:true,
                        message:`${messageError}`
                    },
                    minLength:{
                        value:30,
                        message:`${locale=='sr'?'Poruka mora bude duža od 30 karaktera.':'Message must be longer ther 30 characters'}`

                    },
                    maxLength:{
                        value:1500,
                        message:`${locale=='sr'?'Poruka ne može da bude duža od 1500 karkatera':'Message can not be longer ther 1500 characters'}`
                    }

                })} 
                id="text" 
                value={message} 
                onChange={(e)=>setMessage(e.target.value)}
                className={`${errors.message?'red':null}`}
                >

                </textarea>
                <span className="modal-form--span">{errors?.message?.message}</span>
            </div>
            
            <button type="submit">{t('common:modalformButton')}</button>
        </form>
    )
}

export default Form
