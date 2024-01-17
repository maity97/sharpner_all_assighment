window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/bb533ff6e4bb4105b2a2323b829335b1/studentdata').then((res)=>{
        res.data.forEach(element => {
            show_students_details_onscreen(element)
        });
    }).catch((err)=>{
        console.log(err)
    })
})
let count=0


let form=document.getElementById('collect')
form.addEventListener('submit',store_data_incloud)
function store_data_incloud(e){
    e.preventDefault()
    
    document.getElementById('count').value=count
    let name=document.getElementById('name').value;
    let mobile=document.getElementById('mobile').value;
    let address=document.getElementById('address').value;
    let student_details={
        name,
        mobile,
        address,
    };
    
    axios.post("https://crudcrud.com/api/bb533ff6e4bb4105b2a2323b829335b1/studentdata",student_details).then((res)=>{
        count++
    show_students_details_onscreen(res.data)
    
    
    }).catch(err=>console.log(err))

}
 function show_students_details_onscreen(student_details){
    
    document.getElementById('count').value=count

    let parentelement=document.getElementById('student')
    let childelement=document.createElement('li')
    childelement.id=student_details._id
    childelement.innerHTML=`${student_details.name} ${student_details.mobile} ${student_details.address}`
    let btn=document.createElement('input')
    btn.type='button'
    btn.value='delete'
    childelement.appendChild(btn)
    btn.onclick=()=>{
        let id=btn.parentElement.id
        axios.delete(`https://crudcrud.com/api/bb533ff6e4bb4105b2a2323b829335b1/studentdata/${id}`)
        parentelement.removeChild(childelement)
    }
    let editbtn=document.createElement('input')
    editbtn.type='button'
    editbtn.value='edit'
    childelement.appendChild(editbtn)
    editbtn.onclick=()=>{
        document.getElementById('name').value=student_details.name
        document.getElementById('mobile').value=student_details.mobile
        document.getElementById('address').value=student_details.address
        let id=editbtn.parentElement.id
        axios.delete(`https://crudcrud.com/api/bb533ff6e4bb4105b2a2323b829335b1/studentdata/${id}`)
        parentelement.removeChild(childelement)
    }
    parentelement.appendChild(childelement)
 }