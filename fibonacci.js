// fibonacci.js

// 1. Versión Iterativa
function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

// 2. Versión Recursiva
function fibsRec(n) {
    console.log("This was printed recursively");

    // Casos base
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    // Llamada recursiva
    const arr = fibsRec(n - 1);

    // Agregar el siguiente número de la secuencia
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

// Pruebas
console.log("Iterativo (8):", fibs(8));
console.log("\nRecursivo (8):");
console.log(fibsRec(8));