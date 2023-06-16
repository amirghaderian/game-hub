import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"5c3822d1bb3242c09707a41107ab0dbf",
    }
})