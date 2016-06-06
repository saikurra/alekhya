
   function init() 

{
   var myButton = document.getElementById("btnanswer");

   myButton.onclick = getAnswer;




}

 onload = init;

function getAnswer()

{

   var secretname = "Julianne Moore";

   var mytextbox = document.getElementById("txtname");

   var name = mytextbox.value;

   var msg = document.getElementById("message");


   if(name.match(secretname)) {

        msg.innerHTML = "correct";

    }
     else {
        msg.innerHTML = "Close, try again!";
    }

}

      
