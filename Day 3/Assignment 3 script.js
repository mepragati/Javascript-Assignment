/*Question 3:
Write a program to take marks as input from the user and grade him accordingly. Use Conditional
statements. Also the same code using switch or ternary
input: 50
Output : Marks are 50 and grade is B
*/

var marks = prompt("Enter your marks:",0);
//Using Conditional statements
if(marks>50)
{
    console.log('Marks are '+marks+' and grade is '+'A'+ '.');
}
else
{
    console.log('Marks are '+marks+' and grade is '+'B'+ '.');
}
