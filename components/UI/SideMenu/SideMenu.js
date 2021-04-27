
import {useSideMenu} from '../../../context/useSideMenu';
import { useMediaQuery } from 'react-responsive'
const SideMenu = ({type}) => {
   const {handleSideMenu}=useSideMenu();
   const isSmallDevice=useMediaQuery({
       query:'max-device-width: 768px'
   })
    const  handlerender=()=>{
       let render;
       if(type=='open'){
           render=(
            <span className="menu-container" onClick={handleSideMenu}>
                <span className="menu-container--sideline top"></span>
                <span className="menu-container--sideline middle"></span>
                <span className="menu-container--sideline bottom"></span>
            </span>
           )
       }else if(type=='close'){
        render=(
            <span className="menu-container" onClick={handleSideMenu}>
                <span className="menu-container--sideline first"></span>
                <span className="menu-container--sideline second"></span>
            </span>
           )
       }
       return render;
   }
    return (
        <div className="menu">
            <a className="menu--background">
                {handlerender()}
            </a>
        </div>
    )
}

export default SideMenu
