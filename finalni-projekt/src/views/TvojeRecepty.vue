<template>
  <div class="okno bg img-fluid position-relative">
    <div class="container  hlavni2">
      <h2 class="pt-4 m-0 mas-chut">Máš chuť na tato jídla:</h2>
    </div>

    <div class="container">
      <div class="row">
        <div
          v-for="(recept, index) in vybraneRecepty"
          v-bind:key="index"
          
          class="detail col-12 col-md-6 col-lg-3"
        >
          <router-link to="/detail">
            <div class="white">
              <h3 class="dark-green text-center text-decoration-none pt-2">
                {{ recept.nazev }}
              </h3>
              <div class="media d-flex align-items-center">
                <div class="media-body">
                  <p class="text-dark ml-2 mp-2">{{recept.kratky}}</p>
                </div>

                <img
                  v-bind:src="require(`../assets/images/${recept.obrazek}`)"
                  class="align-self-center mr-3 obrazek img-fluid rounded"
                />
              </div>
            </div>
          </router-link>
        </div>

        <!-- <div class="detail col-12 col-md-6 col-lg-3">
          <router-link to="/detail">
            <div class="white">
              <h3 class="dark-green text-center text-decoration-none pt-2">Název receptu</h3>
              <div class="media d-flex align-items-center">
                <div class="media-body">          
                  <p class="text-dark ml-2 mp-2">Tady bude začátek receptu, který se po nějaké době schová...</p>
                </div>
                
                <img src="./../assets/images/kurecinakari.jpg"  class="align-self-center mr-3 obrazek img-fluid rounded"/>
               
              </div>
              
            </div>
          </router-link>
        </div>
      </router-link>
    </div>

    <div class="col-12 col-md-6 col-lg-4">
      <router-link to="/detail">
        <div class="white">
          <h3 class="dark-green text-center text-decoration-none pt-2">Název receptu</h3>
          <div class="media d-flex align-items-center">
            <div class="media-body">
              <p
                class="text-dark ml-2 mp-2"
              >Tady bude začátek receptu, který se po nějaké době schová...</p>
            </div>
          </router-link>
        </div>-->

        <!-- <div class="detail col-12 col-md-6 col-lg-3">
          <router-link to="/detail">
            <div class="white">
              <h3 class="dark-green text-center text-decoration-none pt-2">
                Název receptu
              </h3>
              <div class="media d-flex align-items-center">
                <div class="media-body">
                  <p class="text-dark ml-2 mp-2">
                    Tady bude začátek receptu, který se po nějaké době schová...
                  </p>
                </div>

                <img
                  src="./../assets/images/kurecinakari.jpg"
                  class="align-self-center mr-3 obrazek img-fluid rounded"
                />
              </div>
            </div>
          </router-link>
        </div> -->
      </div>
    </div>
    <div class="menu container light-green">
      <div class="row d-flex">
        <button
          v-on:click="zpet"
          class="col-4 flex-fill border text-center dark-green font-weight-bold"
        >
          Zpět
        </button>
        <!-- <router-link
          class="col-4 flex-fill border text-center dark-green font-weight-bold"
          to="/"
          >Zpět</router-link -->
        <!-- > -->
        <button
          v-on:click="hratZnovu"
          class="col-4 flex-fill border text-center dark-green font-weight-bold"
          to="/hra2"
          >Hrát znovu</button>
        >
        <!-- <router-link
          class="col-4 flex-fill border text-center dark-green font-weight-bold"
          to="/hra2"
          >Hraj znovu</router-link
        > -->
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
import Hra2 from "./Hra2.vue";
export default {
  props: ["vybraneRecepty","vybrano"],
  methods: {
    zpet(){
      this.$emit('chciZpet');
    },
    hratZnovu(){
      this.$emit('hratZnovu');
    }
  }
  // data(){
  //   return
  // },

  // created(){
  //   console.log(this.vybraneRecepty);
  // }
};
</script>

<style>
.mas-chut{
  background-color: white;
  font-weight: 600;
  color: green;
  box-shadow: 10px 10px 38px 0px rgba(0,0,0,0.9);
  border:darkgrey;
  border-radius: 10px;
}

@media(min-width:1000px){
  .bile-pozadi {
    width: 200px;
    height: 150px;
  }
}

@media(max-width: 1000px){
  .bile-pozadi{
    width: 150px;
    height: 100px;
  }
}

.bile-pozadi{
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
