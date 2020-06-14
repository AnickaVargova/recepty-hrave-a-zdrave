<template>
  <div class="okno">
    <h2>
      Tady bude detail receptu          
    </h2>
    <div id = "fotka">Obrazek</div>
    <p>Pocet porcí: 4</p>
    <h3>Postup</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nam culpa? Velit facere quis quasi? Eum, labore fuga odio earum minus vitae ut ipsam natus nihil modi consequuntur, maxime corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat, odit sed dolorem quo dolore quos, nobis quod molestiae pariatur nostrum expedita ducimus, nisi ex tenetur impedit dignissimos reiciendis distinctio! 
    </p>
    <h3>Ingredience</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nam culpa? Velit facere quis quasi? Eum, labore fuga odio earum minus vitae ut ipsam natus nihil modi consequuntur, maxime corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat, odit sed dolorem quo dolore quos, nobis quod molestiae pariatur nostrum expedita ducimus, nisi ex tenetur impedit dignissimos reiciendis distinctio!
    </p>
    
    

    <router-link to="/tvojeRecepty">Tvoje recepty</router-link>
    <router-link to="/hra2">Na co máš chuť?</router-link>
    <router-link to="/vyhledavani">Vyhledávání podle kategorií</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
#fotka {
  border: 2px solid black;
  width: 200px;
  height: 100px;
}
</style>
