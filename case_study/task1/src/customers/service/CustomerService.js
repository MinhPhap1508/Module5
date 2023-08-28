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