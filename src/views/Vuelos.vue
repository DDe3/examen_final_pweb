<template>
  <h2 class="text-primary">Vuelos</h2>

  <div id="inputVuelo">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Origen</span>
      <input
        type="text"
        class="form-control"
        placeholder="Punto de origen"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="origen"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Destino</span>
      <input
        type="text"
        class="form-control"
        placeholder="Destino"
        aria-label="Cedula"
        aria-describedby="basic-addon1"
        v-model="destino"
      />
    </div>

    <div class="row justify-content-center">
      <label for="startDate">Fecha de vuelo</label>
      <input
        id="startDate"
        class="form-control"
        type="date"
        v-model="fechaVuelo"
      />
      <span id="startDateSelected"></span>
    </div>
  </div>
  <button type="submit" class="btn btn-primary" @click="buscarVuelos">
    Buscar
  </button>
  <button type="submit" class="btn btn-primary" @click="limpiar">
    Limpiar
  </button>

  <table class="table table-dark table-striped" v-if="vuelos">
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
    <tbody v-for="v in vuelos" :key="v.numeroVuelo">
      <tr>
        <th scope="row">{{ v.numeroVuelo }}</th>
        <td>{{ v.origen }}</td>
        <td>{{ v.destino }}</td>
        <td>{{ v.categoria }}</td>
        <td>{{ v.nombre }}</td>
        <td>{{ v.valorAsiento }}</td>
        <td>{{ v.numeroAsientos }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import buscarVuelos from "../js/buscarVuelos.js";
export default {
  name: "Vuelos",
  data() {
    return {
      token: null,
      origen: null,
      destino: null,
      fechaVuelo: null,

      vuelos: [],
    };
  },

  methods: {
    async buscarVuelos() {
      const body = {
        origen: this.origen,
        destino: this.destino,
        fechaVuelo: this.fechaVuelo,
      };

      const response = await buscarVuelos(body, this.token);
      this.vuelos = response;
    },
    limpiar() {
      this.vuelos = [];
    },
  },
  mounted() {
    this.token = this.$route.query.token;
  },
};
</script>

<style>
button {
  margin: 10px 10px;
}
#inputVuelo {
    width: 60%;
    margin: auto;
}
</style>