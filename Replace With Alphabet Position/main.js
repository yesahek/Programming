var chk = "The sunset sets at twelve o' clock.";
console.log(alphabetPosition(chk));
function alphabetPosition(text) {
    var resArr = [];
      var resStr;
      text = text.toLowerCase();
      text = text.split(" ").join('');
      text = text.split("'").join('');
      text = text.split(".").join('');
      //console.log(text);
      for(var i = 0; i<text.length; i++){
          var temp = toNumb(text[i]);
          resArr[i] = temp;
      }
      //console.log(resArr);
      resStr = resArr.toString();
      resStr = resStr.split(",").join(' ');
    return resStr;
  }
  function toNumb(numb){
      var letter = "abcdefghijklmnopqrstuvwyz";
      for (var i = 0; i< 26; i++){
          if(numb == letter[i]){
          break;
          }
      }
      return i+1;
  }