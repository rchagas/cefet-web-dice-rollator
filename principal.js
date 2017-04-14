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

function rollDices(){
	let numDices = document.querySelectorAll('input');
	const typeDice = [4,6,8,10,12,20];
	let resultT = '';
	let resultN = 0;
	for(let i=0; i<numDices.length;i++){
		if(numDices[i].value!=0){
			resultT +='<p>D'+(typeDice[i])+': '
			for (let j=0; j<numDices[i].value; j++){
				let temp = Math.ceil(Math.random()*typeDice[i]);
				resultN += temp;
				resultT += temp+' + ';
			}
			resultT = resultT.substring(0,resultT.length-2)+'</p>';
		}
	}
	resultT += '<p>Total: '+resultN+'</p>';
	document.getElementById('resultado').innerHTML = resultT;
	document.getElementById('recipienteResultados').classList.remove('oculto');
}

let roll = document.getElementById('rolar');
roll.addEventListener('click', rollDices);
