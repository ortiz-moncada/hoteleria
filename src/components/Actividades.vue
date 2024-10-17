<template>


  <div>
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
  <img class="Elogo" src="https://cdn-icons-png.flaticon.com/128/17299/17299405.png" alt="">
  <div class="NombreHotel">
  <h2>La Gran Mansion</h2>
  <h5>HOTEL</h5>
  </div>
  <div class="TextM">
  <h5>Disfruta de la mejor experiencia con tu familia</h5>
  </div>
  </div>
  
  </div>


  <div class="LasH"><h2>Nuestras Actividades Extremas</h2></div>

  <br><hr><br>

  
  <div class="ComtemTheRoom">

  
    
    <div class="CartaActividades" v-for="Actividad in ActividadesExtremas" :key="Actividad.Actividad">
      <img class="LimgA" :src="Actividad.imagen" alt="">
      <br>
      <h5>{{ Actividad.nombre }}</h5>
      <br>
      <h6 class="Solo">{{ Actividad.descripcion }}</h6>
      <br>
      <button class="BTN">Mas información</button>
      <br>
    </div>


  
  </div>


  <br>
    <hr>
    <br>

    <div class="NR">
      <h2>Nuestras Redes</h2>
    </div>
    <br><br>
    <div class="Redes">
      <img class="wa" src="https://img.icons8.com/?size=512&id=16713&format=png" >
      <img class="wa" src="https://i.pinimg.com/originals/bf/70/a6/bf70a612edf2ce2b7b80865989d6df0a.png">
      <img class="wa" src="https://static.vecteezy.com/system/resources/previews/018/930/413/non_2x/instagram-logo-instagram-icon-transparent-free-png.png">
      <img class="wa" src="https://static.vecteezy.com/system/resources/previews/042/148/611/non_2x/new-twitter-x-logo-twitter-icon-x-social-media-icon-free-png.png">
      <img class="wa" src="https://cdn.icon-icons.com/icons2/2201/PNG/512/twitter_logo_circle_icon_134015.png" >
    </div>
    

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

let ActividadesExtremas = [
  {
    nombre: "Paracaidismo",
    descripcion: "Consiste en saltar desde un avión en movimiento a gran altitud y descender utilizando un paracaídas.",
    imagen: "https://deportesriesgo.com/wp-content/uploads/paracaidismo-deporte-1280x720.jpg"
  },
  {
    nombre: "Buceo en cuevas",
    descripcion: "Explorar cuevas submarinas, con los desafíos adicionales de la oscuridad y la navegación en entornos estrechos.",
    imagen: "https://jg-scubadiving.com/wp-content/uploads/2023/08/Formation-IANTD-Cave-diver-1024x576.jpg"
  },
  {
    nombre: "Alpinismo",
    descripcion: "Escalar montañas de gran altitud, enfrentándose a condiciones climáticas extremas y terreno accidentado.",
    imagen: "https://fempa.net/wp-content/uploads/2024/01/7-CONCENTRACION-EQUIPO-ALPINISMO-FEMPA-7-1024x576.jpeg"
  },
  {
    nombre: "Rafting en aguas bravas",
    descripcion: "Descenso por ríos con rápidos de gran intensidad, desafiando las corrientes y obstáculos naturales.",
    imagen: "https://26537800.fs1.hubspotusercontent-eu1.net/hub/26537800/hubfs/WEBSITE%20RESIZE%20IMAGES/Day%20Tours/2023-WHITEWATER%20RAFTING-03.webp?height=640&name=2023-WHITEWATER%20RAFTING-03.webp"
  },
  {
    nombre: "Salto BASE",
    descripcion: "Saltar desde estructuras fijas como edificios, puentes o acantilados, utilizando un paracaídas.",
    imagen: "https://static.wixstatic.com/media/179b3c_66aa9644ad73432a9426e4abbf1d7b4e~mv2.jpg/v1/fill/w_640,h_418,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/179b3c_66aa9644ad73432a9426e4abbf1d7b4e~mv2.jpg"
  },
  {
    nombre: "Escalada en roca",
    descripcion: "Escalar paredes naturales de roca utilizando solo cuerdas y equipo especializado.",
    imagen: "https://s1.abcstatics.com/media/bienestar/2021/08/15/escalada-ks3E--1248x698@abc.jpg"
  },
  {
    nombre: "Surf en olas gigantes",
    descripcion: "Montar olas de gran tamaño en condiciones extremas, enfrentándose a corrientes fuertes y riesgos naturales.",
    imagen: "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2019/03/07/adfd3e94-9352-4337-ae32-5fd7ec70ca02/italo-ferreira-surf-pipeline"
  },
  {
    nombre: "Wingsuit",
    descripcion: "Volar a gran velocidad usando un traje con alas desde grandes alturas, desafiando la gravedad y el viento.",
    imagen: "https://res.cloudinary.com/manawa/image/upload/v1639134412/articles/2708/63d792ce46aa1e511a534cfd5d0add11.jpg"
  }
];



</script>


  <style>
  .Solo{
    text-align: start;
  }
  .CartaActividades{
    border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  max-width: 300px;
  text-align: center;
  background-color: #cecdd2;
  }
  .LimgA{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
   }
   .BTN{
    padding: 10px 20px;
    background-color: #000000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
   }.BTN:hover{
    background-color: #ffffff;
    color: #000000;

   }
  
  </style>