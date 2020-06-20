<template>
  <div class="container-fluid">
     <div class="row"></div>
      <div class="row">
       <div class="col-md-12 text-center mt-4">
         <h1>Vaření pro děti</h1>
       </div>
     </div>

     <div class="">
       <div class="">
      <button class="btn btn-primary"><router-link to="/hra1">CHYŤ SI SVÉ JÍDLO</router-link></button> 
      <button class="btn btn-outline-secondary"><router-link to="/hra2">NA CO MÁŠ CHUŤ?</router-link></button> 
      <button class="btn btn-outline-secondary"><router-link to="/vyhledavani">VYHLEDÁVÁNÍ RECEPTŮ</router-link></button>
     </div>
      
    </div>

  </div>
</template>

<script>

export default {
  
}
</script>
<style>
.bg {
    background-image: url("./../assets/images/navrhpozadi2.jpg");
    height: auto;
    margin: auto;
    opacity: 1;
}


#app .btn-primary{
box-shadow: 10px 10px 38px 0px rgba(0,0,0,0.9);
border:darkgrey;
border-radius: 10px;
display: block;
margin: 40px auto;
padding: 18px;
background-color:green;
color: white;
}

#app .btn-primary a {
 color: white;  
}


#app .btn-primary a:hover {
 text-decoration: none;  
}

#app .btn-primary:hover,
#app .btn-primary:active{
 color:white;
 border: 2px solid white;
 background-color: darkgreen;
 transition-duration: 0.1s;
 text-decoration: none;
}

#app .btn-outline-secondary{
/* box-shadow: 10px 10px 38px 0px rgba(0,0,0,0.9); */
border:green;
border-radius: 10px;
display: block;
margin: 40px auto;
padding: 18px;
color: black;
}

#app .btn-outline-secondary a {
 color: black;  
}

#app .btn-outline-secondary:hover,
#app .btn-outline-secondary:active{
border: 2px solid green;
 transition-duration: 0.1s;
}


@media (min-width: 600px){
  .prazde-misto{
    height: 250px;
  }
}
@media (max-width: 600px){
.prazde-misto{
  height: 150px;
}
}

</style>
