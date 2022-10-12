import axios from "axios";

const http = axios.create({
    baseURL:"https://alurageek-v2.herokuapp.com/"
})

export default http