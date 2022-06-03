import Channel from "../../leftBar/channel"
import hashtag from '../../../assets/hashtag.svg'
import TextMessage from "./textMessage"
export default () =>{

    return(<div className="textChannel">

        <div className="scrollableArea">

            <div className="emptyBox"><Channel name={"sex"} img={hashtag}/></div>
            <TextMessage userPFP="https://cdn.discordapp.com/icons/981102703524597770/8205cfb618f34149c9f49860abad416a.png?size=4096" userName={"somebody"} role={{ color: "#ffffff", name: "amongos impostor"}} timeStamp="someday" messageBody="sex" reactions={[{img: hashtag, amount: 69}, {img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69},{img: hashtag, amount: 69}]}/>
        </div>
    </div>)
}