import axios from "axios";

const buscarVuelo = async(numero, token) => {
    const data = axios.get(`http://localhost:8081/ApiVuelos/V1/vuelos/disponibles${numero}`, { headers: {"Authorization" : `${token}`}})
    .then(r=>r.data).catch(err=>{return err})
    return data
}

export default buscarVuelo;