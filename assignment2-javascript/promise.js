function getData(uId) {
    setTimeout(() => {
    document.write("Fetched the data!");
    return "skc@gmail.com";
    
    }, 4000);
    }

function abc(){
    setTimeout(()=>{
       
        console.log("Email id of the user id is: " + email);
        console.log("end");
    },5000);
}
document.write("start");
var email = getData("skc");

abc();

    