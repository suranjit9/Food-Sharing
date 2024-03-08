import Swal from 'sweetalert2'

import { useContext, useEffect, useState } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import useAxious from '../../Hook/BaseUrl/useAxious';
import { useParams } from 'react-router-dom';


const Update = () => {
    const { id } = useParams();
    const { user } = useContext(authContext);
    // const userEmail = {email:user.email};
    
    const axiosUrl = useAxious();
    // const [userEmail, setuserEmail] = useState({});
    const [updateData, setupdateData] = useState([]);
    // console.log({id}, {updateData})
     const {  Expired, ExpiredTime, FoodImage, Location, Notes, Quantity, foodName  } = updateData;
    // useEffect(() => {
    //     axiosUrl.get(`/user?email=${user?.email}`)
    //         .then(res => setuserEmail(res.data))
    // }, [axiosUrl, user?.email])
    // const donerName = userEmail?.firstname || user?.displayName;
    
    // const email = userEmail?.email || user?.email;
    useEffect(() => {
        axiosUrl.get(`/addFood/Updatefood/${id}`)
            .then(res => setupdateData(res.data))
    }, [id, axiosUrl]);

    // console.log(email)
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
        const Category = from.Category.value;

        const fromData = {  Category,  foodName, FoodImage, Location, Quantity, Expired, ExpiredTime, Notes};
        // console.log(fromData);
        try {
            axiosUrl.put(`/addFood/Updatefood/${id}`, fromData)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Update your Food Succesfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

                }else{
                    Swal.fire({
                        title: 'Opp!',
                        text: 'ForBeden',
                        icon: 'Worrng',
                        confirmButtonText: 'Ok'
                    })
                }
            })
        } catch (error) {
           console.log(error) 
        }
  
    }
    return (
        <div className="bg-gray-100 p-6 md:p-12 lg:p-24 w-full mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-8">Add a Food</h2>
            <form onSubmit={handalAddCoffee} className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <input type="text" name='foodName' defaultValue={foodName} placeholder="Food Name"  className="input input-bordered w-full max-w-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Image</span>
                    </label>
                    <input type="text" name='FoodImage' defaultValue={FoodImage} placeholder="Food Image URL"  className="input input-bordered w-full max-w-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pickup Location</span>
                    </label>
                    <input type="text" name='Location' defaultValue={Location} placeholder="Pickup Location"  className="input input-bordered w-full max-w-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Quantity</span>
                    </label>
                    <input type="number" name='Quantity' defaultValue={Quantity} placeholder="Quantity"  className="input input-bordered w-full max-w-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Expired Date/Time</span>
                    </label>
                    <div className="flex items-center">
                        <input type="number" name='Expired' defaultValue={Expired} placeholder="Date/Time"  className="input input-bordered w-full max-w-md" />
                        <select type="text" name='ExpiredTime'  required className="select select-bordered ml-2">
                            <option>Hour</option>
                            <option>Day</option>
                        </select>
                    </div>
                </div>
                <div className="form-control">
                <label className="label">
                        <span className="label-text">Food Category</span>
                    </label>
                    <select name='Category'  className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Category</option>
                        <option>Fruit and vegetables</option>
                        <option>Starchy food</option>
                        <option>Dairy</option>
                        <option>Protein</option>
                        <option>Fat</option>
                        <option>Desserts</option>
                       
                    </select>
                </div>

                <div className="form-control col-span-full">
                    <label className="label">
                        <span className="label-text">Additional Notes</span>
                    </label>
                    <textarea type="text" name='Notes' defaultValue={Notes} className="w-full textarea-primary" placeholder="Additional Notes"></textarea>
                </div>
                <div className="col-span-full">
                    <input type="submit" value="Add Food" className="btn btn-block" />
                </div>
            </form>
        </div>

    );
};

export default Update;