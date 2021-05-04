import {createContext,Component,useContext} from 'react';

export const SideMenuContext=createContext();

export class UseSideMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:false,
            smallDevice:false,
            isOpenModal:false
        }
        this.handleSideMenu=this.handleSideMenu.bind(this);
        this.handleBuyingModal=this.handleBuyingModal.bind(this);
    }
    componentDidMount(){
        window.addEventListener("resize",this.resize.bind(this));
        this.setState({
            smallDevice:this.props.smallDevice
        })
    }
    resize(){
        let smallDevices=(window.innerWidth<=768);
        console.log(smallDevices)
        if(smallDevices !== this.state.smallDevice){
            this.setState({
                smallDevice:smallDevices
            })
        }
        
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }
    handleSideMenu(){
        this.setState((prevState)=>({
            isOpen:!prevState.isOpen
        }))
    }
    handleBuyingModal(){
        this.setState((prevState)=>({
            isOpenModal:!prevState.isOpenModal
        }))
    }
   
    render(){
        const sharedState={
            isOpen:this.state.isOpen,
            handleSideMenu:this.handleSideMenu,
            smallDevice:this.state.smallDevice,
            isOpenModal:this.state.isOpenModal,
            handleBuyingModal:this.handleBuyingModal
        }
       
        return(
            <SideMenuContext.Provider value={sharedState}>
                {this.props.children}
            </SideMenuContext.Provider>
        )
    }
}
export function useSideMenu(){
    return useContext(SideMenuContext)
}