<template>
  <div class="okno">
    <h3>Tady bude vyhledávání podle kategorií a klíčových slov</h3>
    <label for="vyber-slovo">Klíčové slovo:</label>
    <input type="text" id="vyber-slovo"/>
    <div id="vyber-kategorie">
      <select id="kategorie">
        <option>Kategorie</option>
        <option>Hlavní jídla</option>
        <option>Dezerty</option>
        <option>Vegetariánské</option>
        <option>Snídaně</option>
        <option>Svačiny</option>
        <option>Polévky</option>
        <option>Saláty</option>
      </select>
      <router-link to="/detail"
        ><div id="zacatek">
          <div id="obrazek">Obrázek</div>
          <h3>Název receptu</h3>
        </div></router-link
      >
      <router-link to="/detail"
        ><div id="zacatek">
          <div id="obrazek">Obrázek</div>
          <h3>Název receptu</h3>
        </div></router-link
      >
      <router-link to="/detail"
        ><div id="zacatek">
          <div id="obrazek">Obrázek</div>
          <h3>Název receptu</h3>
        </div></router-link
      >
      <router-link to="/detail"
        ><div id="zacatek">
          <div id="obrazek">Obrázek</div>
          <h3>Název receptu</h3>
        </div></router-link
      >
      <router-link to="/detail"
        ><div id="zacatek">
          <div id="obrazek">Obrázek</div>
          <h3>Název receptu</h3>
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
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
  margin-left: 20px;
  margin-top: 20px;
  justify-content: center;
}

#zacatek {
  display: flex;
  border: 2px solid black;
  margin: 5px;
}

#zacatek #obrazek {
  flex-basis: 30%;
  height: 30px;
  border: 1px solid black;
  margin: 5px;
}
</style>
