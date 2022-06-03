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
import {users} from '../dummyData'
import FriendOnTheLeft from './friendOnTheLeft'

export default () =>{

    return(

        <div className="channels">

            <div className="scrollableArea">

                <div className="emptyBoxChannels">

                    <div className="channel">a mongos</div>
                    <div className="channel">a mongos</div>
                </div>

                <div className="channelCategory">

                    <div className="channelCategoryText">friends</div>
                    <img src={add} className="addChannelButton"></img>
                </div>

                <div className="sideBarFriendsList">

                    {users.map(u =>(

                        <FriendOnTheLeft UID={u.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}