import { useEffect, useState } from "react";
import useAllProduct from "../../Hook/AllProduct/useAllProduct";
import PageTitle from "../../ShearFile/PageTitle";
import ProductDesing from "./ProductDesing";
import useAxious from "../../Hook/BaseUrl/useAxious";


const AllProduct = () => {
    // const allFood = useAllProduct([asc, dsc]);
    const [allFood, setallFood] = useState([]);
    const baseUrl = useAxious()
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');

    // console.log(search);
    const title = "Our Available Foods";
    useEffect(() => {
        baseUrl.get(`/addFood?sort=${asc ? "asc" : "dsc"}&search=${search}`)
            .then(res => setallFood(res.data))
    }, [baseUrl, asc, search]);

    // const handalsearch = (e) =>{
    //    e.preventDefault();
    //     const text = e.target.search.value;
    //     setSearch(text);
    // onChange={(e)=>setSearch(e.target.value)}
    // }
    return (
        <div className="space-y-4">
            <PageTitle title={title}></PageTitle>
            <div className="flex justify-between gap-5 pl-4 pr-4 w-[80%] m-auto ">
                <div className=" ">
                    <button className="btn btn-xl" onClick={() => setAsc(!asc)}>{asc ? "QTY: High to Low" : "QTY: Low to High"}</button>
                </div>
                <div >
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 w-[80%] m-auto ">
                {
                    allFood.map(food => <ProductDesing key={food._id} food={food}></ProductDesing>)
                }
            </div>
        </div>
    );
};

export default AllProduct;