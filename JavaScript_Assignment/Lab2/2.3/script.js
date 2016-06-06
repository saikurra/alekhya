function calculator() {
    var values = document.getElementById("mylist");
    var operationCode = values.options[values.selectedIndex].value;
    var txtname1 = document.getElementById("txtname1");
    var txtname2 = document.getElementById("txtname2");
    var calculatedValue;
    var a= parseInt(txtname1.value);
    var b= parseInt(txtname2.value);   
    if(operationCode.match("1")){
        calculatedValue = a+b;
    }
    if(operationCode.match("2")){
        calculatedValue = a-b;
    }
    if(operationCode.match("3")){
        calculatedValue = a*b;
    }
    
    var message = document.getElementById("message");
    message.innerHTML = "Result :" +calculatedValue;
}