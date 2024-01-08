const posts =[
    {title:"post one",body: "this is post one"}, {title:"post two",body: "this is post two"}

]
function getpost() {
    setTimeout(()=>{
        let output="";
        posts.forEach((post, index)=>{
            console.log(post.title)
        });
        
    },1000)
}
function createpost(post) {
    return new Promise((resolve, reject)=>{
setTimeout(()=>{
    let pushedelement =posts.push(post);
    let error=false;
    if(!error)
    {
        resolve(pushedelement);
    }
    else{
        reject(`error:somting went wrong`)
    }2000
},2000)

    })
}
const user={
    username: "koushik",
    lastactivitytime : "10 of dec"
}
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}
 function updatelastactivitytime() {
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastactivitytime=new Date().getTime();
            resolve(user.lastactivitytime)
        },1000)
    })
}  
 /*function   userupdatepost() {
    
  Promise.all([createpost({title:'thirdpost',body:'this is third post'}).then(getpost),updatelastactivitytime()]).then(([createpostresolve,lastactivitytimeresolve]) =>{
       console.log(`${user.username} last activate time  ${lastactivitytimeresolve/1} `)
  }).then(deletePost).then(getpost).catch(err =>console.log(err))
}
userupdatepost()*/
async function fun()
{
    [pushedelement,user.lastactivitytime]= await Promise.all([createpost({title:'thirdpost',body:'this is third post'}),updatelastactivitytime()])

     console.log(`${user.username} last activate time  ${user.lastactivitytime} `)
    getpost()
     deletePost()
     getpost()


}
fun()