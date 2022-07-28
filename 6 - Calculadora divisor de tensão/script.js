function calcula() {
	const valorVin = Number(document.querySelector(".valTensaoIn").value);
	const porcVout = Number(document.querySelector(".valTensaoOut").value);
	const valorR1 = Number(document.querySelector(".valResist1").value);

	if ((valorVin >= -24) && (valorVin <= 24) && (porcVout > 0) && (porcVout <= 50)) {
		const valorVout = valorVin - (porcVout/100 * valorVin);
		const valorR2 = valorR1 * valorVout / (valorVin - valorVout);
		document.querySelector(".valResist2").textContent = `O valor do resistor R2 deve ser: ${valorR2.toFixed(2)} Ohms.`;
	}
	else {
		document.querySelector(".valResist2").textContent = `Valores incorretos.`;
	}
}

document.querySelector(".btnCalcular").addEventListener('click', calcula);
