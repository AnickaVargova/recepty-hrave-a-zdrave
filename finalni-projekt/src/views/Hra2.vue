<template>
  <div class=" bg img-fluid okno">
    <tvojeRecepty
      v-if="vybrano"
      v-bind:vybraneRecepty="vybraneRecepty"
      v-bind:vybrano="vybrano"
      v-on:chciZpet="zviditelni"
      v-on:hratZnovu="hratZnovu"
    />
    <!-- tlacitko hrat znovu nefunguje, jak ma -->

    <div v-else>
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
        Hotovo
      </button>
    </div>
  </div>
</template>

<script>
import ikonyZakladni from "./../assets/ikonyZakladni.js";
import recepty from "./../assets/data.js";
import TvojeRecepty from "./TvojeRecepty.vue";

export default {
  components: {
    tvojeRecepty: TvojeRecepty,
  },
  data() {
    return {
      ikonyZakladni: ikonyZakladni,
      vybranyIndex: 0,
      vybraneJidlo: ikonyZakladni[this.vybranyIndex],
      vybranePole: [],
      recepty: recepty,
      vybraneRecepty: [],
      vybrano: false,
    };
  },
  methods: {
    klikJidlo(index) {
      this.vybranyIndex = index;
      this.vybraneJidlo = this.ikonyZakladni[this.vybranyIndex];
      // console.log(this.vybraneJidlo);
      this.vybraneJidlo.aktivni = !this.vybraneJidlo.aktivni;
      if (this.vybraneJidlo.aktivni) {
        // upravit klicoveSlovo na pravdepodobne varianty
        for (let slovo of this.vybraneJidlo.klicoveSlovo)
          this.vybranePole.push(slovo);
      }
      // console.log(this.vybranePole);
    },

    srovnejPole() {
      this.vybraneRecepty = [];
      
      for (let item2 of this.recepty) {
        item2.kratky = item2.postup
          .split(" ")
          .slice(0, 6)
          .join(" ")+'...';
        
        
        item2.shody = 0;
        for (let item1 of this.vybranePole) {
          if (item2.vyhledavaniCisla.includes(item1)) {
            item2.shody++;
            // console.log("shoda nalezena " + item2.nazev);
            if (!this.vybraneRecepty.includes(item2)) {
              this.vybraneRecepty.push(item2);
              this.vybraneRecepty.sort((a, b) => b.shody - a.shody);
              let prvniRecepty = this.vybraneRecepty.slice(0, 8);
              //tady je omezeni delky pole
              this.vybraneRecepty = prvniRecepty;
            }
            // console.log(this.vybranePole);
          }
        }
      }

      // console.log(this.vybraneRecepty.length);

      // //nahodne recepty na doplneni do poctu, nemusi to tam byt
      // for (let k = 0; k < 4; k++) {
      //   let i = Math.floor(Math.random() * this.recepty.length);
      //   if (
      //     this.vybraneRecepty.length < 4 &&
      //     !this.vybraneRecepty.includes(this.recepty[i])
      //   ) {
      //     this.vybraneRecepty.push(this.recepty[i]);
      //   }
      // }

      // console.log(this.vybraneRecepty);
      this.vybrano = true;

      
    },

    zviditelni() {
      this.vybrano = false;
     },

    hratZnovu() {
      this.vybrano = false;
      this.vybranePole = [];
      this.vybraneRecepty = [];

      for (let item of ikonyZakladni) {
        item.aktivni = false;
      }
    },
  },
};
</script>

<style>
.ikony {
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
  border: 4px solid white;
  background-color: white;
  box-shadow: 10px 10px 38px 0px rgba(0,0,0,0.9);
  border:darkgrey;
  border-radius: 10px;
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
