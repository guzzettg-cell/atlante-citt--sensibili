// ---------------------------------------------------------------
// DATI: ogni puntata è un oggetto con città, coordinate, categoria,
// testo e spunti geografici. Nuove puntate si aggiungono qui.
// ---------------------------------------------------------------
const CATEGORIES = {
  acqua:    { label: 'Acqua',                 color: 'var(--acqua)',    hex:'#2fa0ac', fill:'#1f7580' },
  rifiuti:  { label: 'Rifiuti',                color: 'var(--rifiuti)',  hex:'#c9932a', fill:'#a1791f' },
  verde:    { label: 'Verde e rigenerazione',  color: 'var(--verde)',    hex:'#4caf63', fill:'#3b8c4c' },
  energia:  { label: 'Energia',                color: 'var(--energia)',  hex:'#e0b23c', fill:'#b3872a' },
  mobilita: { label: 'Mobilità',               color: 'var(--mobilita)', hex:'#7b82d9', fill:'#5b62c2' },
  calore:   { label: 'Calore urbano',          color: 'var(--calore)',   hex:'#e2704a', fill:'#c05a35' },
};

const CATEGORY_PAGES = {
  acqua: {
    intro: "L'acqua nelle città non è solo quella del rubinetto: è la pioggia che cade sui tetti e sull'asfalto, il fiume che attraversa il centro storico, la falda sotto i piedi, il mare che bagna la costa. Le puntate di questo tema raccontano come le città europee gestiscono la risorsa idrica in tutte le sue forme: reti di acqua non potabile a Parigi, piazze che si allagano apposta a Copenaghen, desalinizzazione a Málaga, fiumi tombati che tornano alla luce a Lovanio e Zurigo.",
    deepdive: "Dal punto di vista geografico, l'acqua urbana intreccia più temi contemporaneamente: il ciclo idrologico (dove nasce l'acqua e dove finisce), il rischio idrogeologico (alluvioni, siccità), la storia dell'urbanistica (perché molte città sono nate sui fiumi) e le disuguaglianze nell'accesso alla risorsa tra Nord e Sud del mondo. Le \"città spugna\", che assorbono l'acqua piovana invece di scaricarla subito, sono oggi una delle risposte più diffuse in Europa al cambiamento climatico.",
    sdgs: [
      { num: 6, title: "Acqua pulita e servizi igienico-sanitari", color: "#26BDE2",
        why: "È l'obiettivo più diretto: il Target 6.3 chiede di migliorare la qualità dell'acqua riducendo l'inquinamento e aumentando riciclo e riutilizzo; il Target 6.4 chiede di usare l'acqua in modo più efficiente per affrontare la scarsità idrica.",
        link: "https://asvis.it/goal6" },
      { num: 11, title: "Città e comunità sostenibili", color: "#FD9D24",
        why: "Il Target 11.5 chiede di ridurre in modo significativo le persone colpite da calamità legate all'acqua, come le alluvioni: esattamente il problema che le \"città spugna\" cercano di risolvere.",
        link: "https://asvis.it/goal11" },
      { num: 14, title: "Vita sott'acqua", color: "#0A97D9",
        why: "Il Target 14.1 chiede di prevenire e ridurre l'inquinamento marino proveniente dalle attività di terra: la qualità dell'acqua urbana influisce direttamente su fiumi, coste e mari.",
        link: "https://asvis.it/goal14" },
    ],
    resources: [
      { label: "Eniscuola — Conoscere l'acqua", url: "https://www.eniscuola.net/argomento/conoscere-lacqua/" },
      { label: "ASviS — Obiettivo 6, Acqua pulita e servizi igienico-sanitari", url: "https://asvis.it/goal6" },
      { label: "Focus junior - Acqua: perché è la risorsa più preziosa del pianeta", url: "https://www.focusjunior.it/scienza/ambiente/acqua-perche-e-la-risorsa-piu-preziosa-del-pianeta-e-perche-non-dobbiamo-sprecarla/" }
    ]
  },
  rifiuti: {
    intro: "Dove finisce un sacchetto della spazzatura dopo che lo buttiamo? Le puntate di questo tema seguono il percorso dei rifiuti nelle città europee: reti pneumatiche sotterranee a Madrid, Bergen e Londra, impianti che separano tutto automaticamente in Norvegia, sistemi senza sanzioni a Oslo e Stoccolma, centri di riciclo che sono anche luoghi di scambio a Copenaghen.",
    deepdive: "La gestione dei rifiuti è un tema che collega scelte urbanistiche (dove passano i camion, come sono organizzate le strade), tecnologia (sensori, impianti di selezione automatica) e comportamenti civici (come una comunità decide di collaborare). È anche un indicatore importante di efficienza amministrativa: città che funzionano bene nella raccolta rifiuti spesso funzionano bene anche in altri servizi pubblici.",
    sdgs: [
      { num: 12, title: "Consumo e produzione responsabili", color: "#BF8B2E",
        why: "Il Target 12.5 chiede di ridurre in modo sostanziale la produzione di rifiuti attraverso prevenzione, riduzione, riciclaggio e riutilizzo: il cuore di ogni sistema di raccolta differenziata.",
        link: "https://asvis.it/goal12" },
      { num: 11, title: "Città e comunità sostenibili", color: "#FD9D24",
        why: "Il Target 11.6 chiede esplicitamente di ridurre l'impatto ambientale delle città \"in particolare riguardo alla gestione dei rifiuti\": è il collegamento più diretto tra questo tema e la vita quotidiana di una città.",
        link: "https://asvis.it/goal11" },
    ],
    resources: [
      { label: "Unione Europea - Economia circolare", url: "https://www.consilium.europa.eu/it/topics/circular-economy/" },
      { label: "ASviS — Obiettivo 12, Consumo e produzione responsabili", url: "https://asvis.it/goal12" }
    ]
  },
  energia: {
    intro: "Da dove viene l'elettricità che accende una scuola, scalda una casa, muove un tram? Le puntate di questo tema esplorano le fonti rinnovabili nelle città europee: pannelli solari sui tetti di Parigi e Amsterdam, comunità energetiche di quartiere a Grenoble e Pamplona, geotermia a Larderello e Szeged, villaggi che si autoproducono l'energia come Feldheim.",
    deepdive: "L'energia è uno dei temi più geografici in assoluto: dipende dalle risorse naturali disponibili in un territorio (sole, vento, acqua, calore geotermico), dalla storia industriale di una regione e dalle scelte politiche di chi governa le reti. Il passaggio dai combustibili fossili alle rinnovabili sta ridisegnando la mappa energetica d'Europa, spostando potere e investimenti verso nuove aree.",
    sdgs: [
      { num: 7, title: "Energia pulita e accessibile", color: "#FCC30B",
        why: "Il Target 7.2 chiede di aumentare notevolmente la quota di energie rinnovabili nel mix energetico: è l'obiettivo di riferimento per pannelli solari, geotermia e comunità energetiche.",
        link: "https://asvis.it/goal7"},
      { num: 13, title: "Lotta contro il cambiamento climatico", color: "#3F7E44",
        why: "Il Target 13.2 chiede di integrare nelle politiche e nei piani nazionali le misure di contrasto ai cambiamenti climatici: sostituire i combustibili fossili con fonti rinnovabili è una delle azioni più dirette in questo senso.",
        link: "https://asvis.it/goal13" }
    ],
    resources: [
      { label: "Eniscuola — Energia", url: "https://eniscuola.eni.com/it-IT/energia.html" },
      { label: "ASviS — Obiettivo 7, Energia pulita e accessibile", url: "https://asvis.it/goal7" }
    ]
  },
  mobilita: {
    intro: "Come ci si sposta in una città che funziona bene? Le puntate di questo tema raccontano scelte di mobilità molto diverse tra loro: il modello tram-treno di Karlsruhe, la sicurezza stradale di Helsinki, le funivie urbane di Créteil, i parcheggi nascosti sottoterra ad Amsterdam e Aarhus, le strade scolastiche di Malmö.",
    deepdive: "La mobilità urbana è geografia allo stato puro: distanze, tempi di percorrenza, ostacoli fisici (fiumi, ferrovie, colline) che dividono i quartieri, e scelte politiche su quanto spazio pubblico dedicare alle automobili rispetto a pedoni, biciclette e trasporto collettivo. Le città che riescono a integrare più mezzi di trasporto in un unico sistema semplice da usare tendono a essere anche le più vivibili.",
    sdgs: [
      { num: 11, title: "Città e comunità sostenibili", color: "#FD9D24",
        why: "Il Target 11.2 chiede di fornire a tutti l'accesso a sistemi di trasporto sicuri, sostenibili e convenienti, migliorando in particolare la sicurezza stradale.",
        link: "https://asvis.it/goal11" },
      { num: 13, title: "Lotta contro il cambiamento climatico", color: "#3F7E44",
        why: "Ridurre il traffico privato a favore di mezzi collettivi ed elettrici è una delle misure concrete richieste dal Target 13.2 per contrastare i cambiamenti climatici.",
        link: "https://asvis.it/goal13" },
      { num: 3, title: "Salute e benessere", color: "#4C9F38",
        why: "Il Target 3.6 chiedeva di dimezzare a livello mondiale i decessi e le lesioni da incidenti stradali: il modello \"vision zero\" di Helsinki è un esempio concreto di come avvicinarsi a questo traguardo.",
        link: "https://asvis.it/goal3" },
    ],
    resources: [
      { label: "GREEN SCHOOL - Linee guida per un piano partecipato di mobilità scolastica sostenibile", url: "https://www.green-school.it/tools/view/35" },
      { label: "ROMA — Settimana Europea della Mobilità 2026", url: "https://romamobilita.it/sem-evento/presentazione-degli-eventi-della-settimana-europea-della-mobilita-2026/" },
      { label: "Mostra fotografica “ROMA CHE CAMBIA, LA CITTÀ POSSIBILE", url: "https://romamobilita.it/sem-evento/mostra-fotografica-roma-che-cambia-la-citt-possibile/" },
      { label: "ISPRA — Mobilità sostenibile", url: "https://www.youtube.com/watch?v=9IK3ZwS5RWA" },
      { label: "Moveo — Città senza auto", url: "https://moveo.telepass.com/citta-senza-auto/" },
      { label: "ASviS — Obiettivo 11, Città e comunità sostenibili", url: "https://asvis.it/goal11" },
      { label: "Focus Junior — Obiettivo 11", url: "https://www.focusjunior.it/news/news-e-curiosita/lobiettivo-11-dellagenda-2030-le-citta-sostenibili/" }
    ] 
  }, 
  verde: {
    intro: "Le puntate di questo tema raccontano come le città europee stanno riportando la natura dentro i propri confini: nuovi parchi su aree industriali dismesse a Copenaghen e Lisbona, facciate verdi a Berlino, interi quartieri rigenerati a Vienna e Bruxelles, alberi censiti uno per uno a Berlino.",
    deepdive: "La rigenerazione urbana e il verde pubblico intrecciano geografia fisica (clima, suolo, vegetazione spontanea di una regione) e geografia umana (chi ha accesso a un parco vicino casa, come cambia il valore di un quartiere quando arriva un'area verde). Riconvertire un'area industriale dismessa invece di costruire su un nuovo terreno è anche una scelta che rallenta il consumo di suolo, una delle grandi sfide ambientali europee.",
    sdgs: [
      { num: 15, title: "Vita sulla terra", color: "#56C02B",
        why: "Il Target 15.9 chiede di integrare i valori di ecosistema e biodiversità nella pianificazione locale: portare la natura dentro le città è un modo concreto per farlo.",
        link: "https://asvis.it/goal15" },
      { num: 11, title: "Città e comunità sostenibili", color: "#FD9D24",
        why: "Il Target 11.7 chiede l'accesso universale a spazi verdi pubblici sicuri, inclusivi e accessibili, in particolare per bambini, anziani e persone con disabilità.",
        link: "https://asvis.it/goal11" },
    ],
    resources: [
      { label: "WWF Italia — Quattro proposte per la rivoluzione verde in città", url: "https://www.wwf.it/pandanews/ambiente/le-quattro-proposte-wwf-per-la-rivoluzione-verde-in-citta/" },
      { label: "Quant'è verde il tuo quartiere", url: "https://voxeurop.eu/it/mappa-citta-europee-accesso-verde-resilienza-climatica/" },
      { label: "ASviS — Obiettivo 15, Vita sulla terra", url: "https://asvis.it/goal15" }
    ] 
  },
  calore: {
    intro: "Con le estati sempre più calde, le città europee sperimentano soluzioni diverse per restare vivibili: rifugi climatici a Barcellona, acqua di mare o di lago per raffrescare edifici a Marsiglia e Ginevra, alberi e catasti climatici a Málaga, un'antica rete di canali medievale ancora in funzione a Salisburgo.",
    deepdive: "Le isole di calore urbane sono un fenomeno tipicamente geografico: dipendono dalla quantità di superfici cementificate, dalla presenza di verde e acqua, dall'orientamento delle strade rispetto al sole. Studiare come una città reagisce al caldo estremo significa anche capire le disuguaglianze sociali: non tutti hanno la stessa possibilità di proteggersi, e le politiche pubbliche di raffrescamento cercano di colmare questo divario.",
    sdgs: [
      { num: 13, title: "Lotta contro il cambiamento climatico", color: "#3F7E44",
        why: "Il Target 13.1 chiede di rafforzare la resilienza e la capacità di adattamento ai rischi legati al clima: le ondate di calore sono uno degli effetti più diretti e misurabili del riscaldamento globale sulle città.",
        link: "https://asvis.it/goal13" },
      { num: 3, title: "Salute e benessere", color: "#4C9F38",
        why: "Il Target 3.9 chiede di ridurre sostanzialmente i decessi causati da inquinamento e contaminazione: il caldo estremo è un rischio sanitario concreto, specialmente per le persone più fragili.",
        link: "https://asvis.it/goal3" },
      { num: 11, title: "Città e comunità sostenibili", color: "#FD9D24",
        why: "Il Target 11.b chiede alle città di adottare piani integrati per la mitigazione e l'adattamento ai cambiamenti climatici: progettare spazi pubblici che resistono al caldo ne è un'applicazione diretta.",
        link: "https://asvis.it/goal11" },
    ],
    resources: [
      { label: "GEOPOP — Perché fa così caldo in città?", url: "https://www.geopop.it/cose-unisola-urbana-di-calore-vediamo-perche-in-citta-fa-sempre-piu-caldo/" },
      { label: "Come diminuire il caldo in città", url: "https://www.youtube.com/watch?v=FfES6LAIRwY" },
      { label: "L’isola di calore spiegata: cause, conseguenze e soluzioni", url: "https://squarci.info/isola-di-calore/" },
      { label: "ASviS — Obiettivo 13, Lotta contro il cambiamento climatico", url: "https://asvis.it/goal13" },
      { label: "Eniscuola — Energia e Ambiente", url: "https://www.eniscuola.net/" }
    ]
  },
};

