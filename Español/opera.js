const taskForm = document.getElementById('Tours');
const trans = document.getElementById('trans');

const select = document.getElementById('Serch');

function Pack(){
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;

  taskForm.innerHTML = ``;
   trans.innerHTML = ``;
   trans.innerHTML = `<section id="contact-page">
    <div class="container">
      <div class="center">

        <h2>Creamos tu itinerario a tu medida </h2>
        <p>Dejanos los detalles y te contactaremos pronto</p>
      </div>


      <form action="https://formsubmit.co/info@thewanderlustcr.com" method="POST">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://www.thewanderlustcr.com/#Exito">
        <div class="form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Nombre" data-rule="minlen:3" data-msg="Ingrese al menos 4 caracteres"required />
              <div class="validation"></div>
            </div>
        <div class="form-group">
              <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Ingrese un email valido" required/>
              <div class="validation"></div>
            </div>
         <div class="form-group">
              <input type="text" class="form-control" name="Pick" id="Pick" placeholder="Hotel de recogida" data-rule="minlen:4"  data-msg="Ingrese un nombre valido de hotel" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="number" class="form-control" name="Days" id="Drop" placeholder="Cuanto tiempo estaras en el pais?" data-msg="Ingrese una cantidad valida" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="date" class="form-control" name="Date" id="start" data-rule="date"  data-msg="Fecha" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="number" class="form-control" name="number" id="number" placeholder="Cantidad de personas" data-rule="numer"  data-msg="Ingrese una fecha valida" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <textarea type="text" class="form-control" name="Description" id="Description" placeholder="Que te gustaria conocer" data-rule="minlen:4"  data-msg="Ingrese una descripcion valida" required></textarea>
              <div class="validation"></div>
            </div>

       <div class="text-center" id="confirmacion"><button type="submit" class="btn btn-primary btn-lg">Enviar</button></div>
    </form>
      <!--/.row-->
    </div>
    <!--/.container-->
  </section>`;
  document.getElementById("start").setAttribute("min", today);
    document.getElementById("start").setAttribute("value", today);
}

function rentACar(){
    var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;

  taskForm.innerHTML = ``;
   trans.innerHTML = ``;
   trans.innerHTML = `<section id="contact-page">
    <div class="container">
      <div class="center">

        <h2>Encuentra tu auto ideal </h2>
        <p>Dejanos los detalles y te contactaremos pronto </p>
      </div>


      <form action="https://formsubmit.co/info@thewanderlustcr.com" method="POST">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://www.thewanderlustcr.com/#Exito">
        <div class="form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Nombre" data-rule="minlen:3" data-msg="Ingrese al menos 4 caracteres" required />
              <div class="validation"></div>
            </div>
        <div class="form-group">
              <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Ingrese un email valido" required/>
              <div class="validation"></div>
            </div>
         <div class="form-group">
              <input type="text" class="form-control" name="Pick" id="Pick" placeholder="Hotel de recogida" data-rule="minlen:4"  data-msg="Ingrese un hotel valido" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="Drop" id="Drop" placeholder="Automatico / Manual o Ambos " data-rule="minlen:3"   data-msg="Ingrese un hotel valido" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="date" class="form-control" name="Date" id="start"  data-rule="date"  data-msg="Ingrese una fecha valida" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="number" class="form-control" name="number" id="number" placeholder="Pasajeros" data-rule="numer"  data-msg="Ingrese un numero valido" required/>
              <div class="validation"></div>
            </div>

       <div class="text-center" id="confirmacion"><button type="submit" class="btn btn-primary btn-lg">enviar</button></div>
    </form>
      <!--/.row-->
    </div>
    <!--/.container-->
  </section>`;
  document.getElementById("start").setAttribute("min", today);
    document.getElementById("start").setAttribute("value", today);
}



