<template>


  <div>

  <div class="LasH"><h2>Nuestros Servicios</h2></div>


  <br>
    <hr>
    <br>

  
  <div class="ComtemTheRoom">

    <div class="cartaServisios" v-for="Actividad in ActividadesHotel" :key="Actividad.Actividad">
      <br>
      <br>
      <h5>{{ Actividad.nombre }}</h5>
      <br>
      <p>{{ Actividad.descripcion }}</p>
      <h6>{{ Actividad.horario }}</h6>
      <br>
      <div id="carrusel-contenido">
            <div id="carrusel-caja">
                <div class="carrusel-elemento">
                    <img class="imagenes" :src= "Actividad.imagen1" >
                </div>
                <div class="carrusel-elemento">   
                    <img class="imagenes" :src= "Actividad.imagen2">
                </div>
                <div class="carrusel-elemento">   
                    <img class="imagenes" :src="Actividad.imagen3">                        
                </div>
            </div>
        </div>
        <br><br><br>
      
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
let ActividadesHotel = [
  {
    imagen:"https://images.squarespace-cdn.com/content/v1/57e1ac16d482e96cd838d1e1/1589579356366-3LLGTKD1YO4I0VEQTCJ0/spa-aroma3.jpg?format=2500w",
    nombre: "Spa y Masajes",
    descripcion: "Relájate en nuestro spa de lujo con masajes personalizados, sauna, y tratamientos faciales y corporales.",
    horario: "9:00 AM - 8:00 PM",
    imagen1: "https://vanitasespai.es/wp-content/uploads/2015/05/Masajes-spa.jpg",
    imagen2: "https://cuponassets.cuponatic-latam.com/backendPe/uploads/imagenes_descuentos/98394/cf1d12c9b2f77d3199bdb3709eecd8cedd6dc6c0.S.jpg",
    imagen3: "https://www.pranaspa.com.co/wp-content/uploads/2022/02/facial-1.jpg",
  },
  {
    imagen:"https://legadosolidario.unicef.org.co/sites/default/files/2022-06/22b8a8be-d5a9-48c3-b449-1e795acb9ec3_4.jpg",
    nombre: "Clases de Yoga",
    descripcion: "Participa en clases de yoga al aire libre, ideales para relajación y meditación.",
    horario: "7:00 AM - 9:00 AM",
    imagen1:"https://www.triptomax.com/wp-content/uploads/2022/03/Triptomax-Estres-Yoga-Relajacio%E2%95%A0un-scaled.jpg",
    imagen2:"https://media.glamour.mx/photos/64cabc673262fd0ceba73394/16:9/w_2560%2Cc_limit/postura-de-yoga-para-principiantes.jpg",
    imagen3:"https://oxigenioacademia.com.br/wp-content/uploads/2019/11/original-7919d57f397789f4b10651d1837c8bea.jpg",
  },
  {
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgb24JWzqfWb3LWpnLbSf9R987dJ8EWpITw&s",
    nombre: "Cata de Vinos",
    descripcion: "Descubre una selección exclusiva de vinos locales e internacionales guiado por nuestro sommelier.",
    horario: "5:00 PM - 7:00 PM",
    imagen1:"https://buenisimo.mx/images/easyblog_articles/455/b2ap3_large_mejores-vinos-tintos-dulces.webp",
    imagen2:"https://www.bodegascanopy.com/wp-content/uploads/2021/02/Como-hacer-una-cata-de-vino.jpg",
    imagen3:"https://www.vinetur.com/imagenes/2017/noviembre/30/cata_vinos.jpg",
  },
  {
    imagen:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/96/ac/2a.jpg",
    nombre: "Excursiones Culturales",
    descripcion: "Únete a visitas guiadas por sitios históricos y culturales cercanos, con guías expertos.",
    horario: "10:00 AM - 4:00 PM",
    imagen1:"https://cartagenatoures.co/wp-content/uploads/2022/12/chiva_3997139_20201216111803-2.jpg",
    imagen2:"https://images.ecestaticos.com/0jLPqDiu07v1e6mH59lopV20uLQ=/0x0:1253x836/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb87%2F393%2F118%2Fb8739311867e0cb5a8c8276a921be2df.jpg",
    imagen3:"https://img.freepik.com/fotos-premium/fomentar-participacion-excursiones-culturales_1169648-114427.jpg",
  },
  {
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCT4Xil17gVOwCKW-TmhVqV0PYfkN7n_sl7w&s",
    nombre: "Gimnasio ",
    descripcion: "Disfruta de nuestro gimnasio con equipamiento moderno o contrata un entrenador personal.",
    horario: "24 horas",
    imagen1:"https://www.primalstrength.com/cdn/shop/files/gymdesign_render_Two_collumn_grid_cb1b5850-fa8e-4a7b-a2b3-190c2e45facd.jpg?v=1680719688&width=1500",
    imagen2:"https://eurofitness.com/wp-content/uploads/2020/03/Cu%C3%A1l-es-la-mejor-hora-para-ir-al-gym-y-por-qu%C3%A9.jpg",
    imagen3:"https://i.blogs.es/a7dc34/2560_3000/1366_2000.jpeg",
  },
  {
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbV7IGUz5fniYX0RmZU5LjOyJyGf_3_p5vTw&s",
    nombre: "Piscina y Bar",
    descripcion: "Relájate en la piscina exterior con servicio de bar y vistas panorámicas.",
    horario: "10:00 AM - 7:00 PM",
    imagen1:"https://img.freepik.com/fotos-premium/bar-junto-piscina-disenado-meticulosamente-que-exhibe-variedad-bebidas-primer-nivel_798657-11312.jpg",
    imagen2:"https://www.burdeos-turismo.es/sites/bordeaux_tourisme/files/medias/widgets/misc/BARS%20%C3%80%20COCKTAILS%20Madame%20Pang%20Chef%20de%20Bar%20Anthony%20Guitard.jpg",
    imagen3:"https://www.metropol.gov.co/Style%20Library/parque-de-las-aguas/components/disfruta-las-aguas/img/piscina-recreativa-2.jpg ",
  },
  
  {
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxxyHTciC-MRl_E2rphBobuvWU4PM8cq6Hw&s",
    nombre: "Tenis y Pista de Pádel",
    descripcion: "Accede a nuestras pistas de tenis y pádel, disponibles para alquiler o clases privadas.",
    horario: "7:00 AM - 9:00 PM",
    imagen1:"https://img.menzig.fit/a/2000/2837-h1.jpg",
    imagen2:"https://www.tenisestepona.com/wp-content/uploads/2023/03/diferencias-entre-tenis-padel-foto.jpg",
    imagen3:"https://storage.googleapis.com/tribunabahia/uploads/2023/11/%C2%BFQue-es-el-Padel_-Origen-del-deporte-de-raqueta.jpeg",
  },
];




