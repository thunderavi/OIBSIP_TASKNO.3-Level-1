document.getElementById('convert').addEventListener('click', function() {
    // Get input value and selected unit
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const selectedUnit = document.getElementById('unit').value;
    
    // Check if the input is a valid number
    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    // Perform temperature conversion
    let result;
    switch (selectedUnit) {
        case 'celsius':
            result = {
                celsius: temperatureInput,
                fahrenheit: (temperatureInput * 9/5) + 32,
                kelvin: temperatureInput + 273.15
            };
            break;
        case 'fahrenheit':
            result = {
                celsius: (temperatureInput - 32) * 5/9,
                fahrenheit: temperatureInput,
                kelvin: (temperatureInput - 32) * 5/9 + 273.15
            };
            break;
        case 'kelvin':
            result = {
                celsius: temperatureInput - 273.15,
                fahrenheit: (temperatureInput - 273.15) * 9/5 + 32,
                kelvin: temperatureInput
            };
            break;
    }

    // Display the result
    document.getElementById('result').innerHTML = `
        ${result.celsius.toFixed(2)} °C<br>
        ${result.fahrenheit.toFixed(2)} °F<br>
        ${result.kelvin.toFixed(2)} K`;
});
