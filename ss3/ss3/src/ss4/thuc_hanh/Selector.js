import { useState, useEffect } from "react";
function Selector() {
    let [selector, setSelector] = useState(0);
    let [valueSelector, setValueSelector] = useState("");
    const choice = e => {
        setSelector(e.target.value);
    };
    useEffect(() => {
        switch (selector) {
            case "0":
                setValueSelector("Java");
                break;
            case "1":
                setValueSelector("Angular");
                break;
            case "2":
                setValueSelector("Java Script");
                break;
            case "3":
                setValueSelector("PHP");
                break;
            default:
        }
    }, [selector]);
    return(
        <div>
            Khóa học:
            <select
            onChange={e =>{
                choice(e);
            }
            }>
                <option value={0}>Java</option>
                <option value={1}>Angular</option>
                <option value={2}>Java Script</option>
                <option value={3}>PHP</option>
            </select>
            <h2>Your Selected: {valueSelector}</h2>
        </div>
    );
}
export default Selector;