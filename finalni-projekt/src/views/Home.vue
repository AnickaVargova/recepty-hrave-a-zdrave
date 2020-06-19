<template>
  <div class="okno container bg img-fluid">
     <div class="prazde-misto ">
     </div>

     <div class="">
       <div class="">
      <button class="rozcestnik"><router-link to="/hra1" class="odkaz">CHYŤ SI SVÉ JÍDLO</router-link></button> 
      <button class="rozcestnik"><router-link to="/hra2" class="odkaz">NA CO MÁŠ CHUŤ?</router-link></button> 
      <button class="rozcestnik"><router-link to="/vyhledavani" class="odkaz">VYHLEDÁVÁNÍ RECEPTŮ</router-link></button>
     </div>
      
    </div>

    <div class="prazde-misto2">
    </div>
   
  </div>
</template>

<script>

export default {
  
}
</script>
<style>

.odkaz{
  color:white;
  font-weight: 600;
}
.odkaz:hover,
.odkaz:active,
.odkaz:after{
  text-decoration:none;
  color: white;
}
.bg{
  background-image: url("./../assets/images/navrhpozadi2.jpg");
  height: auto;
  margin: auto;
  opacity: 1;
}

.prazde-misto2{
  height:300px;
}

.rozcestnik{
box-shadow: 10px 10px 38px 0px rgba(0,0,0,0.9);
border:darkgrey;
border-radius: 10px;
display: block;
margin: 40px auto;
padding: 18px;
background-color:green;
color: white;
}
.rozcestnik:hover,
.rozcestnik:active{
 color:white;
 border: 2px solid white;
 background-color: darkgreen;
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
