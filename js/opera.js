const taskForm = document.getElementById('Tours');
const Desaparece1 = document.getElementById('Desaparece1');

function Vip(){
    console.log(name);
      taskForm.innerHTML =`<section id="aqui"></section>
<div class="container">
    <div class="row">
      <div class="col-md-12 ">
        <div class="portfolios">
          <div class="text-center">

            <h2>6 en 1</h2>
            <p>Rainforest Adventures, Costa Rica, offers you the most complete eco-adventure package of
              the country. This “6 in 1” includes attractive products to assure you an incredible and unforgettable natural experience.<br> Enjoy alongside your family and friends of the spectacular Atlantic rainforest within Braulio Carrillo Park, by doing some activities like: aerial tram, zip-lines, adrena-line, butterflies and frogs garden, a guided walk and a hanging bridge tour.<br>
              Start this rich experience with a true flight over the treetops in our comfortable aerial tram  while an expert naturalist guide describes hidden treasures of the forest. Then you’ll experience real emotion with our zip line tour with 14 safe platforms and 10 cables, which include the thrill of the Adrena-line cable, of 2297 feet long and 55 km/h speed. <br>Back to the ground you will feel relaxation during a guided walk through our natural trails with a visit over Molinete river’s hanging bridge and a fun and educational stop to our very own hummingbird, butterflies and frogs garden, where you can learn about different species of the region.
            </p>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>

  <div class="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-md-offset-0">
           <div class="text-center">
            
            <img src="img/6 in 1.jpg" width="230" height="230" alt="Image 1" />
            <img src="img/mariposa.jpg" width="230" height="230" alt="Image 2" />
           </div>
          
     
        </div>
      </div>
    </div>

     <div class="text-center">
        <a class="btn btn-primary btn-lg" href="services.html">Back</a>
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
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
              Rainforest Adventures, Costa Rica, offers you the most complete eco-adventure package of
              the country. This “6 in 1” includes attractive products to assure you an incredible and
              unforgettable natural experience. Enjoy alongside your family and friends of the spectacular
              Atlantic rainforest within Braulio Carrillo Park, by doing some activities like: aerial tram,
              zip-lines, adrena-line, butterflies and frogs garden, a guided walk and a hanging bridge tour.
            </p>
            <p class=izquierda>
              Start this rich experience with a true flight over the treetops in our comfortable aerial tram
              while an expert naturalist guide describes hidden treasures of the forest
            </p>
            <p class=izquierda>
              Then you’ll experience real emotion with our zip line tour with 14 safe platforms and 10 cables,
               which include the thrill of the Adrena-line cable, of 2297 feet long and 55 km/h speed.
            </p>
            <p class=izquierda>
              Back to the
              ground you will feel relaxation during a guided walk through our natural trails with a visit
              over Molinete river’s hanging bridge and a fun and educational stop to our very own
              hummingbird, butterflies and frogs garden, where you can learn about different species of the
              region.

            </p>
          
          <hr>
               <div class="text-center">
        <a class="btn btn-primary btn-lg" href="contact.html">Reserve</a>
      </div>
        </div>
      </div>
       <div class="col-md-4 ">
        <div class="portfolios">
          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
             <h3>Include</h3>
            <div class="icon">
              <img src="img/Iconos/bus.png">
            </div>
            <p  class="centrado">Transportation</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="img/Iconos/entradas.png">
            </div>
            <p  class="centrado">Entrance</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="img/Iconos/comida.png">
            </div>
            <p  class="centrado">Lunch</p>
            <div class="ficon">
            </div>
          </div>

          <div class="wow bounceIn" data-wow-offset="0" data-wow-delay="0.0s">
            <div class="icon">
              <img src="img/Iconos/guia.png">
            </div>
            <p  class="centrado">Guide</p>
            <div class="ficon">
            </div>
          </div>

          </div>
       </div>
    </div>`

    Desaparece1.style.display = 'block';



}