const EPISODES = [
  {
    num: 1, title: "La Sanisette Lumière", city: "Parigi", country: "Francia",
    lat: 48.8566, lon: 2.3522, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0iGvj1HaU3chrZeH86YrmQ7TSfh6PqdXcBBAMUi9gu9C22QfNVSNGMfxSMpQTkcYJl",
    spunti: "Servizi pubblici e qualità della vita urbana; confronto tra infrastrutture igieniche in diverse città europee; il ruolo del Comune nella gestione dei beni pubblici.",
    attivita: "Cerca online i dati sui bagni pubblici del tuo Comune: quanti sono, dove si trovano, sono gratuiti? Confrontali con i numeri di Parigi (435 nuove cabine, 15 milioni di utilizzi l'anno) e costruisci una tabella di confronto.",
    summary: "Parigi rinnova i suoi bagni pubblici: entro maggio saranno 435 le nuove “sanisette”, più grandi, accessibili alle carrozzine, con comandi touchless e pulizia automatica in 30 secondi. Consumano il 66% di acqua in meno e funzionano con energia rinnovabile. Dietro un servizio spesso ignorato si nasconde un indicatore concreto della qualità della vita urbana.",
    risorse: [{ label: "Focus Junior — 19 novembre: perché è il World Toilet Day?", url: "https://www.focusjunior.it/news/19-novembre-perche-e-il-world-toilet-day/" }, { label: "Geopop — Cosa sono le \"smart city\", le città intelligenti del futuro", url: "https://www.geopop.it/cosa-sono-e-che-caratteristiche-hanno-le-smart-city-le-citta-intelligenti-del-futuro/" }]
  },
  {
    num: 2, title: "Parigi, L’Acqua “Sporca” Pulisce La Città", city: "Parigi", country: "Francia",
    lat: 48.8566, lon: 2.3522, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0gAq8TwRXy6eUGL4nM1LQ7gU1E9qC9M3CZDvnnMTR4jK9NvDZFGnQjGtGb4TTdDrol",
    spunti: "Il ciclo dell'acqua in ambiente urbano; storia dell'urbanistica ottocentesca (Haussmann); gestione delle risorse idriche e adattamento al cambiamento climatico (isole di calore); confronto tra reti idriche di diverse città europee.",
    attivita: "Su una mappa di Parigi prova a localizzare alcuni arrondissement e calcola quanti km di rete equivalgono a 1.700 km (per esempio confrontandoli con la distanza tra la tua città e un'altra). Poi cerca se la tua città ha reti idriche separate per usi diversi.",
    summary: "Ogni notte, tra le 4 e le 6 del mattino, Parigi lava le sue strade con una rete di acqua non potabile lunga 1.700 km, in funzione dal 1850. Circa 13.500 bocchette (“bouches de lavage”) rilasciano acqua presa dalla Senna per pulire i marciapiedi e raffreddare l'asfalto, sprecandone solo il 5%. Un sistema ottocentesco che oggi è raro in Europa e resta un modello di efficienza idrica.",
    risorse: [{ label: "Il Museo delle Fogne di Parigi", url: "https://www.parigi.it/museo-delle-fogne-di-parigi" }, { label: "Il ciclo urbano dell'acqua spiegato ai bambini", url: "https://www.cosepercrescere.it/il-ciclo-urbano-acqua/" }]
  },
  {
    num: 3, title: "Il Palcoscenico Vegetale Di Copenhagen", city: "Copenaghen", country: "Danimarca",
    lat: 55.6761, lon: 12.5683, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid024LnAzMRmX78xak82K3TaGcUuGBvHPczavSLCMtgVkSFfht7dvGA6KA1tYM6kB4f1l",
    spunti: "Rigenerazione urbana e riuso di aree dismesse; ruolo del verde pubblico nelle città; gestione sostenibile dell'acqua piovana; relazione tra architettura, paesaggio ed energie rinnovabili.",
    attivita: "Calcola quanti campi da calcio corrispondono a 21.500 mq (un campo regolamentare misura circa 7.140 mq). Poi cerca un'area dismessa vicino a te che potrebbe diventare un parco: fotografala o disegnala e proponi un progetto di rigenerazione.",
    summary: "A Copenaghen, un'area rimasta a lungo inutilizzata vicino al Teatro dell'Opera è diventata Opera Park: 21.500 mq di giardini tematici disegnati come un percorso in tre “atti” paesaggistici. Sotto il parco un parcheggio interrato con ricarica elettrica libera la superficie da traffico e auto, mentre tetti verdi e aiuole filtranti gestiscono l'acqua piovana, rendendo il parco un piccolo ecosistema urbano autosufficiente.",
    risorse: [{ label: "Artribune — Cosa vedere a Copenaghen sull'architettura sostenibile", url: "https://www.artribune.com/dal-mondo/2023/09/architettura-sostenibile-copenaghen/" }, { label: "DeA Scuola Geografia — Rigenerazione urbana ambientale: le grandi opere", url: "https://blog.geografia.deascuola.it/articoli/rigenerazione-urbana-ambientale-le-grandi-opere" }]
  },
  {
    num: 4, title: "Madrid, I Rifiuti Che Scompaiono Nel Vento", city: "Madrid", country: "Spagna",
    lat: 40.4168, lon: -3.7038, category: "rifiuti",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0QUZfMU4vAefNwzukBfQX4n6JfUHYtPNnW3P8dvzfUojFactst9waX9ndFbtA68D8l",
    spunti: "Pianificazione urbanistica di un nuovo quartiere; gestione dei rifiuti e tecnologie per la sostenibilità; confronto tra quartieri di nuova costruzione e centri storici; diffusione di una tecnologia dal Nord Europa al resto del continente.",
    attivita: "Confronta sulla carta la distanza tra Valdebebas e il centro di Madrid. Cerca poi se in Italia esistono quartieri di nuova costruzione con sistemi simili di raccolta rifiuti, e prepara una breve scheda comparativa costi/benefici.",
    summary: "Nel quartiere madrileno di Valdebebas i rifiuti non si vedono: niente cassonetti né camion, solo bocchette stradali collegate a tubi sotterranei che aspirano i sacchetti a 70 km/h fino a un centro di raccolta. Il sistema, di origine svedese, elimina il traffico dei mezzi pesanti e taglia le emissioni di CO2 fino al 90%. Il costo iniziale alto lo rende per ora adatto soprattutto ai quartieri di nuova costruzione.",
    risorse: [{ label: "Green.it — Rifiuti sottoterra: come funziona la raccolta pneumatica", url: "https://www.green.it/rifiuti-sottoterra-raccolta-pneumatica/" }, { label: "Il modello Barcellona e la raccolta rifiuti invisibile", url: "https://www.impresamagazine.it/quando-i-rifiuti-viaggiano-sottoterra-il-modello-barcellona-e-la-rivoluzione-della-raccolta-invisibile/" }]
  },
  {
    num: 5, title: "Norvegia, La Raccolta Differenziata Dei Rifiuti La Fanno Le Macchine", city: "Oslo (area)", country: "Norvegia",
    lat: 59.9578, lon: 11.0378, category: "rifiuti",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02m2bGdbjujG55L3fJXkpbracdYM2JCBvND3jbWtrwdQMaqZWzzGYtcaCRjJiN9UGul",
    spunti: "Economia circolare e innovazione tecnologica nella gestione dei rifiuti; confronto tra i modelli nord-europei e quello italiano; obiettivi europei di riciclo; il ruolo della tecnologia nella transizione ecologica.",
    attivita: "Cerca i dati sulla percentuale di riciclo della tua città o regione e confrontali con l'82% di recupero raggiunto dall'impianto IVAR in Norvegia. Costruisci un grafico a barre comparativo.",
    summary: "In alcune città della Norvegia i cittadini non devono più differenziare i rifiuti in casa: buttano tutto insieme in un sacco, e sono gli impianti a separarlo con scanner ottici e getti d'aria. A Skedsmokorset, vicino Oslo, l'impianto ROAF lavora 40 tonnellate l'ora per sette comuni, con tassi di riciclo superiori all'80%. Una tecnologia già disponibile anche in Italia, ma non ancora applicata su questa scala.",
    risorse: [{ label: "Non Sprecare — In Norvegia i rifiuti si raccolgono sottoterra", url: "https://www.nonsprecare.it/in-norvegia-i-rifiuti-si-raccolgono-sottoterra" }, { label: "ENEA — La \"cassetta degli attrezzi\" dell'economia circolare", url: "https://www.eai.enea.it/archivio/green-generation/la-cassetta-degli-attrezzi-dell-economia-circolare.html" }]
  },
  {
    num: 6, title: "Parigi, Un Bosco Al Municipio", city: "Parigi", country: "Francia",
    lat: 48.8566, lon: 2.3522, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0GyMxK568TKnP1Hnv2g4uSVz6911NURAnDZzRChoVErw28EYrhFWegvZKbdJgnB1rl",
    spunti: "Rigenerazione urbana e riduzione del traffico nei centri storici; il verde pubblico come risposta al surriscaldamento delle città.",
    attivita: "Cerca una foto storica di Place de l'Hôtel de Ville prima della trasformazione e confrontala con una attuale. Individua nella tua città una piazza o incrocio che potrebbe diventare verde: motiva la scelta con una piantina.",
    summary: "Davanti all'Hôtel de Ville, un tempo tra le zone più trafficate e inquinate di Parigi, nasce un nuovo spazio verde di 2.500 mq, con 1.000 mq di piena terra e grandi alberi: un esempio di come restituire aria e ombra al cuore della città togliendo spazio alle auto.",
    risorse: [{ label: "greenMe — Una piazza di cemento trasformata in foresta urbana", url: "https://www.greenme.it/ambiente/trasformato-piazza-cemento-foresta-urbana/" }, { label: "zeroCO2 — Isole di calore: cosa sono e perché servono più alberi in città", url: "https://zeroco2.eco/it/magazine/ambiente/isole-calore-cause-soluzioni/" }]
  },
  {
    num: 7, title: "Amburgo, Città Rigenerata Dal Calore", city: "Amburgo", country: "Germania",
    lat: 53.5511, lon: 9.9937, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid023DUJdvTSWqW3UauejtvU6WyVAfZzg17VxomLJS118poapoxtthVifydVUdb1pxaBl",
    spunti: "Pianificazione urbanistica integrata di energia e edilizia; riconversione di aree portuali dismesse in nuovi quartieri.",
    attivita: "Localizza Amburgo e HafenCity su una carta fisica della Germania: che rapporto ha con il fiume Elba e il mare del Nord? Cerca poi cos'è il teleriscaldamento e se esiste anche nella tua regione.",
    summary: "A HafenCity, il grande quartiere nato nel 1996 sulle ex aree portuali di Amburgo, la rete di teleriscaldamento viene progettata prima ancora degli edifici: il calore diventa il principio fondativo su cui si costruisce l'intero quartiere, non un impianto aggiunto in un secondo momento.",
    risorse: [{ label: "Moveo — Scopri HafenCity di Amburgo", url: "https://moveo.telepass.com/hafen-city-amburgo-cosa-vedere/" }, { label: "Edilportale — Cos'è e come funziona il teleriscaldamento", url: "https://www.edilportale.com/news/2023/05/focus/cos-e-e-come-funziona-il-teleriscaldamento_93957_67.html" }]
  },
  {
    num: 8, title: "Acqua Marina Contro Le Isole Di Calore", city: "Barcellona", country: "Spagna",
    lat: 41.3874, lon: 2.1686, category: "calore",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02g9jjAgydFi1NHyudEwKJhkvHp73EYwrPLWf6paGePmYSyDosSGF6PdeGcjmR5AMMl",
    spunti: "Isole di calore urbane e mitigazione climatica; uso delle risorse marine come alternativa al raffrescamento tradizionale.",
    attivita: "Cerca sulla carta quali città mediterranee si affacciano direttamente sul mare e potrebbero sfruttare l'acqua marina per raffrescarsi. Calcola la temperatura media estiva della tua città e confrontala con quella delle isole di calore urbane.",
    summary: "Contro le isole di calore urbane, che in estate fanno salire la temperatura del suolo fino a sette gradi in più rispetto alle aree verdi o costiere, alcune città mediterranee usano l'acqua del mare stessa per raffrescare gli edifici, invece del solo condizionatore.",
    risorse: [{ label: "Euronews — I corsi d'acqua europei possono sostituire l'aria condizionata?", url: "https://it.euronews.com/2026/07/08/nuove-ondate-di-caldo-in-arrivo-i-corsi-dacqua-europei-possono-sostituire-laria-condiziona" }, { label: "ecobnb — Come raffreddare le città: 8 soluzioni contro il caldo urbano", url: "https://ecobnb.it/blog/2026/08/raffreddare-citta-combattere-caldo-urbano/" }]
  },
  {
    num: 9, title: "Atene, Strategia Contro Il Caldo", city: "Atene", country: "Grecia",
    lat: 37.9838, lon: 23.7275, category: "calore",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0SEZpKzdX79Wi2eAkCLz17nseQh5vaMxezUoW7pwPFvezy8Xyzeojp2Gm8YXX1XYQl",
    spunti: "Adattamento al caldo estremo nelle città mediterranee; il ruolo del verde e dei materiali nella regolazione del microclima urbano.",
    attivita: "Individua Atene sul planisfero e calcola la sua latitudine: perché fa così caldo? Cerca tre materiali tradizionali (pietra, legno, terra cruda) usati nell'architettura mediterranea contro il caldo e collegali al territorio di provenienza.",
    summary: "Quando il termometro sfiora i 43 gradi, un quartiere di Atene impara a raffreddarsi da solo, senza infrastrutture faraoniche: alberi, pietra scelta con cura e acqua, uniti a una progettazione attenta del microclima urbano, bastano a rendere gli spazi pubblici più vivibili in piena estate.",
    risorse: [{ label: "Euronews — Caldo estremo, i sindaci vogliono affrontarlo (Atene)", url: "https://it.euronews.com/2026/06/05/caldo-estremo-nelle-citta-piu-settentrionali-deuropa-i-sindaci-vogliono-affrontarlo" }, { label: "Euronews — Il piano di Atene per adeguarsi a estati sempre più calde", url: "https://it.euronews.com/green/2023/07/17/il-piano-di-atene-per-adeguarsi-a-estati-sempre-piu-calde" }]
  },
  {
    num: 10, title: "Anversa, La Città Sotto La Città", city: "Anversa", country: "Belgio",
    lat: 51.2194, lon: 4.4025, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02FBW5o7SJ9JBqu8EfArr3ba6ciHfqniUUBE1Qz4q2ZuFBUxNuivvZ1PR3vVctvruul",
    spunti: "Gestione del rischio idraulico nelle città portuali; infrastrutture sotterranee al servizio della resilienza climatica.",
    attivita: "Cerca una mappa del porto di Anversa e individua la sua posizione sul fiume Schelda. Rifletti: perché le città portuali hanno più bisogno di infrastrutture idrauliche sotterranee di altre?",
    summary: "Sotto Anversa si sta costruendo un'altra città: tunnel, vasche di laminazione contro le piogge intense, condotti idrici e nuovi corridoi verdi si intrecciano in una delle operazioni infrastrutturali più ambiziose d'Europa, pensata per restare invisibile in superficie.",
    risorse: [{ label: "Chimicamo — Infrastrutture blu: gestione sostenibile dell'acqua", url: "https://www.chimicamo.org/ecologia-e-ambiente/infrastrutture-blu/" }, { label: "Wikipedia — Il tunnel di Sant'Anna, sotto il fiume Schelda", url: "https://it.wikipedia.org/wiki/Tunnel_di_Sant'Anna" }]
  },
  {
    num: 11, title: "Spagna, Piastrelle Per Gli Eccessi Del Clima", city: "Benicarló", country: "Spagna",
    lat: 40.4167, lon: 0.4256, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid093UhKduB6A5oZjAUkFzPFeo2X52cCYzQBETyiSQoBUuLfvYMTq7rov183xCxSq9dl",
    spunti: "Materiali urbani e adattamento al clima; il doppio eccesso, idrico e termico, nelle città del Mediterraneo.",
    attivita: "Cerca cos'è una pavimentazione permeabile e confrontala con l'asfalto tradizionale: quali vantaggi e quali limiti ha? Individua sulla mappa la Comunità Valenciana e il clima tipico della costa mediterranea spagnola.",
    summary: "Nei centri urbani mediterranei il clima estremo porta insieme siccità e piogge violente: a Benicarló, in Spagna, nuove pavimentazioni permeabili aiutano le città ad assorbire l'acqua piovana invece di scaricarla tutta insieme, riducendo sia il rischio di allagamenti sia il surriscaldamento del suolo.",
    risorse: [{ label: "Edilportale — Piastrella climatica: la pavimentazione anti allagamento", url: "https://www.edilportale.com/news/2022/07/focus/piastrella-climatica-la-pavimentazione-per-marciapiedi-anti-allagamento_89610_67.html" }, { label: "Ingenio — Pavimentazioni permeabili: il caso di Benicàssim, Spagna", url: "https://www.ingenio-web.it/articoli/pavimentazioni-permeabili-una-soluzione-soft-engineering-per-il-drenaggio-urbano-sostenibile-suds/" }]
  },
  {
    num: 12, title: "Malmö, Vent’Anni Fa Era Già Futuro", city: "Malmö", country: "Svezia",
    lat: 55.605, lon: 13.0038, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid037oHeuzaijZKR4qsaiZBmMepo9Qv72jAeCzrEHqhyZqHUxF17kYb3EdaEmmx1QsTpl",
    spunti: "Quartieri pilota per la sostenibilità energetica; l'eredità dei progetti urbani sperimentali nel tempo.",
    attivita: "Cerca 'quartiere Bo01 Malmö' su una mappa satellitare: che forma ha il quartiere e come sono orientati gli edifici rispetto al sole? Confronta con un quartiere di nuova costruzione della tua città.",
    summary: "Il quartiere Bo01 di Malmö, progettato agli inizi degli anni Duemila, nasce con l'obiettivo di dimostrare che un'intera area urbana può funzionare con energia rinnovabile: vent'anni dopo resta un modello di riferimento per la progettazione energetica dei nuovi quartieri europei.",
    risorse: [{ label: "Architettura Ecosostenibile — Il quartiere ecologico Bo01 di Malmö", url: "https://www.architetturaecosostenibile.it/architettura/progetti/quartiere-ecologico-malmo-bo01-svezia-132" }, { label: "FPA — A Malmö il primo quartiere d'Europa a impatto zero", url: "https://www.forumpa.it/open-government/partecipazione-trasparenza/a-malmo-il-primo-quartiere-deuropa-a-impatto-zero/" }]
  },
  {
    num: 13, title: "Tartu, La Città Che Pensa E Si Rinnova", city: "Tartu", country: "Estonia",
    lat: 58.3776, lon: 26.729, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02e7nojos2cTB7bRVDVKTTJsKcjNkY2yLhzir4ob4YRLuB5xbbcLi6qdRUpXq7PJspl",
    spunti: "Rigenerazione urbana nelle città medie del Baltico; il rapporto tra patrimonio storico-culturale e sviluppo contemporaneo.",
    attivita: "Localizza Tartu sulla carta dell'Estonia e del Mar Baltico. Cerca cosa significa 'Capitale europea della cultura' e quali altre città l'hanno ottenuto negli ultimi anni.",
    summary: "Sulle rive del fiume Emajõgi, Tartu — centomila abitanti, prima università e primo giornale estone — ha saputo rinnovarsi restando fedele alla propria storia: dopo essere stata Capitale europea della cultura nel 2024, la città mostra come tradizione e innovazione urbana possano convivere.",
    risorse: [{ label: "Lonely Planet — Alla scoperta di Tartu, Capitale Europea della Cultura", url: "https://www.lonelyplanetitalia.it/articoli/citta-del-mondo/cosa-vedere-tartu-capitale-europea-cultura-2024-estonia" }, { label: "Sky TG24 — Tartu on the road, viaggio in Estonia", url: "https://tg24.sky.it/lifestyle/2024/02/25/estonia-tartu-capitale-cultura-2024" }]
  },
  {
    num: 14, title: "Vienna, Reinventarsi Con Sobrietà", city: "Vienna", country: "Austria",
    lat: 48.2082, lon: 16.3738, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02CmbzRVczuFYdybXkH3oZy7VLCibr6AurK6nayWvJ3atjPn9yj9aVCmi68qBq5sW9l",
    spunti: "Pianificazione di nuovi quartieri su aree dismesse; la crescita ordinata delle città rispetto all'espansione incontrollata.",
    attivita: "Cerca immagini satellitari di Seestadt Aspern prima e dopo la costruzione del quartiere. Calcola quanti abitanti in più può ospitare un'area riconvertita rispetto a una completamente nuova costruita ai margini della città.",
    summary: "Dove vent'anni fa c'erano solo campi e una vecchia pista militare, a poche fermate di metro dal centro di Vienna, è sorto un intero nuovo quartiere: un esempio di come pianificare una città quasi da zero, con sobrietà, invece di espandersi senza criterio.",
    risorse: [{ label: "Vienna.info — I Grätzel del futuro a Vienna", url: "https://www.wien.info/it/attrazioni-attivita/quartiere-di-vienna/i-graetzel-del-futuro-457866" }, { label: "Commissione Europea — Vienna, urbanistica per le donne e con le donne", url: "https://culture.ec.europa.eu/it/cultural-and-creative-sectors/architecture/living-spaces/catalogue/vienna" }]
  },
  {
    num: 15, title: "Lisbona, L’Altra Sponda Del Futuro", city: "Lisbona", country: "Portogallo",
    lat: 38.7223, lon: -9.1393, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid023Y37iNm8LadngAoMxb8cAw8HDJ36wuGC2TFhJ7yC9V8uUrqwT9vUgAJmZZbK22sJl",
    spunti: "Riconversione di quartieri industriali dismessi; lo sviluppo urbano lungo i fiumi delle città europee.",
    attivita: "Localizza Marvila sulla mappa di Lisbona e il suo rapporto con il fiume Tago. Cerca tre esempi di quartieri industriali riconvertiti in Italia (es. ex fabbriche, docks, aree ferroviarie).",
    summary: "Marvila, quartiere industriale lisbonese affacciato sul fiume Tago, tra magazzini e officine abbandonate, sta diventando la nuova frontiera della città: un esempio di come le aree dismesse ai margini del centro possano trasformarsi in spazi vivi senza cancellare la propria storia.",
    risorse: [{ label: "ANSA — Marvila, il nuovo quartiere di Lisbona", url: "https://www.ansa.it/ansamed/it/notizie/rubriche/turismo/2016/07/04/portogallo-marvila-il-nuovo-quartiere-di-lisbona_c2f193fe-2082-4871-856c-002f36633398.html" }, { label: "Visit Lisboa — Dalle zone di armi alle zone di arte", url: "https://www.visitlisboa.com/it/lisbon-stories/itinerario-dell-industria-5/circuito-i-dalle-zone-di-armi-alle-zone-di-arte-14" }]
  },
  {
    num: 16, title: "Arabianranta, La Città Sensibile", city: "Helsinki", country: "Finlandia",
    lat: 60.199, lon: 24.98, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0h43rzzPqNj1V9UPivbDpQbTGDVCTAMEMdoLG3sqcdMUyFkS661cmXPSKDMDRmBjul",
    spunti: "Riconversione di aree industriali in quartieri residenziali; il ruolo della tecnologia nella progettazione urbana.",
    attivita: "Cerca la posizione di Arabianranta rispetto al centro di Helsinki e al Mar Baltico. Rifletti sul collegamento tra rigenerazione urbana e innovazione digitale: quali servizi digitali potrebbero rendere più vivibile un quartiere?",
    summary: "Alle porte di Helsinki, dove il fiume Vantaa incontra la baia, il quartiere di Arabianranta è nato sulle ceneri di un'area industriale dismessa, anticipando la fusione tra innovazione digitale e nuova urbanistica: un modello di rigenerazione che unisce tecnologia e spazio pubblico.",
    risorse: [{ label: "Audiala — Guida al quartiere di Arabianranta, Helsinki", url: "https://audiala.com/it/finlandia/helsinki/arabia-centro-commerciale" }, { label: "Got2Globe — Helsinki: il design che viene dal freddo", url: "https://www.got2globe.com/it/editoriale/l'arte-del-design-di-Helsinki-%C3%A8-venuta-dal-freddo/" }]
  },
  {
    num: 17, title: "Cluj-Napoca, Città Universitaria", city: "Cluj-Napoca", country: "Romania",
    lat: 46.7712, lon: 23.6236, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid032RGugCwiDoqoZxvJnp81HtBSDf7Yk8qXeHsU7RJMH6wy3PrtgtUokT2NzD8D2PVml",
    spunti: "Città universitarie come motore di sviluppo regionale; la posizione geografica della Transilvania tra Europa centrale e orientale.",
    attivita: "Individua Cluj-Napoca sulla carta della Romania e della Transilvania: quali sono le città più vicine in altri Paesi? Cerca quanti studenti universitari ha la città e confrontali con quelli della tua città o regione.",
    summary: "Seconda città della Romania, nel cuore della Transilvania a metà strada tra Bucarest e Budapest, Cluj-Napoca si è affermata come capitale non dichiarata di un nord-ovest che guarda all'Europa e investe su di sé, grazie anche alla sua grande popolazione universitaria.",
    risorse: [{ label: "RomaniaTurismo.it — Cluj-Napoca, cosa vedere e guida di viaggio", url: "https://www.romaniaturismo.it/transilvania/cluj-napoca/" }, { label: "Wikipedia — Cluj-Napoca", url: "https://it.wikipedia.org/wiki/Cluj-Napoca" }]
  },
  {
    num: 18, title: "Bilbao, Diritto Alla Mobilità", city: "Bilbao", country: "Spagna",
    lat: 43.263, lon: -2.935, category: "mobilita",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0XgBcdhpC6MK47BH2hy11PTQWsjrmgEXrhtYbx2wDmG5QatyrFQhhKpQ3Lp6cPq7Kl",
    spunti: "Mobilità elettrica e qualità dell'aria urbana; il trasporto pubblico come diritto di cittadinanza.",
    attivita: "Cerca la distanza tra l'aeroporto di Bilbao e il centro città. Confronta il trasporto pubblico dall'aeroporto della tua città (se c'è) con quello di Bilbao: tempi, costi, mezzi disponibili.",
    summary: "A Bilbao un autobus elettrico entra in città senza rumore, senza strappi, senza clamore: un piccolo dettaglio che racconta una scelta più grande, quella di garantire un diritto alla mobilità silenzioso ed efficiente a chi arriva in città, a partire da chi viene dall'aeroporto.",
    risorse: [{ label: "Spain.info — Turismo a Bilbao (trasporti)", url: "https://www.spain.info/it/destinazione/bilbao/" }, { label: "Istituto Hemingway — La trasformazione di Bilbao", url: "https://www.institutohemingway.com/it/notizie/1980/la-trasformazione-di-bilbao.html" }]
  },
  {
    num: 19, title: "Zurigo Si Muove A Tempo", city: "Zurigo", country: "Svizzera",
    lat: 47.3769, lon: 8.5417, category: "mobilita",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0GnzCwpPYG4zt6hKtd1DtF4xxMLEeEdowMKXhsvgCTsvSMqpznwRdEE4iXTfkSLj9l",
    spunti: "Sistemi di trasporto pubblico integrato; la pianificazione della mobilità su scala urbana e regionale.",
    attivita: "Cerca l'orario dei mezzi pubblici della tua città e valuta se esiste un sistema a 'frequenza garantita' come a Zurigo. Prova a disegnare una mappa semplificata delle linee di trasporto integrato di un quartiere a scelta.",
    summary: "A Zurigo il tempo non si misura in minuti d'attesa ma in frequenze: si sale sul tram, si cambia linea, si prosegue a piedi o in battello, e tutto è già previsto in un sistema di trasporto pubblico integrato che rende superflua la pianificazione individuale degli spostamenti.",
    risorse: [{ label: "Visit Zurich — La rete dei trasporti pubblici di Zurigo", url: "https://www.zuerich.com/it/visitare/trasporti/la-rete-dei-trasporti-pubblici-zurigo" }, { label: "Tour Switzerland — Come spostarsi in Svizzera", url: "https://www.tour-switzerland.ch/it/guides/come-spostarsi/" }]
  },
  {
    num: 20, title: "Lubiana Si Prende Cura Di Sé", city: "Lubiana", country: "Slovenia",
    lat: 46.0569, lon: 14.5058, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02cLayZ3zuTwivfMGqFrTwnb8H9yM85Qfao7bgcwXT5kKPQxDHLwzHUZcRK2tCdFLgl",
    spunti: "Modelli di crescita urbana sostenibile; rigenerazione contro consumo di suolo nelle capitali europee.",
    attivita: "Localizza Lubiana sulla carta della Slovenia e cerca la sua posizione rispetto alle Alpi e ai Balcani. Confronta la crescita demografica di Lubiana con quella di una città italiana simile per dimensioni.",
    summary: "Ci sono città che crescono consumando territorio e città che crescono curando quello che hanno: Lubiana, capitale della Slovenia, appartiene alla seconda categoria, con un modello urbano che rigenera invece di espandersi e include invece di isolare.",
    risorse: [{ label: "EcoNews — Lubiana Capitale Verde Europea 2016", url: "http://www.econewsweb.it/it/2016/02/16/lubiana-capitale-verde-europea-2016" }, { label: "Architettura Ecosostenibile — Lubiana capitale verde europea", url: "https://www.architetturaecosostenibile.it/architettura/progetti/lubiana-capitale-2016-384" }]
  },
  {
    num: 21, title: "Barcellona E I Suoi 360 Rifugi Climatici", city: "Barcellona", country: "Spagna",
    lat: 41.3874, lon: 2.1686, category: "calore",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid028eynzfXSR21GABtAubvDN9vB4BdtiaXpwEGQRruqgqrfqBB6CYanM5vqViVx6WxRl",
    spunti: "Diseguaglianze sociali di fronte al caldo estremo; le politiche pubbliche di adattamento climatico nelle grandi città.",
    attivita: "Cerca sulla mappa di Barcellona dove si trovano alcuni dei 360 rifugi climatici (parchi, biblioteche, musei). Rifletti su quali edifici della tua città potrebbero diventare rifugi climatici in caso di ondate di calore.",
    summary: "Quando il termometro sale ben oltre le medie estive, a Barcellona non serve andare lontano per trovare sollievo: la città ha costruito una rete di 360 rifugi climatici, spazi pubblici climatizzati o ombreggiati pensati per chi non può permettersi di restare a casa con l'aria condizionata.",
    risorse: [{ label: "StartupItalia — I rifugi climatici di Barcellona: cosa sono e dove trovarli", url: "https://startupitalia.eu/impact/rifugi-climatici-barcellona-mappa/" }, { label: "Climate-ADAPT (UE) — Giustizia sociale e adattamento climatico a Barcellona", url: "https://climate-adapt.eea.europa.eu/it/metadata/case-studies/barcelona-trees-tempering-the-mediterranean-city-climate" }]
  },
  {
    num: 22, title: "Karlsruhe, Città Senza “Rotture”", city: "Karlsruhe", country: "Germania",
    lat: 49.0069, lon: 8.4037, category: "mobilita",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02MAgTjPjqS3VZ4xZiVaFM1nTyboRRUHNzCyZhTWET3fQv3bzMXgKtynKearyuWt26l",
    spunti: "Il modello Karlsruhe di tram-treno; l'integrazione tra trasporto urbano e regionale.",
    attivita: "Cerca cos'è un tram-treno e come funziona tecnicamente (scartamento dei binari, alimentazione). Disegna uno schema che colleghi centro e periferia della tua città con questo sistema.",
    summary: "Karlsruhe, città tedesca ordinata e ricca di possibilità di spostamento, è nota per aver inventato il modello del tram-treno: veicoli che viaggiano sia sui binari cittadini sia su quelli delle ferrovie regionali, eliminando le \"rotture\" di percorso tra centro e periferia.",
    risorse: [{ label: "Wikipedia — Modello Karlsruhe", url: "https://it.wikipedia.org/wiki/Modello_Karlsruhe" }, { label: "CityRailways — Il nuovo tunnel tranviario di Karlsruhe", url: "https://cityrailways.com/articoli/karlsruhe-kombilosung/" }]
  },
  {
    num: 23, title: "Brno, Il Valore Del Brownfield", city: "Brno", country: "Repubblica Ceca",
    lat: 49.1951, lon: 16.6068, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02jJ9LrdkRhUZpDfaRBqQu84cmfuoJWJUbVFCNQSSU6iVUMqULvUaSBwaamZ8Lp7Yl",
    spunti: "Riconversione dei brownfield industriali; lo sviluppo urbano nell'Europa centrale post-industriale.",
    attivita: "Cerca cosa significa 'brownfield' in urbanistica e individua un esempio vicino a te (fabbrica dismessa, area industriale abbandonata). Localizza Brno sulla carta della Repubblica Ceca.",
    summary: "Brno non cerca i riflettori, ma sotto la sua pelle urbana scorre una rete infrastrutturale che la rende una delle città più avanzate dell'Europa centrale, capace di trasformare aree industriali dismesse (i \"brownfield\") in nuove risorse per la città invece che in terreni abbandonati.",
    risorse: [{ label: "Wikipedia — Brno", url: "https://it.wikipedia.org/wiki/Brno" }, { label: "Edilportale — Riqualificazione ex edifici industriali: come il riuso diventa rigenerazione urbana", url: "https://www.edilportale.com/news/2026/04/focus/riqualificazione-ex-edifici-industriali_110091_67.html" }]
  },
  {
    num: 24, title: "Nantes, Il Ferro Batte La Gomma", city: "Nantes", country: "Francia",
    lat: 47.2184, lon: -1.5536, category: "mobilita",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0qTM15J2DksrPMWaRBkz3qJQpL9DG3kHCzUHSrBbxxVkQDTrPAnxJHfjoPs3CUfNRl",
    spunti: "Il ruolo del trasporto su ferro nella mobilità urbana; la geografia fluviale come vincolo e risorsa per la città.",
    attivita: "Localizza Nantes alla foce della Loira su una carta della Francia. Confronta i chilometri di rete tranviaria di Nantes con quelli della tua città (se presente) o di una città italiana con il tram.",
    summary: "Nantes, distesa tra i bracci della Loira poco prima che il fiume si apra all'Atlantico, ha scommesso sul trasporto su ferro rispetto a quello su gomma: una scelta di mobilità che valorizza tram e treni urbani nella città d'acqua e di ponti tra Bretagna storica e Paesi della Loira."
  },
  {
    num: 25, title: "Aarhus, Il Parcheggio Che Non Si Vede", city: "Aarhus", country: "Danimarca",
    lat: 56.1629, lon: 10.2039, category: "mobilita",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0NXkSv7RjAKTC7qYUp9Ct3xDhMxq5hGHXjM4ddJ6hYNgo3BoVHbXyfpeZ1nHKxJLsl",
    spunti: "Convivenza tra mezzi di trasporto diversi nello spazio urbano; i parcheggi interrati come strumento di pianificazione.",
    attivita: "Cerca quanti parcheggi sotterranei ci sono nel centro della tua città. Calcola quanto spazio in superficie potrebbe essere liberato se venissero spostati sottoterra.",
    summary: "Sul lungomare di Aarhus la città si muove piano ma senza intoppi: tram regolari, biciclette silenziose, auto che scorrono senza rumore. Il segreto è un parcheggio che non si vede, spostato sotto la superficie per lasciare spazio in superficie a pedoni e ciclisti."
  },
  {
    num: 26, title: "Copenhagen, La Forza Dei Dettagli", city: "Copenaghen", country: "Danimarca",
    lat: 55.6761, lon: 12.5683, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0Ei6GBTu2Z5NwR512YNMbYFDLdod4YAvEYyxCCr8n2TuPyvmD1yYu4S4f1ftgHkARl",
    spunti: "Progettazione urbana resiliente alle piogge intense; l'acqua come elemento da integrare nel disegno degli spazi pubblici.",
    attivita: "Cerca cos'è un 'climate resilient district' e quali elementi lo caratterizzano (giardini filtranti, cisterne, piazze-vasca). Confronta con la gestione delle piogge intense nella tua città.",
    summary: "Nel quartiere di Sankt Kjelds, primo \"climate resilient district\" d'Europa, quando piove forte le piazze non si allagano: si riempiono, lentamente, perché sono state progettate apposta. Le strade deviano l'acqua verso giardini filtranti e cisterne sotterranee: la pioggia diventa una risorsa da governare, non un nemico da respingere."
  },
  {
    num: 27, title: "Helsinki, Zero Morti Stradali", city: "Helsinki", country: "Finlandia",
    lat: 60.1699, lon: 24.9384, category: "mobilita",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0VudnkAUiWqzscPDGJgYp8N2Zc1nWLEEe2J7gdPRmE2MucxGLRiVDgpHhXmbodokml",
    spunti: "Sicurezza stradale e progettazione degli spazi urbani; le politiche di \"vision zero\" nelle città europee.",
    attivita: "Cerca i dati sugli incidenti stradali della tua città o regione negli ultimi anni. Individua un incrocio pericoloso vicino a te e proponi una modifica ispirata al modello di Helsinki.",
    summary: "Davanti alla biblioteca Oodi, un passaggio pedonale rialzato e ben illuminato fa rallentare le auto senza bisogno di segnali aggressivi: un piccolo dettaglio che racconta perché Helsinki, in un anno, non ha registrato nessuna vittima per incidenti stradali, unica tra le grandi capitali europee."
  },
  {
    num: 28, title: "Rotterdam, L’Acqua Disegna La Città", city: "Rotterdam", country: "Paesi Bassi",
    lat: 51.9244, lon: 4.4777, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0X8J1RHnuAkuevMWEtqvsJUKPXDZZb8ocgndND85xV3b3fFuQhBZRNV2UiDdmdprUl",
    spunti: "La storia delle grandi alluvioni come motore delle politiche di gestione dell'acqua; l'urbanistica dei Paesi Bassi sotto il livello del mare.",
    attivita: "Cerca informazioni sull'alluvione del 1953 nei Paesi Bassi: quali zone furono colpite e quante persone morirono? Localizza Rotterdam rispetto al livello del mare su una carta fisica.",
    summary: "Rotterdam è una città che va ascoltata sottopelle: l'asfalto è poroso, i tetti respirano, le piazze si riempiono d'acqua senza chiedere permesso. Dopo l'alluvione del 1953, che devastò l'Olanda sud-occidentale causando quasi duemila morti, la città ha imparato a convivere con l'acqua invece di combatterla soltanto con dighe."
  },
  {
    num: 29, title: "Jerez, La Vite Che Protegge La Vita", city: "Jerez de la Frontera", country: "Spagna",
    lat: 36.685, lon: -6.1261, category: "calore",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0eiQoZH1kLY8NJv75XMjSniJ6ZuLCKESHAgHkRYqZWHJGW4QhrW5GHZSBoYkFt6svl",
    spunti: "Soluzioni tradizionali di raffrescamento urbano; il verde come infrastruttura contro le ondate di calore.",
    attivita: "Cerca cos'è una pergola bioclimatica e come funziona il raffrescamento naturale tramite piante rampicanti. Localizza Jerez de la Frontera in Andalusia e il suo clima tipico.",
    summary: "Camminando sotto il sole di mezzogiorno a Jerez, la pietra scalda l'aria come una stufa: ma appena si passa sotto una pergola coperta di foglie di vite (le \"parras\"), l'aria cambia. Quest'estate la città sta riscoprendo queste piante rampicanti tradizionali come strumento naturale contro il caldo estremo."
  },
  {
    num: 30, title: "Bergen, La Città Che Fa Sparire I Rifiuti", city: "Bergen", country: "Norvegia",
    lat: 60.3913, lon: 5.3221, category: "rifiuti",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02336ahuPxAG3awQtXK6XpymW8UN7A2qrQ6eDSXveQtaqJp7kJc5fAXRCpWsZPzQKMl",
    spunti: "Sistemi di raccolta rifiuti pneumatici nelle città storiche; il rapporto tra infrastrutture nascoste e paesaggio urbano.",
    attivita: "Localizza Bergen tra i fiordi norvegesi: perché è chiamata 'città delle sette colline'? Cerca il funzionamento di un sistema di raccolta rifiuti pneumatico e disegnane lo schema.",
    summary: "Sotto un antico molo di Bergen, città di mare e di montagne adagiata tra sette cime, un tubo aspira i sacchetti di rifiuti organici a sessanta chilometri orari, portandoli via senza che i turisti e i cittadini che camminano sopra se ne accorgano: una raccolta invisibile e silenziosa."
  },
  {
    num: 31, title: "Cannes, Ciak Si Gira La Pulizia", city: "Cannes", country: "Francia",
    lat: 43.5528, lon: 7.0174, category: "rifiuti",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0PYwbqC8gBMEmTeixK5Am35zHmXKcTkVHvW6qpqu2qcw5Qd6scdPSavRj5JXjTEfCl",
    spunti: "Gestione dei rifiuti nelle città turistiche; l'immagine urbana come parte dell'economia del turismo.",
    attivita: "Cerca il calendario degli eventi del Festival di Cannes e rifletti su come il turismo internazionale influenzi le scelte urbane di una città. Confronta con una città turistica italiana.",
    summary: "Prima che il sole sia alto sulla Croisette, quando Cannes appartiene ancora solo ai suoi abitanti, non c'è traccia di sacchi d'immondizia né di cassonetti in fila: le vetrine sono già lucide, le aiuole rifinite con precisione quasi da set cinematografico, in una città che ha fatto della pulizia impeccabile un tratto distintivo."
  },
  {
    num: 32, title: "Oslo, La Differenziata Che Non Punisce", city: "Oslo", country: "Norvegia",
    lat: 59.9139, lon: 10.7522, category: "rifiuti",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0HRgVZuypCBfHcTw9nHW7gJpC5yn3eXUA6g38GvYz6JSqxibxqj948vAGTPmt7oRHl",
    spunti: "Politiche pubbliche e comportamenti civici nella gestione dei rifiuti; modelli scandinavi di fiducia nei cittadini.",
    attivita: "Cerca le regole della raccolta differenziata nel tuo Comune: ci sono sanzioni per chi sbaglia? Confronta con l'approccio 'senza ansia' di Oslo e discuti in classe quale modello convince di più.",
    summary: "A Oslo la raccolta differenziata funziona come un patto tacito tra cittadini e città: niente sanzioni severe per chi sbaglia sacchetto, ma un sistema pensato per rendere naturale fare la cosa giusta, così che la differenziata non diventi fonte d'ansia nella vita quotidiana."
  },
  {
    num: 33, title: "València, Dove Sono Finiti I Rifiuti?", city: "València", country: "Spagna",
    lat: 39.4699, lon: -0.3763, category: "rifiuti",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0xVMXETiE9Sj7saboYRv5yH82UngKJFWiFNx1LbGdUACah76fgsVH5TSE6SUEiZ2al",
    spunti: "Il paesaggio urbano come specchio delle scelte di gestione dei servizi pubblici; il confronto tra città con e senza cassonetti in strada.",
    attivita: "Cerca immagini di piazze storiche di València (es. Plaza de la Virgen) e osserva l'assenza di cassonetti. Individua dove sono posizionati i cassonetti nel centro storico della tua città.",
    summary: "Chi arriva a València per la prima volta nota un'assenza: nei viali alberati e nelle piazze barocche non ci sono i cassonetti che ingombrano altre città. Nessuna fila di bidoni colorati, nessun sacco bucato dai gabbiani: un vuoto che cambia il paesaggio urbano e racconta un diverso modo di gestire i rifiuti."
  },
  {
    num: 34, title: "Stoccolma, Differenziata Senza Angoscia", city: "Stoccolma", country: "Svezia",
    lat: 59.3293, lon: 18.0686, category: "rifiuti",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02CwS4sjYiTKUC9XLJd6ZAtTkbNuqMUroxhgtfGVzoJGsVVYcQgWzx47Fcnw31hVa1l",
    spunti: "Geografia urbana su isole e organizzazione dei servizi; l'approccio scandinavo alla responsabilità civica condivisa.",
    attivita: "Localizza le 14 isole su cui si estende Stoccolma su una mappa. Calcola quanti ponti servono per collegarle e rifletti su come la geografia insulare complica i servizi urbani.",
    summary: "Capitale che si estende su quattordici isole e sfiora i due milioni e mezzo di abitanti nell'area metropolitana, Stoccolma ha scelto di togliere ai cittadini l'ansia della differenziata perfetta: niente sanzioni per un sacchetto sbagliato, perché è la città stessa ad assorbire e correggere l'errore domestico."
  },
  {
    num: 35, title: "Lagom, Armonia Della Mobilità Urbana", city: "Malmö", country: "Svezia",
    lat: 55.605, lon: 13.0038, category: "mobilita",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0veDgheKKRCTwScm4SBNTn7QenHdNSUH4jmLaLrFT2YbQkE6m5eur3FTG4BJhWipnl",
    spunti: "Sicurezza dei percorsi casa-scuola; l'equilibrio tra automobili e spazio pubblico nei quartieri residenziali.",
    attivita: "Cerca cosa significa la parola svedese 'lagom'. Osserva la strada davanti alla tua scuola negli orari di ingresso/uscita e proponi una modifica per renderla più sicura per i pedoni.",
    summary: "Una mattina d'autunno, un quartiere di Malmö si blocca per dieci minuti: niente auto davanti alla scuola, solo bambini che attraversano da soli e genitori che chiacchierano ai bordi della \"strada scolastica\". È il concetto svedese di lagom, la giusta misura, applicato alla mobilità urbana quotidiana."
  },
  {
    num: 36, title: "Vitoria-Gasteiz, Gestione Rifiuti Da Primato", city: "Vitoria-Gasteiz", country: "Spagna",
    lat: 42.8467, lon: -2.6716, category: "rifiuti",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02YWzwH5HHeLBnBorpRYPHG5NjEvKJgGedzkaSt6cKoYM196Y3hyGybPf3y9GDmFsZl",
    spunti: "Riconversione di aree degradate in cinture verdi urbane; le città medie come laboratorio di sostenibilità in Spagna.",
    attivita: "Cerca una mappa dell''Anillo Verde' di Vitoria-Gasteiz e calcola l'estensione in ettari rispetto a un parco della tua città. Individua cave o discariche dismesse vicino a te che potrebbero diventare aree verdi.",
    summary: "Vitoria-Gasteiz ha trasformato la propria vulnerabilità climatica in un vantaggio quotidiano coltivando terreno, acqua e clima: in trent'anni, il sistema di parchi periurbani \"Anillo Verde\" ha recuperato cave, discariche e campi abbandonati, trasformandoli in oltre mille ettari di spazi naturali intorno alla città."
  },
  {
    num: 37, title: "Grenoble, Energia Della Cittadinanza Attiva", city: "Grenoble", country: "Francia",
    lat: 45.1885, lon: 5.7245, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02njeNqRHVm25MApKGZUobdarGhZw2AVGTV25128iJoKvNEbK9TtZgVk311Qikf1eCl",
    spunti: "Comunità energetiche rinnovabili gestite dai cittadini; la transizione energetica dal basso nei quartieri periferici.",
    attivita: "Cerca quanti pannelli fotovoltaici servirebbero per coprire il fabbisogno energetico della tua scuola. Localizza Saint-Martin-d'Hères rispetto a Grenoble e alle Alpi francesi.",
    summary: "A Saint-Martin-d'Hères, periferia di Grenoble, una comunità di cittadini ha deciso di sfruttare un bene gratuito e abbondante, il sole: dal 2022 la comunità energetica BoucL Énergie, oggi la più grande di Francia, produce elettricità da quasi ottomila pannelli fotovoltaici installati su tetti industriali e parcheggi."
  },
  {
    num: 38, title: "Pamplona E La Democrazia Energetica", city: "Pamplona", country: "Spagna",
    lat: 42.8125, lon: -1.6458, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0GmgCMPLF7p91vQcTi1HFkQQYyQLV51QHQRRrwbuohCaEd6YPcgkqDNg8K8MLqtmyl",
    spunti: "Democrazia energetica e comunità di quartiere; il ruolo dei Comuni nella transizione verso le rinnovabili.",
    attivita: "Cerca cos'è una comunità energetica e come si può partecipare (chi può aderire, quali vantaggi). Verifica se nel tuo Comune esistono già progetti simili.",
    summary: "Negli ultimi due anni il Comune di Pamplona ha messo nove impianti fotovoltaici pubblici, oltre un megawatt complessivo, non nelle mani di una grande utility ma di comunità energetiche di quartiere: gruppi di residenti, scuole e piccole imprese che condividono l'elettricità prodotta localmente."
  },
  {
    num: 39, title: "L’Energia Comunale Sui Tetti Di Parigi", city: "Parigi", country: "Francia",
    lat: 48.8566, lon: 2.3522, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0gnykB2EwFzfQj7nHBkwwXwCzCvGTJkjJhQ7gMQzNYEFg3Uzvzx6njoA7GkaTjqbUl",
    spunti: "Il ruolo delle amministrazioni comunali nella produzione diretta di energia rinnovabile; l'uso dei tetti pubblici come risorsa energetica.",
    attivita: "Cerca quanti edifici pubblici della tua città (scuole comprese) hanno pannelli solari sul tetto. Calcola il potenziale se si aggiungessero pannelli su tutte le scuole del tuo Comune.",
    summary: "Il 4 luglio 2019 la sindaca di Parigi Anne Hidalgo sale sul tetto di una scuola per posare, senza cerimonie, il primo pannello della centrale solare \"cittadina\" della capitale francese: l'inizio di un programma di produzione di energia pulita direttamente sugli edifici pubblici della città."
  },
  {
    num: 40, title: "Helsingborg, Tre Tubi Per Riusare L’Acqua", city: "Helsingborg", country: "Svezia",
    lat: 56.0465, lon: 12.6945, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0357zU12zJRyu5DjeRd6eDfq37YFHFHEUMXmrqYePVSqKgEmqHVgXVqgdKar9K2tTzl",
    spunti: "Separazione delle acque reflue negli edifici di nuova costruzione; l'acqua come risorsa da gestire già a livello domestico.",
    attivita: "Cerca lo schema di una rete fognaria domestica tradizionale e confrontala con il sistema a tre tubi di Helsingborg. Rifletti su quali usi dell'acqua in casa tua potrebbero essere separati e riutilizzati.",
    summary: "Nel nuovo quartiere di Oceanhamnen, ad Helsingborg, sotto i pavimenti delle case gli scarichi non sono uno ma tre: uno per gli avanzi di cucina, uno per il wc a risucchio, uno per l'acqua di docce e lavatrici. Gesti quotidiani che permettono di separare e riutilizzare l'acqua fin dalla sua origine."
  },
  {
    num: 41, title: "Málaga, Il Sole E L’Acqua In Rete", city: "Málaga", country: "Spagna",
    lat: 36.7213, lon: -4.4213, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid025wAsQaJ15cjeDkJSGUC1DzVCwadDdBngquWH9V3qAVhQ8ZYc9mwvbwdVh3otK9WGl",
    spunti: "L'interdipendenza tra risorsa idrica ed energetica; la desalinizzazione come risposta alla scarsità d'acqua nel Mediterraneo.",
    attivita: "Cerca cos'è la desalinizzazione e quali Paesi del Mediterraneo la usano di più. Calcola quanta energia servirebbe per potabilizzare l'acqua della tua regione, se fosse necessario.",
    summary: "Dal piazzale della grande centrale di El Atabal, che desalinizza e potabilizza l'acqua per mezza città, si vedono oltre cinquemila pannelli solari che alimentano pompe, filtri e serbatoi: a Málaga il sole del Mediterraneo produce l'energia che serve a garantire l'acqua potabile, riducendo migliaia di tonnellate di CO₂ l'anno."
  },
  {
    num: 42, title: "Saragozza, La Città Spugna Dell’Ebro", city: "Saragozza", country: "Spagna",
    lat: 41.6488, lon: -0.8891, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0Wc9oCb8Cn4Tm791KdBH2nyEZs9CtRTVR3DJVyr2YPcwgrgmj8UfjFaxoPym7pbxal",
    spunti: "Convivenza con i regimi fluviali irregolari; la gestione integrata di siccità e alluvioni nella stessa città.",
    attivita: "Localizza Saragozza sul fiume Ebro e ripercorri sulla carta il corso del fiume dalla sorgente al mare. Cerca la differenza tra un regime fluviale regolare e uno irregolare.",
    summary: "Le alluvioni degli ultimi giorni hanno confermato che a Saragozza l'acqua non è mai neutra: può scarseggiare con la siccità o straripare con le piene dell'Ebro. Nel cuore dell'Aragona, dove i due estremi si alternano, la città ha imparato a trattare l'acqua con rispetto, misurandola e gestendola con attenzione."
  },
  {
    num: 43, title: "Utrecht, La Città Che Semplifica I Rifiuti", city: "Utrecht", country: "Paesi Bassi",
    lat: 52.0907, lon: 5.1214, category: "rifiuti",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid08XfSP5DbojpRA9uGYRJcsiVqZcnrzT2XtgFVfz9BsdBu2UrSYpo7pP4xr9iHvCLql",
    spunti: "Efficienza dei sistemi di raccolta differenziata; il confronto tra separazione domestica e impianti centralizzati.",
    attivita: "Confronta i dati di riciclo prima e dopo il 2021 a Utrecht (cercali online) con quelli della raccolta differenziata del tuo Comune. Discuti in classe: meglio separare in casa o negli impianti?",
    summary: "Dal 2021 Utrecht ha smesso di chiedere ai cittadini di separare in casa plastica, metalli leggeri e cartoni per bevande: la raccolta \"porta a porta\" produceva materiali troppo contaminati e costava più del necessario, così il Comune ha spostato il lavoro di separazione verso impianti industriali di nuova generazione."
  },
  {
    num: 44, title: "Vienna, Il Parco Artistico Sull’Acqua", city: "Vienna", country: "Austria",
    lat: 48.2082, lon: 16.3738, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0gK8XZLnQXRbnXCtarMDxy4CRfXabutzTXhXQ7yZiFF72UV4m11QXjaqgDYqTym34l",
    spunti: "Il diritto di accesso pubblico alle rive dei fiumi e dei laghi urbani; la riconversione di spazi privati in beni comuni.",
    attivita: "Cerca una mappa di Vienna e localizza l'Alte Donau rispetto al Danubio principale. Individua un tratto di fiume o lago della tua zona non accessibile al pubblico e proponi un progetto di riqualificazione.",
    summary: "Lungo l'Alte Donau, nel quartiere di Floridsdorf, Vienna ha restituito ai cittadini un tratto di riva rimasto per anni frammentato, chiuso da recinzioni e giardini privati, trasformandolo in un nuovo parco pubblico sull'acqua: per la capitale austriaca, che costruisce da secoli spazi di convivenza, la bellezza urbana è un diritto civico."
  },
  {
    num: 45, title: "Città Spugna E Pioggia Preziosa", city: "Copenaghen", country: "Danimarca",
    lat: 55.6761, lon: 12.5683, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid031otdeYQjRyzDxcVx3p17xQo1kXstYrrHRksZPjALxaG9mVkRssRHGkmu8QKDJu5Gl",
    spunti: "Confronto tra modelli urbani italiani ed europei nella gestione delle piogge intense; le città spugna come risposta al dissesto idrogeologico.",
    attivita: "Cerca i dati sull'alluvione di Copenaghen del luglio 2011 (150 mm di pioggia in due ore) e confrontali con un evento meteorologico estremo avvenuto nella tua regione. Costruisci una linea del tempo.",
    summary: "Rispetto a molte città italiane, dove basta un acquazzone per paralizzare interi quartieri per troppo asfalto e poche cisterne, Copenaghen ha costruito da oltre un decennio una \"grammatica urbana\" diversa: dopo l'alluvione del luglio 2011, con 150 mm di pioggia in due ore, il Comune ha approvato un piano che trasforma il rischio in infrastruttura, città che assorbe e riusa l'acqua invece di scaricarla soltanto."
  },
  {
    num: 46, title: "Un Equilibrio Chiamato Stoccolma", city: "Stoccolma", country: "Svezia",
    lat: 59.3293, lon: 18.0686, category: "mobilita",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0vja32LfB4mWmcQnpvJ1JGYBLBbkmNhf7DuVpHNKg67qpdTmAFovaQuebFPcscXrTl",
    spunti: "La gestione pubblica o privata dei trasporti regionali; il pendolarismo tra capitale e comuni dell'hinterland.",
    attivita: "Cerca la differenza tra gestione pubblica e privata di un servizio di trasporto. Verifica chi gestisce i treni regionali della tua zona e da chi dipendono le decisioni su orari e tariffe.",
    summary: "Dopo mesi di ritardi e treni soppressi, nel marzo 2024 la regione di Stoccolma revoca l'appalto dei treni suburbani alla compagnia privata che li gestiva e affida il servizio alla società ferroviaria statale svedese SJ AB: un cambio di gestore per restituire puntualità ai pendolari che ogni giorno collegano la capitale con l'hinterland."
  },
  {
    num: 47, title: "Pilsen, La Città Che Si Aggiusta Da Sé", city: "Plzeň", country: "Repubblica Ceca",
    lat: 49.7384, lon: 13.3736, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0jZdLH9TQtdxv2oW9Po5DuxZFyNpgRzuf7Mg43NCgVwtGKmdeXGHVNbo6NQVijFhhl",
    spunti: "Le città come sistemi interconnessi di infrastrutture; il monitoraggio in tempo reale dei servizi urbani.",
    attivita: "Cerca cos'è un 'centro operativo' o 'control room' di una città intelligente e quali dati vengono monitorati in tempo reale. Disegna uno schema delle infrastrutture della tua città che potrebbero essere collegate a un sistema simile.",
    summary: "Nella città della birra, Plzeň ha imparato a far \"fermentare\" anche i dati: nel centro operativo della società municipale SITMP, i tecnici seguono in tempo reale traffico, pressione dell'acqua, livelli dei fiumi, illuminazione e orari dei tram, così che un sensore segnali un'anomalia prima ancora che diventi un guasto."
  },
  {
    num: 48, title: "Il Sabato Del Villaggio Energetico", city: "Les Haies", country: "Francia",
    lat: 45.15, lon: 4.76, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0LEx5RffnGQ5dZt4JM2W23gjs8cMSxvzvgnrs5iNtsB4mPQyU6cwthSBrJ6C46WXYl",
    spunti: "Le piccole comunità rurali come pionieri della transizione energetica; la partecipazione diretta dei cittadini ai progetti locali.",
    attivita: "Cerca la popolazione di Les Haies (800 abitanti) e confrontala con un piccolo paese vicino a te. Calcola quanti pannelli solari servirebbero per un edificio scolastico delle dimensioni della tua scuola.",
    summary: "Nel 2014, tra le colline che costeggiano il Rodano, il piccolo comune francese di Les Haies (ottocento abitanti) diventa il punto di partenza di un esperimento che si diffonderà in tutto il Paese: un gruppo di residenti monta insieme ai tecnici i primi pannelli fotovoltaici sul tetto della scuola elementare, dando il via a una comunità energetica locale."
  },
  {
    num: 49, title: "Bruxelles E Il Riuso Del Ferro", city: "Bruxelles", country: "Belgio",
    lat: 50.8503, lon: 4.3517, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0NNgjaXRXwoMyWsNuytJkRY7drfXwhmH8gePZDr3iPuWubaSarzSuYk6jh2nV9uoVl",
    spunti: "Il riuso del patrimonio industriale dismesso; la memoria urbana come risorsa per la rigenerazione delle città.",
    attivita: "Cerca la storia di Tour & Taxis e del Belgio industriale dell'Ottocento. Individua un edificio industriale storico della tua città e proponi un nuovo utilizzo per lo spazio.",
    summary: "Sotto la grande volta d'acciaio della Gare Maritime di Bruxelles, dove un secolo fa scorrevano i treni del Belgio industriale, si muove oggi un traffico silenzioso di persone: nel cuore dell'antico complesso di Tour & Taxis, l'archeologia industriale è stata recuperata invece di essere demolita, dando nuova vita a un pezzo di storia urbana."
  },
  {
    num: 50, title: "Come Fanno I Cartoni A Londra", city: "Londra", country: "Regno Unito",
    lat: 51.5233, lon: 0.1043, category: "rifiuti",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0sVwuNA2N8LM9GCUMFQP1ZxjSNCQ7iAPcUCd9P4PtNzWiecPAuaJc2hcYUtERXLmKl",
    spunti: "Riconversione di aree industriali dismesse in nuovi quartieri residenziali; le infrastrutture di raccolta rifiuti progettate fin dall'inizio nella pianificazione urbana.",
    attivita: "Localizza Barking Riverside sulla mappa di Londra, lungo il Tamigi. Confronta la vecchia Barking Power Station con il nuovo quartiere: cerca foto storiche e attuali del sito.",
    summary: "A Barking Riverside, nuovo quartiere sorto su un'ex centrale elettrica nella Londra est, anche il cartone segue una rete pneumatica sotterranea: uno speciale trituratore lo riduce in fibre che viaggiano nei tubi fino alla stazione di raccolta, senza passare per i cassonetti di superficie."
  },
  {
    num: 51, title: "La Città Ricucita Sulla Ferrovia", city: "Vilafranca del Penedès", country: "Spagna",
    lat: 41.3453, lon: 1.6995, category: "mobilita",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0DLuxDJ5KeVQ95gxpkSmbQApv4qtVm7roKjYEc76Yn679qD2vYBA4SCWxokXy8FNrl",
    spunti: "Le infrastrutture ferroviarie come barriere urbane; la ricomposizione del tessuto cittadino diviso da grandi opere.",
    attivita: "Cerca Vilafranca del Penedès sulla mappa della Catalogna e la sua distanza da Barcellona. Individua nella tua città un'infrastruttura (ferrovia, tangenziale, canale) che separa due quartieri e proponi un modo per 'ricucirli'.",
    summary: "A Vilafranca del Penedès la città era divisa in due dalla ferrovia, che correva a cielo aperto tra binari, recinzioni e passaggi a livello, spezzando la continuità delle strade tra il centro storico e i quartieri di Poble Nou e della Girada: interrare o ricoprire quella linea ha permesso di ricucire il tessuto urbano diviso per decenni."
  },
  {
    num: 52, title: "Aarhus Si Scalda Con Il Calore Del Giurassico", city: "Aarhus", country: "Danimarca",
    lat: 56.1629, lon: 10.2039, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02NdknwGgGdXKxdwvnUzktzP2nFaWYkYVst9Rsyo29AkkdwH2AoW9rR7xMsVx6crekl",
    spunti: "L'energia geotermica come risorsa rinnovabile; il sottosuolo geologico come fonte di calore per le città.",
    attivita: "Cerca cos'è l'era geologica del Giurassico e quando è iniziata e finita. Calcola quanto tempo impiega l'acqua a scaldarsi a 2,5 km di profondità e perché la geotermia è considerata energia rinnovabile.",
    summary: "A due chilometri e mezzo sotto Aarhus, seconda città della Danimarca, l'acqua intrappolata negli strati di arenaria del periodo Giurassico, riscaldata dal tempo e dalla pressione geologica, risale in superficie per alimentare la rete di teleriscaldamento della città: una riserva termica naturale vecchia di milioni di anni messa al servizio del presente."
  },
  {
    num: 53, title: "Rotterdam E Il Gemello Che Governa L’Acqua", city: "Rotterdam", country: "Paesi Bassi",
    lat: 51.9244, lon: 4.4777, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid09X7FAur9y6barXdm5rhv9Y7zFXk4rE2cBez1xGTMup1Nrg3vsNKTP587nn72pByKl",
    spunti: "I gemelli digitali come strumento di governo del territorio; la gestione del rischio idraulico nelle città sotto il livello del mare.",
    attivita: "Cerca cos'è un 'gemello digitale' (digital twin) e in quali altri settori viene usato oltre l'urbanistica. Localizza Rotterdam rispetto al livello del mare e calcola di quanti metri è più bassa rispetto ad altre città europee.",
    summary: "A Rotterdam il margine di errore nella gestione dell'acqua è sottile: bastano pochi centimetri di innalzamento del livello del mare o il ritardo di una nave per alterare l'equilibrio di una città sospesa tra canali, dighe e porto. Per questo la città usa un \"gemello digitale\", una copia virtuale del territorio che aiuta ad anticipare e governare i rischi idraulici in tempo reale."
  },
  {
    num: 54, title: "Pendolari Della Funivia Urbana", city: "Créteil", country: "Francia",
    lat: 48.7773, lon: 2.4553, category: "mobilita",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0MrsW5CP4W7gLTm3R4tGwcbxjdCMSTPuCW7FhXx9B6bLFpsSAW6HUXnr4zM1fc4S5l",
    spunti: "Le funivie come soluzione di trasporto pubblico nelle periferie; la geografia degli ostacoli fisici nella mobilità urbana.",
    attivita: "Cerca sulla mappa Créteil e Villeneuve-Saint-Georges rispetto a Parigi: che distanza li separa in linea d'aria? Rifletti su quali ostacoli fisici (fiumi, ferrovie, autostrade) possono dividere due quartieri vicini.",
    summary: "Tra Créteil e Villeneuve-Saint-Georges, nella cintura sud-est di Parigi, una funivia urbana collega quartieri che restavano lontani per colpa di ostacoli naturali e artificiali: pur distando pochi chilometri dalla capitale, qui la geografia quotidiana pesava più dei chilometri in linea d'aria, finché salire in cabina e volare sopra gli ostacoli non ha ricucito la frattura tra i quartieri."
  },
  {
    num: 55, title: "Il Gemello Digitale Per Le Scelte Urbane Di Zurigo", city: "Zurigo", country: "Svizzera",
    lat: 47.3769, lon: 8.5417, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02x4zuxosDrBCPG7ZWvQyQFU1jnH5sJP8izScDXE8ZgvRcrt1Xr3QLcPSf7WyrGv3Wl",
    spunti: "Gli strumenti digitali a supporto della partecipazione urbanistica; la trasparenza delle decisioni sulla trasformazione della città.",
    attivita: "Cerca cos'è un plastico urbano in scala e a cosa serve nella pianificazione. Confronta questo strumento tradizionale con il gemello digitale: quali vantaggi ha ciascuno?",
    summary: "Nell'edificio amministrativo Amtshaus IV, nel cuore storico di Zurigo, un plastico in scala 1 a 1000 viene aggiornato ogni volta che cambia un edificio: sullo stesso principio la città costruisce anche un \"gemello digitale\", una base dati condivisa che rende visibili le trasformazioni urbane prima che diventino discussioni astratte tra cittadini e amministrazione."
  },
  {
    num: 56, title: "A Bristol Il Futuro Ha La Forma Di Un Giardino", city: "Bristol", country: "Regno Unito",
    lat: 51.4545, lon: -2.5879, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0pdcwMVZcDpxpNAdgkt2hXmAa9bBRMoTrdeJoswX3dUCCsdsD2ge4QyBfRagCnZYnl",
    spunti: "L'educazione ambientale nelle scuole; i giardini di pioggia come soluzione di ingegneria naturale contro gli allagamenti.",
    attivita: "Cerca cos'è il ruscellamento (runoff) e come si forma. Osserva il cortile della tua scuola: il terreno è permeabile o impermeabile? Proponi dove potrebbe nascere un piccolo giardino di pioggia.",
    summary: "A Southmead, quartiere di Bristol, i bambini della Little Mead Primary Academy osservano l'asfalto impermeabile e la pioggia che non riesce a penetrare nel terreno: quando il suolo satura, l'acqua resta in superficie e allaga le case. Per fermare questo fenomeno, chiamato ruscellamento, è nato un nuovo giardino pensato per assorbire l'acqua piovana."
  },
  {
    num: 57, title: "La Città Che Pedala Con I Dati", city: "Copenaghen", country: "Danimarca",
    lat: 55.6761, lon: 12.5683, category: "mobilita",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0MvoXrVYwvaBZq7Hok8wggnnU1tNZ56uQny6dtF55rep179rQNwzybxf7riTYCDqgl",
    spunti: "La bicicletta come infrastruttura di trasporto primaria; l'uso dei dati per pianificare la mobilità urbana.",
    attivita: "Cerca quanti chilometri di piste ciclabili ha Copenaghen e confrontali con quelli della tua città. Calcola quante persone potrebbero passare su un ponte ciclabile della tua zona in un'ora, ipotizzando dati simili.",
    summary: "All'alba, sul ponte Dronning Louises Bro tra i laghi di Sortedam e Peblinge, le biciclette arrivano una ogni pochi secondi dai quartieri a nord, fino a diventare un flusso continuo: circa quarantamila passaggi al giorno, una cifra che a Copenaghen non sorprende più nessuno e che la città misura e usa per progettare la mobilità quotidiana."
  },
  {
    num: 58, title: "Rifiuti, Il Cattivo Esempio Di Birmingham", city: "Birmingham", country: "Regno Unito",
    lat: 52.4862, lon: -1.8904, category: "rifiuti",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0gkMizA8Lyc8CnjrdsvDkAKCLyFUADpsTroiS2KNUYMi91s8TZ48Q2BCmkPDK3K2Ll",
    spunti: "I rischi di una gestione fragile dei servizi pubblici essenziali; il legame tra conflitti sindacali e crisi ambientali urbane.",
    attivita: "Cerca le notizie sulla crisi rifiuti di Birmingham del 2025: quanto è durata e come si è risolta? Rifletti su cosa succederebbe nella tua città se la raccolta rifiuti si fermasse per due mesi.",
    summary: "Birmingham, seconda città del Regno Unito e motore economico delle West Midlands con 1,2 milioni di abitanti, tra gennaio e marzo 2025 viene letteralmente sommersa dalla spazzatura: una vertenza sindacale sulla raccolta rifiuti si trasforma in un disastro sanitario, con le strade sepolte sotto 17.000 tonnellate di immondizia."
  },
  {
    num: 60, title: "Il Senso Di Lubiana Per I Rifiuti", city: "Lubiana", country: "Slovenia",
    lat: 46.0569, lon: 14.5058, category: "rifiuti",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02YUpEBnYhEfdpwNH2voM1Mp1opNeRQQoZmXHCpZ7bi4BS7QwAMqzCpwWxjpexAyc3l",
    spunti: "Sistemi di conferimento sotterraneo dei rifiuti; il decoro urbano come risultato di scelte infrastrutturali.",
    attivita: "Cerca il funzionamento dei cassonetti sotterranei a scomparsa e i loro vantaggi estetici e igienici. Individua una via del centro della tua città dove potrebbero essere installati.",
    summary: "Lungo Slovenska cesta, la via principale di Lubiana, alle sette del mattino i marciapiedi sono già puliti: niente sacchetti in vista né bidoni traboccanti, solo colonnine d'acciaio incassate nel pavimento. Basta avvicinare una tessera magnetica: lo sportello si apre e il sacchetto sparisce sottoterra, in un contenitore tre metri più in basso."
  },
  {
    num: 61, title: "Odense Si Riscalda Con Facebook", city: "Odense", country: "Danimarca",
    lat: 55.4038, lon: 10.4024, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid03182dVLHtjiArkgxwex5US7Y55aVhHKU11RZcrksqfaD6XTLMwcPkmHKQbqnCpUyzl",
    spunti: "Il riuso del calore di scarto dei data center; la transizione dal carbone alle fonti alternative di riscaldamento urbano.",
    attivita: "Cerca cos'è un data center e perché produce calore. Calcola quante case potrebbero essere riscaldate dal calore di scarto di un data center delle dimensioni di quello di Odense.",
    summary: "Nella città natale di Hans Christian Andersen, nel 2024 Odense spegne la sua centrale a carbone un anno prima del previsto: non per obbligo, ma perché ha trovato un'alternativa migliore. A duecento metri dal centro storico, il calore prodotto come scarto da un enorme data center di Meta-Facebook, invece di disperdersi, viene recuperato per riscaldare la città."
  },
  {
    num: 62, title: "Vienna, La Casa Che Ascolta", city: "Vienna", country: "Austria",
    lat: 48.2082, lon: 16.3738, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0RjQb7t7hEFCp4pt6y7zDNXC1VVtWm4R6f2ak1Ma9LtgJqsBToaowcEU3o46edK6bl",
    spunti: "L'edilizia pubblica come modello abitativo permanente; la progettazione degli spazi domestici per l'invecchiamento della popolazione.",
    attivita: "Cerca cos'è un Gemeindebau viennese e da quando esiste questo modello di edilizia pubblica. Confronta con l'edilizia popolare italiana: quali differenze di gestione e di durata nel tempo?",
    summary: "Margarete, 75 anni, vive al quinto piano di un Gemeindebau a Seestadt Aspern, Vienna: cinquanta metri quadrati con pianta circolare e pareti scorrevoli. I Gemeindebau non sono edilizia popolare qualunque, ma proprietà pubblica permanente della città, pensata per durare e per adattarsi a chi ci abita, non il contrario."
  },
  {
    num: 63, title: "Vienna, L’Infrastruttura Invisibile", city: "Vienna", country: "Austria",
    lat: 48.2082, lon: 16.3738, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02toJS2mthGiqd7sShSicPVRVMJxqk9e9TxrQeuPrCajyP88VcVBcS48q4N2fexx53l",
    spunti: "Le comunità energetiche sperimentali su larga scala; l'integrazione tra edilizia pubblica e produzione di energia rinnovabile.",
    attivita: "Cerca dal 2013 a oggi quanti anni sono passati e rifletti su cosa significa monitorare dati energetici per oltre un decennio. Localizza Seestadt Aspern rispetto al centro di Vienna.",
    summary: "Sotto i cortili verdi dei Gemeindebau, le case popolari comunali viennesi, scorre una rete tecnologica che quasi nessuno vede: a Seestadt Aspern, dal 2013, il più grande esperimento energetico urbano d'Europa raccoglie dati in tempo reale da 111 famiglie in 213 alloggi che non solo consumano energia, ma la producono con pannelli solari e sistemi di accumulo."
  },
  {
    num: 64, title: "Parigi, Un Secolo Di Calore Sotterraneo", city: "Parigi", country: "Francia",
    lat: 48.8566, lon: 2.3522, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0MuvrnsWkVoXpqMRcUC4rPNTuwWrJQ7mEM6n34FHYbCxKQ37SeYWAd3WPyQB1jcJGl",
    spunti: "La governance dei grandi servizi pubblici a rete; la transizione energetica delle infrastrutture urbane storiche.",
    attivita: "Cerca cos'è una SEMOP (società a partecipazione mista) e come funziona la governance dei grandi servizi pubblici a rete nella tua città (acqua, gas, rifiuti: chi li gestisce?).",
    summary: "Da quasi un secolo una rete di 750 km di tubi porta calore sotto le strade di Parigi, scaldando mezzo milione di abitazioni: a dicembre 2025 la città ha deciso di cambiare gestore, riprendendo la proprietà delle centrali e puntando al 100% di energia rinnovabile o di recupero entro il 2050, senza mai interrompere il servizio."
  },
  {
    num: 65, title: "I Nuovi Quartieri Climatici Di Copenhagen", city: "Copenaghen", country: "Danimarca",
    lat: 55.6761, lon: 12.5683, category: "mobilita",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02p37JMTomGE1KrQihoWNVrFByg96oFecEPA6y1cCNf7KNw2AZARScAi2hLw9ASqzAl",
    spunti: "Esperimenti di traffic calming su scala di quartiere; il legame tra riduzione del traffico e resilienza climatica.",
    attivita: "Cerca cos'è il 'traffic calming' e quali strumenti usa (sensi unici, dossi, restringimenti). Disegna una proposta di traffic calming per una via vicino alla tua scuola.",
    summary: "Una mattina di gennaio, sulle strade del quartiere Østerbro spuntano nuovi segnali coperti da buste di plastica: il 5 febbraio le buste vengono tolte e in poche ore venti strade cambiano direzione, con sensi unici e corsie preferenziali per gli autobus. Non è uno spettacolo, ma un esperimento per capire se un intero quartiere può funzionare senza traffico di attraversamento, riducendo insieme inquinamento e rischio di allagamenti."
  },
  {
    num: 66, title: "Amsterdam Si Specchia Nell’Algoritmo", city: "Amsterdam", country: "Paesi Bassi",
    lat: 52.3676, lon: 4.9041, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid09km3TUq5rYFZvUZVc2WUGZnbRw3eqFXybSvevEBSsyNiH7KMgDvPjQhbMcBoY76Ll",
    spunti: "La pianificazione algoritmica della transizione energetica; il potenziale solare del patrimonio edilizio urbano.",
    attivita: "Cerca quanti edifici della tua città potrebbero ospitare pannelli solari sul tetto. Calcola la percentuale di 1.600.000 pannelli rispetto ai 134.000 edifici di Amsterdam: quanti pannelli per edificio in media?",
    summary: "Un algoritmo analizza in tre secondi ogni tetto di Amsterdam, isolato per isolato, valutando orientamento, esposizione e vincoli paesaggistici per decidere dove installare pannelli solari: la città deve trovarne spazio per un milione e seicentomila entro il 2030, su un patrimonio di oltre 134.000 edifici con tetto."
  },
  {
    num: 67, title: "Verde Verticale A Berlino Non È Roba Per Ricchi", city: "Berlino", country: "Germania",
    lat: 52.52, lon: 13.405, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0Ao9piKZMQDgV2RuMtNpng7iLJ5e9ToykYUyguAohK7eEMyCw6fCdETjsNSKdGGQkl",
    spunti: "Le facciate verdi come strumento di mitigazione climatica accessibile; le politiche pubbliche di incentivo alla sostenibilità privata.",
    attivita: "Cerca cos'è una facciata verde e quali piante si usano più comunemente. Calcola quanto costerebbe, in proporzione, un progetto simile a GründachPLUS applicato a un edificio della tua città.",
    summary: "Dal 2019 Berlino finanzia i propri cittadini, e non solo i più ricchi, per coprire le facciate degli edifici esistenti con piante rampicanti: il programma GründachPLUS copre fino al 60% dei costi con un contributo a fondo perduto, fino a sessantamila euro per intervento, per rendere il verde verticale accessibile a chiunque."
  },
  {
    num: 68, title: "Lovanio, Il Fiume Che Riemerge", city: "Lovanio", country: "Belgio",
    lat: 50.8798, lon: 4.7005, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02YkyiH1tSUW1gFMTfigE8etGadeQd17UEGGAJXYwpuh6j3oNYtqF6HoKFzDuAT9zBl",
    spunti: "Il \"daylighting\" dei fiumi tombati come strategia di adattamento climatico; la memoria idrografica nascosta sotto le città.",
    attivita: "Cerca il fenomeno del 'daylighting' dei fiumi e altri esempi europei oltre a Lovanio. Verifica se nella tua città esistono corsi d'acqua tombati (nascosti sotto le strade) cercando vecchie mappe storiche.",
    summary: "Per secoli le città europee hanno tombato i propri corsi d'acqua, prima per ragioni igieniche poi per fare spazio alle auto: ma l'acqua non dimentica, e prima o poi torna a reclamare il suo spazio, spesso travolgendo tutto. Lovanio ha imparato la lezione, riportando alla luce un fiume che scorreva sepolto sotto la città, invece di aspettare la prossima alluvione."
  },
  {
    num: 69, title: "A Rennes Gli Open Data Sono Servizio Pubblico", city: "Rennes", country: "Francia",
    lat: 48.1173, lon: -1.6778, category: "mobilita",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02nzwARnwwjXQo2MH8HC8aeh4vXSNKeiLMxu9tRsPRPXjiCZN5RKFLGHdqVxWsZsFNl",
    spunti: "Gli open data come infrastruttura civica; la trasformazione dei servizi urbani quotidiani in informazione condivisa.",
    attivita: "Cerca cosa sono gli open data e fai un esempio di dato pubblico che il tuo Comune potrebbe rendere disponibile online. Localizza Rennes in Bretagna su una carta della Francia.",
    summary: "Ogni sabato mattina, da secoli, il mercato di Place des Lices apre i banchi a Rennes: nessuno pensa ai dati mentre contratta il formaggio bretone. Ma sotto quella piazza, sotto ogni fermata dell'autobus e ogni contatore elettrico del quartiere, scorre un'infrastruttura di dati aperti che la città ha costruito pezzo per pezzo in quindici anni, mettendola a disposizione di tutti come un servizio pubblico."
  },
  {
    num: 70, title: "Geotermia: Primi Al Mondo, Ultimi In Europa", city: "Larderello", country: "Italia",
    lat: 43.2458, lon: 10.8688, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0VUxK6qBrPDV6zy7Gvkp4XYkGuDRT9XpMxT3cahpjchtGGMenSFGTmvT5QK2FFNNql",
    spunti: "L'Italia come pioniera mondiale della geotermia; il divario tra scoperta tecnologica e diffusione effettiva di una risorsa energetica.",
    attivita: "Localizza Larderello in Toscana e Ferrara in Emilia-Romagna sulla carta d'Italia. Cerca quanti impianti geotermici esistono oggi in Italia e quanta energia producono rispetto al fabbisogno nazionale.",
    summary: "Il 4 luglio 1904, a Larderello, in Toscana, Piero Ginori Conti accese cinque lampadine con il vapore che sale dal sottosuolo: la prima volta al mondo che il calore della Terra produsse elettricità. Più tardi, a Ferrara, trivellazioni petrolifere del Novecento scoprirono un'altra fonte geotermica, oggi usata per riscaldare migliaia di abitazioni: un primato italiano che l'Europa, nel complesso, ha sfruttato molto meno."
  },
  {
    num: 71, title: "Feldheim, Il Villaggio Elettrico", city: "Feldheim", country: "Germania",
    lat: 52.0906, lon: 12.5794, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02r18C13kUUyweQJ2SMrwQbQB4TfjNtpsELHQpcLPcAyzRsyngRLr7m4zPtq2Nq6w6l",
    spunti: "L'autosufficienza energetica dei piccoli centri rurali; l'impatto delle crisi geopolitiche sui prezzi dell'energia in Europa.",
    attivita: "Cerca la popolazione di Feldheim e calcola quanta energia rinnovabile pro capite produce rispetto alla media tedesca. Localizza il Brandeburgo sulla carta della Germania.",
    summary: "A Feldheim, piccolo villaggio del Brandeburgo tedesco, la crisi energetica che negli ultimi mesi ha fatto raddoppiare il prezzo del gas e salire le tariffe elettriche in tutta la Germania si sente molto meno: il villaggio produce e gestisce da anni la propria energia rinnovabile, restando in gran parte indipendente dagli sbalzi del mercato europeo."
  },
  {
    num: 72, title: "A Parigi 300Mila Case Vuote", city: "Parigi", country: "Francia",
    lat: 48.8566, lon: 2.3522, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid026bXsnwLqsNBPqdJW8scLHn994pe37ifX6GhVbsuVcRhXkaZJYEbbzb1Pr7rMF6E6l",
    spunti: "La vacanza abitativa nelle grandi città europee; le politiche pubbliche contro la sottoutilizzazione del patrimonio edilizio.",
    attivita: "Cerca quante case sfitte o vuote ci sono nel tuo Comune (spesso i dati Istat sono pubblici). Confronta la percentuale con il 'un appartamento su cinque' di Parigi.",
    summary: "Il 14 aprile 2026 il nuovo sindaco di Parigi annuncia la creazione di una \"Brigade de protection du logement\", 150 agenti con il compito di dare la caccia agli appartamenti fantasma: in città 300.000 alloggi risultano vuoti o usati solo come residenze secondarie, un appartamento su cinque non abitato stabilmente, mentre la domanda di case resta altissima."
  },
  {
    num: 73, title: "Energia Pulita, Rete Antiquata", city: "Madrid", country: "Spagna",
    lat: 40.4168, lon: -3.7038, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0heNWDrX1p8MHcEyCMBrUPtMwLZCZATAj8BmfQHpQH7YyXqe6u3nbrtJAteT5M7bHl",
    spunti: "La fragilità delle reti elettriche interconnesse a scala continentale; il dibattito europeo su rinnovabili e sicurezza energetica.",
    attivita: "Cerca la cronologia del blackout iberico del 28 aprile 2025: quanto è durato in ogni Paese coinvolto? Rifletti su cosa succederebbe nella tua città senza elettricità per un'intera giornata.",
    summary: "Il 28 aprile 2025, alle 12:33, l'intera penisola iberica resta al buio: Spagna e Portogallo senza elettricità per ore, sessanta milioni di persone coinvolte, treni fermi e ospedali attivi solo grazie ai generatori. L'indagine dei gestori europei della rete non è ancora conclusa, ma una cosa è chiara fin da subito: non è colpa delle rinnovabili, bensì di una rete elettrica che non ha retto."
  },
  {
    num: 74, title: "A Parigi Crescono I Carciofi Sui Tetti", city: "Parigi", country: "Francia",
    lat: 48.8566, lon: 2.3522, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0Xn7Lte4sKBPukFmfQKiLHNgpb3pKUpgJykn1DNTwEvPKrvwCu19j3f3pBn9husVCl",
    spunti: "Il riuso del calore di scarto per l'agricoltura urbana; i tetti come nuova superficie produttiva delle città.",
    attivita: "Cerca cos'è l'agricoltura urbana e altri esempi di orti o serre sui tetti in Europa. Calcola quanti carciofi (o altri ortaggi) potrebbero crescere sul tetto della tua scuola.",
    summary: "A Porte de la Chapelle, a nord di Parigi, una serra sospesa a quindici metri d'altezza coltiva carciofi senza una caldaia: il calore arriva dai server di un data center vicino, che lavorando producono calore di scarto che risale fino alla serra invece di disperdersi. Niente combustibili fossili, niente rumore: solo energia recuperata che fa crescere ortaggi sui tetti della città."
  },
  {
    num: 75, title: "Szeged, Il Calore Che Sale Dal Basso", city: "Szeged", country: "Ungheria",
    lat: 46.253, lon: 20.1414, category: "energia",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0CzVTdPwU3PC6iQoGgpDp32xWKdm8BkHsQUTNbfaAMsVxBiGQSMa5QiiSdXrhJsxbl",
    spunti: "La geotermia come alternativa su larga scala ai combustibili fossili; la conversione energetica delle reti di teleriscaldamento esistenti.",
    attivita: "Localizza Szeged vicino al confine tra Ungheria, Serbia e Romania. Cerca quanti pozzi geotermici servirebbero, in proporzione, per riscaldare la tua città usando gli stessi dati di Szeged.",
    summary: "A Szeged, città ungherese di 162.000 abitanti vicino al confine con Serbia e Romania, il riscaldamento arriva da duemila metri di profondità: ventisette pozzi geotermici alimentano la rete di teleriscaldamento cittadina, nel più grande intervento di conversione geotermica mai realizzato in Europa, completato dopo sette anni di lavori nel gennaio 2025."
  },
  {
    num: 76, title: "Chambéry, L’Automobile Resta Sottoterra", city: "Chambéry", country: "Francia",
    lat: 45.5646, lon: 5.9178, category: "mobilita",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0h7TuTGHhF4NMxC4Q33JEsSzbX8FwPTHVgLrC8HkhW8L6NZVBtzE2rpWVEUvdAjeYl",
    spunti: "Il parcheggio interrato come scelta politica sull'uso dello spazio pubblico; la pedonalizzazione dei centri storici medievali.",
    attivita: "Cerca come si viveva nei centri storici medievali prima dell'arrivo delle automobili. Individua una via pedonale della tua città e confrontala con Chambéry.",
    summary: "Negli anni Novanta, arrivare in auto a Chambéry significava scendere direttamente in un parcheggio sotterraneo e risalire in ascensore tra i portici medievali: nessun'altra città europea di medie dimensioni aveva osato tanto, ma il messaggio era chiaro, le strade appartengono ai cittadini, non alle automobili."
  },
  {
    num: 77, title: "Fresco Senza Corrente", city: "Cenon", country: "Francia",
    lat: 44.8577, lon: -0.5322, category: "calore",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0WWcThUmeMxTMoKh265uv8wzgqbxxc6XieFHohbkQRjWVU3itq2QLBxJhZfxstpBfl",
    spunti: "Il raffrescamento passivo negli edifici scolastici; le soluzioni a basso consumo energetico per il comfort estivo.",
    attivita: "Cerca il principio fisico della convezione termica naturale e come viene sfruttato nelle ciminiere solari. Verifica se la tua scuola ha sistemi di ventilazione naturale o solo condizionatori.",
    summary: "Al collège Jean Jaurès, a Cenon nella periferia est di Bordeaux, quarantadue ciminiere sul tetto non fumano e non consumano elettricità: captano l'aria esterna e la spingono nelle aule sfruttando solo la convezione termica naturale, senza motori né gas refrigeranti, rinfrescando l'edificio scolastico costruito negli anni Cinquanta."
  },
  {
    num: 78, title: "Riabitare I Vuoti Urbani", city: "Roubaix", country: "Francia",
    lat: 50.6942, lon: 3.1746, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0du9nPWiBSp3AJv6AEvQJMbQ1r4GFoStnjm2QFhmtzdcCnxNQLzTGUtfzjRg51CGzl",
    spunti: "Il riuso degli edifici vuoti come risposta alla crisi abitativa; le ex città industriali del Nord Europa e la loro riconversione.",
    attivita: "Cerca i dati sugli uffici vuoti nella tua città o regione. Confronta con i 9 milioni di mq vuoti in Francia: che percentuale rappresenterebbe nella tua città?",
    summary: "In Francia ci sono nove milioni di metri quadrati di uffici vuoti e oltre quattro milioni di persone che vivono in alloggi inadeguati: a Roubaix, ex città industriale e operaia dell'area metropolitana di Lille, si è scelto di riabitare gli spazi vuoti invece di costruirne di nuovi, trasformando edifici dismessi in nuove case."
  },
  {
    num: 79, title: "I Libri Del Riciclo", city: "Copenaghen", country: "Danimarca",
    lat: 55.6761, lon: 12.5683, category: "rifiuti",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid06S2tPmDiNSQ4ieyjxbH32VpUSY2wjUSTovP8AhUQYhCH32TijiH32JjXpB2jDbUil",
    spunti: "I centri di riciclo come spazi di comunità; il riuso diretto degli oggetti come alternativa al semplice smaltimento.",
    attivita: "Cerca cos'è un centro del riuso (diverso da un centro di raccolta rifiuti tradizionale) e se esiste qualcosa di simile vicino a te. Localizza Nordhavn rispetto al centro di Copenaghen.",
    summary: "Al Nordhavn Nærgenbrugsstation, il centro per il riciclo del moderno quartiere portuale di Copenaghen, non entrano automobili: si arriva a piedi o in bicicletta, si cammina lungo un percorso circolare e si lascia ogni oggetto al suo posto. La prima cosa che si vede è uno scaffale di libri, ordinati per categoria, pronti per essere presi da chi vuole leggerli: il riciclo come luogo di scambio, non solo di smaltimento."
  },
  {
    num: 80, title: "Il Metodo Siviglia Per Le Ondate Di Calore", city: "Siviglia", country: "Spagna",
    lat: 37.3891, lon: -5.9845, category: "calore",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0ioKLSrXm4gQYtJSUB2AmheFh1oSsDXM6c1gC26DdefA2yDniMqZd4fFSMce3t4o2l",
    spunti: "La classificazione delle ondate di calore come rischio nominato; il confronto tra fenomeni meteorologici estremi e la loro comunicazione pubblica.",
    attivita: "Cerca la scala di classificazione delle ondate di calore usata a Siviglia (nomi e livelli). Confronta le temperature estive di Siviglia con quelle della tua città negli ultimi 10 anni.",
    summary: "Chiamata \"la padella di Spagna\", Siviglia l'anno scorso ha contato trenta giorni sopra i quaranta gradi, contro una media di dodici nel decennio precedente: la città è stata la prima al mondo a dare un nome e una classificazione alle ondate di calore, come si fa con gli uragani, per comunicare meglio il rischio e attivare per tempo le misure di protezione."
  },
  {
    num: 81, title: "Come Si Raffredda Una Città Umida?", city: "Parigi", country: "Francia",
    lat: 48.8566, lon: 2.3522, category: "calore",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0366NcYqZxQEkazyuvFSb6GbgPJTyyjuovtFSxicrA4MgNCoawYG87W6Y7QEiY7nRgl",
    spunti: "Le reti urbane di raffrescamento centralizzato; l'uso dei fiumi cittadini come risorsa per il comfort termico estivo.",
    attivita: "Cerca la temperatura media della Senna nelle diverse stagioni. Verifica se un fiume vicino alla tua città potrebbe essere usato per un sistema di raffrescamento simile.",
    summary: "Sotto una piastra di ghisa nell'ottavo arrondissement di Parigi, una scala a chiocciola scende per diversi piani fino a una rete di tubi che trasportano acqua presa dalla Senna e raffreddata: mentre in superficie l'asfalto scotta, la città usa questa rete sotterranea per climatizzare edifici pubblici e privati senza i tradizionali condizionatori d'aria."
  },
  {
    num: 82, title: "A Malaga Il Caldo È Urbanistica, Non Emergenza", city: "Málaga", country: "Spagna",
    lat: 36.7213, lon: -4.4213, category: "calore",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid032HfDuFFSAeH1UJkBSJ8emdrbeUL9sw2GdbQF6WNvCMKADp2HWwz1B3PbUZ8e7jJ8l",
    spunti: "Il catasto degli alberi come strumento di pianificazione climatica; gli spazi pubblici progettati specificamente contro il caldo.",
    attivita: "Cerca se il tuo Comune ha un catasto degli alberi consultabile online. Se non esiste, proponi come si potrebbe censire gli alberi della tua scuola o del tuo quartiere.",
    summary: "A Malaga ogni albero ha un numero: sono 110.000, di oltre 400 specie, e per ciascuno il Comune conosce posizione esatta e nome botanico su una mappa pubblica consultabile dal telefono. La stessa mappa segnala anche settantaquattro spazi all'aperto ombreggiati, con pavimento chiaro, fontanelle e panchine, pensati apposta per rendere l'aria più sopportabile durante le ondate di calore."
  },
  {
    num: 83, title: "Quel Ramo Del Lago Di Ginevra Che Climatizza La Città", city: "Ginevra", country: "Svizzera",
    lat: 46.2044, lon: 6.1432, category: "calore",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0AqhC6yR1r4ENhnwVf2UGbsP9RyFxhygPQTa3QieLnHBoNdy3BG4MEVuhPdK6HxULl",
    spunti: "L'uso dei laghi come riserva termica naturale; le ondate di calore nelle città alpine e prealpine.",
    attivita: "Cerca la profondità massima del Lago Lemano e la sua posizione tra Svizzera e Francia. Calcola la differenza di temperatura tra la superficie e i 45 metri di profondità nelle diverse stagioni.",
    summary: "A quarantacinque metri di profondità, il Lago Lemano resta sempre a sette gradi, d'estate come d'inverno: mentre in superficie Ginevra ha registrato quest'anno una delle ondate di calore più lunghe mai documentate, la città preleva quell'acqua fredda in profondità per climatizzare edifici e quartieri, invece di affidarsi solo ai condizionatori."
  },
  {
    num: 84, title: "Il Mare Nei Tubi Per Raffreddare Marsiglia", city: "Marsiglia", country: "Francia",
    lat: 43.2965, lon: 5.3698, category: "calore",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02b8qAQ1Vy1GQpCDzzizrJuVQmk3J4ym1oft3p4Ptc7SkidKrzCU37zSFRFHioXToDl",
    spunti: "Il mare come fonte di energia per il raffrescamento urbano; le reti di teleraffrescamento nelle città portuali mediterranee.",
    attivita: "Localizza Marsiglia sul Mediterraneo e cerca la temperatura media del mare nelle diverse stagioni. Rifletti su quali città costiere italiane potrebbero adottare un sistema simile.",
    summary: "Sul quai d'Arenc, a Marsiglia, un tubo preleva l'acqua di mare a sette metri di profondità: alcune pompe di calore le tolgono energia, restituendo acqua fredda che corre sottoterra fino a grattacieli, hotel e centri commerciali del porto, e presto anche a un ospedale, climatizzando interi edifici senza unità esterne sui tetti."
  },
  {
    num: 85, title: "Salisburgo Si Rinfresca Con Un Condizionatore Di 900 Anni Fa", city: "Salisburgo", country: "Austria",
    lat: 47.8095, lon: 13.055, category: "calore",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0KoKFVGSh2e9cYVbU9MLyJEwvJTKUirKSikiii8xbNiwirgLXi7JBnSVCkjpKER5xl",
    spunti: "Le infrastrutture idrauliche storiche riusate in chiave contemporanea; il patrimonio idrico come risorsa energetica di lunga durata.",
    attivita: "Cerca la storia dell'Almkanal di Salisburgo: da quando esiste e a cosa serviva in origine. Confronta un'infrastruttura idraulica storica della tua zona ancora in uso oggi.",
    summary: "Nel Festspielhaus di Salisburgo, dove ogni sera d'estate si ascolta Mozart, la sala resta fresca senza un solo condizionatore: quattro metri sotto il palco scorre l'acqua dell'Almkanal, un canale che attraversa la città da novecento anni portando via il calore, fino a cinquantacinque litri al secondo, un sistema di raffrescamento medievale ancora perfettamente funzionante."
  },
  {
    num: 86, title: "Grenoble Sorella Acqua Pubblica", city: "Grenoble", country: "Francia",
    lat: 45.1885, lon: 5.7245, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0gLgtWAr6cMb1G2WT45CAiA8dypTaHcDcM9wkKg24Pfnz8MuAAHJXNMDPAMvNR3Gel",
    spunti: "La protezione del territorio come garanzia di qualità dell'acqua potabile; le zone di salvaguardia intorno alle falde acquifere.",
    attivita: "Cerca cos'è una zona di salvaguardia delle acque potabili e perché è importante proteggere il territorio intorno alle falde. Verifica da dove arriva l'acqua del rubinetto di casa tua.",
    summary: "A sud di Grenoble, in un'area di 2.300 ettari senza capannoni né case, si trova il perimetro di protezione più esteso d'Europa attorno a un campo di captazione: sotto ci sono i pozzi di Rochefort, da cui l'acqua sale già potabile, senza bisogno di cloro o altri trattamenti, grazie alla tutela rigorosa del territorio circostante."
  },
  {
    num: 87, title: "Montparnasse Quando Il Cemento Cede Il Passo Ai Cittadini", city: "Parigi", country: "Francia",
    lat: 48.8566, lon: 2.3522, category: "calore",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02Aa5Ltmb5fB58u2o6qEJA5G3hHLyHoKfQibAsiRy8QrHsPLmpEAo18R2qecNgVxnSl",
    spunti: "Gli alberi come infrastruttura di raffrescamento misurabile; la trasformazione degli spazi cementificati in foreste urbane.",
    attivita: "Calcola quanti alberi in proporzione servirebbero per rinfrescare una piazza della tua città delle stesse dimensioni di Place de Catalogne. Cerca la differenza di temperatura media tra un'area verde e una cementificata.",
    summary: "Quaranta gradi, terza ondata di calore dell'anno: in Place de Catalogne, XIV arrondissement di Parigi, la gente cerca ombra e la trova sotto 470 alberi e oltre quattromila metri quadrati di foresta urbana, dove il termometro segna quattro gradi in meno rispetto al sole aperto, un dato misurato e non solo percepito."
  },
  {
    num: 88, title: "Che Spreco L’Acqua Depurata Che Non Si Riusa", city: "Murcia", country: "Spagna",
    lat: 37.9922, lon: -1.1307, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0wAic6BPHXGZcAUhyCZ9D9C3tQuFX2xYxw9zg3jRcKZFwJ32eAjwoVsWGHpnXR1DSl",
    spunti: "Il riuso dell'acqua depurata come risorsa contro la siccità; il confronto tra le crisi idriche dei grandi fiumi europei.",
    attivita: "Cerca i livelli attuali del Po, del Reno, della Loira e del Danubio (siti di monitoraggio idrologico) e confrontali con le medie storiche. Localizza la Región de Murcia sulla carta della Spagna.",
    summary: "Da tre mesi il caldo asfissia gran parte d'Europa: Po, Reno, Loira e Danubio scendono a livelli eccezionalmente bassi, e oltre il 60% del territorio italiano è colpito dalla siccità. Nella Región de Murcia, nel sud-est della Spagna, invece, l'acqua depurata dagli impianti non finisce in mare come quasi ovunque: l'ente pubblico ESAMUR ne riusa il 98% per irrigare i campi."
  },
  {
    num: 89, title: "Berlino Gli Alberi L’Acqua E Gli Open Data", city: "Berlino", country: "Germania",
    lat: 52.52, lon: 13.405, category: "verde",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02sdwyJBzoEhkKqQ1L8gg1UTZLnKrdgbmeRFiqLsnrR6ubysnsN1H8xmbkJeH2pHgNl",
    spunti: "Il catasto digitale del patrimonio arboreo urbano; la partecipazione dei cittadini alla cura del verde pubblico tramite dati aperti.",
    attivita: "Cerca se esiste una mappa digitale degli alberi della tua città come 'Gieß den Kiez'. Calcola quanti alberi ci sono in un parco vicino a te, anche solo stimandoli.",
    summary: "A Berlino ogni albero ha un numero: un codice tecnico identifica ciascuno dei 885.825 alberi tra strade e parchi della città, con specie, anno di piantumazione e fabbisogno d'acqua. Dal 2020 questi dati sono consultabili su una mappa online, \"Gieß den Kiez\" (annaffia il quartiere), che permette a chiunque di vedere quali alberi hanno sete e magari di dargli da bere."
  },
  {
    num: 90, title: "Amsterdam Le Auto Sotto Il Canale", city: "Amsterdam", country: "Paesi Bassi",
    lat: 52.3676, lon: 4.9041, category: "mobilita",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid02kvqEvrEhcgbNSyos5QXoJ3pq52fYcDPgKdDJBfYeSEoTCEgNh9Bs6E5aLgSLmBaKl",
    spunti: "I parcheggi sotterranei sotto i canali storici; la convivenza tra patrimonio storico dell'acqua e mobilità contemporanea.",
    attivita: "Cerca quanti parcheggi sotterranei sotto i canali esistono ad Amsterdam. Localizza il Singelgracht sulla mappa storica della città e rifletti sul rapporto tra canali e mobilità.",
    summary: "Sulla Marnixstraat, un'auto rallenta davanti alla piscina comunale, imbocca una rampa e scompare sotto un canale: è entrata nel parcheggio sotterraneo del Singelgracht, due piani sotto la superficie, insieme ad altre ottocento automobili invisibili ai turisti che, contando solo le biciclette, credono di aver capito tutto di Amsterdam."
  },
  {
    num: 91, title: "Zurigo Prova A Fare La Città Spugna", city: "Zurigo", country: "Svizzera",
    lat: 47.3769, lon: 8.5417, category: "acqua",
    link: "https://www.facebook.com/pinobruno.giornalista/posts/pfbid0zYruM7SvEUuTeFVPvm3ELTYEoYhqGofq8XGmcg1aPvf4Avs8K6wUDnwaNFWYaxtZl",
    spunti: "Il ritorno in superficie dei corsi d'acqua tombati; le città spugna come strategia di adattamento al cambiamento climatico.",
    attivita: "Cerca cos'è una 'città spugna' (sponge city) e quali altre città europee la citate nella mappa hanno adottato questo modello. Verifica se nella tua città esistono corsi d'acqua tombati che potrebbero tornare in superficie.",
    summary: "Ad Albisrieden, ai margini di Zurigo, un canale di ghiaia largo pochi passi scende dal fianco boscoso dell'Uetliberg e taglia il quartiere per due chilometri e mezzo: trent'anni fa lì non c'era niente da vedere, perché l'acqua scorreva sottoterra in un tubo. Oggi l'Albisrieder Dorfbach è tornato in superficie, primo passo di un piano più ampio per fare di Zurigo una \"città spugna\"."
  },
];

