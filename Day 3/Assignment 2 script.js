/*
Question 2:
Write a program which will take OS name and version from the user separated by a space. Then
log the OS name and version on the console.
Input: "Android 9"
Output: The OS name is Android and version is 9
*/
var version = prompt("Enter the Version:")
var arr = version.split(" ");
console.log('The OS name is '+arr[0]+' and version is '+arr[1]+'!!');


