/*
You are managing a sales department for your company, you want to reward your employees based on
the sales made by them during the year.
The criteria is as follows:
1. Sales from 0-5000 : 2%
2. Sales from 5001 - 10000 : 5%
3. Sales from 10001 - 20000 : 7%
4. Above 20000 - 10%
Then log the total commission earned by him.
*/

function commiss()
{
    sales = document.getElementById("sales").value;
if(sales>0 && sales<=5000)
{
    reward=0.02*sales;
}

else if(sales>5000 && sales<=10000)
{
    reward=0.05*sales;
}

else if(sales>10000 && sales<=20000)
{
    reward=0.07*sales;
}

else if(sales >20000)
{
    reward=0.1*sales;
}
document.getElementById("result").innerHTML = reward;
}
