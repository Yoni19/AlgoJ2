const fs = require('fs');
const bubbleSort = require('./bubleSort')
const Fusion = require('./Fusion')
const Insertion = require('./Insertion')
const Selection = require('./Selection')
const Cocktail = require('./Cocktail')
const Rapide = require('./Rapide')
const fileName = process.argv[2];

//ici

// Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    const array = Array.from(data.split(/\s+/))
    const list = array.map(v => parseInt(v, 10));
    bubbleSort(list)
    Insertion(list)
    Selection(list)
    Rapide(list)
    Fusion(list)
    Cocktail(list)
} catch (error) {
    console.error(error.message);
}