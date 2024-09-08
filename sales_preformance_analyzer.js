//Task 1  Calculate Average Sales

let salesFiguresMaddy = [10,15,25,30,45,15] //array for function

function calculateAverageSales(salesFigures){
let totalSales = salesFigures.reduce((total, sale) => total + sale); // sums the array 
let averageSales = totalSales / salesFigures.length; //averages salesfigures without .length it outputs nan??
return averageSales;
}
console.log(calculateAverageSales(salesFiguresMaddy)); // outputs 23.333

let salesFiguresFrank = [10,20,30,50,60] //re-testing function
console.log(calculateAverageSales(salesFiguresFrank)); //outputs 34

