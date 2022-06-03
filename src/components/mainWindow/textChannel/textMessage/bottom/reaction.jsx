export default ({ amount, icon }) =>{

    return(<div className="reaction">

        <img className="reactionIcon" src={icon}/>
        <div className="reactionAmount">{amount}</div>
    </div>)
}