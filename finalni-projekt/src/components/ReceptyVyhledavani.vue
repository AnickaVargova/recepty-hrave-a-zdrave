<template>
  <div>
    <div v-for="(recept, index) in vybraneRecepty" v-bind:key="index">
     
        <div class="zacatek">
          <div class="obrazek">
           <router-link to="/detail">
          <img
            v-bind:src="require(`../assets/images/${recept.obrazek}`)"
            class="align-self-center mr-3 obrazek img-fluid rounded"
          />
        </router-link>
        </div>
          <div id="recept">
            <router-link to="/detail"><h3>{{ recept.nazev }}</h3> </router-link>
            <p>{{ recept.kratky }}</p>
          </div>

        </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ["vybraneRecepty"],
  data() {
    return {};
  },
};
</script>

<style>

.zacatek {
  display: flex;
  border: 2px solid black;
  margin: 5px;
  height: 20%;
}

.zacatek .obrazek {
  flex-basis: 15%;
  width: 100%;
  object-fit: fill;
  margin: 0;
}

.recept{
  display: block;
}

/* img {
  width: 100%;
  object-fit: cover;
} */
</style>
