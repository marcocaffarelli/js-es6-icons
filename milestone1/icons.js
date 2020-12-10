$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
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
  // const container = $('div.icons');
  // console.log(container);
  const container = document.querySelector('.icons')

  //Con il ciclo forEach aggiungo nell'html gli oggetti dell'array
  icons.forEach(element => {
    //console.log(element.name);
    const icona = `<div>
    <i class="fas fa-${element.name}"></i>
    <div class="title" style="text-transform:uppercase">${element.name}</div>
    </div>
    `; 
    //console.log(icona);
    container.innerHTML += icona;
  });
  
  //const gatto = $('div.icons').html('<div><i class="fas fa-cat"></i><div class="title">CAT</div>');
  //const corvo = $('div.icons').html('<div><i class="fas fa-crow"></i><div class="title">CROW</div>');
  //const cane = $('div.icons').html('<div><i class="fas fa-dog"></i><div class="title">DOG</div>');
  //const colomba = $('div.icons').html('<div><i class="fas fa-dove"></i><div class="title">DOVE</div>');
  //const drago = $('div.icons').html('<div><i class="fas fa-dragon"></i><div class="title">DRAGON</div>');
  //const cavallo = $('div.icons').html('<div><i class="fas fa-horse"></i><div class="title">HORSE</div>');
  //const ippopotamo = $('div.icons').html('<div><i class="fas fa-hippo"></i><div class="title">HIPPO</div>');
  //const pesce = $('div.icons').html('<div><i class="fas fa-fish"></i><div class="title">FISH</div>');

  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  
});

  
  
  /* ---- FUNCTIONS ----*/
  // Creiamo una funzione per iterare nell'array e che appenda al container le icone.
  // tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
  // tip: il template literal ci puo aiutare con il markup
  