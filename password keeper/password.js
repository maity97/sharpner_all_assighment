 //let count=document.getElementById("tp")
 window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/43d5c3a7206a43c3a9cae1dd66d54d15/passworddata').then((res)=>{
        res.data.forEach((element)=>{
            document.getElementById('tp').value=res.data.length
            show_password_details_onscreen(element)
        }).catch((err)=>console.log(err))

    })
})
let form=document.getElementById('form')
let output=document.getElementById('ct')
form.addEventListener('submit',store_in_cloud)
function store_in_cloud(e)
{      e.preventDefault()
    let title=document.getElementById('tl').value;
    let password=document.getElementById('pd').value;
    let password_details={
        title,
        password
    }
    axios.post("https://crudcrud.com/api/43d5c3a7206a43c3a9cae1dd66d54d15/passworddata",password_details).then((res)=>{
        show_password_details_onscreen(res.data)
        document.getElementById('tp').value++
    }).catch((err)=>console.log(err))

}
function show_password_details_onscreen(password_details)
{
  
  let child=document.createElement('li')
  child.id=password_details._id
  child.textContent=password_details.title+"-"+password_details.password
  let dbtn=document.createElement('input')
  dbtn.type='button'
  dbtn.value='Delete'
  dbtn.onclick=()=>{
    let id=dbtn.parentElement.id;
    axios.delete(`https://crudcrud.com/api/43d5c3a7206a43c3a9cae1dd66d54d15/passworddata/${id}`).then(
        (res)=>{
            document.getElementById('tp').value--
        }
    ).catch((err)=>console.log(err))

    output.removeChild(dbtn.parentElement)
  }
  child.appendChild(dbtn)
  let ebtn=document.createElement('input')
  ebtn.type='button'
  ebtn.value='Edit'
  ebtn.onclick=()=>{
    document.getElementById('tl').value=password_details.title
    document.getElementById('pd').value=password_details.password
    let id=ebtn.parentElement.id;
    axios.delete(`https://crudcrud.com/api/43d5c3a7206a43c3a9cae1dd66d54d15/passworddata/${id}`).then(
        (res)=>{
            document.getElementById('tp').value--
        }
    ).catch((err)=>console.log(err))

    output.removeChild(ebtn.parentElement)
  }
  child.appendChild(ebtn)
  output.appendChild(child)

}
let filter=document.getElementById('sh')
filter.addEventListener('keyup',filter_password)
function filter_password(e){
    let text=e.target.value.toLowerCase();
    let fipass=document.getElementsByTagName('li')
    Array.from(fipass).forEach((item)=>{
        let tname=item.firstChild.textContent;
        if(tname.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    })
}