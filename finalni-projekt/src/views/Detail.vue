<template>
  <div class="hlavni">
    <div class="container light-green padding-bottom">
      <div class="nadpis">
        <h2 class="font-size-30 dark-green">název receptu</h2>
      </div>
      <div class="fotka">
        <img src="./../assets/images/kurecinakari.jpg" id="fotka" class="img-fluid rounded" />
      </div>
    </div>
    <div class="container padding-bottom">
      <h3 class="font-size-20 dark-green postup">Postup</h3>
      <div class="navod">
        <p>Uvařte rýži dle návodu. Maso nakrájejte a osmahněte na pánvi s troškou oleje. Přidejte ananas se šťávou, sůl a kari koření a chvíli povařte. Přidejte žervé a míchejte, dokud se nerozpustí. Můžeme podávat.',</p>
      </div>
      <div>
        <h3 class="font-size-20 dark-green ingredience">Ingredience</h3>
      </div>
      <div class="bila">
        <p class="porce">Počet porcí: 4</p>
        <ul>
          <li>300g rýže</li>
          <li>500g kuřecích prsních nebo stehenních řízků</li>
          <li>300 g čerstvého nebo kompotovaného ananasu bez cukru</li>
          <li>2 lžičky kari</li>
          <li>150g žervé</li>
          <li>olivový olej</li>
        </ul>
      </div>
    </div>
    <div class="menu container light-green">
      <div class="row d-flex">
      <router-link class="col-4 flex-fill border text-center dark-green font-weight-bold" to="/tvojeRecepty">?Zpět?</router-link>
      <router-link class="col-4 flex-fill border text-center font-size-12 dark-green font-weight-bold" to="/hra2">Vyber recept</router-link>
     <router-link class="col-4 flex-fill border text-center dark-green font-weight-bold" to="/vyhledavani">Kategorie</router-link>
     </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hlavni{
  position: relative;
}
.menu {
  margin-top: 40px auto;
  position: relative;
  bottom: 0;
}

.font-size-12 {
  font-size: 12px;
}

.border{
  border: 3px solid black;
}
.navod {
  margin: 0 auto;
  padding: 0 auto;
}

.postup {
  padding: 16px 0 8px 0;
  border-bottom: 3px solid darkgreen;
}

.ingredience {
  border-bottom: 3px solid darkgreen;
  padding: 0px 0 8px 0;
}

.padding-bottom {
  padding-bottom: 40px;
}
.padding-top{
  padding-top:20px;
}
.light-green {
  background-color: lightgreen;
}

.porce {
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.font-size-20 {
  font-size: 20px;
}

.odstavec {
  margin: 30px auto;
  display: block;
}

.font-size-30 {
  font-size: 30px;
}

.dark-green {
  color: darkgreen;
}
h2 {
  margin: auto;
  padding: 20px;
  text-align: center;
  display: block;
}
/*
img {
  display: block;
  width:100%;
  height: 150px;
  text-align: center;
  margin: auto;
}
*/
</style>
