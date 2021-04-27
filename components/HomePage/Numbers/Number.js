import {useEffect,useState} from 'react';
import useTranslation from 'next-translate/useTranslation'
const Number = ({data}) => {
    const {t}=useTranslation();
    const{number,label,duration,id}=data;
    const [count,setCount]=useState(0);
    useEffect(()=>{
        let start=0;
        const end=parseInt(number.substring(0,2));
        if(start==number)return;
        let totalMiliSecDuration=parseInt(duration);
        let incrementTime=(totalMiliSecDuration/end)*1000;
        let timer=setInterval(()=>{
            start+=1;
            setCount(String(start)+number.substring(2));
            if(start==end) clearInterval(timer);
        },incrementTime);
    },[number,duration])
    return (
        <div className="numbers-container" key={count}>
            <div className="numbers-container--count">
                <span>{count}</span>
            </div>
            <div className="numbers-container--content">
                <span>{t(`home:number${id}`)}</span>
            </div>
        </div>
    )
}

export default Number
