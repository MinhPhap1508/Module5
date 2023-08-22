import useIncrement from "./useIncrement";
function Counter2(){
    let [count, increase] = useIncrement(2);
    return(
        <div>
            Count: {count}
            <div>
            <button onClick={increase}>Add 2</button>
            </div>
        </div>
    )
}
export default Counter2;