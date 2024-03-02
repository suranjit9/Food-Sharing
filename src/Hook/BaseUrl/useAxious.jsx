import axios from "axios";
const axiousUrl = axios.create({
    baseURL:'http://localhost:5000'
})

const useAxious = () => {
   return axiousUrl;
};

export default useAxious;