function Trasnport(){
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;

  taskForm.innerHTML = ``;
   trans.innerHTML = ``;
  trans.innerHTML +=`<div id="btn-menu" class="btn-menu">
       <a class="btn btn-primary btn-lg" href="javascript:void(0); ">Transporte privado</a>
       <a class="btn btn-primary btn-lg" href="javascript:void(0);">Tours privados</a>
       <a class="btn btn-primary btn-lg" href="javascript:void(0);">Shuttle</a>
    </div>

    <div id="PrivateTour">
      <div id="PrivateTour">
      <div class="Tit-Shut">
      <h2>Tours privados</h2>
      <p>4% impuestos (IVA), tendra que ser sumado desde Julio 2021 hasta Julio 2022 </p> 
      <p>H1 max 5 pasajeros  -  Hiace max 10 pasajreos </p> 
    </div>
    
    <table class="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Detalles</th>
      <th scope="col">Precio H1</th>
      <th scope="col">Precio Hiace</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>One day San Jose - Jaco</td>
      <td>Maximo 6 horas de espera</td>
      <td>$214</td>
      <td>$243</td>
    </tr>
    <tr>
      <td>One day San Jose - Manuel Antonio</td>
      <td>Maximo 6 horas de espera</td>
      <td>$271</td>
      <td>$300</td>
    </tr> 
     <tr>
      <td>One day San Jose - Arenal</td>
      <td>Maximo 6 horas de espera</td>
      <td>$257</td>
      <td>$286</td>
    </tr>
     <tr>
      <td>One day San Jose - Monteverde</td>
      <td>Maximo 6 horas de espera</td>
      <td>$279</td>
      <td>$307</td>
    </tr>
    <tr>
      <td>San Jose - Volcan Poas Tour</td>
      <td>Entradas no incluidas</td>
      <td>$143</td>
      <td>$170</td>
    </tr>
    <tr>
      <td>San Jose - Doka - Volcan Poas Tour</td>
      <td>Entradas no incluidas</td>
      <td>$157</td>
      <td>$186</td>
    </tr>
    <tr>
      <td>San Jose - Doka - Volcan Poas - La Paz Tour</td>
      <td>Entradas no incluidas</td>
      <td>$170</td>
      <td>$200</td>
    </tr>
    <tr>
      <td>San Jose - Volcan Irazu</td>
      <td>Entradas no incluidas</td>
      <td>$143</td>
      <td>$170</td>
    </tr>
    <tr>
      <td>San Jose - Volcan Irazu - Orosi & Lankaster</td>
      <td>Entradas no incluidas</td>
      <td>$193</td>
      <td>$221</td>
    </tr>
    <tr>
      <td>San Jose - Volcan Irazu - ruins of Cartago & Baisilica</td>
      <td>Entradas no incluidas</td>
      <td>$157</td>
      <td>$186</td>
    </tr>
    <tr>
      <td>Dinner in San Jose</td>
      <td>3 horas de espera</td>
      <td>$86</td>
      <td>$114</td>
    </tr>
    <tr>
      <td>San Jose City Tour</td>
      <td>Maximo 3 horas de espera</td>
      <td>$143</td>
      <td>$170</td>
    </tr>



  </tbody>
</table>
<a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
  <br>
  
    </div>
    </div>

    <div id="PrivateShuttle">
      
  <section id="contact-page">
    <div class="container">
      <div class="center">

        <h2>Reserva tu shuttle</h2>
        <p>Dejanos los detalles y te contactaremos pronto  </p>
      </div>


      <form action="https://formsubmit.co/info@thewanderlustcr.com" method="POST">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://www.thewanderlustcr.com/#Exito">
        <div class="form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Nombre" data-rule="minlen:3" data-msg="Please enter at least 4 chars"required />
              <div class="validation"></div>
            </div>
        <div class="form-group">
              <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email" required/>
              <div class="validation"></div>
            </div>
         <div class="form-group">
              <input type="text" class="form-control" name="Pick" id="Pick" placeholder="Hotel de recogida" data-rule="minlen:4"  data-msg="Please enter a valid Pick up place" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="Drop" id="Drop" placeholder="Hotel de dejada" data-rule="minlen:4"   data-msg="Please enter a valid Drop off place" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="date" class="form-control" name="Date" id="start" placeholder="fecha" data-rule="date"  data-msg="Please enter a valid date" required/>
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <input type="number" class="form-control" name="number" id="number" placeholder="Pasajeros" data-rule="numer"  data-msg="Please enter a valid date" required/>
              <div class="validation"></div>
            </div>

       <div class="text-center" id="confirmacion"><button type="submit" class="btn btn-primary btn-lg">Enviar</button></div>
    </form>
      <!--/.row-->
    </div>
    <!--/.container-->
  </section>
<div class="Terms-cond">
    <hr>
      <h2>Terminos & Condiciones</h2>
      <ul>
        <li>1 equipage de mano</li>
        <li>1 maleta</li>
        <li>Maletas extras $10</li>
        <li>Tabla de surf $10</li>
        <li>Si la recogida es en el aeropuerto favor ir al restaurante delimalinche.</li>
      </ul>
      <hr>
            <h2>En el lobby del hotel</h2>
      <ul>
        <liExiste un posible retraso de 15 minutos por la recogida en otros hoteles</li>
        <li>Las reservaciones son garantizadas para un minimo de 2 personas.</li>
        <li>Si son menos es mejor preguntar</li>
        <li>Si el servicio ya se encuentra abierto te lo podemos vender</li>
      </ul>
      <hr>
  </div>

    </div>

    <div id="PrivateTrans">
      <div class="Tit-Shut">
      <h2>Transporte privado</h2>
      <p>4% impuestos (IVA), tendra que ser sumado desde Julio 2021 hasta Julio 2022 </p> 
      <p>H1 max 5 pasajeros  -  Hiace max 10 pasajreos </p> 
    </div>
    
    <table class="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">Salida</th>
      <th scope="col">Destino</th>
      <th scope="col">Precio H1</th>
      <th scope="col">Precio Hiace</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Aeropuerto</td>
      <td>San Jose</td>
      <td>$50</td>
      <td>$57</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Aeropuerto</td>
      <td>$43</td>
      <td>$50</td>
    </tr>
    <tr>
      <td>Aeropuerto / San Jose</td>
      <td>Jaco</td>
      <td>$143</td>
      <td>$170</td>
    </tr>
    <tr>
      <td>Aeropuerto / San Jose</td>
      <td>Puntarenas</td>
      <td>$143</td>
      <td>$170</td>
    </tr>
    <tr>
      <td>Aeropuerto / San Jose</td>
      <td>Caldera</td>
      <td>$143</td>
      <td>$170</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Esterillos</td>
      <td>$170</td>
      <td>$200</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Monteverde</td>
      <td>$186</td>
      <td>$214</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Arenal</td>
      <td>$170</td>
      <td>$200</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Manuel Antonio</td>
      <td>$186</td>
      <td>$214</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Dominical</td>
      <td>$286</td>
      <td>$314</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Sierpe</td>
      <td>$314</td>
      <td>$357</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Golfito</td>
      <td>$357</td>
      <td>$400</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Puerto Viejo Limon</td>
      <td>$286</td>
      <td>$314</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Puerto Viejo Limon</td>
      <td>$257</td>
      <td>$286</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Tamarindo</td>
      <td>$286</td>
      <td>$314</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Montezuma - Santa Teresa Mal pais</td>
      <td>$314</td>
      <td>$343</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Santa Teresa - Mal pais (Con transbordo)</td>
      <td>$296</td>
      <td>$324</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Montezuma (Con transbordo)</td>
      <td>$275</td>
      <td>$304</td>
    </tr>
    <tr>
      <td>San Jose</td>
      <td>Santa Teresa - Mal pais (Con transbordo)</td>
      <td>$296</td>
      <td>$324</td>
    </tr>




  </tbody>
</table>
  <br>
  <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
    </div>`;

    document.getElementById('PrivateTour').style.display = 'none';
    document.getElementById('PrivateShuttle').style.display = 'none';
    document.getElementById("start").setAttribute("min", today);
    document.getElementById("start").setAttribute("value", today);

}

