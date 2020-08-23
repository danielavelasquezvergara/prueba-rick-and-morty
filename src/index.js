import rickMorty from './RickAndMorty';
import $ from 'jquery';

rickMorty.then((personajes) => {
    const person  = document.getElementById('personajes')
    personajes.forEach(element => {
        person.innerHTML +=  `
        
        
  <div class="card m-3">
    <img id="${element.id}" src="${element.img}" class="card-img-top imagen rounded-circle" alt="image">
    <div class="card-body ${element.id}">
      <h5 class="card-title">${element.nombre}</h5>
      <p class="card-text">${element.genero}</p>
      <p class="card-text"><small class="text-muted">${element.especies}</small></p>
      <p class="card-text"><small class="text-muted">${element.estado}</small></p>
    </div>
  </div>`
        
    });
    
    $('.imagen').click((e)=>{
       $(`.${e.target.id}`).css('display', 'block')
    });
    console.log(personajes)

}).catch((error) => console.log(error))
// (function daIgual (){
//    rickMorty;
// })()