window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/173977f05b684ffbb89d7e786ee2a657/productsdata').then((res)=>
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
    let  selling_price=document.getElementById('sl').value;
    let  product_name=document.getElementById('pn').value;

    //create an object of user setail
  let product_details={
      selling_price,
      product_name
  
  };
  //save to cloud
  axios.post('https://crudcrud.com/api/173977f05b684ffbb89d7e786ee2a657/productsdata',product_details).then((res)=>{
    user_detailsonscreen(res.data)
    console.log(res)
  }).catch((err)=>console.log(err))
  
    
  
  }
   function user_detailsonscreen(product_details)
   {
      let parentelement=document.getElementById('item');//go to ul element
      let childelement=document.createElement('li');//create li element
      childelement.id=product_details._id
      let networh=0;
      networh+=product_details.selling_price
      let firs_li=document.getElementById('total')
      firs_li.innerHTML+=networh
      childelement.textContent=product_details.selling_price+"-"+product_details.product_name
      parentelement.appendChild(childelement)//li element appended to ul element
      
    
       
      //create button 
      let btn=document.createElement('input');
      btn.type='button';
      btn.value='Delete'
     //button callback function
      btn.onclick =()=>
      {
        axios.delete(`https://crudcrud.com/api/173977f05b684ffbb89d7e786ee2a657/productsdata/${product_details._id}`)
          parentelement.removeChild(childelement);
      }
      childelement.appendChild(btn)
      
  
   }