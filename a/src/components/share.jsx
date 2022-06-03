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
import shareImg from '../assets/share.svg'

export default ({ shares }) =>{

    return(

        <div className="shares">

            <img src={shareImg} className="shareButton"></img>
            <div className="sharesNumber">{shares}</div>
            <div className="sharesText">shares</div>
        </div>
    )
}