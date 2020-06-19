<template>
  <div class="okno">
    <div id="police">
      <div id="jidlo">
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
      <img src="./../assets/ikony/shelf-1.svg" />
    </div>
    <div id="vysledek">
      <div v-if="konecHry">
        <p>{{ vysledek }}</p>
        <button v-on:click="zacitHru">Hrát znovu?</button>
      </div>
      <div id="prehled" v-else>
        <p id="body">Počet bodů: {{ pocetBodu }}</p>
        <p id="chyby">Počet chyb: {{ pocetChyb }}</p>
        <div id="minutka">Zbývá ti {{ minutka }} vteřin</div>
        <!-- vyřešit sklonovani -->
      </div>
    </div>
  </div>
</template>

<script>
import ikony from "./../assets/ikony.js";
export default {
  data() {
    return {
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
      if (!this.konecHry) {
        if (this.jidlo1.zdrave) {
          this.pocetBodu++;
        } else {
          this.pocetChyb++;
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
      this.pocetBodu = 0;
      this.pocetChyb = 0;
      this.konecHry = false;
      this.vratIkonu1();
      this.vratIkonu2();
      this.vratIkonu3();
      this.vratIkonu4();
      this.pohybujIkonou1();
      this.pohybujIkonou2();
      this.pohybujIkonou3();
      this.pohybujIkonou4();
      this.odectiSekundu();
      setTimeout(this.citacCasu, 20000);
    },
  },

  created() {
    this.zacitHru();
  },
};
</script>

<style>
#police {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  width: 80vw;
}

#police > img {
  width: 80vw;
  height: 80vh;
}

#jidlo {
  width: 80vw;
  display: flex;
  position: absolute;
  top: 100px;
}
/* na mobilu je nad polici velky prostor - kvuli tomu vlastnost top - vyresit */

.ikonaJidla {
  width: 20%;
  height: auto;
  position: absolute;
  display: flex;
  justify-content: center;
}

.ikonaJidla > img {
  max-width: 100%;
}

#ikona1 {
  left: 0;
}

#ikona2 {
  left: 25%;
}

#ikona3 {
  left: 50%;
}

#ikona4 {
  left: 75%;
}

@media (min-width: 700px) {
  #jidlo {
    top: 0;
  }
  .ikonaJidla {
    width: 25%;
    max-height: 80px;
  }
  .ikonaJidla > img {
    width: 80px;
    height: 80px;
  }
}

@media (min-width: 1000px) {
  #jidlo {
    width: 40vw;
  }
}

#vysledek {
  border: 2px solid blue;
  font-size: 30px;
  padding-right: 30px;
  padding-left: 30px;
  font-weight: bold;
}

#body {
  color: green;
}

#chyby {
  color: red;
}

#prehled {
  position: relative;
}

#minutka {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 5px;
  font-size: 30px;
  font-weight: bold;
  color: blue;
}
</style>
