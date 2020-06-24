<template>
  <div class="col-lg-6 mx-auto pozadi position-relative">
    <detail
      v-bind:vybraneRecepty="vybraneRecepty"
      v-bind:i="i"
      v-if="detailViditelny"
      id="detail"
      v-on:zpetNaVyber="zpetNaVyber"
    />
    <div v-else>
      <div class="container mt-lg-4 mt-0">
        <div class="row justify-content-center mt-lg-4 mt-0 mb-lg-4">
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
                <button id="pozadi-zpet" class="vrstva1 mt-4 mb-0">
                  <img src="./../assets/ikony/arrow.png" id="zpet" />
                </button>
              </router-link>
              <h1 class="mt-0 mb-4 pt-4 text-center col-md-12 vrstva2">
                Na co máš chuť&nbsp;?
              </h1>

              <div class="row w-100 justify-content-center mx-auto">
                <div
                  class="obalObrazek col-3 col-s-1 col-md-3 col-lg-2"
                  v-for="(item, index) in ikonyZakladni"
                  v-bind:key="index"
                  v-on:click="klikJidlo(index, item)"
                  v-bind:class="{
                    zvyraznene: item.aktivni,
                    zasednuti: item.zasednuti,
                  }"
                >
                  <img
                    v-bind:src="require(`./../assets/ikony/${item.ikona}`)"
                    v-bind:alt="item.jmeno"
                  />
                </div>
                <div
                  class="d-flex flex-row-reverse justify-content-between mt-md-0 pt-md-0"
                >
                  <button
                    class="btn btn-primary hotovo mp-5"
                    v-on:click="zobrazRecepty"
                  >
                    NAJÍT RECEPTY
                  </button>
                  <button class="hrat-znovu ml-5" v-on:click="hratZnovu">
                    <img src="./../assets/ikony/replay.png" />
                  </button>
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
    klikJidlo(index, item) {
      if (item.zasednuti) {
        return;
      }
      this.vybranyIndex = index;
      this.vybraneJidlo = this.ikonyZakladni[this.vybranyIndex];
      this.vybraneJidlo.aktivni = !this.vybraneJidlo.aktivni;
      if (this.vybraneJidlo.aktivni) {
        this.vybranePole.push(this.vybraneJidlo.klicoveSlovo);
      }

      if (!this.vybraneJidlo.aktivni) {
        this.vybranePole = this.vybranePole.filter(
          (item) => item !== this.vybraneJidlo.klicoveSlovo
        );
      }

      this.srovnejPole();
      for (let ikona of this.ikonyZakladni) {
        let vReceptu = false;
        for (let vybranyRecept of this.vybraneRecepty) {
          if (vybranyRecept.vyhledavaniCisla.includes(ikona.klicoveSlovo)) {
            vReceptu = true;
            break;
          }
        }
        ikona.zasednuti = !vReceptu;
      }
    },

    srovnejPole() {
      this.vybraneRecepty = [];

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
    },

    zobrazRecepty() {
      this.vybrano = true;
    },

    hratZnovu() {
      this.vybrano = false;
      this.vybranePole = [];
      this.vybraneRecepty = [];

      for (let item of ikonyZakladni) {
        item.aktivni = false;
        item.zasednuti = false;
      }
    },

    prejdiNaDetail(idx) {
      this.i = idx;
      this.detailViditelny = true;
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
.vrstva2 {
  z-index: 2;
}

.vrstva1 {
  z-index: 4;
}

#pozadi-zpet {
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  left: 0px;
  top: 0px;
  border: none;
  border-radius: 10px;
}
#pozadi-zpet:active,
#pozadi-zpet:hover {
  background-color: green;
  border: 1px solid green;
  border-radius: 10px;
}

#zpet {
  height: 35px;
  width: 50px;
}

.padding-container {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

@media (min-width: 780px) {
  .obalObrazek {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    background-color: white;
    box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 10px;
    max-width: 120px !important;
    padding: 10px 5px !important;
    cursor: pointer;
  }

  .obalObrazek.zasednuti {
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
    margin: 10px 8px 15px 30px;
    padding: 16px;
    background-color: green;
    color: white;
  }
  .hotovo:hover,
  .hotovo:active {
    color: white;
    transition-duration: 0.1s;
  }
  .hrat-znovu {
    border: none;
    background: rgba(255, 255, 255, 0.1);
    height: 70px;
    margin: 10px 20px 15px 30px;
  }

  .hrat-znovu:hover,
  .hrat-znovu:active {
    background-color: green;
    border-radius: 10px;
  }
}

@media (max-width: 780px) {
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

  .obalObrazek.zasednuti {
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
    margin: 7px;
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
  .hrat-znovu {
    border: none;
    background: rgba(255, 255, 255, 0.1);
    height: 70px;
    margin: 7px;
  }

  .hrat-znovu:active {
    background-color: green;
    border-radius: 10px;
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
