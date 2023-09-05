import Child from "./Child";
const testArray = ["one", "two", "three"];
const testArrayOfObjects = [
    { id: 1, name: "one", item: [1, 1, 1] },
    { id: 2, name: "two", item: [2, 2, 2] },
    { id: 3, name: "three", item: [3, 3, 3]},


]

function Parent() {
    return (
        <div>
            <h2>Parent Component</h2>
            <Child className="props-class"/>
            {testArray.map((item, index) => {
                return <Child key={index} name={item} />;
            })}

            {testArrayOfObjects.map ((item) =>
                {return <Child key = {item.id} obj = {item}/>
            })}
        </div>  
    );
}

export default Parent;