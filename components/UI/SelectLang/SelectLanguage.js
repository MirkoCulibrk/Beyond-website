import React,{useState} from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import {IconContext} from 'react-icons';
import {FaAngleDown,FaAngleUp} from 'react-icons/fa';
const SelectLanguage = () => {
    let router=useRouter();
    let locale=router.locale;
    const [isOpen,setIsOpen]=useState(false);
    return (
        <div className={`select_wrap ${isOpen?'active':''}`}>
            <ul className="default_option" onClick={()=>setIsOpen((prevState)=>!prevState)}  role="tablist">
                <div className="option" role="tab">
                    <div className="option_flag">
                        <Image src={`/flags/${locale}.svg`} layout="fixed" width="20" height="15"alt={`${locale} flag`}></Image>
                    </div>
                    <span>{locale}</span>
                    <div className="option_icon">
                        <IconContext.Provider value={{ className: 'icon' }}>
                              {isOpen?<FaAngleUp></FaAngleUp>:<FaAngleDown></FaAngleDown>} 
                        </IconContext.Provider>
                    </div>
                </div>
            </ul>
            <ul className="select_ul" role="tablist">
                    {router.locales.map((locale)=>(
                        <li key={locale} onClick={()=>setIsOpen((prevState)=>!prevState)}  role="tab"> 
                            <Link href={router.asPath} locale={locale} >
                                <div className="option">
                                    <div className="icon">
                                        <Image src={`/flags/${locale}.svg`} layout="fixed" width="20" height="15"></Image>
                                    </div>
                                    <span>{locale}</span>
                                </div>
                                
                            </Link>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default SelectLanguage
