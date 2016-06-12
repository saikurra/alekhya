function calculate(){
   var base = document.getElementById("base").value;
   var exp = document.getElementById("exp").value;
   var resultValue = Math.pow(base,exp);
   var calculationText= "";
   var result = document.getElementById("result");
   result.innerHTML = resultValue;
       
   var calculation = document.getElementById("calculation");
   for (var i=0, len = exp; i<len; i++){
       calculationText = calculationText+base;
       if(i < len-1){
           calculationText =calculationText+"*";
       }
   }
   calculation.innerHTML = base+exp.sup()+"="+calculationText+"="+resultValue;
    
}

function resetValues(){
   document.getElementById("myForm").reset();
   var result = document.getElementById("result");
   result.innerHTML = "";   
   var calculation = document.getElementById("calculation");
   calculation.innerHTML = "";
    
}