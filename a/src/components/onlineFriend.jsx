import {users} from '../dummyData'

export default ({ uID }) =>{

    const user = users.filter(u => u.id === uID)[0]

    if(user.online){

        return(

            <div className="onlinePerson">
    
                <img className="onlinePFP" src={require(`../${user.PFP}`)}></img>
                <div className='onlinePersonName'>{user.name}</div>
            </div>
        )
    }else{

        return
    }
}