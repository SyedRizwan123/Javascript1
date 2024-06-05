//console.log("Hello");
//a=9;
//b=9.5;
//console.log(typeof(a));
//console.log(typeof(b));
//name1="Syed";
//console.log(typeof(name1));

//Bolean
//let isapprove=false;
//console.log(typeof(isapprove));
//console.log(typeof(false));
    
//strings: string should be enclosed with ' ', " ", ` `.
//wish = "Hello";
//wish1 = 'Hello';
//wish2 = `Hello`;
//console.log(typeof(wish));
//console.log(typeof(wish1));
//console.log(typeof(wish2));

//Primitive Types:
	//Undefined: if a value is not assigned to the variable then it takes undefined as its value. In js undefined refers to value not being assigned
//let age;
//console.log(age);
//console.log(typeof(age));


let counterElement = document.getElementById("counterValue");

function onIncrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  updateCounter(updatedCounterValue);
}

function onDecrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;
  updateCounter(updatedCounterValue);
}

function onReset() {
  updateCounter(0);
}

function updateCounter(value) {
  if (value > 0) {
    counterElement.style.color = "blue";
  } else if (value < 0) {
    counterElement.style.color = "red";
  } else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = value;
}

  
//To change colors we have to use conditions
/*a=10;
b=20;
if(a<b)
{
    console.log("a is lessthan b");

}
else{
    console.log("b is greter than a");
}*/