<template>
  <div class="pozadi overflow-hidden col-lg-6 mx-auto mt-lg-4 mt-4 pt-5">
    <div class="instrukce" v-if="ukazInstrukce">
      <p class="mb-3 instrukce-text p-2">
        Kliknutím na zdravé jídlo získáš bod, kliknutím na nezdravé jídlo bod
        ztratíš.
      </p>
      <button class="mx-auto btn btn-primary btn-hra1" @click="stiskOK">
        ZAČNI HRÁT
      </button>
    </div>
    <div class="cover" v-if="ukazInstrukce"></div>
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
          v-bind:style="{ top: `${jidlo[0].posunOsaY}px` }"
          v-on:click="priKliknuti(0)"
        >
          <img
            v-bind:src="require(`./../assets/ikony/${jidlo[0].ikona}`)"
            alt="jídlo"
          />
        </div>
        <div
          class="ikonaJidla"
          id="ikona2"
          v-bind:style="{ top: `${jidlo[1].posunOsaY}px` }"
          v-on:click="priKliknuti(1)"
        >
          <img
            v-bind:src="require(`./../assets/ikony/${jidlo[1].ikona}`)"
            alt="jídlo"
          />
        </div>
        <div
          class="ikonaJidla"
          id="ikona3"
          v-bind:style="{ top: `${jidlo[2].posunOsaY}px` }"
          v-on:click="priKliknuti(2)"
        >
          <img
            v-bind:src="require(`./../assets/ikony/${jidlo[2].ikona}`)"
            alt="jídlo"
          />
        </div>
        <div
          class="ikonaJidla"
          id="ikona4"
          v-bind:style="{ top: `${jidlo[3].posunOsaY}px` }"
          v-on:click="priKliknuti(3)"
        >
          <img
            v-bind:src="require(`./../assets/ikony/${jidlo[3].ikona}`)"
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
          HRÁT ZNOVU?
        </button>
      </div>

      <div class="prehled d-flex align-items-baseline" v-else>
        <h3 class="bod mt-1 mb-0">Počet bodů: {{ pocetBodu - pocetChyb }}</h3>

        <p class="minutka mt-1 mb-0">Zbývající počet vteřin: {{ minutka }}</p>
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
      jidlo: [],
      i: null,
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
      return `Výborně! Tvůj počet bodů: ${this.pocetBodu - this.pocetChyb}`;
    },
  },
  methods: {
    vratIkonu() {
      return this.ikonyJidla[
        Math.floor(Math.random() * this.ikonyJidla.length)
      ];
    },

    posunIkonu1() {
      if (this.jidlo[0].posunOsaY < 600) {
        this.jidlo[0].posunOsaY += Math.random() * 1.8;
      } else {
        this.jidlo[0] = this.vratIkonu();
        this.jidlo[0].posunOsaY = 0;
      }
    },

    posunIkonu2() {
      if (this.jidlo[1].posunOsaY < 600) {
        this.jidlo[1].posunOsaY += Math.random() * 1.8;
      } else {
        this.jidlo[1] = this.vratIkonu();
        this.jidlo[1].posunOsaY = 0;
      }
    },
    posunIkonu3() {
      if (this.jidlo[2].posunOsaY < 600) {
        this.jidlo[2].posunOsaY += Math.random() * 1.8;
      } else {
        this.jidlo[2] = this.vratIkonu();
        this.jidlo[2].posunOsaY = 0;
      }
    },
    posunIkonu4() {
      if (this.jidlo[3].posunOsaY < 600) {
        this.jidlo[3].posunOsaY += Math.random() * 1.8;
      } else {
        this.jidlo[3] = this.vratIkonu();
        this.jidlo[3].posunOsaY = 0;
      }
    },

    sekundaDolu() {
      this.minutka--;
    },

    odectiSekundu() {
      this.intervalMinutka = setInterval(this.sekundaDolu, 1000);
    },

    pohybujIkonou1() {
      this.interval1 = setInterval(this.posunIkonu1, 5);
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

    priKliknuti(id) {
      this.i = id;

      if (!this.konecHry) {
        if (this.jidlo[this.i].zdrave) {
          this.pocetBodu++;
        } else {
          this.pocetChyb++;
        }
        this.jidlo[this.i] = this.vratIkonu();
        this.jidlo[this.i].posunOsaY = 0;
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
      this.pohybujIkonou1();
      this.pohybujIkonou2();
      this.pohybujIkonou3();
      this.pohybujIkonou4();
      this.odectiSekundu();
      setTimeout(this.citacCasu, 20000);
      for (let i = 0; i < this.jidlo.length; i++) {
        this.jidlo[i].posunOsaY = 0;
      }
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
    for (let i = 0; i < 4; i++) {
      this.jidlo.push({});
    }

    for (let i = 0; i < this.jidlo.length; i++) {
      this.jidlo[i] = this.vratIkonu();
    }
  },

  beforeDestroy() {
    this.citacCasu();
    for (let i = 0; i < this.jidlo.length; i++) {
      this.jidlo[i].posunOsaY = 0;
    }
  },
};
</script>

<style>
.instrukce-text {
  font-weight: 600;
  font-size: 20px;
}
.btn-hra1 {
  max-width: 50%;
  max-height: 75%;
}
.hlasky {
  z-index: 3;
}
.prehled {
  z-index: 3;
  font-weight: bold;
  background: white !important;
  position: relative;
  bottom: 0x;
  justify-content: space-between;
  border-radius: 10px;
}

.prehled h3 {
  left: 20px;
}
.prehled p {
  right: 20px;
}
.instrukce {
  position: absolute;
  width: 400px;
  height: 200px;
  top: calc(50% - 100px);
  left: calc(50% - 200px);
  z-index: 6;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.1);
  padding: 15px;
  color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.cover {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(79, 83, 91, 0.7);
  z-index: 5;
  width: 100%;
  height: 100%;
}

#app .btn-info {
  background-color: green;

  margin: 10px;
  border-radius: 10px;
}
.vysledek-text {
  font-size: 25px;
}
#zpet-hra1 {
  z-index: 7;
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
  border-radius: 10px;
}
@media (min-width: 448px) {
  .prehled h3,
  .prehled p {
    font-size: 20px;
    padding: 15px 10px;
    margin: 3px;
  }

  .prehled {
    display: flex;
    justify-content: space-between;
  }
}

.prehled {
  z-index: 3;
  font-weight: bold;
  background: white !important;
  position: relative;
  bottom: 0;
  justify-content: space-between;
  border-radius: 10px;
}

.prehled h3 {
  left: 20px;
}

.prehled p {
  right: 20px;
}

@media (max-width: 448px) {
  .prehled .bod,
  .prehled p {
    font-size: 20px;
    max-width: 150px;
    display: flex;
  }
  .prehled h3 {
    padding: 25px 0;
  }

  .prehled p {
    padding: 25px 0 11px 0;
  }
}
.shelf {
  display: block;
}
.police {
  position: relative;
  max-width: 512px;
}

.jidlo {
  position: relative;
  background-image: url("./../assets/ikony/shelf.png");
  background-repeat: no-repeat;
  padding-bottom: 100%;
  width: 100%;
  background-size: auto 100%;
}

.ikonaJidla {
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 3px;
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
  border-radius: 10px;
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
  color: #f2913d;
}
</style>
