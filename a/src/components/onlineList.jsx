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
import OnlineFriend from './onlineFriend'
import {users} from '../dummyData'

export default () =>{

    var onlinePeople = []

    users.map((u) =>{

        if(u.online){

            onlinePeople.push(u)
        }
    })
    return (

        <div className="nowHappening" id="nowOnline">
            
            <div className="onlineText">{onlinePeople.length} friends are online</div>
            {users.map((u) =>(

                <OnlineFriend uID={u.id}/>
            ))}
        </div>
    )
}