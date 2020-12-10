$(document).ready(function () {
    // Qui le icone che abbiamo definito nella milestone 1
  const icons =  [
    {
    name : "cat",
    prefix :"fas",
    type : "fa",
    family : "animali",
    },
    {
    name : "crow",
    prefix :"fas" ,
    type : "fa",
    family : "animali",
    },
    {
    name : "dog",
    prefix :"fas",
    type : "fa",
    family : "animali",
    },
    {
    name : "dove",
    prefix :"fas",
    type : "fa",
    family : "animali",
    },
    {
    name : "dragon",
    prefix :"fas",
    type : "fa",
    family : "animali",
    },
    {
    name : "horse",
    prefix :"fas",
    type : "fa",
    family : "animali",
    },
    {
    name : "hippo",
    prefix :"fas",
    type : "fa",
    family : "animali",
    },
    {
    name : "fish",
    prefix :"fas",
    type : "fa",
    family : "animali",
    },
    {
    name : "pizza-slice",
    prefix :"fas",
    type : "fa",
    family : "cibo",
    },
    {
    name : "hotdog",
    prefix :"fas",
    type : "fa",
    family : "cibo",
    },
    {
    name : "bacon",
    prefix :"fas",
    type : "fa",
    family : "cibo",
    },
    {
    name : "hamburger",
    prefix :"fas",
    type : "fa",
    family : "cibo",
    },
    {
    name : "user-md",
    prefix :"fas",
    type : "fa",
    family : "user",
    },
    {
    name : "user-astronaut",
    prefix :"fas",
    type : "fa",
    family : "user",
    },
    {
    name : "user-ninja",
    prefix :"fas",
    type : "fa",
    family : "user",
    },
    {
    name : "user-secret",
    prefix :"fas",
    type : "fa",
    family : "user",
    }
  ]
  console.log(icons);
  
    
  // Selezioniamo il container icons
  const container = document.querySelector('.icons')
  
  //Con il ciclo forEach aggiungo nell'html gli oggetti dell'array
  // icons.forEach(element => {
  //   //console.log(element.name);
  //   const icona = `<div>
  //   <i class="fas fa-${element.name}"></i>
  //   </div>
  //   `; 
  //   //console.log(icona);
  //   container.innerHTML += icona;
  // });
    
  // definiamo dei colori per le icone (blue, orange, purple)
  const blue = "#0000FF";
  const orange = "#FFA500";
  const purple = "#A020F0";

  //aggiungiamo agli oggetti color, a seconda della family
  const newIcons = icons.map(element => {
    return {
      ...element,
      color: (element.family === 'animali') ? blue : (element.family === 'cibo') ? orange : purple
    }
  });
  console.log(newIcons);

  //inseriamo le icone colorate nel container
  //ripeto il ciclo forEach, cambiando icons con Newicons che ha anche color negli oggetti
  newIcons.forEach(element => {
    //console.log(element.name);
    const icona = `<div>
    <i class="fas fa-${element.name}" style="color:${element.color}"></i>
    <div class="title" style="text-transform:uppercase">${element.name}</div>
    </div>
    `; 
    //console.log(icona);
    container.innerHTML += icona;
  });




});
  /* ---- FUNCTIONS ----*/
  //1. Funzione milestone 1
  
  
  //2. funzione per assegnare un colore ad un icona
  // tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 
  
  
  //3. funzione per ottenere da un array
  // tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.