function canopy(){
  taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2> Rainforest Canopy</h2>
            </div>
            <p class=izquierda>
              Nuestro parque ofrece el canopy más seguro de Costa Rica y podrá realizarlo sobre 
              sus jardines colgantes, bajo la supervisión de nuestros guías experimentados. El
              tour de canopy le permite a los visitantes atravesar volando el magnífico “Río
              Moliente” varias veces. Los senderos conducen a los visitantes profundamente en la
              selva. Los pasajeros serán atados a un engranaje de alta calidad, diseñado
              específicamente para este tour de canopy.
  
            </p>
            
            <p class=izquierda>
              Experimente La Verdadera Adrenalina Y La Aventura En Nuestro Increíble Recorrido
              En Tirolina Con 14 Plataformas Y 10 Cables, Tiempo Suficiente Para Gritar, Reír,
              Llorar Y Disfrutar De Un Paisaje Impresionante Del Parque Nacional. Vuele Entre Y
              Sobre La Selva Tropical En El Campo De Tirolesa De Canopy Más Emocionante Del
              País. 
            </p>

            <hr>
            <p class=izquierda>
            <strong>Qué llevar</strong>  Zapatos cerrados, capa, abrigo impermeable y cámara.
            </p>
          
          
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Incluye</h3>
            <div class="icon">
              <img src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo </p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>



          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img src="../img/Canopy/Canopy.jpg" width="560" height="366" alt="Imagen de Canopy" />
        </figure>


        <figure class="effect-zoe">
          <img src="../img/Canopy/Canopy2.jpg" width="560" height="366" alt="Imagen de Cnopy" />
        </figure>
      </div>
    </div>`
}

function combo(){
  taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2> Poás Volcano, Doka Estate & La Paz Waterfalls</h2>
            </div>
            <p class=izquierda>
              En el Volcán estaremos a una altitud aproximada de 2708 metros (8000 pies) sobre 
              el nivel del mar donde se realiza una caminata por el exuberante bosque nuboso
              para observar el impresionante cráter principal, formado de diferentes estratos de
              materiales volcánicos y el avistamiento de fumarolas de azufre.</p>
            <p class=izquierda>
              Al descender del Volcán tomaremos nuestro tiempo para visitar y almorzar en la
              Hacienda Doka, una finca cafetalera donde tendremos el privilegio de aprender
              acerca de todos los diferentes pasos para producir el mejor café de Costa Rica.
            </p>
            <p class=izquierda>
              Seguidamente visitaremos Grecia, hermosa ciudad considerada como una de las
              más limpias en América Latina fundada en 1838, donde se localiza el único templo
              metálico de Centro América, monumento nacional traído de Europa al país a finales
              del siglo XIX, que enorgullece a sus habitantes además de una visita al Mercado
              Central ejemplo de vida de los costarricenses. Posteriormente, continuaremos al
              pueblo de Sarchí, ciudad conocida como la cuna de la artesanía costarricense por la
              abundante concurrencia de talleres que trabajan en finas maderas, de paso
              aprovecharemos visitar la fábrica de carretas donde podremos observar los
              artesanos realizando sus mejores diseños y elaboración de la mejor artesanía.
              Visitaremos el parque central donde se observa la carreta típica más grande del
              mundo la cual ocupa un lugar en el libro de los récord Guinness
            </p>
            <p class=izquierda>
             Cabe destacar que en la visita a la fábrica de carretas tendremos la oportunidad de
             adquirir souvenirs y artesanía en general.

            </p>
             </p>
            <p class=izquierda>
            <strong>Qué llevar</strong>  Suéter, Zapatos cómodos para caminar, Sombrero, Bloqueador y cámara.
            </p>
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Incluye</h3>
            <div class="icon">
              <img src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Desayuno y Almuerzo </p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>



          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img src="../img/Combo/Combo.jpg" width="560" height="366" alt="img25" />
        </figure>

         <figure class="effect-zoe">
          <img src="../img/Combo/Combo2.jpg" width="560" height="366" alt="img25" />
        </figure>

         <figure class="effect-zoe">
          <img src="../img/Combo/Combo3.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/Combo/Combo4.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function pacuare(){
  taskForm.innerHTML = `    
<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Water Rafting Pacuare River</h2>
            </div>
            <p class=izquierda>
              En esta excursión usted tiene la oportunidad de estar en uno de los ríos más
              populares de este deporte, el río Pacuare. Durante el viaje podrá disfrutar de
              paisajes incomparables a lo largo del río.

            </p>
            <p class=izquierda>
              El río Pacuare, es uno de los cinco ríos más importantes del mundo por sus paisajes
              y rápidos. En este río tropical el viaje es pura magia. 
            </p>
            <p class=izquierda>
              Situado en el Caribe de Costa Rica, el río Pacuare limita la Montaña de Talamanca,
              el hogar de los indios nativos Cabécar y una inmensa variedad de flora y fauna.  
            </p>
            <p class=izquierda>
              Una vez en el río a 16 millas del corazón de la selva podrá observar aves, cascadas
              y una diversidad de flora.
            </p>

            <p class=izquierda>
            <strong>Qué llevar</strong>  Repelente, cambio de ropa, zapatos de agua o sandalias y cámara.
            </p>
          
          
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Incluye</h3>
            <div class="icon">
              <img src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/seguridad.png">
            </div>
            <p  class="centrado">Equipo de seguridad</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>


          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img src="../img/Pacuare/Pacuare.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/Pacuare/Pacuare2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function at(){
  taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Arenal Volcano & hots springs</h2>
            </div>
            <p class=izquierda>
              No es casualidad que el Volcán Arenal y Termales sea uno de los tours más
              populares en el país. Visitar una de las zonas más famosas de Costa Rica y
              relajarse en las Termales es una experiencia inolvidable!  
            </p>
            <p class=izquierda>
              En el camino a Arenal, pasaremos por el pintoresco pueblo de La Fortuna, que en
              un día despejado, usted tendrá la oportunidad de admirar el majestuoso coloso.
            </p>
            <p class=izquierda>
              En las Termales, podrá relajarse en las piscinas naturales, llenas de minerales
              saludables, o disfrutar de los servicios adicionales que ofrece el resort Tabacon
              Grand Spa o Baldi Resort.
              </p>

            <p class=izquierda>
            <strong>Qué llevar</strong> Traje de baño, repelente, cambio de ropa, sombrero y cámara.
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Incluye</h3>
            <div class="icon">
              <img src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo y cena</p>
            <div class="ficon">
            </div>
          </div>

          

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img src="../img/AT/AT1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/AT/AT2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function aereal(){
  taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Rainforest Aerial Tram</h2>
            </div>
            <p class=izquierda>
              Este Teleférico del Bosque Lluvioso de San José viaja entre la arboleda del bosque,
              y el dosel y sus jardines, que le permitirán descubrir las plantas y los animales que
              por lo general se ocultan en las alturas de la selva.
            </p>
            <p class=izquierda>
              A tan sólo 50 minutos de San José en la carretera a Limón, el Teleférico del Bosque
              Lluvioso ofrece uno de los parques más impresionantes y únicos del ecoturismo y la
              investigación en el mundo.
            </p>
            <p class=izquierda>
              Los visitantes literalmente viajan 90 minutos entre el bosque arboleda, el dosel, sus
              jardines y animales que por lo general se ocultan. Este mundo poco conocido tiene
              una increíble belleza y diversidad biológica extraordinaria. La "góndola" (Teleférico)
              Tour es un "Ski Lift" modificado que cubre una distancia de 2,6 kilómetros por la
              selva de Costa Rica. El recorrido dura aproximadamente 90 minutos.  
            </p>
            <p class=izquierda>
              Los visitantes podrán ver los diferentes niveles de una selva tropical,
              específicamente el nivel más difícil de llegar hasta hace poco y la parte menos
              conocida científicamente de la selva del dosel (las copas de los árboles).

            </p>
            <p class=izquierda>
              Este curso es muy seguro y muy tranquilo permitiendo a los visitantes escuchar los
              muchos sonidos diferentes de la selva tropical.

            </p>
            
             <p class=izquierda>
            <strong>Qué llevar</strong>   Zapatos cerrados, capa, abrigo impermeable y cámara.
            </p>
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Incluye</h3>
            <div class="icon">
              <img src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img src="../img/Tram/Tram.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/Tram/Tram2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function tortuguero(){
  taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Tortuguero National Park</h2>
            </div>
            <p class=izquierda>
              Esta es una expedición a través de la densa jungla de una de las regiones más
              bellas y escénicas de Costa Rica. Navega los exóticos canales del Parque Nacional
              Tortuguero, famoso por sus playas solitarias donde la anidación de las tortugas
              gigantes verdes tiene lugar (julio-septiembre).
            </p>
            <p class=izquierda>
              Tortuguero es uno de los sitios de anidación más importantes de la tortuga verde en
              el Hemisferio Occidental. Una red de canales navegables y lagunas que le
              permitirán estar en contacto directo con la gran variedad de flora y fauna cruzando
              el Parque Nacional de Tortuguero.

            </p>
            <p class=izquierda>
              Saldremos temprano y viajaremos a través del Parque Nacional Braulio Carrillo,
              donde pasaremos montañas cubiertas por densos bosques, así como numerosos
              ríos y cascadas hasta llegar al Caribe de Costa Rica. Aquí, vamos a cruzar las
              plantaciones de banano a bordo del barco para navegar hacia el Parque Nacional
              Tortuguero.
            </p>
            

            <p class=izquierda>
            <strong>Qué llevar</strong>  Zapatos cómodos, cambio de ropa, sombrero y cámara.
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Incluye</h3>
            <div class="icon">
              <img src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas al parque Nacional</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Desayuno y Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia local y tour en bote</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img src="../img/Tortuguero/Tortuguero1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/Tortuguero/Tortuguero2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function Folk(){
  taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Folklore Dinner Show</h2>
            </div>
            <p class=izquierda>
              Cuna del espectáculo Tierra Típica. Ram Luna se localiza por encima de las
              montañas con vistas al Valle Central. Desde este punto de vista único se pueden
              admirar las vistas panorámicas en la oscuridad, admirando el brillo de las luces que
              se emanan desde la capital.
            </p>
            <p class=izquierda>
              Además, podrán disfrutar de una muestra de folclore
              Costarricense a través de música típica, marimba y bailes, mientras disfrutamos de
              una deliciosa cena buffet con un menú que refleja los platos típicos de la región.
            </p>
            <p class=izquierda>
              Durante nuestra visita, los artesanos locales exhibirán sus creaciones exquisitas y
              únicas que representan a las diferentes regiones del país. La noche culmina con un
              gran espectáculo de fuegos artificiales y el tradicional baile de mascaradas. ¡No te
              pierdas esta experiencia inolvidable!

            </p>
            
          <p class=izquierda>
            <strong>Qué llevar</strong>    Pantalones largos, abrigo y cámara.
            </p>

          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Incluye</h3>
            <div class="icon">
              <img src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/taza.png">
            </div>
            <p  class="centrado">Cata de cafe</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia bilingüe</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img src="../img/Folklore/Folklore.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/Folklore/Folklore2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function TortugaIsland(){
  taskForm.innerHTML = `    <div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Tortuga Island Cruise</h2>
            </div>
            <p class=izquierda>
              Tome un yate en Puntarenas y goce del Golfo de Nicoya y su archipiélago, colmado
              de aves marinas y de una gran travesía para llegar a la Isla Tortuga. La Isla Tortuga
              es conocida por sus arenas blancas y sus aguas color turquesa, un lugar perfecto
              para la natación y el snorkelling.

            </p>
            <p class=izquierda>
              Usted permanecerá en la isla por aproximadamente cuatro horas, donde podrá
              gozar de diversas actividades: senderos, canopy, kayaking, snorkelling, natación, los
              deportes de la playa o simplemente relájese y goce de la playa, mientras que el
              personal del barco prepara un exquisito almuerzo – estilo buffet.

            </p>
            <p class=izquierda>
              transporte, guía, desayuno ligero en ruta, travesía, frutas tropicales,
              refrescos, música en vivo y almuerzo.
            </p>
            <p class=izquierda>
            <strong>Qué llevar</strong> ropa ligera, traje de baño, toalla, bloqueador solar, sombrero, cámara
fotográfica.
            </p>
            
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Incluye</h3>
            <div class="icon">
              <img src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Breakfast, Almuerzo, fruits and drinks</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/kayac.png">
            </div>
            <p  class="centrado">Kayac</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img src="../img/Tortuga/Tortuga.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/Tortuga/Tortuga2.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function IOL(){
  taskForm.innerHTML = `  <div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Irazú Volcano, Orosi Valley & Lankester Garden</h2>
            </div>
            <p class=izquierda>
              Tomaremos la autopista Panamericana Sur y empezaremos el ascenso hacia el
              gran “Iztaru”. En la cima del volcán, podrá observar los cráteres principales
              conocidos como Irazú, Playa Hermosa y Diego de la Haya.
            </p>
            <p class=izquierda>
              Este coloso es el volcán más alto del territorio con 3432 metros (11000 pies) de
              altura sobre el nivel del mar, En un día soleado y despejado, tanto el océano
              Atlántico como el Pacífico pueden ser observados.
            </p>
            
            <p class=izquierda>
            Luego de la visita al volcán, descenderemos hacia la ciudad de Cartago, donde se
            realiza una parada en la Basílica de la Virgen de los Ángeles
            </p>
            <p class=izquierda>
            La siguiente parada es el Jardín Botánico Lankester, centro de investigación de la
            Universidad de Costa Rica, creado para la protección y preservación de más de 800
            especies de orquídeas, así como otras especies de plantas. Seguidamente,
            continuaremos hacia el maravilloso y escénico Valle Orosí, el cual fue uno de los
            establecimientos importantes durante la época colonial, En este recorrido
            visitaremos una de las pocas iglesias coloniales que aún permanecen en pie,
            seguido de un delicioso almuerzo típico en el mejor restaurante de la zona.
            </p>

           <p class=izquierda>
            <strong>Qué llevar</strong>  Abrigo, zapatos cómodos, impermeable y cámara.
            </p>  
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Incluye</h3>
            <div class="icon">
              <img src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img src="../img/IOL/IRAZU.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/IOL/IRAZU2.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/IOL/IRAZU3.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/IOL/IRAZU4.jpg" width="560" height="366" alt="img25" />
        </figure>
      </div>
    </div>`
}

function ManuelAntonio(){
  taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Manuel Antonio National Park</h2>
            </div>
            <p class=izquierda>
              Este parque nacional está considerado como uno de los más bellos del país. La
              combinación de una paradisíaca playa de aguas cristalinas con bancos de coral,
              rodeada por una exuberante vegetación y los encantos naturales del bosque tropical
              húmedo. Sus playas se encuentran entre las mejores del país, donde el buceo y el
              surf son muy populares.
            </p>
            <p class=izquierda>
              En nuestro recorrido hacia el parque se nos llevará por la Costanera Sur, disfrutando
              de lindas vistas y atravesando plantaciones de palma africana y pintorescos pueblos
              a lo largo de la costa Pacífica, hasta llegar al Puerto de Quepos y de ahí continuar
              hasta el Parque Nacional.
   
            </p>
            <p class=izquierda>
              A nuestra llegada haremos una caminata cruzando un riachuelo para acceder al
              parque, pues está cerrado al tránsito vehicular. Una vez dentro, se puede
              simplemente disfrutar de las playas, tomar un baño de sol, o bien hacer una
              caminata por los senderos del parque, que nos permitirá observar la abundante flora
              y fauna del mismo, en particular varias especies de monos, iguanas, aves, y tal vez,
              el perezoso de tres dedos.

            </p>
            <p class=izquierda>
              Uno de sus senderos bordea Punta Catedral desde donde la vista del parque y el
              mar es espectacular. De regreso a San José, haremos una parada en el Souvenir
              Molas, en donde podrá observar y adquirir las mejores piezas de artesanía
              costarricense.

            </p>

             <p class=izquierda>
            <strong>Qué llevar</strong> Sombrero, sandalias, traje de baño, toalla y cámara.
            </p> 
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Incluye</h3>
            <div class="icon">
              <img src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img src="../img/Manuel/ManuelAntonio1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/Manuel/ManuelAntonio2.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>`
}

