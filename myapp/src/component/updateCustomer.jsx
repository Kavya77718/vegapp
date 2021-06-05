import React, { Component } from 'react';
import CustomerService from '../services/customerService';

class UpdateCustomer extends Component {

    constructor(props){
        super(props)
        this.state = {
            customerId:this.props.match.params.customerId,
            Name:'',
            emailId:'',
            mobileNumber:''

        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeMobileHandler=this.changeMobileHandler.bind(this);
        this.updateCustomer=this.updateCustomer.bind(this);
        this.changeIdHandler=this.changeIdHandler.bind(this);
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.customerId).then((res) =>{
            let customer=res.data;
            this.setState({name:customer.name,
                emailId:customer.emailId,
                mobileNumber:customer.mobileNumber

            });
        });
    }

    updateCustomer = (e) => {
        e.preventDefault();
        let customer={name: this.state.name, emailId: this.state.emailId,mobileNumber: this.state.mobileNumber};
        console.log('customer => '+ JSON.stringify(customer));

        CustomerService.updateCustomer(customer,this.state.customerId).then((res) => {
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
                        <div className="caed col-md-6 offset-md-3 offset-md-3" >
                            <h3 className="text-center">Update Customer</h3>
                            <div className="card-body">
                                <form>
                                    {/*<h1>{this.props.match.params.customerId}</h1>*/}
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

                                    <button className="btn btn-success" onClick={this.updateCustomer}> Save</button>
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
 
export default UpdateCustomer;