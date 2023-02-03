import Channel from "./leftBar/channel"
import hashtag from '../assets/hashtag.svg'

export default () =>{

    return(<div className="leftBar">

        <div className="scrollableArea">

            <div className="emptyBox"><Channel name={"sex"} img={hashtag}/></div>
            <Channel name={"leftBar"} img={hashtag}/>
        </div>
    </div>)
}