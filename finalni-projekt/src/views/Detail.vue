<template>
  <div class="container">
    <div class="light-green">
    <h2 class="font-size-30 forest-green">
      název receptu          
    </h2>
  <div>
    <img src="./../assets/images/kurecinakari.jpg" id = "fotka" class="img-fluid"/></div>
  <div class="odstavec">
    <h3 class="font-size-20 forest-green">Postup</h3>
    </div>
    <p class="border">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nam culpa? Velit facere quis quasi? Eum, labore fuga odio earum minus vitae ut ipsam natus nihil modi consequuntur, maxime corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat, odit sed dolorem quo dolore quos, nobis quod molestiae pariatur nostrum expedita ducimus, nisi ex tenetur impedit dignissimos reiciendis distinctio! 
    </p>
  </div>
  <div class="odstavec"> 
    <h3 class="font-size-20 forest-green light-green">Ingredience</h3>
    
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
    
    

    <router-link to="/tvojeRecepty">Tvoje recepty</router-link>
    <router-link to="/hra2">Na co máš chuť?</router-link>
    <router-link to="/vyhledavani">Vyhledávání podle kategorií</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>

.light-green {
  background-color: lightgreen;
  
}

.border {
  border-top: 20px grey solid;
  border-bottom: 20px grey solid;
  border-left: none;
  border-right: none;
  background-color: white;
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
  margin:  30px auto;
  display: block;
}

.font-size-30 {
  font-size: 30px;
}

.forest-green {
  color: forestgreen;
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
