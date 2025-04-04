import './style.css'

function Message(props) {
    const today = new Date();
    let amjDate = today.toISOString().substring(0,10).replace(/-/g,'/');

    return <div>
        {(props.titre) && <h1 style={ {backgroundColor:'black',color:'white'} }>{props.titre}</h1>}
        <p className="brushing">{props.children}</p>
        {(props.date) && <div className="date-info">{ props.date=='jma' ? today.toLocaleDateString() : amjDate}</div>}
    </div>
}

export default Message