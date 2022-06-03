import SideBarSelection from "./sideBar/sideBarSelection"
import homeIcon from '../assets/home.svg'
import '../styles/main.css'

export default () =>{

    return(<div className="sideBar">

        <div className="scrollableArea">

            <div className="emptyBox">
                        
                <div className="sideBarSelection">
                            
                    <img src="https://cdn.discordapp.com/icons/981102703524597770/8205cfb618f34149c9f49860abad416a.png?size=4096" className="sideBarButton"></img>
                </div>
            </div>
            <SideBarSelection name="home" icon="https://cdn.discordapp.com/icons/981102703524597770/8205cfb618f34149c9f49860abad416a.png?size=4096"/>
            <SideBarSelection name="home" icon="https://cdn.discordapp.com/icons/981102703524597770/8205cfb618f34149c9f49860abad416a.png?size=4096"/>
            <SideBarSelection name="home" icon="https://cdn.discordapp.com/icons/981102703524597770/8205cfb618f34149c9f49860abad416a.png?size=4096"/>
            <SideBarSelection name="home" icon="https://cdn.discordapp.com/icons/981102703524597770/8205cfb618f34149c9f49860abad416a.png?size=4096"/>
            <SideBarSelection name="home" icon="https://cdn.discordapp.com/icons/981102703524597770/8205cfb618f34149c9f49860abad416a.png?size=4096"/>
        </div>
    </div>)
}