import axios from "axios";

const realizarCheckIn = async(numero, token) => {
    const data = axios.put(`http://localhost:8081/ApiCompraPasaje/V1/CompraPasajes/${numero}`, { headers: {"Authorization" : `${token}`}})
    .then(r=>r.data).catch(err=>{return err})
    return data
}

export default realizarCheckIn