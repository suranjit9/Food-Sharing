import { useEffect, useState } from "react";
import useAxious from "../BaseUrl/useAxious";


const useAllProduct = () => {
    const [allFood, setAllfood] = useState([]);
    const baseUrl = useAxious();
   
    useEffect(() => {
        baseUrl.get(`/addFood?sort=${asc ? "asc" : "dsc"}&search=${search}`)
            .then(res => setAllfood(res.data))
    }, [baseUrl, asc, search]);
    return allFood;
};

export default useAllProduct;