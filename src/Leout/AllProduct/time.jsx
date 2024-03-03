// import React, { useState, useEffect } from 'react';

// const ProductCard = ({ productName, number, hoursPerDay }) => {
//   const [expirationTime, setExpirationTime] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Calculate expiration time
//       const currentTime = new Date().getTime();
//       const expirationDate = new Date(currentTime + (number * hoursPerDay * 60 * 60 * 1000));
//       setExpirationTime(expirationDate);
//     }, 1000); // Update every second

//     return () => clearInterval(interval); // Clean up interval on component unmount
//   }, [number, hoursPerDay]);

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

//   return (
//     <div className="product-card">
//       <h2>{productName}</h2>
//       <p>Expires in: {calculateRemainingTime()}</p>
//     </div>
//   );
// };

// export default ProductCard;


// --------------------------------------------------------------------------------------------------------

// import { useState } from "react";
// import { MdNavigateNext } from "react-icons/md";
// import { Link } from "react-router-dom";
// const ProductDesing = ({ food }) => {
//     const {_id, Expired, ExpiredTime, FoodImage, Location, Notes, Quantity, foodName, FoodStatus, donerImage, donerName } = food;
//     console.log(Expired, ExpiredTime)
//     const [dayTime, setdayTime]= useState(0);
//     console.log(dayTime)
//     if (ExpiredTime === 'Day') {
//         const perDay = 24;
//         setdayTime(perDay);
//     }else{
//         setdayTime(Expired);
//     }
//     return (
//         <div className="card  bg-base-100 shadow-xl">
//             <figure><img  className="w-[319Px] h-[208px]" src={FoodImage} alt="Shoes" /></figure>
//             <div className="card-body">
//                 <div className="flex justify-between relative">
//                     <div>
//                         <h2 className="card-title">
//                             {foodName}
//                             <div className="badge badge-secondary ">{Expired}{ExpiredTime}</div>
//                         </h2>
//                     </div>
//                     <div className="badge badge-outline bg-white absolute ml-[80%] mt-[-25%] pr-[2%]">
//                         <h2 className="text-green-700 font-bold">
//                             {FoodStatus}
//                         </h2>
//                     </div>
//                 </div>
//                 {/* ----------- */}
//                 <div className="flex justify-between">
//                     <div className="avatar">
//                         <div className="w-8 rounded-full  ">
//                             <img src={donerImage} />
//                         </div>
//                         <h3 className="pl-4">{donerName}</h3>
//                     </div>
//                     <div>
//                         <div>
//                             <h3>Qty:<span className="text-green-800">{Quantity}</span>Person</h3>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="card-actions">
//                     <div >
//                         <h4>Location:{Location}</h4>
//                     </div>
//                 </div>
//                 <div className="card-actions justify-end">
                    
//                     {/* <link to={`/AllFood:${_id}`}><button className="btn btn-sm">Requst The Food <MdNavigateNext /></button></link> */}
//                    <Link to={`/AllFood:${_id}`}>
//                    <button className="btn btn-sm">Requst The Food <MdNavigateNext /></button>
//                    </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDesing;
