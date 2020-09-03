var readline = require('readline');
var rl = readline.createInterface( process.stdin , process.stdout );

rl.question(" Salut,bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?\n>",function pyramide(e){
if (e>25) {
	return;
}
else
{
	console.log(" Voici la pyramide:");

	const Pm = Math.floor(((e*2)-1)/2);
	for (i = 0; i<e; i++) {
		var niveau = ' ';
	for (j = 0; j<(e*2)-1; j++) {
		if (Pm - i <= j && Pm + i>= j) {
			niveau+='#';
		}
		else{
			niveau+=' ';
		}
	}console.log(niveau)	
   }}
});