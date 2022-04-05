<template>
  <h2 class="text-primary">Reservar Vuelo</h2>
  <div id="VueloDisponible">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Numero de vuelo</span>
      <input
        type="text"
        class="form-control"
        placeholder="Placa"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="numero"
      />
    </div>
  </div>
  <button type="submit" class="btn btn-primary" @click="getVuelo">
    Buscar
  </button>

  <div v-if="vuelo" id="vuelo">
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Numero de vuelo</th>
          <th scope="col">Origen</th>
          <th scope="col">Destino</th>
          <th scope="col">Categoria</th>
          <th scope="col">Nombre del avión</th>
          <th scope="col">Valor asiento</th>
          <th scope="col">Asientos disponibles</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ vuelo.numeroVuelo }}</th>
          <td>{{ vuelo.origen }}</td>
          <td>{{ vuelo.destino }}</td>
          <td>{{ vuelo.categoria }}</td>
          <td>{{ vuelo.nombre }}</td>
          <td>{{ vuelo.valorAsiento }}</td>
          <td>{{ vuelo.numeroAsientos }}</td>
        </tr>
      </tbody>
    </table>

    <div id="inputVuelo">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"
          >Cantidad de asientos</span
        >
        <input
          type="number"
          class="form-control"
          placeholder="Cantidad de asientos..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="cantidad"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Numero tarjeta</span>
        <input
          type="numeber"
          class="form-control"
          placeholder="Numero de tarjeta de credito..."
          aria-describedby="basic-addon1"
          v-model="tarjeta"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Cedula</span>
        <input
          type="numeber"
          class="form-control"
          placeholder="C.I"
          aria-describedby="basic-addon1"
          v-model="cedula"
        />
      </div>

      <h2 class="text-primary" v-if="respuesta">{{respuesta}}</h2>

    </div>

    <button type="submit" class="btn btn-primary" @click="reservar">
      Reservar Vuelo
    </button>
  </div>
</template>

<script>
import buscarVuelo from "../js/buscarVuelo.js";
import reservarVuelo from "../js/reservarVuelo.js";
export default {
  name: "Reservar",
  data() {
    return {
      numero: null,
      token: null,

      cantidad: null,
      tarjeta: null,

      vuelo: null,
      cedula: null,

      respuesta: null
    };
  },
  methods: {
    async getVuelo() {
      const data = await buscarVuelo(this.numero);
      this.vuelo = data;
    },
    async reservar() {
        const body = {
            cantidad: this.cantidad,
            tarjeta: this.tarjeta,
            numeroVuelo : this.numero,
            cedula: this.cedula
        }

        const data = await reservarVuelo(body,this.token);
        this.respuesta = data;
    },
  },
  created() {
    this.auth = this.$route.query.token;
  },
};
</script>

<style>
#vuelo {
  width: 60%;
  margin: auto;
}
button {
  margin: 10px 10px;
}
</style>