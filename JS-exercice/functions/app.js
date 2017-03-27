	/* #Exercice1 */

var functionTrue = function() {
	return true;
};

console.log(functionTrue());

	/* Exercice2 */

var functionString = function(a) {
	return a;
};

console.log(functionString("myString"));

	/* Exercice3 */

var concatString = function(a, b) {
	return a + " " + b;
};

console.log(concatString('Hello', 'World!'));

	/* Exercice4 */

var compareNumber = function(a, b) {
	if ( a === b){
		return "Les deux nombres sont identiques";
	} else if( a < b){
		return "Le premier nombre est plus petit";
	} else {
		return "Le premier nombre est plus grand";
	}
};

console.log(compareNumber(8, 6));

	/* Exercice5 */

var concatStringAndNumber = function(a, b){
	return a + " " + b;
};

console.log(concatStringAndNumber(8, 'Hello World!')); 

	/* Exercice6 */

var concatThreeThings = function(nom, prenom, age){
	return "Bonjour " + nom + " " + prenom + ", tu as " + age + " ans";  
};

console.log(concatThreeThings('roma', 'maxime', 22));


