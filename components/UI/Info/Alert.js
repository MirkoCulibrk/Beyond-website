import {useEffect} from 'react';
const Alert = ({type,message,showAlert}) => {
    useEffect(() => {
        setTimeout(()=>{
            showAlert(false)
        },3000);
    }, []);
    console.log('he',message)
    return (
        <>
        <div className={`alert ${type}`}>
        {message}
        </div>
        </>
    )
}

export default Alert
