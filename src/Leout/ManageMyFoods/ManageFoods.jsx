import { useContext, useEffect, useState } from "react";
import useAxious from "../../Hook/BaseUrl/useAxious";
import { authContext } from "../../AuthProvider/AuthProvider";
import { flexRender, useReactTable } from "@tanstack/react-table";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";


const ManageFoods = () => {
    const baseUrl = useAxious();
    const { user } = useContext(authContext);
    const [userEmail, setuserEmail] = useState([]);
    const [myFood, setMyFood] = useState([]);
    const [filterdata, setFilterdata] = useState([]);
    const [search, setSearch] = useState('');
    const userfilt = userEmail[0];
    console.log(myFood);
    useEffect(() => {
        baseUrl.get(`/user?email=${user?.email}`)
            .then(res => setuserEmail(res.data))
    }, [baseUrl, user?.email])

    const coustomerEmail = userfilt?.email || user?.email;
    useEffect(() => {
        baseUrl.get(`/ManageFoods?email=${coustomerEmail}`)
            .then(res => {
                setMyFood(res.data);
                setFilterdata(res.data)
            })
    }, [baseUrl, coustomerEmail]);

    const colamm = [
        {
            name: 'Food Img',
            selector: (row) => <img src={row.FoodImage} width={50} height={50} alt={row.FoodImage} />
        },
        {
            name: 'Food Name',
            selector: (row) => row.foodName,
            sortable: true,
        },
        {
            name: 'Location',
            selector: (row) => row.Location,
        },
        {
            name: 'Quantity',
            selector: (row) => row.Quantity,
            sortable: true,
        },
        {
            name: 'FoodStatus',
            selector: (row) => row.FoodStatus,
            sortable: true,
        },
        {
            name: 'Expired Time',
            selector: (row) => row.Expired + row.ExpiredTime,
            sortable: true,
        },
        {
            name: 'Update',
            cell: (row) => <Link><button className="btn btn-outline btn-sm" onClick={() => alert(row.foodName)}>Update</button></Link>
        },
        {
            name: 'Dlete',
            cell: (row) => <Link><button className="btn btn-outline btn-sm bg-red-800 text-white" onClick={() => alert(row.foodName)}>Dlete</button></Link>
        }

    ];

// search fun--------
//  Note : at first food data save myFood . myFood data have all data 
useEffect(()=>{
    const result = myFood.filter(food =>{
        return food.foodName.toLowerCase().match(search.toLowerCase())
    });
    setFilterdata(result);
},[search, myFood])


    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <DataTable
            columns={colamm}
            data={filterdata}
            pagination
            fixedHeader
            selectableRows
            highlightOnHover
            selectableRowsHighlight
            subHeader
            subHeaderComponent={
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            }
        ></DataTable>
    </div>
    );
};

export default ManageFoods;