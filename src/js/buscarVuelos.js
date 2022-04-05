import axios from "axios";

const buscarVuelos = async(body, token) => {
    const data = axios.get(`http://localhost:8081/ApiVuelos/V1/vuelos/disponibles`, body, { headers: {"Authorization" : `${token}`}})
    .then(r=>r.data).catch(err=>{return err})
    return data
}

export default buscarVuelos;