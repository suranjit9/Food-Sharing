import PageTitle from "../../ShearFile/PageTitle";
import AllProduct from "../AllProduct/AllProduct";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          {/* <PageTitle></PageTitle> */}
          <div className=" ">
          <AllProduct></AllProduct>
          </div>
          
        </div>
    );
};

export default Home;
