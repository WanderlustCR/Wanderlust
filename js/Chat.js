const Chat = document.getElementById('FormChat');


Chat.addEventListener('submit', (e)=>{
	e.preventDefault();

	const mensaje = document.getElementById('mensaje').value;
	var url = "https://wa.me/50661672539?text="+mensaje;
	window.location.href = url;

})