function PDGS(){
  taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Poás Volcano, Doka Estates, Grecia & Sarchí</h2>
            </div>
            <p class=izquierda>
              En el Volcán estaremos a una altitud aproximada de 2708 metros (8000 pies) sobre
              el nivel del mar donde se realiza una caminata por el exuberante bosque nuboso
              para observar el impresionante cráter principal, formado de diferentes estratos de
              materiales volcánicos y el avistamiento de fumarolas de azufre.

            </p>
            <p class=izquierda>
              Al descender del Volcán tomaremos nuestro tiempo para visitar y almorzar en la
              Hacienda Doka, una finca cafetalera donde tendremos el privilegio de aprender
              acerca de todos los diferentes pasos para producir el mejor café de Costa Rica.
 
            </p>
            <p class=izquierda>
              Seguidamente visitaremos Grecia, hermosa ciudad considerada como una de las
              más limpias en América Latina fundada en 1838, donde se localiza el único templo
              metálico de Centro América, monumento nacional traído de Europa al país a finales
              del siglo XIX, que enorgullece a sus habitantes además de una visita al Mercado
              Central ejemplo de vida de los costarricenses.
            </p>
            <p class=izquierda>
              Posteriormente, continuaremos al pueblo de Sarchí, ciudad conocida como la cuna de la 
              artesanía costarricense por la abundante concurrencia de talleres que trabajan en finas
              maderas, de paso aprovecharemos visitar la fábrica de carretas donde podremos observar los
              artesanos realizando sus mejores diseños y elaboración de la mejor artesanía.
            </p>

            <p class=izquierda>
              Visitaremos el parque central donde se observa la carreta típica más grande del
              mundo la cual ocupa un lugar en el libro de los récord Guinness.<br>
              Cabe destacar que en la visita a la fábrica de carretas tendremos la oportunidad de
              adquirir souvenirs y artesanía en general.
            </p>

            <p class=izquierda>
            <strong>Qué llevar</strong> Suéter, Zapatos cómodos para caminar, Sombrero, Bloqueador, y
cámara.
            </p> 
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Incluye</h3>
            <div class="icon">
              <img src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img src="../img/PDGS/PDGS1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/PDGS/PDGS2.jpg" width="560" height="366" alt="img26" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/PDGS/PDGS3.jpg" width="560" height="366" alt="img27" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/PDGS/PDGS4.jpg" width="560" height="366" alt="img28" />
        </figure>
      </div>
    </div>`

}

function Cooffee(){
  taskForm.innerHTML = `<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Britt Coffee Tour</h2>
            </div>
            <p class=izquierda>
              Imagínese el gran viaje de un grano de café desde la plantación hasta la planta de
              procesamiento de una taza de café gourmet, nuestros expertos le guiarán a través
              del ciclo de vida del café gourmet.
            </p>
            <p class=izquierda>
              Aprenderá que el clima único de Costa Rica y los
              diversos paisajes son quienes proporcionan perfectas condiciones de cultivo para
              los granos de café gourmet.
            </p>
            <p class=izquierda>
               A continuación, será seducido por los aromas de
               nuestra tostadora donde descubrirá cómo afectan las diferentes técnicas de tostado
               a los frijoles y la cerveza. Vamos a revelar nuestros secretos de tostado y empaque
               que nos permiten ofrecer el mejor café de nuestra plantación de Costa Rica hasta su
               taza en cualquier parte del mundo. 
            </p>
            <p class=izquierda>
              Conozca cómo los expertos "rompen la copa"
              utilizando técnicas para probar la "taza" de café para identificar y calificar las
              características que califican un café gourmet.
            </p>
            <p class=izquierda>
               Visita nuestra barra de café, ordene y
               disfrute de la bebida de café de sus sueños. Echa un vistazo a nuestro almacén de
               la fábrica y la tienda de regalos, déjese llevar y permítase enviar algunos souvenirs
               y café fresco hasta su casa, que le recordarán la gran aventura tropical de Costa
               Rica.
            </p>

            <p class=izquierda>
            <strong>Qué llevar</strong>  Zapatos cómodos, pantalones largos y cámara.
            </p> 
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Incluye</h3>
            <div class="icon">
              <img src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia bilingüe</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img src="../img/Coffe/Coffee.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/Coffe/Coffee2.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>`

}

