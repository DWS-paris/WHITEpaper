const fetch = require('node-fetch');
const localStorage = require('localStorage')

// Configuration du module
let express = require('express');
let router = express.Router();
const theApiUrl = 'http://localhost:3000/users'; 

// Configuration de la route => http://localhost:8080/
router.get('/', (req, res, next) => {
   // Envoi du fichier html du dossier /client dans la réponse
   res.json( { response: 'Hello API' } )
});


// Configuration de la route => http://localhost:8080/
router.post('/register', (req, res, next) => {

    // Récupérer les données de la requête
    const userData = JSON.stringify(req.body);
    console.log(userData)
    // Mise en place d'une promesse
    fetch(theApiUrl, { method: 'POST', body: userData, headers: { 'Content-Type': 'application/json' } } )
    .then(response => {
        res.render('protected', { title: 'Télécharger le livre blanc', userEmail: req.body.email });
    })
    .catch(err => {
        console.error(err)
        return res.json(err)
    });

   
});

// Export du module
module.exports = router; 