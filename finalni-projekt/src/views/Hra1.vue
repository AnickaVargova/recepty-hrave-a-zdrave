<template>
  <div class="pozadi overflow-hidden col-lg-6 mx-auto mt-md-4 mt-5 pt-5">
    <div class="instrukce" v-if="ukazInstrukce">
      <p>Kliknutím na zdravé jídlo se ti přičte bod.</p>
      <button class="btn btn-sm" @click="stiskOK">Zacni hrát</button>
    </div>

    <router-link to="/">
      <button id="zpet-hra1" class="mt-4 mb-0 ml-lg-2">
        <img src="./../assets/ikony/arrow.png" id="zpet" />
      </button>
    </router-link>

    <div class="police mx-auto">
      <div class="jidlo">
        <div
          class="ikonaJidla"
          id="ikona1"
          v-bind:style="{ top: `${jidlo1.posunOsaY}px` }"
          v-on:click="priKliknuti1"
        >
          <img
            v-bind:src="require(`./../assets/ikony/${jidlo1.ikona}`)"
            alt="jídlo"
          />
        </div>
        <div
          class="ikonaJidla"
          id="ikona2"
          v-bind:style="{ top: `${jidlo2.posunOsaY}px` }"
          v-on:click="priKliknuti2"
        >
          <img
            v-bind:src="require(`./../assets/ikony/${jidlo2.ikona}`)"
            alt="jídlo"
          />
        </div>
        <div
          class="ikonaJidla"
          id="ikona3"
          v-bind:style="{ top: `${jidlo3.posunOsaY}px` }"
          v-on:click="priKliknuti3"
        >
          <img
            v-bind:src="require(`./../assets/ikony/${jidlo3.ikona}`)"
            alt="jídlo"
          />
        </div>
        <div
          class="ikonaJidla"
          id="ikona4"
          v-bind:style="{ top: `${jidlo4.posunOsaY}px` }"
          v-on:click="priKliknuti4"
        >
          <img
            v-bind:src="require(`./../assets/ikony/${jidlo4.ikona}`)"
            alt="jídlo"
          />
        </div>
      </div>
    </div>
    <div class="hlasky">
      <div
        class="vysledek col-12 mx-auto m-0 d-flex align-items-center pt-2"
        v-if="konecHry"
      >
        <h2 class="vysledek-text">{{ vysledek }}</h2>
        <button
          style="margin: 0 0 8px 0 "
          class="btn btn-primary"
          v-on:click="zacitHru"
        >
          Hrát znovu?
        </button>
      </div>

      <div class="prehled" v-else>
     
        <h3 class="bod mt-1">Počet bodů: {{ pocetBodu - pocetChyb }}</h3>
       
        <p class="minutka">Zbývající počet vteřin: {{ minutka }}</p>
        
      </div>
    </div>
  </div>
</template>

