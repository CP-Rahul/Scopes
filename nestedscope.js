function fun() { // global scope
    var x = 10; // fun scope
    function gun() {  // fun scope
        var y = 20;  // gun scope
        console.log(x); // 10
        console.log(y); // 20
    }
    gun();
    console.log(x); //10
    console.log(y); // error
}

fun();