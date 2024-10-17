<template>
  <div class="contenedor">
    <div>
   
      <div class="Limg"> 
      <div id="carrusel-contenido">
            <div id="carrusel-caja">
                <div class="carrusel-elemento">
                    <img class="imagenes" src="https://www.sofitelbarucalablanca.com/wp-content/uploads/sites/19/2023/04/T3P_1211-HDR-1170x780.jpg" >
                </div>
                <div class="carrusel-elemento">   
                    <img class="imagenes" src="https://nexdom.racc.es/wp-content/uploads/2020/12/decoracion-habitacion-lujo-5.jpg">
                </div>
                <div class="carrusel-elemento">   
                    <img class="imagenes" src="https://images.homify.com/v1533696547/p/photo/image/2669961/..011-RESIDENCIAL.jpg">                        
                </div>
            </div>
        </div>
    </div>


      <div class="Torna">
        <img class="Elogo" src="https://cdn-icons-png.flaticon.com/128/17299/17299405.png" alt="" />
        <div class="NombreHotel">
          <h2>La Gran Mansion</h2>
          <h5>HOTEL</h5>
        </div>
        <div class="TextM">
          <h5>Disfruta de la mejor experiencia con tu familia</h5>
        </div>
      </div>


<div class="LasH"> <h2>Nuestras Habitaciones</h2></div>
<br>
    <hr>
    <br>

      <div class="ComtemTheRoom">
        <div class="carta" v-for="habitacion in habitaciones" :key="habitacion.habitacion">
          <div><h3>Habitación {{ habitacion.habitacion }}</h3></div>
          <div class="Imagen">
            <img :src="habitacion.imagen" :alt="'Imagen de la habitación ' + habitacion.habitacion">
          </div>
          <div class="descripcion">
            <p>{{ habitacion.descripcion }}</p>
          </div>
          <div class="precio">
            <strong>{{ habitacion.precio.toLocaleString() }} COP</strong>
          </div>
          <button class="BotonV">Hacer reserva</button>
        </div>



      </div>

    </div>


    <br>

<hr>

<div class="NR">
<h2>Nuestras Redes</h2>
</div>

<br><br>


<div class="Redes">
<img class="wa" src="https://img.icons8.com/?size=512&id=16713&format=png" >
<img  class="wa" src="https://i.pinimg.com/originals/bf/70/a6/bf70a612edf2ce2b7b80865989d6df0a.png">
<img class="wa"  src="https://static.vecteezy.com/system/resources/previews/018/930/413/non_2x/instagram-logo-instagram-icon-transparent-free-png.png">
<img  class="wa" src="https://static.vecteezy.com/system/resources/previews/042/148/611/non_2x/new-twitter-x-logo-twitter-icon-x-social-media-icon-free-png.png">
<img class="wa" src="https://cdn.icon-icons.com/icons2/2201/PNG/512/twitter_logo_circle_icon_134015.png" >

</div><br><br><br><br>


<hr><br><br>


<div class="Juan">

  <div class="footer-container">
            <div class="footer-column">
                <h4>Categorías</h4>
                <ul>
                    <li><a href="#">Países</a></li>
                    <li><a href="#">Regiones</a></li>
                    <li><a href="#">Ciudades</a></li>
                    <li><a href="#">Zonas</a></li>
                    <li><a href="#">Aeropuertos</a></li>
                    <li><a href="#">Hoteles</a></li>
                    <li><a href="#">Lugares de interés</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Alojamientos</h4>
                <ul>
                    <li><a href="#">Casas</a></li>
                    <li><a href="#">Apartamentos</a></li>
                    <li><a href="#">Resorts</a></li>
                    <li><a href="#">Villas</a></li>
                    <li><a href="#">Albergues</a></li>
                    <li><a href="#">Hostales y pensiones</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Servicios</h4>
                <ul>
                    <li><a href="#">Alojamientos únicos</a></li>
                    <li><a href="#">Opiniones</a></li>
                    <li><a href="#">Artículos de viajes</a></li>
                    <li><a href="#">Ofertas de temporada</a></li>
                    <li><a href="#">Traveller Review Awards</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Viajes</h4>
                <ul>
                    <li><a href="#">Alquiler de coches</a></li>
                    <li><a href="#">Buscador de vuelos</a></li>
                    <li><a href="#">Reservas en restaurantes</a></li>
                    <li><a href="#">Booking para Agentes de viajes</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Compañía</h4>
                <ul>
                    <li><a href="#">Preguntas frecuentes</a></li>
                    <li><a href="#">Atención al cliente</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Sostenibilidad</a></li>
                    <li><a href="#">Términos y condiciones</a></li>
                    <li><a href="#">Política de privacidad</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Copyright © 1996–2024 Booking.com™. Todos los derechos reservados.</p>
        </div>

