// Question 1:
// Take a number from a user and write a function which checks whether the number is even or
// odd. Assign the result to a variable and log that variable in the console.
// Example Input: 23
// Output: The number entered is 23 and Number is odd

var num = prompt("Enter a number:");
if(num%2==0 && num !=0)
{
    console.log('The number entered is ' +num+' and number is even.');
}
else if (num%2 !=0 && num !=0) 
{
    console.log('The number entered is ' + num + ' and number is odd.');    
}