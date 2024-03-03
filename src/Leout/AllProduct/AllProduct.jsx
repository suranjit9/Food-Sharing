import useAllProduct from "../../Hook/AllProduct/useAllProduct";


const AllProduct = () => {
    const allFood = useAllProduct();
    console.log(allFood);
    return (
        <div>
            {allFood.length}
        </div>
    );
};

export default AllProduct;