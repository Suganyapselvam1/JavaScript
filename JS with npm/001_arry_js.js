//--------------------------------
var a=[1,2,3,4,5]
console.log(a.toString()); // 1,2,3,4,5
//--------------------------------
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);
console.log(citrus)//[ "Lemon", "Apple", "Mango"]
console.log(fruits)// ["Banana", "Orange", "Lemon", "Apple", "Mango"]
//--------------------------------
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus)//["Orange", "Lemon"]
console.log(fruits)//["Banana", "Orange", "Lemon", "Apple", "Mango"]
//--------------------------------
var str="sugu";
console.log(str.length)//4
//--------------------------------
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var mychildren=myGirls.concat(myBoys);
mychildren=mychildren.concat("sugu");
console.log(mychildren);//
//--------------------------------
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var cirtus=fruits.slice(1);
var cirtus1=fruits.slice(3);
console.log(cirtus);
console.log(cirtus1);
console.log(fruits);
//..........................................
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
var num=[1,2,3,4,5];
console.log(num.toString());
//..........................................
var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.sort());        // First sort the elements of fruits
console.log(fruits1.reverse());  
//.........................................
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
//.........................................
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
//......................................
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});
//......................................
//the Fishers yates Method
var points = [40, 100, 1, 5, 25, 10];
for (i = points.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = points[i]
    points[i] = points[j]
    points[j] = k
  }
  //.................................
  var points = [40, 100, 1, 5, 25, 10];
  function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }
  console.log(myArrayMax(points))//100
  //.................................
  var points = [40, 100, 1, 5, 25, 10];
  function myArrayMax(arr) {
    return Math.min.apply(null, arr);
  }
  //...............................
  var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  //.......................
  var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
function myFunction(value, index, array) {
    txt = txt + value + "<br>"; 
  }
  //........................
  var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
//.....................................
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.filter(myFunction);

function myFunction(value, index, array) {
  return value >18;
}
//...........................
var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction);
function myFunction(total, value, index, array) {
    return total + value;
  }
  //...........................
  var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
//...............................
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
//.....................
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
//.....................
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
//.....................
//.....................
//.....................

  