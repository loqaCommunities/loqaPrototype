import LeftBar from "./leftBar"
import RightBar from "./rightBar"
import TextChannel from "./mainWindow/textChannel/textChannel"

export default () =>{

    return(<div className="windowContents">

        <LeftBar/> {/* channels */}
        <TextChannel/>
        <RightBar/> {/* members */}
    </div>)
}