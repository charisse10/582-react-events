function Child(props) {
    return (
        <div className = {props.className ? props.className : "default-class"}>
            <h3>I am a child component</h3>
             {props.name ? <h3>NAME: {props.name}</h3> : <h3>No name passed</h3>}
             {props.obj ? (
             <h3>
               OBJECT: {props.obj.id} - {props.obj.name}
             </h3>
             ) : (
        <p>No object passed</p>
    )}
        </div>
);
}

export default Child;