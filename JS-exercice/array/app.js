var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];

/*	##Exercice  1 */

var mois = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
//console.log(mois);

/*	##Exercice 2 */

//console.log(mois[2]);

/*	##Exercice 3 */

//console.log(mois[5]); 

/*	##Exercice 4 */

//console.log(mois[10]);

/* Exercice 5 */

mois[7] = "août";
//console.log(mois[7]);

/* Exercice 6 */

var browseArray = function (a){
	for ( var i = 0; i < a.length; i++){
		console.log(a[i]); 
	}
};

//browseArray(mois);

/* Exercice 8 */

array.push('Courgette');
//console.log(array);

/* Exercice 9 */

array[4] = 'Citron';
//console.log(array[4]);

/* Exercice 10 */

array.splice(1, 1);
//console.log(array);

/* Exercice 11 */

array[2] = 'Poire';
//console.log(array[2]);

	/*Exercice12 */

browseArray(array);