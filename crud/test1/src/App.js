
import './App.css';

import "react-toastify/dist/ReactToastify.css";
import {Route, Routes} from 'react-router-dom'
import { Products } from './products/components/Products';
import { ToastContainer } from 'react-toastify';
import { EditProduct } from './products/components/EditProduct';
import { CreateProduct } from './products/components/CreateProduct';



function App() {
  return (
   <>
  <Routes>
    <Route path='/' element={<Products/>}/>
    <Route path='/edit/:id' element={<EditProduct/>}/>
    <Route path='/create' element={<CreateProduct/>}/>
    <Route path='/' element={<ToastContainer/>}/>
  </Routes>
   </>
  );  
}
export default App;
