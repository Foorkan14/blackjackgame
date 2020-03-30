
// Array.forEach(function(element){
//     console.log(element)
// })
// const companies = [
//     {name: "Company One", category: "Finance", start: 1981, end: 2003},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//     ];
//     const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//     companies.forEach(function(companyName){
//         console.log(company.name)
//     })


    ///array.map
    // let arr=[0, 1, 2, 3, 4, 5]
    // let newArr=[]
    // let newArr=arr.map(function(element){
    //     return 2*element;
    // })
    // console.log(newArr);
    

    // ///

    // const companies = [
    //         {name: "Company One", category: "Finance", start: 1981, end: 2003},
    //         {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    //         {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    //         {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    //         {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    //         {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    //         {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    //         {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    //         {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
    //         ];

    //         let newCompanyList=[]
    //         let newCompanies=companies.map(function(company){
    //             company["start"] = company.start - 5;
    //             return company;
    //         })



    
    
    ///array.filter


// let arr = [45, 1, 23, 5, 2, 0]

// let newArr = arr.filter(function(){
//     return arrElement<10;
// })
// console.log(newArr)



////array.filter example 2


    const companies = [
            {name: "Company One", category: "Finance", start: 1981, end: 2003},
            {name: "Company Two", category: "Retail", start: 1992, end: 2008},
            {name: "Company Three", category: "Auto", start: 1999, end: 2007},
            {name: "Company Four", category: "Retail", start: 1989, end: 2010},
            {name: "Company Five", category: "Technology", start: 2009, end: 2014},
            {name: "Company Six", category: "Finance", start: 1987, end: 2010},
            {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
            {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
            {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
            ];

        let newCompanylist = companies.filter(function(company){

            return company.category = "Retail"
            })
        console.log(newCompanyList)



        ///Array.some


let arr=[0, 1, 2, 3, 4, 5]

let myBoolean = arr.some(function(num){
    return num<5;
})

console.log(myBoolean)
