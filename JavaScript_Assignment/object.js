function mergeCars(car1, car2) {
    // Create a new object to store the merged properties
    var mergedCar = {};
  
    // Copy properties from the first car
    for (var prop in car1) {
      if (car1.hasOwnProperty(prop)) {
        mergedCar[prop] = car1[prop];
      }
    }
  
    // Copy properties from the second car, overriding any existing properties
    for (var prop in car2) {
      if (car2.hasOwnProperty(prop)) {
        mergedCar[prop] = car2[prop];
      }
    }
  
    return mergedCar;
  }
  
  // Example 
  var car1 = {
    brand: "Hundai",
    model: "i20",
    year: 2021
  };
  
  var car2 = {
    model: "venue",
    color: "white"
  };
  
  // Merge the two cars
  var mergedCar = mergeCars(car1, car2);
  console.log(mergedCar);
  