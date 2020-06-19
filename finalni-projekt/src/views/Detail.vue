<template>
  <div class="hlavni">
    <div class="container light-green padding-bottom">
      <div class="nadpis">
        <h2 class="font-size-30 dark-green">{{ vybraneRecepty[i].nazev }}</h2>
      </div>
      <div class="fotka">
        <img
          v-bind:src="require(`../assets/images/${vybraneRecepty[i].obrazek}`)"
          v-bind:alt="vybraneRecepty[i].nazev"
          id="fotka"
          class="img-fluid rounded"
        />
      </div>
    </div>
    <div class="container padding-bottom">
      <h3 class="font-size-20 dark-green postup">Postup</h3>
      <div class="navod">
        <p>{{ vybraneRecepty[i].postup }}</p>
      </div>
      <div>
        <h3 class="font-size-20 dark-green ingredience">Ingredience</h3>
      </div>
      <div class="bila">
        <p class="porce">Počet porcí: {{ vybraneRecepty[i].pocetPorci }}</p>
        <ul>
          <li
            v-for="(ingredience, index) in vybraneRecepty[i].ingredience"
            v-bind:key="index"
          >
            {{ ingredience }}
          </li>
        </ul>
      </div>
    </div>
    <div class="menu container light-green">
      <div class="row d-flex">
        <router-link
          class="col-4 flex-fill border text-center dark-green font-weight-bold"
          to="/tvojeRecepty"
          >?Zpět?</router-link
        >
        <router-link
          class="col-4 flex-fill border text-center font-size-12 dark-green font-weight-bold"
          to="/hra2"
          >Vyber recept</router-link
        >
        <router-link
          class="col-4 flex-fill border text-center dark-green font-weight-bold"
          to="/vyhledavani"
          >Kategorie</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["vybraneRecepty", "i"],
};
</script>

<style>
.hlavni {
  position: relative;
}
.menu {
  margin-top: 40px auto;
  position: relative;
  bottom: 0;
}

.font-size-12 {
  font-size: 12px;
}

.border {
  border: 3px solid black;
}
.navod {
  margin: 0 auto;
  padding: 0 auto;
}

.postup {
  padding: 16px 0 8px 0;
  border-bottom: 3px solid darkgreen;
}

.ingredience {
  border-bottom: 3px solid darkgreen;
  padding: 0px 0 8px 0;
}

.padding-bottom {
  padding-bottom: 40px;
}
.padding-top {
  padding-top: 20px;
}
.light-green {
  background-color: lightgreen;
}

.porce {
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.font-size-20 {
  font-size: 20px;
}

.odstavec {
  margin: 30px auto;
  display: block;
}

.font-size-30 {
  font-size: 30px;
}

.dark-green {
  color: darkgreen;
}
h2 {
  margin: auto;
  padding: 20px;
  text-align: center;
  display: block;
}

</style>
