import borgir from '../assets/borgir.svg'
import hashtag from '../assets/hashtag.svg'
import announcementChannel from '../assets/announcementsChannel.svg'
import chat from '../assets/chat.svg'
import search from '../assets/search.svg'
import person from '../assets/members.svg'
import loggedInUser from '../assets/UGContent/nrdietz.png'
import '../styles/main.css'
import Share from './share'
import PostCreator from './postCreator'
import nrdietz from '../assets/UGContent/nrdietz.png'
import Post from './post'
import cake from '../assets/cake.svg'

export default () =>{

    return (

        <div className="nowHappening">
            
            <div className="NHTop">

                <img src={cake} className="NHIcon"></img>
                <div className="NHTitle"><strong>my cock</strong> and <b>3 other people</b> have birthday!</div>
            </div>
        </div>
    )
}