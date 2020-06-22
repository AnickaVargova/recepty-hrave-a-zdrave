<template>
  <div>
    <div v-for="(recept, index) in vybraneRecepty" v-bind:key="index">
      
        <div class="row bila recept-item overflow-hidden">
          <div class="col-md-3 col-4 p-0">
            <img
              v-on:click="prejdiNaDetail(index)"
              v-bind:src="require(`../assets/images/${recept.obrazek}`)"
              v-bind:alt="recept.nazev"
              class=""
            />
          </div>
          <div class="col-md-9 col-8 " v-on:click="prejdiNaDetail(index)">
            <h4 class="mt-2">{{ recept.nazev }}</h4>
            <p class="">{{ recept.kratky }}</p>
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
@media(max-width: 600px){
.bila{
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.1);
  height: 150px;
  cursor: pointer;
}
.recept-item img {
  width: 100%;
  display: block;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 0 0 8px;
}

}

@media(min-width:600px) {
  .bila{
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.1);
  height: 140px;
  cursor: pointer;
}
.recept-item img {
  width: 100%;
  display: block;
  height: 140px;
  object-fit: cover;
  border-radius: 10px 0 0 8px;
}

.bila h4{
  margin: 10px auto;
}
}


</style>
