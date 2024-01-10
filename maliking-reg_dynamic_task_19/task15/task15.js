/*function buyacar(){
    setTimeout(()=>{console.log("buy a car")},5000)
};
function gotomanali(){
    setTimeout(()=>{console.log("go to manali")},3000)
};
function manalireached(){
    setTimeout(()=>{console.log("manali reached")},2000)
};
buyacar()
gotomanali()
manalireached()
//if we run the program the output will be
// manali reached
//go to manali
//buy a car 
//beacause js is synchronous language
//so we want that first buy a car then go to manali then reached manali
//so we have to do achynchronous task that will be dode by call back function*/

/*function buyacar(cb1,cb2){
    setTimeout(()=>{console.log("buy a car")
cb1(cb2)
},5000)
    
};
function gotomanali(cb2){
    setTimeout(()=>{console.log("go to manali") 
cb2()},3000)
};
function manalireached(){
    setTimeout(()=>{console.log("manali reached")},2000)
};
buyacar(gotomanali,manalireached)
//here we see that our code is so massey one function inside another function inside another function this is called callback hell
//that why in es6 introduce promise another reason is invesion of control that we donot who wrriten cb1,how many time later call cb2
//whether it call cb2 or not we looose the control of our code*/

function buyacar(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("buy a car") },5000)
     })
    };
function gotomanali(){
   return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("go to manali") 
    },3000)  
    })
    
};
function manalireached(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{reject(`error:acident happen in the way`)},2000)
    })
    
};
/*buyacar().then((msg1)=>{console.log(msg1)
    gotomanali().then((mag2)=>{console.log(mag2)
        manalireached().then((msg3)=>{
    console.log(msg3)
})

})


})*/
//now to solve the last messy part which is called promise hell we use async await for error handling try and catch

async function fun()
{
    try{ const msg1 = await buyacar();
    console.log(msg1);
    const msg2 = await gotomanali()
    console.log(msg2)
    const msg3 = await manalireached()
    console.log(msg3)
    }
    catch(err){console.log(err)

    }
}
fun()