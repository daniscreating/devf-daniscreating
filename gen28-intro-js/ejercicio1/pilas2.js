
// 2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
// Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,6,8,1,7]

function reemplazar(pila, nuevo, viejo) {
	 let encontrado = false;

	 for (let i = 0;  i < pila.length; i++) {
		if (!encontrado && pila[i] === viejo) {
			pila[i] = nuevo;
			encontrado = true;
		} else if (encontrado) {
			pila.pop(); // Elimina los elementos más nuevos si ya se hizo el reemplazo.
			i--;
		}
	 }
	return pila; 
}

const entrada = [6, 9, 4, 0, 1, 5, 2, 6, 5, 7, 2, 3, 1];
const nuevoValor = 7;
const valorViejo = 1;

const resultado = reemplazar(entrada, nuevoValor, valorViejo);
console.log(resultado); 

