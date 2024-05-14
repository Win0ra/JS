/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 tableaux passés en paramètres
 * 
 * ex: [1, 2, 3], [4, 5, 6] => [1, 2, 3, 4, 5, 6]
 * 
 * contrainte: 
 *  - ne pas utiliser la méthode concat, map, merge, push
 *  - for, foreach, while, do while sont interdits
 */

const concat = (arr1, arr2) => [...arr1, ...arr2];
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = concat(arr1, arr2);
console.log(result); // [1, 2, 3, 4, 5, 6]



/**
 * utiliser l'opérateur de composition ... afin d'ajouter un élément à un tableau
 * 
 * ex: [1, 2, 3], 4 => [1, 2, 3, 4]
 * 
 * contrainte:
 * - ne pas utiliser la méthode push
 */

const push = (arr, item) => [...arr, item];
const arr = [1, 2, 3];
const newArr = push(arr, 4);
console.log(newArr); // [1, 2, 3, 4]
console.log(arr); // [1, 2, 3]



/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 objets passés en paramètres
 * 
 * ex: {a: 1, b: 2}, {c: 3, d: 4} => {a: 1, b: 2, c: 3, d: 4}
 */

const merge = (obj1, obj2) => ({...obj1, ...obj2});
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const result1 = merge(obj1, obj2);
console.log(result); // {a: 1, b: 2, c: 3, d: 4}


""
/**
 * utiliser l'opérateur de composition ... afin de modifier la propriété name de l'objet
 * 
 * ex: {name: 'toto'}, 'titi' => {name: 'titi'}
 * 
 * contrainte:
 *  - interdiction d'utiliser l'opérateur d'affectation "="
 */

const setName = (obj, name) => ({...obj, name});
const obj = {name: 'toto'};
const newObj = setName(obj, 'titi');
console.log(newObj); // {name: 'titi'}
console.log(obj); // {name: 'toto'}


// astuce: {...obj} crée une copie de l'objet, c'est un des principes de l'immutabilité et évite les problèmes de référence
module.exports = {concat, push, merge, setName}