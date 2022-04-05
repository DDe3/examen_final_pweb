import axios from "axios";

const reservarVuelo = async(body, token) => {
    const data = axios.post(`http://localhost:8081/ApiVuelos/V1/vuelos`, body, { headers: {"Authorization" : `${token}`}})
    .then(r=>r.data).catch(err=>{return err})
    return data
}

export default reservarVuelo;