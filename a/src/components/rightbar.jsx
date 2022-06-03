import '../styles/main.css'
import Nowhappening from './nowhappening'
import Share from './share'
import OnlineList from './onlineList'

export default () =>{

    return(

        <div className="members">

            <div className="scrollableArea">

                <div className='emptyBox'>

                    <div className="post">
                        
                        <Share></Share>
                    </div>
                </div>

                <Nowhappening></Nowhappening>
                <OnlineList></OnlineList>
            </div>
        </div>
    )
}