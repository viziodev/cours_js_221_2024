//Fonction est Objet
  //Fonction nommee
     /**
         * Fonctions Calculatrice
         * somme()
         * produit()
         * soustraction()
     */
   function somme(a,b){
    return a+b
   }
   function produit(a,b){
    return a*b
   }
   function sous(a,b){
    return a-b
   }
   function calculatrice(a,b,op){
      switch (op) {
        case "+":
            return somme(a,b);
        case "*":
                return produit(a,b);
        case "-":
                return sous(a,b);
               
        default:
            break;
      }
   }
   somme(1,3)
   somme(15,56)
   somme.call(15,34);

//Fonction anonyme pour une utilisation
  s= function(a,b){
    return a+b
   }
   s(12,5)
   //parametre fonction=> callback
   function calculatrice1(a,b,fonction){
    return fonction(a,b)
   }
   calculatrice1(2,4,s)
   calculatrice1(2,4,function(a,b){
    return a- b
   })

   calculatrice1(2,4,function(a,b){
    return a/ b
   })

//Fonction anonyme flechee
s= (a,b=1)=>{

    return a+b
   }
   s(2)

s1=(a,b)=> a+b
calculatrice1(2,4,(a,b)=> a+b)

age=[16,12,15,21]
ageSup15=[]
for (const val of age) {
    if (val>15) {
        ageSup15.push(val)   
    }
}
ageSup15=age.filter(function(val){
    return val>15
})
agePair=age.filter(val=>val%2==0)


for (const key in age) {
    age[key] =age[key] +1
}
ageSup15=age.map(val=>val+1)

   

