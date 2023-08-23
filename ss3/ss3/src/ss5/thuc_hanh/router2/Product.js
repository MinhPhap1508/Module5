import { useParams } from "react-router-dom";
export function Product(){
        let { categoryId } =useParams();
        return(
            <div>
                <h3>ID Selected {categoryId}</h3>
            </div>
        )
}