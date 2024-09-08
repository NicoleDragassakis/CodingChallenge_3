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

//Task 2 Determine Preformance Rating

function determinePreformanceRating(averageSales){
    let preformanceRating;
    if (averageSales > 10000.00 ) return "Excellent";
    else if (averageSales >= 7000.00 && averageSales <= 10000.00) return "Good";
    else if (averageSales >= 4000.00 && averageSales <= 70000.00) return "Satisfactory";
    else if (averageSales < 4000.00)  return "Needs Improvement";

}
let averageSalesFrank = (calculateAverageSales(salesFiguresFrank)); //define averageSales for frank
console.log("Preformace Rating, Frank:", determinePreformanceRating(averageSalesFrank)); //outputs Needs improvement

//Task 3 Develop findTopAndbottomPreformers function

//This is to first find the total sales for each sales person
    let salesFiguresOlivia = [2000.00,300.00,40.00,5000.00,60.00]
    let salesFiguresJohn = [1000.00,3000.00,200.00,50.00,600.00]
    let salesFiguresDavid  = [2000.00,10.00,4000.00,5000.00,60.00]
function toFindTotalSales(salesFigures){
    let totalSales = salesFigures.reduce((total, sale) => total + sale); // sums the array 
return totalSales;
}
console.log("Total Sales, Frank:", toFindTotalSales(salesFiguresFrank));
console.log("Total Sales, Maddy:",toFindTotalSales(salesFiguresMaddy));
console.log("Total Sales, Olivia:",toFindTotalSales(salesFiguresOlivia));
console.log("Total Sales, John:",toFindTotalSales(salesFiguresJohn));
console.log("Total Sales, David:",toFindTotalSales(salesFiguresDavid));
//outputs: Total Sales, Frank: 200 Total Sales, Maddy:140 Total Sales, Olivia: 7400 Total Sales, John:4850 Total Sales,David: 11070

//logging salespersons
const salesPeople = [
    {employee:"Frank",totalSales: toFindTotalSales(salesFiguresFrank)},
    {employee:"Maddy", totalSales: toFindTotalSales(salesFiguresMaddy)},
    {employee:"Olivia",totalSales: toFindTotalSales(salesFiguresOlivia)},
    {employee:"John", totalSales: toFindTotalSales(salesFiguresJohn)},
    {employeee:"David", totalSales: toFindTotalSales(salesFiguresDavid)}
];

function findTopAndBottomPerformers(salesPeople){
   const maxSales = Math.max(...salesPeople.map(people => people.totalSales)); //find max sales
const minSales = Math.min(...salesPeople.map(people => people.totalSales)); //find min sales

let topPerformer = salesPeople.find(people => people.totalSales === maxSales); //finds the salesPerson with the max sales
let bottomPerformer = salesPeople.find(people => people.totalSales === minSales); // finds the salesPerson with the min sales

return { topPerformer, bottomPerformer };
}

let{topPerformer, bottomPerformer } = findTopAndBottomPerformers(salesPeople); //calls on the function
console.log("Top Performer:", topPerformer); //outputs david as the top performer with 11070 total sales
console.log("Bottom Performer:",bottomPerformer);// outputs Maddy as the bottom performer with 140 total sales


