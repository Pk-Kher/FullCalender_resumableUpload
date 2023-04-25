import axios from "axios"


const getCookies = () => {
    return axios.get('/sanctum/csrf-cookie')
}
export default getCookies;