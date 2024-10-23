<template>
  <div class="Container">

<div class="Elgo"> 
  <div><img class="Elogo1" src="https://cdn-icons-png.flaticon.com/128/5321/5321238.png" alt="Logo Hotel"></div>
  <div><h2 class="Title">LA GRAN MANSION</h2></div>
  <div><img class="Elogo2" src="https://cdn-icons-png.flaticon.com/128/5321/5321238.png" alt="Logo Hotel"></div>

</div>



<div>
  <q-tabs 
        v-model="tab"
        outside-arrows
        mobile-arrows
        class="bg-orange-text-white-shadow-2"
        id="BarraP"
      >
        <q-tab  name="inicio" label="inicio" @click="goTo('/')" />
        <q-tab name="habitaciones" label="habitaciones" @click="goTo('/habitaciones')" />
        <q-tab name="servicios" label=" servicios"  @click="goTo('/servicios')"/>
        <q-tab name="actividades" label="actividades"  @click="goTo('/actividades')"/>
        <q-tab name="reservas" label=" reservas"  @click="goTo('/reservas')"/>
      </q-tabs>

  <router-view></router-view>
</div>


</div>
  
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const tab = ref("inicio");

const goTo = (path) => {
  router.push(path);
};  


</script>


<style>
*{
  margin: 0;
  padding: 0;
}
.Elgo{
  display: grid;
  grid-template-columns: 20% 60% 20%;
  background-color: black;
  color: #fff;
  height: 90px;
  text-align: center;
  font-family: initial;
}

.Elogo1 {
  border: 2px white solid;
  border-radius: 50%;
  width: 30%;
  margin: 2.5%;
}

.Elogo2 {
  border: 2px white solid;
  border-radius: 50%;
  width: 30%;
  margin: 2.5%;

}

#BarraP{
  background-color: black;
  color: #f0f0f0;
}


.Title{
  padding: 1%;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.Container{
  background-color:#ecebed;
}

</style>