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
}

console.log(compareNumber(8, 6));
