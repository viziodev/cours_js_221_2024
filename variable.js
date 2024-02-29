/**
 * Function pair
 * 
 * 
 * 
 */

function pair(n) {
    if (n%2==0) {
         alert("Pair")
    } else {
        alert("ImPair")
    }
}
const AnneeEncours=2024
var AnneeEncoursBis=2024
function age(annee){
     var AnneeEncoursBis=2020

     return AnneeEncoursBis- annee;  
}





function afficheNombre(nbre ){
    let index;
  for (index = 1; index <= nbre; index++) {
       console.log(index)  ;  
  }


}
//console.log(index)//11
//afficheNombre(10 );

//Tableau
var t=[1,45,"bonjour",1.5]
function afficheTab() {
  for (let index = 0; index < t.length; index++) {
       console.log(t[index])
    
  }  
}

function afficheTab1() {
   for (const elt of t) {
      console.log(elt)
   }
  }
  

afficheTab1()