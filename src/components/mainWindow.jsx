import LeftBar from "./leftBar"
import TextChannel from "./mainWindow/textChannel/textChannel"

export default () =>{

    return(<div className="windowContents">

        <LeftBar/>
        <TextChannel/>
        <LeftBar/>
    </div>)
}