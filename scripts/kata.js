(function(){

  "use strict";

  // Setup form elements in global scope as will want to reference them
  var form = document.querySelector('#FormConvertor'),
      formButton = document.querySelector('#FormSubmit'),
      formInput = document.querySelector('#toConvert');

  // Array of roman numerals and corresponding arabic
  var numeralArray = [
        { arabic:1000, numeral:'M'},
        { arabic:900, numeral:'CM'},
        { arabic:500, numeral:'D'},
        { arabic:400, numeral:'CD'},
        { arabic:100, numeral:'C'},
        { arabic:90, numeral:'XC'},
        { arabic:50, numeral:'L'},
        { arabic:40, numeral:'XL'},
        { arabic:10, numeral:'X'},
        { arabic:9, numeral:'IX'},
        { arabic:5, numeral:'V'},
        { arabic:4, numeral:'IV'},
        { arabic:1, numeral:'I'}
      ];

  // Setup click event on first form submit button found in document

  formButton.addEventListener('click', function(e) {
      e.preventDefault();
      var formData = formInput.value;
      var romanNumeral = arabicToRoman(formData);
      updateForm(romanNumeral);
  }, false);

  function updateForm(data){
    form.insertAdjacentHTML("beforeend", '<p class="new-date">New date: ' + data +'</p>');
  }

  function arabicToRoman(num){

    // Grab number to convert
    var toConvert = parseInt(num);

    // Setup a variable to add numerals to
    var romanDate = '';

    // Check year is valid
    if (toConvert >= 1 && toConvert <= 3999){

      for (var i = 0; i <= numeralArray.length; i++) {

        var numeralArrayItem = numeralArray[i];

        // console.log('Value of i: ' + i);
        // console.log('Initial value:' + toConvert);

        while (toConvert > 0 && toConvert >= numeralArrayItem.arabic) {
          // console.log('Current array key: ' + numeralArrayItem.arabic);
          // console.log('Current array value:' + numeralArrayItem.numeral);

          romanDate += numeralArrayItem.numeral;
          // console.log('Date: ' + romanDate);

          // As per paper workouts, need to remove last pass from original date.
          toConvert -= numeralArrayItem.arabic;

          // Console log results for testing.
          // console.log('Updated number:' + toConvert);
        }
      }
      return romanDate;

    } else {
      return 'Please enter a value between 1 and 3999'
    }
  }

})();
