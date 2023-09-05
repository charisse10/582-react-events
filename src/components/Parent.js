import Child from "./Child";
const testArray = ["one", "two", "three"];
const testArrayOfObjects = [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
    

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