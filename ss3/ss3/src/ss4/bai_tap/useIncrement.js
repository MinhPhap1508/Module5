import { useState } from "react";
function useIncrement(addAmount){
    const [count, setCount] = useState(0);
    function increase(){
        const newValue = count + addAmount;
        setCount(newValue);
    }
    return[count, increase];
}
export default useIncrement;
