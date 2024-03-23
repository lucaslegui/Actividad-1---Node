//suma
function suma (a, b) {
    return a + b;
}

//division
function division (a, b) {
    if (b === 0) {
        return 'Error: No se puede divir por 0, reintente de nuevo dentro de los proximos 2 días hábiles.';
    }
    return a / b;
}

//valor maximo
function maximoValor(arr) {
    return Math.max(...arr);
}

//logs
console.log(suma(5, 10));
console.log(division(20, 2));
console.log(division(20, 0)); 
console.log(maximoValor([2, 8, 9, 7, 5, 6]));