const TOTAL_PLANNED = 91;

// ---------------------------------------------------------------
// Raggruppa le puntate per città
// ---------------------------------------------------------------
function groupByCity(episodes){
  const map = new Map();
  episodes.forEach(ep => {
    const key = ep.city;
    if(!map.has(key)) map.set(key, { city: ep.city, country: ep.country, lat: ep.lat, lon: ep.lon, episodes: [] });
    map.get(key).episodes.push(ep);
  });
  return Array.from(map.values());
}
const CITIES = groupByCity(EPISODES);

// ---------------------------------------------------------------
// Mappa Leaflet
// ---------------------------------------------------------------
const map = L.map('map', { zoomControl: true, minZoom: 3, maxZoom: 16 }).setView([51, 10], 4);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, HERE, Garmin, FAO, NOAA, USGS',
  maxZoom: 16,
}).addTo(map);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 16,
}).addTo(map);

function makeIcon(color){
  const size = 20;
  return L.divIcon({
    className: '',
    html: `<div class="cluster-pin" style="width:${size}px;height:${size}px;background:${color};"></div>`,
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
  });
}

function makeClusterIcon(cluster){
  const childMarkers = cluster.getAllChildMarkers();
  const color = childMarkers[0].options.catColor;
  const count = cluster.getChildCount();
  const size = 30;
  return L.divIcon({
    className: '',
    html: `<div class="cluster-pin" style="width:${size}px;height:${size}px;background:${color};font-size:12px;">${count}</div>`,
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
  });
}

