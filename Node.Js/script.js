const fs = require('node:fs');

fs.writeFile("hi.txt","hello",function(err){
    if(err) console.log(err);
    else console.log("Done")
})

// fs.appendFile("hi.txt","Kaise hooo",function(err){
//     if(err) console.log(err);
//     else console.log("Done")
// })

// fs.copyFile("hi.txt","./hello.txt",function(err){
//     if(err) console.log(err);
//     else console.log("Done")
// })

// fs.rename("hi.txt","kaisen.txt",function(err){
//     if(err) console.log(err);
//     else console.log("Done")
// })


