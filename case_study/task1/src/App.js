import './App.css';
import './style.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { EditService } from './facility/EditService';
import Header from './components/Header';
import { EditCustomer } from './customers/EditCustomer';
import { Contract } from './contract/Contract';
import { CreateContract } from './contract/CreateContract';
import { ListServices } from './facility/components/ListServices';
import { CreateService } from './facility/components/CreateService';
import { Customers } from './customers/components/Customers';
import { CreateCustomer } from './customers/components/CreateCustomer';
function App() {
  return (
    <Router>
     <Header/>
        <Routes>
        <Route path='/' element={<ListServices />} />
        <Route path='/edit-service' element={<EditService/>} />
        <Route path='/create-service' element={<CreateService/>} />
        <Route path='/list' element={<Customers/>}/>
        <Route path='/add-customer' element={<CreateCustomer />}/>
        <Route path='/edit-customer' element={<EditCustomer />}/>
        <Route path='/contract' element={<Contract />}/>
        <Route path='/add-contract' element={<CreateContract/>}/>
        </Routes>
    
    </Router>
  );
}

export default App;
