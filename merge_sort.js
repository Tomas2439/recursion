// mergeSort.js

function mergeSort(arr) {
    // Caso base: un array de 1 o 0 elementos ya está ordenado
    if (arr.length <= 1) {
        return arr;
    }

    // Encontrar la mitad y dividir el array
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Juntar y ordenar las mitades
    return merge(left, right);
}

// Función auxiliar para juntar dos arrays ordenados
function merge(left, right) {
    const sorted = [];
    let i = 0;
    let j = 0;

    // Comparar elementos de ambas mitades
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i]);
            i++;
        } else {
            sorted.push(right[j]);
            j++;
        }
    }

    // Agregar los elementos restantes de la mitad izquierda (si los hay)
    while (i < left.length) {
        sorted.push(left[i]);
        i++;
    }

    // Agregar los elementos restantes de la mitad derecha (si los hay)
    while (j < right.length) {
        sorted.push(right[j]);
        j++;
    }

    return sorted;
}

// Ejemplos de prueba (tal cual los da The Odin Project)
console.log("Pruebas de Merge Sort:");
console.log(mergeSort([])); // []
console.log(mergeSort([73])); // [73]
console.log(mergeSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]