// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

function rollDice(i){
	Math.ceil(Math.random()*i);
}
const typeDice = [4,6,8,10,12,20];
var rolar = document.getElementById('rolar');
rolar.addEventListener('click', function(){
	let html = document.getElementById('resultado');
	let resultT = '';
	let resultN = 0;
	let numDices = [document.getElementById('quantidadeD4').value,
				document.getElementById('quantidadeD6').value,
				document.getElementById('quantidadeD8').value,
				document.getElementById('quantidadeD10').value,
				document.getElementById('quantidadeD12').value,
				document.getElementById('quantidadeD20').value];
	for(let i=0; i<numDices.length;i++){
		if(numDices[i]!=0){
			resultT = resultT+'<p>D'+(typeDice[i])+': '
			for (let j=0; j<numDices[i]; j++){
				let temp = Math.ceil(Math.random()*typeDice[i]);
				resultN += temp;
				resultT = resultT+temp+' + ';
			}
			resultT = resultT.substring(0,resultT.length-2)+'</p>';
		}
	}
	resultT = resultT+'<p>Total: '+resultN+'</p>';
	html.innerHTML = resultT;
	document.getElementById('recipienteResultados').classList.remove('oculto');
});