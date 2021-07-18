const db = firebase.firestore();
const tasksContainer = document.getElementById('tasks-container');
const confirmacion = document.getElementById('confirmacion');
const taskForm = document.getElementById('task-form');
const fecha = new Date();
const anio = fecha.getFullYear();
const dia = fecha.getDate();
const mes = fecha.getMonth()+1;
const saveTask = (name,email,subjetct,message,anio,dia,mes)=>
  db.collection('Email').doc().set({
        
        name,
        email,
        subjetct,
        message,
        anio,
        dia,
        mes,
    });

taskForm.addEventListener('submit',  (e)=>{
    e.preventDefault(); 
     const name = taskForm['name'];
    const email = taskForm['email'];
    const subjetct = taskForm['subject'];
    const message = taskForm['message'];
    const mail = "mailto: jeaustin.rdz@gmail.com?subject="+subjetct.value+"&body="+email.value+"                   "+ name.value + "                  " + message.value;
    confirmacion.innerHTML = ``;
    reconfirmation.innerHTML += ` 
     <div class="text-center"><a href= "${mail}"><button type="button" class="btn btn-primary btn-lg"> Send Message</button></a></div>`

});

reconfirmation.addEventListener('click', async (e)=>{
     const name = taskForm['name'];
    const email = taskForm['email'];
    const subjetct = taskForm['subject'];
    const message = taskForm['message'];
    alert("Your message is send")
    await saveTask(name.value,email.value,subjetct.value, message.value,anio,dia,mes);
});
    //"email: " + email + "message: "+ message+ "body: " + body;