// Assegna a ogni puntata una piccola posizione distinta intorno al centro
// della città, così i pallini si separano avvicinandosi con lo zoom.
function assignMarkerPositions(episodes){
  const byCity = new Map();
  episodes.forEach(ep => {
    if(!byCity.has(ep.city)) byCity.set(ep.city, []);
    byCity.get(ep.city).push(ep);
  });
  byCity.forEach(group => {
    const n = group.length;
    const R = 0.012; // ~1.3 km, abbastanza per separarsi con lo zoom sulla città
    group.forEach((ep, i) => {
      if(n === 1){
        ep.markerLat = ep.lat; ep.markerLon = ep.lon;
      } else {
        const angle = (2 * Math.PI * i / n) - Math.PI / 2;
        const latFactor = Math.cos(ep.lat * Math.PI / 180) || 1;
        ep.markerLat = ep.lat + R * Math.sin(angle);
        ep.markerLon = ep.lon + (R * Math.cos(angle)) / latFactor;
      }
    });
  });
}
assignMarkerPositions(EPISODES);

let clusterGroup = null;
function renderMarkers(activeCats){
  if(clusterGroup) map.removeLayer(clusterGroup);
  clusterGroup = L.markerClusterGroup({
    maxClusterRadius: 70,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    iconCreateFunction: makeClusterIcon,
  });

  EPISODES.filter(e => activeCats.has(e.category)).forEach(ep => {
    const color = CATEGORIES[ep.category].hex;
    const marker = L.marker([ep.markerLat, ep.markerLon], { icon: makeIcon(color), catColor: color });
    const tooltipHtml = `
      <div class="tooltip-city">${ep.city}</div>
      <div class="tooltip-ep-title">${ep.num}. ${ep.title}</div>
      <div class="tooltip-ep-summary">${ep.summary}</div>
      <div class="tooltip-hint">Clicca per saperne di più &rarr;</div>
    `;
    marker.bindTooltip(tooltipHtml, { className: 'city-tooltip', direction: 'top', offset: [0, -6], sticky: false, opacity: 1 });
    marker.on('click', () => showCity(ep.city, ep.num));
    clusterGroup.addLayer(marker);
  });

  map.addLayer(clusterGroup);
}

