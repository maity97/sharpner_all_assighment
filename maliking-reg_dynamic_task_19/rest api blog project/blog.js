window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/887968c285104c068914fd25c20f3002/blogdata').then((res)=>{
        document.getElementById('count').value=res.data.length 
        res.data.forEach(element => {
            show_blog_details_onscreen(element)
        });
    }).catch((err)=>{
        console.log(err)
    })
})


 
 
let form=document.getElementById('form')
form.addEventListener('submit',store_data_incloud)
function store_data_incloud(e){
    
    e.preventDefault()
    
    let image=document.getElementById('imgurl').value;
    let title=document.getElementById('title').value;
    let blogdescription=document.getElementById('bd').value;
    let blog_details={
        image,
        title,
        blogdescription,

    };
    
    axios.post('https://crudcrud.com/api/887968c285104c068914fd25c20f3002/blogdata',blog_details).then((res)=>{
        
    show_blog_details_onscreen(res.data)
    document.getElementById('count').value++
    
    
    }).catch(err=>console.log(err))

}
 function show_blog_details_onscreen(blog_details){
    
    
  let outputarea=document.getElementById('add')
    let output=document.createElement('area')
    output.id=blog_details._id
    
    output.innerHTML=`<h3>${blog_details.title}</h3><img src=${blog_details.image} width=${200} height=${200}><p>${blog_details.blogdescription}</p>`

    let btn=document.createElement('input')
    btn.type='button'
    btn.value='delete'
    output.appendChild(btn)
    btn.onclick=()=>{
        let id=btn.parentElement.id
        axios.delete(`https://crudcrud.com/api/887968c285104c068914fd25c20f3002/blogdata/${id}`).then(res=>{
            document.getElementById('count').value--
        })

        outputarea.removeChild(output)
        
    }
    
    let editbtn=document.createElement('input')
    editbtn.type='button'
    editbtn.value='edit'
    output.appendChild(editbtn)
    editbtn.onclick=()=>{
        document.getElementById('imgurl').value=blog_details.image
        document.getElementById('title').value=blog_details.title
        document.getElementById('bd').value=blog_details.blogdescription
        document.getElementById('btn').value='edit'
        let id=editbtn.parentElement.id
        axios.delete(`https://crudcrud.com/api/887968c285104c068914fd25c20f3002/blogdata/${id}`).then(res=>{
            document.getElementById('count').value--
        })
        
        outputarea.removeChild(output)
    }
    
    outputarea.appendChild(output)
 }