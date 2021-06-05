import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCustomer from './component/listCustomer';
import AddCustomer from './component/addCustomer';
import ViewCustomer from './component/viewCustomer';
import UpdateCustomer from './component/updateCustomer';



function App() {
  return (
    <div>
    <Router>
        
            <div className="container">
                <Switch> 
                      <Route path = "/" exact component = {ListCustomer}></Route>
                      <Route path = "/customer" component = {ListCustomer}></Route>
                      <Route path = "/add-customer" component = {AddCustomer}></Route>
                      <Route path ="/view-customers/:customerId" component ={ViewCustomer}></Route>
                      <Route path="/update-customers/:customerId" component = {UpdateCustomer}></Route>
                </Switch>
            </div>
         
    </Router>
</div>
  );
}

export default App;
