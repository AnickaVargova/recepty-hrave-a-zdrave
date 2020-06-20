<template>
  <div class="container mt-4">
    <div class="col-md-10 mx-auto">
      <detail v-on:zpetNaVyber="zpetNaVyber" v-bind:vybraneRecepty="vybraneRecepty" v-bind:i="i" v-if="detail" id="detail" />
      <div v-else>
        <div class="pozadi col-md-10 mx-auto">
          <h1 class="mt-4 pt-4 mb-4 text-center">Vyhledávání receptů</h1>
          <form>
            <div class="input-group p-0 col-md-12 mx-auto">
              <input
                type="text"
                class="form-control"
                placeholder="najdi recept"
                v-model="klicoveSlovo"
                v-on:keydown.enter="vyberReceptySlovo"
              />
            </div>
          </form>
<!--
          <div class="d-flex form-group col-md-8 ">
            <label class="col-md-4" for="kategorie">Vyber kategorii:</label>
            <select
              name="kategorie"
              v-model.number="kategorieId"
              id="kategorie"
              v-on:click="vyberReceptyKategorie"
              class="form-control col-md-4"
            >
              <option value="56">Polévky</option>
              <option value="22">Maso</option>
              <option value="85">Vegetariánské</option>
              <option value="86">Hlavní jídla</option>
              <option value="87">Předkrmy</option>
              <option value="88">Snídaně</option>
              <option value="71">Saláty</option>
              <option value="89">Svačiny</option>
              <option value="90">Pomazánky</option>
              <option value="91">Dezerty</option>
              <option value="25">Ryby</option>
            </select>
            -->
         
          <label for="vyber-slovo"></label>

          <p v-if="oznameni">Toto jídlo jsme bohužel nenašli. Možná si vybereš z těchto receptů:</p>

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
    detail: Detail
  },

  data() {
    return {
      klicoveSlovo: "",
      klicoveId: null,
      kategorieId: null,
      klicovaSlova: klicovaSlova,
      recepty: recepty,
      vybraneRecepty: [],
      oznameni: false,
      detail: false,
      i:0,
    };
  },

  methods: {
    vyberReceptySlovo() {
      for (let item of this.klicovaSlova) {
        if (item.jmeno === this.klicoveSlovo) {
          //pridat metodu pro ignorovani velkych pismen, diakritiky, mnozneho cisla
          //do klicovaSlova pridat nazvy konkretnich jidel
          //vyresit vice klicovych slov najednou
          this.klicoveId = item.id;
        }
      }

      if (this.klicoveId === null) {
        this.oznameni = true;
        vyberNahodneRecepty();
      }

      this.vybraneRecepty = this.recepty.filter(recept =>
        recept.vyhledavaniCisla.includes(this.klicoveId)
      );
    },

    vyberReceptyKategorie() {
      this.vybraneRecepty = this.recepty.filter(recept =>
        recept.vyhledavaniCisla.includes(this.kategorieId)
      );
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
      console.log(this.i);
    },
    zpetNaVyber() {
      this.detail = false;
    },

  },

  created() {
    this.zkratPostup();
    this.vyberNahodneRecepty();
  }
};
</script>

<style>
.btn-default {
  width: 100px;
  padding: 12.5px;
}
#kategorie {
  right: 20px;
}

#vyber-kategorie {
  margin-top: 20px;
  justify-content: center;
}
</style>
