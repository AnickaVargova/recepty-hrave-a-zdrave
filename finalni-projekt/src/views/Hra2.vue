<template>
  <div class="col-md-6 mx-auto pozadi position-relative">
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
              <router-link to="/">
                <button id="pozadi-zpet" class="vrstva1 mt-lg-4 mt-0 mb-0">
                  <img src="./../assets/images/left-arrow.png" id="zpet" />
                </button>
              </router-link>
              <h2 class="vrstva2">Na co máš chuť ?</h2>

              <div class="row w-100 justify-content-center mx-auto">
                <div
                  class="obalObrazek col-4 col-md-2"
                  v-for="(item, index) in ikonyZakladni"
                  v-bind:key="index"
                  v-on:click="klikJidlo(index,item)"
                  v-bind:class="{
                    zvyraznene: item.aktivni,
                    zasednuti: item.zasednuti,
                  }"
                >
                  <!-- seda smazat -->
                  <img
                    v-bind:src="require(`./../assets/ikony/${item.ikona}`)"
                    v-bind:alt="item.jmeno"
                  />
                </div>
                <div class="d-flex justify-content-between">
                <!-- vyhodit zobrazRecepty -->
                <!-- <button class="btn btn-primary hotovo" v-on:click="srovnejPole">HOTOVO</button> -->
                <button class="btn btn-primary hotovo mp-5" v-on:click="zobrazRecepty">HOTOVO</button>
                <button class="hrat-znovu ml-5" v-on:click="hratZnovu"><img src="./../assets/ikony/replay.png"></button>
              </div>
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
    klikJidlo(index,item) {
      if(item.zasednuti){return};
      this.vybranyIndex = index;
      this.vybraneJidlo = this.ikonyZakladni[this.vybranyIndex];
      console.log(this.vybraneJidlo);
      this.vybraneJidlo.aktivni = !this.vybraneJidlo.aktivni;
      if (this.vybraneJidlo.aktivni) {
        this.vybranePole.push(this.vybraneJidlo.klicoveSlovo);
      }

      console.log(this.vybranePole);
      if (!this.vybraneJidlo.aktivni) {
        this.vybranePole = this.vybranePole.filter(
          (item) => item !== this.vybraneJidlo.klicoveSlovo
        );
      }

      console.log(this.vybranePole);
      //omezovani pole-zacatek-pripadne vyhodit
      this.srovnejPole();
      console.log(this.vybraneRecepty);
      for (let ikona of this.ikonyZakladni) {
        let aa = false;

        for (let vybranyRecept of this.vybraneRecepty) {
          if (vybranyRecept.vyhledavaniCisla.includes(ikona.klicoveSlovo)) {
            aa = true;
            break;
          }
        }
        // }

        console.log(aa);
        if (!aa) {
          ikona.zasednuti = true;
        }
      }
      //konec
      // console.log(this.vybranePole);
    },

    srovnejPole() {
      this.vybraneRecepty = [];

      //omezovani pole- pripadne vyhodit
      for (let recept of this.recepty) {
        let obsahujeVsechny = true;
        for (let cislo of this.vybranePole) {
          if (!recept.vyhledavaniCisla.includes(cislo)) {
            obsahujeVsechny = false;
            break;
          }
        }
        if (obsahujeVsechny) {
          this.vybraneRecepty.push(recept);
        }
      }
      //konec

      // for (let item2 of this.recepty) {
      //   item2.shody = 0;
      //   for (let item1 of this.vybranePole) {
      //     if (item2.vyhledavaniCisla.includes(item1)) {
      //       item2.shody++;
      //       console.log("shoda nalezena " + item2.nazev);
      //       if (!this.vybraneRecepty.includes(item2)) {
      //         this.vybraneRecepty.push(item2);
      //         this.vybraneRecepty.sort((a, b) => b.shody - a.shody);
      //         let prvniRecepty = this.vybraneRecepty.slice(0, 8);
      //         //tady je omezeni delky pole
      //         this.vybraneRecepty = prvniRecepty;
      //       }
      //     }
      //   }
      // }
      //TODO: MV
      //
      console.log(this.vybraneRecepty);
    },

    zobrazRecepty() {
      this.vybrano = true;
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
        //MV
        item.zasednuti = false;
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
    this.hratZnovu();
  },
};
</script>

<style>
.hrat-znovu{
  border:none;
  background: rgba(255, 255, 255, 0.1);
  height: 65px;
  margin-top: 35px;
  

}

.vrstva2{
  z-index: 2;
}

.vrstva1 {
  z-index: 1;
}

@media (max-width: 992px) {
  #pozadi-zpet {
    background: rgba(255, 255, 255, 0.1);
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

  .obalObrazek.zasednuti{
    cursor: default;
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

  .obalObrazek.zasednuti{
    cursor: default;
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


.obalObrazek:hover:not(.zasednuti) {

  border: 2px solid green;
}

.zvyraznene {
  border: 2px solid green;
  background-color: lightgreen;
}

.zasednuti {
  background-color: lightgrey;
}
</style>