taskForm.addEventListener('click',  (e) =>{	
	//const querySnapshot = await getTask(); cada que actualiza
	const name = e.target.innerHTML;

	if(name == " 6 in 1"){
    SeisEnUno();
	}else if(name == "Vip City Bus"){
          Vip();
        }

});
//hashchange
window.addEventListener('hashchange',(e)=>{
  const name = jQuery(location).attr('href');
  if(name == "https://www.thewanderlustcr.com/services.html"){
    Desaparece1.style.display = 'none';
     taskForm.innerHTML =`   <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="text-center">
          <h2>One and Half day tours</h2>

            <p>
              <br>4% Value Added Taxes (VAT), must be summed up to all rates <br> From July 2021 to July 2022<br>Click the name to see more information.
          </p>
        </div>
        <hr>
      </div>
    </div>
    <div class="content">
    <div class="grid">

         <figure class="effect-zoe">
        <img src="img/6 in 1.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#aqui"  id="prueba"> 6 in 1</a></span></h2>
          <p class="icon-links">$139 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="img/city bus.jpg" alt="img26" />
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
        <img src="img/coffe tour.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#">Coffee Tour</a></span></h2>
          <p class="icon-links">$59 - $55 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="img/poas-volcano-doka-grecia-sarchi.jpg" alt="img26" />
        <figcaption>
          <h2><span> <a href="#">Poas,Doka,Grecia,Sarchi</a></span></h2>
          <p class="icon-links">$67 pp</p>
        </figcaption>
      </figure>
      
    </div>
  </div>
      <div class="content">
    <div class="grid">
      
         <figure class="effect-zoe">
        <img src="img/Manuel Antonio na.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#">Manuel Antonio</a></span></h2>
          <p class="icon-links">$135 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="img/Irazu-Volcano-Orosi-Valley-Lankester-Garden.jpg" alt="img26" />
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
        <img src="img/Isla tortuga.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#">Tortuga Island Cruise</a></span></h2>
          <p class="icon-links">$135 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="img/Dinner.jpg" alt="img26" />
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
        <img src="img/Tortuguero.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#"> Tortuguero NP</a></span></h2>
          <p class="icon-links">$140 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="img/city bus.jpg" alt="img26" />
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
        <img src="img/Arenal TB.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#"> Arenal & Hot springs</a></span></h2>
          <p class="icon-links">$162 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="img/Pacuare.jpg" alt="img26" />
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
        <img src="img/combo.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#"> Combo Tour</a></span></h2>
          <p class="icon-links">$149 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="img/Canopy.jpg" alt="img26" />
        <figcaption>
          <h2><span> <a href="#">Rainforest canopy</a></span></h2>
          <p class="icon-links">$96 pp</p>
        </figcaption>
      </figure>
      
    </div>
  </div>`
  }
});

window.addEventListener('DOMContentLoaded', async (e) =>{	//DOMContentLoaded
	//const querySnapshot = await getTask(); cada que actualiza


taskForm.innerHTML =`   <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="text-center">
          <h2>One and Half day tours</h2>

            <p>
              <br>4% Value Added Taxes (VAT), must be summed up to all rates <br> From July 2021 to July 2022<br>Click the name to see more information.
          </p>
        </div>
        <hr>
      </div>
    </div>
    <div class="content">
    <div class="grid">

         <figure class="effect-zoe">
        <img src="img/6 in 1.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#aqui"  id="prueba"> 6 in 1</a></span></h2>
          <p class="icon-links">$139 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="img/city bus.jpg" alt="img26" />
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
        <img src="img/coffe tour.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#">Coffee Tour</a></span></h2>
          <p class="icon-links">$59 - $55 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="img/poas-volcano-doka-grecia-sarchi.jpg" alt="img26" />
        <figcaption>
          <h2><span> <a href="#">Poas,Doka,Grecia,Sarchi</a></span></h2>
          <p class="icon-links">$67 pp</p>
        </figcaption>
      </figure>
      
    </div>
  </div>
      <div class="content">
    <div class="grid">
      
         <figure class="effect-zoe">
        <img src="img/Manuel Antonio na.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#">Manuel Antonio</a></span></h2>
          <p class="icon-links">$135 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="img/Irazu-Volcano-Orosi-Valley-Lankester-Garden.jpg" alt="img26" />
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
        <img src="img/Isla tortuga.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#">Tortuga Island Cruise</a></span></h2>
          <p class="icon-links">$135 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="img/Dinner.jpg" alt="img26" />
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
        <img src="img/Tortuguero.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#"> Tortuguero NP</a></span></h2>
          <p class="icon-links">$140 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="img/city bus.jpg" alt="img26" />
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
        <img src="img/Arenal TB.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#"> Arenal & Hot springs</a></span></h2>
          <p class="icon-links">$162 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="img/Pacuare.jpg" alt="img26" />
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
        <img src="img/combo.jpg" alt="img25" />
        <figcaption>
          <h2> <span><a href="#"> Combo Tour</a></span></h2>
          <p class="icon-links">$149 pp</p>
        </figcaption>
      </figure>
      
    
       <figure class="effect-zoe">
        <img src="img/Canopy.jpg" alt="img26" />
        <figcaption>
          <h2><span> <a href="#">Rainforest canopy</a></span></h2>
          <p class="icon-links">$96 pp</p>
        </figcaption>
      </figure>
      
    </div>
  </div>`


})

/*


*/