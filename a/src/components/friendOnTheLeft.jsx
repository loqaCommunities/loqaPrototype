import {users} from '../dummyData'

export default ({UID}) =>{

    const user = users.filter(u => u.id === UID)[0]

    return(

        <div className="friend">

            <img src={require(`../${user.PFP}`)} className="friendImage"></img>
            <div className="friendText">{user.name}</div>
        </div>
    )
}