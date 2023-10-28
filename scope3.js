// var teacher = "Sanket"; // global scope
// function ask(question) { // global scope
// 	console.log(teacher, question); 
// }

// function fun() {  // global scope
// 	var teacher = "Pulkit"; // fun scope
// 	ask("why?");
// }
// fun();

var fun;
function fun() {
    return 'fun2';
}

console.log(fun);