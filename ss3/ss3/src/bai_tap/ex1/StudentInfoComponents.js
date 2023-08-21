import { Component } from "react";

class StudentInfoComponents extends Component{
    constructor(){
        super();
        this.state = { 
            studentList: [
            {id: 1,
            name: 'Phap',
            age: 25,
            address: 'Hue'},
            {
                id: 2,
                name: 'Thanh',
                age: 20,
                address: 'Ha Noi',
            },
            {
                id: 3,
                name: 'Cuong',
                age: 35,
                address: 'Quang Nam'
            }
        ]
    }
}

 render() {
    return(
        <>
        <table border='1px'>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
        </tr>
        {this.state.studentList.map((element,index)=> {
            return <tr>
                <td key={index}>{element.id}</td>
                <td key={index}>{element.name}</td>
                <td key={index}>{element.age}</td>
                <td key={index}>{element.address}</td>
            </tr>
        })

        }
        </table>
        </>
    )
 }
}
export default StudentInfoComponents;