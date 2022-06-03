import Body from './textMessage/body'
import Bottom from './textMessage/bottom'
import Top from './textMessage/top'

export default ({ userPFP, userName, timeStamp, role, messageBody, reactions }) =>{

    return(<div className="textMessage">

        <Top userPFP={userPFP} userName={userName} timeStamp={timeStamp} role={role}/>
        <Body body={messageBody}/>
        <Bottom reactions={reactions}/>
    </div>)
}