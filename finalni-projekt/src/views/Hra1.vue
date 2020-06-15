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
      <p>Počet bodů: {{ pocetBodu }}</p>
      <p>Počet chyb: {{ pocetChyb }}</p>
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
    };
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
        this.jidlo1.posunOsaY += Math.floor(Math.random() * 10);
      } else {
        this.vratIkonu1();
        this.jidlo1.posunOsaY = 0;
      }
    },

    posunIkonu2() {
      if (this.jidlo2.posunOsaY < 220) {
        this.jidlo2.posunOsaY += Math.floor(Math.random() * 10);
      } else {
        this.vratIkonu2();
        this.jidlo2.posunOsaY = 0;
      }
    },
    posunIkonu3() {
      if (this.jidlo3.posunOsaY < 220) {
        this.jidlo3.posunOsaY += Math.floor(Math.random() * 10);
      } else {
        this.vratIkonu3();
        this.jidlo3.posunOsaY = 0;
      }
    },
    posunIkonu4() {
      if (this.jidlo4.posunOsaY < 220) {
        this.jidlo4.posunOsaY += Math.floor(Math.random() * 10);
      } else {
        this.vratIkonu4();
        this.jidlo4.posunOsaY = 0;
      }
    },

    pohybujIkonou1() {
      setInterval(this.posunIkonu1, 100);
    },
    pohybujIkonou2() {
      setInterval(this.posunIkonu2, 100);
    },
    pohybujIkonou3() {
      setInterval(this.posunIkonu3, 100);
    },
    pohybujIkonou4() {
      setInterval(this.posunIkonu4, 100);
    },

    priKliknuti1() {
      if (this.jidlo1.zdrave) {
        this.pocetBodu++;
      } else {
        this.pocetChyb++;
      }
    },
    priKliknuti2() {
      if (this.jidlo2.zdrave) {
        this.pocetBodu++;
      } else {
        this.pocetChyb++;
      }
    },
    priKliknuti3() {
      if (this.jidlo3.zdrave) {
        this.pocetBodu++;
      } else {
        this.pocetChyb++;
      }
    },
    priKliknuti4() {
      if (this.jidlo4.zdrave) {
        this.pocetBodu++;
      } else {
        this.pocetChyb++;
      }
    },
  },

  created() {
    this.vratIkonu1();
    this.vratIkonu2();
    this.vratIkonu3();
    this.vratIkonu4();
    this.pohybujIkonou1();
    this.pohybujIkonou2();
    this.pohybujIkonou3();
    this.pohybujIkonou4();
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
}
</style>
