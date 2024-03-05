import { Link, useLoaderData, useParams } from "react-router-dom";
import useAxious from "../../Hook/BaseUrl/useAxious";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { data } from "autoprefixer";



const SingalFood = () => {
    const { id } = useParams();
    const baseUrl = useAxious();
    const [foodData, setFood] = useState([]);
    const [amount, setamount] = useState(0);
    const { user } = useContext(authContext);
    const [userEmail , setuserEmail] = useState({});
    
    const userfilt = userEmail[0];
    useEffect(()=>{
        baseUrl.get(`/user?email=${user?.email}`)
        .then(res => setuserEmail(res.data))
    },[baseUrl,user?.email ])

    const coustomerEmail = user?.email;
    const coustomerName = userfilt?.firstname || user?.displayName;
    // console.log({coustomerEmail}, {coustomerName})
    
    const { _id, Expired, ExpiredTime, FoodImage, Location, Notes, Quantity, foodName, FoodStatus, donerImage, donerName, email } = foodData;
    useEffect(() => {
        baseUrl.get(`/addFood/SingalFood/${id}`)
            .then(res => setFood(res.data))
    }, []);
    const retime = new Date();
    const reFood = {
        amount:amount,
        donerName:donerName,
        doneremail:email,
        foodName:foodName,
        Quantity:Quantity,
        FoodImage:FoodImage,
        coustomerEmail:coustomerEmail,
        coustomerName:coustomerName,
        retime:retime



    }
    const handleFoodRequest = () => {
        baseUrl.post(`/requstFood`, reFood)
        .then()
    }


    return (
        <div className=" md:flex flex-row gap-6 w-[80%] m-auto space-y-3">
            <div className="md:basis-1/2">
                <img src={FoodImage} alt={foodName} className="rounded-lg" />
            </div>
            {/* requst section */}
            <div className="md:basis-1/2 ">
                <div className="space-y-3 mb-3">
                    <h3 className="text-xs opacity-60 mb-3">Donar info:</h3>
                    <hr />
                    <div className="flex  justify-between">
                        <div className="flex gap-3 items-center">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={donerImage} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold">{donerName}</h3>
                                <h3 className="text-sm">{email}</h3>
                            </div>
                        </div>
                        <h1 className="text-sm font-bold ">Recive Location: <span className="text-green-800">{Location}</span></h1>
                    </div>
                </div>
                <hr />
                {/* food info----- */}
                <div className="space-y-3">
                    <div className="md:flex justify-between mt-3">
                        <h1 className="text-xl font-bold">Food Name : {foodName}</h1>
                        <h3>Quantity: <span className="text-green-800 font-bold">{Quantity}</span> person</h3>
                    </div>
                    <h1 className="text-sm font-bold">FoodStatus: <span className="text-green-800">{FoodStatus}</span></h1>

                    <p className="text-sm font-bold">Additional Notes: <span className="text-green-800">{Notes}</span></p>

                </div>
                <div>
                    <h3>If you Want give us Some Donetion</h3>
                    <label className="input input-bordered flex items-center gap-2">
                        USD
                        <input type="number" onChange={(e)=>setamount(e.target.value)} className="grow" placeholder="Daisy" />
                    </label>
                    <span className="btn" onClick={handleFoodRequest}>
                        <button  onClick={() => document.getElementById('my_modal_5').showModal()}> Food Request</button>
                    </span>
                </div>


            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

          
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Thank you for requst Food </h3>
                    <p className="py-4"> Doner Name : {donerName}</p>
                    <p className="py-4"> Pickup Location : {Location}</p>
                    <p className="py-4"> Expired Date : {Expired} {ExpiredTime}</p>
                    <p className="py-4"> Donet Amount : $ {amount} </p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">X</button>
                        </form>
                    </div>
                </div>
            </dialog>
                
           
        </div>
    );
};

export default SingalFood;