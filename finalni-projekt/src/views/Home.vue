<template>
  <div class="okno container-fluid">
    
      <div class="row justify-content-center mt-md-0 mt-4 pt-5 pt-md-0">
          
        <div class="col-md-6 mt-md-5 mb-md-5 mt-4 mb-5 pt-5 pt-md-3 pb-md-4 pb-5 pozadi justify-content-center">
            <div class="hlavicka">
            <h1 class="text-center mt-4">Pojď si s&nbsp;námi hrát a vařit!</h1>
            <p class="text-center">Vyber si ze dvou her a vyhledávání receptů.</p>
          </div>
          
            <div class="row justify-content-center mb-3">
                <router-link to="/hra1"><button class="btn btn-primary">CHYŤ SI SVÉ JÍDLO</button></router-link>
            </div>
            <div class="row justify-content-center mb-3">
                <router-link to="/hra2"><button class="btn btn-outline-secondary">NA CO MÁŠ CHUŤ?</button></router-link>
            </div>
            <div class="row justify-content-center mb-3">
            <router-link to="/vyhledavani"> <button class="btn btn-outline-secondary">VYHLEDÁVÁNÍ RECEPTŮ</button></router-link>
            </div>
        </div>
      </div>
    </div>
  
</template>

<script>
export default {};
</script>
<style>



h1{
  color: green;

}

.pozadi{
  background:rgba(255, 255, 255, 0.9);
  /*border: 2px solid darkgreen;*/
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  
}

.bg {
  background-image: url("./../assets/images/navrhpozadi2.jpg");
  height: auto;
  margin: auto;
  opacity: 1;
}

#app .btn-primary {
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.1);
    border: 1.5px solid green;
  border-radius: 10px;
  display: block;
  padding: 18px;
  background-color: green;
  color: white;
  width: 220px;
  
}

#app a .btn-primary  {
  color: white;
  text-decoration: none;
}

#app a .btn-primary:hover {
  text-decoration: none;
}

#app .btn-primary:hover,
#app .btn-primary:active {
  color: white;
 border: 1.5px solid #049e04;
  text-decoration: none;
    background: darkgreen;
}

#app .btn-outline-secondary {
  box-shadow: 3px 3px 12px 0px rgba(0, 0, 0, 0.1);
  border: 1.5px solid green ;
  border-radius: 10px;
  display: block;
  padding: 18px;
  background-color: white;
  width: 220px;
}

#app  a .btn-outline-secondary{
  color: green;
}

#app .btn-outline-secondary:hover,
#app .btn-outline-secondary:active {
  border: 1.5px solid #049e04;
  transition-duration: 0.1s;
  text-decoration: none;
    background:green ;
}

#app a .btn-outline-secondary:hover,
#app a .btn-outline-secondary:active {
  text-decoration: none;
    color: white;
}

#app a:hover,
#app a:active{
  text-decoration: none;
}
</style>
