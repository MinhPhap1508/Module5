import { getListCovid } from "./db"
export default function List() {
    return (
        <div>
            <table>
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
                        getListCovid().map((list) => (
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