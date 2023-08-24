export function Contract(){
    return(
        <>
  <h1 style={{ textAlign: "center" }}>Contract List</h1>
  <table className="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>Some contract</th>
        <th>Contract start day</th>
        <th>Contract end day</th>
        <th>Advance deposit amount</th>
        <th>Total payment amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Vl-001</td>
        <td>25-07-2023</td>
        <td>31-12-2023</td>
        <td>10000</td>
        <td>90000</td>
      </tr>
      <tr>
        <td>2</td>
        <td>BL-004</td>
        <td>12-01-2023</td>
        <td>24-11-2023</td>
        <td>99999</td>
        <td>1243522</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Vip-002</td>
        <td>20-12-2001</td>
        <td>06-05-2024</td>
        <td>1508</td>
        <td>2012</td>
      </tr>
    </tbody>
  </table>
</>

    )
}