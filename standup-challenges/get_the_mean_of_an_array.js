//Get the mean of an array

/*Instructions
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1) 
*/

//array of nums, positive, whole nums
//return average

//sum all nums -> reduce
//divide sum by length of array
//return the average rounded down

function getAverage(marks){
  const average = marks.reduce((a,c) => a + c, 0) / marks.length
  return Math.floor(average)
}

//better
function getAverage(marks){
  return Math.floor(marks.reduce((a,c) => a + c, 0) / marks.length)
}