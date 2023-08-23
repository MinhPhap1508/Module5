import './App.css';
import './style.css';
import { Service } from './facility/service';
import { CreateService } from './facility/CreateService';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { EditService } from './facility/EditService';
import Header from './components/Header';
import { List } from './customers/List';
import { CreateCustomer } from './customers/CreateCustomer';
import { EditCustomer } from './customers/EditCustomer';
function App() {
  return (
    <Router>
     <Header/>
        <Routes>
        <Route path='/' element={<Service />} />
        <Route path='/edit-service' element={<EditService/>} />
        <Route path='/create-service' element={<CreateService/>} />
        <Route path='/list' element={<List/>}/>
        <Route path='/add-customer' element={<CreateCustomer />}/>
        <Route path='/edit-customer' element={<EditCustomer />}/>
        </Routes>
    
    </Router>
  );
}

export default App;
