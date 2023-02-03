import Channel from "../../leftBar/channel"
import hashtag from '../../../assets/hashtag.svg'
import TextMessage from "./textMessage"
export default () =>{

    return(<div className="textChannel">

        <div className="scrollableArea">

            <div className="emptyBox"><Channel name={"sex"} img={hashtag}/></div>
            <TextMessage userPFP="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/cd_pirated.png" userName={"somebody"} role={{ color: "#ffffff", name: "amongos impostor"}} timeStamp="timestamp" messageBody="sex" reactions={[{img: hashtag, amount: 69}]}/>
        </div>
    </div>)
}