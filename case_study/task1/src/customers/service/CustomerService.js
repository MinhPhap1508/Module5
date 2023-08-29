import axios from "axios";
export const getAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/customers');
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export const addCustomer = async (customer) => {
    try {
        const result = await axios.post('http://localhost:8080/customers', customer);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export const editCustomer = async (id, customer) => {
    try{
        await axios.put('http://localhost:8080/customers'+id,customer)
    }catch(e){
        console.log(e);
    }
}
export const getById = async (id) => {
    try{
        const res = await axios.get('http://localhost:8080/customers/'+id);
        return res.data;
    }catch(e){
        console.log(e);
    }
}
export const deleteCustomer = async (id) => {
    try{
        const res = await axios.delete('http://localhost:8080/customers/'+id);
        return res.data;
    }catch(e){
        console.log(e);
    }
}