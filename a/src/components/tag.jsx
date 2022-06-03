import hashtag from "../assets/hashtag.svg"
import '../styles/main.css'

export default ({tag}) =>{

    return(

        <div className="tag">

            <img src={hashtag} className="tagImage"></img>
            <div className="tagText">{tag}</div>
        </div>
    )
}