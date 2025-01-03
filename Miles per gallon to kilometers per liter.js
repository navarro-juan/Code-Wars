
// Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Your answer should be accurate within 0.01 kpl.

// Some useful associations relevant to this kata:

// 1 Imperial Gallon = 4.54609188 litres
// 1 Mile = 1.609344 kilometres

//my Solution

  function converter(mpg) {
    // Conversion factors
    let litersPerGallon = 4.54609188; // Liters in one Imperial gallon
    let kilometersPerMile = 1.609344; // Kilometers in one mile
  
    // Calculate kilometers per liter
    let kpl = (mpg * kilometersPerMile) / litersPerGallon;
  
    // Round to 2 decimal places for precision
    return kpl;
  }
  console.log(converter(10)); // Example usage