import {useEffect} from 'react';
import {useSideMenu} from '../../../context/useSideMenu';
import useTranslation from 'next-translate/useTranslation';
import Form from '../Form/Form';
const ModalBuy = () => {
    const{isOpenModal,handleBuyingModal} = useSideMenu();
    const {t}=useTranslation();
    useEffect(() => {
        if(isOpenModal){
            document.body.style.overflow = 'hidden';
        }
       return()=> {
        document.body.style.overflow = 'auto';
       }; 
       
    }, [isOpenModal]);
    return (
        <div className={`modal-container ${isOpenModal?'activeModal':''}`} >
            <div className="modal-body">
                <div className="close-container" onClick={handleBuyingModal}> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
                </div>
                <div className="modal-body--content">
                    <h1>{t('common:modalh1')}</h1>
                    <p>{t('common:modalparagraph')}</p>
                    
                    <Form ></Form>
                </div>

            </div>
        </div>
    )
}

export default ModalBuy
