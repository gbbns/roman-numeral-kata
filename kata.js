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
  var numeralArray = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  var arabicArray = ['1000','900','500','400','100','90','50','40','10','9','5','4','1'];

  // Grab number to convert
  var toConvert = num;

  // Setup a variable to add numerals to
  var romanDate = '';

  // Check year is valid
  if (toConvert >= 1 && toConvert <= 3999){
    for (var i = 0; i <= arabicArray.length; i++) {

      console.log('Value of i: ' + i);
      console.log('Initial value:' + toConvert);
      console.log('Current array item: ' + numeralArray[i]);

      if (toConvert >= arabicArray[i]) {
          console.log('Array item:' + numeralArray[i + 1]);

          // Add one to array index to get numeral
          romanDate = romanDate + numeralArray[i];
          console.log('Date: ' + romanDate);

          // As per paper workouts, need to remove last pass from original date.
          toConvert = toConvert - arabicArray[i];

          // Console log results for testing.
          console.log('Updated number:' + toConvert);

          i = 0;
      }
    }

  } else {
    return 'Please enter a value between 1 and 3999'
  }

  return toConvert;

}

console.log(arabicToRoman(2015));
