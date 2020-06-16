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
          <img v-bind:src="require(`./../assets/ikony/${jidlo1.ikona}`)" />
        </div>
        <div
          class="ikonaJidla"
          id="ikona2"
          v-bind:style="{ top: `${jidlo2.posunOsaY}px` }"
          v-on:click="priKliknuti2"
        >
          <img v-bind:src="require(`./../assets/ikony/${jidlo2.ikona}`)" />
        </div>
        <div
          class="ikonaJidla"
          id="ikona3"
          v-bind:style="{ top: `${jidlo3.posunOsaY}px` }"
          v-on:click="priKliknuti3"
        >
          <img v-bind:src="require(`./../assets/ikony/${jidlo3.ikona}`)" />
        </div>
        <div
          class="ikonaJidla"
          id="ikona4"
          v-bind:style="{ top: `${jidlo4.posunOsaY}px` }"
          v-on:click="priKliknuti4"
        >
          <img v-bind:src="require(`./../assets/ikony/${jidlo4.ikona}`)" />
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
        <div id="minutka">{{minutka}}</div>
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
      if (this.jidlo1.posunOsaY < 220) {
        this.jidlo1.posunOsaY += Math.random() * 1.5; //rychlost se zvysi nasobenim, 1 je minimalni, 2 je maximalni
      } else {
        this.vratIkonu1();
        this.jidlo1.posunOsaY = 0;
      }
    },

    posunIkonu2() {
      if (this.jidlo2.posunOsaY < 220) {
        this.jidlo2.posunOsaY += Math.random() * 1.5;
      } else {
        this.vratIkonu2();
        this.jidlo2.posunOsaY = 0;
      }
    },
    posunIkonu3() {
      if (this.jidlo3.posunOsaY < 220) {
        this.jidlo3.posunOsaY += Math.random() * 1.5;
      } else {
        this.vratIkonu3();
        this.jidlo3.posunOsaY = 0;
      }
    },
    posunIkonu4() {
      if (this.jidlo4.posunOsaY < 220) {
        this.jidlo4.posunOsaY += Math.random() * 1.5;
      } else {
        this.vratIkonu4();
        this.jidlo4.posunOsaY = 0;
      }
    },

    sekundaDolu(){
      this.minutka--;
    },

    odectiSekundu(){
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

#police img {
  height: 70vh;
}

#jidlo {
  max-width: 200px;
  height: 10vh;
  display: flex;
  margin-top: 20px;
  position: absolute;
  top: -10px;
  left: 40px;
}

#ikona1 {
  position: absolute;
}

#ikona2 {
  left: 60px;
  position: absolute;
}

#ikona3 {
  left: 120px;
  position: absolute;
}

#ikona4 {
  left: 180px;
  position: absolute;
}

#ikona5 {
  left: 240px;
  position: absolute;
}
.ikonaJidla {
  height: 50px;
  flex-basis: 20%;
}

.ikonaJidla img {
  max-height: 50px;
  object-fit: scale-down;
}

#vysledek {
  border: 2px solid blue;
  font-size: 20px;
  padding: 5px;
}

#body {
  color: green;
  font-size: 20px;
}

#chyby {
  color: red;
  font-size: 20px;
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
