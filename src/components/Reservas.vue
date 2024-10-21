  <template>


  <div class="conten">



<br>


<div class="LasH"> <h2>Registro</h2></div>
<br><hr><br>

  <div class="Login">

<br><br><br>


<div class="stad1">

  <div>
    <h5 class="LasIn">Nombre</h5>
    <input v-model="nombre" class="NOMBREI" type="text" placeholder="Ingrese nombre completo">
  </div>

  <div>
    <h5 class="LasIn">Contraseña</h5>
    <input v-model="contraseña" class="NOMBREI" type="text" placeholder="Ingrese contraseña">
  </div>
 
</div>

<br>

<div class="stad2">
  <div>
    <h5 class="LasIn">Numero Telefonico</h5>
    <input v-model="telefono" class="NUMBERI" type="number" placeholder="Ingrese numero telefonico">
  </div>

  <div>
    <h5 class="LasIn">Confirmar Contraseña</h5>
    <input v-model="confirmarContraseña" class="NUMBERI" type="password" placeholder="Ingrese contraseña">
  </div>

</div>
<br>
<div class="stad3">
  <h5 class="LasIn">Correo Electronico</h5>
  <input v-model="CorreoE" class="CORREOI" type="email" placeholder="Ingrese correo eletronico">
</div>



<br><br>
<button class="BotonV2" @click="ValidarRegistro">Registrar</button>

<br><br>

</div>
<br><hr><br>

<div class="LasH"> <h2>Ubicacion</h2></div>
<br>
    
    <br>
<div class="Ubicacion">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44023.18297159253!2d-74.80610673520599!3d11.02435146580968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42dad1c5ee177%3A0x4e6e402e4d9fb2ce!2sHotel%20Movich%20Bur%C3%B3%2051!5e0!3m2!1ses!2sco!4v1729171025845!5m2!1ses!2sco" 
  width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<br><hr><br>



<br><br>


<div class="Juan">

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
import { ref } from 'vue';
import Swal from 'sweetalert2';

const nombre = ref('');
const contraseña = ref('');
const confirmarContraseña = ref('');
const telefono = ref('');
const CorreoE = ref('');


function ValidarRegistro() {

  if (nombre.value.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingrese su nombre completo.',
    });
  }  else if (contraseña.value.trim() === ' ') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingrese una contraseña.',
    });
  } else if (confirmarContraseña.value.trim() === ' ') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, confirme su contraseña.',
    });
  } else if (contraseña.value !== confirmarContraseña.value) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Las contraseñas no coinciden.',
    });
  } else if (telefono.value.trim() === ' ') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor ingrese un número de teléfono válido.',
    });
  } else if (CorreoE.value.trim() === ' ') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingrese un correo electrónico válido.',
    });
  } else{
    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso!',
      text: 'Gracias por registrarte.',
    });
  }
}


</script>

  <style scoped>
*{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
input {
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
}
.Login{
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.5999649859943977) 0%);
  width: 50%;
  margin-left:25% ;
  border-radius: 10px;
  border: 3px solid black;
}
.NR,.Redes{

color: aliceblue;
}
.Juan{
  background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.5495448179271709) 0%);
color: aliceblue;
}
.footer-bottom{
  background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.5495448179271709) 0%);
color: aliceblue;
}
.conten{
  background-image: url(https://cdn.pixabay.com/photo/2018/02/27/06/30/skyscrapers-3184798_1280.jpg);
  background-size: 100% 100%;

}

.Ubicacion{
margin-left: 30%;
width: 39.5%;
}
.LasIn{
color: aliceblue;
text-align: center;
}

 .NUMBERI,.NOMBREI{
  margin-left: 16%;
  width: 70%;
  height: 40px;
  border: none;
  border-radius: 10px;

 }

 .CORREOI{
  margin-left: 7%;
  width: 87%;
  height: 40px;
  border: none;
  border-radius: 10px;
 }

.stad1, .stad2{
  display: grid;
  grid-template-columns: 50% 50%;
}

 .ERO{
  text-align: center;
  color: aliceblue;
 }
 .BotonV2 {
  background-color: black;
  border: 2px solid white;
  color: white;

  padding: 10px;
  width: 90%;
  margin-left: 6%;
  cursor: pointer;
  border-radius: 5px;
}

.BotonV2:hover {
  background-color: white;
  color: black;
}
  
  </style>