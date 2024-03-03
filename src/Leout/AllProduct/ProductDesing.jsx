import { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxious from "../../Hook/BaseUrl/useAxious";

const ProductDesign = ({ food }) => {
    const { _id, Expired, ExpiredTime, FoodImage, Location, Notes, Quantity, foodName, FoodStatus, donerImage, donerName } = food;
    const baseUrl = useAxious();

    // Parse expiration time
    // const expiredInMilliseconds = parseInt(Expired) * (
    //     ExpiredTime === "Day" ? 24 * 60 * 60 * 1000 : // if 'Day'
    //     ExpiredTime === "Hours" ? 60 * 60 * 1000 : // if 'Hours'
    //     60 * 1000 // if 'Minutes'
    // );

    // const [remainingTime, setRemainingTime] = useState(expiredInMilliseconds);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setRemainingTime(prevTime => prevTime - 1000);
    //     }, 1000);

    //     return () => clearInterval(intervalId);
    // }, []);

    // const expiredMessage = remainingTime <= 0 ? "This product has expired" : "";

    // const countdownTimer = remainingTime > 0 && (
    //     <div className="badge badge-secondary">{formatTime(remainingTime)}</div>
    // );
   

    const experTime = parseInt(Expired)*(
        ExpiredTime === "Day"? 24*60*60*1000 : // If Day
        ExpiredTime === "Hours"? 60*60*1000 : // If Hours
        60*1000 // If Minutes
    );
    const [remaningTime, setremaningTime] = useState(experTime);
    // console.log(experTime)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setremaningTime(preTime => preTime-600000)
        },1000);
        return ()=> clearInterval(interval);
    },[]);
    // Time Formet -----
   
    const timeFormet = time =>{
        
        const hours = Math.floor((time/(60*60*1000)) % 24);
        const munites = Math.floor((time/(1000 / 60)) % 60);
        const Sec = Math.floor((time/(1000)) % 60);
        const dayss = Math.floor((time/(1000 * 60 * 60 * 24)) );
       
        if (dayss) {
            return `${dayss}d${hours}h ${munites}m ${Sec}s`
        } else if (!dayss) {
            return `${hours}h ${munites}m ${Sec}s`
        } else if (!hours) {
            return `${munites}m ${Sec}s`
        } 
        else if (!munites) {
            return ` ${Sec}s`
        } 
 
    }
    const countdownTimer = remaningTime > 0 && (
            <div className="badge badge-secondary">{timeFormet(remaningTime)}</div>
        );
    if (remaningTime <= 0) {
        baseUrl.patch("/addFood", {FoodStatus:'Uavailable'})
        .then(res => console.log(res.data))
    }
 const expiredMessage = remaningTime <= 0 ? "This product has expired" : "";
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className="w-[319Px] h-[208px]" src={FoodImage} alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between relative">
                    <div>
                        <h2 className="card-title">
                            {foodName}
                            {countdownTimer}
                        </h2>
                        <p>{expiredMessage}</p>
                    </div>
                    <div className="badge badge-outline bg-white absolute ml-[80%] mt-[-25%] pr-[2%]">
                        <h2 className="text-green-700 font-bold">{FoodStatus}</h2>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <img src={donerImage} alt="Doner" />
                        </div>
                        <h3 className="pl-4">{donerName}</h3>
                    </div>
                    <div>
                        <div>
                            <h3>Qty:<span className="text-green-800">{Quantity}</span> Person</h3>
                        </div>
                    </div>
                </div>
                <div className="card-actions">
                    <div>
                        <h4>Location: {Location}</h4>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/AllFood:${_id}`}>
                        <button className="btn btn-sm">Request The Food <MdNavigateNext /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default ProductDesign;
