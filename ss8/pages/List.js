import axios from "axios"

// import { getListCovid } from "./db"
export default function List({data}) {
    return (
        <div>
            <h1>Vietnam's COVID-19 Information</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((list) => (
                            <tr key={list.id}>
                                <td>{list.date}</td>
                                <td>{list.confirmed}</td>
                                <td>{list.active}</td>
                                <td>{list.recovered}</td>
                                <td>{list.deaths}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export async function getStaticProps(){
    const res = await axios.get("http://localhost:8081/covid")
    const data = res.data;
    return{
        props: {
            data
        }
    }
}   