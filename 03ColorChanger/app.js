const btn = document.querySelector("#button");
btn.addEventListener("click", color );

// random color code generator 
const randomgen =  () => {
    let val = '01234567890ABCDEF';
    let hash = '#';
    for (let index = 0; index < 6; index++) {
       hash = hash+ val[Math.floor(Math.random() *16)];
        
    }
    return hash;

}

function color(){
    document.querySelector("#canvas").style.backgroundColor = randomgen();
}

l