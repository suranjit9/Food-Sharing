import { useContext, useEffect, useState } from "react";
import useAxious from "../../Hook/BaseUrl/useAxious";
import ProductDesign from "../AllProduct/ProductDesing";
import { myContex } from "../../MyProvider/MyProvider";


const FetherFood = () => {
    const { value} = useContext(myContex);
    const baseUrl = useAxious();
    const [fether, setFether]= useState([]);
    // console.log(fether)
    useEffect(()=>{
        baseUrl.get(`/addFood/filter?search=${value}`) 
        .then(res=>setFether(res.data))
    },[value]);
    console.log(value)
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 w-[80%] m-auto ">
            {
               fether.map(food => <ProductDesign
               key={food._id}
               food={food}
               ></ProductDesign>) 
            }
        </div>
    );
};

export default FetherFood;