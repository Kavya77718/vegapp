import React, { Component } from 'react';
import CustomerService from '../services/customerService';


class ViewCustomer extends Component {
    constructor(props){
        super(props)
        this.state={
            customerId: this.props.match.params.customerId,
            customer:{}
        }
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.customerId).then( res =>{
            this.setState({customer: res.data});
        })
    }
    render() { 
        return ( 
            <div className="card col-md-6 offset-md-3" style={{marginTop:"10px", marginBottom:"10px"}}>
                <h3 className ="text-center"> View Customer Details</h3>
                <div className="card bg-primary text-white" style={{marginBottom:"10px"}}>
                <div className ="card-body" style={{marginBottom:"10px"}}>
                <h1>{this.props.match.params.customerId}</h1>
                    <div className ="row">
                        <label><b>Customer Name: </b></label>
                        <div>{this.state.customer.name}</div>
                    </div>
                
                    <div className ="row">
                        <label><b>Customer emailId: </b></label>
                        <div>{this.state.customer.emailId}</div>
                    </div>
                    <div className ="row">
                        <label><b>Customer Mobile No: </b></label>
                        <div>{this.state.customer.mobileNumber}</div>
                    </div>
                        
                </div>

                </div>
            </div>
         )
    }
}

export default ViewCustomer;