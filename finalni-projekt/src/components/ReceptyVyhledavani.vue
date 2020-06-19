<template>
  <div>
    <div v-for="(recept, index) in vybraneRecepty" v-bind:key="index">
      <div class="zacatek">
        <div class="obrazek">
          <img
            v-on:click="prejdiNaDetail(index)"
            v-bind:src="require(`../assets/images/${recept.obrazek}`)"
            v-bind:alt="recept.nazev"
            class="align-self-center mr-3 obrazek img-fluid rounded"
          />
        </div>
        <div id="recept" v-on:click="prejdiNaDetail(index)">
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
    },
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

.recept {
  display: block;
}

</style>
