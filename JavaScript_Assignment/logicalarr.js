function commonElements(arr1, arr2) {
    var commonArray = [];
  
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          commonArray.push(arr1[i]);
          break;
        }
      }
    }
  
    return commonArray;
  }
  
  // Example --
  var arr1 = [1, 2, 3, 4, 5];
  var arr2 = [3, 5,1, 7, 9];
  var resultArray = commonElements(arr1, arr2);
  console.log(resultArray);