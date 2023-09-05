function Child(props) {

    function onClickHandler(e) {
        console.log(`clicked ${e.target}`)
    }

    return (
        <div className = {props.className ? props.className : "default-class"}>
            <h3>I am a child component</h3>
             {props.name ? (<h3 onClick={onClickHandler}>NAME: {props.name}</h3>) : (<h3>No name passed</h3>)}
             {props.obj ? (
                <>
             <h3 onClick={onClickHandler}>
               OBJECT: {props.obj.id} - {props.obj.name}
             </h3>
            <p>{props.obj.items}</p>
            </>
             ) : (
        <p>No object passed</p>
    )}
        </div>
);
}

export default Child;