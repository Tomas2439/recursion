# The Odin Project - Recursion 🌀

Este repositorio contiene las soluciones para el proyecto [Recursion](https://www.theodinproject.com/lessons/javascript-recursion) del currículo de JavaScript de The Odin Project.

El objetivo principal de este proyecto es poner en práctica el concepto de **recursión** (funciones que se llaman a sí mismas) y entender cómo puede utilizarse para resolver problemas complejos dividiéndolos en subproblemas más pequeños.

## 📝 Ejercicios Incluidos

### 1. Secuencia de Fibonacci (`fibonacci.js`)
La sucesión de Fibonacci es una serie de números en la que cada número es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8...).
* **`fibs(n)`**: Resuelve el problema utilizando iteración tradicional (un bucle `for`).
* **`fibsRec(n)`**: Resuelve el mismo problema utilizando recursión.

### 2. Merge Sort (`mergeSort.js`)
Merge Sort es un algoritmo de ordenamiento clásico que utiliza el enfoque "Divide y Vencerás" (Divide and Conquer). 
* **`mergeSort(arr)`**: Toma un array desordenado, lo divide recursivamente por la mitad hasta que quedan arrays de un solo elemento, y luego los vuelve a juntar (merge) en orden.

## 🚀 Cómo probar el código

Tienes dos formas de ejecutar y probar este proyecto:

### Opción 1: Visualizador Web UI (Recomendado ✨)
Para una experiencia más interactiva, he creado un visualizador gráfico.
1. Abre el archivo `index.html` en tu navegador web preferido.
2. Ingresa un número en la tarjeta de Fibonacci para generar la secuencia con animaciones.
3. Ingresa una lista de números separados por comas en la tarjeta de Merge Sort para ver cómo se ordenan.

### Opción 2: Usar Node.js en la terminal
Si prefieres ver la salida pura por consola, puedes usar Node.js:
1. Clona este repositorio o descarga los archivos.
2. Abre tu terminal en la carpeta del proyecto.
3. Ejecuta los siguientes comandos:

```bash
# Para probar Fibonacci:
node fibonacci.js

# Para probar Merge Sort:
node mergeSort.js
```

## 🛠️ Tecnologías y Conceptos Aprendidos
- **Vanilla JavaScript** (ES6+)
- **HTML5 & CSS3** (Para la interfaz visual)
- **Recursión** (Casos base y llamadas recursivas)
- **Algoritmos de Ordenamiento** (Merge Sort)
- **Divide y Vencerás** (Divide and Conquer)
