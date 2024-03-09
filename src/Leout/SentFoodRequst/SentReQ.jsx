import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import useAxious from '../../Hook/BaseUrl/useAxious';

const SentReQ = () => {

    const baseUrl = useAxious();
    const {user} = useContext(authContext);
    const [userEmail , setuserEmail] = useState([]);
    const [reData , setreData] = useState([]);
    const [food , setfood] = useState([]);
    
    const userfilt = userEmail[0];
    useEffect(()=>{
        baseUrl.get(`/user?email=${user?.email}`)
        .then(res => setuserEmail(res.data))
    },[baseUrl,user?.email ])

    const coustomerEmail = userfilt?.email || user?.email;
    // console.log(userEmail )
    // console.log(user )
    // console.log(reData )
    // console.log(coustomerEmail )
    // const coustomerName = userfilt?.firstname || user?.displayName;
    useEffect(()=>{
        baseUrl.get(`/requstFood/sentreQ?email=${coustomerEmail}`)
        .then(res => {
            setfood(res.data)
            setreData(res.data)})
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
            cell:(row)=><button onClick={() => hendalDelate(row._id)} className="btn btn-outline">Deleat</button>
        },
        {
            name:'Stust',
            cell:(row)=><button  className="btn btn-outline">{row.foodRequst}</button>
        }
        
    ];
    const hendalDelate = _id =>{
        baseUrl.delete(`/SentRe/delete/${_id}`)
        .then(res=>{
            if (res.data.deletedCount > 0) {
                const find = reData.filter(item => item._id !== _id  )
                setfood(find)
            }else{
                alert("worrng")
            }
        })
    }
    return (
        <div>
            <DataTable
    columns={colamm} 
    data={food}
    pagination
    fixedHeader
    selectableRows
    selectableRowsHighlight
    highlightOnHover
    
    ></DataTable>
        </div>
    );
};

export default SentReQ;