</div>

  </div>
  
</template>

<script setup>
let habitaciones = [
  {
    imagen: "https://images.homify.com/v1533696547/p/photo/image/2669961/..011-RESIDENCIAL.jpg",
    habitacion: "101",
    descripcion: "Habitación cuádruple con 4 camas o familiar (con cama grande y litera). Las habitaciones cuádruples tienen cuatro camas.",
    precio: 300000,
  },
  {
    imagen: "https://nexdom.racc.es/wp-content/uploads/2020/12/decoracion-habitacion-lujo-5.jpg",
    habitacion: "102",
    descripcion: "Habitación individual acogedora con cama grande y vistas a la ciudad.",
    precio: 200000,
  },
  {
    imagen: "https://www.sofitelbarucalablanca.com/wp-content/uploads/sites/19/2023/04/T3P_1211-HDR-1170x780.jpg",
    habitacion: "103",
    descripcion: "Habitación doble con dos camas y balcón con vistas al jardín.",
    precio: 250000,
  },
  {
    imagen: "https://media.ambito.com/p/0c5616e28bf58d0403a76b5cc372f420/adjuntos/239/imagenes/036/681/0036681201/1200x675/smart/2jpg.jpg",
    habitacion: "104",
    descripcion: "Suite de lujo con cama king-size, bañera de hidromasaje y balcón privado.",
    precio: 600000,
  },
  {
    imagen: "https://nexdom.racc.es/wp-content/uploads/2020/12/decoracion-habitacion-lujo-3-1.jpg",
    habitacion: "105",
    descripcion: "Habitación familiar con dos camas grandes, ideal para grupos o familias.",
    precio: 400000,
  },
  {
    imagen: "https://static.hosteltur.com/app/public/uploads/img/articles/2017/04/01/L_5b150b07011a7_hoteles-minutos.jpg",
    habitacion: "106",
    descripcion: "Habitación ejecutiva con escritorio, conexión Wi-Fi de alta velocidad y cama doble.",
    precio: 350000,
  },
  {
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29fwUQhRaIp69ZmPO5BzcjL5M5C91YE9jjw&s",
    habitacion: "107",
    descripcion: "Habitación con vistas panorámicas al mar y una cama tamaño queen.",
    precio: 450000,
  },
  {
    imagen: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-905041919418106591/original/1ed33e8f-7fe1-498f-a23d-c97cc8cf582d.jpeg?im_w=720",
    habitacion: "108",
    descripcion: "Habitación con balcón privado y mobiliario moderno, ideal para parejas.",
    precio: 320000,
  },
  {
    imagen: "https://media.istockphoto.com/id/1362692369/es/foto/moderno-lujo-hermoso-interior-con-ventanas-panor%C3%A1micas-dormitorio-de-dise%C3%B1o-con-iluminaci%C3%B3n.jpg?s=612x612&w=0&k=20&c=b0W7JEjvrOgSenISUrI_aN7Ob1Sq0nVw5JytY4l_nx4=",
    habitacion: "109",
    descripcion: "Habitación deluxe con cama king-size y baño privado con ducha de hidromasaje.",
    precio: 500000,
  },
  {
    imagen: "https://admin.accessiblemadrid.com/news/common/rosewood-villa-magna-accesible-hotel-accessible-luxury-lujo-4-madrid_3.jpg",
    habitacion: "110",
    descripcion: "Habitación con acceso directo a la piscina y terraza privada.",
    precio: 550000,
  },
];
</script>

<style>
.ComtemTheRoom {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.LasH{
  text-align: center;
  margin: 3%;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.carta {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  max-width: 300px;
  text-align: center;
  background-color: #cecdd2;
}

.Imagen img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.precio {
  color: green;
  font-size: 1.2em;
  margin-top: 10px;
}

.BotonV {
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
}

.BotonV:hover {
  background-color: white;
  color: black;
}





.footer-container {
    display: flex;
    justify-content: space-around;
    padding: 0 10px;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-column {
    flex: 1;
    margin: 0 15px;
}

.footer-column h3 {
    margin-bottom: 10px;
    color: #333;
}

.footer-column ul {
    list-style-type: none;
}

.footer-column ul li {
    margin-bottom: 8px;
}

.footer-column ul li a {
    color: #0066cc;
    text-decoration: none;
}

.footer-column ul li a:hover {
    text-decoration: underline;
}

.footer-bottom {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    color: #666;
}
</style>
