import axios from "axios";

export const getAll = async (page, name) => {
    try{
        const res = await axios.get(`http://localhost:8080/product?page=${page}&limit=2&name_like=${name}`)
        return res
    }catch(e){
        console.log(e);
    }
}
export const getAllType = async () => {
    try{
        const res = await axios.get('http://localhost:8080/product/type')
        return res.data
    }catch(e){
        console.log(e);
    }
}
export const getProductById = async (id) => {
    try{
        const res = await axios.get('http://localhost:8080/clothing/'+id)
        return res.data
    }catch(e){
        console.log(e);
    }
}
export const getTypeById = async (id) => {
    try{
        const res = await axios.get('http://localhost:8080/product/type/'+id)
        console.log(res);
        return res.data
    }catch(e){
        console.log(e);
    }
}
export const editProduct = async (product) => {
    try{
        // product.type = await getTypeById(product.type)
       await axios.put('http://localhost:8080/product/'+product.id, product)
    
    }catch(e){
        console.log(e);
    }
}
export const addProduct =async (product) => {
    try{
        // product.type = await getTypeById(product.type)
      await axios.post('http://localhost:8080/product', product)
    }catch(e){
        console.log(e);
    }
}
export const deleteProduct = async (id) => {
    try{
        await axios.delete('http://localhost:8080/product/'+id)
    }catch(e){
        console.log(e);
    }
}