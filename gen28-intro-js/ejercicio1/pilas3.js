
// 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta.
// Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
// Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

const caminoDeIda = ['Pueblo Origen', 'Pueblo 1', 'Pueblo 2', 'Destino'];

const caminoDeVuelta = [];

for (let i = caminoDeIda.length - 1; i >= 0; i--) {
	const valorDelIndex = caminoDeIda[i]

	caminoDeVuelta.push(valorDelIndex)

}

console.log('Camino de ida: ' + caminoDeIda)
console.log('Camino de regreso: ' + caminoDeVuelta)
