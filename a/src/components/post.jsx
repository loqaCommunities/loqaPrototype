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
import exampleAtt from '../assets/UGContent/linuxexp0.webp'
import Likes from './like'
import Tag from './tag'
import { users } from '../dummyData'
import { useState } from 'react'
import like from '../assets/voteChannel.svg'
import shareImg from '../assets/share.svg'

export default ({post}) =>{

    const content = post.content.replace('<script', '>script')
    const user = users.filter(u => u.id === post.posterID)[0]
    const [likes, setLikes] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const shares = post.shares

    const likeHandler = () =>{

        if(isLiked){

            setLikes(likes - 1)
            setIsLiked(false)
        }else{

            setLikes(likes + 1)
            setIsLiked(true)
        }
    }

    const checkPlural = (text, amount) =>{

        if(amount > 1) return `${text}s`
        else return text
    }

    return(

        <div className="post">

            <div className="postTop">

                <img className="posterPFP" src={require(`../${user.PFP}`)}></img>
                <div className="posterName">{user.name}</div>
                <div className='postTitle'>{post.title}</div>
                <div className="tags">

                    {post.tags?.map((tag) =>(

                        <Tag tag={tag}/>
                    ))}
                </div>
                <div className="timestamp">{post.date}</div>
            </div>
            <div className="postBody">

                <div className="postBodyText" id="t" dangerouslySetInnerHTML={{__html: content}}/>
                
                <div className="postAttachments">

                </div>
            </div>
            <div className="postBottom">

                <div className="shares">

                    <img src={shareImg} className="shareButton" onClick={likeHandler}></img>
                    <div className="sharesNumber">{shares}</div>
                    <div className="sharesText">{checkPlural('share', shares)}</div>
                </div>
                <div className="shares">

                    <img src={like} className="shareButton" onClick={likeHandler}></img>
                    <div className="sharesNumber">{likes}</div>
                    <div className="sharesText">{checkPlural('like', likes)}</div>
                </div>
            </div>
        </div>
    )
}