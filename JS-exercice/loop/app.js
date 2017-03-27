	/* Exercice1 */

for (var i = 0 ; i <= 10; i++){
	//console.log(i);
}

	/*Exercice2 */

var multipleInLoop = function(a, b){
	for( a; a < 21; a++){
		console.log(a * b);
	}
};

//multipleInLoop(3, 2);

	/*Exercice3 */

var multipleAndDecrementation = function(b){
	var a = 100;
	for (a; a >= 10; a--){
		console.log(a * b);
	}
};

//multipleAndDecrementation(2);

	/* Exercice4 */

var halfIncrementation = function(){
	for (var i = 1; i <= 10; i += (i / 2)){
		console.log(i);
	}
};

//halfIncrementation();

	/* Exercice5 */

var almostThere = function(){
	for (var i = 1; i <= 15; i++){
		console.log("On y est presque!");
	}
};

//almostThere();