<script>
import ikony from "./../assets/ikony.js";
export default {
  data() {
    return {
      ukazInstrukce: true,
      ikonyJidla: ikony,
      jidlo1: null,
      jidlo2: null,
      jidlo3: null,
      jidlo4: null,
      pocetBodu: 0,
      pocetChyb: 0,
      interval1: null,
      interval2: null,
      interval3: null,
      interval4: null,
      konecHry: false,
      minutka: 20,
      intervalMinutka: null,
    };
  },
  computed: {
    vysledek() {
      return `Výborně! Tvůj počet bodů: ${this.pocetBodu}`;
    },
  },
  methods: {
    vratIkonu() {
      return this.ikonyJidla[
        Math.floor(Math.random() * this.ikonyJidla.length)
      ];

    },
   

    posunIkonu1() {
      if (this.jidlo1.posunOsaY < 600) {
        this.jidlo1.posunOsaY += Math.random() * 1.8; //rychlost se zvysi nasobenim, 1 je minimalni, 2 je maximalni
      } else {
        this.jidlo1=this.vratIkonu();
        this.jidlo1.posunOsaY = 0;
      }
    },

    posunIkonu2() {
      if (this.jidlo2.posunOsaY < 600) {
        this.jidlo2.posunOsaY += Math.random() * 1.8;
      } else {
        this.jidlo2=this.vratIkonu();
        this.jidlo2.posunOsaY = 0;
      }
    },
    posunIkonu3() {
      if (this.jidlo3.posunOsaY < 600) {
        this.jidlo3.posunOsaY += Math.random() * 1.8;
      } else {
        this.jidlo3=this.vratIkonu();
        this.jidlo3.posunOsaY = 0;
      }
    },
    posunIkonu4() {
      if (this.jidlo4.posunOsaY < 600) {
        this.jidlo4.posunOsaY += Math.random() * 1.8;
      } else {
        this.jidlo4=this.vratIkonu();
        this.jidlo4.posunOsaY = 0;
      }
    },

    //na pocitaci jidlo konci zbytecne vysoko - vyresit

    sekundaDolu() {
      this.minutka--;
    },

    odectiSekundu() {
      this.intervalMinutka = setInterval(this.sekundaDolu, 1000);
    },

    pohybujIkonou1() {
      this.interval1 = setInterval(this.posunIkonu1, 5);
      //na 5 nesahat, jinak je pohyb trhany
    },
    pohybujIkonou2() {
      this.interval2 = setInterval(this.posunIkonu2, 5);
    },
    pohybujIkonou3() {
      this.interval3 = setInterval(this.posunIkonu3, 5);
    },
    pohybujIkonou4() {
      this.interval4 = setInterval(this.posunIkonu4, 5);
    },

    priKliknuti1() {
      console.log(this.ukazInstrukce);
      if (!this.konecHry) {
        if (this.jidlo1.zdrave) {
          this.pocetBodu++;
        } else {
          this.pocetChyb;
        }
        this.jidlo1=this.vratIkonu();
        this.jidlo1.posunOsaY = 0;
      }
    },

    priKliknuti2() {
      console.log("klik2");
      if (!this.konecHry) {
        if (this.jidlo2.zdrave) {
          this.pocetBodu++;
        } else {
          this.pocetChyb++;
        }
        this.jidlo2=this.vratIkonu();
        this.jidlo2.posunOsaY = 0;
      }
    },

    priKliknuti3() {
      console.log("klik3");
      if (!this.konecHry) {
        if (this.jidlo3.zdrave) {
          this.pocetBodu++;
        } else {
          this.pocetChyb++;
        }
        this.jidlo3=this.vratIkonu();
        this.jidlo3.posunOsaY = 0;
      }
    },

    priKliknuti4() {
      console.log("klik4");
      if (!this.konecHry) {
        if (this.jidlo4.zdrave) {
          this.pocetBodu++;
        } else {
          this.pocetChyb++;
        }
        this.jidlo4=this.vratIkonu();
        this.jidlo4.posunOsaY = 0;
      }
    },

    citacCasu() {
      clearInterval(this.interval1);
      clearInterval(this.interval2);
      clearInterval(this.interval3);
      clearInterval(this.interval4);
      clearInterval(this.intervalMinutka);
      this.minutka = 20;
      this.konecHry = true;
    },

    zacitHru() {
      // this.ukazInstrukce=true;
      this.pocetBodu = 0;
      this.pocetChyb = 0;
      this.konecHry = false;
      this.jidlo1 = this.vratIkonu();
      this.jidlo2 = this.vratIkonu();
      this.jidlo3 = this.vratIkonu();
      this.jidlo4 = this.vratIkonu();
      this.pohybujIkonou1();
      this.pohybujIkonou2();
      this.pohybujIkonou3();
      this.pohybujIkonou4();
      this.odectiSekundu();
      setTimeout(this.citacCasu, 20000);
    },

    stiskOK() {
      this.ukazInstrukce = false;
      this.zacitHru();
    },
  },

  created() {
    this.pocetBodu = 0;
    this.pocetChyb = 0;
    this.konecHry = false;
    this.jidlo1 = this.vratIkonu();
    this.jidlo2 = this.vratIkonu();
    this.jidlo3 = this.vratIkonu();
    this.jidlo4 = this.vratIkonu();
  },
};
</script>

<style>
.hlasky{
  z-index: 3;
}
.prehled{

  background: white;
  
  z-index: 4;
  border-radius: 8px;
}
.instrukce {
  position: absolute;
  width: 300px;
  height: 70px;
  top: calc(50% - 75px);
  left: calc(50% - 150px);
  z-index: 1;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.1);
  padding:5px;
  color: green;
  
}
.vysledek-text {
  font-size: 25px;
}
#zpet-hra1 {
  z-index: 1;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  left: 0px;
  top: 0px;
  border-color: none;
  border-radius: 7px;
  border: none;
}

#zpet-hra1:hover,
#zpet-hra1:active {
  background-color: green;
  border-radius: 7px;
}
@media(min-width: 448px){
.prehled h3,
.prehled p {
  font-size: 20px;
  padding:15px 10px;
  margin: 3px;
 
}

.prehled {
  display: flex;
  justify-content: space-between;
}
}
/*.prehled {
  z-index: 3 !important;
  background-color: white;
}*/

.prehled {
  z-index: 3;
  font-weight: bold;
  background: white !important;
  position: relative;
  bottom:0;
  justify-content: space-between;
  border-radius: 8px;
}

.prehled h3{
  left: 20px
}

.prehled p{
  right: 20px;
}

@media(max-width: 448px){
.prehled .bod,
.prehled p {
  font-size: 20px;
  max-width: 150px;  
  display: flex;
}
.prehled h3{
  padding: 25px 0;
}

.prehled p{
  padding: 25px 0 0 0;
}

}
.shelf {
  /*  z-index: 1;*/
  display: block;
}
.police {
  /*display: flex;
  justify-content: center;*/
  position: relative;
  max-width: 512px;
  /*width: 80vw;*/
}

/*#police > img {
  width: 80vw;
  height: 80vh;
}
*/
.jidlo {
  /* z-index: 2;*/
  position: relative;
  background-image: url("./../assets/ikony/shelf.png");
  background-repeat: no-repeat;
  padding-bottom: 100%;
  width: 100%;
  background-size: auto 100%;
}
/* na mobilu je nad polici velky prostor - kvuli tomu vlastnost top - vyresit */

.ikonaJidla {
  position: absolute;
  display: flex;
  justify-content: center;
  margin: 3px;
  z-index: 0;
}

#ikona1 {
  left: 8%;
}

#ikona2 {
  left: 30%;
}

#ikona3 {
  right: 30%;
}

#ikona4 {
  right: 8%;
}

.vysledek {
  z-index: 3;
  font-weight: bold;
  background: white;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
}

.bod {
  color: green;
  font-size: 20px;
  font-weight: bold;
}

.chyby {
  color: red;
}


.minutka {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 5px;
  font-size: 30px;
  font-weight: bold;
  color: blue;
}
</style>
