<template>
  <div class="okno container-fluid bg img-fluid">
    
    
      <div class="row justify-content-center ">
        <div class="col-md-6 pozadi">
          <h1 class="text-center">Nadpis H1</h1>

          <button class="btn btn-primary">
            <router-link to="/hra1">CHYŤ SI SVÉ JÍDLO</router-link>
          </button>
          <button class="btn btn-outline-secondary">
            <router-link to="/hra2">NA CO MÁŠ CHUŤ?</router-link>
          </button>
          <button class="btn btn-outline-secondary">
            <router-link to="/vyhledavani">VYHLEDÁVÁNÍ RECEPTŮ</router-link>
          </button>
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
  background-color: white;
  border: 2px solid green;
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.9);
  border-radius: 10px;
}

.bg {
  background-image: url("./../assets/images/navrhpozadi2.jpg");
  height: auto;
  margin: auto;
  opacity: 1;
}



#app .btn-primary {
  box-shadow: 10px 10px 38px 0px rgba(0, 0, 0, 0.4);
  border: darkgrey;
  border-radius: 10px;
  display: block;
  margin: 40px auto;
  padding: 18px;
  background-color: green;
  color: white;
}

#app .btn-primary a {
  color: white;
}

#app .btn-primary a:hover {
  text-decoration: none;
  font-weight: 600;
}

#app .btn-primary:hover,
#app .btn-primary:active {
  color: white;
  border: 3px solid white;
  background-color: darkgreen;
  transition-duration: 0.1s;
  text-decoration: none;
}

#app .btn-outline-secondary {
  box-shadow: 3px 3px 12px 0px rgba(0, 0, 0, 0.4);
  border: 1.5px solid green;
  border-radius: 10px;
  display: block;
  margin: 40px auto;
  padding: 18px;
  background-color: white;
}

#app .btn-outline-secondary a {
  color: green;
}

#app .btn-outline-secondary:hover,
#app .btn-outline-secondary:active {
  border: 3px solid green;
  transition-duration: 0.1s;
  font-weight: 600;
}

#app .btn-outline-secondary a:hover,
#app .btn-outline-secondary a:active {
  color: green;
  text-decoration: none;
}


</style>
