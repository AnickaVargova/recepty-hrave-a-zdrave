<template>
  <div class="okno position-relative">
    <div class="container light-green">
    <h2>Máš chuť na tyto recepty:</h2>


    <router-link to="/detail"
        >
        <div class="detail white container">
          <h4 class="text-center dark-green">Kuřecí na kari</h4>
          <div class="row">
            <div class="col-5 skryty-postup">
              
                <p class="text-dark"> Uvařte rýži dle návodu. Maso nakrájejte a osmahněte na pánvi s troškou ffffffff...</p>
              
            </div>
            
            <img src="./../assets/images/kurecinakari.jpg" class="ml-3 col-6 kureci" height="100px" max-width="40px"/>
          </div>
        </div></router-link
      >

      <router-link to="/detail"
        ><div id="zacatek">
          <div id="obrazek">Obrázek</div>
          <h3>Název receptu</h3>
        </div></router-link
      >
      <router-link to="/detail"
        ><div id="zacatek">
          <div id="obrazek">Obrázek</div>
          <h3>Název receptu</h3>
        </div></router-link
      >
      <router-link to="/detail"
        ><div id="zacatek">
          <div id="obrazek">Obrázek</div>
          <h3>Název receptu</h3>
        </div></router-link
      >
      <router-link to="/detail"
        ><div id="zacatek">
          <div id="obrazek">Obrázek</div>
          <h3>Název receptu</h3>
        </div></router-link
      >
    </div>
    <div class="container light-green">
      <div class="row d-flex">
      <router-link class="col-4 flex-fill border text-center  dark-green font-weight-bold" to="/">?Zpět?</router-link>
      <router-link class="col-4 flex-fill border text-center dark-green font-weight-bold" to="/hra2">Hraj znovu</router-link>
     <router-link class="col-4 flex-fill border text-center dark-green font-weight-bold" to="/vyhledavani">Kategorie</router-link>
      </div>
    </div>
  </div> <!-- <div class="recept">
      <h3>
        Recept 1
      </h3> -->
      <!-- <div id="obrazek">Obrazek</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        blanditiis vitae modi tempora, perspiciatis quos dicta repellat incidunt
        repudiandae ab dolores magnam delectus doloribus, excepturi voluptas
        totam vel temporibus ad!
      </p>
      <button><router-link to="/detail">Detail</router-link></button>
    </div>
    <div class="recept">
      <h3>
        Recept 2
      </h3>
      <div id="obrazek">Obrazek</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        blanditiis vitae modi tempora, perspiciatis quos dicta repellat incidunt
        repudiandae ab dolores magnam delectus doloribus, excepturi voluptas
        totam vel temporibus ad!
      </p>
      <button><router-link to="/detail">Detail</router-link></button>
    </div>
    <div class="recept">
      <h3>
        Recept 3
      </h3>
      <div id="obrazek">Obrazek</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        blanditiis vitae modi tempora, perspiciatis quos dicta repellat incidunt
        repudiandae ab dolores magnam delectus doloribus, excepturi voluptas
        totam vel temporibus ad!
      </p>
      <button><router-link to="/detail">Detail</router-link></button>
    </div>
    <div class="recept">
      <h3>
        Recept 4
      </h3>
      <div id="obrazek">Obrazek</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        blanditiis vitae modi tempora, perspiciatis quos dicta repellat incidunt
        repudiandae ab dolores magnam delectus doloribus, excepturi voluptas
        totam vel temporibus ad!
      </p>

      <button><router-link to="/detail">Detail</router-link></button>
    </div> -->
</template>

<script>
export default {};
</script>

<style>
.kureci{
  height: 125px;
  width:50px;
}

.skryty-postup{
  height: 125px;
  width: 20px;
  border: 1px solid black;
  text-align: inter-word;
}

.recept {
  border: 2px solid black;
  width: 80vw;
  margin: 10px;
}

.white{
  background-color: white;
  border: 3px solid darkgreen;
  height: 175px;
}
</style>
