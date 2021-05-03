import {useEffect} from 'react';
const Info = ({type,message,showAlert}) => {
    useEffect(() => {
        setTimeout(()=>{
            showAlert(null)
        },3000);
    }, []);
    return (
        <>
        <div className={`alert ${type}`}>
        {message}
        </div>
        </>
    )
}

export default Info
