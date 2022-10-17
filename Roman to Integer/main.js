function isValid(rom , ...arguments ){
    var roman = rom.join("");
    var res;
    var ts;
    ts = arguments[0];
    //console.log(ts.charAt(1));
      for(var i = 0; i <ts.length; i++){
          var ro = ts[i];
        //console.log(ro);
          for(var a = 0;  a<=roman.length; a++){
          //console.log(a);
          let given = roman[a];
      //    console.log(given );
      //   console.log("input " +given + " == roman " +ro);
              if(roman.indexOf(ro) != -1 ){
                  res = true  ;
              }else res = false  ;
          }
      } 
      return res;
    }
    
    var romanToInt = function(s) {
    let roman = {I:1, V:5 , X:10, L:50, C:100, D:500, M:1000};
    var romanLetter = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    //const romanNumber = [1, 5, 10, 50, 100, 500, 1000];
    
    
    let num = 0;
      for (let i = 0; i < s.length; i++) {
        let curr = roman[s[i]];
        let next = roman[s[i + 1]];
        (curr < next) ? (num -= curr) : (num += curr);
      }
      return num;
    };
    
    let roman= ['I','V','X','L','C','D','M'];
    
    function convert(){
    var user = prompt("Please enter Roman Number");
    alert(isValid (roman, user) ? (romanToInt(user)) : (user + " Is Not a Valid Roman number"))
    }
     
     var s = "IV";
     isValid (roman, s) ? (console.log(romanToInt(s))) : console.log(s + " Is Not a Valid Roman number");
    
    
    
    