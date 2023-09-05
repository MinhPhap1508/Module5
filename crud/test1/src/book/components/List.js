import { useEffect, useState } from 'react'
import * as bookService from '../service/BookServcie';
import { Link } from "react-router-dom";
import { Modal1 } from './Modal1';
import { ToastContainer, toast } from 'react-toastify';
import React from 'react';
export function List() {
    const [book, setBook] = useState([]);
    const [modal, setModal] = useState({
        show: false,
        data: null
    });
    const handleCloseModal = () => {
        setModal({
            show: false,
            data: null
        })
    }
    const handeDelete = async (id) => {
        await bookService.DeleteBook(id)
        await GetBook()
        handleCloseModal()
        toast("Delete Done")
    }
    const GetBook = async () => {
        const res = await bookService.GetAll();
        setBook(res);
    }
    useEffect(() => {
        GetBook();
    }, []);
    // const removeBook = async (id) => {
    //     await bookService.DeleteBook(id);
    //     GetBook();
    // }
    return (
        <>
            <h1>Danh sach</h1>
            <Link type='button' className='btn btn-primary' to='/create'>Thêm mới</Link>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Tên sách</th>
                        <th>Giá</th>
                        <th>Tác giả</th>
                        <th>Thể loại</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        book.map((b) => (
                            <tr key={b.id}>
                                <td>{b.name}</td>
                                <td>{b.price}</td>
                                <td>{b.author}</td>
                                <td>{b.category.name}</td>
                                <td>
                                    <button type='button' className='btn btn-danger' onClick={() => setModal({
                                        show: true,
                                        data: b
                                    })}>Xóa</button>
                                </td>
                                <td>
                                    <Link type='button' className='btn btn-warning' to={`/edit/${b.id}`}>Edit</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
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
            {
                modal.show && (

                    <Modal1
                        title={"okoko"}
                        msg={`Do you want delete:${modal.data.name}?`}
                        onClose={handleCloseModal}
                        onConfirm={() => { handeDelete(modal.data.id) }}
                    >
                    </Modal1>

                )
            }
        </>
    )
}