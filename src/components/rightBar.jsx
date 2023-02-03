import Channel from "./rightBar/channel"
import hashtag from '../assets/hashtag.svg'
import dead from '../assets/dead.png'

export default () =>{

    return(<div className="rightBar">

        <div className="scrollableArea">

            <div className="emptyBox"><Channel name={"sex"} img={dead}/></div>
            <Channel name={"rightBar"} img={hashtag}/>
        </div>
    </div>)
}