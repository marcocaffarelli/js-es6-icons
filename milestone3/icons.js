$(document).ready(function () {
    // icone come da milestone 1
    // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 

    //Creata una classe icone per non dover ripetere name, prefix, type e family per ogni oggetto dell'array
    class Icone {
      constructor(name, prefix, type, family) {
        this.name = name;
        this.prefix = prefix;
        this.type = type;
        this.family = family;
      }
    }
    const icons = [
      new Icone ("cat", "fas", "fa", "animali"),
      new Icone ("crow", "fas", "fa", "animali"),
      new Icone ("dog", "fas", "fa", "animali"),
      new Icone ("dove", "fas", "fa", "animali"),
      new Icone ("dragon", "fas", "fa", "animali"),
      new Icone ("horse", "fas", "fa", "animali"),
      new Icone ("hippo", "fas", "fa", "animali"),
      new Icone ("fish", "fas", "fa", "animali"),
      new Icone ("pizza-slice", "fas", "fa", "cibo"),
      new Icone ("hotdog", "fas", "fa", "cibo"),
      new Icone ("bacon", "fas", "fa", "cibo"),
      new Icone ("hamburger", "fas", "fa", "cibo"),
      new Icone ("user-md", "fas", "fa", "user"),
      new Icone ("user-astronaut", "fas", "fa", "user"),
      new Icone ("user-ninja", "fas", "fa", "user"),
      new Icone ("user-secret", "fas", "fa", "user")

    ]
    // const icons =  [
    //   {
    //   name : "cat",
    //   prefix :"fas",
    //   type : "fa",
    //   family : "animali",
    //   },
    //   {
    //   name : "crow",
    //   prefix :"fas" ,
    //   type : "fa",
    //   family : "animali",
    //   },
    //   {
    //   name : "dog",
    //   prefix :"fas",
    //   type : "fa",
    //   family : "animali",
    //   },
    //   {
    //   name : "dove",
    //   prefix :"fas",
    //   type : "fa",
    //   family : "animali",
    //   },
    //   {
    //   name : "dragon",
    //   prefix :"fas",
    //   type : "fa",
    //   family : "animali",
    //   },
    //   {
    //   name : "horse",
    //   prefix :"fas",
    //   type : "fa",
    //   family : "animali",
    //   },
    //   {
    //   name : "hippo",
    //   prefix :"fas",
    //   type : "fa",
    //   family : "animali",
    //   },
    //   {
    //   name : "fish",
    //   prefix :"fas",
    //   type : "fa",
    //   family : "animali",
    //   },
    //   {
    //   name : "pizza-slice",
    //   prefix :"fas",
    //   type : "fa",
    //   family : "cibo",
    //   },
    //   {
    //   name : "hotdog",
    //   prefix :"fas",
    //   type : "fa",
    //   family : "cibo",
    //   },
    //   {
    //   name : "bacon",
    //   prefix :"fas",
    //   type : "fa",
    //   family : "cibo",
    //   },
    //   {
    //   name : "hamburger",
    //   prefix :"fas",
    //   type : "fa",
    //   family : "cibo",
    //   },
    //   {
    //   name : "user-md",
    //   prefix :"fas",
    //   type : "fa",
    //   family : "user",
    //   },
    //   {
    //   name : "user-astronaut",
    //   prefix :"fas",
    //   type : "fa",
    //   family : "user",
    //   },
    //   {
    //   name : "user-ninja",
    //   prefix :"fas",
    //   type : "fa",
    //   family : "user",
    //   },
    //   {
    //   name : "user-secret",
    //   prefix :"fas",
    //   type : "fa",
    //   family : "user",
    //   }

    // ]
    console.log(icons);

    
    // Selezioniamo il container icons
    const container = document.querySelector('.icons')

    // //Con il ciclo forEach aggiungo nell'html gli oggetti dell'array
    // icons.forEach(element => {
    //   //console.log(element.name);
    //   const icona = `<div>
    //   <i class="fas fa-${element.name}"></i>
    //   <div class="title" style="text-transform:uppercase">${element.name}</div>
    //   </div>
    //   `; 
    //   //console.log(icona);
    //   container.innerHTML += icona;
    // });
   
    // colori come da milestone 2
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
   
    //estrapoliamo i tipi di icone
    const select = $('select#type');
    //aggiungiamo i tipi alla select
    const animali = select.append('<option value="animali">Animali</option>');
    const cibo = select.append('<option value="cibo">Cibo</option>');
    const user = select.append('<option value="user">User</option>');
    //al change mostriamo solo le icone filtrate

    
    const selectElement = document.getElementById('type');
    //arrow function 
    selectElement.addEventListener('change', () => {
      //choice è uguale text dell'option
      const choice = $("#type option:selected").text();
      if (choice == "Animali") {
        //array newAnimals che contiene gli oggetti con family animali
        const newAnimals = newIcons.filter(icona => icona.family == "animali" )
        //console.log(newAnimals);
        //ogni volta che avviene il change cancella i div figli diretti del div icons 
        $('div.icons>div, i.fas, div.title').hide()
        //ciclo forEach per inserire gli oggetti che fanno parte di newAnimals
        filterFunction(newAnimals)
        container.innerHtml = newAnimals
      }else if(choice == "Cibo"){
        //array newAnimals che contiene gli oggetti con family cibo
        const newFoods = newIcons.filter(icona => icona.family == "cibo" )
        //console.log(newFoods);
        //ogni volta che avviene il change cancella i div figli diretti del div icons 
        $('div.icons>div, i.fas, div.title').hide()
        //ciclo forEach per inserire gli oggetti che fanno parte di newFoods
        filterFunction(newFoods)
      }else if(choice == "User"){
        //array newAnimals che contiene gli oggetti con family user
        const newUsers = newIcons.filter(icona => icona.family == "user" )
        //console.log(newUsers);
        //ogni volta che avviene il change cancella i div figli diretti del div icons 
        $('div.icons>div, i.fas, div.title').hide()
        //ciclo forEach per inserire gli oggetti che fanno parte di newUsers
        filterFunction(newUsers)
      }else{
        //console.log(newIcons);
        //ogni volta che avviene il change cancella i div figli diretti del div icons 
        $('div.icons>div, i.fas, div.title').hide()
        //ciclo forEach per inserire gli oggetti che fanno parte di newIcons
        filterFunction(newIcons)
      };
	  
    });
    
   
   
   
    /* ---- FUNCTIONS ----*/

    /**
     * ## Funzione che andra a stampare un array specifico
     * passare un array alla funzione per poter stampare nell'HTML tutti i suoi oggetti tramite un ciclo forEach
     * @param {array} arrayFiltrato Il tipo di array che andrò a stampare nell'HTML
     */
    function filterFunction(arrayFiltrato){
      arrayFiltrato.forEach(element => {
       //console.log(element.name);
       const icona = `<div>
       <i class="fas fa-${element.name}" style="color:${element.color}"></i>
       <div class="title" style="text-transform:uppercase">${element.name}</div>
       </div>
       `; 
       //console.log(icona);
       const container = document.querySelector('.icons')
       container.innerHTML += icona;
    
     })
   };  
    
   });
