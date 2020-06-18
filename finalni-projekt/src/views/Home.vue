<template>
  <div class="okno">
     <h1>Ahoj! Pojď si s námi hrát a vařit.</h1>

     <div class="odkazy">
      <button class="rozcestnik"><router-link to="/hra1">Chyť si své jídlo</router-link></button> 
      <button class="rozcestnik"><router-link to="/hra2">Na co máš chuť?</router-link></button> 
      <button class="rozcestnik"><router-link to="/vyhledavani">Vyhledávání receptů</router-link></button>
    </div>
   
  </div>
</template>

<script>

export default {
  
}
</script>
<style>
.okno {
  min-height: 80vh;
}
.rozcestnik {
  display: block;
  border: 2px solid black;
   
}

h1 {
  padding-top: 60px;
  padding-bottom: 80px;
  text-align: center;
}

.rozcestnik {
  margin: 10px;
}

.rozcestnik a {
  font-size: 30px;
  padding: 10px;
  margin: 20px;
}

.odkazy {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}


</style>
