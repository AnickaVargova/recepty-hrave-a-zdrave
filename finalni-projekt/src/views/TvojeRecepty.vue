<template>
  <div class="okno position-relative">
    <div class="container light-green hlavni2">
      <h2 class="pt-4 m-0 dark-green">Máš chuť na tyto recepty:</h2>
    </div>
    <div class="container light-green">
      <div class="row">


        <div class="detail col-12 col-md-6 col-lg-3">
          <router-link to="/detail">
            <div class="white">
              <h3 class="dark-green text-center text-decoration-none pt-2">Název receptu</h3>
              <div class="media d-flex align-items-center">
                <div class="media-body">          
                  <p class="text-dark ml-2 mp-2">Tady bude začátek receptu, který se po nějaké době schová...</p>
                </div>
                
                <img src="./../assets/images/kurecinakari.jpg"  class="align-self-center mr-3 obrazek img-fluid rounded"/>
                
              </div>
              
            </div>
          </router-link>
        </div>


     <div class="detail col-12 col-md-6 col-lg-3">
          <router-link to="/detail">
            <div class="white">
              <h3 class="dark-green text-center text-decoration-none pt-2">Název receptu</h3>
              <div class="media d-flex align-items-center">
                <div class="media-body">          
                  <p class="text-dark ml-2 mp-2">Tady bude začátek receptu, který se po nějaké době schová...</p>
                </div>
                
                <img src="./../assets/images/kurecinakari.jpg"  class="align-self-center mr-3 obrazek img-fluid rounded"/>
               
              </div>
              
            </div>
          </router-link>
        </div>


       <div class="detail col-12 col-md-6 col-lg-3">
          <router-link to="/detail">
            <div class="white">
              <h3 class="dark-green text-center text-decoration-none pt-2">Název receptu</h3>
              <div class="media d-flex align-items-center">
                <div class="media-body">          
                  <p class="text-dark ml-2 mp-2">Tady bude začátek receptu, který se po nějaké době schová...</p>
                </div>
                
                <img src="./../assets/images/kurecinakari.jpg"  class="align-self-center mr-3 obrazek img-fluid rounded"/>
                
              </div>
              
            </div>
          </router-link>
        </div>

     <div class="detail col-12 col-md-6 col-lg-3">
          <router-link to="/detail">
            <div class="white">
              <h3 class="dark-green text-center text-decoration-none pt-2">Název receptu</h3>
              <div class="media d-flex align-items-center">
                <div class="media-body">          
                  <p class="text-dark ml-2 mp-2">Tady bude začátek receptu, který se po nějaké době schová...</p>
                </div>
                
                <img src="./../assets/images/kurecinakari.jpg"  class="align-self-center mr-3 obrazek img-fluid rounded"/>
                
              </div>
              
            </div>
          </router-link>
        </div>

      </div>
        

    </div>
      <div class="menu container light-green">
        <div class="row d-flex">
          <router-link
            class="col-4 flex-fill border text-center dark-green font-weight-bold"
            to="/"
          >?Zpět?</router-link>
          <router-link
            class="col-4 flex-fill border text-center dark-green font-weight-bold"
            to="/hra2"
          >Hraj znovu</router-link>
          <router-link
            class="col-4 flex-fill border text-center dark-green font-weight-bold"
            to="/vyhledavani"
          >Kategorie</router-link>
        </div>
      </div>
    
  </div>
  
</template>

<script>
export default {};
</script>


<style>

.hlavni2{
  border-bottom:2px solid lightgreen;
}
.obrazek{
  max-width:180px;
  max-height:120px;
}

.white {
  background-color: white;
  border: 3px solid darkgreen;
  height: 200px;
  widows: 400px;
}

p {
  text-decoration: none;
}
</style>
