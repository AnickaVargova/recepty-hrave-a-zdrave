<template>
  <div>
    <detail
      v-bind:vybraneRecepty="vybraneRecepty"
      v-bind:i="i"
      v-if="detailViditelny"
      id="detail"
      v-on:zpetNaVyber="zpetNaVyber"
    />
    <div v-else>
      <div
        class="container mt-4"
      >
      <div class="row justify-content-center mt-4 mb-4">
        <div class="col-md-6 pozadi">
        <tvojeRecepty
          v-if="vybrano"
          v-bind:vybraneRecepty="vybraneRecepty"
          v-bind:vybrano="vybrano"
          v-on:hratZnovu="hratZnovu"
          v-on:prejdiNaDetail="prejdiNaDetail($event)"
        />

        <div v-else>
          <h2>Na co máš chuť?</h2>
          
            <div class="row w-100 justify-content-center mx-auto ">
              <div
                class="obalObrazek col-2"
                v-for="(item, index) in ikonyZakladni"
                v-bind:key="index"
                v-on:click="klikJidlo(index)"
                v-bind:class="{ zvyraznene: item.aktivni }"
              >
                <img
                  v-bind:src="require(`./../assets/ikony/${item.ikona}`)"
                  v-bind:alt="item.jmeno"
                />
              </div>
            </div>
          </div>
          <div class="d-flex flex-row-reverse">
            <button class="hotovo" v-on:click="srovnejPole">
              HOTOVO
            </button>
          </div>
        
      </div>
      </div>
    </div>
    <button class="rozcestnik">
      <router-link to="/" class="odkaz">DOMŮ</router-link>
    </button>
  </div>
  </div>
</template>

<script>
import ikonyZakladni from "./../assets/ikonyZakladni.js";
import recepty from "./../assets/data.js";
import TvojeRecepty from "./TvojeRecepty.vue";
import Detail from "./Detail.vue";

export default {
  components: {
    tvojeRecepty: TvojeRecepty,
    detail: Detail,
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
      i: 0,
      detailViditelny: false,
    };
  },
  methods: {
    klikJidlo(index) {
      this.vybranyIndex = index;
      this.vybraneJidlo = this.ikonyZakladni[this.vybranyIndex];
      console.log(this.vybraneJidlo);
      this.vybraneJidlo.aktivni = !this.vybraneJidlo.aktivni;
      if (this.vybraneJidlo.aktivni) {
        
          this.vybranePole.push(this.vybraneJidlo.klicoveSlovo);
      }
      console.log(this.vybranePole);
    },

    srovnejPole() {
      this.vybraneRecepty = [];

      for (let item2 of this.recepty) {
        item2.shody = 0;
        for (let item1 of this.vybranePole) {
          if (item2.vyhledavaniCisla.includes(item1)) {
            item2.shody++;
            console.log("shoda nalezena " + item2.nazev);
            if (!this.vybraneRecepty.includes(item2)) {
              this.vybraneRecepty.push(item2);
              this.vybraneRecepty.sort((a, b) => b.shody - a.shody);
              let prvniRecepty = this.vybraneRecepty.slice(0, 8);
              //tady je omezeni delky pole
              this.vybraneRecepty = prvniRecepty;
            }
          }
        }
      }
      this.vybrano = true;
      console.log(this.vybraneRecepty);
    },

   
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

   
    hratZnovu() {
      this.vybrano = false;
      this.vybranePole = [];
      this.vybraneRecepty = [];

      for (let item of ikonyZakladni) {
        item.aktivni = false;
      }
    },

    prejdiNaDetail(idx) {
      this.i = idx;
      this.detailViditelny = true;
      console.log(this.i);
    },

    zkratPostup() {
      for (let item2 of this.recepty) {
        item2.kratky =
          item2.postup
            .split(" ")
            .slice(0, 6)
            .join(" ") + "...";
      }
    },

    zpetNaVyber() {
      this.detailViditelny = false;
    },
  },
  created() {
    this.zkratPostup();
  },
};
</script>

<style>
.padding-container {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

@media (min-width: 576px) {
  .obalObrazek {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid white;
    background-color: white;
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.7);
    border: darkgrey;
    border-radius: 10px;
    margin: 15px;
    max-width: 120px !important;
    padding: 10px 5px !important;
    cursor: pointer;
  }

  .mas-chut {
    background-color: white;
    font-weight: 600;
    color: green;
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.9);
    border: darkgrey;
    border-radius: 10px;
    width: 400px;
    margin: 20px auto 20px;
  }

  .hotovo {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: white;
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.9);
    border: darkgrey;
    border-radius: 10px;
    margin: -70px 100px 30px 30px;
    padding: 16px;
    background-color: green;
    color: white;
  }
  .hotovo:hover,
  .hotovo:active {
    color: white;
    border: 2px solid white;
    background-color: darkgreen;
    transition-duration: 0.1s;
  }

  .hotovo:before,
  .hotovo:after {
    content: "->";
  }

  .prazdne-misto3 {
    height: 150px;
  }
}

@media (max-width: 576px) {
  .obalObrazek {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid white;
    background-color: white;
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.6);
    border: darkgrey;
    border-radius: 10px;
    margin: 7px;
    cursor: pointer;
  }

  .mas-chut {
    background-color: white;
    font-weight: 600;
    color: green;
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.6);
    border: darkgrey;
    border-radius: 10px;
    width: 400px;
    margin: 30px auto 30px;
  }

  .hotovo {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: white;
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.6);
    border: 3px solid white;
    border-radius: 10px;
    margin: 30px;
    padding: 7px;
    font-weight: bold;
  }

  .hotovo:active {
    border: 3px solid green;
    background-color: white;
    color: green;
    display: inline-block;
    position: relative;
    top: 3px;
  }

  .prazdne-misto3 {
    height: 150px;
  }
}

.margin {
  margin: auto;
}

.obalObrazek:hover {
  border: 4px solid green;
}

.zvyraznene {
  border: 4px solid green;
  background-color: lightgreen;
}
</style>
