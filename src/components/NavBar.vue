<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="link in links" :key="link.id">
          <router-link
            class="nav-link"
            :to="this.obtenerUrl(link.id)"
            @click="visible = !visible"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import getToken from "../js/getToken.js";
export default {
  name: "NavBar",
  methods: {
    obtenerUrl(num) {
      switch (num) {
        case 1:
          return "/";
        case 2:
          return "/vuelos" + "?token=" + this.token;
        case 3:
          return "/reservas" + "?token=" + this.token;
        case 4:
          return "/empleados" + "?token=" + this.token;
      }
    },
  },
  async created() {
    this.token = await getToken();
  },
  data() {
    return {
      token: null,
      links: [
        {
          id: 1,
          name: "Inicio",
        },
        {
          id: 2,
          name: "Vuelos",
        },
        {
          id: 3,
          name: "Reservar",
        },
        {
          id: 4,
          name: "Empleados",
        },
      ],
    };
  },
};
</script>

<style>
</style>