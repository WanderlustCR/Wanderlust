var SelectChange = document.getElementById('IdiomaSelect');

SelectChange.addEventListener("change",function(){
  console.log(SelectChange.value);
  if(SelectChange.value == "Español"){
     window.location.href = 'Español/Inicio.html';
  }
})