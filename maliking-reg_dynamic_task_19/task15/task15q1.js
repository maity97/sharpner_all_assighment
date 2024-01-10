/*console.log("person1: shows tikit")
console.log("person2: shows tikit")
const promisewifebringingtickets =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("ticket")
    },3000)
});

const getpopcorn = promisewifebringingtickets.then((t)=>{
    console.log("wife : i have tickets")
    console.log("husband : we should go in");
    console.log("wife : no iam hungry ")
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`)
    })
});
 const getbutter = getpopcorn.then((t)=>{
    console.log("husband : i got some popcorn")
    console.log("husband : we should go in")
    console.log("wife : i need butter on my popcorn ")
    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`)
    })
});
getbutter.then((t)=>console.log(t))
console.log("person4: shows tikit")
console.log("person5: shows tikit")
console.log("perosn 1 : shows ticket")
console.log("perosn 2 : shows ticket")
let premouvie = async () =>{
    const wifebringticket = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    })
    let getpopcorn = new Promise((resolve,reject)=>{
        resolve("popcorn")
    })
    let getbutter = new Promise((resolve,reject)=>{
        resolve('butter')
    })
    let getcoldrinks = new Promise((resolve, reject) => {
        resolve('colddrink')
    })
    let ticket = await wifebringticket;
    console.log(`wife : i have ${ticket}`)
    console.log("husband : we should go in");
    console.log("wife : no iam hungry ")
    let popcorn = await getpopcorn;
    console.log(`husband : i got some ${popcorn}`)
    console.log("husband : we should go in")
    console.log("wife : i need some butter on popcorn")
    let butter=await getbutter;
    console.log(`husband : i got some${butter} on popcorn`)
    console.log("husband : we should go")
    console.log("wife : no i need colddrink ")
    let colddrink=await getcoldrinks;
    console.log(`husband : i got some ${colddrink} `)
    console.log("wife : now we can go ")


    return  ticket
}
premouvie().then((m)=>console.log(`persons 3 : shows${m}`))


console.log("perosn 4 : shows ticket")
console.log("perosn 5 : shows ticket")*/
console.log("perosn 1 : shows ticket")
console.log("perosn 2 : shows ticket")
let premouvie = async () =>{
    const wifebringticket = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    })
    let getpopcorn = new Promise((resolve,reject)=>{
        resolve("popcorn")
    })
    let getbutter = new Promise((resolve,reject)=>{
        resolve('butter')
    })
    let getcoldrinks = new Promise((resolve, reject) => {
        resolve('colddrink')
    })
    let ticket = await wifebringticket;
    
    //use promise.all in async await
    let[popcorn,butter,colddrink]=await Promise.all([getpopcorn,getbutter,getcoldrinks])
    console.log(`${popcorn},${butter},${colddrink}`)


    return  ticket
}
premouvie().then((m)=>console.log(`persons 3 : shows${m}`))


console.log("perosn 4 : shows ticket")
console.log("perosn 5 : shows ticket")
/*const posts = [{title: 'POST1'}];
//Do not touch this function
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}
//Do not touch this function
function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000)
    }) 
}

//Do not touch this function
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                console.log(poppedElement.title)
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

//Modify the lines below and use .then and .catch smartly to get the correct output.
 async function fun ()  
 {
  try {  await create2ndPost()
     await deletePost()
     await create3rPost()
      await deletePost()
      await deletePost()
       await   deletePost()
         
       
 }
 catch(err)
 {
    console.log(err)
 }
 }
 fun()*/ 

