(function(){

  "use strict";

  // Setup click event on first form submit button found in document
  var form = document.querySelector('#FormConvertor');

  // Setup form elements in global scope as will want to reference them
  var formButton = document.querySelector('#FormSubmit');
  var formInput = document.querySelector('#toConvert');

  formButton.addEventListener('click', function(e) {
      e.preventDefault();
      var formData = formInput.value;
      var romanNumeral = arabicToRoman(formData);
      updateForm(romanNumeral);
  }, false);

  function updateForm(data){
    form.innerHTML = form.innerHTML + '<p>New date: ' + data +'</p>';
  }

  function arabicToRoman(num){

    // Array of roman numerals and corresponding arabic
    var numeralArray = ['1000','M','900','CM','500','D','400','CD','100','C','90','XC','50','L','40','XL','10','X','9','IX','5','V','4','IV','1','I'];

    // Grab number to convert
    var toConvert = num;

    // Setup a variable to add numerals to
    var romanDate = '';

    // Check year is valid
    if (toConvert >= 1 && toConvert <= 3999){

      for (var i = 0; i <= numeralArray.length; i++) {

        console.log('Value of i: ' + i);
        console.log('Initial value:' + toConvert);
        console.log('Current array item: ' + numeralArray[i]);

        while (toConvert >= numeralArray[i]) {
            console.log('Array item:' + numeralArray[i + 1]);

            // Add one to array index to get numeral
            romanDate += numeralArray[i + 1];
            console.log('Date: ' + romanDate);

            // As per paper workouts, need to remove last pass from original date.
            toConvert -= numeralArray[i];

            // Console log results for testing.
            console.log('Updated number:' + toConvert);
        }
      }
    } else {
      return 'Please enter a value between 1 and 3999'
    }
    return romanDate;
  }

  //arabicToRoman(2015);
  //arabicToRoman(1999);

})();
