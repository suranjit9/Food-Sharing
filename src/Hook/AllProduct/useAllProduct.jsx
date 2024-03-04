import { useEffect, useState } from "react";
import useAxious from "../BaseUrl/useAxious";


const useAllProduct = () => {
    const [allFood, setAllfood] = useState([]);
    const baseUrl = useAxious();
   
   useEffect(()=>{
    baseUrl.get(`/addFood`)
    .then(res => setAllfood(res.data))
   },[baseUrl])
    return allFood;
};

export default useAllProduct;