function Vip(){
    console.log(name);
    taskForm.innerHTML =`<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>Vip City Bus</h2>
            </div>
            <p class=izquierda>
             Vip City Bus, tiene a su disposición el mejor Tour de ciudad en Costa Rica,
             aproveche su tiempo tarde-noche increíblemente, donde le recogemos en su hotel
             en cómodas microbuses con un servicio personalizado, llevándolo al centro de la
             ciudad donde un bus el primer bus turístico de dos pisos estilo europeo en Costa
             Rica le estará esperando para empezar el City Tour con todo el confort y la mejores
             vistas panorámicas, un guía local bilingüe le explicara los detalles de los principales
             atractivos
            </p>
            <p class=izquierda>
              El tour incluye una bebida local de bienvenida paradas en los mejores
              sitios de la ciudad como Estadio nacional, Mercado Central, Teatro Nacional entre
              otras caminatas, y una deliciosa cena típica, caminata donde podrá familiarizarse
              con San José, parques, cultura e historia.
            </p>
            <p class=izquierda>
              Vip City Bus en Costa Rica es un servicio
              que combina lujo y cultura por medio de un Bus de dos pisos estilo europeo con
              acceso a WIFI, brindara un Tour de ciudad Declarado de Interés cultural con un guía
              turístico local, lo invitamos a venir a conocer nuestra ciudad con servicio de bebidas
              locales, cena con platillos típicos, música folklórica dentro del bus, con un servicio
              personalizado con guías bilingües y las mejores vistas panorámicas.
            </p>

            <p class=izquierda>
            <strong>Qué llevar</strong>  Zapatos para caminar, pantalones largos, y cámara.
            </p> 
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Incluye</h3>
            <div class="icon">
              <img src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia bilingüe</p> 
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
    <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img src="../img/VIP/Vip1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/VIP/Vip2.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>`

}

