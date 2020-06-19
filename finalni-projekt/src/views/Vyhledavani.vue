<template>
  <div class="okno">
    
    <detail v-bind:vybraneRecepty="vybraneRecepty" v-bind:i="i" v-if="detail" id="detail" />
    <div v-else>
      <h3>Vyhledávání</h3>

      <div id="vyber-kategorie">
        <label for="kategorie">Vyber kategorii:</label>
        <select
          name="kategorie"
          v-model.number="kategorieId"
          id="kategorie"
          v-on:click="vyberReceptyKategorie"
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

        <label for="vyber-slovo">Klíčové slovo:</label>
        <input
          type="text"
          id="vyber-slovo"
          v-model="klicoveSlovo"
          v-on:keydown.enter="vyberReceptySlovo"
        />
        <p v-if="oznameni">
          Toto jídlo jsme bohužel nenašli. Možná si vybereš z těchto receptů:
        </p>

        <receptyVyhledavani
          v-bind:vybraneRecepty="vybraneRecepty"
          v-on:prejdiNaDetail="prejdiNaDetail($event)"
        />
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
      klicoveId: null,
      kategorieId: null,
      klicovaSlova: klicovaSlova,
      recepty: recepty,
      vybraneRecepty: [],
      oznameni: false,
      detail: false,
      detailIndex: null,
      i: 0,
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

      this.vybraneRecepty = this.recepty.filter((recept) =>
        recept.vyhledavaniCisla.includes(this.klicoveId)
      );
    },

    vyberReceptyKategorie() {
      this.vybraneRecepty = this.recepty.filter((recept) =>
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
            .slice(0, 15)
            .join(" ") + "...";
      }
    },

    prejdiNaDetail(idx) {
      this.i = idx;
      this.detail=true;
    },
  },

  created() {
    this.zkratPostup();
    this.vyberNahodneRecepty();
  },
};
</script>

<style>
#vyber-slovo {
  border: 2px solid black;
  width: 60vw;
  margin-left: 20px;
  font-size: 20px;
}

#kategorie {
  font-size: 20px;
}

#vyber-kategorie {
  margin-top: 20px;
  justify-content: center;
}
</style>
