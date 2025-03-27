function process(data,callback){   // callback function to process user data
    console.log("The user data is :" , data);
    callback();
}

function info(callback){  // fetch data with callback
    let user={id:1,name:"janvi"}
    callback(user)
}

info((data)=>{
    process(data,()=>{
        console.log("user data fetch successfully...");
    })
})