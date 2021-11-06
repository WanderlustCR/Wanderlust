function BuscarCoti(){
  window.location.href="Coti/index.html#"+document.getElementById('name').value;
}

window.addEventListener('DOMContentLoaded', async (e) =>{ //DOMContentLoaded
  //const querySnapshot = await getTask(); cada que actualiza


  var name = window.location.href;

   const name = jQuery(location).attr('href');
     console.log(name);
     if(name == "https://www.thewanderlustcr.com/#Exito"){
      alert("Email enviado exitosamente / Email sent successfully");
  }


})