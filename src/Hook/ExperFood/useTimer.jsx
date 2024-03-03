import { useEffect, useState } from "react";


const useTimer = (Expired, ExpiredTime) => {
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
    // if (remaningTime <= 0) {
    //     baseUrl.patch("/addFood", {FoodStatus:'Uavailable'})
    //     .then(res => console.log(res.data))
    // }
    // const expiredMessage = remaningTime <= 0 ? "This product has expired" : "";
    return countdownTimer;
};

export default useTimer;