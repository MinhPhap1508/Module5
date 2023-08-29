import axios from "axios";
export const getAll = async () => {
    try{
        const res = await axios.get("http://localhost:8080/contract");
        return(res.data);
    }catch(e){
        console.log(e);
    }
}
export const addContract = async (contract) => {
    try{
        const res = await axios.post("http://localhost:8080/contract",contract);
        return(res.data);
    }catch(e){
        console.log(e);
    }
}