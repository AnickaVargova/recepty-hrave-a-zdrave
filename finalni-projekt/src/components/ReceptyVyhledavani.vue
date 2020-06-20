<template>
  <div>
    <div v-for="(recept, index) in vybraneRecepty" v-bind:key="index">
      
        <div class="row bila">
          <div class="col-md-3 ">
            <img
              v-on:click="prejdiNaDetail(index)"
              v-bind:src="require(`../assets/images/${recept.obrazek}`)"
              v-bind:alt="recept.nazev"
              class=" obrazek-vyhledavani img-fluid"
            />
          </div>
          <div class="col-md-9" v-on:click="prejdiNaDetail(index)">
            <h3>{{ recept.nazev }}</h3>
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
  methods: {
    prejdiNaDetail(index) {
      this.$emit("prejdiNaDetail", index);
    }
  }
};
</script>

<style>
.bila{
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.2);
}

.obrazek-vyhledavani{
  max-height: 100px;
}
</style>
