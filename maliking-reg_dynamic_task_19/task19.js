window.addEventListener('DOMContentLoaded',()=>{
  axios.get('https://crudcrud.com/api/232f7ceb92aa4981b96538f259fb3a6f/appdata').then((res)=>
  {res.data.forEach((ele)=>user_detailsonscreen(ele))}).catch((err)=>{console.log(err);
 
 })
})
//we need dom contentloaded because domcontent loaded means your hole html code loaded if you donot use domcontentloaded
// your js code will run before ul loaded and yoy will get an error

//go to yhe form by id
let form=document.getElementById('addForm')
//if i submit what i wan to do
form.addEventListener('submit',storeIncloud)
function storeIncloud(e)
{
    e.preventDefault()
    //get value form input
  let  Name=document.getElementById('name').value;
  let  Email=document.getElementById('email').value;
  let PhNo=document.getElementById('phno').value;
  //create an object of user setail
let user_details={
    Name,
    Email,
    PhNo

};
//save to cloud
axios.post('https://crudcrud.com/api/232f7ceb92aa4981b96538f259fb3a6f/appdata',user_details).then((res)=>{
  user_detailsonscreen(res.data)
  console.log(res)
}).catch((err)=>console.log(err))

  //function to show user detail in the screen  
//user_detailsonscreen(user_details);

}
 function user_detailsonscreen(user_details)
 {
    let parentelement=document.getElementById('item');//go to ul element
    let childelement=document.createElement('li');//create li element
    childelement.textContent=user_details.Name+"-"+user_details.Email+"-"+user_details.PhNo;
    parentelement.appendChild(childelement)//li element appended to ul element
    //create button 
    let btn=document.createElement('input');
    btn.type='button';
    btn.value='Delete'
   //button callback function
    btn.onclick =()=>
    {
      axios.get('https://crudcrud.com/api/232f7ceb92aa4981b96538f259fb3a6f/appdata').then((res)=>{
        for(let i=0;i<res.data.length;i++)
        {
          if(res.data[i].Email===user_details.Email)
          {    let id=res.data[i]._id
            
            axios.delete(`https://crudcrud.com/api/232f7ceb92aa4981b96538f259fb3a6f/appdata/${id}`)
          }
        }
      })
        parentelement.removeChild(childelement);
    }
    childelement.appendChild(btn)
    //create editbutton
    let editbtn=document.createElement('input')
     editbtn.type='button';
     editbtn.value='Edit';
     editbtn.onclick =()=>
    {   //how to go to the edit 
         document.getElementById('name').value=user_details.Name
    document.getElementById('email').value=user_details.Email
    document.getElementById('phno').value=user_details.PhNo
    parentelement.removeChild(childelement)
    axios.get('https://crudcrud.com/api/232f7ceb92aa4981b96538f259fb3a6f/appdata').then((res)=>{
      for(let i=0;i<res.data.length;i++)
      {
        if(res.data[i].Email===user_details.Email)
        {    let id=res.data[i]._id
          
          axios.delete(`https://crudcrud.com/api/232f7ceb92aa4981b96538f259fb3a6f/appdata/${id}`,{
            
          
          }).then((data)=>console.log(data))
        }
      }
    })
        
    }
    childelement.appendChild(editbtn)

 }
 
