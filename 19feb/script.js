// Promise Creation.....

let myPromise = new Promise((res,rej)=>{
    let data = "This is my data.";
    if(data){
        res(data);
    }else{
        rej("error,no data found");
    }
});
// console.log(myPromise);






// Promise Handling.....

// myPromise.then((d)=>{
//     console.log(d);
// },(e)=>{
//     console.log(e)
// });

//    OR

myPromise
.then((d)=>{
     console.log(d);
})
.catch((err)=>{
    console.log(err)
})