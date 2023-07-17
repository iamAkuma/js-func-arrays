const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2005},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


    // for(let i = 0; i<companies.length; i++){
    //     console.log(companies[i]);
    // }
  //forEach
    // companies.forEach(function(company) {
    //     console.log(company.name)

    // })

    //Get 21 and older ages
    //filter

//   let canDrink = [];
//   for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
//   }


//   const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
//   })

  //using arrow function
//   const canDrink = ages.filter(age => age >= 21 );
//   console.log(canDrink)


  //Filter retail companies

//   const retailComp = companies.filter(function(company) {
//     if(company.category==='Retail'){
//         return true;
//     }
//   })

//   const retailComp = companies.filter(companies => companies.category = 'Retail')
//   console.log(retailComp);

  //Filter companies from 80s

//   const eightiesComp = companies.filter(companies => (companies.start >= 1980 && companies.start <= "1990") )
//   console.log(eightiesComp)

//Get companies which lasted 10 or more years than that

// const tenOrMore = companies.filter(companies => 
//   ( companies.end - companies.start >= 10))
// console.log(tenOrMore)

//map

//Create array of company names
// const compNames = companies.map(function(company) {
//   return company.name;
// })

// const testMap = companies.map(function(company) {
//   return `${company.name}[${company.start} - ${company.end}]`;
// })

// const testMap = companies.map(company => 
//    `${company.name}[${company.start} - ${company.end}]`);

// console.log(testMap)


// const ageMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2)
// console.log(ageMap)

//SORT METHOD

//SORT COMPANIES BY START YEAR

// const sortComp = companies.sort(function(c1, c2){
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// })

// const sortedComp = companies.sort((a, b ) => (a.start > b.start ? 1 
//   : -1))

// console.log(sortedComp)

//SORT AGES
// const sortedAges = ages.sort((a,b) => a -b) //ascending
// const sortedAgesdesc = ages.sort((a,b) => b - a) //descending

// console.log(sortedAges)
// console.log(sortedAgesdesc)

//reduce

// let ageSum = 0;
// for(let i = 0; i< ages.length; i++) {
//   ageSum += ages[i]

// }

// const ageSum = ages.reduce((total, age) => total + age, 0)

// //Get total years for all the companies
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
// console.log(totalYears)

//Combine Methods

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a-b)
.reduce((a, b) => a + b, 0)

console.log(combined)