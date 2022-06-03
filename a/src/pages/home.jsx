import "../styles/main.css"
import TopBar from "../components/topbar"
import SideBar from "../components/sidebar"
import LeftBar from "../components/leftbar"
import MainWindow from "../components/mainwindow"
import Rightbar from "../components/rightbar"

const App = () =>{

    return(

        <div>

            <TopBar></TopBar>
            <div class="windowBody">

                <SideBar></SideBar>                
                <div class="windowContents">

                    <LeftBar></LeftBar>
                    <MainWindow></MainWindow>
                    <Rightbar></Rightbar>
                </div>
            </div>
        </div>
    )
}
export default App