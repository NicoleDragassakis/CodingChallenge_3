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

//Task 2 Determine Performance Rating

function determinePerformanceRating(averageSales){
    let performanceRating;
    if (averageSales > 10000.00 ) return "Excellent";
    else if (averageSales >= 7000.00 && averageSales <= 10000.00) return "Good";
    else if (averageSales >= 4000.00 && averageSales <= 70000.00) return "Satisfactory";
    else if (averageSales < 4000.00)  return "Needs Improvement";

}
let averageSalesFrank = (calculateAverageSales(salesFiguresFrank)); //define averageSales for frank
console.log("Performance Rating, Frank:", determinePerformanceRating(averageSalesFrank)); //outputs Needs improvement

//Task 3 Develop findTopAndbottomPerformers function

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
    {employee:"David", totalSales: toFindTotalSales(salesFiguresDavid)}
];

function findTopAndBottomPerformers(salesPeople){
   const maxSales = Math.max(...salesPeople.map(people => people.totalSales)); //find max sales
const minSales = Math.min(...salesPeople.map(people => people.totalSales)); //find min sales

let topPerformer = salesPeople.find(people => people.totalSales === maxSales); //finds the salesPerson with the max sales
let bottomPerformer = salesPeople.find(people => people.totalSales === minSales); // finds the salesPerson with the min sales

return { topPerformer, bottomPerformer };
}

let{topPerformer, bottomPerformer}=findTopAndBottomPerformers(salesPeople); //calls on the function
console.log("Top Performer:", topPerformer); //outputs david as the top performer with 11070 total sales
console.log("Bottom Performer:",bottomPerformer);// outputs Maddy as the bottom performer with 140 total sales

//Task 4 Generate a Performance Report


function generatePerformanceReport(){
    let report = salesPeople.map(people =>{
     let averageSales =calculateAverageSales([people.totalSales]);//average sales for each employee
     let performanceRating = determinePerformanceRating(averageSales); //determines performance rating for each employee
     let { topPerformer, bottomPerformer } = findTopAndBottomPerformers(salesPeople) //identifies top and bottom performers
    
   return{

    name: people.employee,
    averageSales,
    performanceRating,
   };
    });
    return {
        report,
        topPerformer,
        bottomPerformer,

    };
}

let performanceReport = generatePerformanceReport(); //calls on function
console.log("Performance Report:", performanceReport); //outputs an array with bottom performer, top performer, and all employees average sales, performancerating, and name.

//task 5 test functions

//given dataset
const salesData = [
{ employee: 'Alice', totalSales:[12000, 15000, 13000] },
{ employee: 'Bob', totalSales:[7000, 6000, 7500] },
{ employee: 'Charlie', totalSales:[3000, 4000, 3500] },
{ employee:'diana', totalSales:[9000, 8500, 9200] },
];
const performanceRating = generatePerformanceReport(salesData); //inserts the salesData into the function that generates the performance report
console.log("Performance Report Group Two:", performanceRating); //outputs the performance report for gorup 2 which is the given data set