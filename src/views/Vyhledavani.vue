<template>
  <div class="okno p-0 container-fluid mt-lg-4 mt-0">
    <div class="col-lg-6 mt-lg-4 mt-0 pozadi mx-auto">
      <detail
        v-on:zpetNaVyber="zpetNaVyber"
        v-bind:vybraneRecepty="vybraneRecepty"
        v-bind:i="i"
        v-if="detail"
        id="detail"
      />
      <div v-else>
        <div class="col-md-12 mx-auto">
          <router-link to="/">
            <button id="pozadi-zpet" class="mt-4  mb-0">
              <img src="./../assets/ikony/arrow.png" id="zpet" />
            </button>
          </router-link>

          <h1 class=" pt-4 mb-4 pl-5 pr-5 text-center">Vyhledávání receptů</h1>

          <div class="input-group p-0 col-md-12 mx-auto stin-inputu">
            <input
              type="text"
              class="form-control"
              placeholder="zadej klíčové slovo"
              v-model="klicoveSlovo"
              v-on:input="vyberReceptySlovo"
            />
          </div>

          <label for="vyber-slovo"></label>

          <p v-if="oznameni">
            Toto jídlo jsme bohužel nenašli. Možná si vybereš z těchto receptů:
          </p>

          <receptyVyhledavani
            v-bind:vybraneRecepty="vybraneRecepty"
            v-on:prejdiNaDetail="prejdiNaDetail($event)"
            class="col-md-12 mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import recepty from "./../assets/data.js";
import klicovaSlova from "./../assets/klicovaSlova.js";
import ReceptyVyhledavani from "./../components/ReceptyVyhledavani.vue";
import Detail from "./Detail.vue";

export default {
  components: {
    receptyVyhledavani: ReceptyVyhledavani,
    detail: Detail,
  },

  data() {
    return {
      klicoveSlovo: "",
      klicoveId: [],
      klicovaSlova: klicovaSlova,
      recepty: recepty,
      vybraneRecepty: [],
      oznameni: false,
      detail: false,
      i: 0,
    };
  },

  methods: {
    vyberReceptySlovo() {
      this.klicoveId = [];
      this.vybraneRecepty = [];
      let string = this.klicoveSlovo
        .toLowerCase()
        .slice(0, this.klicoveSlovo.length - 1)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      for (let item of this.klicovaSlova) {
        item.jmeno = item.jmeno
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        if (item.jmeno.includes(string) && !this.klicoveId.includes(item.id)) {
          this.klicoveId.push(item.id);
        }
      }

      if (this.klicoveId.length === 0) {
        this.oznameni = true;
        this.vyberNahodneRecepty();
      } else {
        this.oznameni = false;
      }

      for (let cislo of this.klicoveId) {
        let receptySCislem = this.recepty.filter((recept) =>
          recept.vyhledavaniCisla.includes(cislo)
        );
        this.vybraneRecepty.push(receptySCislem);
      }

      this.vybraneRecepty = this.vybraneRecepty.flat();
      let tmpRecepty = [];
      for (let recept of this.vybraneRecepty) {
        if (!tmpRecepty.includes(recept)) {
          tmpRecepty.push(recept);
        }
      }
      this.vybraneRecepty = tmpRecepty;
    },

    vyberNahodneRecepty() {
      for (let i = 0; i < 5; i++) {
        let nahodnyRecept = this.recepty[
          Math.floor(Math.random() * this.recepty.length)
        ];
        if (!this.vybraneRecepty.includes(nahodnyRecept)) {
          this.vybraneRecepty.push(nahodnyRecept);
        }
      }
    },

    zkratPostup() {
      for (let item2 of this.recepty) {
        item2.kratky =
          item2.postup
            .split(" ")
            .slice(0, 13)
            .join(" ") + "...";
      }
    },

    prejdiNaDetail(idx) {
      this.i = idx;
      this.detail = true;
    },
    zpetNaVyber() {
      this.detail = false;
    },
  },

  created() {
    this.zkratPostup();
    this.vyberNahodneRecepty();
  },
};
</script>

<style>

#app .form-control:focus{
  border-color: rgba(10,174,29,0.4); 
  border-width: 3px; 
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.1) ;
  } 


.btn-default {
  width: 100px;
  padding: 12.5px;
}

</style>