function SeisEnUno(){
  console.log(name);
  taskForm.innerHTML =`<div class="row">
      <div class="col-md-8 ">
        <div class="portfolios">
          <div class="text-center">
            <h2>6 en 1</h2>
            </div>
            <p class=izquierda>
              El “6 en 1” que incluye atractivos productos para asegurarte una experiencia natural
              increíble e inolvidable. Disfruta del espectacular bosque lluvioso del Atlántico, en el
              Braulio Carrillo, practicando diversas actividades como: teleférico, canopy, Cable
              adrenalina, mariposario y ranario, caminata guiada y tour del puente colgante.

            </p>
            <p class=izquierda>
              Empieza esta enriquecedora experiencia con un verdadero vuelo por las copas de
              los árboles en nuestras cómodas góndolas del teleférico mientras un experto guía
              naturalista te describe los tesoros escondidos del bosque.
            </p>
            <p class=izquierda>
              Luego vivirás una gran emoción al disfrutar del tour de canopy más seguro del área,
              que incluye 14 plataformas y 10 cables; además del impresionante cable
              Adrena-line de 700 metros de largo y con velocidad de 55 km/h
            </p>
            <p class=izquierda>
              Podrás relajarte durante una caminata guiada por nuestros senderos naturales que
              incluye la visita al puente colgante sobre el Río Molinete y una entretenida visita a
              nuestro diverso jardín de colibríes, mariposas y ranas donde conocerás sobre
              diferentes especies propias de la región.


            </p>

            <p class=izquierda>
            <strong>Qué llevar</strong>  Zapatos para caminar, binoculares, abrigo impermeable y cámara
            </p>
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="Contacto.html">Reservar</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Incluye</h3>
            <div class="icon">
              <img src="../img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transporte</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entradas</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/comida.png">
            </div>
            <p  class="centrado">Almuerzo</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="../img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guia</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>
        <div class="content">
      <div class="grid">
        <figure class="effect-zoe">
          <img src="../img/6-in-1/6 in 1.jpg" width="560" height="366" alt="img25" />
        </figure>

        <figure class="effect-zoe">
          <img src="../img/6-in-1/Canopy.jpg" width="560" height="366" alt="img26" />
        </figure>
      </div>
    </div>`

}


