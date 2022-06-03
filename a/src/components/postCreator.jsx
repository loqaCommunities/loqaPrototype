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
import nrdietz from '../assets/UGContent/nrdietz.png'

export default () =>{

    return(

        <div className="post">

            <div className="postTop">

                <img className="posterPFP" src={nrdietz}></img>
                <input type="text" placeholder="title this post" className="postTitleInput"/>
            </div>
            <div className="postBody">

                <span className="postBodyInput" contentEditable="true" id="input"></span>
            </div>
            <div className="postBottom">

                <div className='shares'>

                    <img src={add} className="shareButton" id="addAttachments"></img>
                    <div className="sharesText">add attachments</div>
                </div>
                <div className='shares'>

                    <img src={hashtag} className="shareButton" id="addHashTags"></img>
                    <div className="sharesText">add tags</div>
                </div>
                <div className="spaceTaker">a</div>
                <button className="postButton" id="postButton">post</button>
            </div>
        </div>
    )
}