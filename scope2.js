var teacher = "Sanket"; // global
function fun() {
    var teacher = "Pulkit"; // fun
    content = "JS"; // auto global
    console.log(teacher);
    console.log(content);
}
function gun() {
    var student = "Sarthak"; //gun
    console.log(student); 
}
// console.log(content);
fun();
gun();
console.log(teacher);
console.log(content);

