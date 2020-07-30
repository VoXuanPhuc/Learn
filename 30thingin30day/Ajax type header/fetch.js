var userLinks = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let user = [];
fetch(userLinks).then((Response) => Response.json())
                .then((data) => {
                   user.push(...data);
                });

console.log(user);

var input = document.getElementById('input');
var suggestion = document.getElementById('suggestion');
function findMatchs (wordMatch , user ){
   return user.filter((place) => {
         const reg = new RegExp(wordMatch , 'gi');
         return place.city.match(reg) || place.state.match(reg);
   });
}

function displayword (){
   const matchArray = findMatchs(this.value, user);
   var sugess = matchArray.map(place => {
      return `<li id="${place.rank}" class=" list-group-item">Co the : ${place.city} or ${place.state}</li>`
   }).join('');
   
   suggestion.innerHTML = sugess;

   if(this.value == ''){
      matchArray.forEach((place) => {
         var id = document.getElementById( `${place.rank}`);
         id.remove();
      });
   }
   
}


input.addEventListener('keyup', displayword);
