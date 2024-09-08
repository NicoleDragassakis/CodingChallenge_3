//Task 1  Calculate Average Sales

let salesFiguresMaddy = [10,15,25,30,45,15] //array for function

function calculateAverageSales(salesFigures){
let totalSales = salesFigures.reduce((total, sale) => total + sale); // sums the array 
let averageSales = totalSales / salesFigures.length; //averages salesfigures without .length it outputs nan??
return averageSales;
}
console.log(calculateAverageSales(salesFiguresMaddy)); // outputs 23.333

let salesFiguresFrank = [20.00,30.00,40.00,50.00,60.00] //re-testing function
console.log(calculateAverageSales(salesFiguresFrank)); //outputs 34

//Determine Preformance Rating

function determinePreformanceRating(averageSales){
    let preformanceRating;
    if (averageSales > 10000.00 ) return "Excellent";
    else if (averageSales >= 7000.00 && averageSales <= 10000.00) return "Good";
    else if (averageSales >= 4000.00 && averageSales <= 70000.00) return "Satisfactory";
    else if (averageSales < 4000.00)  return "Needs Improvement";

}
let averageSalesFrank = (calculateAverageSales(salesFiguresFrank)); //define averageSales for frank
console.log("Preformace Rating:", determinePreformanceRating(averageSalesFrank)); //outputs Needs improvement
