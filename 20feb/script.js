// Promises is used to handle asynchronous operations in JavaScript better than callback hell .
// Promises has 3 states : pending, fulfilled, rejected.
// if promise fulfilled then we can use .then() to get the result. 
//  if promise is rejected then we can use .catch() to handle the errors.

let pro = new Promise((resolve, reject) => {
    let proposal = "true"
    if (proposal==="true") {
        resolve()
    }
    else{
        rejected()
    }
})

pro.then(()=>console.log("Proposal accepted"))
  .catch(()=>console.log("Proposal rejected"))
