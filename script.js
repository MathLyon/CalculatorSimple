document.getElementById('calcularBtn').addEventListener('click', function() {
    // Pegando os valores dos campos de entrada
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    // Verificando se os valores são números
    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, insira números válidos.');
    } else {
        // Somando os valores
        var resultado = numero1 + numero2;

        // Exibindo o resultado em um alert
        alert('O resultado da soma é: ' + resultado);
    }
});