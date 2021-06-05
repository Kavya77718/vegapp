import React, { Component } from 'react'
import CustomerService from '../services/customerService'
class ListCustomer extends Component {
    constructor(props) {
        super(props)

      this.state = {
                customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.viewCustomer = this.viewCustomer.bind(this);
        this.updateCustomer=this.updateCustomer.bind(this);
    }

    componentDidMount(){
        CustomerService.getCustomer().then((res)=>{
            this.setState({customers: res.data});
        });     
    }

    addCustomer(){
        this.props.history.push('/add-customer');
    }

    viewCustomer (customerId){
        this.props.history.push(`/view-customers/${customerId}`);
    }

    updateCustomer(customerId){
        this.props.history.push(`/update-customers/${customerId}`);
    }

    deleteCustomer(customerId){
        CustomerService.deleteCustomer(customerId).then(res =>{
            this.setState({customers: this.state.customers.filter(customer => customer.customerId !== customerId)});
        });
    }

     render() { 
        return (
            <div>
                 <h2 className="text-center">Customers List</h2>
                 <div className = "row">
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCustomer} style={{marginBottom:"10px", marginLeft:"13px"}}> Add Customer</button>
                 </div>
                 <br></br>
                     <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Customer Name</th>
                                    <th> Customer Mobile Number</th>
                                    <th> Customer Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customer => 
                                        <tr key = {customer.customerId}>
                                             <td> {customer.name} </td>   
                                             <td> {customer.mobileNumber}</td>
                                             <td> {customer.emailId}</td>
                                             <td>
                                            <button style={{marginLeft:"10px"}} onClick = { () => this.viewCustomer(customer.customerId)} className="btn btn-primary">View</button>
                                            <button  style={{marginLeft:"10px", marginRight:"10px"}} onClick = { () => this.updateCustomer(customer.customerId)} className="btn btn-warning">Update</button>
                                            <button onClick = { () => this.deleteCustomer(customer.customerId)} className="btn btn-danger">Delete</button>
                                              </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}
 
export default ListCustomer;