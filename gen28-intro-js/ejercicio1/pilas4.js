//  4.- Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar. 

const pila = [];

function agregarContenedor(contenedor) {
	pila.push(contenedor);
}

function retirarContenedor(identificacion) {
	const pilaAuxiliar = [];

	while (pila.length > 0 && pila[pila.length - 1].identificacion !== identificacion) {
		pilaAuxiliar.push(pila.pop());
	}

	if (pila.length > 0) {
		const contenedor = pila.pop();
		console.log(`Retirando el contenedor con identificación ${contenedor.identificacion}`);
	  } else {
		console.log(`No se encontró el contenedor con identificación ${identificacion}`);
		return;
	  }

	while (pilaAuxiliar.length > 0) {
		agregarContenedor(pilaAuxiliar.pop());
	}
}

function mostrarPila() {
	console.log('Pila:', pila);
}


agregarContenedor({ identificacion: 1 });
agregarContenedor({ identificacion: 2 });
agregarContenedor({ identificacion: 3 });
agregarContenedor({ identificacion: 4 });
agregarContenedor({ identificacion: 5 });
agregarContenedor({ identificacion: 6 });
agregarContenedor({ identificacion: 7 });
agregarContenedor({ identificacion: 8 });

mostrarPila();
retirarContenedor(4);
mostrarPila();