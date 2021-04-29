/**
 * Object basic
 * 
 * In real life, a car is an object.
 * A car has properties like weight and color, and methods like start and stop:
 * 
 * All cars have the same properties, but the property values differ from car to car.
 * All cars have the same methods, but the methods are performed at different times.
 * 
*/

var car = {
    type:"Fiat",
    model:"500",
    color:"white"
};





/**
 * Accessing Object Properties with Dot Notation
 * 
 * There are two ways to access the properties of an object: dot notation (.) and 
 * bracket notation ([]), similar to an array.
 * 
 * 
 * Dot notation is what you use when you know the name of the property you're 
 * trying to access ahead of time.
 * 
 * 
 * Here is a sample of using dot notation (.) to read an object's property:
 */

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  
  var hatValue = testObj.hat;   
  console.log(hatValue);    //to check the output            
  
  var shirtValue = testObj.shirt;   
  console.log(shirtValue);  //to check the output




/**
 * Accessing Object Properties with Bracket Notation
 * 
 * 
 * The second way to access the properties of an object is bracket notation ([]).
 *  If the property of the object you are trying to access has a space in its name,
 *  you will need to use bracket notation.
 * 
 * 
 * However, you can still use bracket notation on object properties without spaces.
 * 
 * 
 * Here is a sample of using bracket notation to read an object's property:
 */

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  
  var entreeValue = testObj["an entree"]; 
  console.log(entreeValue); 

  var drinkValue = testObj["the drink"];    
  console.log(drinkValue);

/**
 * Another use of bracket notation on objects is to access a property
 *  which is stored as the value of a variable. 
 * 
 * 
 * This can be very useful for iterating through an object's properties or
 *  when accessing a lookup table.
 */
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  
  var playerNumber = 16;       // Change this line
  console.log(playerNumber);

  var player = testObj[playerNumber];   // Change this line
  console.log(player);


/**
 * Updating Object properties
 */
  // Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line

  myDog.friends = ["Happy Coder"] //updating property value

  //console.log(myDog.friends);

/**
 * Add New Properties to an Object
 */

 var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog['bark'] = "woof!";

  test = myDog;

  console.log(test)
  

/**
 * Delete Properties from object
 */
 var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };

//To delete tails properties from myDog object
delete myDog.tails;

console.log(myDog) 


/**
 * Using Objects for Lookups
 * 
 * Objects can be thought of as a key/value storage, like a dictionary.
 * If you have tabular data, you can use an object to lookup values rather 
 * than a switch statement or an if/else chain. This is most useful when you
 * know that your input data is limited to a certain range.
 */

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };

    result = lookup[val];
  
//     switch(val) {
//       case "alpha":
//         result = "Adams";
//         break;
//       case "bravo":
//         result = "Boston";
//         break;
//       case "charlie":
//         result = "Chicago";
//         break;
//       case "delta":
//         result = "Denver";
//         break;
//       case "echo":
//         result = "Easy";
//         break;
//       case "foxtrot":
//         result = "Frank";
//     }
    return result;
   }
  
  console.log(phoneticLookup("charlie"));

/**
 * Testing object for properties
*/

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh",
};

function checkObj(checkProp){
    //code here 
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObj("gift")); //show output pony

console.log(checkObj("hello")); // show output not found

//To understand this logic very basic example 
var x = {
    y: 10
};

console.log(x.hasOwnProperty("y")); //true
console.log(x.hasOwnProperty("z")); //false




/**
 * Manipulating Complex Objects
 * 
 * Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data.
 * 
 * They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
 */

// var myMusic = [
//     {
//       "artist": "Billy Joel",
//       "title": "Piano Man",
//       "release_year": 1973,
//       "formats": [
//         "CD",
//         "8T",
//         "LP"
//       ],
//       "gold": true
//     }
//   ];




/**
 * Accessing Nested Objects
 * 
 * The sub-properties of objects can be accessed by chaining together the dot or 
 * bracket notation.
 * 
 */

var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  //var gloveBoxContents = undefined;
  var gloveBoxContents = myStorage.car.inside["glove box"];

  console.log(gloveBoxContents);

  /**
   * Access Nested Arrays
   * 
   * As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation
   *  can be chained to access nested arrays.
   */
   var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
 //var secondTree = "";

 var secondTree = myPlants[0].list[1];

 console.log(secondTree);
  

//Record Collection
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: [
          'Let It Rock', 
          'You Give Love a Bad Name'
        ]
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: [
          '1999', 
          'Little Red Corvette'
        ]
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
      if(value === ""){
          delete collection[id][prop];
      }else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value); 
      }else{
        collection[id][prop] = value;
      }
    return records;
  }
  
  console.log(updateRecords(collection, 5439, 'artist', 'ABBA'));

  