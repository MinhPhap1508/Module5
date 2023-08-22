import useIncrement from "./useIncrement";
function Counter1(){
    let [count, increase] = useIncrement(1);
    return(
        <div>
            Count: {count}
            <div>
                <button onClick={increase}>Add 1</button>
            </div>
        </div>
    )
}
export default Counter1;