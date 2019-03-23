function eval()
{
    var form = document.forms["quiz"];

    var ans = ["1", "1", "0", "1", "1"];
    
    var q1,q2,q3,q4,q5,length;

    
    for(i=0; i<2; i++){
        if(form["q1"][i].checked)
            q1 = form["q1"][i].value;

        if(form["q2"][i].checked)
            q2 = form["q2"][i].value;

        if(form["q3"][i].checked)
            q3 = form["q3"][i].value;

        if(form["q4"][i].checked)
            q4 = form["q4"][i].value;

 		if(form["q5"][i].checked)
			q5 = form["q5"][i].value;
    }
    var score = 0;
    if(q1 == ans[0])
    {
        score++;
    }

    if(q2 == ans[1])
    {
        score++;
    }

    if(q3 == ans[2])
    {
        score++;
    }

    if(q4 == ans[3])
    {
        score++;
    }

    if(q5 == ans[4])
    {
        score++;
    }

    var output = "Your score is " + score + "\n";
    document.getElementById("score").innerHTML = output
    document.getElementById("ans").innerHTML = "COREECT ANSWERS <br> 1>True <br> 2>True <br> 3>False <br> 4>True <br> 5>True <br>"
}