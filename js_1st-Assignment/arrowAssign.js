function arrow(a,b){
    var firstChar = a[0];
    var secondChar = b[0]; 
    var final= firstChar + secondChar;
    document.write("The answer is: " + final);
}

var string1 = prompt("Enter first name : " );
var string2 = prompt("Enter Second name : " );

arrow(string1,string2);