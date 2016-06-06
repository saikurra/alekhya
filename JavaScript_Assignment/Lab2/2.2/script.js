function checkResults() {
    var count= 0;
    var answers = ["2", "1", "2", "2"];
    if(checkAnswer("q1", answers[0])){
        count++;
    }
    if(checkAnswer("q2", answers[1])){
        count++;
    }
    if(checkAnswer("q3", answers[2])){
        count++;
    }
    if(checkAnswer("q4", answers[3])){
        count++;
    }
    var results = document.getElementById("results");
    results.innerHTML = "Number of Correct Answers: "+count;
    var answers = document.getElementById("answers");
    answers.innerHTML = "Correct Answers are:  1. Jefferson City , 2.Abraham Lincoln, 3.1939, 4.Aug 15th";
}


function  checkAnswer(feild, answer){
    var result = false;
    var values = document.getElementsByName(feild);
    for (var i = 0, length = values.length; i < length; i++) {
        if (values[i].checked) {
            var selectedValue = values[i].value;
            if(selectedValue.match(answer)){
                return true;
            }
        }
    } 
}