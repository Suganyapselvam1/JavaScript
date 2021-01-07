try {
    adddlert("Welcome guest!");
  }
  catch(err) {
    console.log(err.message);
  }
 // ...............................

 var z="";
try{
    if(z=="") throw "empty";
}
catch(err){
    console.log(err);
}
// ...............................

//Range Error
var num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
    console.log(err.name);
}
// ...............................

//Reference Error
var x;
try {
  x = y + 1;   // y cannot be referenced (used)
}
catch(err) {
    console.log(err.name);
}
// ...............................

//Syntax Error
try {
    eval("alert('Hello)");   // Missing ' will produce an error
  }
  catch(err) {
    console.log(err.name);
  }
// ...............................

//Type Error
var num = 1;
try {
  num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
    console.log(err.name)
}
// ...............................

//URI (Uniform Resource Identifier) Error
try {
    decodeURI("%%%");   // You cannot URI decode percent signs
  }
  catch(err) {
    console.log(err.name);
  }
  