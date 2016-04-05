// Write a function that takes a string and outputs the reverse of that string. If the string is a palindrom, console.log palindrome
// my first shotty attempt
var string = "Hello, World";

function reverse(string){
    var newString = "";
    for(var i=string.length-1;i>=0;i--){
        newString += string[i];
    }if(string[i]===newString[i]){
        console.log("palindrome");
    }
 return newString;
}

// Big Joe's way of solving - SHIT!
function returnStringInReverse(_str) {
    var _holdStr = [];
    var _count = 0;
    
    for (i=0; i<_str.length; i++) {
        if ( !isDelimitor(_str[i]) ) {
          if(_holdStr[_count] === undefined){
            _holdStr[_count] = _str[i];
          }else{
              _holdStr[_count] += _str[i];
          }
        }else {
            _count++;
        }
    }
    
    var _str = '';
    
    for(i=_holdStr.length-1; i>=0; i--){
            _str += _holdStr[i] + " ";
    }
    
    return(_str);
    
}

function isDelimitor(_char) {
    var _state = false;
    if (_char === "," ||
        _char === " " ||
        _char === "." ) {
            _state = true;
        }
    
    return _state;
}

console.log(returnStringInReverse("Now is the time for all good men to come to the aid of their country."));

// write a function that removes the space between charaters in a string without using the split method. 

// first shotty attempt
function removeSpace(string){
  var newString = [];
    for (var i=0;i<string.length;i++){
        var temp = string[i];
            if (temp == " "){
                temp = '';
                newString.push(temp);
            }else{
                newString.push(temp);
            }
      
    }
    return newString;
}
removeSpace(string);


// wrtie a function that takes a string as a parameter. The function returns the first non-repeated character in the string.
// I.e.,    morning = m
//      bathtub = a
//      wooooow = No result!
function firstNonReapeatChar(str){
    for (var i=0; i<str.length;i++){
        var c = str.charAt(i);
         if (str.indexOf(c) == i && str.indexOf(c, i + 1) == -1) {
        return c;
    }
  }
  return null;
}
var example = "FootyFoot";
firstNonReapeatChar(example);