let tasks=[

{
name:"🇩🇪 Schreiben 1 y 2 Alemán",
done:false
},

{
name:"🇫🇷 Capítulo 8 Francés",
done:false
},

{
name:"📐 Deberes de mates",
done:false
},

{
name:"📚 Minicontrol de mates",
done:false
},

{
name:"🌍 Revoluciones Francesa, Americana, Italiana y Alemana",
done:false
},

{
name:"📖 Castellano",
done:false
},

{
name:"🗺️ Comentario de mapa Sociales",
done:false
}


];


let tips=[

"Explica el tema con tus propias palabras.",

"No estudies con el móvil al lado.",

"Haz descansos cada 50 minutos.",

"Beber agua ayuda a mantener la concentración.",

"Empieza por la tarea más difícil."

];



function load(){


let box=document.getElementById("tasks");

box.innerHTML="";


tasks.forEach((task,index)=>{


let div=document.createElement("div");

div.className="task";


if(task.done){

div.classList.add("done");

}


div.innerHTML=task.name;


div.onclick=function(){

task.done=!task.done;

load();

}


box.appendChild(div);


});


update();


next();


}



function finishTask(){


let task=
tasks.find(t=>!t.done);


if(task){

task.done=true;

load();

}


}



function update(){


let completed=
tasks.filter(t=>t.done).length;


let percent=
Math.round(
completed/tasks.length*100
);



document.getElementById("bar")
.style.width=percent+"%";



document.getElementById("percentage")
.innerHTML=
percent+"% completado";


}




function next(){


let next=
tasks.find(t=>!t.done);


document.getElementById("nextTask")
.innerHTML=
next?
next.name:
"🎉 Todo terminado";


}



document.getElementById("tip")
.innerHTML=
tips[
Math.floor(Math.random()*tips.length)
];


load();
