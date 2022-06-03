export default ({ body }) =>{

    return(<div className="textMessageBody" dangerouslySetInnerHTML={{ __html: body}}></div>)
}