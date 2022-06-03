import '../../styles/main.css'
import IconButton from '../iconButton'

export default ({ name, icon }) =>{

    return(<div className="sideBarSelection">

        <div className='sideBarButton'><IconButton img={icon}/></div>
    </div>)
}