

window.onload =()=>{
    print();
}

function print(){
    if (sessionStorage.sessioncount == undefined) {
        sessionStorage.sessioncount = 0;
      }
      if (localStorage.localcount == undefined) {
        localStorage.localcount = 0;
      }
    document.querySelector("#display").innerHTML
       =`Local Score : ${localStorage.localcount} Session Score: ${sessionStorage.sessioncount}`;

}

function increaseLocal(){
   var s= localStorage.getItem("localcount");
   var s1 = parseInt(s);
   s1=s1+1;
   localStorage.setItem("localcount",s1);
   print();
}

function increaseSession(){
    var s= sessionStorage.getItem("sessioncount");
    var s1 = parseInt(s);
    s1=s1+1;
    sessionStorage.setItem("sessioncount",s1);
    print();
 }