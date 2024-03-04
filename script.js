function calculateHypotenuse() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);

    if (isNaN(sideA) || isNaN(sideB)) {
        document.getElementById('result').innerHTML = "Lütfen geçerli sayıları girin.";
    } else {
        var hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
        document.getElementById('result').innerHTML = "Üçgenin hipotenüsü: " + hypotenuse.toFixed(2);
    }
}