function inicio(){
  trans.innerHTML = ``;
  taskForm.style.display = "block";
  taskForm.innerHTML =`   <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="text-center">
          <h2>Tours de medio y un dia</h2>

            <p>
              <br>4% impuestos (IVA), tendra que ser sumado desde Julio 2021 hasta Julio 2022  <br><strong>Click en el nombre para ver mas informacion<strong>.
          </p>
        </div>
        <hr>
      </div>
    </div>
    <div class="content">
    <div class="grid">

         <figure class="effect-zoe">
        <img src="../img/6-in-1/6 in 1.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#aqui"  id="prueba"> 6 in 1</a></span></h2>
          <p class="icon-links">$139 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="../img/city bus.jpg" alt="img26" />
        <figcaption>
          <h2><span> <a href="#">Vip City Bus</a></span></h2>
          <p class="icon-links">$69 pp</p>
        </figcaption>
      </figure>
      
    </div>
  </div>
      <div class="content">
    <div class="grid">
      
         <figure class="effect-zoe">
        <img src="../img/coffe tour.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#">Coffee Tour</a></span></h2>
          <p class="icon-links">$59 - $55 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="../img/poas-volcano-doka-grecia-sarchi.jpg" alt="img26" />
        <figcaption>
          <h2><span> <a href="#">Poas,Doka,Grecia</a></span></h2>
          <p class="icon-links">$67 pp</p>
        </figcaption>
      </figure>
      
    </div>
  </div>
      <div class="content">
    <div class="grid">
      
         <figure class="effect-zoe">
        <img src="../img/Manuel Antonio na.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#">Manuel Antonio</a></span></h2>
          <p class="icon-links">$135 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="../img/Irazu-Volcano-Orosi-Valley-Lankester-Garden.jpg" alt="img26" />
        <figcaption>
          <h2><span> <a href="#">Irazú,Orosi,Lankaster</a></span></h2>
          <p class="icon-links">$112 pp</p>
        </figcaption>
      </figure>
      
    </div>
  </div>
      <div class="content">
    <div class="grid">
      
         <figure class="effect-zoe">
        <img src="../img/Isla tortuga.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#">Tortuga Island Cruise</a></span></h2>
          <p class="icon-links">$135 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="../img/Dinner.jpg" alt="img26" />
        <figcaption>
          <h2><span> <a href="#">Folklore Dinner Show</a></span></h2>
          <p class="icon-links">$70 pp</p>
        </figcaption>
      </figure>
      
    </div>
  </div>
      <div class="content">
    <div class="grid">
      
         <figure class="effect-zoe">
        <img src="../img/Tortuguero.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#"> Tortuguero NP</a></span></h2>
          <p class="icon-links">$140 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="../img/Tram/Tram.jpg" alt="img26" />
        <figcaption>
          <h2><span> <a href="#">Rainforest Aerial Tram</a></span></h2>
          <p class="icon-links">$107 pp</p>
        </figcaption>
      </figure>
      
    </div>
  </div>
      <div class="content">
    <div class="grid">
      
         <figure class="effect-zoe">
        <img src="../img/Arenal TB.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#"> Arenal & Hot springs</a></span></h2>
          <p class="icon-links">$162 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="../img/Pacuare/Pacuare.jpg" alt="img26" />
        <figcaption>
          <h2><span> <a href="#"> Rafting Pacuare River</a></span></h2>
          <p class="icon-links">$99 pp</p>
        </figcaption>
      </figure>
      
    </div>
  </div>
      <div class="content">
    <div class="grid">
      
         <figure class="effect-zoe">
        <img src="../img/combo.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#"> Combo Tour</a></span></h2>
          <p class="icon-links">$149 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="../img/Canopy/Canopy.jpg" alt="img26" />
        <figcaption>
          <h2><span> <a href="#">Rainforest canopy</a></span></h2>
          <p class="icon-links">$96 pp</p>
        </figcaption>
      </figure>
      
    </div>
  </div>`;
}


