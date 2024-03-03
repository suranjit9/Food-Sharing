import { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxious from "../../Hook/BaseUrl/useAxious";
import useTimer from "../../Hook/ExperFood/useTimer";

const ProductDesign = ({ food }) => {
    const { _id, Expired, ExpiredTime, FoodImage, Location, Notes, Quantity, foodName, FoodStatus, donerImage, donerName } = food;
    const baseUrl = useAxious();
    // const timer = useTimer(Expired, ExpiredTime);
    // console.log(timer)

    const experTime = parseInt(Expired)*(
        ExpiredTime === "Day"? 24*60*60*1000 : // If Day
        ExpiredTime === "Hours"? 60*60*1000 : // If Hours
        60*1000 // If Minutes
    );
    const [remaningTime, setremaningTime] = useState(experTime);
    // console.log(experTime)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setremaningTime(preTime => preTime-1000)
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
            <div className="badge badge-secondary">EXP: {timeFormet(remaningTime)}</div>
        );
    if (remaningTime <= 0) {
        baseUrl.patch("/addFood", {FoodStatus:'Uavailable'})
        .then(res => console.log(res.data))
    }
 const expiredMessage = remaningTime <= 0 ? "This product has expired" : "";
    return (
        <div className="card bg-base-100 shadow-xl relative">
            <figure>
                <img className="w-screen h-[208px]" src={FoodImage} alt="Shoes" />
                
            </figure>
            <div className=" absolute ml-[3%] mt-[2%]">
                        <h3 >{countdownTimer}</h3>
                    </div>
            <div className="card-body">
                <div className="flex justify-between relative">
                    <div>
                        <h2 className="card-title">
                            {foodName}
                            
                        </h2>
                        {/* <p>{timer.expiredMessage}</p> */}
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
                {/* <div className="card-actions">
                    <div>
                        <h4>Location: {Location}</h4>
                    </div>
                </div> */}
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
