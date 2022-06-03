export default ({ color, name }) =>{

    return(<div className="topRole">

        <div className="topRoleColor" style={{backgroundColor: color, color: color}}>a</div>
        <div className="topRoleName">{name}</div>
    </div>)
}