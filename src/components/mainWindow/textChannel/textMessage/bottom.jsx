import Reaction from "./bottom/reaction"

export default ({ reactions }) =>{

    return(<div className="textMessageBottom">

        {reactions.map(r =>(

            <Reaction icon={r.img} amount={r.amount}/>
        ))}
    </div>)
}