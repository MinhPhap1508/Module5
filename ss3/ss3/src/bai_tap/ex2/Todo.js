import { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            item: event
        })
    }
    handleAddItem = () => {
        if (this.state.item !== "") {
            this.setState((prev) => ({
                list: [...prev.list, prev.item],
                item: "",
            }))
        }
    }
    render() {
        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <h1>Todo List</h1>
                    <input value={this.state.item} onChange={(event) => this.handleChange(event.target.value)}></input>
                    <button onClick={() => this.handleAddItem()}>Add</button>
                    <ul>
                        {this.state.list.map((e, index) => {
                            return <li key={index}>{e}</li>
                        }
                        )}
                    </ul>
                </div>
            </>
        )
    }
}
export default Todo;