<template>
  
    <div class="mx-auto">
      
        <button v-on:click="hratZnovu" id="pozadi-zpet" class="vrstva1 mt-4 mb-0">
          <img src="./../assets/ikony/arrow.png" id="zpet" />
        </button>
     
      <h1 class="mt-0 pb-3 pr-5 pl-5 pt-4 text-center col-md-12">Máš chuť na tato jídla:</h1>

      <div
        v-for="(recept, index) in vybraneRecepty"
        v-bind:key="index"
        v-on:click="prejdiNaDetail(index)"
        class="detail mx-auto"
      >
        <div class="row bila recept-item overflow-hidden">
          <div class="col-md-3 col-4 p-0">
            <img
              v-bind:src="require(`../assets/images/${recept.obrazek}`)"
              v-bind:alt="recept.nazev"
              class
            />
          </div>
          <div class="col-md-9 col-8">
            <h4 class>{{ recept.nazev }}</h4>
            <p class>{{ recept.kratky }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="menu container light-green">
      <div class="row d-flex">
        <button
          v-on:click="hratZnovu"
          class="col-4 flex-fill border text-center dark-green font-weight-bold"
          to="/hra2"
        >
          Hrát znovu
        </button>

        <router-link
          class="col-4 flex-fill border text-center dark-green font-weight-bold"
          to="/vyhledavani"
          >Vyhledávání receptů</router-link
    >-->
    <!-- </div>
    </div>-->
  
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
</style>
