import axios from "axios";

const body =
{
    "username": "admin",
    "password": "1234"
}

const getToken = async() => {
    const response = axios.post(`http://localhost:8085/api/seguridad/tokens`, body).then(r=>r.data)
    console.log(response)
    return response
}

export default getToken;