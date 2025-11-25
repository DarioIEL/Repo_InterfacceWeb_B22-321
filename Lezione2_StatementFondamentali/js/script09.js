let numeriEstratti = [];
let estrazioniEseguite = 0;

for(let i = 0; i < 45; i++){
    let numero = Math.ceil(Math.random() * 90);
    if(numeriEstratti.indexOf(numero) == -1){
        numeriEstratti.push(numero);
    }else{
        i--; //fatti di nuovo lo stesso giro
    }
    estrazioniEseguite++;
}

console.log(numeriEstratti);
console.log("Estrazioni eseguite: " + estrazioniEseguite);

//Prova a fare la stessa cosa con un While




