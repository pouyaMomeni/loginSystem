import axios from "axios"


const getAllProducts = async () => {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=true`)
    return data
}


const signUP = async (values) => {
    const { data } = await axios.post(`http://localhost:5000/register`, { username: values.username, email: values.email, password: values.password })
    return data
}

const login = async (values) => {
    const { data } = await axios.post(`http://localhost:5000/login`, { email: values.email, password: values.password })
    return data
}

export {
    getAllProducts,
    signUP,
    login
}