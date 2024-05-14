//const {sleep} = require("../exercices/10_promise");

/**
 * Créez une fonction synchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser .then
 * 
 * contrainte:
 *    - votre fonction doit être synchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 * 
 */
const {sleep} = require("./10_promise");

const usingThen = (cb) => {
    console.log("start");
    sleep(2000).then(() => {
        console.log("end");
        cb();
    });
};

const synchroneFunction = () => {
    console.log("Début de la fonction synchrone");
    usingThen(() => {
        console.log("Le callback a été appelé");
    });
    console.log("Fin de la fonction synchrone");
};

synchroneFunction();


/**
 * Créez une fonction asynchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser await
 * 
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */

const {sleep} = require("./10_promise");

const usingAwait = async (cb) => {
    console.log("start");
    await sleep(2000);
    console.log("end");
    cb();
};

const asynchroneFunction = async () => {
    console.log("Début de la fonction asynchrone");
    await usingAwait(() => {
        console.log("Le callback a été appelé");
    });
    console.log("Fin de la fonction asynchrone");
};

asynchroneFunction();


/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (body)
 * 
 * Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer
 * npm install axios
 * 
 * votre réponse doit être un objet json
 * 
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

//décommentez la ligne suivante une fois le package installé
const axios = require("axios");

async function main() {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const data = await apiResponse(url);
    console.log(data);
}

main();



module.exports = {usingThen, usingAwait, apiResponse};