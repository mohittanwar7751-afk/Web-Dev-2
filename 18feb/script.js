function login(email, password, cb){
    setTimeout(()=>{  
        cb({userId:email, isLoggedIn:true, message:"Login Successful"});     
    },3000);
}
// login("user@example.com", "password", (userDetails)=>{
//    console.log(userDetails);
// });



function getVideoList(user,cb){
    setTimeout(()=>{
        cb(['Video1', 'Video2', 'Video3']);
    },2000);
}


function getVideoDetails(video,cb){
    setTimeout(()=>{
        cb({title:video, duration:'2 mins'});
    },1000);
}



login("user@example.com", "password", (userDetails)=>{
   console.log(userDetails);
     getVideoList(userDetails.userId,(videoList)=>{
       console.log(videoList);
         getVideoDetails(videoList[0],(videoDetails)=>{
            console.log(videoDetails);
         });
   });      
});

