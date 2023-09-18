// Sample data - you can replace this with your own keywords and taboo words
const tabooCards = [
    {
        keyword: "Letto",
        tabooWords: ["Dormire", "Camera", "Coperte"]
    },
    {
        keyword: "Porta",
        tabooWords: ["Entrare", "Uscire", "Casa"]
    },
    {
        keyword: "Libro",
        tabooWords: ["Lettura", "Pagine", "Scrittore"]
    },
    {
        keyword: "Bicicletta",
        tabooWords: ["Ruote", "Pedali", "Guidare"]
    },
    {
        keyword: "Macchina",
        tabooWords: ["Ruote", "Parcheggio", "Guidare"]
    },
    {
        keyword: "Musica",
        tabooWords: ["Cantare", "Canzone", "Ascoltare"]
    },
    {
        keyword: "Parcheggio",
        tabooWords: ["Macchina", "Parcheggiare", "Automobile"]
    },
    {
        keyword: "Pizza",
        tabooWords: ["Mozzarella", "Ananas", "Forno"]
    },
    {
        keyword: "Biblioteca",
        tabooWords: ["Libri", "Studio", "Silenzio"]
    },
    {
        keyword: "Posta",
        tabooWords: ["Lettere", "Pacco", "Timbro"]
    },
    {
        keyword: "Polizia",
        tabooWords: ["Poliziotti", "Emergenza", "Legge"]
    },
    {
        keyword: "Scuola",
        tabooWords: ["Insegnanti", "Lezioni", "Studenti"]
    },
    {
        keyword: "Ospedale",
        tabooWords: ["Dottore", "Malattia", "Medicina"]
    },
    {
        keyword: "Parco",
        tabooWords: ["Alberi", "Natura", "Verde"]
    },
    {
        keyword: "Stazione",
        tabooWords: ["Biglietto", "Treni", "Orario"]
    },
    {
        keyword: "Aeroporto",
        tabooWords: ["Volare", "Bagagli", "Aereo"]
    },
    {
        keyword: "Supermercato",
        tabooWords: ["Spesa", "Prodotti", "Carrello"]
    },
    {
        keyword: "Chiesa",
        tabooWords: ["Preghiera", "Religione", "Altare"]
    },
    {
        keyword: "Moschea",
        tabooWords: ["Preghiera", "Religione", "Minareto"]
    },
    {
        keyword: "Sinagoga",
        tabooWords: ["Preghiera", "Religione", "Rabbi"]
    },
    {
        keyword: "Museo",
        tabooWords: ["Arte", "Mostra", "Quadro"]
    },
    {
        keyword: "Cinema",
        tabooWords: ["Film", "Schermo", "Sala"]
    },
    {
        keyword: "Teatro",
        tabooWords: ["Spettacolo", "Attori", "Palcoscenico"]
    },
    {
        keyword: "Stadio",
        tabooWords: ["Sport", "Tifosi", "Campo"]
    },
    {
        keyword: "Ponte",
        tabooWords: ["Fiume", "Attraversare", "Macchina"]
    },
    {
        keyword: "Autostrada",
        tabooWords: ["Velocità", "Macchina", "Camion"]
    },
    {
        keyword: "Rotatoria",
        tabooWords: ["Circolare", "Incrocio", "Segnaletica"]
    },
    {
        keyword: "Motorino",
        tabooWords: ["Guida", "Scooter", "Ruote"]
    },
    {
        keyword: "Specchio",
        tabooWords: ["Riflessione", "Vetro", "Immagine"]
    },
    {
        keyword: "Appendiabiti",
        tabooWords: ["Abiti", "Appendere", "Vestiti"]
    },
    {
        keyword: "Scarpiera",
        tabooWords: ["Scarpe", "Organizzare", "Calzature"]
    },
    {
        keyword: "Campanello",
        tabooWords: ["Suono", "Citofono", "Porta"]
    },
    {
        keyword: "Libreria",
        tabooWords: ["Libri", "Scaffali", "Lettura"]
    },
    {
        keyword: "Tavolo",
        tabooWords: ["Sedie", "Cibo", "Oggetti"]
    },
    {
        keyword: "Lampada",
        tabooWords: ["Spegnere", "Luce", "Accendere"]
    },
    {
        keyword: "Forno",
        tabooWords: ["Cottura", "Calore", "Cucina"]
    },
    {
        keyword: "Fornelli",
        tabooWords: ["Gas", "Cottura", "Cucina"]
    },
    {
        keyword: "Congelatore",
        tabooWords: ["Ghiaccio", "Conservazione", "Cibo"]
    },
    {
        keyword: "Comodino",
        tabooWords: ["Libri", "Lampada", "Sveglia"]
    },
    {
        keyword: "Armadio",
        tabooWords: ["Vestiti", "Abiti", "Abbigliamento"]
    },
    {
        keyword: "Finestra",
        tabooWords: ["Vetro", "Aria", "Tenda"]
    },
    {
        keyword: "Tenda",
        tabooWords: ["Copertura", "Oscuramento", "Finestra"]
    },
    {
        keyword: "Persiana",
        tabooWords: ["Oscuro", "Copertura", "Finestra"]
    },
    {
        keyword: "Lavandino",
        tabooWords: ["Acqua", "Lavaggio", "Cucina"]
    },
    {
        keyword: "Doccia",
        tabooWords: ["Acqua", "Pulizia", "Bagno"]
    },
    {
        keyword: "Vasca da bagno",
        tabooWords: ["Immersione", "Bagno", "Rilassamento"]
    },
    {
        keyword: "Spazzatura",
        tabooWords: ["Rifiuti", "Cestino", "Smaltimento"]
    },
    {
        keyword: "Scrivania",
        tabooWords: ["Lavoro", "Studio", "Sedia"]
    },
    {
        keyword: "Lavatrice",
        tabooWords: ["Lavaggio", "Pulizia", "Casa"]
    },
    {
        keyword: "Asciugatrice",
        tabooWords: ["Asciugatura", "Bucato", "Casa"]
    },
    {
        keyword: "Ferro da stiro",
        tabooWords: ["Stirare", "Vestiti", "Tessuti"]
    },
    {
        keyword: "Garage",
        tabooWords: ["Auto", "Ripostiglio", "Vetture"]
    },
    {
        keyword: "Lavanderia",
        tabooWords: ["Panni", "Lavaggio", "Casa"]
    },
    {
        keyword: "Bagno",
        tabooWords: ["Toilette", "Igiene", "Doccia"]
    },
    {
        keyword: "Ingresso",
        tabooWords: ["Porta", "Accesso", "Casa"]
    },
    {
        keyword: "Soggiorno / Salotto",
        tabooWords: ["Divano", "TV", "Relax"]
    },
    {
        keyword: "Mamma",
        tabooWords: ["Madre", "Famiglia", "Casa"]
    },
    {
        keyword: "Papà",
        tabooWords: ["Padre", "Famiglia", "Casa"]
    },
    {
        keyword: "Sorella",
        tabooWords: ["Fratello", "Parente", "Famiglia"]
    },
    {
        keyword: "Fratello",
        tabooWords: ["Sorella", "Parente", "Famiglia"]
    },
    {
        keyword: "Nonna",
        tabooWords: ["Nonno", "Parente", "Famiglia"]
    },
    {
        keyword: "Nonno",
        tabooWords: ["Nonna", "Parente", "Famiglia"]
    },
    {
        keyword: "Cugina",
        tabooWords: ["Parente", "Famiglia", "Relazione"]
    },
    {
        keyword: "Moglie",
        tabooWords: ["Marito", "Matrimonio", "Relazione"]
    },
    {
        keyword: "Marito",
        tabooWords: ["Moglie", "Matrimonio", "Relazione"]
    },
    {
        keyword: "Fidanzata",
        tabooWords: ["Rapporto", "Amore", "Partner"]
    },
    {
        keyword: "Zio",
        tabooWords: ["Parente", "Famiglia", "Relazione"]
    },
    {
        keyword: "Mela",
        tabooWords: ["Frutta", "Rossa", "Croccante"]
    },
    {
        keyword: "Arancia",
        tabooWords: ["Frutta", "Arancione", "Succo"]
    },
    {
        keyword: "Fragola",
        tabooWords: ["Frutta", "Rossi", "Dolce"]
    },
    {
        keyword: "Pera",
        tabooWords: ["Frutta", "Verde", "Succosa"]
    },
    {
        keyword: "Banana",
        tabooWords: ["Frutta", "Gialla", "Tropicale"]
    },
    {
        keyword: "Uva",
        tabooWords: ["Frutta", "Acini", "Vino"]
    },
    {
        keyword: "Ananas",
        tabooWords: ["Frutta", "Tropicale", "Giallo"]
    },
    {
        keyword: "Pesca",
        tabooWords: ["Frutta", "Pelle", "Dolce"]
    },
    {
        keyword: "Limone",
        tabooWords: ["Frutta", "Giallo", "Aspro"]
    },
    {
        keyword: "Ciliegia",
        tabooWords: ["Frutta", "Rossi", "Piccole"]
    },
    {
        keyword: "Pomodoro",
        tabooWords: ["Verdura", "Rosso", "Salsa"]
    },
    {
        keyword: "Carota",
        tabooWords: ["Verdura", "Arancione", "Cruda"]
    },
    {
        keyword: "Insalata",
        tabooWords: ["Verdura", "Foglie", "Rucola"]
    },
    {
        keyword: "Cipolla",
        tabooWords: ["Verdura", "Odore", "Bianca"]
    },
    {
        keyword: "Melanzana",
        tabooWords: ["Verdura", "Viola", "Cottura"]
    },
    {
        keyword: "Zucchina",
        tabooWords: ["Verdura", "Verde", "Cottura"]
    },
    {
        keyword: "Broccolo",
        tabooWords: ["Verdura", "Verde", "Cottura"]
    },
    {
        keyword: "Patate",
        tabooWords: ["Verdura", "Amido", "Fritte"]
    },
    {
        keyword: "Riso",
        tabooWords: ["Cereale", "Grains", "Cottura"]
    },
    {
        keyword: "Pasta",
        tabooWords: ["Cereale", "Italiana", "Cottura"]
    },
    {
        keyword: "Pane",
        tabooWords: ["Cibo", "Farina", "Sfornato"]
    },
    {
        keyword: "Farina",
        tabooWords: ["Cibo", "Bianco", "Impasto"]
    },
    {
        keyword: "Pollo",
        tabooWords: ["Carne", "Bianco", "Gallina"]
    },
    {
        keyword: "Burro",
        tabooWords: ["Cibo", "Grasso", "Spalmabile"]
    },
    {
        keyword: "Zucchero",
        tabooWords: ["Dolce", "Bianco", "Dissolvente"]
    },
    {
        keyword: "Acqua",
        tabooWords: ["Trasparente", "Bevanda", "Vita"]
    },
    {
        keyword: "Latte",
        tabooWords: ["Bianco", "Bevanda", "Mucca"]
    },
    {
        keyword: "Caffè",
        tabooWords: ["Bevanda", "Calda", "Risveglio"]
    },
    {
        keyword: "Birra",
        tabooWords: ["Bevanda", "Alcolica", "Schiuma"]
    },
    {
        keyword: "Vino",
        tabooWords: ["Bevanda", "Uva", "Rosso"]
    },
    {
        keyword: "Padella",
        tabooWords: ["Cottura", "Antiaderente", "Manico"]
    },
    {
        keyword: "Pentola",
        tabooWords: ["Cottura", "Manico", "Bollitura"]
    },
    {
        keyword: "Frullatore",
        tabooWords: ["Miscelare", "Elettrico", "Smoothie"]
    },
    {
        keyword: "Bilancia",
        tabooWords: ["Pesare", "Misura", "Peso"]
    },
    {
        keyword: "Scolapasta",
        tabooWords: ["Pasta", "Cucina", "Buchi"]
    },
    {
        keyword: "Piatto",
        tabooWords: ["Tavolo", "Cibo", "Piano"]
    },
    {
        keyword: "Bicchiere",
        tabooWords: ["Bevanda", "Trasparente", "Sorso"]
    },
    {
        keyword: "Cavatappi",
        tabooWords: ["Aprire", "Vino", "Cork"]
    },
    {
        keyword: "Tagliere",
        tabooWords: ["Taglio", "Cucina", "Legno"]
    },
    {
        keyword: "Forchetta",
        tabooWords: ["Utensile", "Posate", "Denti"]
    },
    {
        keyword: "Coltello",
        tabooWords: ["Taglio", "Cucina", "Lama"]
    },
    {
        keyword: "Fattoria",
        tabooWords: ["Agricoltura", "Animali", "Natura"]
    },
    {
        keyword: "Giardino",
        tabooWords: ["Natura", "Fiori", "Pianta"]
    },
    {
        keyword: "Contadina",
        tabooWords: ["Agricoltura", "Rurale", "Campi"]
    },
    {
        keyword: "Giardiniere",
        tabooWords: ["Fiori", "Verde", "Manutenzione"]
    },
    {
        keyword: "Allevatore",
        tabooWords: ["Animali", "Cura", "Bestiame"]
    },
    {
        keyword: "Pescatore",
        tabooWords: ["Pesca", "Mare", "Reti"]
    },
    {
        keyword: "Barca",
        tabooWords: ["Acqua", "Navigazione", "Trasporto"]
    },
    {
        keyword: "Stalla",
        tabooWords: ["Animali", "Fieno", "Cavalli"]
    },
    {
        keyword: "Fabbrica",
        tabooWords: ["Produzione", "Lavoro", "Industria"]
    },
    {
        keyword: "Sarta",
        tabooWords: ["Cucito", "Ago", "Vestiti"]
    },
    {
        keyword: "Meccanico",
        tabooWords: ["Riparazione", "Macchine", "Motori"]
    },
    {
        keyword: "Edificio",
        tabooWords: ["Costruzione", "Struttura", "Architettura"]
    },
    {
        keyword: "Maestra",
        tabooWords: ["Insegnante", "Scuola", "Educazione"]
    },
    {
        keyword: "Università",
        tabooWords: ["Istruzione", "Corsi", "Diploma"]
    },
    {
        keyword: "Ospedale",
        tabooWords: ["Salute", "Medici", "Pazienti"]
    },
    {
        keyword: "Azienda",
        tabooWords: ["Lavoro", "Impresa", "Business"]
    },
    {
        keyword: "Giornalista",
        tabooWords: ["Notizie", "Media", "Rapporti"]
    },
    {
        keyword: "Ingegnere",
        tabooWords: ["Progettazione", "Tecnologia", "Costruzione"]
    },
    {
        keyword: "Infermiera",
        tabooWords: ["Cura", "Salute", "Pazienti"]
    },
    {
        keyword: "Psicologo",
        tabooWords: ["Mente", "Terapia", "Salute"]
    },
    {
        keyword: "Dottoressa",
        tabooWords: ["Medicina", "Pazienti", "Cura"]
    },
    {
        keyword: "Cuoco",
        tabooWords: ["Cucina", "Ricette", "Alimenti"]
    },
    {
        keyword: "Cameriere",
        tabooWords: ["Servizio", "Ristorante", "Ordini"]
    },
    {
        keyword: "Ristorante",
        tabooWords: ["Cibo", "Servizio", "Prenotazione"]
    },
    {
        keyword: "Negozio",
        tabooWords: ["Acquisti", "Vendita", "Prodotti"]
    },
    {
        keyword: "Commesso",
        tabooWords: ["Vendita", "Assistenza", "Cliente"]
    },
    {
        keyword: "Parrucchiere",
        tabooWords: ["Capelli", "Taglio", "Acconciatura"]
    },
    {
        keyword: "Palestra",
        tabooWords: ["Allenamento", "Esercizio", "Salute"]
    },
    {
        keyword: "Dirigente",
        tabooWords: ["Gestione", "Responsabilità", "Azienda"]
    },
    {
        keyword: "Ballerina",
        tabooWords: ["Danza", "Spettacolo", "Coreografia"]
    },
    {
        keyword: "Cantante",
        tabooWords: ["Musica", "Voce", "Concerto"]
    }   

    // Add more cards as needed
];

// Function to display a random card
function displayRandomCard() {
    // Randomly select a card from the array
    const randomIndex = Math.floor(Math.random() * tabooCards.length);
    const selectedCard = tabooCards[randomIndex];

    // Display the keyword and taboo words in the HTML
    document.getElementById("keyword").textContent = selectedCard.keyword;
    document.getElementById("taboo-list").innerHTML = selectedCard.tabooWords.map(word => `<li>${word}</li>`).join("");

    // Reset the timer or perform any other actions you need here
}

// Event listener for the "Next Card" button
document.getElementById("next-button").addEventListener("click", displayRandomCard);

// Initial display of a random card
displayRandomCard();
