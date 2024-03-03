// import { useEffect, useState } from "react";
// import useAllProduct from "../AllProduct/useAllProduct";


// const [expirationTime, setExpirationTime] = useState(0);
// const [expirDay, setExpirday] = useState(0);
// const [pro, setpro] = useState('');
// //     if (ExpiredTime === "Day") {
// //         const day = Expired*24;
// //         setExpirday(day)
// //     }
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       // Calculate expiration time
// //       const currentTime = new Date().getTime();
// //       const expirationDate = new Date(currentTime + (Expired * expirDay * 60 * 60 * 1000));
// //       setExpirationTime(expirationDate);
// //     }, 1000); // Update every second

// //     return () => clearInterval(interval); // Clean up interval on component unmount
// //   }, [Expired, expirDay]);

//    useEffect(()=>{
//     const allFood = useAllProduct();
//     allFood.map(food => setpro(food))
//    },[])



//   // Calculate remaining time
//   const calculateRemainingTime = () => {
//     const currentTime = new Date().getTime();
//     const remainingTime = expirationTime - currentTime;

//     if (remainingTime <= 0) {
//       return "Expired";
//     }

//     const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

//     return `${days}d ${hours}h ${minutes}m ${seconds}s`;
//   };

// const useExperFood = () => {
//     return 
// };

// export default useExperFood;