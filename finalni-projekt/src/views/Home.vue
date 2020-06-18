<template>
  <div class="okno container">
     

     <div class="">
       <div class="p-200 pb-200">
      <button class="rozcestnik "><router-link to="/hra1">Chyť si své jídlo</router-link></button> 
      <button class="rozcestnik"><router-link to="/hra2">Na co máš chuť?</router-link></button> 
      <button class="rozcestnik"><router-link to="/vyhledavani">Vyhledávání receptů</router-link></button>
     </div>
      
    </div>
   
  </div>
</template>

<script>

export default {
  
}
</script>
<style>

.rozcestnik {
  display: block;
  border: 2px solid black;
 
   
}

h1 {
  padding-top: 40px;
  text-align: center;
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
