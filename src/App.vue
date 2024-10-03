<template>
<div>
  <q-tabs 
        v-model="tab"
        no-caps
        outside-arrows
        mobile-arrows
        class="bg-orange text-white shadow-2"
      >
        <q-tab  name="inicio" label="inicio" @click="goTo('/')" />
        <q-tab name="habitaciones" label="habitaciones" @click="goTo('/habitaciones')" />
        <q-tab name="servicios" label=" servicios"  @click="goTo('/servicios')"/>
        <q-tab name="actividades" label="actividades"  @click="goTo('/actividades')"/>
        <q-tab name="reservas" label=" reservas"  @click="goTo('/reservas')"/>
      </q-tabs>

  <router-view></router-view>
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