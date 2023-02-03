export default ({ img, name }) =>{

    if(name.length < 25){

        return(<div className="channel">

            <img src={img} className="channelImage"/>
            <div className="channelName">{name}</div>
        </div>)
    }else{

        return(<div className="channel">

            <img src={img} className="channelImage"/>
            <marquee direction="right" className="channelName">{name}</marquee>
        </div>)
    }   
}