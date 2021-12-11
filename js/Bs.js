function BuscarCoti(){
  
  window.location.replace("https://www.thewanderlustcr.com/Coti/index.html#"+document.getElementById('name').value);

}

window.addEventListener('DOMContentLoaded', async (e) =>{ //DOMContentLoaded
  //const querySnapshot = await getTask(); cada que actualiza
  var name = window.location.href;
     console.log(name);
     if(name == "https://www.thewanderlustcr.com/#Exito"){
      alert("Email enviado exitosamente / Email sent successfully");
  }
})