trans.addEventListener('click' , (e)=>{
  const name = e.target.innerHTML;
  console.log(name);
  if(name == "Transporte privado"){
          document.getElementById('PrivateTour').style.display = "none";
          document.getElementById('PrivateShuttle').style.display = "none";
          document.getElementById('PrivateTrans').style.display = "block";
         }else if(name == "Tours privados"){
          document.getElementById('PrivateTour').style.display = "block";
          document.getElementById('PrivateShuttle').style.display = "none";
          document.getElementById('PrivateTrans').style.display = "none";
         }else if(name == "Shuttle"){
          document.getElementById('PrivateTour').style.display = "none";
          document.getElementById('PrivateShuttle').style.display = "block";
          document.getElementById('PrivateTrans').style.display = "none";
         }
})


taskForm.addEventListener('click',  (e) =>{ 
  //const querySnapshot = await getTask(); cada que actualiza
  const name = e.target.innerHTML;
  console.log(name);
  if(name == " 6 in 1"){
    SeisEnUno();
  }else if(name == "Vip City Bus"){
          Vip();
        }else if(name == "Coffee Tour"){
          Cooffee();
        }else if(name == "Poas,Doka,Grecia"){
          PDGS();
        }else if(name == "Manuel Antonio"){
          ManuelAntonio();
        }else if(name == "Irazú,Orosi,Lankaster"){
          IOL();
        }else if(name == "Tortuga Island Cruise"){
          TortugaIsland();
        }else if(name == "Folklore Dinner Show"){
          Folk();
        }else if(name == " Tortuguero NP"){
          tortuguero();
        }else if(name == "Rainforest Aerial Tram"){
          aereal();
        }else if(name == " Arenal &amp; Hot springs"){
          at();
         }else if(name == " Rafting Pacuare River"){
          pacuare();
         }else if(name == " Combo Tour"){
          combo();
         }else if(name == "Rainforest canopy"){
          canopy();
         }

});

function BuscarCoti(){
  console.log("Click");
  window.location.replace("https://www.thewanderlustcr.com/Coti/index.html#"+document.getElementById('name').value);

}
//hashchange
window.addEventListener('hashchange',(e)=>{
  const name = jQuery(location).attr('href');
       console.log(name)
  if(name == "https://www.thewanderlustcr.com/Servicio.html"){
    inicio();
  }else if(name == "https://www.thewanderlustcr.com/Espa%C3%B1ol/Servicio.html#6-in-1"){
    SeisEnUno();
  }else if(name == "https://www.thewanderlustcr.com/Espa%C3%B1ol/Servicio.html#VIP"){
    Vip();
  }else if(name == "https://www.thewanderlustcr.com/Espa%C3%B1ol/Servicio.html#coffee"){
    Cooffee();
  }else if(name == "https://www.thewanderlustcr.com/Espa%C3%B1ol/Servicio.html#Combo"){
    combo();
  }else if(name == "https://www.thewanderlustcr.com/Espa%C3%B1ol/Servicio.html#Transport"){
    //trans();
  }else if(name == "https://www.thewanderlustcr.com/Espa%C3%B1ol/Servicio.html"){
    inicio();
  }

});

window.addEventListener('DOMContentLoaded', async (e) =>{ //DOMContentLoaded
  //const querySnapshot = await getTask(); cada que actualiza
   const name = jQuery(location).attr('href');
     console.log(name);
     if(name == "https://www.thewanderlustcr.com/#Exito"){
      alert("Email enviado exitosamente / Email sent successfully");
  }else if(name == "https://www.thewanderlustcr.com/Espa%C3%B1ol/Servicio.html#6-in-1"){
    SeisEnUno();
  }else if(name == "https://www.thewanderlustcr.com/Espa%C3%B1ol/Servicio.html#VIP"){
    Vip();
  }else if(name == "https://www.thewanderlustcr.com/Espa%C3%B1ol/Servicio.html#coffee"){
    Cooffee();
  }else if(name == "https://www.thewanderlustcr.com/Espa%C3%B1ol/Servicio.html#Combo"){
    combo();
  }else{
    inicio();
  }





})



/*
 
*/


