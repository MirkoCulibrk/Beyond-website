

import {IconContext} from 'react-icons';
import {FaFacebookF,FaInstagram} from 'react-icons/fa';
const SocialIcon = ({type}) => {
    return (
        <>
        <div className={`socialicon ${type}`}>
            <a href="/" aria-label="Facebook" rel="noopener">
            <IconContext.Provider value={{ className: 'sidebar-icons' }}>
                <FaFacebookF></FaFacebookF>
            </IconContext.Provider>
            </a>
        </div>
        <div className={`socialicon ${type}`} >
            <a href="https://instagram.com/whitening_serbia?igshid=1ixn9ngw3u6yw" target="_blank" aria-label="Instagram" rel="noopener">
            <IconContext.Provider value={{ className: 'sidebar-icons' }}>
                <FaInstagram></FaInstagram>
            </IconContext.Provider>
            </a>
        </div>
    </>
    )
}

export default SocialIcon
