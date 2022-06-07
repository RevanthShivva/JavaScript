

function getData(uId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           
            document.write("Fetched the data!");
            
            const error=false;
            if(!error){
                resolve("skc@gmail.com");
            }
            else{
                reject('Error');
            }
           
        },4000);
    }
    );
}

async function init(){
    var email = await getData("skc");
   
    document.write ("<br>");
    document.write("\nEmail id of the user id is: " + email );
   
}

init();