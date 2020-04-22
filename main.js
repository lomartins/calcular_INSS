function calcTaxa() {
	var inErro = false;
	var valor = 0;
	var taxa;
	var faixaAnterior;
	const salario = document.getElementById('salario-input').value;
	if (salario == '') return alert('Por favor insira um número');
	salario.split('').map((char) => {
		if (!(char >= '0' && char <= '9') && !inErro) {
			inErro = true;
			alert('Por favor insira um valor em numérico valido');
			return;
		}
	});

	if (salario <= 1045) {
		valor += salario * 0.075;
	}else{
		valor += 1045 * 0.075;
		faixaAnterior = 1045;
		if(salario <= 2089.60) valor += (salario - faixaAnterior) * 0.09;
		else{
			valor += (2089.60 - faixaAnterior) * 0.09;
			faixaAnterior = 2089.60;
			if (salario <= 3134.40) valor += (salario - faixaAnterior) * 0.12;
			else{
				valor += (3134.40 - faixaAnterior) * 0.12;
				faixaAnterior = 3134.40;
				if (salario <= 6101.06) valor += (salario - faixaAnterior) * 0.14;
				else{
					valor += (6101.06 - faixaAnterior) * 0.14;
				}
			}
		}
	}
	taxa = (valor / salario)*100;
	document.getElementById('taxa-output').value = taxa.toFixed(2) + "%";
	document.getElementById('valor-output').value = valor.toFixed(2);
}