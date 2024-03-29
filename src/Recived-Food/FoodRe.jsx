import { useContext, useEffect, useState } from "react";
import useAxious from "../Hook/BaseUrl/useAxious";
import { authContext } from "../AuthProvider/AuthProvider";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";


const FoodRe = () => {
    const baseUrl = useAxious();
    const {user} = useContext(authContext);
    const [userEmail , setuserEmail] = useState([]);
    const [reData , setreData] = useState([]);
    const [foodStust , setfoodStust] = useState('Panding');
    
    const userfilt = userEmail[0];
    useEffect(()=>{
        baseUrl.get(`/user?email=${user?.email}`)
        .then(res => setuserEmail(res.data))
    },[baseUrl,user?.email ])

    const coustomerEmail = userfilt?.email || user?.email;
    console.log(userEmail )
    console.log(user )
    // console.log(reData )
    console.log(coustomerEmail )
    // const coustomerName = userfilt?.firstname || user?.displayName;
    useEffect(()=>{
        baseUrl.get(`/requstFood/foodWoner?email=${coustomerEmail}`)
        .then(res => setreData(res.data))
    },[baseUrl, coustomerEmail]);
    
    const colamm = [
        {
            name : 'Food Img',
            selector: (row) =><img src={row.FoodImage} width={50} height={50} alt={row.FoodImage} />
        },
        {
            name : 'Food Name',
            selector: (row) => row.foodName,
        },
        {
            name : 'Coustomer Name',
            selector: (row) => row.coustomerName,
        },
        {
            name : 'Coustomer Email',
            selector: (row) => row.coustomerEmail,
        },
        {
            name : 'Requst Time',
            selector: (row) => row.retime,
        },
        {
            name : 'Donet',
            selector: (row) => row.amount,
        },
        {
            name:'Stust',
            cell:(row)=><Link><button className="btn btn-outline" onClick={()=>handelStust(row._id)}>{row.foodRequst}</button></Link>
        }
        
    ];
    const handelStust = _id =>{
        baseUrl.patch(`/requstFood/foodWoner/${_id}`,{foodRequst:'Delivery'})
        .then(res=>console.log(res.data))
    }
    return <DataTable
    columns={colamm} 
    data={reData}
    pagination
    fixedHeader
    selectableRows
    selectableRowsHighlight
    highlightOnHover
    
    ></DataTable>
    
};

export default FoodRe;