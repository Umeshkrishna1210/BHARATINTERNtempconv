function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let convertedTemperature = 0;

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            convertedTemperature = temperature + 273.15;
        } else if (toUnit === "rankine") {
            convertedTemperature = (temperature + 273.15) * 9/5;
        } else {
            convertedTemperature = temperature; // No conversion needed (same unit)
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            convertedTemperature = (temperature - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            convertedTemperature = (temperature - 32) * 5/9 + 273.15;
        } else if (toUnit === "rankine") {
            convertedTemperature = temperature + 459.67;
        } else {
            convertedTemperature = temperature; // No conversion needed (same unit)
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            convertedTemperature = temperature - 273.15;
        } else if (toUnit === "fahrenheit") {
            convertedTemperature = (temperature - 273.15) * 9/5 + 32;
        } else if (toUnit === "rankine") {
            convertedTemperature = temperature * 9/5;
        } else {
            convertedTemperature = temperature; // No conversion needed (same unit)
        }
    } else if (fromUnit === "rankine") {
        if (toUnit === "celsius") {
            convertedTemperature = (temperature - 491.67) * 5/9;
        } else if (toUnit === "fahrenheit") {
            convertedTemperature = temperature - 459.67;
        } else if (toUnit === "kelvin") {
            convertedTemperature = (temperature - 491.67) * 5/9 + 273.15;
        } else {
            convertedTemperature = temperature; // No conversion needed (same unit)
        }
    }

    document.getElementById("results").innerHTML = `Converted Temperature: <span>${convertedTemperature.toFixed(2)}</span> ${toUnit}`;

}
