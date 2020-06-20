<template>
  <div class="container">
    <div class="col-md-10 mx-auto">
      <div class="pozadi col-md-10 mx-auto">
        <h1 class="mt-4 mb-4">Máš chuť na tato jídla</h1>

        <div
          v-for="(recept, index) in vybraneRecepty"
          v-bind:key="index"
          v-on:click="prejdiNaDetail(index)"
          class="detail col-md-8"
        >
          <div class="row bila recept-item overflow-hidden">
            <div class="col-md-3 col-4 p-0">
            <img
              v-bind:src="require(`../assets/images/${recept.obrazek}`)"
              v-bind:alt="recept.nazev"
              class
            />

            <h3 class>{{ recept.nazev }}</h3>
            <div class>
              <div class>
                <p class>{{ recept.kratky }}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="menu container light-green">
      <div class="row d-flex">
        <button
          v-on:click="hratZnovu"
          class="col-4 flex-fill border text-center dark-green font-weight-bold"
          to="/hra2"
        >Hrát znovu</button>

        <router-link
          class="col-4 flex-fill border text-center dark-green font-weight-bold"
          to="/vyhledavani"
        >Vyhledávání receptů</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Hra2 from "./Hra2.vue";
export default {
  props: ["vybraneRecepty", "vybrano"],
  methods: {
    hratZnovu() {
      this.$emit("hratZnovu");
    },
    prejdiNaDetail(index) {
      this.$emit("prejdiNaDetail", index);
    }
  }
};
</script>

<style>
.mas-chut {
  background-color: white;
  font-weight: 600;
  color: green;
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.9);
  border: darkgrey;
  border-radius: 10px;
}

@media (min-width: 1000px) {
  .bile-pozadi {
    width: 200px;
    height: 150px;
  }
}

@media (max-width: 1000px) {
  .bile-pozadi {
    width: 150px;
    height: 100px;
  }
}

.bile-pozadi {
  background-color: white;
  color: green;
  border-bottom: 2px solid green;
  margin: auto;
  display: flex;
  justify-content: center;
}
.obrazek {
  max-width: 180px;
  max-height: 120px;
}

.white {
  background-color: white;
  border: 3px SOLID DARKGREEN;
  height: 200px;
  widows: 400px;
  margin: 15px auto;
}

p {
  text-decoration: none;
}
</style>
