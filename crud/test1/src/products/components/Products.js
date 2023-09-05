import { useEffect, useState } from 'react'
import { deleteProduct, getAll } from '../service/productService';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
export function Products() {
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(0);
    const [search, setSeaerch] = useState("");
    const [totalPage, setTotalPage] = useState();
    const GetAll = async () => {
        const res = await getAll(page, search);
        setTotalPage(res.data.totalPages)
        setProduct(res.data.content);
    }
    const removeProduct = async (id) => {
        await deleteProduct(id);
        await getAll();
    }
    const nextPage = () =>{
        if(page <totalPage) {
            setPage((prev) => prev +1)
        }
    }
    const previosPage = () => {
        if (page > 0) {
          setPage((prev) => prev - 1)
    
        }
      }
    useEffect(() => {
        GetAll();
    }, [page, search,product])
    const searchName = () => {
        const search = document.getElementById("search").value;
        setSeaerch(search);
        setPage(1);
      }
      if(product === undefined){
        return null
      }
    return (
        <>
        <h1> Clothing</h1>
        <Link className='btn' to='/create'>Add</Link>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Ngày nhập</th>
                        <th>Số lượng</th>
                        <th>Loại sản phẩm</th>
                        <th>Cập nhật</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((p) => (
                            <tr key={p.id}>
                                <td>{p.code}</td>
                                <td>{p.name}</td>
                                <td>{p.date}</td>
                                <td>{p.quantity}</td>
                                <td>{p.type.name}</td>
                                <td>
                                    <Link className='btn btn-warning' to={`/edit/${p.id}`}>Edit</Link>
                                </td>
                                <td>
                                    <button type='button' onClick={() => {removeProduct(p.id)}}>Xóa</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link" onClick={() => (previosPage())} style={{ color: "black" }}>
                Previous
              </button>
            </li>
            <li className="page-item">
              <span className="page-link" href="#" style={{ color: "black" }}>
                {page+1}/{totalPage}
              </span>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={() => nextPage()
              } href="#" style={{ color: "black" }}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}