import './App.css';
import './style.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Header from './components/Header';
import { ListServices } from './facility/components/ListServices';
import { CreateService } from './facility/components/CreateService';
import { Customers } from './customers/components/Customers';
import { CreateCustomer } from './customers/components/CreateCustomer';
import { Contract } from './contract/components/Contract';
import { CreateContract } from './contract/components/CreateContract';
import { EditService } from './facility/components/EditService';
import { EditCustomer } from './customers/components/EditCustomer';
function App() {
  return (
    <Router>
     <Header/>
        <Routes>
        <Route path='/' element={<ListServices />} />
        <Route path='/edit-service/:id' element={<EditService/>} />
        <Route path='/create-service' element={<CreateService/>} />
        <Route path='/customers' element={<Customers/>}/>
        <Route path='/add-customer' element={<CreateCustomer />}/>
        <Route path='/edit-customer/:id' element={<EditCustomer />}/>
        <Route path='/contract' element={<Contract />}/>
        <Route path='/add-contract' element={<CreateContract/>}/>
        </Routes>
    
    </Router>
  );
}

export default App;
