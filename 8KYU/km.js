//instructions

//my answer

function converter(mpg) {
   
    let litersPerGallon = 4.54609188; // Liters in one Imperial gallon
    let kilometersPerMile = 1.609344; // Kilometers in one mile
  
    // Calculate kilometers per liter
    let kpl = (mpg * kilometersPerMile) / litersPerGallon;
  
    // Round to 2 decimal places for precision
    return kpl;
  }