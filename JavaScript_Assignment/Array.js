function uniqueElements(inputArray){
    var uniqueArray =[];
    for (var i =0; i<inputArray.length; i++){
        var isUnique= true;
        for (var j = 0; j < uniqueArray.length; j++) {
            if (inputArray[i] === uniqueArray[j]) {
              isUnique = false;
              break;
            }
        }
        if (isUnique) {
            uniqueArray.push(inputArray[i]);
          }
        
        }
        return uniqueArray;

    
}
var inputArray = [1, 1,  4, 2, 4, 6, 1, 7, 8, 9, 9];
var resultArray = uniqueElements(inputArray);
console.log(resultArray);