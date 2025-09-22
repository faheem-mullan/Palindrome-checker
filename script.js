const textInput=document.getElementById("text-input");
const checkButton=document.getElementById("check-btn");


  const same=()=>{
     const value=textInput.value;
     const result = document.getElementById("result");
    if (value === "" || value.trim() === "") { alert("Please input a value"); return; }
    const lowercase=value.toLowerCase();
    const aftervalue = lowercase.replace(/[^a-z0-9]/gi, "");
    const reversed = aftervalue.split("").reverse().join("");
    if(aftervalue === reversed){
      
      result.innerText=value + ' is a palindrome';
    }else{
  

     result.innerText=value + ' is not a palindrome';
    }
  }

checkButton.addEventListener("click", same);
