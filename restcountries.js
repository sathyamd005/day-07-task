// 1.Get all the countries from the Asia continent /region using the Filter function
const xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();

xhr.responseType="json";
xhr.onload=function displayResult(){
    const countries=xhr.response;
    console.log(countries);
let asiacontinent=countries.filter((ele)=>{
return (ele.region==="Asia");
// });
// console.log(asiacontinent);
// }

// 2.Get all the countries with a population of less than 2 lakhs using Filter function
const xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();

xhr.responseType="json";
xhr.onload=function displayResult(){
    const countries=xhr.response;
let populationBelowTwo=countries.filter((element)=>{
    return (element.population<2000000);
})
console.log(populationBelowTwo);
}

// 3.Print the following details name, capital, flag using forEach 
const xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();

xhr.responseType="json";
xhr.onload=function displayResult(){
    const countries=xhr.response;
    countries.forEach(element => {
    console.log(element.name,element.capital,element.flag)
});
}

// 4.Print the total population of countries using reduce function

const xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();

xhr.responseType="json";
xhr.onload=function displayResult(){
    const countries=xhr.response;
   let totalpopulation=countries.reduce((accu,curr)=>accu+curr.population,0)
   console.log(totalpopulation);
}

// 5.Print the country which uses US Dollars as currency
const xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();

xhr.responseType="json";
xhr.onload=function displayResult(){
    const countries=xhr.response;
    var Dollars = countries.filter((element) => {
        for (let i in element.currencies) {
          if (element.currencies[i].code === "USD") {
            return element;
          }
        }
      });
      console.log(Dollars);
    };

