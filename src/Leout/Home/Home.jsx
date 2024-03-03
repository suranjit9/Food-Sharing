import AllProduct from "../AllProduct/AllProduct";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <div className="w-[80%] m-auto">
          <AllProduct></AllProduct>
          </div>
          
        </div>
    );
};

export default Home;
