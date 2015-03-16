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
  //var numeralArray = ['1','I','5','V','10','X','50','L','100','C','500','D','1000','M'];
  var numeralArray = ['1000','M','900','CM','500','D','400','CD','100','C','90','XC','50','L','40','XL','10','X','9','IX','5','V','4','IV','1','I'];
  // Grab number to convert
  var toConvert = num;

  // Setup a variable to add numerals to
  var romanDate = '';

  if (toConvert >= 1 && toConvert <= 3999){
    for (var i = 0; i <= numeralArray.length; i++) {

      console.log('Value of i: ' + i);
      console.log('Initial value:' + toConvert);
      console.log('Current array item: ' + numeralArray[i]);

      if (toConvert >= numeralArray[i]) {
          console.log('Array item:' + numeralArray[i + 1]);

          // Add one to array index to get numeral
          romanDate += numeralArray[i + 1];
          console.log('Date: ' + romanDate);

          // As per paper workouts, need to remove last pass from original date.
          toConvert = toConvert - numeralArray[i];

          // Console log results for testing.
          console.log('Updated number:' + toConvert);
      }
    }

  } else {
    return 'Please enter a value between 1 and 3999'
  }

  return toConvert;

}

console.log(arabicToRoman(2015));
