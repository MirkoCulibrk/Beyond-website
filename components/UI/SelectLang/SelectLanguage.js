import React,{useState} from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
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
                              {isOpen?<svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>} 
                    </div>
                </div>
            </ul>
            <ul className="select_ul" role="tablist">
                    {router.locales.map((locale)=>(
                        <li key={locale} onClick={()=>setIsOpen((prevState)=>!prevState)}  role="tab"> 
                            <Link href={router.asPath} locale={locale} >
                                <div className="option">
                                    <div className="icon">
                                        <Image src={`/flags/${locale}.svg`} layout="fixed" width="20" height="15" alt={`${locale} language`}></Image>
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
