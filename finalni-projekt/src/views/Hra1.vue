<template>
  <div class="pozadi overflow-hidden col-md-6 mx-auto mt-lg-5 mt-0">
    <div class="instrukce" v-if="ukazInstrukce">
      <p>Kliknutím na zdravé jídlo se ti přičte bod</p>
      <button @click="stiskOK">Zacni hrrraaaat</button>
    </div>

    <router-link to="/">
      <button id="zpet-hra1" class="mt-lg-4 mt-0 mb-0">
        <img src="./../assets/images/left-arrow.png" id="zpet" />
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
      <!--<p class="chyby">Počet chyb: {{ pocetChyb }}</p>-->

      <div class="prehled col-12 " v-else>
        <h3 class="body mt-1">Počet bodů: {{ pocetBodu - pocetChyb }}</h3>
        <p class="minutka">Zbývá ti {{ minutka }} vteřin</p>
      </div>
    </div>
  </div>

  <!--    <button class="rozcestnik"><router-link to="/" class="odkaz">DOMŮ</router-link></button>-->
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
      //dodelat funkci na sklonovani: bod, body, bodu
    },
  },
  methods: {
    vratIkonu1() {
      this.jidlo1 = this.ikonyJidla[
        Math.floor(Math.random() * this.ikonyJidla.length)
      ];
    },
    vratIkonu2() {
      this.jidlo2 = this.ikonyJidla[
        Math.floor(Math.random() * this.ikonyJidla.length)
      ];
    },
    vratIkonu3() {
      this.jidlo3 = this.ikonyJidla[
        Math.floor(Math.random() * this.ikonyJidla.length)
      ];
    },
    vratIkonu4() {
      this.jidlo4 = this.ikonyJidla[
        Math.floor(Math.random() * this.ikonyJidla.length)
      ];
    },

    posunIkonu1() {
      if (this.jidlo1.posunOsaY < 600) {
        this.jidlo1.posunOsaY += Math.random() * 1.8; //rychlost se zvysi nasobenim, 1 je minimalni, 2 je maximalni
      } else {
        this.vratIkonu1();
        this.jidlo1.posunOsaY = 0;
      }
    },

    posunIkonu2() {
      if (this.jidlo2.posunOsaY < 600) {
        this.jidlo2.posunOsaY += Math.random() * 1.8;
      } else {
        this.vratIkonu2();
        this.jidlo2.posunOsaY = 0;
      }
    },
    posunIkonu3() {
      if (this.jidlo3.posunOsaY < 600) {
        this.jidlo3.posunOsaY += Math.random() * 1.8;
      } else {
        this.vratIkonu3();
        this.jidlo3.posunOsaY = 0;
      }
    },
    posunIkonu4() {
      if (this.jidlo4.posunOsaY < 600) {
        this.jidlo4.posunOsaY += Math.random() * 1.8;
      } else {
        this.vratIkonu4();
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
        this.vratIkonu1();
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
        this.vratIkonu2();
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
        this.vratIkonu3();
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
        this.vratIkonu4();
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
    this.vratIkonu1();
    this.vratIkonu2();
    this.vratIkonu3();
    this.vratIkonu4();
  },
};
</script>

<style>
.instrukce {
  position: absolute;
  width: 400px;
  height: 150px;
  top: calc(50% - 75px);
  left: calc(50% - 200px);
  z-index: 100;
  background-color: lightgreen;
}
.vysledek-text {
  font-size: 25px;
}
#zpet-hra1 {
  z-index: 1;

  background-color: white;
  position: absolute;
  left: 3px;
  top: 8px;
  background-color: tan;
  border-radius: 7px;
  border: none;
}

#zpet-hra1:hover,
#zpet-hra1:active {
  background-color: green;
  border-radius: 7px;
}

.prehled h3,
.prehled p {
  font-size: 20px;
  padding: 8px;
  justify-content: space-between;
  flex-basis: 50%;
  margin: 3px;
}
.prehled {
  display: flex;
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
  /* background-image: url("./../assets/ikony/shelf.png"); */
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
  z-index: 2;
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

.body {
  color: green;
}

.chyby {
  color: red;
}

.prehled {
  /* display: flex;
  flex-basis: 100%;
  flex-shrink: 0;
  flex-grow: 1;*/
  z-index: 3;
  background-color: white;
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
