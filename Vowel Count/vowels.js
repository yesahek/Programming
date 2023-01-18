console.log(getCount('aeiou'));
function getCount(str) {
     var count = 0;
    str = str.toLowerCase();
    for (var i = 0; i<=str.length; i++){
     if( onByOne(str[i])){
         count = count + 1;
     }

    }
  return count;
}

function onByOne(char){
    vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i<=4; i++){
        if(char == vowels[i]){
            return true;
        }
    }
}