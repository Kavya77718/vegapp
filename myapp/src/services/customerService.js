import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/customer";

class CustomerService{

   async getCustomer(){
        return await axios.get(CUSTOMER_API_BASE_URL);
    }

    async AddCustomer(customer){
        return await axios.post(CUSTOMER_API_BASE_URL,customer);
      }

      async getCustomerById(customerId){
        return await axios.get(CUSTOMER_API_BASE_URL + '/' +customerId);
      }

      async updateCustomer(customer,customerId){
        return await axios.put(CUSTOMER_API_BASE_URL + '/' + customerId,customer);
      }

      async deleteCustomer(customerId){
        return await axios.delete(CUSTOMER_API_BASE_URL + '/' + customerId)

      }

}
export default new CustomerService()