// ---------------------------------------------------------------
// Legenda / filtro categorie
// ---------------------------------------------------------------
let activeCats = new Set(Object.keys(CATEGORIES));
let currentPanelView = 'intro';
const legendEl = document.getElementById('legend');
Object.entries(CATEGORIES).forEach(([key, cat]) => {
  const chip = document.createElement('div');
  chip.className = 'chip active';
  chip.innerHTML = `<span class="dot" style="background:${cat.hex}"></span><span class="chip-label">${cat.label}</span><button type="button" class="chip-info" title="Approfondisci ${cat.label}" aria-label="Approfondisci ${cat.label}">&#9432;</button>`;
  chip.style.background = cat.fill;
  chip.style.borderColor = cat.fill;
  chip.addEventListener('click', () => {
    if(activeCats.has(key)) activeCats.delete(key); else activeCats.add(key);
    chip.classList.toggle('dimmed', !activeCats.has(key));
    renderMarkers(activeCats);
    if(currentPanelView === 'intro') showIntro();
  });
  chip.querySelector('.chip-info').addEventListener('click', (ev) => {
    ev.stopPropagation();
    showCategory(key);
  });
  legendEl.appendChild(chip);
});

// ---------------------------------------------------------------
// Pannello laterale
// ---------------------------------------------------------------
const panel = document.getElementById('panel');

