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
import { posts } from '../dummyData'

export default () =>{
    
    return(

        <div className="textArea">

            <div className='scrollableArea'>

                <div className='emptyBox'>

                    <div className="post">
                        
                        <Share></Share>
                    </div>
                </div>

                <PostCreator></PostCreator>
                {posts?.map((post) =>(

                    <Post post={post} key={post.id}/>
                ))} 
            </div>
        </div>
    )
}