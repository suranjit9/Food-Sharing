import Swal from 'sweetalert2'
import useAxious from '../../Hook/BaseUrl/useAxious';
import { useContext, useEffect, useState } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';

const AddFood = () => {
    const { user } = useContext(authContext);
    // const userEmail = {email:user.email};
    // console.log(user)
    const axiosUrl = useAxious();
    const [userEmail, setuserEmail] = useState({});

    useEffect(() => {
        axiosUrl.get(`/user?email=${user?.email}`)
            .then(res => setuserEmail(res.data))
    }, [axiosUrl, user?.email])
    const donerName = userEmail?.firstname || user?.displayName;
    const donerImage = userEmail?.url || user?.photoURL;
    const email = userEmail?.email || user?.email;

    console.log(email)
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
        const FoodStatus = "available";
        const Category = from.Category.value;

        const fromData = { donerName, Category, email, donerImage, foodName, FoodImage, Location, Quantity, Expired, ExpiredTime, Notes, FoodStatus };
        console.log(fromData);


        if (!donerName) {
            Swal.fire({
                title: 'Opp!',
                text: 'ForBeden',
                icon: 'Worrng',
                confirmButtonText: 'Ok'
            })

        } else {
            axiosUrl.post('/addFood', fromData)
                .then(res => {
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
        <div className="bg-gray-100 p-6 md:p-12 lg:p-24 w-full mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-8">Add a Food</h2>
            <form onSubmit={handalAddCoffee} className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <input type="text" name='foodName' placeholder="Food Name" required className="input input-bordered w-full max-w-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Image</span>
                    </label>
                    <input type="text" name='FoodImage' placeholder="Food Image URL" required className="input input-bordered w-full max-w-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pickup Location</span>
                    </label>
                    <input type="text" name='Location' placeholder="Pickup Location" required className="input input-bordered w-full max-w-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Quantity</span>
                    </label>
                    <input type="number" name='Quantity' placeholder="Quantity" required className="input input-bordered w-full max-w-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Expired Date/Time</span>
                    </label>
                    <div className="flex items-center">
                        <input type="number" name='Expired' placeholder="Date/Time" required className="input input-bordered w-full max-w-md" />
                        <select type="text" name='ExpiredTime' required className="select select-bordered ml-2">
                            <option>Hour</option>
                            <option>Day</option>
                        </select>
                    </div>
                </div>
                <div className="form-control">
                <label className="label">
                        <span className="label-text">Food Category</span>
                    </label>
                    <select name='Category' className="select select-bordered w-full max-w-xs">
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
                    <textarea type="text" name='Notes' className="w-full textarea-primary" placeholder="Additional Notes"></textarea>
                </div>
                <div className="col-span-full">
                    <input type="submit" value="Add Food" className="btn btn-block" />
                </div>
            </form>
        </div>


    );
};

export default AddFood;