import { useContext, useEffect, useState } from "react";
import useAxious from "../../Hook/BaseUrl/useAxious";
import { authContext } from "../../AuthProvider/AuthProvider";
import { flexRender, useReactTable } from "@tanstack/react-table";


const ManageFoods = () => {
    const baseUrl = useAxious();
    const { user } = useContext(authContext);
    const [myFood, setMyFood] = useState([]);
    console.log(myFood);
    useEffect(() => {
        baseUrl.get(`/ManageFoods?email=${user?.email}`)
            .then(res => setMyFood(res.data))
    }, [baseUrl, user?.email]);

    

    
    

    return (
           <div></div>
    );
};

export default ManageFoods;