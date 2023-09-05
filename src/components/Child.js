function Child(props) {
    return (
        <div>
            <h3>I am a child component</h3>
             {props.name ? <h3>{props.name}</h3> : <h3>No name passed</h3>}
        </div>
)}

export default Child;