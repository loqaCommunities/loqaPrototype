import TopRole from "./top/topRole"

export default ({ userPFP, userName, timeStamp, role }) =>{

    return(<div className="textMessageTop">

        <img src={userPFP} className="posterPFP"/>
        <div className="posterName">{userName}</div>
        <TopRole color={role.color} name={role.name}/>
        <div class="spaceWaster"></div>
        <div className="timeStamp">{timeStamp}</div>
    </div>)
}