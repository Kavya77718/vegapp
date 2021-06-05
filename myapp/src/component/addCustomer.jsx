import React, { Component } from 'react';
import CustomerService from '../services/customerService';
class AddCustomer extends Component {
    constructor(props){
        super(props)
        this.state = {
            customerId:'',
            name:'',
            emailId:'',
            mobileNumber:''

        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeMobileHandler=this.changeMobileHandler.bind(this);
        this.saveCustomer=this.saveCustomer.bind(this);
        this.changeIdHandler=this.changeIdHandler.bind(this);
    }

    saveCustomer = (e) => {
        e.preventDefault();
        let customer={customerId:this.state.customerId,name: this.state.name, emailId: this.state.emailId,mobileNumber: this.state.mobileNumber};
        console.log('customer => '+ JSON.stringify(customer));

        CustomerService.AddCustomer(customer).then(res => {
            this.props.history.push(`/customer`);
        });

    }

    changeIdHandler=(event) =>{
        this.setState({customerId: event.target.value})
    }

    changeNameHandler=(event) =>{
        this.setState({name: event.target.value})
    }

    changeEmailHandler=(event) =>{
        this.setState({emailId: event.target.value})
    }

    changeMobileHandler=(event) =>{
        this.setState({mobileNumber: event.target.value})
    }

    cancel(){
        this.props.history.push('/customer');
    }



    render() { 
        return (  
            <div>
                <div className="container">
                    <div className="row">
                        <div className="caed col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Customer</h3><br></br>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                        <label>CustomerId:</label>
                                        <input placeholder="Id" name="CustomerId" className="form-control" value={this.state.customerId} onChange={this.changeIdHandler}/>
                                </div>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input placeholder="name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email" name="Email" className="form-control" value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile Number:</label>
                                        <input placeholder="Mobile Number" name="Mobile" className="form-control" value={this.state.mobileNumber} onChange={this.changeMobileHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveCustomer}> Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                                </form>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
 
export default AddCustomer;