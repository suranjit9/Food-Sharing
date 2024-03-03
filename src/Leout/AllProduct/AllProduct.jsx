import useAllProduct from "../../Hook/AllProduct/useAllProduct";
import ProductDesing from "./ProductDesing";


const AllProduct = () => {
    const allFood = useAllProduct();
    console.log(allFood);
    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            {
               allFood.map(food => <ProductDesing key={food._id} food={food}></ProductDesing>) 
            }
        </div>
    );
};

export default AllProduct;