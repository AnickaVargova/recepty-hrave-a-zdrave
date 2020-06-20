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
        class=" bg img-fluid padding-container d-flex container mx-auto okno"
      >
        <tvojeRecepty
          v-if="vybrano"
          v-bind:vybraneRecepty="vybraneRecepty"
          v-bind:vybrano="vybrano"
          v-on:hratZnovu="hratZnovu"
          v-on:prejdiNaDetail="prejdiNaDetail($event)"
        />

        <div v-else class="margin">
          <h2 class="mas-chut">Na co máš chuť?</h2>
          <div class="ikony container">
            <div class="row w-100 justify-content-center mx-auto ">
              <div
                class="obalObrazek col-2"
                v-for="(item, index) in ikonyZakladni"
                v-bind:key="index"
                v-on:click="klikJidlo(index)"
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
      vybranaCisla: [],
      recepty: recepty,
      vybraneRecepty: [],
      vybrano: false,
      i: 0,
      detailViditelny: false,
      omezenePole: [],
      polePodobnych: [],
    };
  },

  methods: {
    klikJidlo(index) {

      console.log(this.vybraneRecepty);
      this.vybranyIndex = index;
      this.vybraneJidlo = this.ikonyZakladni[this.vybranyIndex];
      this.vybraneRecepty= this.recepty.filter(recept=>recept.vyhledavaniCisla.includes(this.vybraneJidlo.klicoveSlovo));
      // console.log(this.vybraneJidlo);
      this.vybraneJidlo.aktivni = !this.vybraneJidlo.aktivni;
      this.omezenePole.push(this.vybraneJidlo);
      // console.log(this.omezenePole);

    for(let item of this.ikonyZakladni){
      if (!this.omezenePole.includes(item)){
        item.zasednuti=true;
      }

    }

    // this.vybraneJidlo.zasednuti=true;
      if (this.vybraneJidlo.aktivni) {

          this.vybranaCisla.push(this.vybraneJidlo.klicoveSlovo);
      }
      // for(let item of this.vybranaCisla){
      // this.vybraneRecepty=this.vybraneRecepty.filter(recept=>recept.vyhledavaniCisla.includes(this.item));
      // }

     
     console.log(this.vybranaCisla);

    this.srovnejPole();

    for(let item1 of this.ikonyZakladni){
      for(let item2 of this.vybraneRecepty){
        if (item2.vyhledavaniCisla.includes(item1.klicoveSlovo)){
          item1.zasednuti=false;
        }
        else {
          item2.zasednuti=true;
        }

      }
    }

    

      console.log(this.vybraneRecepty);
      // console.log(omezeneRecepty);
    },

    srovnejPole() {
      // this.vybraneRecepty = [];

      for (let item2 of this.recepty) {


          this.vybraneRecepty.filter(recept=> {

            let pocet = this.vybranaCisla.length;
            let shoda = 0;
            for(let item of this.vybranaCisla) {
              if(recept.vyhledavaniCisla.includes(item)) {
                shoda++
              }
            }

            if(shoda === pocet ) {
              return true;
            }
            return false;
          });



        // item2.shody = 0;
        //for(let item of this.vybranaCisla)
          // if (item2.vyhledavaniCisla.includes(item)) {
            // item2.shody++;
            // console.log("shoda nalezena " + item2.nazev);
            
              
              //this.vybraneRecepty.filter(recept=>recept.vyhledavaniCisla.includes(item));
              // this.vybraneRecepty.sort((a, b) => b.shody - a.shody);
              // let prvniRecepty = this.vybraneRecepty.slice(0, 8);
              // //tady je omezeni delky pole
              // this.vybraneRecepty = prvniRecepty;
            // }
          }
          
          
          console.log(this.vybraneRecepty);
        },
   
      // this.vybrano = true;
    

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
      this.vybranaCisla = [];
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
  }
  
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

/* .zvyraznene {
  border: 4px solid green;
  background-color: lightgreen;
} */

.zasednuti {
  background-color: grey;
}
</style>
