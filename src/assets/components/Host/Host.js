export default function Host(props) {
	return (
        <aside className="Host-container">
            <div className="Host-name">{props.HostName}</div>
            <div className="Host-pic">
                <img src={props.HostPic} alt={props.id}/>
            </div>
        </aside>
    );
}
