// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole: - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// Variabili dei prezzi
let priceKm = 0.21;
let priceKmDisocunt;
let numKmUser;
let ageUser;
let ticketPrice;

console.log(ageUser, numKmUser)
// Richiesta dati utente
document.getElementById("bottone").addEventListener("click",
    () => {
    numKmUser = parseInt(document.getElementById("km_user").value);
    ageUser = parseInt(document.getElementById("age_user").value);

    console.log("questi sono i km scelti dall'utente " + numKmUser,"questi sono gli anni dell'utente " + ageUser);
    // Condizione di età per sconto
    if (ageUser > 65){
        priceKmDisocunt = (0.21 * 0.4)
    } else if (ageUser < 18){
        priceKmDisocunt = (0.21 * 0.2)
    } else {
        priceKmDisocunt = 0
    }

    let ticketPriceInfinity = ((priceKm - priceKmDisocunt) * numKmUser);
    ticketPrice = ticketPriceInfinity.toFixed(2)

    // Stampa prezzi a seconda dell'età
    console.log("Il prezzo per il biglietto è di", ticketPrice + "€")
}
)




