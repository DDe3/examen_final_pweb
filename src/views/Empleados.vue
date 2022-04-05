<template>
  <h2 class="text-primary">Funcionalidades Empleado</h2>

  <div id="VueloDisponible">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Numero de compra del pasaje</span>
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
  <button type="submit" class="btn btn-primary" @click="checkIn">
    Buscar
  </button>

  <h2 class="text-primary" v-if="respuesta">{{respuesta}}</h2>


</template>

<script>
import realizarCheckIn from "../js/checkIn.js";
export default {
  name: "Empleados",
  data() {
    return {
      token: null,
      numero: null,
      respuesta: null,
    };
  },
  created() {
    this.auth = this.$route.query.token;
  },
  methods: {
      async checkIn() {
          const data = await realizarCheckIn(this.numero, this.token)
          this.respuesta = data
      }
  }
};
</script>

<style>
</style>