// ---------------------------------------------------------------
// Controlli dimensione testo (accessibilità)
// ---------------------------------------------------------------
const TEXT_SCALE_MIN = 0.85, TEXT_SCALE_MAX = 1.6, TEXT_SCALE_STEP = 0.15;
let textScale = 1;
try {
  const saved = localStorage.getItem('cittaCheCambianoRiassunti_textScale');
  if (saved) textScale = parseFloat(saved);
} catch (e) {}

function applyTextScale(){
  panel.style.setProperty('--text-scale', textScale);
}
function persistTextScale(){
  try { localStorage.setItem('cittaCheCambianoRiassunti_textScale', String(textScale)); } catch (e) {}
}
document.getElementById('textBigger').addEventListener('click', () => {
  textScale = Math.min(TEXT_SCALE_MAX, +(textScale + TEXT_SCALE_STEP).toFixed(2));
  applyTextScale(); persistTextScale();
});
document.getElementById('textSmaller').addEventListener('click', () => {
  textScale = Math.max(TEXT_SCALE_MIN, +(textScale - TEXT_SCALE_STEP).toFixed(2));
  applyTextScale(); persistTextScale();
});
document.getElementById('textReset').addEventListener('click', () => {
  textScale = 1;
  applyTextScale(); persistTextScale();
});
applyTextScale();

