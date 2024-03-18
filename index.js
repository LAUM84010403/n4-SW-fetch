//PAGE DE BASE DE LA PAGE, C'EST ICI QUE TOUT COMMENCE

const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques depuis le répertoire 'routes'
app.use(express.static(path.join(__dirname, 'routes')));

// Définir une route pour servir index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'routes', 'index.html'));
});

// Démarrez le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
