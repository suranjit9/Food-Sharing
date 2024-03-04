import Swal from 'sweetalert2'
import useAxious from '../../Hook/BaseUrl/useAxious';
import { useContext, useEffect, useState } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';

const AddFood = () => {
    const {user} = useContext(authContext);
    // const userEmail = {email:user.email};
    // console.log(user)
    const axiosUrl = useAxious();
    const [userEmail , setuserEmail] = useState({});
    useEffect(()=>{
        axiosUrl.get(`/user?email=${user?.email}`)
        .then(res => setuserEmail(res.data))
    },[axiosUrl,user?.email ])
    const donerName = userEmail?.firstname || user?.displayName;
    const donerImage = userEmail?.url || user?.photoURL;
    const email = userEmail?.email || user?.email;
// console.log(userEmail,user)
// // console.log(userEmail.firstname)
// console.log('helloImahhhh',userImage)
    const handalAddCoffee = e => {
        e.preventDefault();
        const from = e.target;
        const foodName = from.foodName.value;
        const FoodImage = from.FoodImage.value;
        const Location = from.Location.value;
        const Quantity = from.Quantity.value;
        const Expired = from.Expired.value;
        const ExpiredTime = from.ExpiredTime.value;
        const Notes = from.Notes.value;
        const FoodStatus = "available" ;

        const fromData = {donerName, email, donerImage, foodName, FoodImage, Location, Quantity, Expired, ExpiredTime, Notes, FoodStatus };
        console.log(fromData);
        // fetch('http://localhost:5000/AddCoffee', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(fromData)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'success!',
        //                 text: 'Add a Coffee Succesfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Ok'
        //             })
        //         }
        //     })
        // axiosUrl.get(`/user?email=${user?.email}`)
        // .then(res => setuserEmail(res.data))
        
        if (!donerName) {
            Swal.fire({
                title: 'Opp!',
                text: 'ForBeden',
                icon: 'Worrng',
                confirmButtonText: 'Ok'
            })
             
        }else{
           axiosUrl.post('/addFood',fromData)
            .then(res =>{
                if (res.data.insertedId) {
                                Swal.fire({
                                    title: 'success!',
                                    text: 'Add a Food Succesfully',
                                    icon: 'success',
                                    confirmButtonText: 'Ok'
                                })
                            }
            }) 
        }
        
        
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-center">Add a Food</h2>
            <form onSubmit={handalAddCoffee}>
                <div className='sm:justify-center md:flex  '>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='foodName' placeholder="Food Name" required className="input input-bordered w-full max-w-xl " />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">FoodImage</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='FoodImage' placeholder="Food Image url" required className="input input-bordered w-full max-w-xl" />
                        </label>
                    </div>

                </div>
                {/* Name & Image ----end */}
                <div className=' md:flex flex-row '>
                    <div className="form-control md:basis-1/2">
                        <label className="label">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='Location' placeholder="Pickup Location" required className="input input-bordered w-full max-w-xl " />
                        </label>
                    </div>
                    <div className="form-control basis-1/4 ml-4">
                        <label className="label">
                            <span className="label-text">FoodQuantity</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name='Quantity' placeholder="of person to be served" required className="input input-bordered w-full max-w-xl" />
                        </label>
                    </div>
                    <div className="form-control basis-1/4 ml-4">

                        <label className="label">
                            <span className="label-text">Expired Date/Time</span>
                        </label>
                        <label className="input-group flex">
                            <input type="number" name='Expired' placeholder="Expired Date/Time" required className="input  w-full" />
                            <select type="text" name='ExpiredTime' required>
                                <option>Hour</option>
                                <option>Day</option>
                            </select>

                        </label>

                    </div>


                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Additional Notes</span>
                        </label>
                        <label className="input-group">
                            <textarea type="text" name='Notes' className="w-full textarea-primary" placeholder="Additional Notes"></textarea>
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Food" className="btn btn-block" />

            </form>
        </div>
    );
};

export default AddFood;