function showIntro(){
  currentPanelView = 'intro';
  const done = EPISODES.length;
  const visibleCities = CITIES
    .map(c => ({ ...c, episodes: c.episodes.filter(e => activeCats.has(e.category)) }))
    .filter(c => c.episodes.length > 0);
  panel.innerHTML = `
    <div class="intro">
      <h2>Atlante sostenibile: la mappa delle città europee</h2>
      <p>Atlante dell'Europa sostenibile, ispirato dalla rubrica Facebook di <a href="https://www.facebook.com/pinobruno.giornalista" target="_blank" class="author-link">Pino Bruno</a>. </p>
      <p>Ogni pallino sulla mappa racconta come vengono affrontati nella varie città problemi di sostenibilità legati all'acqua, ai rifiuti, all'energia, alla mobilità o alla rigenerazione urbana (cliccandoci sopra si possono leggere le varie iniziative prese). </p>
      <p>Cliccando sui tasti in alto si possono selezionare/escludere i vari argomenti. La ⓘ accanto a ciascun argomento apre una pagina di spiegazione e approfondimento del problema.</p>
      <p style="font-size:12.5px; color:var(--ink-dim); font-style:italic;">Questa versione mostra solo le sintesi degli interventi di Pino Bruno, con accanto i link agli originali e altri link utili per approfondire le questioni affrontate.</p>
      <div class="progress">Puntate inserite finora: <b>${done} di ${TOTAL_PLANNED}</b></div>
      <ul class="city-list">
        ${visibleCities.map(c => `<li data-city="${c.city}"><span class="cname">${c.city}</span><span class="count">${c.episodes.length} puntat${c.episodes.length>1?'e':'a'}</span></li>`).join('')}
      </ul>
    </div>`;
  panel.querySelectorAll('.city-list li').forEach(li => {
    li.addEventListener('click', () => showCity(li.dataset.city));
  });
}

