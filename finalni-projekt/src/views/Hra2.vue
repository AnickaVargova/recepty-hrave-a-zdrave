<template>
  <div class="col-md-6 mx-auto pozadi position-relative">

    <router-link to="/">
      <button id="pozadi-zpet" class="mt-lg-4 mt-0 mb-0">
        <img src="./../assets/images/left-arrow.png" id="zpet"/>
      </button>
    </router-link>

    <detail
      v-bind:vybraneRecepty="vybraneRecepty"
      v-bind:i="i"
      v-if="detailViditelny"
      id="detail"
      v-on:zpetNaVyber="zpetNaVyber"
    />
    <div v-else>
      <div class="container mt-lg-4 mt-0">
        <div class="row justify-content-center mt-lg-4 mt-0 mb-0 mb-lg-4">
          <div class="col-md-12 mx-auto">
            <tvojeRecepty
              v-if="vybrano"
              v-bind:vybraneRecepty="vybraneRecepty"
              v-bind:vybrano="vybrano"
              v-on:hratZnovu="hratZnovu"
              v-on:prejdiNaDetail="prejdiNaDetail($event)"
            />

            <div v-else>
              <h2 class="d-flex text-center">Na co máš chuť ?</h2>

              <div class="row w-100 justify-content-center mx-auto">
                <div
                  class="obalObrazek col-4 col-md-2"
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
                <button class="btn btn-primary hotovo" v-on:click="srovnejPole">HOTOVO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     
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
    detail: Detail
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
      detailViditelny: false
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
    }
  },
  created() {
    this.zkratPostup();
    this.hratZnovu();
  }
};
</script>

<style>
@media (max-width: 992px) {
 
  #pozadi-zpet{
  background:rgba(255, 255, 255, 0.1);
  position: absolute;
  left: 3px;
  border: 1px solid white;
  }
  #pozadi-zpet:active {
  background-color: green;
  border: 1px solid green;
  border-radius: 7px;
}
}
#zpet {
    height: 35px;
    width: 50px;
  }
@media (min-width: 992px) {
  

#pozadi-zpet {
  background-color: white;
  position: absolute;
  left: 50px;
  border: 1px solid white;
}

#pozadi-zpet:hover,
#pozadi-zpet:active {
  background-color: green;
  border-radius: 7px;
}
}
.padding-container {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

@media (min-width: 576px) {
  .obalObrazek {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    background-color: white;
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    margin: 10px;
    max-width: 120px !important;
    padding: 10px 5px !important;
    cursor: pointer;
  }

  .mas-chut {
    background-color: white;
    font-weight: 600;
    color: green;
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.1);
    border: darkgrey;
    border-radius: 7px;
    width: 400px;
    margin: 20px auto 20px;
  }

  .hotovo {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: white;
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.1);

    border-radius: 10px;
    margin: 40px 20px 15px 30px;
    padding: 16px;
    background-color: green;
    color: white;
  }
  .hotovo:hover,
  .hotovo:active {
    color: white;

    transition-duration: 0.1s;
  }
}

@media (max-width: 576px) {
  .obalObrazek {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid white;
    background-color: white;
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.1);
    border: darkgrey;
    border-radius: 10px;
    margin: 7px;
    cursor: pointer;
  }

  .mas-chut {
    background-color: white;
    font-weight: 600;
    color: green;
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.1);
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
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.1);
    border: 3px solid white;
    border-radius: 10px;
    margin: auto;
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

 
}

.margin {
  margin: auto;
}

.obalObrazek:hover {
  border: 2px solid green;
}

.zvyraznene {
  border: 2px solid green;
  background-color: lightgreen;
}
</style>
