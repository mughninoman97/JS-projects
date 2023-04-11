
function insert(num){
  // document.form.textview.value = document.form.textview.value +num;
   document.querySelector(" .textview").value = document.querySelector(" .textview").value +num;


  }
  
  function equals(){
    console.log("ans");
   
    let res =  eval(document.querySelector(".textview").value); 
    document.querySelector(".textview").value = res;
   
    
      
  }
  
  function clean(){
    document.querySelector(".textview").value = "";
  }
  
  function back(){
    var txt = document.querySelector(".textview").value;
    // txt = txt.substr(0,-1);
    console.log(txt);
    document.querySelector(".textview").value = txt.substring(0,txt.length-1)
  
   
  }


  // class="textview" name="textview
  // function addbits(s) {
  //   var total = 0,
  //       s = s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
        
  //   while (s.length) {
  //     total += parseFloat(s.shift());
  //   }
  //   return total;
  // } 
  
  // var string = '1+23+4+5-30';
  // console.log(
  //   addbits(string)
  // )
  // var total =0;
  // let res = document.querySelector(".textreview").value;
  // res = res.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
  // while(res.length){
  //   total = total + parseInt(res.shift());
  // }
  // res.value = total;

  // 

  // let val = document.querySelector(".textview").value;
   
  // document.getElementsByClassName("textview").value = val.substr(0, val.length - 1);
  // console.log(typeof val);