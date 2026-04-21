// Recupero tutti i prodotti utilizzando json-server
async function fecthProdotti(){
    const response = await fetch("http://localhost:3000/prodotti"); //aspetta la risposta
    
    if(!response.ok){
        throw new Error("Errore nel caricamento dati");
    }

    const dati = await response.json(); //aspetta il parsing JSON
    // const prodotti = dati.map(p => new Prodotto(p));
    console.log(dati);
}

// Quando clicco sul pulsante del singolo prodotto farò una POST nella proprietà carrello 



document.addEventListener("DOMContentLoaded", fecthProdotti);