</script>

  
  <style scoped>
  .ComtemTheRoom{
    display: grid;
    grid-template-columns: 100%;
    width: 90%;
    margin-left: 5%;

  }

  .cartaServisios{
    text-align: center;
    border-radius: 10px;
    margin: 1%;
  }

#carrusel-contenido{
  width: 60%;
  box-shadow: 0px 0px 10px 10px gray;
  height: 400px;
  border-radius: 10px; ;
}
  
#carrusel-caja {
    -moz-animation: automatizacion 15s infinite linear;
    -o-animation: automatizacion 15s infinite linear;
    -webkit-animation: automatizacion 15s infinite linear;
    animation: automatizacion 15s infinite linear;
    -webkit-transition: all 0.75s ease;
    -moz-transition: all 0.75s ease;
    -ms-transition: all 0.75s ease;
    -o-transition: all 0.75s ease;
    transition: all 0.75s ease;
    height: 500px;
    width: 300%;
}

#carrusel-contenido {
    margin: 0 auto;
    overflow: hidden;
    text-align: left;
}
.imagenes{
    height: 400px;
    border-radius: 10px;
    width: 100%;
    transition: transform 0.3s ease;
}.imagenes:hover{
    transform: scale(1.1);
}
.carrusel-elemento {
    float: left;
    width: 33.333%;
}
@-moz-keyframes automatizacion {
    0% {
        margin-left: 0;
    }
    30% {
        margin-left: 0;
    }
    35% {
        margin-left: -100%;
    }
    65% {
        margin-left: -100%;
    }
    70% {
        margin-left: -200%;
    }
    95% {
        margin-left: -200%;
    }
    100% {
        margin-left: 0;
    }
}
@-webkit-keyframes automatizacion {
    0% {
        margin-left: 0;
    }
    30% {
        margin-left: 0;
    }
    35% {
        margin-left: -100%;
    }
    65% {
        margin-left: -100%;
    }
    70% {
        margin-left: -200%;
    }
    95% {
        margin-left: -200%;
    }
    100% {
        margin-left: 0;
    }
}
@keyframes automatizacion {
    0% {
        margin-left: 0;
    }
    30% {
        margin-left: 0;
    }
    35% {
        margin-left: -100%;
    }
    65% {
        margin-left: -100%;
    }
    70% {
        margin-left: -200%;
    }
    95% {
        margin-left: -200%;
    }
    100% {
        margin-left: 0;
    }
  }
  
  </style>