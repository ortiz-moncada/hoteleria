import Inicio from "../components/Inicio.vue"
import Actividades from "../components/Actividades.vue"
import Habitaciones from "../components/Habitaciones.vue"
import Servicios from "../components/Servicios.vue"
import Reservas from "../components/Reservas.vue"
import {createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path: "/", component: Inicio},
    {path: "/actividades", component: Actividades},
    {path: "/habitaciones", component: Habitaciones},
    {path: "/servicios", component: Servicios},
    {path: "/reservas", component: Reservas}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})