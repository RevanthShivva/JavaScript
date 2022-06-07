function add3Numbers(a,b,c){
    return a+b+c;
}

function callAnotherFunc(func){
    var sum = func(1,2,3);
    return sum;
}

var final = callAnotherFunc(add3Numbers);
document.write("The sum of three numbers is: " + final);