function showCity(cityName, epNum){
  currentPanelView = 'city';
  const city = CITIES.find(c => c.city === cityName);
  if(!city) return;
  const ep = epNum ? city.episodes.find(e => e.num === epNum) : city.episodes[0];
  const cat = CATEGORIES[ep.category];

  panel.innerHTML = `
    <button class="back-btn" id="backBtn">&larr; Tutte le città</button>
    <div class="city-header">
      <h2>${city.city}</h2>
      <span class="country-tag">${city.country}</span>
    </div>
    ${city.episodes.length > 1 ? `
      <div class="ep-tabs">
        ${city.episodes.map(e => `<div class="ep-tab ${e.num===ep.num?'selected':''}" data-num="${e.num}">${e.num}. ${e.title.length>28?e.title.slice(0,28)+'…':e.title}</div>`).join('')}
      </div>` : ''}
    <div class="cat-pill" style="background:${cat.hex}22; color:${cat.hex};">
      <span class="dot" style="background:${cat.hex}"></span>${cat.label}
    </div>
    <article>
      <h3>${ep.num}. ${ep.title}</h3>
      <p class="summary-text">${ep.summary || 'Riassunto non ancora disponibile per questa puntata.'}</p>
      <div class="spunti-box">
        <h4>Spunti geografici — Terza media</h4>
        <p>${ep.spunti}</p>
      </div>
      ${ep.attivita ? `
      <div class="attivita-box">
        <h4>Attività di ricerca e approfondimento</h4>
        <p>${ep.attivita}</p>
      </div>` : ''}
      ${ep.risorse && ep.risorse.length ? `
      <div class="risorsa-box">
        <h4>Per approfondire</h4>
        <ul>
          ${ep.risorse.map(r => `<li><a href="${r.url}" target="_blank" rel="noopener">${r.label}</a></li>`).join('')}
        </ul>
      </div>` : ''}
    </article>
  `;
  document.getElementById('backBtn').addEventListener('click', showIntro);
  panel.querySelectorAll('.ep-tab').forEach(tab => {
    tab.addEventListener('click', () => showCity(cityName, parseInt(tab.dataset.num, 10)));
  });

  map.flyTo([ep.markerLat, ep.markerLon], 12, { duration: 0.6 });
  // trova il marker di questa puntata dentro il cluster e apre il suo tooltip
  let targetMarker = null;
  clusterGroup.eachLayer(m => {
    if(m.getLatLng().lat === ep.markerLat && m.getLatLng().lng === ep.markerLon) targetMarker = m;
  });
  if(targetMarker){
    setTimeout(() => {
      if(typeof clusterGroup.zoomToShowLayer === 'function'){
        clusterGroup.zoomToShowLayer(targetMarker, () => targetMarker.openTooltip());
      } else {
        targetMarker.openTooltip();
      }
    }, 650);
  }
}

function showCategory(key){
  currentPanelView = 'category';
  const cat = CATEGORIES[key];
  const page = CATEGORY_PAGES[key];
  if(!cat || !page) return;
  const eps = EPISODES.filter(e => e.category === key);
  panel.innerHTML = `
    <button class="back-btn" id="backBtn">&larr; Tutte le città</button>
    <div class="category-page">
      <div class="cat-pill" style="background:${cat.hex}22; color:${cat.hex};">
        <span class="dot" style="background:${cat.hex}"></span>${cat.label}
      </div>
      <h2>${cat.label}</h2>
      <p class="lead">${page.intro}</p>
      <h4>Approfondimento geografico</h4>
      <p class="deepdive">${page.deepdive}</p>
      <h4>Collegamento con l'Agenda 2030</h4>
      ${page.sdgs.map(s => `
        <div class="sdg-card">
          <div class="sdg-badge" style="background:${s.color};">${s.num}</div>
          <div>
            <div class="sdg-title">Obiettivo ${s.num} — ${s.title}</div>
            <div class="sdg-why">${s.why}</div>${s.link ? `<a class="sdg-link" href="${s.link}" target="_blank" rel="noopener">Scopri di più su ASviS &rarr;</a>` : ''}
          </div>
        </div>`).join('')}
      <h4>Puntate di questo tema sulla mappa (${eps.length})</h4>
      <ul class="category-episode-list">
        ${eps.map(e => `<li data-city="${e.city}" data-num="${e.num}"><b>${e.city}</b> — ${e.title}</li>`).join('')}
      </ul>
      ${page.resources ? `
      <h4>Risorse per approfondire</h4>
      <ul class="resource-list">
        ${page.resources.map(r => `<li><a href="${r.url}" target="_blank" rel="noopener">${r.label}</a></li>`).join('')}
      </ul>` : ''}
    </div>
  `;
  document.getElementById('backBtn').addEventListener('click', showIntro);
  panel.querySelectorAll('.category-episode-list li').forEach(li => {
    li.addEventListener('click', () => showCity(li.dataset.city, parseInt(li.dataset.num, 10)));
  });
}

renderMarkers(activeCats);
showIntro();
