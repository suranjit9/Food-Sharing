import { useLoaderData, useParams } from "react-router-dom";
import useAxious from "../../Hook/BaseUrl/useAxious";
import { useEffect, useState } from "react";
import axios from "axios";



const SingalFood = () => {
    const { id } = useParams();
    const basuUrl = useAxious();
    const [foodData, setFood] = useState([]);
    const { _id, Expired, ExpiredTime, FoodImage, Location, Notes, Quantity, foodName, FoodStatus, donerImage, donerName, email } = foodData;
    useEffect(() => {
        basuUrl.get(`/addFood/SingalFood/${id}`)
            .then(res => setFood(res.data))
    }, [])
    return (
        <div className="flex md:flex flex-row gap-6 w-[80%] m-auto">
            <div className="md:basis-1/2">
                <img src={FoodImage} alt={foodName} className="rounded-lg" />
            </div>
            {/* requst section */}
            <div className="md:basis-1/2 ">
                <div className="space-y-3 mb-3">
                    <h3 className="text-xs opacity-60 mb-3">Donar info:</h3>
                    <hr />
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
                </div>
                <hr />
            </div>

        </div>
    );
};

export default SingalFood;