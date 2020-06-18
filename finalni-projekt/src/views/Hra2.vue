<template>
  <div class="okno">
    <h2>Na co máš chuť?</h2>
    <div class="ikony">
      <div
        class="obalObrazek"
        v-for="(item, index) in ikonyZakladni"
        v-bind:key="index"
        v-on:click="klikJidlo(index)"
        v-bind:class="{ zvyraznene: item.aktivni }"
      >
        <img v-bind:src="require(`./../assets/ikony/${item.ikona}`)" />
      </div>
    </div>

    <button class="hotovo" v-on:click="srovnejPole">
      <router-link to="/tvojeRecepty">Hotovo</router-link>
    </button>
  </div>
</template>

<script>
import ikonyZakladni from "./../assets/ikonyZakladni.js";
import recepty from "./../assets/data.js";

export default {
  data() {
    return {
      ikonyZakladni: ikonyZakladni,
      vybranyIndex: 0,
      vybraneJidlo: ikonyZakladni[this.vybranyIndex],
      vybranePole: [],
      recepty: recepty,
    };
  },
  methods: {
    klikJidlo(index) {
      this.vybranyIndex = index;
      this.vybraneJidlo = this.ikonyZakladni[this.vybranyIndex];
      this.vybraneJidlo.aktivni = !this.vybraneJidlo.aktivni;
      if (this.vybraneJidlo.aktivni) {
        this.vybranePole.push(this.vybraneJidlo.klicoveSlovo);
      }
    },

    srovnejPole() {
      console.log(this.vybranePole);
      // for (let jidlo of this.recepty) {
      //   jidlo.shody = 0;
      // }

      for (let item1 of this.vybranePole) {
        for (let item2 of this.recepty) {
          item2.shody=0;
          if (item2.vyhledavaniCisla.includes(item1)) {
            item2.shody++;
          }
        }
      }

      this.recepty.sort((a, b) => b.shody - a.shody);
      let vybraneRecepty = [];

      for (let i = 0; i < 5; i++) {
        if (recepty[i] !== undefined) {
          vybraneRecepty.push(recepty[i]);
        }
      }
      console.log(vybraneRecepty);
      this.vybranePole = [];
      console.log(this.vybranePole);
    },
  },
 
};
</script>

<style>
.ikony {
  border: 2px solid black;
  height: 60vh;
  width: 60vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.obalObrazek {
  flex-basis: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid lightgrey;
}

.obalObrazek:hover {
  border: 4px solid green;
}

.zvyraznene {
  border: 4px solid green;
  background-color: lightgreen;
}

.hotovo {
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
}
</style>
