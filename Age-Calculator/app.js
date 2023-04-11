getAge();

function getAge(){
    let userinput = document.querySelector("#dob");
    userinput.value = new Date();
    console.log(userinput.value);
    userinput.addEventListener("change", (e)=>{
        // e.target.value;
        dob = new Date(e.target.value);

        if(dob > new Date()){
            alert("please enter valid dob");
            document.querySelector("#years").innerHTML = "";
            document.querySelector("#months").innerHTML = "";
            document.querySelector("#days").innerHTML = "";
            return;
        }
        let actualdate = new Date(new Date()-dob);
        calcAge(actualdate);
    })
}


function calcAge(actualdate){
    let year = actualdate.getFullYear()-1970;
    let month = actualdate.getMonth();
    let days = actualdate.getDay();
    displayAge(year,month, days);
}

function displayAge(year,month, days){
    document.querySelector("#years").innerHTML = year;
    document.querySelector("#months").innerHTML = month
    document.querySelector("#days").innerHTML = days
}