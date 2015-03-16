// JS conversion of arabic to Roman Numerals
//
// Taken from http://en.wikipedia.org/wiki/Roman_numerals
//
// I : 1
// V : 5
// X : 10
// L : 50
// C : 100
// D : 500
// M : 1,000

// Also we need to know:
//
// IV : 4
// IX : 9
// XL : 40
// XC : 90
// CD : 400
// CM : 900

// Rule: Only convert between 1 & 3999

function arabicToRoman(num){

  // Array of roman numerals and corresponding arabic
  var numeralArray = ['1','I', '5','V', '10','X', '50','L', '100','C', '500','D', '1000','M'];

  // Grab number to convert
  var toConvert = num;



  for (var i = 0; i < numeralArray.length; i++) {
    if (toConvert > 1 && toConvert < 3999){

    } else {
      return 'Please enter a value between 1 and 3999'
    }
  }

  return toConvert;

}

console.log(arabicToRoman(2015));
