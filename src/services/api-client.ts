import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"61bb69f4034a440795f23ada0cec63c3",
    }
})