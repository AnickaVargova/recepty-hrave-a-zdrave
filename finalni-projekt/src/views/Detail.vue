<template>
  <div class="okno container">
    <div class="row justify-content-center mt-5">
      <div class="nadpis col-md-6 pozadi-detailu">
        <h2 class="">{{ vybraneRecepty[i].nazev }}</h2>

        <div class="fotka">
          <img
            v-bind:src="require(`../assets/images/${vybraneRecepty[i].obrazek}`)"
            v-bind:alt="vybraneRecepty[i].nazev"
            id="fotka"
            class="img-fluid rounded"
          />
        </div>
      

      <h3 class="postup">Postup</h3>
      <div class="navod">
        <p>{{ vybraneRecepty[i].postup }}</p>
      </div>
      <div>
        <h3 class=" ingredience">Ingredience</h3>
      </div>
      <div class="">
        <p class="porce">Počet porcí: {{ vybraneRecepty[i].pocetPorci }}</p>
        <ul>
          <li
            v-for="(ingredience, index) in vybraneRecepty[i].ingredience"
            v-bind:key="index"
          >{{ ingredience }}</li>
        </ul>
      </div>

      <div class="menu container">
        <div class="row d-flex">
          <button 
            class="nav-button col-4 flex-fill text-center font-weight-bold"
            v-on:click="zpetNaVyber"
          >Zpět</button>
          <!--
          <router-link
          class="nav-button col-4 flex-fill text-center font-weight-bold"
          to="/hra2"
          >Vyber recept</router-link
        >
        <router-link
          class="nav-button col-4 flex-fill text-center font-weight-bold"
          to="/vyhledavani"
          >Kategorie</router-link
          >-->
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ["vybraneRecepty", "i"],
  methods: {
    zpetNaVyber() {
      this.$emit("zpetNaVyber");
    }
  }
};
</script>

<style>
.nav-button{
  color: white;
  background-color: green;
  position: absolute;
  bottom: 0;
  font-weight: normal;
  
}

h3{
  color: green;
  padding: 20px;
  font-size: 20px !important;
}

.pozadi-detailu{
  background:rgba(255, 255, 255, 1);
  border: 2px solid green;
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  

}
.fotka img {
  width: 100%;
  display: block;
  height: 150px;
  object-fit: cover;
  border-radius: 7px;
}


.hlavni {
  position: relative;
}

.menu {
  margin-top: 40px auto;
  position: relative;
  bottom: 0;
}



.navod {
  margin: 0 auto;
  padding: 0 auto;
}

.postup {
  padding: 16px 0 8px 0;
  border-bottom: 3px solid green;
}

.ingredience {
  border-bottom: 3px solid green;
  padding: 0px 0 8px 0;
}

.porce {
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.odstavec {
  margin: 30px auto;
  display: block;
}

h2 {
  margin: auto;
  padding: 20px;
  text-align: center;
  color: green;
  font-size: 30px;
}
</style>
