import borgir from '../assets/borgir.svg'
import hashtag from '../assets/hashtag.svg'
import announcementChannel from '../assets/announcementsChannel.svg'
import chat from '../assets/chat.svg'
import search from '../assets/search.svg'
import person from '../assets/members.svg'
import loggedInUser from '../assets/UGContent/nrdietz.png'
import home from '../assets/home.svg'
import videos from '../assets/camera.svg'
import bookmarks from "../assets/bookmarks.svg"
import questions from '../assets/questionsChannel.svg'
import calendar from "../assets/calendar.svg"
import add from '../assets/add.svg'
import mkIsMyFriend from '../assets/UGContent/mkbhd.jpg'
import linuxExp from '../assets/UGContent/thelinuxexp.jpg'

export default () =>{

    return(

        <div className="sideBar">

            <div className="scrollableArea">

                <div className="emptyBox">
                        
                    <div className="sideBarSelection">
                            
                        <img src="https://cdn.discordapp.com/icons/860654329228296193/a_10589191ca3f7657a567d5b9b34bac63.gif?size=4096" className="sideBarButton"></img>
                    </div>
                </div>

                <div className="sideBarSelection">

                    <img src={home} className="sideBarButton"></img>
                    <div className="sideBarSelectionText">feed</div>
                </div>
                
                <div className="sideBarSelection">

                    <img src={videos} className="sideBarButton"></img>
                    <div className="sideBarSelectionText">videos</div>
                </div>

                <div className="sideBarSelection">

                    <img src={person} className="sideBarButton"></img>
                    <div className="sideBarSelectionText">groups</div>
                </div>
                
                <div className="sideBarSelection">

                    <img src={bookmarks} className="sideBarButton"></img>
                    <div className="sideBarSelectionText">bookmarks</div>
                </div>

                <div className="sideBarSelection">

                    <img src={questions} className="sideBarButton"></img>
                    <div className="sideBarSelectionText">questions</div>
                </div>

                <div className="sideBarSelection">

                    <img src={calendar} className="sideBarButton"></img>
                    <div className="sideBarSelectionText">events</div>
                </div>

                <div className="sideBarSelection">

                    <img src={add} className="sideBarButton"></img>
                    <div className="sideBarSelectionText">more</div>
                </div>
            </div>
        </div>
    )
}