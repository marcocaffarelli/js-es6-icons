$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
  const icons =  [
    {
    name : "gatto",
    prefix :"fas",
    type : "fa",
    family : "animali",
    },
    {
    name : "corvo",
    prefix :"fas" ,
    type : "fa",
    family : "animali",
    },
    {
    name : "cane",
    prefix :"fas",
    type : "fa",
    family : "animali",
    },
    {
    name : "colomba",
    prefix :"fas",
    type : "fa",
    family : "animali",
    },
    {
    name : "drago",
    prefix :"fas",
    type : "fa",
    family : "animali",
    },
    {
    name : "cavallo",
    prefix :"fas",
    type : "fa",
    family : "animali",
    },
    {
    name : "ippopotamo",
    prefix :"fas",
    type : "fa",
    family : "animali",
    },
    {
    name : "pesce",
    prefix :"fas",
    type : "fa",
    family : "animali",
    }

  ]
  console.log(icons);

  
  // Selezioniamo il container icons
  const gatto = $('div.icons').html('<div><i class="fas fa-cat"></i><div class="title">CAT</div>');
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
  