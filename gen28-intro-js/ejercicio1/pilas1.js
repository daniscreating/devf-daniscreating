

// 1.- Hacer una función que reciba como parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).

// Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
// Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’].

function retornar(array, numero) {
	if (numero <= 0) {
		return [];
	}

	const resultado = [];
	for (let i=0; i < array.length && i < numero; i++){
		resultado.push(array[i]);
	}
	return resultado;
}

const pila = ['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandia', 'Melón'];
const numeroElementos = 4;

const salida = retornar(pila, numeroElementos);
console.log(salida);

